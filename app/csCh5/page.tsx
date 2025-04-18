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
  name: "What topics does Chapter 5 on processor fundamentals cover?",
  id: "processor-fundamentals",
  summary: "Chapter 5 explores processor fundamentals, covering the Von Neumann model, CPU architecture, system bus components, factors affecting system performance, I/O ports, the fetch-execute cycle, and interrupt handling.",
  children: [
    {
      name: "What are the basic features of the Von Neumann model as described by John von Neumann?",
      id: "von-neumann-model",
      summary: "John von Neumann was the first person to describe the basic principles of a computer system and its architecture in a publication.\n\nThe model von Neumann described has the following basic features:\n- There is a processor - the central processing unit (CPU).\n- The processor has direct access to memory.\n- The memory contains a 'stored program' (which can be replaced by another at any time) and the data required by the program.\n- The stored program consists of individual instructions.\n- The processor executes instructions sequentially.",
    },
    {
      name: "What are the key components of CPU architecture and how do they function?",
      id: "cpu-architecture",
      summary: "The CPU (Central Processing Unit) consists of several key components that work together to execute program instructions. These include active components and registers that fulfill specific roles in the processing of data and instructions.",
      children: [
        {
          name: "Which active components make up the CPU and what are their roles?",
          id: "active-components",
          summary: "The CPU has two main active components:\n\n1. The Arithmetic and Logic Unit (ALU) - Responsible for arithmetic or logic processing requirements of the instructions in a running program.\n\n2. The Control Unit - Has more diverse functions including controlling the flow of data throughout the processor and the rest of the computer system, and ensuring that program instructions are handled correctly. A vital part of the control unit is a clock that synchronizes processes.\n\nThe CPU has two clocks: an internal clock that controls cycles within the processor, and the system clock that controls activities outside the processor. The CPU's clock speed defines the minimum period of time separating successive activities within the system.",
        },
        {
          name: "What are registers in the CPU and what types exist?",
          id: "registers",
          summary: "Registers are storage components placed very close to the ALU to allow very short access times. Each register has limited storage capacity, typically 16, 32, or 64 bits.\n\nRegisters are either general purpose or special purpose:\n\n- General Purpose Register: If there is only one, it is referred to as the Accumulator. It stores a single value at any one time that is to be used by the ALU. The ALU can store a different value in the Accumulator after executing an instruction.\n\n- Special Purpose Registers: Have dedicated functions within the CPU architecture.",
          children: [
            {
              name: "Which special‑purpose registers exist in the CPU and what are their functions?",
              id: "special-purpose-registers",
              summary: "Special purpose registers serve specific functions in the CPU:\n\n- Current Instruction Register (CIR): Stores the current instruction while it is being decoded and executed\n\n- Index Register (IX): Stores a value; only used for indexed addressing\n\n- Memory Address Register (MAR): Stores the address of a memory location or an I/O component which is about to have a value read from or written to\n\n- Memory Data Register (MDR) / Memory Buffer Register (MBR): Stores data that has just been read from memory or is just about to be written to memory\n\n- Program Counter (PC): Stores the address of where the next instruction is to be read from\n\n- Status Register (SR): Contains bits that are either set or cleared which can be referenced individually\n\nFor all special-purpose registers except the status register, the contents represent one value. For the status register, each individual bit is used as a logical flag (e.g., carry flag, negative flag, overflow flag).",
            }
          ]
        }
      ]
    },
    {
      name: "What is the system bus and what are its three components?",
      id: "system-bus",
      summary: "A bus is a parallel transmission component with each separate wire carrying a single bit. It is important to understand that a bus does not hold data but is a mechanism for data to be transferred from one system component to another.\n\nThe system bus connects the CPU to the memory and to the I/O system. It comprises three distinct components: the address bus, the data bus, and the control bus.",
      children: [
        {
          name: "What is the function of the address bus and how does it operate?",
          id: "address-bus",
          summary: "The sole function of the address bus is to carry an address. This address is loaded onto the bus from the MAR (Memory Address Register) as directed by the control unit.\n\nThe address specifies a location in memory or an I/O component which is due to receive data or from which data is to be read.\n\nThe address bus is a 'one-way street'. It can only be used to send an address to a memory controller or an I/O controller. It cannot be used to carry an address back to the CPU.",
        },
        {
          name: "What is the purpose of the data bus and in which directions can it carry data?",
          id: "data-bus",
          summary: "The function of the data bus is to carry data. This might be an instruction, an address, or a value.\n\nThe data bus is bidirectional (two-way): it might be carrying data from the CPU to the memory or carrying data to the CPU. It might also carry data to or from an I/O device.\n\nDifferent computer systems handle data flow differently. Some systems will only allow input to the CPU before the data can be stored in memory, while others will allow direct transfer to memory.",
        },
        {
          name: "What is the role of the control bus and why is its width limited?",
          id: "control-bus",
          summary: "The control bus is another bidirectional bus which transmits signals from the control unit to any other system component or transmits signals to the control unit.\n\nThere is no need for extended width, so the control bus typically has just eight wires.\n\nA major use of the control bus is to carry timing signals. The system clock in the control unit defines the clock cycle for the computer system. The control bus carries timing signals at time intervals dictated by the clock cycle. This ensures that the time that one component transmits data is synchronized with the time that another component reads it.",
        }
      ]
    },
    {
      name: "What factors affect overall system performance?",
      id: "system-performance",
      summary: "Several factors contribute to the overall performance of a computer system. These include processor clock speed, number of cores, cache memory, word length, and bus width.",
      children: [
        {
          name: "How does processor clock speed influence performance and why are cores and cache used?",
          id: "clock-speed",
          summary: "The processor clock speed is a very important factor governing the processing speed of the system. One clock cycle defines the shortest possible time that any action can take.\n\nComponents outside the processor work much slower than the processor itself. The components that are directly addressable by the processor (the immediate access store or IAS) can only accept or provide data at speeds much slower than the processor speed.\n\nModern processors address this issue by using multiple cores and cache memory.",
        },
        {
          name: "What is word length and how does it affect system design and performance?",
          id: "word-length",
          summary: "A word consists of a number of bytes, and for any system, the word length is defined. The significance of word length is that it defines a grouping that the system can handle as one unit.\n\nThe word length might be stated as a number of bytes or bits. Typical word lengths are 16, 32, or 64 bits (2, 4, or 8 bytes, respectively).\n\nWord length influences system architecture design in regard to the capacity of components. For example, it is usual for the size of registers to match the word length. Word length also has to be considered when making decisions about bus widths.",
        },
        {
          name: "What is bus width and how does it impact memory addressing and data transfer?",
          id: "bus-width",
          summary: "For the address bus, the bus width defines the number of bits in the address's binary code. In a simple computer system, the bus width might be 16 bits, allowing 65,536 memory locations to be directly addressed. Doubling to 32 bits would allow just over four billion addresses. Special techniques are used when memory capacity is too large for direct addressing.\n\nFor the data bus, the bus width is ideally the same as the word length. If this is not possible, the bus width can be half the word length so that a full word can be transmitted by two consecutive data transfers, which affects system performance.",
        }
      ]
    },
    {
      name: "What role do I/O ports play in connecting peripherals to the CPU?",
      id: "io-ports",
      summary: "I/O ports serve as interfaces connecting the computer system to peripheral devices. Each I/O device connects to an interface called a port, which is connected to an I/O or device controller. This controller handles the interaction between the CPU and the I/O device.",
      children: [
        {
          name: "What features make USB the standard for plug‑and‑play connectivity?",
          id: "usb",
          summary: "The Universal Serial Bus (USB) standard realizes the plug-and-play concept, allowing any computer user to connect a peripheral and start using it without technical expertise.\n\nKey features of the USB standard include:\n- Support for a hierarchy of connections\n- The computer is at the root of this hierarchy and can handle 127 attached devices\n- Devices can be attached while the computer is switched on and are automatically configured for use\n- The standard has evolved, with USB 3.2 being the latest version at the time of writing\n\nUSB is a bus - a USB drive stores data and is connected to a USB port which allows data to be transmitted along the bus.",
        },
        {
          name: "Which specialized multimedia ports exist and what do they carry?",
          id: "multimedia-ports",
          summary: "Despite the widespread use of USB ports, some peripheral devices require specialized ports:\n\n- Video Graphics Array (VGA) port: Provides high-resolution screen display suitable for most display requirements but does not transmit audio components\n\n- High Definition Multimedia Interface (HDMI) port: Provides connection to a screen and allows the transmission of high-quality video including the audio component",
        }
      ]
    },
    {
      name: "What is the fetch‑execute cycle and what stages does it include?",
      id: "fetch-execute-cycle",
      summary: "The fetch-execute cycle (also called fetch-decode-execute cycle) is the basic operational process of a computer. It is the sequence of steps that the CPU follows to process instructions.",
      children: [
        {
          name: "What happens during the fetch stage of the fetch‑execute cycle?",
          id: "fetch-stage",
          summary: "In the fetch stage of the fetch-execute cycle, the following steps happen:\n\n1. The address in the program counter is transferred within the CPU to the Memory Address Register (MAR).\n\n2. During the next clock cycle, two things happen simultaneously:\n   - The instruction held in the address pointed to by the MAR is fetched into the Memory Data Register (MDR)\n   - The address stored in the program counter is incremented\n\n3. The instruction stored in the MDR is transferred within the CPU to the Current Instruction Register (CIR).\n\nNote that the clock cycle is controlled by the system clock, which allows one data transfer from memory per cycle. Also, if the instruction just loaded is a jump instruction, the program counter will be updated according to the jump condition after the instruction is decoded.",
        },
        {
          name: "What occurs during the decode stage of the fetch‑execute cycle?",
          id: "decode-stage",
          summary: "In the decode stage, the instruction stored in the Current Instruction Register (CIR) is received as input by the circuitry within the control unit.\n\nDepending on the type of instruction, the control unit will send signals to the appropriate components so that the execute stage can begin.",
        },
        {
          name: "What is executed during the execute stage of the fetch‑execute cycle?",
          id: "execute-stage",
          summary: "At the execute stage, the ALU will be activated if the instruction requires arithmetic or logic processing. This stage carries out the actual operation specified by the instruction.",
        },
        {
          name: "How is register transfer notation used to describe the fetch‑execute cycle?",
          id: "register-transfer-notation",
          summary: "Register transfer notation is used to describe operations involving registers. For example, the fetch stage of the fetch-execute cycle can be represented as:\n\n```\nMAR <- [PC]\nPC <- [PC] + 1; MDR <- [[MAR]]\nCIR <- [MDR]\n```\n\nIn this notation:\n- The first item is the destination for the data\n- Square brackets around a register abbreviation show that the content of the register is being moved\n- When two data operations are on the same line separated by a semicolon, they occur simultaneously\n- Double brackets (as in [[MAR]]) indicate that the content of MAR is an address, and it's the content of that address being transferred",
        }
      ]
    },
    {
      name: "What are interrupts and how are they handled by the CPU?",
      id: "interrupt-handling",
      summary: "Interrupts are signals that can pause the normal execution of a program to handle some event that requires immediate attention. There are many different reasons for an interrupt to be generated.",
      children: [
        {
          name: "What types of events can trigger an interrupt in a computer system?",
          id: "interrupt-types",
          summary: "Interrupts can be triggered by various events, including:\n- A fatal error in a program\n- A hardware fault\n- A need for I/O processing to begin\n- User interaction\n- A timer signal",
        },
        {
          name: "What steps are involved in the interrupt handling process?",
          id: "interrupt-process",
          summary: "An interrupt is handled by the following steps:\n\n1. The contents of the program counter and any other registers are stored somewhere safe in memory.\n\n2. The appropriate interrupt handler or Interrupt Service Routine (ISR) program is initiated by loading its start address into the program counter.\n\n3. When the ISR program has been executed, there is an immediate check to see if further interrupts need handling.\n\n4. Further interrupts are dealt with by repeated execution of the ISR program.\n\n5. If there are no further interrupts, the safely stored contents of the registers are restored to the CPU, and the originally running program is resumed.\n\nThe existence of an interrupt is only detected at the end of a fetch-execute cycle. This allows the current program to be interrupted and left in a defined state which can be returned to later.",
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterFiveMindMap: React.FC = () => {
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
                      5,
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

export default ChapterFiveMindMap;