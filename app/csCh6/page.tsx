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
  name: "What does Chapter 6 on assembly language programming cover?",
  id: "assembly-language-programming",
  summary: "Chapter 6 explores assembly language programming, covering the relationship between assembly language and machine code, stages of the assembly process, instruction types, addressing modes, and binary shifts. This chapter helps understand how high-level programming translates to operations the processor can directly execute.",
  children: [
    {
      name: "How is assembly language related to machine code, and what are its key features?",
      id: "machine-code-assembly",
      summary: "Assembly language is closely related to machine code, which is the only language a CPU can directly recognize. While machine code consists of binary instructions, assembly language uses mnemonics to make programming more human-readable.\n\nKey aspects:\n- Machine code consists of opcodes (operation codes) and operands (data to be operated on)\n- Different processors have different instruction sets\n- Each assembly language instruction has an equivalent machine code instruction\n- The instruction format typically includes bits for the opcode and operand\n- For a simple processor instruction, the format might include 8 bits for the opcode and 16 bits for the operand",
      children: [
        {
          name: "What is the typical format of a machine instruction, and which parts must be defined?",
          id: "instruction-format",
          summary: "A machine code instruction typically consists of an opcode and an operand. The opcode defines the operation to be performed, while the operand provides the data or its address.\n\nA simple instruction format might have:\n- 8-bit opcode (4 bits for operation, 2 bits for address mode, 2 bits for register addressing)\n- 16-bit operand (which could be a memory address or a value)\n\nDifferent processors have different instruction formats, but they all need to define:\n- Total number of bits/bytes for the whole instruction\n- Number of bits for the opcode\n- Number of bits for operands\n- Position of the opcode (most or least significant bits)",
        }
      ]
    },
    {
      name: "How does the assembly process convert mnemonics into machine code?",
      id: "assembly-process",
      summary: "The process of converting assembly language to machine code is performed by an assembler. A two-pass assembler is designed to handle programs with forward references, where symbolic addresses are used before they are defined.\n\nThe assembly process involves preparing the code, creating a symbol table, and generating the machine code using lookup tables for the opcodes.",
      children: [
        {
          name: "What are the two passes of a two‑pass assembler and what does each accomplish?",
          id: "two-pass-assembler",
          summary: "A two-pass assembler processes code in two distinct phases:\n\nFirst Pass:\n- Removal of comments\n- Replacement of macros with their defined instructions\n- Creation of a symbol table that maps labels to memory addresses\n- Counting of instructions to determine offsets\n\nSecond Pass:\n- Use of the symbol table to resolve symbolic addresses\n- Use of an opcode lookup table to convert mnemonics to binary\n- Generation of the final machine code\n\nThe symbol table is crucial for handling forward references, where instructions reference labels that appear later in the code.",
        },
        {
          name: "What information does the symbol table store, and how is it used?",
          id: "symbol-table",
          summary: "The symbol table is created during the first pass of the assembler and contains:\n\n- Symbol (label) names\n- Corresponding memory addresses or offsets\n\nWhen a label is encountered in the assembly code, its position is recorded in the symbol table. During the second pass, when a reference to that label is found, the assembler can look up its address in the symbol table.",
        }
      ]
    },
    {
      name: "What are the common addressing modes in assembly language and how do they work?",
      id: "addressing-modes",
      summary: "Addressing modes define different ways to identify the data needed for an instruction. The mode affects how the operand is interpreted.\n\nCommon addressing modes include:\n\n1. Immediate Addressing: The operand is the actual value to be used\n2. Direct Addressing: The operand is the address that holds the value\n3. Indirect Addressing: The operand holds an address that points to the actual value\n4. Indexed Addressing: The operand address is calculated by adding a base address and an index value",
      children: [
        {
          name: "How does immediate addressing differ from other modes, and how is it indicated?",
          id: "immediate-addressing",
          summary: "In immediate addressing, the operand itself is the value to be used in the instruction.\n\nFor example, in the instruction 'SUB #48', the value 48 is directly subtracted from the accumulator. The '#' symbol indicates immediate addressing.\n\nThere are three common ways to specify immediate values:\n- #48 (denary/decimal)\n- #B00110000 (binary)\n- #&30 (hexadecimal)",
        },
        {
          name: "What is direct addressing and how does the CPU use it to fetch data?",
          id: "direct-addressing",
          summary: "In direct addressing, the operand specifies the memory address that contains the value to be used.\n\nFor example, in the instruction 'ADD TOTAL', the value stored at the memory location labeled 'TOTAL' is added to the accumulator.\n\nThe processor retrieves the value from the specified memory address and uses it in the operation.",
        },
        {
          name: "How does indirect addressing add flexibility to memory access?",
          id: "indirect-addressing",
          summary: "In indirect addressing, the operand specifies a memory address that contains another address, which holds the actual value needed.\n\nFor example, if address 106 contains the value 101, then the instruction 'LDI 106' would:\n1. Look at address 106 and find the value 101\n2. Look at address 101 to find the actual value to load\n3. Load that value into the accumulator\n\nIndirect addressing adds a level of indirection that allows for more flexible memory access patterns.",
        },
        {
          name: "What is indexed addressing and when is it typically used?",
          id: "indexed-addressing",
          summary: "In indexed addressing, the final address is calculated by adding the value in an index register to the address specified in the operand.\n\nFor example, if the instruction is 'LDX 102' and the index register contains 3, the processor would:\n1. Calculate the effective address: 102 + 3 = 105\n2. Access the value at address 105\n3. Load that value into the accumulator\n\nIndexed addressing is useful for accessing elements in arrays or tables, where the index register can be incremented to move through consecutive memory locations.",
        }
      ]
    },
    {
      name: "What categories of instructions exist in assembly language?",
      id: "instruction-types",
      summary: "Assembly language instructions can be categorized based on their functions, such as data movement, arithmetic operations, comparison and jumping, input/output operations, and bit manipulation.",
      children: [
        {
          name: "What instructions move data between registers and memory?",
          id: "data-movement",
          summary: "Data movement instructions transfer data between registers and memory locations.\n\nCommon data movement instructions include:\n\n- LDM #n: Load immediate value n into the accumulator\n- LDR #n: Load immediate value n into the index register\n- LDD <address>: Load the value from the specified address into the accumulator\n- LDI <address>: Load the value using indirect addressing\n- LDX <address>: Load the value using indexed addressing\n- MOV <register>: Move data from accumulator to the specified register\n- STO <address>: Store the accumulator value at the specified address",
        },
        {
          name: "How are input and output operations handled in assembly?",
          id: "input-output",
          summary: "Input/Output instructions handle data exchange between the processor and external devices like keyboards and displays.\n\nBasic I/O instructions:\n\n- IN: Read a character from the keyboard and store its ASCII value in the accumulator\n- OUT: Display the character corresponding to the ASCII value in the accumulator\n\nThese instructions typically don't require operands since they work with predefined I/O devices.",
        },
        {
          name: "Which instructions manage program flow via comparisons and jumps?",
          id: "comparisons-jumps",
          summary: "These instructions control program flow by performing comparisons and changing the execution sequence.\n\nKey instructions include:\n\n- CMP <address>: Compare the accumulator with the value at the specified address\n- CMP #n: Compare the accumulator with the immediate value n\n- JMP <address>: Unconditional jump to the specified address\n- JPE <address>: Jump to the address if the last comparison was equal (true)\n- JPN <address>: Jump to the address if the last comparison was not equal (false)\n\nJump instructions modify the program counter to change which instruction will be executed next.",
        },
        {
          name: "What arithmetic operations are available in assembly language?",
          id: "arithmetic-operations",
          summary: "Arithmetic instructions perform mathematical operations on data values.\n\nCommon arithmetic instructions include:\n\n- ADD <address>: Add the value at the specified address to the accumulator\n- ADD #n: Add the immediate value n to the accumulator\n- SUB <address>: Subtract the value at the specified address from the accumulator\n- SUB #n: Subtract the immediate value n from the accumulator\n- INC <register>: Increment (add 1 to) the specified register\n- DEC <register>: Decrement (subtract 1 from) the specified register\n\nComplex operations like multiplication and division are typically implemented using combinations of these basic instructions.",
        },
        {
          name: "How do shift instructions manipulate bits within registers?",
          id: "shift-operations",
          summary: "Shift operations move the bits in a register to the left or right by a specified number of positions.\n\nBasic shift instructions:\n\n- LSL #n: Logical Shift Left, shifting all bits n places to the left\n- LSR #n: Logical Shift Right, shifting all bits n places to the right\n\nBit shifts have various applications:\n- Left shifts can multiply values by powers of 2\n- Right shifts can divide values by powers of 2\n- Shifts can be used to isolate or examine individual bits\n\nWhen shifting, bits that move beyond the register size are typically lost, except for the last bit which often goes to the carry flag in the status register.",
        },
        {
          name: "What bitwise logic operations are provided and how are they used?",
          id: "bitwise-operations",
          summary: "Bitwise logic operations perform Boolean operations on individual bits of binary values.\n\nCommon bitwise instructions include:\n\n- AND #Bn: Perform bitwise AND between the accumulator and binary value n\n- AND <address>: Perform bitwise AND between the accumulator and value at address\n- OR #Bn: Perform bitwise OR between the accumulator and binary value n\n- OR <address>: Perform bitwise OR between the accumulator and value at address\n- XOR #Bn: Perform bitwise XOR between the accumulator and binary value n\n- XOR <address>: Perform bitwise XOR between the accumulator and value at address\n\nThese operations are useful for tasks like masking (selecting specific bits), flag setting/clearing, and implementing logical functions.",
        }
      ]
    },
    {
      name: "What is program tracing and how is it used in debugging?",
      id: "program-tracing",
      summary: "Program tracing is a technique used to follow the execution of an assembly language program step by step to understand its behavior or identify errors.\n\nA trace table records how register values and memory contents change as each instruction is executed. For each instruction, the table shows:\n\n- The current instruction being executed\n- Values in relevant registers (e.g., accumulator, program counter)\n- Contents of memory locations being accessed\n- Any output produced\n\nTracing is an important debugging technique that helps programmers understand exactly what their code is doing at each step.",
      children: [
        {
          name: "What information is recorded in a trace table during program execution?",
          id: "trace-table",
          summary: "A trace table is a structured way to track the execution of a program. It contains columns for:\n\n- Program counter (PC): Tracks which instruction is being executed\n- Register values (e.g., Accumulator): Shows how data changes during execution\n- Memory locations: Records changes to relevant memory addresses\n- Input/Output: Documents any I/O operations\n\nAs the program executes, each row in the table represents one step in the execution, showing how the system state changes after each instruction.",
        },
        {
          name: "How is register transfer notation used to describe data movement in programs?",
          id: "register-transfer-notation",
          summary: "Register transfer notation (RTN) is a formal way to describe operations involving registers. It shows how data moves between different components during instruction execution.\n\nFor example, the fetch stage of the fetch-execute cycle can be represented as:\n\n```\nMAR <- [PC]\nPC <- [PC] + 1; MDR <- [[MAR]]\nCIR <- [MDR]\n```\n\nIn this notation:\n- The left item is the destination for the data\n- Square brackets show the content of a register is being moved\n- Semicolons separate operations happening simultaneously\n- Double brackets indicate indirect addressing",
        }
      ]
    },
    {
      name: "What addressing types improve code readability and relocatability?",
      id: "addressing-types",
      summary: "There are different approaches to specifying memory addresses in assembly language, which impact how the code is written and processed by the assembler.",
      children: [
        {
          name: "What is symbolic addressing and what benefits does it provide?",
          id: "symbolic-addressing",
          summary: "Symbolic addressing uses named labels to represent memory addresses, making programs more readable and easier to modify.\n\nInstead of using actual memory addresses, programmers can define labels like 'START:' or 'LOOP:' and refer to these labels in instructions. The assembler then resolves these labels to actual memory addresses during assembly.\n\nAdvantages:\n- More readable and maintainable code\n- No need to calculate or remember numerical addresses\n- Programs can be relocated in memory without changing the code",
        },
        {
          name: "How does relative addressing enable position‑independent code?",
          id: "relative-addressing",
          summary: "Relative addressing specifies memory locations as offsets from a base address, which is typically stored in a base register.\n\nFor example, 'STO [BR] + 15' stores a value at the address that is 15 locations after the address in the base register.\n\nAdvantages:\n- Makes code relocatable since absolute addresses aren't hardcoded\n- Simplifies access to data structures like arrays\n- Enables position-independent code",
        },
        {
          name: "What is absolute addressing and when is it used?",
          id: "absolute-addressing",
          summary: "Absolute addressing directly specifies the actual memory address to be used in an instruction.\n\nFor example, 'STO 215' stores a value directly at memory address 215.\n\nCharacteristics:\n- Requires knowing the exact memory addresses during programming\n- Makes code less flexible and harder to relocate\n- Can be more efficient in some cases since no address calculation is needed\n- Typically used when specific hardware addresses must be accessed",
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterSixMindMap: React.FC = () => {
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
                      6,
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

export default ChapterSixMindMap;