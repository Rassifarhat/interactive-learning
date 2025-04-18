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
  name: "What topics are covered in Chapter 4 on Boolean logic, gates, and circuits?",
  id: "logic-gates-circuits",
  summary: "Chapter 4 explores Boolean logic, logic gates, and logic circuits. It covers the construction and interpretation of truth tables, understanding logic gate functions, building logic circuits from problem statements, and creating logic expressions.",
  children: [
    {
      name: "What is Boolean logic and why is it fundamental to digital circuits?",
      id: "boolean-logic",
      summary: "Boolean logic deals with values that can be only TRUE or FALSE. In computing, these are represented as 1 (TRUE) and 0 (FALSE). Boolean logic provides the foundation for digital circuit design and computer operations through logic expressions and operators.",
      children: [
        {
          name: "What is a logic proposition and how is it evaluated?",
          id: "logic-propositions",
          summary: "A logic proposition is a statement that can have only one of two possible Boolean values: TRUE or FALSE. For example, 'Colombo is further north than Singapore' is a logic proposition that can be evaluated as either TRUE or FALSE (in this case, TRUE)."
        },
        {
          name: "How do problem statements use propositions and operators to define outcomes?",
          id: "problem-statements",
          summary: "Problem statements combine two or more logic propositions with operators to define conditions for an outcome. For example: 'You should take an umbrella if it is raining or if the weather forecast is for rain later.' This statement contains two logic propositions (highlighted) and defines when the outcome (taking an umbrella) should occur."
        },
        {
          name: "How are logic expressions formed from problem statements and what are they used for?",
          id: "logic-expressions",
          summary: "A logic expression combines logic propositions using Boolean operators. Any problem statement can be converted into a formal logic expression, which can then be used to create a logic circuit or truth table. For example, 'Take_umbrella = TRUE IF (raining = TRUE) OR (rain_forecast = TRUE)' is a logic expression derived from a problem statement."
        }
      ]
    },
    {
      name: "What are Boolean operators and how do they build complex expressions?",
      id: "boolean-operators",
      summary: "Boolean operators combine logic propositions to create complex expressions. The three basic operators are AND, OR, and NOT, with additional operators like NAND, NOR, and XOR providing additional functionality.",
      children: [
        {
          name: "What are the basic Boolean operators and how does each one function?",
          id: "basic-operators",
          summary: "The three fundamental Boolean operators are:\n\n- AND: A AND B is TRUE if both A and B are TRUE\n- OR: A OR B is TRUE if either A or B (or both) are TRUE\n- NOT: NOT A is TRUE if A is FALSE (inverts the value)\n\nThese three operators can be combined to create any possible logic function, though additional operators are often used for convenience."
        },
        {
          name: "What are compound operators (NAND, NOR, XOR) and how are they derived?",
          id: "compound-operators",
          summary: "Additional Boolean operators that can be derived from the basic ones include:\n\n- NAND: A NAND B is TRUE if A is FALSE or B is FALSE (equivalent to NOT (A AND B))\n- NOR: A NOR B is TRUE if A is FALSE and B is FALSE (equivalent to NOT (A OR B))\n- XOR (Exclusive OR): A XOR B is TRUE if A is TRUE or B is TRUE, but not both (exclusive OR)"
        },
        {
          name: "How does operator precedence affect the evaluation of logic expressions?",
          id: "operator-precedence",
          summary: "When evaluating complex logic expressions with multiple operators, precedence rules determine the order of operations. Using brackets (parentheses) can explicitly define the intended order. In expressions with multiple operators, the standard precedence is:\n\n1. NOT (highest)\n2. AND\n3. OR (lowest)\n\nFor example, in A OR B AND C, the AND operation is performed before the OR operation."
        }
      ]
    },
    {
      name: "What is a truth table and how do you construct one for a logic function?",
      id: "truth-tables",
      summary: "A truth table is a systematic way to show all possible combinations of input values and their corresponding outputs for a logic expression or circuit. In truth tables, TRUE is represented as 1 and FALSE as 0.",
      children: [
        {
          name: "How do you construct a truth table step‑by‑step?",
          id: "truth-table-construction",
          summary: "To construct a truth table:\n\n1. Identify all input variables (e.g., A, B, C)\n2. Create a row for each possible combination of inputs (2^n rows for n inputs)\n3. Arrange inputs in binary counting order (000, 001, 010, 011, etc.)\n4. Calculate the output value for each combination of inputs\n5. Optional: Include columns for intermediate values to aid calculation\n\nA truth table provides a complete representation of a logic function's behavior."
        },
        {
          name: "How do you derive a truth table from a given logic expression?",
          id: "truth-table-from-expression",
          summary: "When creating a truth table from a logic expression:\n\n1. Identify all variables used in the expression\n2. Create columns for each variable and the final output\n3. Include columns for intermediate expressions (workspace)\n4. For each input combination, evaluate the expression step by step\n5. Record the final output values\n\nThis methodical approach ensures accuracy when dealing with complex expressions."
        },
        {
          name: "How do you derive a truth table from a logic circuit diagram?",
          id: "truth-table-from-circuit",
          summary: "When creating a truth table from a logic circuit:\n\n1. Identify all input signals\n2. Create a row for each possible combination of inputs\n3. Add workspace columns for outputs of intermediate gates\n4. Trace the signal through the circuit for each input combination\n5. Record the final output value\n\nThis systematic approach handles even complex circuits by breaking them down into manageable steps."
        }
      ]
    },
    {
      name: "What are logic gates and how are they represented in circuit diagrams?",
      id: "logic-gates",
      summary: "Logic gates are the fundamental building blocks of digital circuits. Each gate implements a specific Boolean function, with standardized symbols used in circuit diagrams. Logic gates process binary inputs (0 or 1) and produce binary outputs according to their defined functions.",
      children: [
        {
          name: "What are the standard symbols for the main logic gates?",
          id: "gate-symbols",
          summary: "Logic gates are represented by specific symbols in circuit diagrams:\n\n- AND: Shaped like a D with a flat right side\n- OR: Curved shape with a pointed right side\n- NOT: Triangle with a small circle at the output\n- NAND: AND symbol with a circle at the output\n- NOR: OR symbol with a circle at the output\n- XOR: Similar to OR but with an additional curve on the input side\n\nInputs are shown on the left side of the symbol, while outputs appear on the right."
        },
        {
          name: "What function does a NOT gate perform and what is its truth table?",
          id: "not-gate",
          summary: "The NOT gate (inverter) has one input and one output. It reverses the logical state of its input.\n\nTruth Table:\nA | X\n0 | 1\n1 | 0\n\nThe NOT gate is the only basic gate with a single input and is represented by a triangle with a circle at its output."
        },
        {
          name: "How does an AND gate operate and what is its truth table?",
          id: "and-gate",
          summary: "The AND gate provides a TRUE output (1) only when all inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 1\n\nThe AND gate is represented by a D-shaped symbol with a flat right side."
        },
        {
          name: "How does an OR gate operate and what is its truth table?",
          id: "or-gate",
          summary: "The OR gate provides a TRUE output (1) when any input is TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 1\n\nThe OR gate is represented by a symbol with a curved input side and pointed output."
        },
        {
          name: "What is the behavior of a NAND gate and how is it symbolized?",
          id: "nand-gate",
          summary: "The NAND gate combines an AND gate followed by a NOT gate. It produces a FALSE output (0) only when all inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 1\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\nThe NAND gate is represented by an AND symbol with a circle at its output."
        },
        {
          name: "What is the behavior of a NOR gate and how is it symbolized?",
          id: "nor-gate",
          summary: "The NOR gate combines an OR gate followed by a NOT gate. It produces a TRUE output (1) only when all inputs are FALSE (0).\n\nTruth Table:\nA | B | X\n0 | 0 | 1\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 0\n\nThe NOR gate is represented by an OR symbol with a circle at its output."
        },
        {
          name: "What is the behavior of an XOR gate and how is it symbolized?",
          id: "xor-gate",
          summary: "The XOR (Exclusive OR) gate produces a TRUE output (1) when an odd number of inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\nFor two inputs, XOR is TRUE when inputs are different. It's represented by an OR symbol with an additional curved line at the input."
        }
      ]
    },
    {
      name: "How are logic circuits built to implement specific functions?",
      id: "logic-circuits",
      summary: "Logic circuits are networks of interconnected logic gates that implement specific functions. They form the foundation of digital computing systems, processing binary signals (0s and 1s) according to defined logical operations.",
      children: [
        {
          name: "How can you construct logic circuits from problem statements, expressions, or truth tables?",
          id: "circuit-construction",
          summary: "Logic circuits can be constructed from:\n\n1. Problem statements (by first converting to logic expressions)\n2. Logic expressions (by implementing each operator with its corresponding gate)\n3. Truth tables (by deriving expressions from output patterns)\n\nCircuits typically flow from left to right, with inputs on the left and outputs on the right. Intermediate connections represent signal paths between gates."
        },
        {
          name: "What steps convert a problem statement into a working logic circuit?",
          id: "circuit-from-statement",
          summary: "To create a logic circuit from a problem statement:\n\n1. Identify all conditions that can be TRUE or FALSE\n2. Assign symbols to each condition (e.g., A, B, C)\n3. Construct a logic expression using appropriate operators\n4. Implement the expression using logic gates\n\nFor example, a special bank lending rate might depend on account history AND certain other conditions, which can be translated into a combination of AND and OR gates."
        },
        {
          name: "How do you build a logic circuit directly from a Boolean expression?",
          id: "circuit-from-expression",
          summary: "To create a logic circuit from a logic expression:\n\n1. Identify the operations in the expression (AND, OR, NOT, etc.)\n2. Convert each operation to its corresponding gate\n3. Connect the gates according to the expression structure\n4. Use brackets in the expression to clarify the order of operations\n\nBrackets in the expression can guide the construction process by indicating which operations should be performed first."
        },
        {
          name: "How do you derive and implement a sum‑of‑products circuit from a truth table?",
          id: "circuit-from-truth-table",
          summary: "To create a logic circuit from a truth table:\n\n1. Identify rows where the output is 1\n2. For each such row, create a term using AND operators (use NOT for inputs that are 0)\n3. Combine these terms using OR operators\n4. Implement the resulting expression as a circuit\n\nThis process creates a sum-of-products expression that can be directly implemented, though it may not be the simplest possible circuit. Advanced techniques for circuit simplification are covered in later chapters."
        }
      ]
    },
    {
      name: "What practical applications do logic circuits have in digital systems?",
      id: "applications",
      summary: "Logic circuits have numerous practical applications in digital systems. They're used to implement decision-making processes, control systems, and digital components based on logical conditions.",
      children: [
        {
          name: "How are logic circuits used for fault detection in systems?",
          id: "fault-detection",
          summary: "Logic circuits can monitor system conditions and detect faults when specific combinations of inputs occur. For example, a monitoring system for an oven might track component statuses (fan working, light functioning, temperature in range) and activate warnings when certain fault conditions are detected."
        },
        {
          name: "How do logic gates form the basis of digital components like registers and adders?",
          id: "digital-components",
          summary: "Logic gates and circuits form the building blocks of more complex digital components such as:\n\n- Registers for storing data\n- Counters for tracking events\n- Adders for arithmetic operations\n- Multiplexers for selecting between multiple inputs\n- Decoders for converting binary codes\n\nThese components, in turn, are assembled into larger systems like processors and memory units."
        },
        {
          name: "How do logic circuits implement control systems based on input conditions?",
          id: "control-systems",
          summary: "Logic circuits implement control systems that make decisions based on various input conditions. Examples include:\n\n- Heating/cooling systems activating based on temperature thresholds\n- Security systems triggering alarms based on sensor inputs\n- Traffic light controllers sequencing lights based on traffic patterns\n- Manufacturing equipment responding to process conditions\n\nThese systems evaluate inputs according to predetermined logical conditions to generate appropriate control signals."
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterFourMindMap: React.FC = () => {
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
                      4,
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

export default ChapterFourMindMap;