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
const data: MindmapNode = {
  "name": "Formulae, Equations & Amount of Substance",
  "id": "topic1_questions",
  "summary": "Exam-style questions for Topic\u00a01: Formulae, Equations & Amount of Substance",
  "children": [
    {
      "name": "Define an atom.",
      "id": "topic1-1",
      "summary": "The smallest part of an element that can take part in a chemical reaction; electrically neutral, contains a nucleus of protons and neutrons surrounded by electrons."
    },
    {
      "name": "Define an element.",
      "id": "topic1-2",
      "summary": "A substance made of only one type of atom; cannot be broken down into simpler substances by chemical methods."
    },
    {
      "name": "Define an ion.",
      "id": "topic1-3",
      "summary": "A charged particle formed when an atom or group of atoms loses or gains electrons; cations form by loss of electrons, anions by gain of electrons."
    },
    {
      "name": "Define a molecule.",
      "id": "topic1-4",
      "summary": "Two or more atoms covalently bonded in a fixed ratio, neutral overall."
    },
    {
      "name": "Define a compound.",
      "id": "topic1-5",
      "summary": "Substance made of two or more different elements chemically bonded; separable by chemical reactions."
    },
    {
      "name": "What is an empirical formula?",
      "id": "topic1-6",
      "summary": "The simplest whole-number ratio of atoms in a compound (e.g., CH\u2082O for glucose)."
    },
    {
      "name": "What is a molecular formula?",
      "id": "topic1-7",
      "summary": "The actual number of each type of atom in a molecule (e.g., C\u2086H\u2081\u2082O\u2086 for glucose)."
    },
    {
      "name": "What is the mole and what is Avogadro\u2019s constant? How do you calculate moles for solids and gases at r.t.p.?",
      "id": "topic1-8",
      "summary": "The mole is the unit for amount of substance; 1\u202fmol contains 6.02\u202f\u00d7\u202f10\u00b2\u00b3 particles. For solids/liquids: n = mass / Mr; for gases at r.t.p.: n = volume (dm\u00b3) / 24.0."
    },
    {
      "name": "How do you write balanced full and ionic equations including state symbols?",
      "id": "topic1-9",
      "summary": "Full equations show all species with state symbols (e.g., 2\u202fH\u2082(g) + O\u2082(g) \u2192 2\u202fH\u2082O(l)); ionic equations cancel spectator ions (e.g., Ag\u207a(aq) + Cl\u207b(aq) \u2192 AgCl(s))."
    },
    {
      "name": "Explain the terms relative atomic mass, relative molecular/formula mass, molar mass, and ppm.",
      "id": "topic1-10",
      "summary": "Ar = weighted average mass relative to \u00b9\u00b2C\u202f=\u202f12; Mr = sum of Ar; molar mass M = mass in g\u202fmol\u207b\u00b9; ppm = parts per million, mg\u202fkg\u207b\u00b9 or cm\u00b3\u202fkm\u207b\u00b3 for gases."
    },
    {
      "name": "How do you calculate concentration in mol\u202fdm\u207b\u00b3 and g\u202fdm\u207b\u00b3?",
      "id": "topic1-11",
      "summary": "c (mol\u202fdm\u207b\u00b3) = n / V; c (g\u202fdm\u207b\u00b3) = mass (g) / V."
    },
    {
      "name": "Describe the steps to determine empirical and molecular formula from experimental data.",
      "id": "topic1-12",
      "summary": "Convert mass or % to moles, divide by smallest mole value for empirical formula, then use Mr(empirical) to find molecular formula."
    },
    {
      "name": "Outline the steps for reacting\u2011mass (stoichiometry) calculations.",
      "id": "topic1-13",
      "summary": "Write balanced equation, calculate moles of known, use mole ratio, convert to mass or volume."
    },
    {
      "name": "How do you perform gas\u2011volume calculations at non\u2011r.t.p. conditions?",
      "id": "topic1-14",
      "summary": "Use ideal-gas equation pV = nRT (p in Pa, V in m\u00b3, T in K, R = 8.31 J\u202fmol\u207b\u00b9\u202fK\u207b\u00b9) or molar volume (24.0 dm\u00b3\u202fmol\u207b\u00b9 at r.t.p.)."
    },
    {
      "name": "Define percentage yield and atom economy and give their formulas.",
      "id": "topic1-15",
      "summary": "% yield = (actual / theoretical) \u00d7 100; atom economy = (Mr desired product / \u03a3Mr all products) \u00d7 100."
    },
    {
      "name": "How can experiments confirm formulae or equations? Include evaluation.",
      "id": "topic1-16",
      "summary": "Mass change and gas volume experiments; evaluate systematic and random errors such as leaks or temperature variations."
    },
    {
      "name": "Describe Core Practical 1 to measure the molar volume of a gas, including error discussion.",
      "id": "topic1-17",
      "summary": "React Mg with HCl, collect H\u2082, measure volume at r.t.p., calculate Vm; discuss precision, accuracy, systematic errors."
    },
    {
      "name": "How do you relate ionic and full equations to observations in test-tube experiments?",
      "id": "topic1-18",
      "summary": "Displacement: Zn + Cu\u00b2\u207a \u2192 Zn\u00b2\u207a + Cu (brown precipitate); acid+carbonate: 2H\u207a + CO\u2083\u00b2\u207b \u2192 CO\u2082 + H\u2082O (effervescence); precipitation: Ba\u00b2\u207a + SO\u2084\u00b2\u207b \u2192 BaSO\u2084(s) (white ppt)."
    }
  ]
}

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterFourteenMindMap: React.FC = () => {
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

  useEffect(() => {
    if (!svgRef.current) return;
    const width = 1200, height = 800, radius = Math.min(width, height) / 2 * 0.9;
    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height).attr('viewBox', [-width / 2, -height / 2, width, height]).style('font', '10px sans-serif');
    svg.selectAll('*').remove();
    const g = svg.append('g');
    const tree = d3.tree<MindmapNode>().size([2 * Math.PI, radius]).separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);
    const root = d3.hierarchy(data);
    const treeData = tree(root);

    g.append('g').attr('fill', 'none').attr('stroke', '#ccc').attr('stroke-opacity', 0.7).attr('stroke-width', 1.5)
      .selectAll('path').data(treeData.links()).join('path').attr('d',
        d3.linkRadial<any, d3.HierarchyPointNode<MindmapNode>>().angle(d => d.x).radius(d => d.y));

    const colour = d3.scaleOrdinal<string, string>().domain(['0', '1', '2', '3', '4']).range(['#4299E1', '#48BB78', '#F6AD55', '#F56565', '#9F7AEA']);

    const node = g.append('g').attr('stroke-linejoin', 'round').attr('stroke-width', 3)
      .selectAll('g').data(treeData.descendants()).join('g')
      .attr('transform', d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`).attr('data-id', d => d.data.id);

    node.append('circle').attr('fill', d => colour(d.depth.toString())).attr('r', d => d.data.id === 'chapter-14' ? 10 : 6)
      .style('cursor', 'pointer')
      .on('click', (_e, d: any) => { setActiveNode(d.data.id); setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`); setSaveStatus(''); })
      .on('mouseover', (e, d: any) => { d3.select(e.currentTarget as SVGCircleElement).attr('r', d.data.id === 'chapter-14' ? 12 : 8).attr('stroke', 'black'); })
      .on('mouseout', (e, d: any) => { d3.select(e.currentTarget as SVGCircleElement).attr('r', d.data.id === 'chapter-14' ? 10 : 6).attr('stroke', null); });

    node.append('text').attr('data-id', d => d.data.id)
      .attr('transform', d => { const inv = -(d.x * 180 / Math.PI - 90); const h = d.x < Math.PI ? 8 : -8; return `rotate(${inv}) translate(${h},0)`; })
      .attr('dy', '0.31em').attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
      .attr('fill', d => hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString()))
      .style('font-size', '10px').style('font-weight', 'bold').style('pointer-events', 'none')
      .text(d => d.data.name);

    if (!activeNode) setInfoContent('Click on any node for full exam‑ready notes.');
    const zoomer = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 3]).on('zoom', ev => { g.attr('transform', ev.transform.toString()); setZoom(ev.transform.k); });
    zoomRef.current = zoomer;
    svg.call(zoomer).on('dblclick.zoom', null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, 0).scale(0.8));
    return () => { svg.on('.zoom', null); };
  }, [hiddenNodes]);

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
                <button onClick={toggleNodeVisibility} className={`px-4 py-2 rounded-md font-medium w-full ${isNodeHidden ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white`}>
                  {isNodeHidden ? 'I need to review this, show it' : 'I know this very well, hide it'}
                </button>
                <button onClick={() => saveNoteForRevision(activeNodeName, infoContent, 'computerScience', 14, setSaveStatus, setIsSaving)} className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white">
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