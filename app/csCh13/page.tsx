"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

const CsCh13MindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
    }
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
    }
  };
  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const width = 1200;
      const height = 800;
      d3.select(svgRef.current)
        .transition()
        .duration(500)
        .call(zoomRef.current.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8));
    }
  };
  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const newHiddenNodes = new Set(hiddenNodes);
    if (hiddenNodes.has(activeNode)) {
      newHiddenNodes.delete(activeNode);
    } else {
      newHiddenNodes.add(activeNode);
    }
    setHiddenNodes(newHiddenNodes);
    if (svgRef.current) {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${activeNode}"]`)
        .attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null);
    }
  };
  const saveNoteForRevision = async () => {
    if (!activeNode || !infoContent) return;
    const nodeName = findNodeName(activeNode, data);
    if (!nodeName) return;
    try {
      const timestamp = new Date().toISOString();
      const noteToSave = `# ${nodeName}\n${infoContent}\n\nSaved on: ${timestamp}\n\n---\n\n`;
      const response = await fetch('/api/saveNote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: noteToSave }),
      });
      if (!response.ok) throw new Error('Failed to save note');
      setSaveStatus('Note saved!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('Error saving note');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };
  const findNodeName = (nodeId: string | null, nodeData: MindmapNode): string | null => {
    if (!nodeId) return null;
    if (nodeData.id === nodeId) return nodeData.name;
    if (nodeData.children) {
      for (const child of nodeData.children) {
        const found = findNodeName(nodeId, child);
        if (found) return found;
      }
    }
    return null;
  };

  // Mind map data for Chapter 13
  const data: MindmapNode = {
    name: "Chapter 13: Data Types & Structures",
    id: "ch13-root",
    children: [
      {
        name: "Learning Objectives",
        id: "learning-objectives",
        summary: `By the end of this chapter you should be able to:\n- Select and use appropriate data types (INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY, FILE)\n- Understand record structures and use pseudocode for them\n- Use arrays, sort/search arrays, and understand bounds\n- Understand files, ADTs, stacks, queues, and linked lists\n- Implement and justify the use of stacks, queues, and linked lists`
      },
      {
        name: "Primitive Data Types",
        id: "primitive-data-types",
        summary: `INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE. Atomic types built-in to languages.`
      },
      {
        name: "Further Data Types",
        id: "further-data-types",
        summary: `STRING (sequence of characters; empty string is valid)\nDATE (day/month/year; supports date arithmetic).`
      },
      {
        name: "Record Structures",
        id: "record-structures",
        summary: `User-defined/composite types for grouping different data types under one identifier (e.g., a person record). Declared in pseudocode and used for storing and processing related data.`
      },
      {
        name: "Arrays",
        id: "arrays",
        children: [
          {
            name: "One-dimensional Arrays",
            id: "one-dimensional-arrays",
            summary: `Declare as ARRAY[lower:upper] OF type; single-indexed list.`
          },
          {
            name: "Two-dimensional Arrays",
            id: "two-dimensional-arrays",
            summary: `Declare as ARRAY[rowLB:rowUB][colLB:colUB] OF type; matrix.`
          },
          {
            name: "Array Processing",
            id: "array-processing",
            summary: `Sorting (bubble sort) and searching (linear search).`
          }
        ]
      },
      {
        name: "Files",
        id: "files",
        summary: `Used for persistent storage. Pseudocode for reading/writing text files, using EOF markers for loops.`
      },
      {
        name: "Abstract Data Types (ADT)",
        id: "adt",
        summary: `A collection of data and operations. Examples: stack, queue, linked list. Used for organizing and processing data.`,
        children: [
          {
            name: "Stack",
            id: "stack",
            summary: `LIFO structure. Key features: push, pop, top/peek. Used for undo, parsing, etc. Can be implemented using arrays.`
          },
          {
            name: "Queue",
            id: "queue",
            summary: `FIFO structure. Key features: enqueue, dequeue, front/rear. Used for scheduling, buffering, etc. Can be implemented using arrays.`
          },
          {
            name: "Linked List",
            id: "linked-list",
            summary: `Nodes with data and pointers. Flexible, allows dynamic memory. Used for dynamic data, implemented with arrays/records.`
          }
        ]
      }
    ]
  };

  const activeNodeName = findNodeName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  useEffect(() => {
    if (!svgRef.current) return;
    const width = 1200;
    const height = 800;
    const radius = Math.min(width, height) / 2 * 0.9;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
    svg.selectAll("*").remove();
    const g = svg.append('g');
    const treeLayout = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);
    const root = d3.hierarchy(data);
    const treeData = treeLayout(root);
    g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-opacity", 0.7)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(treeData.links())
      .join("path")
      .attr("d", d3.linkRadial<any, d3.HierarchyPointNode<MindmapNode>>()
        .angle(node => node.x)
        .radius(node => node.y));
    const colorScale = d3.scaleOrdinal<string, string>()
      .domain(["0", "1", "2", "3", "4"])
      .range(["#4299E1", "#48BB78", "#F6AD55", "#F56565", "#9F7AEA"]);
    const node = g.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll("g")
      .data(treeData.descendants())
      .join("g")
      .attr("transform", d => `rotate(${(d.x * 180 / Math.PI - 90)}) translate(${d.y},0)`)
      .attr("data-id", d => d.data.id);
    node.append("circle")
      .attr("fill", (d: any) => colorScale(d.depth.toString()))
      .attr("r", d => d.data.id === "ch13-root" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus('');
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'ch13-root' ? 12 : 8)
          .attr('stroke', 'black');
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'ch13-root' ? 10 : 6)
          .attr('stroke', null);
      });
    node.append("text")
      .attr("data-id", d => d.data.id)
      .attr("transform", (d: any) => {
        const inverseRotation = -(d.x * 180 / Math.PI - 90);
        const horizontalOffset = d.x < Math.PI ? 8 : -8;
        return `rotate(${inverseRotation}) translate(${horizontalOffset}, 0)`;
      })
      .attr("dy", "0.31em")
      .attr("text-anchor", (d: any) => d.x < Math.PI ? "start" : "end")
      .attr("fill", (d: any) => hiddenNodes.has(d.data.id) ? "#2D3748" : colorScale(d.depth.toString()))
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .text((d: any) => d.data.name);
    if (!activeNode) {
      setInfoContent("Click on any node to see detailed information about that topic from Chapter 13.");
    }
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr("transform", event.transform.toString());
        setZoom(event.transform.k);
      });
    zoomRef.current = zoomBehavior;
    svg.call(zoomBehavior).on("dblclick.zoom", null);
    const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.8);
    svg.call(zoomBehavior.transform, initialTransform);
    return () => {
      if (svgRef.current) {
        svg.on('.zoom', null);
      }
    };
  }, [hiddenNodes]);

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Chapter 13: Data Types & Structures</h1>
      </div>
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full"></svg>
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button onClick={handleZoomIn} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom in"><span className="text-xl">+</span></button>
            <button onClick={handleZoomOut} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom out"><span className="text-xl">-</span></button>
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Reset zoom"><span className="text-sm">Reset</span></button>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || "Topic Information"}
              {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
              {infoContent ? (
                <p>{infoContent}</p>
              ) : (
                <p>Click on a node in the mindmap to see detailed information about that topic from Chapter 13.</p>
              )}
            </div>
            {saveStatus && (
              <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">{saveStatus}</div>
            )}
            {activeNode && (
              <div className="space-y-2">
                <button onClick={toggleNodeVisibility} className={`px-4 py-2 rounded-md font-medium w-full ${isNodeHidden ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`}>
                  {isNodeHidden ? "I need to review this, show it" : "I know this very well, hide it"}
                </button>
                <button onClick={saveNoteForRevision} className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white">
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

export default CsCh13MindMap;