import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  MarkerType,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Define the data structure for node content
interface NodeData {
  label: string;
  content: string;
  examTips?: string;
  commonMistakes?: string;
  keyDefinitions?: Record<string, string>;
}

// Custom node component with expandable content
const CustomNode = ({ data }: { data: NodeData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 shadow-md max-w-md">
      <div 
        className="font-semibold text-blue-800 cursor-pointer hover:text-blue-600 flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{data.label}</span>
        <span className="text-xs ml-2">{expanded ? '▼' : '►'}</span>
      </div>
      
      {expanded && (
        <div className="mt-2 text-sm">
          <div className="mt-1 text-gray-700">{data.content}</div>
          
          {data.examTips && (
            <div className="mt-2">
              <div className="font-medium text-green-700">Exam Tips:</div>
              <div className="text-green-800 bg-green-50 p-2 rounded mt-1">{data.examTips}</div>
            </div>
          )}
          
          {data.commonMistakes && (
            <div className="mt-2">
              <div className="font-medium text-red-700">Common Mistakes:</div>
              <div className="text-red-800 bg-red-50 p-2 rounded mt-1">{data.commonMistakes}</div>
            </div>
          )}
          
          {data.keyDefinitions && (
            <div className="mt-2">
              <div className="font-medium text-purple-700">Key Definitions:</div>
              <div className="bg-purple-50 p-2 rounded mt-1">
                {Object.entries(data.keyDefinitions).map(([term, definition]) => (
                  <div key={term} className="mb-1">
                    <span className="font-medium text-purple-800">{term}: </span>
                    <span className="text-gray-800">{definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Node types for ReactFlow
const nodeTypes = {
  custom: CustomNode,
};

const ChemistryBondingMindMap: React.FC = () => {
  // Initial nodes configuration
  const initialNodes: Node<NodeData>[] = [
    // Main Topics
    {
      id: '1',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        label: 'Chemical Bonding (Topic 3)',
        content: 'This chapter covers the main types of chemical bonding, structure of substances, and resulting properties.',
        examTips: 'You must be able to link bonding types to physical properties and explain trends.',
        keyDefinitions: {
          'Chemical Bond': 'A force that holds atoms together in compounds.',
        }
      },
      style: { width: 300 }
    },
    // Ionic Bonding Section
    {
      id: '3A-1',
      type: 'custom',
      position: { x: -400, y: 100 },
      data: {
        label: '3A.1 The Nature of Ionic Bonding',
        content: 'Ionic bonding involves electrostatic attraction between oppositely charged ions in a lattice.',
        examTips: 'Always use dot-and-cross diagrams to show electron transfer in ionic compound formation.',
        commonMistakes: 'Don\'t say there\'s an ionic bond between two specific ions - the attraction is throughout the entire lattice.',
        keyDefinitions: {
          'Ionic Bonding': 'Electrostatic attraction between oppositely charged ions.',
          'Lattice Energy': 'Energy released when gaseous ions combine to form an ionic lattice.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3A-2',
      type: 'custom',
      position: { x: -400, y: 200 },
      data: {
        label: '3A.2 Ionic Radii and Polarisation',
        content: 'Examines how ionic size and charge affect bond strength and electron distribution.',
        examTips: 'Know how to calculate polarizing power (charge ÷ radius²) and explain its effects.',
        keyDefinitions: {
          'Polarisation': 'Distortion of the electron cloud of an anion caused by a cation.',
          'Polarising Power': 'Ability of a cation to distort electron density of an anion.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3A-3',
      type: 'custom',
      position: { x: -400, y: 300 },
      data: {
        label: '3A.3 Physical Properties of Ionic Compounds',
        content: 'Ionic compounds have high melting points, are brittle, conduct electricity when molten but not solid, and often dissolve in water.',
        examTips: 'Link each property to the ionic lattice structure and type of forces.',
        commonMistakes: 'Don\'t forget to explain why solid ionic compounds don\'t conduct electricity (ions fixed in lattice positions).'
      },
      style: { width: 300 }
    },
    // Covalent Bonding Section
    {
      id: '3B-1',
      type: 'custom',
      position: { x: 0, y: 200 },
      data: {
        label: '3B.1 Covalent Bonding',
        content: 'Covalent bonding involves the sharing of electrons between atoms to achieve stability.',
        examTips: 'Remember that shorter bond length generally means stronger bond.',
        commonMistakes: 'Don\'t confuse bond length and bond strength - the relationship only applies for bonds between similar atoms.',
        keyDefinitions: {
          'Covalent Bond': 'Strong electrostatic attraction between the nuclei and the shared pair of electrons.',
          'Bond Length': 'Distance between the nuclei of two covalently bonded atoms.',
          'Bond Strength': 'Energy needed to break one mole of bonds in the gaseous state.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3B-2',
      type: 'custom',
      position: { x: 0, y: 300 },
      data: {
        label: '3B.2 Electronegativity and Bond Polarity',
        content: 'Examines how differences in electron-attracting ability affect electron distribution in covalent bonds.',
        examTips: 'Know how to determine if a molecule is polar based on bond polarity and molecular geometry.',
        commonMistakes: 'Remember that symmetrical molecules with polar bonds can still be non-polar overall if dipoles cancel out (e.g., CO₂, BF₃).',
        keyDefinitions: {
          'Electronegativity': 'The ability of an atom to attract the bonding pair of electrons in a covalent bond.',
          'Polar Bond': 'A covalent bond with unequal sharing of electrons due to electronegativity differences.',
          'Dipole': 'Separation of positive and negative charge across a bond or molecule.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3B-3',
      type: 'custom',
      position: { x: 0, y: 400 },
      data: {
        label: '3B.3 Bonding in Discrete Molecules',
        content: 'Examines covalent bonding in simple molecules and how to represent electron arrangements.',
        examTips: 'In dot-and-cross diagrams, show all outer (valence) electrons, not just bonding pairs.',
        commonMistakes: 'Don\'t forget to include all lone pairs in dot-and-cross diagrams, especially when determining molecular shape.',
        keyDefinitions: {
          'Discrete Molecule': 'An electrically neutral group of atoms held together by covalent bonds.',
          'Dot-and-Cross Diagram': 'Representation showing electron arrangement in molecules/ions.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3B-4',
      type: 'custom',
      position: { x: 0, y: 500 },
      data: {
        label: '3B.4 Dative Covalent Bonds',
        content: 'Examines bonds where both electrons are supplied by one atom.',
        examTips: 'Be able to identify dative bonds in complex ions and molecules (NH₄⁺, H₃O⁺, Al₂Cl₆).',
        commonMistakes: 'Don\'t forget that dative bonds have the same strength as normal covalent bonds once formed.',
        keyDefinitions: {
          'Dative Covalent Bond': 'A bond formed when both electrons are supplied by only one of the atoms involved.'
        }
      },
      style: { width: 300 }
    },
    // Molecular Shapes & Polarity
    {
      id: '3C-1',
      type: 'custom',
      position: { x: 400, y: 200 },
      data: {
        label: '3C.1 Shapes of Molecules and Ions',
        content: 'Examines how electron pair repulsion determines molecular geometry.',
        examTips: 'Learn bond angles for common shapes: tetrahedral (109.5°), trigonal planar (120°), linear (180°), trigonal pyramidal (107°), V-shaped/bent (104.5°).',
        commonMistakes: 'Remember that lone pairs repel more strongly than bonding pairs, causing bond angles to be less than predicted for a perfect geometry.',
        keyDefinitions: {
          'Electron Pair Repulsion Theory': 'The electron pairs on the central atom of a molecule arrange themselves to minimize repulsion.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3C-2',
      type: 'custom',
      position: { x: 400, y: 300 },
      data: {
        label: '3C.2 Non-Polar and Polar Molecules',
        content: 'Examines how molecular geometry affects overall polarity.',
        examTips: 'Symmetrical molecules with identical bonds around the central atom are typically non-polar (e.g., CCl₄, CO₂).',
        commonMistakes: 'Don\'t assume a molecule is polar just because it has polar bonds - check the geometry to see if dipoles cancel.',
        keyDefinitions: {
          'Polar Molecule': 'A molecule with a permanent dipole due to uneven electron distribution.',
          'Dipole Moment': 'The product of the charge separation and the distance between the charges in a polar bond.'
        }
      },
      style: { width: 300 }
    },
    // Metallic Bonding
    {
      id: '3D',
      type: 'custom',
      position: { x: 400, y: 400 },
      data: {
        label: '3D Metallic Bonding',
        content: 'Examines the bonding in metals - positive ions in a sea of delocalized electrons.',
        examTips: 'Link properties (conductivity, malleability, ductility) to the metallic structure.',
        commonMistakes: 'Don\'t forget to explain why metals conduct electricity (mobile delocalized electrons) and why they are malleable (layers of ions can slide over each other).',
        keyDefinitions: {
          'Metallic Bonding': 'Electrostatic attraction between positive metal ions and delocalized electrons.',
          'Delocalized Electrons': 'Electrons that are not associated with any single atom or bond.'
        }
      },
      style: { width: 300 }
    },
    // Lattices
    {
      id: '3E-1',
      type: 'custom',
      position: { x: 400, y: 500 },
      data: {
        label: '3E.1 Introduction to Solid Lattices',
        content: 'Examines different types of solid structures: metallic, ionic, covalent, and molecular.',
        examTips: 'Know the key properties associated with each type of lattice.',
        commonMistakes: 'Don\'t confuse giant covalent lattices (like diamond) with simple molecular structures (like iodine).',
        keyDefinitions: {
          'Giant Lattice': 'A three-dimensional structure extending throughout the entire crystal.',
          'Molecular Lattice': 'A regular arrangement of molecules held together by weak intermolecular forces.'
        }
      },
      style: { width: 300 }
    },
    {
      id: '3E-2',
      type: 'custom',
      position: { x: 400, y: 600 },
      data: {
        label: '3E.2 Structure and Properties',
        content: 'Relates properties of substances to their bonding and structure.',
        examTips: 'Learn to predict properties from bonding type and vice versa - common exam questions!',
        commonMistakes: 'Remember exceptions like graphite (giant covalent but conducts electricity) and some ionic compounds that are insoluble.',
        keyDefinitions: {
          'Structure-Property Relationship': 'How the arrangement of particles affects the observable characteristics of a substance.'
        }
      },
      style: { width: 300 }
    }
  ];

  // Define edges between nodes
  const initialEdges: Edge[] = [
    // Main connections
    { id: 'e1-3A1', source: '1', target: '3A-1', animated: true, style: { stroke: '#0040ff' } },
    { id: 'e1-3B1', source: '1', target: '3B-1', animated: true, style: { stroke: '#0040ff' } },
    { id: 'e1-3C1', source: '1', target: '3C-1', animated: true, style: { stroke: '#0040ff' } },
    { id: 'e1-3D', source: '1', target: '3D', animated: true, style: { stroke: '#0040ff' } },
    { id: 'e1-3E1', source: '1', target: '3E-1', animated: true, style: { stroke: '#0040ff' } },
    
    // Ionic bonding section connections
    { id: 'e3A1-3A2', source: '3A-1', target: '3A-2', style: { stroke: '#ff4000' } },
    { id: 'e3A2-3A3', source: '3A-2', target: '3A-3', style: { stroke: '#ff4000' } },
    
    // Covalent bonding section connections
    { id: 'e3B1-3B2', source: '3B-1', target: '3B-2', style: { stroke: '#00a010' } },
    { id: 'e3B2-3B3', source: '3B-2', target: '3B-3', style: { stroke: '#00a010' } },
    { id: 'e3B3-3B4', source: '3B-3', target: '3B-4', style: { stroke: '#00a010' } },
    
    // Molecular shapes connections
    { id: 'e3C1-3C2', source: '3C-1', target: '3C-2', style: { stroke: '#a000a0' } },
    
    // Structure section connections
    { id: 'e3E1-3E2', source: '3E-1', target: '3E-2', style: { stroke: '#ff8000' } },
    
    // Cross-connections between sections
    { id: 'e3B2-3C1', source: '3B-2', target: '3C-1', animated: true, style: { stroke: '#888888', strokeDasharray: '5 5' } },
    { id: 'e3B3-3C2', source: '3B-3', target: '3C-2', animated: true, style: { stroke: '#888888', strokeDasharray: '5 5' } },
    { id: 'e3A1-3E1', source: '3A-1', target: '3E-1', animated: true, style: { stroke: '#888888', strokeDasharray: '5 5' } },
    { id: 'e3D-3E1', source: '3D', target: '3E-1', animated: true, style: { stroke: '#888888', strokeDasharray: '5 5' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // State for sidebar content
  const [showHelp, setShowHelp] = useState(false);

  // Function to handle new connections
  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  // Button to reset the layout
  const resetLayout = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  };

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            if (n.id.includes('3A')) return '#ff4000';
            if (n.id.includes('3B')) return '#00a010';
            if (n.id.includes('3C')) return '#a000a0';
            if (n.id.includes('3D')) return '#0000ff';
            if (n.id.includes('3E')) return '#ff8000';
            return '#000';
          }}
          nodeColor={(n) => {
            if (n.id.includes('3A')) return '#fff0f0';
            if (n.id.includes('3B')) return '#f0fff0';
            if (n.id.includes('3C')) return '#f8f0ff';
            if (n.id.includes('3D')) return '#f0f0ff';
            if (n.id.includes('3E')) return '#fff8f0';
            return '#fff';
          }}
        />
        <Background color="#aaa" gap={16} />
        <Panel position="top-right">
          <div className="flex space-x-2">
            <button 
              onClick={resetLayout}
              className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Reset Layout
            </button>
            <button 
              onClick={() => setShowHelp(!showHelp)}
              className="px-4 py-2 font-semibold text-sm bg-purple-500 text-white rounded shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {showHelp ? 'Hide Guide' : 'Show Guide'}
            </button>
          </div>
        </Panel>
        {showHelp && (
          <Panel position="top-left">
            <div className="bg-white p-4 rounded shadow-md w-80">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Chemical Bonding Mind Map Guide</h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li><span className="font-medium">Click on any topic</span> to expand and see detailed information</li>
                <li><span className="font-medium">Color coding:</span> 
                  <ul className="list-disc pl-5 mt-1">
                    <li><span className="text-red-600 font-medium">Red</span> - Ionic bonding</li>
                    <li><span className="text-green-600 font-medium">Green</span> - Covalent bonding</li>
                    <li><span className="text-purple-600 font-medium">Purple</span> - Molecular shape/polarity</li>
                    <li><span className="text-blue-600 font-medium">Blue</span> - Metallic bonding</li>
                    <li><span className="text-orange-600 font-medium">Orange</span> - Solid structures</li>
                  </ul>
                </li>
                <li><span className="font-medium">Dotted lines</span> show relationships between different sections</li>
                <li>Use the controls at the bottom right to <span className="font-medium">zoom and pan</span></li>
                <li>Check the <span className="font-medium">Exam Tips</span> and <span className="font-medium">Common Mistakes</span> for each topic</li>
              </ul>
            </div>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
};

export default ChemistryBondingMindMap;