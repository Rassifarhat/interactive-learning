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
const MonitoringControlMindMap: React.FC = () => {
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

  // Define the data structure for the mindmap based on Chapter 7
  const data: MindmapNode = {
    name: "Monitoring and Control Systems",
    id: "monitoring-control-systems",
    summary: "Chapter 7 explores monitoring and control systems, covering how computers interface with the physical world through sensors and actuators. It examines how bit manipulation can be used to monitor and control devices, creating systems that can automatically respond to environmental conditions.",
    children: [
      {
        name: "Monitoring Systems",
        id: "monitoring-systems",
        summary: "A monitoring system creates a record of a system's condition over time. It often detects when physical properties go outside desired ranges. Monitoring systems require sensors to measure physical quantities and transmit these values to a computer for processing.\n\nKey points:\n- Sensors measure physical properties such as temperature, humidity, pressure, etc.\n- Sensors have no built-in intelligence; they only measure and report values\n- The computer processes sensor data and determines if action is needed\n- In a simple monitoring system, the computer may sound an alarm when values exceed thresholds",
        children: [
          {
            name: "Sensor Types",
            id: "sensor-types",
            summary: "Sensors measure various physical quantities and convert them into electrical signals that can be processed by a computer. Different types of sensors measure different properties:\n\n- Temperature sensors (e.g., thermocouples)\n- Humidity sensors\n- Pressure sensors\n- Light sensors (e.g., passive infrared)\n- Sound sensors\n- Motion sensors\n- Carbon monoxide sensors\n- pH sensors\n\nSensors convert physical properties into electrical signals that can be transmitted to a computer. Some sensors are named after what they measure (e.g., temperature sensor), while others are named by their method of operation (e.g., infrared sensor) or by their general purpose (e.g., motion sensor).",
          },
          {
            name: "Signal Conversion",
            id: "signal-conversion",
            summary: "Most sensors produce analog signals that must be converted to digital form for computer processing:\n\n- Analog-to-Digital Converters (ADCs) are used to convert sensor readings to digital values\n- The ADC may be a separate component or integrated into the sensor\n- Resolution of the ADC affects the precision of measurements\n- Sampling rate determines how frequently measurements are taken\n\nThe computer requires digital signals to process sensor data, making the ADC a critical component in any monitoring system. The computer can then compare the digital values with predefined thresholds to determine if action is needed.",
          }
        ]
      },
      {
        name: "Control Systems",
        id: "control-systems",
        summary: "A control system combines monitoring functionality with the ability to control a system's behavior. Control systems use actuators to affect physical changes in the environment based on sensor readings and programmed logic.\n\nKey components:\n- Sensors measure physical properties\n- Computer processes sensor data according to programmed rules\n- Actuators implement physical changes based on computer instructions\n- Feedback from sensors allows the system to adjust its actions\n\nA control system operates in a continuous cycle: measure, evaluate, act, and then measure again to determine the effect of actions taken.",
        children: [
          {
            name: "Actuators",
            id: "actuators",
            summary: "Actuators are devices that convert electrical signals into physical action. They are the 'output' components that allow a control system to affect its environment:\n\n- Electric motors that can rotate or move components\n- Solenoids that can push or pull\n- Relays that can switch electrical circuits on or off\n- Pumps that can control fluid flow\n- Heaters that can control temperature\n- Valves that can control gas or liquid flow\n\nActuators receive signals from the computer, typically through a Digital-to-Analog Converter (DAC), and perform the physical actions needed to maintain desired conditions in the system.",
          },
          {
            name: "Feedback Systems",
            id: "feedback-systems",
            summary: "Feedback is essential in control systems, allowing the system to adjust its actions based on the effects of previous actions:\n\n- Open-loop systems don't use feedback and simply follow programmed actions\n- Closed-loop systems use feedback to adjust their actions continuously\n- Negative feedback helps maintain stability by counteracting changes\n- Positive feedback amplifies changes (rarely used in control systems)\n\nIn a closed-loop feedback control system, the computer continuously compares the actual output (measured by sensors) with the desired output and adjusts the actuators accordingly. This allows the system to maintain stability despite external disturbances.",
          },
          {
            name: "Closed-Loop Feedback",
            id: "closed-loop-feedback",
            summary: "A closed-loop feedback control system is a specific type of control system where feedback directly influences operation:\n\n- The controller (microprocessor) compares actual output with desired output\n- The difference (error) is used to calculate appropriate actuator settings\n- Sensors continuously monitor the actual output\n- The system automatically adjusts to maintain the desired output\n\nClosed-loop feedback control systems can be found in many applications including:\n- Thermostats for temperature control\n- Cruise control in vehicles\n- Industrial process control\n- Automatic pilots in aircraft\n- Robotic systems",
          }
        ]
      },
      {
        name: "Bit Manipulation for Control",
        id: "bit-manipulation-control",
        summary: "In monitoring and control systems, bit manipulation techniques are used to efficiently manage system states and flags. Individual bits within bytes can represent different conditions or control signals.\n\nKey concepts:\n- Individual bits can represent Boolean flags (on/off states)\n- Bitwise operations (AND, OR, XOR) can set, clear, or toggle these flags\n- Multiple conditions can be stored efficiently in a single byte\n- Assembly language is often used for direct bit manipulation",
        children: [
          {
            name: "Setting Bits to Zero",
            id: "setting-bits-zero",
            summary: "To initialize a system, all bits might need to be set to zero:\n\n```\nLDO 0034    ; Load a byte into the accumulator from an address\nAND #00000000  ; Bitwise AND with all zeros sets all bits to zero\nSTO 0034    ; Store the altered byte back to the original address\n```\n\nThis operation clears all flags and is typically used during system initialization or reset operations. The AND operation with all zeros forces every bit to become zero regardless of its previous value.",
          },
          {
            name: "Toggling Bit Values",
            id: "toggling-bit-values",
            summary: "The XOR (exclusive OR) operation can toggle specific bits between 0 and 1:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nXOR #00000001  ; Toggle bit in position 0 (least significant bit)\nSTO 0034    ; Store the altered byte\n```\n\nToggling bits is useful when a condition changes state, such as when a problem occurs or is resolved. The XOR operation with a 1 in a specific position will change that bit from 0 to 1 or from 1 to 0, while leaving all other bits unchanged.",
          },
          {
            name: "Setting Bits to One",
            id: "setting-bits-one",
            summary: "The OR operation can set specific bits to 1 regardless of their current value:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nOR #00000100   ; Set bit in position 2 to 1 (other bits unchanged)\nSTO 0034    ; Store the altered byte\n```\n\nThis operation is used to flag conditions or enable features without affecting other settings. The OR operation with a 1 in a specific position will set that bit to 1, while leaving all other bits unchanged.",
          },
          {
            name: "Isolating Specific Bits",
            id: "isolating-specific-bits",
            summary: "The AND operation can isolate specific bits for testing:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nAND #00000010  ; Clear all bits except bit in position 1\nSTO 0034    ; Store the altered byte\n```\n\nAfter this operation, the value can be compared with a binary value (e.g., 2) to check if the specific bit was set. This technique is useful for checking individual flags or conditions. The AND operation with a 1 in a specific position will preserve that bit's value while forcing all other bits to 0.",
          }
        ]
      },
      {
        name: "Real-Time Programming",
        id: "real-time-programming",
        summary: "Monitoring and control systems require real-time programming approaches where the computer must respond to events within specific time constraints.\n\nKey characteristics:\n- Programs run continuously in an infinite loop\n- Sensor readings are taken at regular timed intervals\n- Response time is critical for proper system operation\n- Multiple conditions may need to be monitored simultaneously\n- Flag variables track different system states\n\nReal-time programs must be efficient and deterministic, with predictable execution times to ensure reliable system behavior.",
        children: [
          {
            name: "Program Structure",
            id: "program-structure",
            summary: "Real-time programs for monitoring and control typically follow a specific structure:\n\n1. Initialization phase:\n   - Set up hardware components\n   - Initialize variables and flags\n   - Configure interrupt handlers if used\n\n2. Main control loop:\n   - Read sensor values at regular intervals\n   - Compare values against thresholds\n   - Set appropriate flags based on comparisons\n   - Take actions based on flag states\n   - Provide feedback (if a control system)\n\nThe main loop runs continuously, with timing mechanisms ensuring that sensor readings are taken at appropriate intervals.",
          },
          {
            name: "Flag Variables",
            id: "flag-variables",
            summary: "Boolean flag variables are used to track different conditions in the system:\n\n- Each flag represents a specific condition (e.g., temperature too high)\n- Flags are set based on sensor readings compared to thresholds\n- Multiple flags can be combined to determine appropriate actions\n- In assembly language, individual bits often represent flags\n- Bitwise operations manipulate these flags efficiently\n\nExample flag usage in high-level pseudocode:\n```\nIF SensorDifference1 > 0 THEN Sensor1HighFlag = TRUE\nIF SensorDifference1 < 0 THEN Sensor1LowFlag = TRUE\nIF SensorDifference2 > 0 THEN Sensor2HighFlag = TRUE\nIF SensorDifference2 < 0 THEN Sensor2LowFlag = TRUE\n```",
          }
        ]
      },
      {
        name: "Applications",
        id: "applications",
        summary: "Monitoring and control systems have numerous real-world applications across various domains:\n\n- Environmental control in buildings (HVAC systems)\n- Industrial process control\n- Agricultural systems (greenhouse control)\n- Automotive systems (engine management, cruise control)\n- Medical devices (patient monitoring, drug delivery)\n- Home automation systems\n- Security systems\n\nThese applications combine sensors, actuators, and control logic to maintain desired conditions or respond to specific events.",
        children: [
          {
            name: "Environmental Monitoring",
            id: "environmental-monitoring",
            summary: "Environmental monitoring systems track conditions without necessarily taking control actions:\n\n- Weather stations monitoring temperature, humidity, wind speed, etc.\n- Air quality monitoring systems\n- Water quality monitoring in lakes and rivers\n- Noise level monitoring in urban areas\n- Radiation monitoring around nuclear facilities\n\nThese systems collect data over time to identify trends, alert to dangerous conditions, or inform policy decisions. They typically have data storage capabilities and may transmit data to central monitoring stations.",
          },
          {
            name: "Agricultural Control",
            id: "agricultural-control",
            summary: "Agricultural control systems help optimize growing conditions for plants and animals:\n\n- Greenhouse climate control (temperature, humidity, CO2 levels)\n- Irrigation systems based on soil moisture\n- Livestock environment control (temperature, ventilation)\n- Automated feeding systems\n- Egg collection and poultry barn management\n\nThese systems can significantly increase productivity by maintaining optimal growing conditions and reducing manual labor requirements. They often combine multiple sensors and actuators managed by a central control system.",
          },
          {
            name: "Home Automation",
            id: "home-automation",
            summary: "Home automation systems provide comfort, convenience, and energy efficiency:\n\n- Smart thermostats for heating and cooling control\n- Lighting control based on occupancy or time of day\n- Security systems with motion detection\n- Automated window blinds responding to light levels\n- Energy consumption monitoring and management\n\nModern home automation systems often integrate with smartphones and voice assistants, allowing remote monitoring and control. They typically combine various sensors and actuators throughout the home, all connected to a central hub or controller.",
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
      .attr("r", d => d.data.id === "monitoring-control-systems" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'monitoring-control-systems' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'monitoring-control-systems' ? 10 : 6)
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
        <h1 className="text-xl font-semibold">Chapter 7: Monitoring and Control Systems</h1>
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
                <p>Click on a node in the mindmap to see detailed information about monitoring and control systems.</p>
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

export default MonitoringControlMindMap;