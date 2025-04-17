'use client';
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
const ProcessorFundamentalsMindMap: React.FC = () => {
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
    
    // Update the visibility in the graph
    if (svgRef.current) {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${activeNode}"]`)
        .attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null); // Set to background color when hidden
    }
  };
  
  // Function to save note for revision
  const saveNoteForRevision = async () => {
    if (!activeNode || !infoContent) return;
    
    // Get node name
    const nodeName = findNodeName(activeNode, data);
    if (!nodeName) return;
    
    try {
      // Format the note content
      const timestamp = new Date().toISOString();
      const noteToSave = `# ${nodeName}\n${infoContent}\n\nSaved on: ${timestamp}\n\n---\n\n`;
      
      // Send note to API endpoint
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
      
      // Show success message
      setSaveStatus('Note saved!');
      
      // Reset message after 3 seconds
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

  // Define the data structure for the mindmap based on Chapter 5
  const data: MindmapNode = {
    name: "Processor Fundamentals",
    id: "processor-fundamentals",
    summary: "Chapter 5 explores processor fundamentals, covering the Von Neumann model, CPU architecture, system bus components, factors affecting system performance, I/O ports, the fetch-execute cycle, and interrupt handling.",
    children: [
      {
        name: "Von Neumann Model",
        id: "von-neumann-model",
        summary: "John von Neumann was the first person to describe the basic principles of a computer system and its architecture in a publication.\n\nThe model von Neumann described has the following basic features:\n- There is a processor - the central processing unit (CPU).\n- The processor has direct access to memory.\n- The memory contains a 'stored program' (which can be replaced by another at any time) and the data required by the program.\n- The stored program consists of individual instructions.\n- The processor executes instructions sequentially.",
      },
      {
        name: "CPU Architecture",
        id: "cpu-architecture",
        summary: "The CPU (Central Processing Unit) consists of several key components that work together to execute program instructions. These include active components and registers that fulfill specific roles in the processing of data and instructions.",
        children: [
          {
            name: "Active Components",
            id: "active-components",
            summary: "The CPU has two main active components:\n\n1. The Arithmetic and Logic Unit (ALU) - Responsible for arithmetic or logic processing requirements of the instructions in a running program.\n\n2. The Control Unit - Has more diverse functions including controlling the flow of data throughout the processor and the rest of the computer system, and ensuring that program instructions are handled correctly. A vital part of the control unit is a clock that synchronizes processes.\n\nThe CPU has two clocks: an internal clock that controls cycles within the processor, and the system clock that controls activities outside the processor. The CPU's clock speed defines the minimum period of time separating successive activities within the system.",
          },
          {
            name: "Registers",
            id: "registers",
            summary: "Registers are storage components placed very close to the ALU to allow very short access times. Each register has limited storage capacity, typically 16, 32, or 64 bits.\n\nRegisters are either general purpose or special purpose:\n\n- General Purpose Register: If there is only one, it is referred to as the Accumulator. It stores a single value at any one time that is to be used by the ALU. The ALU can store a different value in the Accumulator after executing an instruction.\n\n- Special Purpose Registers: Have dedicated functions within the CPU architecture.",
            children: [
              {
                name: "Special Purpose Registers",
                id: "special-purpose-registers",
                summary: "Special purpose registers serve specific functions in the CPU:\n\n- Current Instruction Register (CIR): Stores the current instruction while it is being decoded and executed\n\n- Index Register (IX): Stores a value; only used for indexed addressing\n\n- Memory Address Register (MAR): Stores the address of a memory location or an I/O component which is about to have a value read from or written to\n\n- Memory Data Register (MDR) / Memory Buffer Register (MBR): Stores data that has just been read from memory or is just about to be written to memory\n\n- Program Counter (PC): Stores the address of where the next instruction is to be read from\n\n- Status Register (SR): Contains bits that are either set or cleared which can be referenced individually\n\nFor all special-purpose registers except the status register, the contents represent one value. For the status register, each individual bit is used as a logical flag (e.g., carry flag, negative flag, overflow flag).",
              }
            ]
          }
        ]
      },
      {
        name: "System Bus",
        id: "system-bus",
        summary: "A bus is a parallel transmission component with each separate wire carrying a single bit. It is important to understand that a bus does not hold data but is a mechanism for data to be transferred from one system component to another.\n\nThe system bus connects the CPU to the memory and to the I/O system. It comprises three distinct components: the address bus, the data bus, and the control bus.",
        children: [
          {
            name: "Address Bus",
            id: "address-bus",
            summary: "The sole function of the address bus is to carry an address. This address is loaded onto the bus from the MAR (Memory Address Register) as directed by the control unit.\n\nThe address specifies a location in memory or an I/O component which is due to receive data or from which data is to be read.\n\nThe address bus is a 'one-way street'. It can only be used to send an address to a memory controller or an I/O controller. It cannot be used to carry an address back to the CPU.",
          },
          {
            name: "Data Bus",
            id: "data-bus",
            summary: "The function of the data bus is to carry data. This might be an instruction, an address, or a value.\n\nThe data bus is bidirectional (two-way): it might be carrying data from the CPU to the memory or carrying data to the CPU. It might also carry data to or from an I/O device.\n\nDifferent computer systems handle data flow differently. Some systems will only allow input to the CPU before the data can be stored in memory, while others will allow direct transfer to memory.",
          },
          {
            name: "Control Bus",
            id: "control-bus",
            summary: "The control bus is another bidirectional bus which transmits signals from the control unit to any other system component or transmits signals to the control unit.\n\nThere is no need for extended width, so the control bus typically has just eight wires.\n\nA major use of the control bus is to carry timing signals. The system clock in the control unit defines the clock cycle for the computer system. The control bus carries timing signals at time intervals dictated by the clock cycle. This ensures that the time that one component transmits data is synchronized with the time that another component reads it.",
          }
        ]
      },
      {
        name: "System Performance Factors",
        id: "system-performance",
        summary: "Several factors contribute to the overall performance of a computer system. These include processor clock speed, number of cores, cache memory, word length, and bus width.",
        children: [
          {
            name: "Processor Clock Speed",
            id: "clock-speed",
            summary: "The processor clock speed is a very important factor governing the processing speed of the system. One clock cycle defines the shortest possible time that any action can take.\n\nComponents outside the processor work much slower than the processor itself. The components that are directly addressable by the processor (the immediate access store or IAS) can only accept or provide data at speeds much slower than the processor speed.\n\nModern processors address this issue by using multiple cores and cache memory.",
          },
          {
            name: "Word Length",
            id: "word-length",
            summary: "A word consists of a number of bytes, and for any system, the word length is defined. The significance of word length is that it defines a grouping that the system can handle as one unit.\n\nThe word length might be stated as a number of bytes or bits. Typical word lengths are 16, 32, or 64 bits (2, 4, or 8 bytes, respectively).\n\nWord length influences system architecture design in regard to the capacity of components. For example, it is usual for the size of registers to match the word length. Word length also has to be considered when making decisions about bus widths.",
          },
          {
            name: "Bus Width",
            id: "bus-width",
            summary: "For the address bus, the bus width defines the number of bits in the address's binary code. In a simple computer system, the bus width might be 16 bits, allowing 65,536 memory locations to be directly addressed. Doubling to 32 bits would allow just over four billion addresses. Special techniques are used when memory capacity is too large for direct addressing.\n\nFor the data bus, the bus width is ideally the same as the word length. If this is not possible, the bus width can be half the word length so that a full word can be transmitted by two consecutive data transfers, which affects system performance.",
          }
        ]
      },
      {
        name: "I/O Ports",
        id: "io-ports",
        summary: "I/O ports serve as interfaces connecting the computer system to peripheral devices. Each I/O device connects to an interface called a port, which is connected to an I/O or device controller. This controller handles the interaction between the CPU and the I/O device.",
        children: [
          {
            name: "Universal Serial Bus (USB)",
            id: "usb",
            summary: "The Universal Serial Bus (USB) standard realizes the plug-and-play concept, allowing any computer user to connect a peripheral and start using it without technical expertise.\n\nKey features of the USB standard include:\n- Support for a hierarchy of connections\n- The computer is at the root of this hierarchy and can handle 127 attached devices\n- Devices can be attached while the computer is switched on and are automatically configured for use\n- The standard has evolved, with USB 3.2 being the latest version at the time of writing\n\nUSB is a bus - a USB drive stores data and is connected to a USB port which allows data to be transmitted along the bus.",
          },
          {
            name: "Multimedia Ports",
            id: "multimedia-ports",
            summary: "Despite the widespread use of USB ports, some peripheral devices require specialized ports:\n\n- Video Graphics Array (VGA) port: Provides high-resolution screen display suitable for most display requirements but does not transmit audio components\n\n- High Definition Multimedia Interface (HDMI) port: Provides connection to a screen and allows the transmission of high-quality video including the audio component",
          }
        ]
      },
      {
        name: "Fetch-Execute Cycle",
        id: "fetch-execute-cycle",
        summary: "The fetch-execute cycle (also called fetch-decode-execute cycle) is the basic operational process of a computer. It is the sequence of steps that the CPU follows to process instructions.",
        children: [
          {
            name: "Fetch Stage",
            id: "fetch-stage",
            summary: "In the fetch stage of the fetch-execute cycle, the following steps happen:\n\n1. The address in the program counter is transferred within the CPU to the Memory Address Register (MAR).\n\n2. During the next clock cycle, two things happen simultaneously:\n   - The instruction held in the address pointed to by the MAR is fetched into the Memory Data Register (MDR)\n   - The address stored in the program counter is incremented\n\n3. The instruction stored in the MDR is transferred within the CPU to the Current Instruction Register (CIR).\n\nNote that the clock cycle is controlled by the system clock, which allows one data transfer from memory per cycle. Also, if the instruction just loaded is a jump instruction, the program counter will be updated according to the jump condition after the instruction is decoded.",
          },
          {
            name: "Decode Stage",
            id: "decode-stage",
            summary: "In the decode stage, the instruction stored in the Current Instruction Register (CIR) is received as input by the circuitry within the control unit.\n\nDepending on the type of instruction, the control unit will send signals to the appropriate components so that the execute stage can begin.",
          },
          {
            name: "Execute Stage",
            id: "execute-stage",
            summary: "At the execute stage, the ALU will be activated if the instruction requires arithmetic or logic processing. This stage carries out the actual operation specified by the instruction.",
          },
          {
            name: "Register Transfer Notation",
            id: "register-transfer-notation",
            summary: "Register transfer notation is used to describe operations involving registers. For example, the fetch stage of the fetch-execute cycle can be represented as:\n\n```\nMAR <- [PC]\nPC <- [PC] + 1; MDR <- [[MAR]]\nCIR <- [MDR]\n```\n\nIn this notation:\n- The first item is the destination for the data\n- Square brackets around a register abbreviation show that the content of the register is being moved\n- When two data operations are on the same line separated by a semicolon, they occur simultaneously\n- Double brackets (as in [[MAR]]) indicate that the content of MAR is an address, and it's the content of that address being transferred",
          }
        ]
      },
      {
        name: "Interrupt Handling",
        id: "interrupt-handling",
        summary: "Interrupts are signals that can pause the normal execution of a program to handle some event that requires immediate attention. There are many different reasons for an interrupt to be generated.",
        children: [
          {
            name: "Interrupt Types",
            id: "interrupt-types",
            summary: "Interrupts can be triggered by various events, including:\n- A fatal error in a program\n- A hardware fault\n- A need for I/O processing to begin\n- User interaction\n- A timer signal",
          },
          {
            name: "Interrupt Process",
            id: "interrupt-process",
            summary: "An interrupt is handled by the following steps:\n\n1. The contents of the program counter and any other registers are stored somewhere safe in memory.\n\n2. The appropriate interrupt handler or Interrupt Service Routine (ISR) program is initiated by loading its start address into the program counter.\n\n3. When the ISR program has been executed, there is an immediate check to see if further interrupts need handling.\n\n4. Further interrupts are dealt with by repeated execution of the ISR program.\n\n5. If there are no further interrupts, the safely stored contents of the registers are restored to the CPU, and the originally running program is resumed.\n\nThe existence of an interrupt is only detected at the end of a fetch-execute cycle. This allows the current program to be interrupted and left in a defined state which can be returned to later.",
          }
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
    const radius = Math.min(width, height) / 2 * 0.9;

    // Select the SVG element and clear previous content
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
    svg.selectAll("*").remove(); // Clear previous render

    // Create root group centered in SVG
    const g = svg.append('g');

    // Create tree layout generator
    const treeLayout = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    // Create hierarchy from data
    const root = d3.hierarchy(data);

    // Generate the tree layout
    const treeData = treeLayout(root);

    // Add links between nodes
    const link = g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc") // Lighter link color
      .attr("stroke-opacity", 0.7)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(treeData.links())
      .join("path")
      .attr("d", d3.linkRadial<any, d3.HierarchyPointNode<MindmapNode>>() // Type hint for node data
        .angle(node => node.x) // Access angle from the node object
        .radius(node => node.y)); // Access radius from the node object

    // Add nodes with colors based on depth
    const colorScale = d3.scaleOrdinal<string, string>() // Domain type string (depth as string)
      .domain(["0", "1", "2", "3", "4"]) // Max depth assumed 4
      .range(["#4299E1", "#48BB78", "#F6AD55", "#F56565", "#9F7AEA"]);

    // Add nodes
    const node = g.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll("g")
      .data(treeData.descendants())
      .join("g")
      .attr("transform", d => `
        rotate(${(d.x * 180 / Math.PI - 90)}) 
        translate(${d.y},0)
      `)
      .attr("data-id", d => d.data.id); // Add data-id attribute for easier selection

    // Add node circles WITH HOVER EFFECT
    node.append("circle")
      .attr("fill", (d: any) => colorScale(d.depth.toString())) // Use string depth for colorScale
      .attr("r", d => d.data.id === "processor-fundamentals" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'processor-fundamentals' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'processor-fundamentals' ? 10 : 6)
            .attr('stroke', null); // Revert size and highlight
      });

    // Add node text labels - Rotate First, Then Translate
    const text = node.append("text")
      .attr("data-id", d => d.data.id) // Add data-id attribute for easier selection
      .attr("transform", (d: any) => {
        const inverseRotation = -(d.x * 180 / Math.PI - 90);
        const horizontalOffset = d.x < Math.PI ? 8 : -8;
        // Apply rotation around origin (0,0) first, then translate horizontally
        return `rotate(${inverseRotation}) translate(${horizontalOffset}, 0)`; 
      })
      .attr("dy", "0.31em") // Vertical alignment
      .attr("text-anchor", (d: any) => d.x < Math.PI ? "start" : "end") // Anchor based on left/right side
      .attr("fill", (d: any) => hiddenNodes.has(d.data.id) ? "#2D3748" : colorScale(d.depth.toString())) // Use background color if hidden
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("pointer-events", "none") // Avoid interfering with circle click
      .text((d: any) => d.data.name);
      
    // Set initial content
    if (!activeNode) {
      setInfoContent("Click on any node to see detailed information about that topic.");
    }

    // Setup zoom behavior
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr("transform", event.transform.toString());
        setZoom(event.transform.k);
      });

    // Store zoom behavior in ref for external control
    zoomRef.current = zoomBehavior;

    // Apply zoom behavior to SVG
    svg.call(zoomBehavior)
      .on("dblclick.zoom", null); // Disable double-click zoom

    // Initialize with a slight zoom out
    const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.8); // Centered by viewBox
    svg.call(zoomBehavior.transform, initialTransform);

    // Cleanup function
    return () => {
      if (svgRef.current) {
        // Remove event listeners
        svg.on('.zoom', null);
      }
    };
  }, [hiddenNodes]); // Add hiddenNodes to dependency array to update when nodes are hidden/shown

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Chapter 5: Processor Fundamentals</h1>
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Mindmap Area */} 
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full"></svg>
          
          {/* Zoom controls - Now as a floating panel */}
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
                <p>Click on a node in the mindmap to see detailed information about processor fundamentals.</p>
              )}
            </div>
            
            {/* Status message */}
            {saveStatus && (
              <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">
                {saveStatus}
              </div>
            )}
            
            {/* Button Container */}
            {activeNode && (
              <div className="space-y-2">
                {/* "I know this very well" button */}
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
                
                {/* "I need to revise this later" button */}
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

export default ProcessorFundamentalsMindMap;