'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { saveNoteForRevision } from '../utilities/saveNoteForRevision';
import { VoiceCapture } from '../components/VoiceCapture';
import { AnsweringChoices } from '../components/AnsweringChoices';
import { Assessment } from '../components/Assessment';
import data from '../data/chemExtCh9';

// ─────────────────────────────────────────────────────────────────────
// Type definitions
// ─────────────────────────────────────────────────────────────────────
interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

const ChapterFourteenMindMap: React.FC = () => {
  const svgRef   = useRef<SVGSVGElement>(null);
  const zoomRef  = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const [infoContent, setInfoContent]     = useState<string>('');
  const [activeNode,  setActiveNode]      = useState<string | null>(null);
  const [zoom,        setZoom]            = useState<number>(1);
  const [hiddenNodes, setHiddenNodes]     = useState<Set<string>>(new Set());
  const [saveStatus,  setSaveStatus]      = useState<string>('');
  const [isSaving,    setIsSaving]        = useState<boolean>(false);
  const [transcript,  setTranscript]      = useState<string>('');

  type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';
  const [panelMode, setPanelMode] = useState<PanelMode>('choice');

  /* ───────────────────────── helpers ───────────────────────── */

  /** convert a screen‑space point (px,py) into polar coords (angle,r) */
  const polarFromScreen = (
    px: number,
    py: number,
    t: d3.ZoomTransform
  ): { angle: number; r: number } => {
    const [ux, uy] = t.invert([px, py]);      // user‑space
    let angle      = Math.atan2(uy, ux) + Math.PI / 2;
    if (angle < 0) angle += 2 * Math.PI;
    return { angle, r: Math.hypot(ux, uy) };
  };

  const handleZoomIn  = () =>
    svgRef.current && zoomRef.current &&
    d3.select(svgRef.current).transition().duration(300)
      .call(zoomRef.current.scaleBy, 1.3);

  const handleZoomOut = () =>
    svgRef.current && zoomRef.current &&
    d3.select(svgRef.current).transition().duration(300)
      .call(zoomRef.current.scaleBy, 0.7);

  const handleReset   = () => {
    if (!svgRef.current || !zoomRef.current) return;
    const w = 1200, h = 800;
    d3.select(svgRef.current).transition().duration(500)
      .call(zoomRef.current.transform,
            d3.zoomIdentity.translate(w / 2, h / 2).scale(0.8));
  };

  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const next = new Set(hiddenNodes);
    next.has(activeNode) ? next.delete(activeNode) : next.add(activeNode);
    setHiddenNodes(next);
    if (svgRef.current)
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${activeNode}"]`)
        .attr('fill', next.has(activeNode) ? '#2D3748' : null);
  };

  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children)
      for (const c of node.children) {
        const f = findName(id, c);
        if (f) return f;
      }
    return null;
  };
  const activeNodeName = findName(activeNode, data);
  const isNodeHidden   = activeNode ? hiddenNodes.has(activeNode) : false;

  // Storage key for hidden nodes
  const STORAGE_KEY = 'chemgraph-hidden-nodes-ch9';

  // Load hidden nodes from localStorage on component mount
  useEffect(() => {
    try {
      const savedNodes = localStorage.getItem(STORAGE_KEY);
      if (savedNodes) {
        const parsedNodes = JSON.parse(savedNodes);
        if (Array.isArray(parsedNodes)) {
          const validNodes = parsedNodes.filter(node => typeof node === 'string');
          if (validNodes.length > 0) {
            setHiddenNodes(new Set(validNodes));
          }
        }
      }
    } catch (err) {
      console.error('[DEBUG] Error loading hidden nodes from localStorage:', err);
    }
  }, []);

  // Save hidden nodes to localStorage whenever they change
  useEffect(() => {
    try {
      const nodesArray = Array.from(hiddenNodes);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nodesArray));
    } catch (err) {
      console.error('[DEBUG] Error saving hidden nodes to localStorage:', err);
    }
  }, [hiddenNodes]);

  useEffect(() => {
    if (!svgRef.current) return;

    /* ────────── SVG scaffold ────────── */
    const width = 1200, height = 800,
          radius = (Math.min(width, height) / 2) * 0.9;

    const svg = d3.select(svgRef.current)
      .attr('width',  width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');

    svg.selectAll('*').remove();
    const g = svg.append('g');

    svg.on('contextmenu', e => e.preventDefault());  // stop system menu

    /* ────────── radial tree layout ────────── */
    const root = d3.hierarchy(data);
    const treeData = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)(root);

    const linkGen = d3.linkRadial<
      d3.HierarchyPointLink<MindmapNode>,
      d3.HierarchyPointNode<MindmapNode>>()
        .angle(d => d.x)
        .radius(d => d.y);

    const linkGroup = g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-opacity', 0.7)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(treeData.links())
      .join('path')
      .attr('d', linkGen);

    /* ────────── nodes (group, circle, label) ────────── */
    const colour = d3.scaleOrdinal<string>()
      .domain(['0', '1', '2', '3', '4'])
      .range(['#4299E1', '#48BB78', '#F6AD55', '#F56565', '#9F7AEA']);

    const node = g.append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll<SVGGElement, d3.HierarchyPointNode<MindmapNode>>('g')
      .data(treeData.descendants())
      .join('g')
      .attr('data-id', d => d.data.id)
      .attr('transform', d =>
        `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);

    /* circle */
    node.append('circle')
      .attr('fill', d => colour(d.depth.toString()))
      .attr('r', d => (d.data.id === 'chapter-14' ? 10 : 6))
      .style('cursor', 'pointer')
      .on('mouseover', (e, d) =>
        d3.select(e.currentTarget)
          .attr('r', d.data.id === 'chapter-14' ? 12 : 8)
          .attr('stroke', 'black'))
      .on('mouseout', (e, d) =>
        d3.select(e.currentTarget)
          .attr('r', d.data.id === 'chapter-14' ? 10 : 6)
          .attr('stroke', null));

    /* label */
    node.append('text')
      .attr('dy', '0.31em')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('text-anchor', d => (d.x < Math.PI ? 'start' : 'end'))
      .attr('fill', d =>
        hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString()))
      .attr('transform', d => {
        const inv = -(d.x * 180 / Math.PI - 90);
        const h   = d.x < Math.PI ? 8 : -8;
        return `rotate(${inv}) translate(${h},0)`;
      })
      .text(d => d.data.name);

/* ────────── drag (two‑finger / right‑click) ────────── */
const dragBehaviour = d3
  .drag<SVGGElement, d3.HierarchyPointNode<MindmapNode>>()
  .filter(ev => ev.button === 2 || ev.buttons === 2)  // right‑click / two‑finger only
  .on('start', function(event, d) {
    event.sourceEvent.stopPropagation();
    event.defaultPrevented = true;
    d3.select(this).raise();
  })
  .on('drag', function(event, d) {
    // 1) Compute node's current local‐space coords:
    //    (we want the tip of the translate(r,0) after rotate)
    const theta = d.x - Math.PI/2;
    const x0    = d.y * Math.cos(theta);
    const y0    = d.y * Math.sin(theta);

    // 2) Turn those into SCREEN coords via the current zoom/pan:
    const t     = d3.zoomTransform(svgRef.current as SVGSVGElement);
    const [sx0, sy0] = t.apply([x0, y0]);

    // 3) Add the raw drag deltas (which are already in screen space):
    const sx1 = sx0 + event.dx;
    const sy1 = sy0 + event.dy;

    // 4) Invert back to LOCAL coords:
    const [ux1, uy1] = t.invert([sx1, sy1]);

    // 5) Convert to polar:
    let angle1 = Math.atan2(uy1, ux1) + Math.PI/2;
    if (angle1 < 0) angle1 += 2 * Math.PI;
    const r1 = Math.hypot(ux1, uy1);

    // 6) Update node data:
    d.x = angle1;
    d.y = Math.max(20, r1);   // prevent collapse through center

    // 7) Re‑draw this node:
    d3.select(this)
      .attr(
        'transform',
        `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`
      );

    // 8) Re‑orient its label:
    const inv = -(d.x * 180 / Math.PI - 90);
    const h   = d.x < Math.PI ? 8 : -8;
    d3.select(this).select('text')
      .attr('transform', `rotate(${inv}) translate(${h},0)`)
      .attr('text-anchor', d.x < Math.PI ? 'start' : 'end');

    // 9) Re‑draw links:
    linkGroup.attr('d', linkGen);
  });



    node.call(dragBehaviour);

    node.on('click', (event, d) => {
      if (event.defaultPrevented) return;  // ignore right‑drag
      setActiveNode(d.data.id);
      setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
      setSaveStatus('');
      setPanelMode('choice');
    });

    /* ────────── zoom / pan ────────── */
    const zoomer = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', ev => {
        g.attr('transform', ev.transform.toString());
        setZoom(ev.transform.k);
      });

    zoomRef.current = zoomer;
    svg.call(zoomer).on('dblclick.zoom', null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, 0).scale(0.8));

    if (!activeNode)
      setInfoContent('Click on any node for full exam‑ready notes.');

    return () => void svg.on('.zoom', null);
  }, [hiddenNodes]);   // deps unchanged

  // Apply hidden node styles after initial render or changes
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Apply hidden styles to all hidden nodes
    hiddenNodes.forEach(nodeId => {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${nodeId}"]`)
        .attr('fill', '#2D3748');
    });
  }, [hiddenNodes]);

  /* ───────────────────────── render ───────────────────────── */
  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">
          Topic&nbsp;14: Programming &amp; Data Representation
        </h1>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* SVG area */}
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full" />
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button
              onClick={handleZoomIn}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Zoom in"
            >
              <span className="text-xl">+</span>
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Zoom out"
            >
              <span className="text-xl">−</span>
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Reset zoom"
            >
              <span className="text-sm">Reset</span>
            </button>
          </div>
        </div>

        {/* Side panel */}
        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || 'Topic Information'}{' '}
              {isNodeHidden && (
                <span className="text-sm text-gray-400 ml-2">(Hidden)</span>
              )}
            </h2>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
              {activeNode && panelMode === 'choice' && (
                <AnsweringChoices
                  onShowAnswer={() => setPanelMode('answer')}
                  onTryAnswer={() => setPanelMode('recording')}
                />
              )}

              {panelMode === 'recording' && (
                <VoiceCapture
                  onFinished={async base64 => {
                    const res = await fetch('/api/speechToText', {
                      method: 'POST',
                      headers: { 'content-type': 'application/json' },
                      body: JSON.stringify({ audioBase64: base64 })
                    });
                    const { text } = await res.json();
                    setTranscript(text);
                    setPanelMode('feedback');
                  }}
                />
              )}

              {panelMode === 'answer' && (
                <p className="whitespace-pre-wrap">{infoContent}</p>
              )}

              {panelMode === 'feedback' && (
                <>
                  <div className="prose prose-invert text-gray-300 whitespace-pre-line mb-4">
                    <h3 className="text-lg font-semibold mb-1">
                      Transcribed Answer:
                    </h3>
                    <p>{transcript}</p>
                  </div>
                  <Assessment
                    transcript={transcript}
                    modelAnswer={infoContent}
                    question={activeNodeName ?? ''}
                  />
                  <p className="whitespace-pre-wrap mt-4">{infoContent}</p>
                </>
              )}
            </div>

            {saveStatus && (
              <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">
                {saveStatus}
              </div>
            )}

            {activeNode &&
              (panelMode === 'answer' || panelMode === 'feedback') && (
                <div className="space-y-2">
                  <button
                    onClick={toggleNodeVisibility}
                    className={`px-4 py-2 rounded-md font-medium w-full ${
                      isNodeHidden
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-green-600 hover:bg-green-700'
                    } text-white`}
                  >
                    {isNodeHidden
                      ? 'I need to review this, show it'
                      : 'I know this very well, hide it'}
                  </button>

                  <button
                    onClick={() =>
                      saveNoteForRevision(
                        activeNodeName,
                        infoContent,
                        'chemistry',
                        9,
                        setSaveStatus,
                        setIsSaving
                      )
                    }
                    className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white"
                  >
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