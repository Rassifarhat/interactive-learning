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
const ChapterNineMindMap: React.FC = () => {
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

  // Define the data structure for the mindmap
  const data: MindmapNode = {
    name: "Kinetics and Equilibria",
    id: "kinetics-equilibria",
    summary: "Kinetics is the study of rates of reactions, while equilibria examines the behavior of reversible reactions and equilibrium states.",
    children: [
      {
        name: "Kinetics",
        id: "kinetics",
        summary: "Reaction kinetics is the study of rates of reactions. Some reactions in everyday life take place very quickly, while other reactions are very slow. For example, the combustion of petrol is rapid while the formation of stalactites and stalagmites is very slow.",
        children: [
          {
            name: "Rate of Reaction",
            id: "rate-of-reaction",
            summary: "We can determine the rate of a chemical reaction by the change in concentration of a reactant or a product per unit time.\nrate of reaction = (change in concentration) / (time for change to happen)\n\nTo measure the rate of a reaction, we need to find out either how fast a reactant is being used up or how fast a product is being formed.",
            children: [
              {
                name: "Measuring Rate",
                id: "measuring-rate",
                summary: "The rate of reaction can be determined by drawing a tangent to the concentration-time curve at a specific point and measuring its gradient. If the unit of concentration is mol dm⁻³ and the unit of time is seconds, then the unit of rate will be mol dm⁻³ s⁻¹.\n\nAlternatively, rate can be calculated from the time taken for a known amount of product to be formed: rate = (volume of gas collected) / (time taken)"
              }
            ]
          },
          {
            name: "Collision Theory",
            id: "collision-theory",
            summary: "For a reaction to occur, molecules must collide with each other. However, not all collisions result in a reaction. There are two requirements for a reaction to occur: molecules must collide with sufficient energy (activation energy), and in the correct orientation.",
            children: [
              {
                name: "Activation Energy",
                id: "activation-energy",
                summary: "The activation energy is the minimum energy that colliding particles must possess for a reaction to occur. If particles collide with less energy than the activation energy, they simply bounce apart and no reaction occurs. Think of the activation energy as a barrier to the reaction. Only collisions with energies equal to or greater than the activation energy result in a reaction.\n\nAny chemical reaction results in breaking some bonds (needing energy) and making new ones (releasing energy). Activation energy is involved in breaking some of the original bonds."
              },
              {
                name: "Molecular Orientation",
                id: "molecular-orientation",
                summary: "The orientation of molecules when they collide is crucial for a reaction to occur. For example, in the reaction between ethene and hydrogen bromide, the reaction can only happen if the hydrogen end of the H-Br molecule approaches the C=C of the ethene molecule. Any other collision orientation will result in the molecules simply bouncing off each other.\n\nWhen molecular shapes influence reactions, we call this a 'steric factor'. Large atoms or groups can cause 'steric hindrance' by getting in the way of an attacking species."
              }
            ]
          },
          {
            name: "Factors Affecting Rate",
            id: "factors-affecting-rate",
            summary: "Several factors can affect the rate of a chemical reaction. These include concentration, pressure, surface area, temperature, and catalysts.",
            children: [
              {
                name: "Concentration Effect",
                id: "concentration-effect",
                summary: "For reactions in solution, an increase in concentration often causes an increase in reaction rate. If the concentration of a solution is increased, then the frequency of collisions between reacting solute particles also increases because they are closer together. The frequency of successful collisions increases, which produces an increase in the rate of reaction."
              },
              {
                name: "Pressure Effect",
                id: "pressure-effect",
                summary: "For gas phase reactions, an increase in pressure will cause an increase in the rate. If the pressure is increased, there will be more reactant molecules in a given volume. The frequency of collisions will increase, resulting in an increase in the rate of reaction.\n\nChanging the pressure has almost no effect on reactions in the solid or liquid phase since their volumes change very little under pressure."
              },
              {
                name: "Surface Area Effect",
                id: "surface-area-effect",
                summary: "For heterogeneous reactions involving a solid, a larger surface area of the solid will result in a faster reaction. Only collisions between the reactant particles and solid atoms on the surface can result in reaction. If the solid is powdered, the surface area is increased and the reaction proceeds more quickly.\n\nThe effectiveness of solid catalysts is also improved if they are finely divided."
              },
              {
                name: "Temperature Effect",
                id: "temperature-effect",
                summary: "An increase in temperature increases the fraction of molecules that possess the required activation energy. The rate of reaction increases because the number of successful collisions per second increases.\n\nThis is explained using the Maxwell-Boltzmann distribution of molecular energies, which shows how the energy distribution of molecules changes with temperature."
              }
            ]
          },
          {
            name: "Maxwell-Boltzmann Distribution",
            id: "maxwell-boltzmann-distribution",
            summary: "The molecules in a sample of gas have a wide range of energies. The Maxwell-Boltzmann distribution curve shows this distribution at different temperatures. Important points about these curves:\n• Neither curve is symmetrical\n• Both curves start at the origin and finish by approaching the x-axis asymptotically\n• The area under each curve is the same (the number of molecules hasn't changed)\n• The peak at higher temperature is displaced to the right and is lower than at lower temperature\n\nThe area under the curve beyond the activation energy represents the fraction of molecules with enough energy to react when they collide."
          },
          {
            name: "Catalysts",
            id: "catalysts",
            summary: "A catalyst works by providing an alternative route for the reaction with a lower activation energy than the original route. This means more molecules have sufficient energy to react, increasing the reaction rate.",
            children: [
              {
                name: "Reaction Profiles",
                id: "reaction-profiles",
                summary: "A reaction profile diagram shows the relative enthalpy levels of reactants and products, including the activation energy. For a catalyzed reaction, the profile shows a lower activation energy pathway. If the catalyzed reaction involves an intermediate, the reaction profile becomes more complex, showing multiple energy barriers."
              },
              {
                name: "Industrial Catalysts",
                id: "industrial-catalysts",
                summary: "Catalysts are widely used in industry to increase reaction rates and allow reactions to take place at lower temperatures, reducing energy costs. Most industrial catalysts are heterogeneous catalysts, where the catalyst is in a different phase than the reactants. Solid catalysts provide a surface on which gas molecules can adsorb, react, and then desorb.\n\nCatalysts can also improve atom economy by enabling reactions that make desired products with little or no co-products, reducing waste in chemical manufacturing."
              }
            ]
          }
        ]
      },
      {
        name: "Equilibria",
        id: "equilibria",
        summary: "Many reactions are readily reversible and can reach a state of dynamic equilibrium where both forward and backward reactions occur at equal rates, resulting in constant concentrations of reactants and products.",
        children: [
          {
            name: "Reversible Reactions",
            id: "reversible-reactions",
            summary: "When a reaction is reversible, it does not go to completion. At the end of the reaction, detectable amounts of the reactants remain, mixed with the product. Whether a reaction is considered reversible depends on how carefully we measure the concentrations. In practical terms, if a reaction is more than 99% complete, we usually consider it to have gone to completion.\n\nThe symbol ⇌ represents a reversible reaction in chemical equations.",
            children: [
              {
                name: "Dynamic Equilibrium",
                id: "dynamic-equilibrium",
                summary: "A dynamic equilibrium is established when:\n• The reaction is reversible\n• The reaction mixture is in a closed container\n\nThree important features define a system in dynamic equilibrium:\n• Both forward and backward reactions are continuously occurring\n• The rate of the forward reaction equals the rate of the backward reaction\n• The concentrations of reactants and products remain constant\n\nAlthough the concentrations remain constant, the system is 'dynamic' because reactions are still taking place."
              }
            ]
          },
          {
            name: "Changing Equilibrium",
            id: "changing-equilibrium",
            summary: "When a reaction mixture reaches equilibrium, the composition will not change as long as conditions remain the same. However, if conditions change, the position of equilibrium may shift to favor either reactants or products.",
            children: [
              {
                name: "Concentration Changes",
                id: "concentration-changes",
                summary: "Changes in concentration affect the position of equilibrium:\n• Increasing reactant concentration shifts equilibrium to the right (more products)\n• Decreasing reactant concentration shifts equilibrium to the left (more reactants)\n• Increasing product concentration shifts equilibrium to the left (more reactants)\n• Decreasing product concentration shifts equilibrium to the right (more products)"
              },
              {
                name: "Pressure Changes",
                id: "pressure-changes",
                summary: "For gaseous reactions, pressure changes affect the position of equilibrium based on the number of gas molecules on each side of the equation:\n• If there are more moles of gas on the reactant side, increasing pressure shifts equilibrium to the product side\n• If there are more moles of gas on the product side, increasing pressure shifts equilibrium to the reactant side\n• If the number of moles of gas is the same on both sides, pressure changes have no effect on the position of equilibrium"
              },
              {
                name: "Temperature Changes",
                id: "temperature-changes",
                summary: "Temperature changes affect the position of equilibrium based on whether the forward reaction is exothermic or endothermic:\n• For an exothermic forward reaction (ΔH negative), increasing temperature shifts equilibrium to the left\n• For an exothermic forward reaction, decreasing temperature shifts equilibrium to the right\n• For an endothermic forward reaction (ΔH positive), increasing temperature shifts equilibrium to the right\n• For an endothermic forward reaction, decreasing temperature shifts equilibrium to the left"
              },
              {
                name: "Effect of Catalysts",
                id: "effect-of-catalysts-equilibrium",
                summary: "A catalyst increases the rate of both the forward and backward reactions by the same factor. Therefore, a catalyst does not change the position of equilibrium - it only reduces the time required to establish equilibrium."
              }
            ]
          },
          {
            name: "Industrial Applications",
            id: "industrial-applications",
            summary: "The principles of reaction rates and reversibility play an important role in the design of industrial processes. To maximize profits, chemists aim to convert reactants into products as quickly and completely as possible.",
            children: [
              {
                name: "Haber Process",
                id: "haber-process",
                summary: "The Haber process for manufacturing ammonia demonstrates the balance between kinetics and equilibrium. The reaction is:\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = -92 kJ mol⁻¹\n\nLow temperatures would give a high equilibrium yield (exothermic reaction), but the reaction would be too slow. High pressures also increase yield (fewer moles of gas on the product side). In practice, a compromise of around 450°C and 250 atmospheres pressure is used, with an iron catalyst to speed up the reaction."
              },
              {
                name: "Contact Process",
                id: "contact-process",
                summary: "The Contact process for producing sulfuric acid involves the oxidation of sulfur dioxide to sulfur trioxide:\nSO₂(g) + ½O₂(g) ⇌ SO₃(g)  ΔH = -96 kJ mol⁻¹\n\nLike the Haber process, the conditions used (around 450°C and 2 atmospheres pressure with a vanadium(V) oxide catalyst) represent a compromise between equilibrium yield and reaction rate."
              }
            ]
          }
        ]
      }
    ]
  };

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
      .attr("r", d => d.data.id === "root" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'root' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'root' ? 10 : 6)
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

  }, [hiddenNodes]); // Add hiddenNodes to dependency array to update when nodes are hidden/shown

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
  
  const activeNodeName = findNodeName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white"> {/* Full height, dark theme */}
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 9: Kinetics and Equilibria</h1>
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
            >
              <span className="text-xl">+</span>
            </button>
            <button 
              onClick={handleZoomOut}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <span className="text-xl">-</span>
            </button>
            <button 
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
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

export default ChapterNineMindMap;