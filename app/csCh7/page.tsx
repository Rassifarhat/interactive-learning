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
  name: "What topics does Chapter 7 on monitoring and control systems cover?",
  id: "monitoring-control-systems",
  summary: "Chapter 7 explores monitoring and control systems, covering how computers interface with the physical world through sensors and actuators. It examines how bit manipulation can be used to monitor and control devices, creating systems that can automatically respond to environmental conditions.",
  children: [
    {
      name: "What is a monitoring system and what are its key components?",
      id: "monitoring-systems",
      summary: "A monitoring system creates a record of a system's condition over time. It often detects when physical properties go outside desired ranges. Monitoring systems require sensors to measure physical quantities and transmit these values to a computer for processing.\n\nKey points:\n- Sensors measure physical properties such as temperature, humidity, pressure, etc.\n- Sensors have no built-in intelligence; they only measure and report values\n- The computer processes sensor data and determines if action is needed\n- In a simple monitoring system, the computer may sound an alarm when values exceed thresholds",
      children: [
        {
          name: "What types of sensors are used and what physical quantities do they measure?",
          id: "sensor-types",
          summary: "Sensors measure various physical quantities and convert them into electrical signals that can be processed by a computer. Different types of sensors measure different properties:\n\n- Temperature sensors (e.g., thermocouples)\n- Humidity sensors\n- Pressure sensors\n- Light sensors (e.g., passive infrared)\n- Sound sensors\n- Motion sensors\n- Carbon monoxide sensors\n- pH sensors\n\nSensors convert physical properties into electrical signals that can be transmitted to a computer. Some sensors are named after what they measure (e.g., temperature sensor), while others are named by their method of operation (e.g., infrared sensor) or by their general purpose (e.g., motion sensor).",
        },
        {
          name: "How are analog sensor signals converted for digital processing?",
          id: "signal-conversion",
          summary: "Most sensors produce analog signals that must be converted to digital form for computer processing:\n\n- Analog-to-Digital Converters (ADCs) are used to convert sensor readings to digital values\n- The ADC may be a separate component or integrated into the sensor\n- Resolution of the ADC affects the precision of measurements\n- Sampling rate determines how frequently measurements are taken\n\nThe computer requires digital signals to process sensor data, making the ADC a critical component in any monitoring system. The computer can then compare the digital values with predefined thresholds to determine if action is needed.",
        }
      ]
    },
    {
      name: "What is a control system and how does it differ from monitoring only?",
      id: "control-systems",
      summary: "A control system combines monitoring functionality with the ability to control a system's behavior. Control systems use actuators to affect physical changes in the environment based on sensor readings and programmed logic.\n\nKey components:\n- Sensors measure physical properties\n- Computer processes sensor data according to programmed rules\n- Actuators implement physical changes based on computer instructions\n- Feedback from sensors allows the system to adjust its actions\n\nA control system operates in a continuous cycle: measure, evaluate, act, and then measure again to determine the effect of actions taken.",
      children: [
        {
          name: "What are actuators and how do they convert signals into physical actions?",
          id: "actuators",
          summary: "Actuators are devices that convert electrical signals into physical action. They are the 'output' components that allow a control system to affect its environment:\n\n- Electric motors that can rotate or move components\n- Solenoids that can push or pull\n- Relays that can switch electrical circuits on or off\n- Pumps that can control fluid flow\n- Heaters that can control temperature\n- Valves that can control gas or liquid flow\n\nActuators receive signals from the computer, typically through a Digital-to-Analog Converter (DAC), and perform the physical actions needed to maintain desired conditions in the system.",
        },
        {
          name: "What role does feedback play in control systems, and what are open‑ and closed‑loop systems?",
          id: "feedback-systems",
          summary: "Feedback is essential in control systems, allowing the system to adjust its actions based on the effects of previous actions:\n\n- Open-loop systems don't use feedback and simply follow programmed actions\n- Closed-loop systems use feedback to adjust their actions continuously\n- Negative feedback helps maintain stability by counteracting changes\n- Positive feedback amplifies changes (rarely used in control systems)\n\nIn a closed-loop feedback control system, the computer continuously compares the actual output (measured by sensors) with the desired output and adjusts the actuators accordingly. This allows the system to maintain stability despite external disturbances.",
        },
        {
          name: "How does a closed‑loop feedback control system operate in practice?",
          id: "closed-loop-feedback",
          summary: "A closed-loop feedback control system is a specific type of control system where feedback directly influences operation:\n\n- The controller (microprocessor) compares actual output with desired output\n- The difference (error) is used to calculate appropriate actuator settings\n- Sensors continuously monitor the actual output\n- The system automatically adjusts to maintain the desired output\n\nClosed-loop feedback control systems can be found in many applications including:\n- Thermostats for temperature control\n- Cruise control in vehicles\n- Industrial process control\n- Automatic pilots in aircraft\n- Robotic systems",
        }
      ]
    },
    {
      name: "How is bit manipulation used to manage flags and states in control systems?",
      id: "bit-manipulation-control",
      summary: "In monitoring and control systems, bit manipulation techniques are used to efficiently manage system states and flags. Individual bits within bytes can represent different conditions or control signals.\n\nKey concepts:\n- Individual bits can represent Boolean flags (on/off states)\n- Bitwise operations (AND, OR, XOR) can set, clear, or toggle these flags\n- Multiple conditions can be stored efficiently in a single byte\n- Assembly language is often used for direct bit manipulation",
      children: [
        {
          name: "How do you clear all bits in a byte to zero using bitwise operations?",
          id: "setting-bits-zero",
          summary: "To initialize a system, all bits might need to be set to zero:\n\n```\nLDO 0034    ; Load a byte into the accumulator from an address\nAND #00000000  ; Bitwise AND with all zeros sets all bits to zero\nSTO 0034    ; Store the altered byte back to the original address\n```\n\nThis operation clears all flags and is typically used during system initialization or reset operations. The AND operation with all zeros forces every bit to become zero regardless of its previous value.",
        },
        {
          name: "How can specific bits be toggled using XOR operations?",
          id: "toggling-bit-values",
          summary: "The XOR (exclusive OR) operation can toggle specific bits between 0 and 1:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nXOR #00000001  ; Toggle bit in position 0 (least significant bit)\nSTO 0034    ; Store the altered byte\n```\n\nToggling bits is useful when a condition changes state, such as when a problem occurs or is resolved. The XOR operation with a 1 in a specific position will change that bit from 0 to 1 or from 1 to 0, while leaving all other bits unchanged.",
        },
        {
          name: "How do you set particular bits to one without affecting others?",
          id: "setting-bits-one",
          summary: "The OR operation can set specific bits to 1 regardless of their current value:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nOR #00000100   ; Set bit in position 2 to 1 (other bits unchanged)\nSTO 0034    ; Store the altered byte\n```\n\nThis operation is used to flag conditions or enable features without affecting other settings. The OR operation with a 1 in a specific position will set that bit to 1, while leaving all other bits unchanged.",
        },
        {
          name: "How can you isolate and test individual bits using bitwise AND?",
          id: "isolating-specific-bits",
          summary: "The AND operation can isolate specific bits for testing:\n\n```\nLDO 0034    ; Load a byte into the accumulator\nAND #00000010  ; Clear all bits except bit in position 1\nSTO 0034    ; Store the altered byte\n```\n\nAfter this operation, the value can be compared with a binary value (e.g., 2) to check if the specific bit was set. This technique is useful for checking individual flags or conditions. The AND operation with a 1 in a specific position will preserve that bit's value while forcing all other bits to 0.",
        }
      ]
    },
    {
      name: "What characterizes real‑time programming for monitoring and control?",
      id: "real-time-programming",
      summary: "Monitoring and control systems require real-time programming approaches where the computer must respond to events within specific time constraints.\n\nKey characteristics:\n- Programs run continuously in an infinite loop\n- Sensor readings are taken at regular timed intervals\n- Response time is critical for proper system operation\n- Multiple conditions may need to be monitored simultaneously\n- Flag variables track different system states\n\nReal-time programs must be efficient and deterministic, with predictable execution times to ensure reliable system behavior.",
      children: [
        {
          name: "What is the typical structure of a real‑time monitoring/control program?",
          id: "program-structure",
          summary: "Real-time programs for monitoring and control typically follow a specific structure:\n\n1. Initialization phase:\n   - Set up hardware components\n   - Initialize variables and flags\n   - Configure interrupt handlers if used\n\n2. Main control loop:\n   - Read sensor values at regular intervals\n   - Compare values against thresholds\n   - Set appropriate flags based on comparisons\n   - Take actions based on flag states\n   - Provide feedback (if a control system)\n\nThe main loop runs continuously, with timing mechanisms ensuring that sensor readings are taken at appropriate intervals.",
        },
        {
          name: "How are flag variables used to track and respond to system conditions?",
          id: "flag-variables",
          summary: "Boolean flag variables are used to track different conditions in the system:\n\n- Each flag represents a specific condition (e.g., temperature too high)\n- Flags are set based on sensor readings compared to thresholds\n- Multiple flags can be combined to determine appropriate actions\n- In assembly language, individual bits often represent flags\n- Bitwise operations manipulate these flags efficiently\n\nExample flag usage in high-level pseudocode:\n```\nIF SensorDifference1 > 0 THEN Sensor1HighFlag = TRUE\nIF SensorDifference1 < 0 THEN Sensor1LowFlag = TRUE\nIF SensorDifference2 > 0 THEN Sensor2HighFlag = TRUE\nIF SensorDifference2 < 0 THEN Sensor2LowFlag = TRUE\n```",
        }
      ]
    },
    {
      name: "What are some real‑world applications of monitoring and control systems?",
      id: "applications",
      summary: "Monitoring and control systems have numerous real-world applications across various domains:\n\n- Environmental control in buildings (HVAC systems)\n- Industrial process control\n- Agricultural systems (greenhouse control)\n- Automotive systems (engine management, cruise control)\n- Medical devices (patient monitoring, drug delivery)\n- Home automation systems\n- Security systems\n\nThese applications combine sensors, actuators, and control logic to maintain desired conditions or respond to specific events.",
      children: [
        {
          name: "How do environmental monitoring systems operate and what do they measure?",
          id: "environmental-monitoring",
          summary: "Environmental monitoring systems track conditions without necessarily taking control actions:\n\n- Weather stations monitoring temperature, humidity, wind speed, etc.\n- Air quality monitoring systems\n- Water quality monitoring in lakes and rivers\n- Noise level monitoring in urban areas\n- Radiation monitoring around nuclear facilities\n\nThese systems collect data over time to identify trends, alert to dangerous conditions, or inform policy decisions. They typically have data storage capabilities and may transmit data to central monitoring stations.",
        },
        {
          name: "What functions do agricultural control systems perform to optimize growing conditions?",
          id: "agricultural-control",
          summary: "Agricultural control systems help optimize growing conditions for plants and animals:\n\n- Greenhouse climate control (temperature, humidity, CO2 levels)\n- Irrigation systems based on soil moisture\n- Livestock environment control (temperature, ventilation)\n- Automated feeding systems\n- Egg collection and poultry barn management\n\nThese systems can significantly increase productivity by maintaining optimal growing conditions and reducing manual labor requirements. They often combine multiple sensors and actuators managed by a central control system.",
        },
        {
          name: "How do home automation systems monitor and control home environments?",
          id: "home-automation",
          summary: "Home automation systems provide comfort, convenience, and energy efficiency:\n\n- Smart thermostats for heating and cooling control\n- Lighting control based on occupancy or time of day\n- Security systems with motion detection\n- Automated window blinds responding to light levels\n- Energy consumption monitoring and management\n\nModern home automation systems often integrate with smartphones and voice assistants, allowing remote monitoring and control. They typically combine various sensors and actuators throughout the home, all connected to a central hub or controller.",
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterSevenMindMap: React.FC = () => {
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
                      7,
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

export default ChapterSevenMindMap;