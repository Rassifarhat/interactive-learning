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

// Define the structure returned by d3.hierarchy
interface HierarchyNode extends d3.HierarchyNode<MindmapNode> {}

// Define the structure for links generated by d3
interface HierarchyLink extends d3.HierarchyLink<MindmapNode> {}

// Define the main component
const ChapterThreeMindmap: React.FC = () => { 
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
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

  // Define the data structure for the mindmap (Transformed from ReactFlow)
  const data: MindmapNode = {
    name: "Topic 3: Chemical Bonding",
    id: "1",
    summary: "**Chemical Bonding (Topic 3)**\n\n**Content:** This chapter covers the main types of chemical bonding, structure of substances, and resulting properties.\n\n**Exam Tips:** You must be able to link bonding types to physical properties and explain trends.\n\n**Key Definitions:**\n- Chemical Bond: A force that holds atoms together in compounds.",
    children: [
      // 3A: Ionic Bonding
      {
        name: "3A Ionic Bonding",
        id: "3A", 
        summary: "Involves electrostatic attraction between oppositely charged ions.",
        children: [
          {
            name: "3A.1 Nature of Ionic Bonding",
            id: "3A-1",
            summary: "**3A.1 The Nature of Ionic Bonding**\n\n**Content:** Ionic bonding involves electrostatic attraction between oppositely charged ions in a lattice.\n\n**Exam Tips:** Always use dot-and-cross diagrams to show electron transfer in ionic compound formation.\n\n**Common Mistakes:** Don't say there's an ionic bond between two specific ions - the attraction is throughout the entire lattice.\n\n**Key Definitions:**\n- Ionic Bonding: Electrostatic attraction between oppositely charged ions.\n- Lattice Energy: Energy released when gaseous ions combine to form an ionic lattice."
          },
          {
            name: "3A.2 Radii & Polarisation",
            id: "3A-2",
            summary: "**3A.2 Ionic Radii and Polarisation**\n\n**Content:** Examines how ionic size and charge affect bond strength and electron distribution.\n\n**Exam Tips:** Know how to calculate polarizing power (charge ÷ radius²) and explain its effects.\n\n**Key Definitions:**\n- Polarisation: Distortion of the electron cloud of an anion caused by a cation.\n- Polarising Power: Ability of a cation to distort electron density of an anion."
          },
          {
            name: "3A.3 Physical Properties",
            id: "3A-3",
            summary: "**3A.3 Physical Properties of Ionic Compounds**\n\n**Content:** Ionic compounds have high melting points, are brittle, conduct electricity when molten but not solid, and often dissolve in water.\n\n**Exam Tips:** Link each property to the ionic lattice structure and type of forces.\n\n**Common Mistakes:** Don't forget to explain why solid ionic compounds don't conduct electricity (ions fixed in lattice positions)."
          }
        ]
      },
      // 3B: Covalent Bonding
      {
        name: "3B Covalent Bonding",
        id: "3B", 
        summary: "Involves the sharing of electrons between atoms.",
        children: [
          {
            name: "3B.1 Covalent Bonding Basics",
            id: "3B-1",
            summary: "**3B.1 Covalent Bonding**\n\n**Content:** Covalent bonding involves the sharing of electrons between atoms to achieve stability.\n\n**Exam Tips:** Remember that shorter bond length generally means stronger bond.\n\n**Common Mistakes:** Don't confuse bond length and bond strength - the relationship only applies for bonds between similar atoms.\n\n**Key Definitions:**\n- Covalent Bond: Strong electrostatic attraction between the nuclei and the shared pair of electrons.\n- Bond Length: Distance between the nuclei of two covalently bonded atoms.\n- Bond Strength: Energy needed to break one mole of bonds in the gaseous state."
          },
          {
            name: "3B.2 Electronegativity & Polarity",
            id: "3B-2",
            summary: "**3B.2 Electronegativity and Bond Polarity**\n\n**Content:** Examines how differences in electron-attracting ability affect electron distribution in covalent bonds.\n\n**Exam Tips:** Know how to determine if a molecule is polar based on bond polarity and molecular geometry.\n\n**Common Mistakes:** Remember that symmetrical molecules with polar bonds can still be non-polar overall if dipoles cancel out (e.g., CO₂, BF₃).\n\n**Key Definitions:**\n- Electronegativity: The ability of an atom to attract the bonding pair of electrons in a covalent bond.\n- Polar Bond: A covalent bond with unequal sharing of electrons due to electronegativity differences.\n- Dipole: Separation of positive and negative charge across a bond or molecule."
          },
          {
            name: "3B.3 Discrete Molecules",
            id: "3B-3",
            summary: "**3B.3 Bonding in Discrete Molecules**\n\n**Content:** Examines covalent bonding in simple molecules and how to represent electron arrangements.\n\n**Exam Tips:** In dot-and-cross diagrams, show all outer (valence) electrons, not just bonding pairs.\n\n**Common Mistakes:** Don't forget to include all lone pairs in dot-and-cross diagrams, especially when determining molecular shape.\n\n**Key Definitions:**\n- Discrete Molecule: An electrically neutral group of atoms held together by covalent bonds.\n- Dot-and-Cross Diagram: Representation showing electron arrangement in molecules/ions."
          },
          {
            name: "3B.4 Dative Covalent Bonds",
            id: "3B-4",
            summary: "**3B.4 Dative Covalent Bonds**\n\n**Content:** Examines bonds where both electrons are supplied by one atom.\n\n**Exam Tips:** Be able to identify dative bonds in complex ions and molecules (NH₄⁺, H₃O⁺, Al₂Cl₆).\n\n**Common Mistakes:** Don't forget that dative bonds have the same strength as normal covalent bonds once formed.\n\n**Key Definitions:**\n- Dative Covalent Bond: A bond formed when both electrons are supplied by only one of the atoms involved."
          }
        ]
      },
      // 3C: Shapes & Polarity
      {
        name: "3C Shapes & Polarity",
        id: "3C", 
        summary: "Determining molecular geometry and overall polarity.",
        children: [
          {
            name: "3C.1 Shapes of Molecules/Ions",
            id: "3C-1",
            summary: "**3C.1 Shapes of Molecules and Ions**\n\n**Content:** Examines how electron pair repulsion determines molecular geometry.\n\n**Exam Tips:** Learn bond angles for common shapes: tetrahedral (109.5°), trigonal planar (120°), linear (180°), trigonal pyramidal (107°), V-shaped/bent (104.5°).\n\n**Common Mistakes:** Remember that lone pairs repel more strongly than bonding pairs, causing bond angles to be less than predicted for a perfect geometry.\n\n**Key Definitions:**\n- Electron Pair Repulsion Theory: The electron pairs on the central atom of a molecule arrange themselves to minimize repulsion."
          },
          {
            name: "3C.2 Non-Polar & Polar Molecules",
            id: "3C-2",
            summary: "**3C.2 Non-Polar and Polar Molecules**\n\n**Content:** Examines how molecular geometry affects overall polarity.\n\n**Exam Tips:** Symmetrical molecules with identical bonds around the central atom are typically non-polar (e.g., CCl₄, CO₂).\n\n**Common Mistakes:** Don't assume a molecule is polar just because it has polar bonds - check the geometry to see if dipoles cancel.\n\n**Key Definitions:**\n- Polar Molecule: A molecule with a permanent dipole due to uneven electron distribution.\n- Dipole Moment: The product of the charge separation and the distance between the charges in a polar bond."
          }
        ]
      },
      // 3D: Metallic Bonding
      {
        name: "3D Metallic Bonding",
        id: "3D",
        summary: "**3D Metallic Bonding**\n\n**Content:** Examines the bonding in metals - positive ions in a sea of delocalized electrons.\n\n**Exam Tips:** Link properties (conductivity, malleability, ductility) to the metallic structure.\n\n**Common Mistakes:** Don't forget to explain why metals conduct electricity (mobile delocalized electrons) and why they are malleable (layers of ions can slide over each other).\n\n**Key Definitions:**\n- Metallic Bonding: Electrostatic attraction between positive metal ions and delocalized electrons.\n- Delocalized Electrons: Electrons that are not associated with any single atom or bond."
      },
      // 3E: Lattices
      {
        name: "3E Solid Lattices",
        id: "3E", 
        summary: "Different types of solid structures.",
        children: [
          {
            name: "3E.1 Intro to Solid Lattices",
            id: "3E-1",
            summary: "**3E.1 Introduction to Solid Lattices**\n\n**Content:** Examines different types of solid structures: metallic, ionic, covalent, and molecular.\n\n**Exam Tips:** Know the key properties associated with each type of lattice.\n\n**Common Mistakes:** Don't confuse giant covalent lattices (like diamond) with simple molecular structures (like iodine).\n\n**Key Definitions:**\n- Giant Lattice: A three-dimensional structure extending throughout the entire crystal.\n- Molecular Lattice: A regular arrangement of molecules held together by weak intermolecular forces."
          },
          {
            name: "3E.2 Structure & Properties",
            id: "3E-2",
            summary: "**3E.2 Structure and Properties**\n\n**Content:** Relates properties of substances to their bonding and structure.\n\n**Exam Tips:** Learn to predict properties from bonding type and vice versa - common exam questions!\n\n**Common Mistakes:** Remember exceptions like graphite (giant covalent but conducts electricity) and some ionic compounds that are insoluble.\n\n**Key Definitions:**\n- Structure-Property Relationship: How the arrangement of particles affects the observable characteristics of a substance."
          }
        ]
      }
    ]
  };

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const width = 1200;
    const height = 800;
    const radius = Math.min(width, height) / 2 * 0.8;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');

    // Clear previous render
    svg.selectAll('*').remove(); 

    // Create root container for zoom/pan
    const g = svg.append('g');

    // Define the tree layout generator for radial layout
    const tree = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    // Create the hierarchy from the data
    const root = tree(d3.hierarchy(data)
        .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

    // Set up zoom behavior
    zoomRef.current = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 3]) // Zoom limits
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
        setZoom(event.transform.k);
      });

    // Apply zoom to the SVG element
    svg.call(zoomRef.current);

    // Initial transform: Center the graph and apply initial scale
    const initialTransform = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8);
    svg.call(zoomRef.current.transform, initialTransform);
    g.attr('transform', initialTransform.toString());


    // Links
    g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(root.links())
      .join('path')
      .attr('d', d3.linkRadial<d3.HierarchyLink<MindmapNode>, d3.HierarchyPointNode<MindmapNode>>()
          .angle(d => d.x)
          .radius(d => d.y));

    // Nodes
    const node = g.append('g')
      .selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);

    node.append('circle')
      .attr('r', 4.5)
      .attr('fill', d => d.children ? '#555' : '#999')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        // Update info content on click
        setInfoContent(d.data.summary || d.data.name);
        setActiveNode(d.data.id); // Set active node id

        // Prevent zoom trigger on node click
        event.stopPropagation();
      });

    // Text labels
    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => d.x < Math.PI === !d.children ? 6 : -6)
      .attr('text-anchor', d => d.x < Math.PI === !d.children ? 'start' : 'end')
      .attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
      .text(d => d.data.name)
      .clone(true).lower()
      .attr('stroke', 'white');

  }, [data]); // Rerun effect if data changes

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <div style={{ display: 'flex', padding: '10px', borderBottom: '1px solid #ccc' }}>
        {/* Info Display Area */}
        <div style={{ flexGrow: 1, marginRight: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '4px', minHeight: '80px', maxHeight: '200px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
          {infoContent ? (
            <div dangerouslySetInnerHTML={{ __html: infoContent.replace(/\n/g, '<br />') }} />
          ) : (
            <p>Click on a node to see details.</p>
          )}
        </div>
        {/* Zoom Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <button onClick={handleZoomIn} style={{ marginBottom: '5px' }}>Zoom In (+)</button>
          <button onClick={handleZoomOut} style={{ marginBottom: '5px' }}>Zoom Out (-)</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div style={{ flexGrow: 1, overflow: 'hidden' }}>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default ChapterThreeMindmap;
