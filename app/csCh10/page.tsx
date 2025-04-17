"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// Define TypeScript interfaces for our data structure
interface MindmapNode {
  name: string;
  id: string; // Unique identifier for the node
  summary?: string; // Optional detailed description
  children?: MindmapNode[];
}

// Define the main component
const CsCh10MindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  // Zoom control handlers
  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 1.3);
    }
  };

  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 0.7);
    }
  };

  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const width = 1200;
      const height = 800;
      d3.select(svgRef.current)
        .transition()
        .duration(500)
        .call(
          zoomRef.current.transform,
          d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
        );
    }
  };

  // Handle hiding/showing nodes
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

  // Function to save note for revision
  const saveNoteForRevision = async () => {
    if (!activeNode || !infoContent) return;
    const nodeName = findNodeName(activeNode, data);
    if (!nodeName) return;
    try {
      const timestamp = new Date().toISOString();
      const noteToSave = `# ${nodeName}\n${infoContent}\n\nSaved on: ${timestamp}\n\n---\n\n`;
      const response = await fetch('/api/saveNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: noteToSave }),
      });
      if (!response.ok) {
        throw new Error('Failed to save note');
      }
      setSaveStatus('Note saved!');
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    } catch (error) {
      console.error("Error saving note:", error);
      setSaveStatus('Error saving note');
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }
  };

  // Find the name of the active node for the title
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

  // Define the data structure for the mindmap (based on csCh10 markdown)
  const data: MindmapNode = {
    name: "Chapter 10: Ethics, Copyright, Licensing, and AI",
    id: "ch10-root",
    children: [
      {
        name: "Learning Objectives",
        id: "learning-objectives",
        summary: `By the end of this chapter you should be able to:
- show understanding of the need for and purpose of ethics as a computing professional
- show understanding of the need to act ethically and the impact of acting ethically or unethically for a given situation
- show understanding of the need for copyright legislation
- show understanding of the different types of software licencing and justify the use of a licence for a given situation
- show understanding of Artificial Intelligence (AI)`
      },
      {
        name: "10.01 Ethics",
        id: "ethics",
        children: [
          {
            name: "Definitions",
            id: "ethics-definitions",
            summary: `- Ethics is the field of moral science.
- Ethics are the moral principles by which any person is guided.
- Ethics are the rules of conduct recognised in a particular profession or area of human life.`
          },
          {
            name: "Moral Principles Viewpoints",
            id: "ethics-viewpoints",
            summary: `Moral principles concern right or wrong. Viewpoints: philosophical, religious, legal, pragmatic.`
          },
          {
            name: "Foundation for Rules of Conduct",
            id: "ethics-foundation",
            summary: `Philosophical views of right and wrong and pragmatic views of what is common sense form the foundation for rules of conduct in computing.`
          }
        ]
      },
      {
        name: "10.02 The Computing Professional",
        id: "computing-professional",
        children: [
          {
            name: "Professional Organisations",
            id: "prof-org",
            children: [
              {
                name: "BCS Code of Conduct",
                id: "bcs-code",
                children: [
                  { name: "Public Interest", id: "bcs-public-interest" },
                  { name: "Professional Competence & Integrity", id: "bcs-competence" },
                  { name: "Duty to Relevant Authority", id: "bcs-duty-authority" },
                  { name: "Duty to the Profession", id: "bcs-duty-profession" }
                ]
              },
              {
                name: "IEEE-CS/ACM Joint Task Force Principles",
                id: "ieee-acm-principles",
                children: [
                  { name: "1. PUBLIC", id: "ieee-principle1", summary: "Act consistently with the public interest." },
                  { name: "2. CLIENT AND EMPLOYER", id: "ieee-principle2", summary: "Act in best interests of client and employer consistent with public interest." },
                  { name: "3. PRODUCT", id: "ieee-principle3", summary: "Ensure products meet highest professional standards." },
                  { name: "4. JUDGEMENT", id: "ieee-principle4", summary: "Maintain integrity and independence in professional judgement." },
                  { name: "5. MANAGEMENT", id: "ieee-principle5", summary: "Promote an ethical approach to management." },
                  { name: "6. PROFESSION", id: "ieee-principle6", summary: "Advance integrity and reputation of the profession." },
                  { name: "7. COLLEAGUES", id: "ieee-principle7", summary: "Be fair to and supportive of colleagues." },
                  { name: "8. SELF", id: "ieee-principle8", summary: "Participate in lifelong learning and promote ethical practice." }
                ]
              }
            ]
          },
          {
            name: "Worked Example 10.01",
            id: "worked-example",
            children: [
              { name: "Scenario 1", id: "scenario1", summary: "Challenge the manager; decision reversed; fully-tested product." },
              { name: "Scenario 2", id: "scenario2", summary: "Challenge the manager; protests ignored." },
              { name: "Scenario 3", id: "scenario3", summary: "No challenge; errors addressed via maintenance." },
              { name: "Scenario 4", id: "scenario4", summary: "Intend to raise matter later when errors evident." }
            ]
          },
          {
            name: "Discussion: Documentation",
            id: "discussion-10-01",
            summary: `Search the eight principles for documentation mentions and discuss why documentation is emphasised so often.`
          }
        ]
      },
      {
        name: "10.03 The Public Good",
        id: "public-good",
        children: [
          {
            name: "Key References",
            id: "public-good-concepts",
            summary: `References to health, safety, welfare of the public, public interest, good, concern.`
          },
          {
            name: "Examples",
            id: "public-good-examples",
            children: [
              { name: "Ariane 5 Rocket", id: "ariane5", summary: "Explosion due to 64-bit to 16-bit conversion overflow; ~$500M lost." },
              { name: "Mars Climate Orbiter", id: "mars-orbiter", summary: "Unit mismatch (imperial vs SI); ~$125M lost." },
              { name: "NHS IT Programme", id: "nhs-it", summary: "Scrapped in 2011; £12B spent vs <£3B initial estimate." }
            ]
          },
          {
            name: "Discussion Point",
            id: "discussion-10-03",
            summary: `Search individual cases and consider justified actions for the public good.`
          }
        ]
      },
      {
        name: "10.04 Ownership & Copyright",
        id: "copyright",
        children: [
          { name: "Definition", id: "copyright-definition", summary: `Formal recognition of ownership; cannot apply to ideas; organisational exceptions.` },
          { name: "Applicable Works", id: "copyright-can", summary: `Literary, musical, film, recording, broadcast, art, computer programs.` },
          { name: "Justification", id: "copyright-justification", summary: `Time, effort, originality; fairness against unauthorized reproduction.` },
          { name: "Typical Laws", id: "copyright-laws", summary: `Registration, duration, post-mortem policy, symbol usage.` },
          { name: "Implications", id: "copyright-implications", summary: `Usage permissions; ACM code example; library photocopy rights.` }
        ]
      },
      {
        name: "10.05 Software Licensing",
        id: "software-licensing",
        children: [
          { name: "Commercial Software", id: "licensing-commercial", summary: `Vendor retains ownership; license defines terms; purchase options; shareware vs freeware; examples.` },
          { name: "Open/Free Licensing", id: "licensing-open", summary: `OSI vs Free Software Foundation philosophies; copyleft; user freedoms; examples.` },
          { name: "Task 10.01", id: "task-10-01", summary: `Carry out a search to investigate software under an open licence.` }
        ]
      },
      {
        name: "10.06 Artificial Intelligence",
        id: "ai",
        children: [
          { name: "Overview", id: "ai-overview", summary: `Interdisciplinary definition: performing tasks associated with human intelligence.` },
          { name: "Problem Solving", id: "ai-problem-solving", summary: `Chess systems; expert systems for diagnosis; limited creativity.` },
          { name: "Linguistics", id: "ai-linguistics", summary: `Voice recognition/synthesis; automated help lines.` },
          { name: "Perception", id: "ai-perception", summary: `Industrial robots; autonomous robots; driverless car parking examples.` },
          { name: "Reasoning", id: "ai-reasoning", summary: `Theorem proving; software verification against specs.` },
          { name: "Learning", id: "ai-learning", summary: `Machine learning from large datasets; recommendation engines; spam filters.` },
          {
            name: "Impact of AI",
            id: "ai-impact",
            children: [
              { name: "Data & Privacy", id: "ai-impact-data", summary: `Mass data collection; risk of misuse.` },
              { name: "Employment", id: "ai-impact-employment", summary: `Automation impacts jobs; more leisure vs job loss debate.` },
              { name: "Autonomous Systems", id: "ai-impact-autonomous", summary: `Robot deployment in hazardous environments; environmental impact of manufacturing/disposal.` },
              { name: "Healthcare", id: "ai-impact-healthcare", summary: `Expert systems aid doctors; implications if replaced by AI.` }
            ]
          },
          { name: "Discussion Point", id: "discussion-ai", summary: `Have you seen recent developments in AI?` },
          { name: "Reflection Point", id: "reflection-ai", summary: `Is there a professional CS organisation in your country? Encourage youth involvement?` },
          { name: "Summary", id: "summary", summary: `- Definitions of ethics
- Professional conduct codes
- Software disasters and ethics
- Copyright principles
- Licensing models
- AI focus on autonomy and learning` }
        ]
      }
    ]
  };

  const activeNodeName = findNodeName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  // Use effect hook for D3 logic
  useEffect(() => {
    if (!svgRef.current) return;
    const width = 1200;
    const height = 800;
    const radius = Math.min(width, height) / 2 * 1.2;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '6px sans-serif');
    svg.selectAll("*").remove();
    const g = svg.append('g');
    const treeLayout = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 2 : 4) / a.depth);
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
      .attr("r", d => d.data.id === "ch10-root" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus('');
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'ch10-root' ? 12 : 8)
          .attr('stroke', 'black');
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'ch10-root' ? 10 : 6)
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
      .style("font-size", "6px")
      .style("font-weight", "bold")
      .style("pointer-events", "none")
      .text((d: any) => d.data.name);
    if (!activeNode) {
      setInfoContent("Click on any node to see detailed information about that topic from Chapter 10.");
    }
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr("transform", event.transform.toString());
        setZoom(event.transform.k);
      });
    zoomRef.current = zoomBehavior;
    svg.call(zoomBehavior)
      .on("dblclick.zoom", null);
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
        <h1 className="text-xl font-semibold">Chapter 10: Ethics, Copyright, Licensing, and AI</h1>
      </div>
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Mindmap Area */}
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full"></svg>
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
              <span className="text-xl">-</span>
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
        {/* Information Panel */}
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
                <p>Click on a node in the mindmap to see detailed information about that topic from Chapter 10.</p>
              )}
            </div>
            {saveStatus && (
              <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">
                {saveStatus}
              </div>
            )}
            {activeNode && (
              <div className="space-y-2">
                <button
                  onClick={toggleNodeVisibility}
                  className={`px-4 py-2 rounded-md font-medium w-full ${
                    isNodeHidden
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {isNodeHidden
                    ? "I need to review this, show it"
                    : "I know this very well, hide it"}
                </button>
                <button
                  onClick={saveNoteForRevision}
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

export default CsCh10MindMap;