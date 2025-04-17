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
const ChapterFourMindMap: React.FC = () => {
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

  // Define the data structure for the mindmap based on Chapter 4
  const data: MindmapNode = {
    name: "Logic Gates and Circuits",
    id: "logic-gates-circuits",
    summary: "Chapter 4 explores Boolean logic, logic gates, and logic circuits. It covers the construction and interpretation of truth tables, understanding logic gate functions, building logic circuits from problem statements, and creating logic expressions.",
    children: [
      {
        name: "Boolean Logic",
        id: "boolean-logic",
        summary: "Boolean logic deals with values that can be only TRUE or FALSE. In computing, these are represented as 1 (TRUE) and 0 (FALSE). Boolean logic provides the foundation for digital circuit design and computer operations through logic expressions and operators.",
        children: [
          {
            name: "Logic Propositions",
            id: "logic-propositions",
            summary: "A logic proposition is a statement that can have only one of two possible Boolean values: TRUE or FALSE. For example, 'Colombo is further north than Singapore' is a logic proposition that can be evaluated as either TRUE or FALSE (in this case, TRUE)."
          },
          {
            name: "Problem Statements",
            id: "problem-statements",
            summary: "Problem statements combine two or more logic propositions with operators to define conditions for an outcome. For example: 'You should take an umbrella if it is raining or if the weather forecast is for rain later.' This statement contains two logic propositions (highlighted) and defines when the outcome (taking an umbrella) should occur."
          },
          {
            name: "Logic Expressions",
            id: "logic-expressions",
            summary: "A logic expression combines logic propositions using Boolean operators. Any problem statement can be converted into a formal logic expression, which can then be used to create a logic circuit or truth table. For example, 'Take_umbrella = TRUE IF (raining = TRUE) OR (rain_forecast = TRUE)' is a logic expression derived from a problem statement."
          }
        ]
      },
      {
        name: "Boolean Operators",
        id: "boolean-operators",
        summary: "Boolean operators combine logic propositions to create complex expressions. The three basic operators are AND, OR, and NOT, with additional operators like NAND, NOR, and XOR providing additional functionality.",
        children: [
          {
            name: "Basic Operators",
            id: "basic-operators",
            summary: "The three fundamental Boolean operators are:\n\n- AND: A AND B is TRUE if both A and B are TRUE\n- OR: A OR B is TRUE if either A or B (or both) are TRUE\n- NOT: NOT A is TRUE if A is FALSE (inverts the value)\n\nThese three operators can be combined to create any possible logic function, though additional operators are often used for convenience."
          },
          {
            name: "Compound Operators",
            id: "compound-operators",
            summary: "Additional Boolean operators that can be derived from the basic ones include:\n\n- NAND: A NAND B is TRUE if A is FALSE or B is FALSE (equivalent to NOT (A AND B))\n- NOR: A NOR B is TRUE if A is FALSE and B is FALSE (equivalent to NOT (A OR B))\n- XOR (Exclusive OR): A XOR B is TRUE if A is TRUE or B is TRUE, but not both (exclusive OR)"
          },
          {
            name: "Operator Precedence",
            id: "operator-precedence",
            summary: "When evaluating complex logic expressions with multiple operators, precedence rules determine the order of operations. Using brackets (parentheses) can explicitly define the intended order. In expressions with multiple operators, the standard precedence is: \n1. NOT (highest precedence)\n2. AND\n3. OR (lowest precedence)\n\nFor example, in A OR B AND C, the AND operation is performed before the OR operation."
          }
        ]
      },
      {
        name: "Truth Tables",
        id: "truth-tables",
        summary: "A truth table is a systematic way to show all possible combinations of input values and their corresponding outputs for a logic expression or circuit. In truth tables, TRUE is represented as 1 and FALSE as 0.",
        children: [
          {
            name: "Construction",
            id: "truth-table-construction",
            summary: "To construct a truth table:\n\n1. Identify all input variables (e.g., A, B, C)\n2. Create a row for each possible combination of inputs (2^n rows for n inputs)\n3. Arrange inputs in binary counting order (000, 001, 010, 011, etc.)\n4. Calculate the output value for each combination of inputs\n5. Optional: Include columns for intermediate values to aid calculation\n\nA truth table provides a complete representation of a logic function's behavior."
          },
          {
            name: "From Logic Expression",
            id: "truth-table-from-expression",
            summary: "When creating a truth table from a logic expression:\n\n1. Identify all variables used in the expression\n2. Create columns for each variable and the final output\n3. Include columns for intermediate expressions (workspace)\n4. For each input combination, evaluate the expression step by step\n5. Record the final output values\n\nThis methodical approach ensures accuracy when dealing with complex expressions."
          },
          {
            name: "From Logic Circuit",
            id: "truth-table-from-circuit",
            summary: "When creating a truth table from a logic circuit:\n\n1. Identify all input signals\n2. Create a row for each possible combination of inputs\n3. Add workspace columns for outputs of intermediate gates\n4. Trace the signal through the circuit for each input combination\n5. Record the final output value\n\nThis systematic approach handles even complex circuits by breaking them down into manageable steps."
          }
        ]
      },
      {
        name: "Logic Gates",
        id: "logic-gates",
        summary: "Logic gates are the fundamental building blocks of digital circuits. Each gate implements a specific Boolean function, with standardized symbols used in circuit diagrams. Logic gates process binary inputs (0 or 1) and produce binary outputs according to their defined functions.",
        children: [
          {
            name: "Gate Symbols",
            id: "gate-symbols",
            summary: "Logic gates are represented by specific symbols in circuit diagrams:\n\n- AND: Shaped like a D with a flat right side\n- OR: Curved shape with a pointed right side\n- NOT: Triangle with a small circle at the output\n- NAND: AND symbol with a circle at the output\n- NOR: OR symbol with a circle at the output\n- XOR: Similar to OR but with an additional curve on the input side\n\nInputs are shown on the left side of the symbol, while outputs appear on the right."
          },
          {
            name: "NOT Gate",
            id: "not-gate",
            summary: "The NOT gate (inverter) has one input and one output. It reverses the logical state of its input.\n\nTruth Table:\nA | X\n0 | 1\n1 | 0\n\nThe NOT gate is the only basic gate with a single input and is represented by a triangle with a circle at its output."
          },
          {
            name: "AND Gate",
            id: "and-gate",
            summary: "The AND gate provides a TRUE output (1) only when all inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 1\n\nThe AND gate is represented by a D-shaped symbol with a flat right side."
          },
          {
            name: "OR Gate",
            id: "or-gate",
            summary: "The OR gate provides a TRUE output (1) when any input is TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 1\n\nThe OR gate is represented by a symbol with a curved input side and pointed output."
          },
          {
            name: "NAND Gate",
            id: "nand-gate",
            summary: "The NAND gate combines an AND gate followed by a NOT gate. It produces a FALSE output (0) only when all inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 1\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\nThe NAND gate is represented by an AND symbol with a circle at its output."
          },
          {
            name: "NOR Gate",
            id: "nor-gate",
            summary: "The NOR gate combines an OR gate followed by a NOT gate. It produces a TRUE output (1) only when all inputs are FALSE (0).\n\nTruth Table:\nA | B | X\n0 | 0 | 1\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 0\n\nThe NOR gate is represented by an OR symbol with a circle at its output."
          },
          {
            name: "XOR Gate",
            id: "xor-gate",
            summary: "The XOR (Exclusive OR) gate produces a TRUE output (1) when an odd number of inputs are TRUE (1).\n\nTruth Table:\nA | B | X\n0 | 0 | 0\n0 | 1 | 1\n1 | 0 | 1\n1 | 1 | 0\n\nFor two inputs, XOR is TRUE when inputs are different. It's represented by an OR symbol with an additional curved line at the input."
          }
        ]
      },
      {
        name: "Logic Circuits",
        id: "logic-circuits",
        summary: "Logic circuits are networks of interconnected logic gates that implement specific functions. They form the foundation of digital computing systems, processing binary signals (0s and 1s) according to defined logical operations.",
        children: [
          {
            name: "Circuit Construction",
            id: "circuit-construction",
            summary: "Logic circuits can be constructed from:\n\n1. Problem statements (by first converting to logic expressions)\n2. Logic expressions (by implementing each operator with its corresponding gate)\n3. Truth tables (by deriving expressions from output patterns)\n\nCircuits typically flow from left to right, with inputs on the left and outputs on the right. Intermediate connections represent signal paths between gates."
          },
          {
            name: "From Problem Statement",
            id: "circuit-from-statement",
            summary: "To create a logic circuit from a problem statement:\n\n1. Identify all conditions that can be TRUE or FALSE\n2. Assign symbols to each condition (e.g., A, B, C)\n3. Construct a logic expression using appropriate operators\n4. Implement the expression using logic gates\n\nFor example, a special bank lending rate might depend on account history AND certain other conditions, which can be translated into a combination of AND and OR gates."
          },
          {
            name: "From Logic Expression",
            id: "circuit-from-expression",
            summary: "To create a logic circuit from a logic expression:\n\n1. Identify the operations in the expression (AND, OR, NOT, etc.)\n2. Convert each operation to its corresponding gate\n3. Connect the gates according to the expression structure\n4. Use brackets in the expression to clarify the order of operations\n\nBrackets in the expression can guide the construction process by indicating which operations should be performed first."
          },
          {
            name: "From Truth Table",
            id: "circuit-from-truth-table",
            summary: "To create a logic circuit from a truth table:\n\n1. Identify rows where the output is 1\n2. For each such row, create a term using AND operators (use NOT for inputs that are 0)\n3. Combine these terms using OR operators\n4. Implement the resulting expression as a circuit\n\nThis process creates a sum-of-products expression that can be directly implemented, though it may not be the simplest possible circuit. Advanced techniques for circuit simplification are covered in later chapters."
          }
        ]
      },
      {
        name: "Practical Applications",
        id: "applications",
        summary: "Logic circuits have numerous practical applications in digital systems. They're used to implement decision-making processes, control systems, and digital components based on logical conditions.",
        children: [
          {
            name: "Fault Detection",
            id: "fault-detection",
            summary: "Logic circuits can monitor system conditions and detect faults when specific combinations of inputs occur. For example, a monitoring system for an oven might track component statuses (fan working, light functioning, temperature in range) and activate warnings when certain fault conditions are detected."
          },
          {
            name: "Digital Components",
            id: "digital-components",
            summary: "Logic gates and circuits form the building blocks of more complex digital components such as:\n\n- Registers for storing data\n- Counters for tracking events\n- Adders for arithmetic operations\n- Multiplexers for selecting between multiple inputs\n- Decoders for converting binary codes\n\nThese components, in turn, are assembled into larger systems like processors and memory units."
          },
          {
            name: "Control Systems",
            id: "control-systems",
            summary: "Logic circuits implement control systems that make decisions based on various input conditions. Examples include:\n\n- Heating/cooling systems activating based on temperature thresholds\n- Security systems triggering alarms based on sensor inputs\n- Traffic light controllers sequencing lights based on traffic patterns\n- Manufacturing equipment responding to process conditions\n\nThese systems evaluate inputs according to predetermined logical conditions to generate appropriate control signals."
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
      .attr("r", d => d.data.id === "logic-gates-circuits" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'logic-gates-circuits' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'logic-gates-circuits' ? 10 : 6)
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
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white"> {/* Full height, dark theme */}
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 4: Logic Gates and Circuits</h1>
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden"> {/* Use flex-grow */} 
        {/* Mindmap Area */} 
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900"> {/* Darker background for SVG */}
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
              {activeNodeName || "Topic Information"} {/* Show active node name */} 
              {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4"> {/* Added whitespace-pre-line to preserve line breaks */} 
              {infoContent ? (
                <p>{infoContent}</p>
              ) : (
                <p>Click on a node in the mindmap to see detailed information.</p>
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

export default ChapterFourMindMap;