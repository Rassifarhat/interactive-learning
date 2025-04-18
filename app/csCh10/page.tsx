'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { saveNoteForRevision } from '../utilities/saveNoteForRevision';
import { VoiceCapture } from '../components/VoiceCapture';
import { AnsweringChoices } from '../components/AnsweringChoices';
import { Assessment } from '../components/Assessment';

// ────────────────────────────────────────────────────────────────────────────────
// Type definitions (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

// ────────────────────────────────────────────────────────────────────────────────
// Chapter 14 – Programming & Data Representation (detailed version)
// Summaries reference the Cambridge International AS & A‑Level Computer Science
// (9618) specification style: Paper 2 – Fundamental Problem‑solving & Programming.
// ────────────────────────────────────────────────────────────────────────────────

// app/components/InfoRepresentationQuestions.tsx


const data: MindmapNode = {
  name: "What are the main themes covered in Chapter 10: Ethics, Copyright, Licensing, and AI?",
  id: "ch10-root",
  children: [
    {
      name: "What skills and understandings should you have by the end of this chapter?",
      id: "learning-objectives",
      summary: `By the end of this chapter you should be able to:
- show understanding of the need for and purpose of ethics as a computing professional
- show understanding of the need to act ethically and the impact of acting ethically or unethically for a given situation
- show understanding of the need for copyright legislation
- show understanding of the different types of software licencing and justify the use of a licence for a given situation
- show understanding of Artificial Intelligence (AI)`
    },
    {
      name: "What foundational definitions and viewpoints are presented in section 10.01 Ethics?",
      id: "ethics",
      children: [
        {
          name: "How is 'ethics' defined in different contexts?",
          id: "ethics-definitions",
          summary: `- Ethics is the field of moral science.
- Ethics are the moral principles by which any person is guided.
- Ethics are the rules of conduct recognised in a particular profession or area of human life.`
        },
        {
          name: "What viewpoints underpin moral principles in ethics?",
          id: "ethics-viewpoints",
          summary: `Moral principles concern right or wrong. Viewpoints: philosophical, religious, legal, pragmatic.`
        },
        {
          name: "What foundations inform rules of conduct in computing?",
          id: "ethics-foundation",
          summary: `Philosophical views of right and wrong and pragmatic views of what is common sense form the foundation for rules of conduct in computing.`
        }
      ]
    },
    {
      name: "Which professional bodies and codes guide computing professionals in 10.02?",
      id: "computing-professional",
      children: [
        {
          name: "What are the main sections of the BCS Code of Conduct?",
          id: "prof-org",
          children: [
            {
              name: "What does the BCS Code say about acting in the public interest?",
              id: "bcs-public-interest"
            },
            {
              name: "How does the BCS Code define professional competence and integrity?",
              id: "bcs-competence"
            },
            {
              name: "What duty to relevant authority is outlined by the BCS Code?",
              id: "bcs-duty-authority"
            },
            {
              name: "What responsibilities to the profession does the BCS Code impose?",
              id: "bcs-duty-profession"
            }
          ]
        },
        {
          name: "What principles are set out by the IEEE‑CS/ACM Joint Task Force?",
          id: "ieee-acm-principles",
          children: [
            {
              name: "How should computing professionals act in the public interest?",
              id: "ieee-principle1",
              summary: "Act consistently with the public interest."
            },
            {
              name: "What guidance is given for acting for clients and employers?",
              id: "ieee-principle2",
              summary: "Act in best interests of client and employer consistent with public interest."
            },
            {
              name: "What standard must products meet according to IEEE/ACM?",
              id: "ieee-principle3",
              summary: "Ensure products meet highest professional standards."
            },
            {
              name: "How should professionals maintain their judgment?",
              id: "ieee-principle4",
              summary: "Maintain integrity and independence in professional judgement."
            },
            {
              name: "What ethical approach to management is promoted?",
              id: "ieee-principle5",
              summary: "Promote an ethical approach to management."
            },
            {
              name: "How can professionals advance the reputation of the profession?",
              id: "ieee-principle6",
              summary: "Advance integrity and reputation of the profession."
            },
            {
              name: "What responsibilities do professionals have towards colleagues?",
              id: "ieee-principle7",
              summary: "Be fair to and supportive of colleagues."
            },
            {
              name: "How should professionals engage in lifelong learning?",
              id: "ieee-principle8",
              summary: "Participate in lifelong learning and promote ethical practice."
            }
          ]
        },
        {
          name: "How do the worked examples illustrate ethical decision‑making?",
          id: "worked-example",
          children: [
            {
              name: "What happened in Scenario 1 when the manager was challenged?",
              id: "scenario1",
              summary: "Challenge the manager; decision reversed; fully-tested product."
            },
            {
              name: "What was the outcome in Scenario 2?",
              id: "scenario2",
              summary: "Challenge the manager; protests ignored."
            },
            {
              name: "What occurred in Scenario 3 without a challenge?",
              id: "scenario3",
              summary: "No challenge; errors addressed via maintenance."
            },
            {
              name: "What did the engineer plan in Scenario 4?",
              id: "scenario4",
              summary: "Intend to raise matter later when errors evident."
            }
          ]
        },
        {
          name: "Why is documentation emphasized in professional codes?",
          id: "discussion-10-01",
          summary: `Search the eight principles for documentation mentions and discuss why documentation is emphasised so often.`
        }
      ]
    },
    {
      name: "What defines the public good in computing ethics (10.03)?",
      id: "public-good",
      children: [
        {
          name: "Which concepts illustrate the public good?",
          id: "public-good-concepts",
          summary: `References to health, safety, welfare of the public, public interest, good, concern.`
        },
        {
          name: "What real‑world failures highlight public good concerns?",
          id: "public-good-examples",
          children: [
            {
              name: "What caused the Ariane 5 Rocket disaster?",
              id: "ariane5",
              summary: "Explosion due to 64-bit to 16-bit conversion overflow; ~$500M lost."
            },
            {
              name: "How did unit mismatch lead to the Mars Climate Orbiter loss?",
              id: "mars-orbiter",
              summary: "Unit mismatch (imperial vs SI); ~$125M lost."
            },
            {
              name: "Why was the NHS IT Programme scrapped?",
              id: "nhs-it",
              summary: "Scrapped in 2011; £12B spent vs <£3B initial estimate."
            }
          ]
        },
        {
          name: "What discussion points arise from these public good cases?",
          id: "discussion-10-03",
          summary: `Search individual cases and consider justified actions for the public good.`
        }
      ]
    },
    {
      name: "What key concepts govern ownership and copyright (10.04)?",
      id: "copyright",
      children: [
        {
          name: "How is copyright formally defined?",
          id: "copyright-definition",
          summary: `Formal recognition of ownership; cannot apply to ideas; organisational exceptions.`
        },
        {
          name: "What works are protected by copyright?",
          id: "copyright-can",
          summary: `Literary, musical, film, recording, broadcast, art, computer programs.`
        },
        {
          name: "Why is copyright justified?",
          id: "copyright-justification",
          summary: `Time, effort, originality; fairness against unauthorized reproduction.`
        },
        {
          name: "What typical laws govern copyright?",
          id: "copyright-laws",
          summary: `Registration, duration, post-mortem policy, symbol usage.`
        },
        {
          name: "What implications arise from copyright law?",
          id: "copyright-implications",
          summary: `Usage permissions; ACM code example; library photocopy rights.`
        }
      ]
    },
    {
      name: "What types of software licensing are covered in 10.05?",
      id: "software-licensing",
      children: [
        {
          name: "What defines commercial software licensing?",
          id: "licensing-commercial",
          summary: `Vendor retains ownership; license defines terms; purchase options; shareware vs freeware; examples.`
        },
        {
          name: "How do open and free licensing models differ?",
          id: "licensing-open",
          summary: `OSI vs Free Software Foundation philosophies; copyleft; user freedoms; examples.`
        },
        {
          name: "What research task explores open‑licence software?",
          id: "task-10-01",
          summary: `Carry out a search to investigate software under an open licence.`
        }
      ]
    },
    {
      name: "What are the main areas of AI discussed in 10.06?",
      id: "ai",
      children: [
        {
          name: "How is AI defined and scoped?",
          id: "ai-overview",
          summary: `Interdisciplinary definition: performing tasks associated with human intelligence.`
        },
        {
          name: "What examples illustrate AI problem solving?",
          id: "ai-problem-solving",
          summary: `Chess systems; expert systems for diagnosis; limited creativity.`
        },
        {
          name: "How does AI apply to linguistics?",
          id: "ai-linguistics",
          summary: `Voice recognition/synthesis; automated help lines.`
        },
        {
          name: "What are key AI perception applications?",
          id: "ai-perception",
          summary: `Industrial robots; autonomous robots; driverless car parking examples.`
        },
        {
          name: "How is reasoning implemented in AI?",
          id: "ai-reasoning",
          summary: `Theorem proving; software verification against specs.`
        },
        {
          name: "What role does learning play in AI?",
          id: "ai-learning",
          summary: `Machine learning from large datasets; recommendation engines; spam filters.`
        },
        {
          name: "What impacts of AI are addressed?",
          id: "ai-impact",
          children: [
            {
              name: "What data and privacy concerns does AI raise?",
              id: "ai-impact-data",
              summary: `Mass data collection; risk of misuse.`
            },
            {
              name: "How does AI affect employment?",
              id: "ai-impact-employment",
              summary: `Automation impacts jobs; leisure vs job loss debate.`
            },
            {
              name: "What issues arise from autonomous AI systems?",
              id: "ai-impact-autonomous",
              summary: `Robot deployment in hazardous environments; environmental impact of manufacturing/disposal.`
            },
            {
              name: "What are the implications of AI in healthcare?",
              id: "ai-impact-healthcare",
              summary: `Expert systems aid doctors; implications if replaced by AI.`
            }
          ]
        },
        {
          name: "What recent AI developments should be discussed?",
          id: "discussion-ai",
          summary: `Have you seen recent developments in AI?`
        },
        {
          name: "How can youth engage with professional CS organisations?",
          id: "reflection-ai",
          summary: `Is there a professional CS organisation in your country? Encourage youth involvement?`
        },
        {
          name: "What are the chapter’s key takeaways?",
          id: "summary",
          summary: `- Definitions of ethics
- Professional conduct codes
- Software disasters and ethics
- Copyright principles
- Licensing models
- AI focus on autonomy and learning`
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterTenMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';

  const [panelMode, setPanelMode] = useState<PanelMode>('choice');
  const [transcript, setTranscript] = useState<string>('');


  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
  };
  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const w = 1200, h = 800;
      d3.select(svgRef.current).transition().duration(500).call(zoomRef.current.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(0.8));
    }
  };

  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const n = new Set(hiddenNodes);
    n.has(activeNode) ? n.delete(activeNode) : n.add(activeNode);
    setHiddenNodes(n);
    if (svgRef.current) d3.select(svgRef.current).selectAll(`text[data-id="${activeNode}"]`).attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null);
  };

  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children) for (const c of node.children) { const f = findName(id, c); if (f) return f; }
    return null;
  };
  const activeNodeName = findName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  const selectNode = (d: d3.HierarchyPointNode<MindmapNode>) => {
    setActiveNode(d.data.id);
    setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
    setSaveStatus('');
    setPanelMode('choice');
  };
  

  useEffect(() => {
    if (!svgRef.current) return;
  
    /* ────────── SVG scaffold ────────── */
    const width = 1200, height = 800,
          radius = Math.min(width, height) / 2 * 0.9;
  
    const svg = d3.select(svgRef.current)
      .attr('width',  width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
  
    svg.selectAll('*').remove();
    const g = svg.append('g');
  
    /* stop the default context‑menu that pops up on two‑finger click */
    svg.on('contextmenu', e => e.preventDefault());
  
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
      .domain(['0','1','2','3','4'])
      .range(['#4299E1','#48BB78','#F6AD55','#F56565','#9F7AEA']);
  
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
      .attr('r', d => d.data.id === 'chapter-14' ? 10 : 6)
      .style('cursor', 'pointer')
      .on('mouseover', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 12 : 8).attr('stroke', 'black'))
      .on('mouseout', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 10 : 6).attr('stroke', null));
  
    /* label */
    node.append('text')
      .attr('dy', '0.31em')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
      .attr('fill', d =>
        hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString()))
      .attr('transform', d => {
        const inv = -(d.x * 180 / Math.PI - 90);
        const h   = d.x < Math.PI ? 8 : -8;
        return `rotate(${inv}) translate(${h},0)`;
      })
      .text(d => d.data.name);
  
    /* ────────── drag (only if two‑finger/right click) ────────── */
    const dragBehaviour = d3
      .drag<SVGGElement, d3.HierarchyPointNode<MindmapNode>>()
      /*  filter keeps left‑clicks for opening, right‑clicks for drag  */
      .filter(event => event.button === 2 || event.buttons === 2)
      .on('start', function (event, d) {
        event.sourceEvent.stopPropagation();       // keep zoom idle
        event.defaultPrevented = true;             // suppress click later
        d3.select(this).raise();
  
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      })
      .on('drag', function (event, d) {
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      });
  
    node.call(dragBehaviour);               // ① drag attached first
  
    /* click attached AFTER drag so defaultPrevented check works */
    node.on('click', (event, d) => {
      if (event.defaultPrevented) return;   // ignore right‑drag sequence
  
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
  
    if (!activeNode) {
      setInfoContent('Click on any node for full exam‑ready notes.');
    }
  
    return () => { svg.on('.zoom', null); };
  
    /* ─── helpers ───────────────────────────────────────── */
    function syncToPointer(event: any, d: d3.HierarchyPointNode<MindmapNode>) {
      const t           = d3.zoomTransform(svgRef.current as SVGSVGElement);
      const [ux, uy]    = t.invert([event.x, event.y]);
      let angle         = Math.atan2(uy, ux) + Math.PI / 2;
      if (angle < 0) angle += 2 * Math.PI;
      d.x = angle;
      d.y = Math.hypot(ux, uy);
    }
    function moveNode(el: SVGGElement, d: d3.HierarchyPointNode<MindmapNode>) {
      d3.select(el)
        .attr('transform',
          `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);
  
      const inv = -(d.x * 180 / Math.PI - 90);
      const h   = d.x < Math.PI ? 8 : -8;
      d3.select(el).select('text')
        .attr('transform', `rotate(${inv}) translate(${h},0)`)
        .attr('text-anchor', d.x < Math.PI ? 'start' : 'end');
    }
  }, [hiddenNodes]);
    // dependencies stay unchanged
  
  

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 14: Programming &amp; Data Representation</h1>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full" />
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button onClick={handleZoomIn} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom in"><span className="text-xl">+</span></button>
            <button onClick={handleZoomOut} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom out"><span className="text-xl">−</span></button>
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Reset zoom"><span className="text-sm">Reset</span></button>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || 'Topic Information'} {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
             {activeNode && panelMode === 'choice' && (
  <AnsweringChoices
    onShowAnswer={() => setPanelMode('answer')}
    onTryAnswer={() => setPanelMode('recording')}
  />
)}

{panelMode === 'recording' && (
  <VoiceCapture onFinished={async (base64) => {
    const res = await fetch('/api/speechToText', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64: base64 })
    });
    const { text } = await res.json();
    setTranscript(text);
    setPanelMode('feedback');          // triggers <Assessment>
  }} />
)}

{panelMode === 'answer' && <p className="whitespace-pre-wrap">{infoContent}</p>}

{panelMode === 'feedback' && (
  <div className="prose prose-invert text-gray-300 whitespace-pre-line mb-4">
    <h3 className="text-lg font-semibold mb-1">Transcribed Answer:</h3>
    <p>{transcript}</p>
  </div>
)}
{panelMode === 'feedback' && (
  <>
    <Assessment
      transcript={transcript}
      modelAnswer={infoContent}
      question={activeNodeName ?? ''}
    />
    <p className="whitespace-pre-wrap mt-4">{infoContent}</p>
  </>
)}
            </div>

            {saveStatus && <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">{saveStatus}</div>}

            {activeNode && (panelMode === 'answer' || panelMode === 'feedback') && (
              <div className="space-y-2">
                {/* "I know this very well" button */}
                <button
                  onClick={toggleNodeVisibility}
                  className={`px-4 py-2 rounded-md font-medium w-full ${
                    isNodeHidden
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isNodeHidden
                    ? 'I need to review this, show it'
                    : 'I know this very well, hide it'}
                </button>

                {/* "I need to revise this later" button */}
                <button
                  onClick={() =>
                    saveNoteForRevision(
                      activeNodeName,
                      infoContent,
                      'computerScience',
                      10,
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

export default ChapterTenMindMap;