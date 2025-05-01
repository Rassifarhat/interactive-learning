"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { saveNoteForRevision } from "../utilities/saveNoteForRevision";
import { VoiceCapture } from "../components/VoiceCapture";
import { AnsweringChoices } from "../components/AnsweringChoices";
import { Assessment } from "../components/Assessment";
import data from "../data/chemExtCh8";

/* ────────────────────────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────────────────────── */
export interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
  /** internal fields for collapse logic */
  _children?: MindmapNode[];
  _collapsed?: boolean;
}

/* ────────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
/** Recursively collapse every branch except the root so the tree starts clean */
const markCollapsed = (node: MindmapNode) => {
  if (node.children && node.children.length) {
    node._children = node.children;
    node.children = [];
    node._collapsed = true;
    node._children.forEach(markCollapsed);
  }
};

/** Deep-clone JSON so React mutations don’t touch import */
const getRootData = (): MindmapNode => {
  const cloned: MindmapNode = JSON.parse(JSON.stringify(data));
  markCollapsed(cloned);
  return cloned;
};

/* ────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────── */
const ChapterFourteenMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  /* ───────── state ───────── */
  const [rootData] = useState<MindmapNode>(getRootData);
  const [infoContent, setInfoContent] = useState<string>("");
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");
  type PanelMode = "choice" | "answer" | "recording" | "feedback";
  const [panelMode, setPanelMode] = useState<PanelMode>("choice");

  /* localStorage hidden nodes */
  const STORAGE_KEY = "chemgraph-hidden-nodes-ch8";
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setHiddenNodes(new Set(JSON.parse(saved)));
    } catch (e) {
      console.error("[hidden] load", e);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...hiddenNodes]));
    } catch (e) {
      console.error("[hidden] save", e);
    }
  }, [hiddenNodes]);

  /* ───────────────── D3 RENDER ───────────────── */
  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1200;
    const height = 800;
    const row = 30;
    const levelGap = 220;
    const marginLeft = 40;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [-marginLeft, 0, width + marginLeft, height])
      .style("font", "12px sans-serif")
      .style("user-select", "none");

    svg.selectAll("*").remove();
    const g = svg.append("g");

    /* zoom */
    const zoomer = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (ev) => {
        g.attr("transform", ev.transform.toString());
        setZoom(ev.transform.k);
      });
    zoomRef.current = zoomer;
    svg.call(zoomer).on("dblclick.zoom", null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, height / 2).scale(1));

    /* colours */
    const colour = d3
      .scaleOrdinal<string>()
      .domain(["0", "1", "2", "3", "4"])
      .range(["#4299E1", "#48BB78", "#F6AD55", "#F56565", "#9F7AEA"]);

    const update = (source?: d3.HierarchyNode<MindmapNode>) => {
      const root = d3.hierarchy(rootData);
      d3.tree<MindmapNode>().nodeSize([row, levelGap])(root);

      /* links */
      const linkGen = d3
        .linkHorizontal<d3.HierarchyPointLink<MindmapNode>, d3.HierarchyPointNode<MindmapNode>>()
        .x((d) => d.y)
        .y((d) => d.x);

      const links = g
        .selectAll<SVGPathElement, d3.HierarchyPointLink<MindmapNode>>("path.link")
        .data(root.links(), (d: any) => d.target.data.id);

      links.join(
        (enter) =>
          enter
            .append("path")
            .attr("class", "link")
            .attr("fill", "none")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0)
            .attr("stroke-width", 1.4)
            .attr("d", (d: any) => linkGen(d as any))
            .transition()
            .attr("stroke-opacity", 0.7),
        (upd) => upd.transition().attr("d", (d: any) => linkGen(d as any)),
        (exit) => exit.transition().attr("stroke-opacity", 0).remove()
      );

      /* nodes */
      const nodes = g
        .selectAll<SVGGElement, d3.HierarchyPointNode<MindmapNode>>("g.node")
        .data(root.descendants(), (d: any) => d.data.id);

      const nodeEnter = nodes
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .style("cursor", "pointer");

      nodeEnter
        .append("circle")
        .attr("r", 6)
        .attr("fill", (d) => colour(d.depth.toString()))
        .attr("stroke", "#111");

      nodeEnter
        .append("text")
        .attr("dy", "0.31em")
        .attr("x", 10)
        .attr("font-weight", "bold")
        .attr("fill", (d) => (hiddenNodes.has(d.data.id) ? "#2D3748" : colour(d.depth.toString())))
        .text((d) => d.data.name);

      /* merged selection for events & position */
      const allNodes = nodeEnter.merge(nodes as any);

      allNodes
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .on("click", (event, d) => {
          if (event.altKey || event.detail === 2) {
            if (d.data._collapsed) {
              d.data.children = d.data._children;
              d.data._collapsed = false;
            } else if (d.data.children && d.data.children.length) {
              d.data._children = d.data.children;
              d.data.children = [];
              d.data._collapsed = true;
            }
            update(d as d3.HierarchyNode<MindmapNode>);
          } else if (event.detail === 1) {
            setActiveNode(d.data.id);
            setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
            setPanelMode("choice");
          }
        });

      nodes.exit().transition().attr("opacity", 0).remove();
    };

    update();
  }, [rootData, hiddenNodes]);

  /* helper find name */
  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children)
      for (const c of node.children) {
        const f = findName(id, c);
        if (f) return f;
      }
    if (node._children)
      for (const c of node._children) {
        const f = findName(id, c);
        if (f) return f;
      }
    return null;
  };
  const activeNodeName = findName(activeNode, rootData);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  /* zoom buttons */
  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.25);
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.8);
  };
  const handleReset = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(400).call(zoomRef.current.transform, d3.zoomIdentity.translate(0, 400).scale(1));
  };

  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const next = new Set(hiddenNodes);
    next.has(activeNode) ? next.delete(activeNode) : next.add(activeNode);
    setHiddenNodes(next);
  };

  /* ───────────────────────────── RENDER ───────────────────────────── */
  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      {/* HEADER */}
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 14: Programming & Data Representation</h1>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* SVG AREA */}
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full" />

          {/* ZOOM CONTROLS */}
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button onClick={handleZoomIn} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom in"><span className="text-xl">+</span></button>
            <button onClick={handleZoomOut} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom out"><span className="text-xl">−</span></button>
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Reset"><span className="text-sm">Reset</span></button>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || "Topic Information"}{" "}
              {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
              {activeNode && panelMode === "choice" && (
                <AnsweringChoices onShowAnswer={() => setPanelMode("answer")} onTryAnswer={() => setPanelMode("recording")} />
              )}

              {panelMode === "recording" && (
                <VoiceCapture
                  onFinished={async (base64) => {
                    const res = await fetch("/api/speechToText", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ audioBase64: base64 }) });
                    const { text } = await res.json();
                    setTranscript(text);
                    setPanelMode("feedback");
                  }}
                />
              )}

              {panelMode === "answer" && <p className="whitespace-pre-wrap">{infoContent}</p>}

              {panelMode === "feedback" && (
                <>
                  <div className="prose prose-invert text-gray-300 whitespace-pre-line mb-4">
                    <h3 className="text-lg font-semibold mb-1">Transcribed Answer:</h3>
                    <p>{transcript}</p>
                  </div>
                  <Assessment transcript={transcript} modelAnswer={infoContent} question={activeNodeName ?? ""} />
                  <p className="whitespace-pre-wrap mt-4">{infoContent}</p>
                </>
              )}
            </div>

            {saveStatus && <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">{saveStatus}</div>}

            {activeNode && (panelMode === "answer" || panelMode === "feedback") && (
              <div className="space-y-2">
                <button onClick={toggleNodeVisibility} className={`px-4 py-2 rounded-md font-medium w-full ${isNodeHidden ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"} text-white`}>
                  {isNodeHidden ? "I need to review this, show it" : "I know this very well, hide it"}
                </button>

                <button onClick={() => saveNoteForRevision(activeNodeName, infoContent, "chemistry", 8, setSaveStatus, setIsSaving)} className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white">
                  I need to revise this later, save it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterFourteenMindMap;
