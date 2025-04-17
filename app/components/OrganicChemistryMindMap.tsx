'use client';

import React, { useState, useCallback } from 'react';
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
  content: string[];
  tips?: string[];
}

// Custom node component with expandable content
const CustomNode = ({ data }: { data: NodeData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 shadow-md max-w-md">
      <div 
        className="font-semibold text-lg text-green-800 cursor-pointer hover:text-green-600 flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{data.label}</span>
        <span className="text-xs ml-2">{expanded ? '▼' : '►'}</span>
      </div>
      
      {expanded && (
        <div className="mt-2 text-sm">
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {data.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
          {data.tips && data.tips.length > 0 && (
            <div className="mt-3">
              <div className="font-medium text-orange-700">✅ Tips & Tricks:</div>
              <ul className="list-disc pl-5 text-orange-800 bg-orange-50 p-2 rounded mt-1 space-y-1">
                {data.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
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

const OrganicChemistryMindMap: React.FC = () => {
  // Initial nodes configuration
  const initialNodes: Node<NodeData>[] = [
    // Main Topic
    {
      id: 'topic4',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        label: 'Topic 4: Introductory Organic Chemistry and Alkanes',
        content: [
          'This section covers the fundamentals of organic chemistry',
          'Includes the structure, naming, and reactions of organic compounds',
          'Focus on alkanes and their properties',
        ],
        tips: [
          'Pay attention to nomenclature rules',
          'Understand different types of isomerism',
          'Know reaction mechanisms, especially free radical substitution',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.1
    {
      id: '4A-1',
      type: 'custom',
      position: { x: -400, y: 150 },
      data: {
        label: '4A.1 What is Organic Chemistry?',
        content: [
          'Definition: Organic compounds are carbon-based molecules, often containing hydrogen',
          'Most organic compounds have covalent bonds',
          'Most organic compounds originate from living organisms or synthetic processes',
          'Hydrocarbons = compounds of carbon and hydrogen only',
          'Alkanes and cycloalkanes are saturated hydrocarbons (only single C–C bonds)',
        ],
        tips: [
          'Saturated = single bonds only',
          'Unsaturated = contains C=C or C≡C double/triple bonds',
          'Alkanes: straight chains',
          'Cycloalkanes: rings with single bonds',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.2
    {
      id: '4A-2',
      type: 'custom',
      position: { x: -400, y: 300 },
      data: {
        label: '4A.2 Different Types of Formulae',
        content: [
          'Empirical formula – simplest whole number ratio of atoms',
          'Molecular formula – actual number of atoms',
          'Structural formula – shows atoms and functional groups in sequence',
          'Displayed formula – shows all atoms and all bonds',
          'Skeletal formula – carbon backbone as lines, H atoms omitted',
        ],
        tips: [
          'Don\'t confuse molecular with empirical',
          'Learn how to convert between formulae (e.g., C₄H₁₀O in skeletal vs displayed)',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.3
    {
      id: '4A-3',
      type: 'custom',
      position: { x: -400, y: 450 },
      data: {
        label: '4A.3 Functional Groups and Homologous Series',
        content: [
          'Functional group: Atom/group that gives a molecule its chemical properties',
          'e.g., –OH (alcohol), –COOH (acid)',
          'Homologous series: Series of compounds with:',
          'Same functional group',
          'Same general formula (e.g., CₙH₂ₙ₊₂ for alkanes)',
          'Gradual change in physical properties (e.g., boiling point ↑ with size)',
        ],
        tips: [
          'Methane to butane boiling points increase due to more London forces',
          'Know general formulas by heart:',
          'Alkanes: CₙH₂ₙ₊₂',
          'Cycloalkanes: CₙH₂ₙ',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.4
    {
      id: '4A-4',
      type: 'custom',
      position: { x: -400, y: 600 },
      data: {
        label: '4A.4 Nomenclature (Naming Compounds)',
        content: [
          'Uses IUPAC rules',
          'Names = prefix + root + suffix',
          'Root = longest carbon chain',
          'Prefix = side chains (methyl, ethyl, etc.)',
          'Suffix = functional groups (e.g., -ol for alcohols)',
          'Number carbon chain to give lowest numbers to substituents',
        ],
        tips: [
          'Learn prefixes: meth-, eth-, prop-, but- up to dec-',
          'Side chains must be listed alphabetically, not by position',
          '2-methylpropane ≠ propane – branching matters!',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.5
    {
      id: '4A-5',
      type: 'custom',
      position: { x: 0, y: 150 },
      data: {
        label: '4A.5 Structural Isomerism',
        content: [
          'Isomers have same molecular formula, different structures',
          'Types of structural isomerism:',
          'Chain (different C-chain arrangement)',
          'Position (different location of functional group)',
        ],
        tips: [
          'C₄H₁₀ has two chain isomers: butane and methylpropane',
          'C₃H₇OH has two position isomers: 1-propanol, 2-propanol',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.6
    {
      id: '4A-6',
      type: 'custom',
      position: { x: 0, y: 300 },
      data: {
        label: '4A.6 Types of Reaction',
        content: [
          'Addition – reactant added across a double bond',
          'Substitution – atom/group replaced by another',
          'Elimination – removal of atom/group, often forming a double bond',
          'Oxidation – increase in O, loss of H or e⁻',
          'Reduction – gain of H or e⁻',
          'Polymerisation – small monomers join to form a long chain polymer',
        ],
        tips: [
          'Bond fission:',
          'Homolytic fission: Each atom gets 1 electron (forms radicals)',
          'Heterolytic fission: Both electrons go to one atom (forms ions)',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4A.7
    {
      id: '4A-7',
      type: 'custom',
      position: { x: 0, y: 450 },
      data: {
        label: '4A.7 Hazards, Risks and Risk Assessments',
        content: [
          'Hazard: The potential to cause harm',
          'Risk: Likelihood of harm occurring',
          'Risk assessments should consider:',
          'Chemicals used',
          'Conditions (heat, pressure)',
          'Apparatus and volume',
        ],
        tips: [
          'Key symbols:',
          '☠️ Toxic',
          '☣️ Harmful',
          '🔥 Flammable',
          '⚠️ Corrosive',
          '🌡️ Oxidising',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4B.1
    {
      id: '4B-1',
      type: 'custom',
      position: { x: 400, y: 150 },
      data: {
        label: '4B.1 Alkanes from Crude Oil',
        content: [
          'Alkanes are separated from crude oil by:',
          'Fractional distillation – based on boiling points',
          'Cracking – breaks long chains to short ones',
          'Reforming – makes branched/cyclic alkanes from straight chains',
        ],
        tips: [
          'Don\'t forget:',
          'Cracking: C₁₅H₃₂ → C₈H₁₈ + C₇H₁₄',
          'Reforming example: heptane → methylcyclohexane',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4B.2
    {
      id: '4B-2',
      type: 'custom',
      position: { x: 400, y: 300 },
      data: {
        label: '4B.2 Alkanes as Fuels',
        content: [
          'Complete combustion: alkane + O₂ → CO₂ + H₂O',
          'Incomplete combustion: forms CO and C (soot)',
        ],
        tips: [
          'Toxic gases from combustion:',
          'CO: binds to haemoglobin',
          'NOₓ: formed at high temp, causes acid rain',
          'SO₂: from sulfur impurities',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4B.3
    {
      id: '4B-3',
      type: 'custom',
      position: { x: 400, y: 450 },
      data: {
        label: '4B.3 Alternative Fuels',
        content: [
          'Biofuels: biodiesel, bioethanol – renewable',
          'Pros:',
          'Lower net CO₂',
          'Renewable',
          'Cons:',
          'May affect food supply',
          'Not always carbon neutral (emissions in transport etc.)',
        ],
        tips: [
          'Terms:',
          'Carbon neutral: CO₂ absorbed = CO₂ released',
        ]
      },
      style: { width: 350 }
    },
    
    // Section 4B.4
    {
      id: '4B-4',
      type: 'custom',
      position: { x: 400, y: 600 },
      data: {
        label: '4B.4 Substitution Reactions of Alkanes',
        content: [
          'Free radical substitution of alkanes with halogens (e.g., Cl₂ under UV)',
          '3 steps:',
          'Initiation: Cl₂ → 2Cl•',
          'Propagation: CH₄ + Cl• → CH₃• + HCl, then CH₃• + Cl₂ → CH₃Cl + Cl•',
          'Termination: radicals combine (e.g., Cl• + Cl• → Cl₂)',
        ],
        tips: [
          'Likely question:',
          'Write equations for all 3 steps in free radical substitution',
          'Beware of multiple substitutions (e.g., CH₂Cl₂ from CH₄)',
        ]
      },
      style: { width: 350 }
    },
    
    // Key Takeaways
    {
      id: 'key-takeaways',
      type: 'custom',
      position: { x: 0, y: 600 },
      data: {
        label: 'KEY TAKEAWAYS FOR EXAM',
        content: [],
        tips: [
          'Learn all formula types and how to convert between them',
          'Master naming rules and isomerism',
          'Know reaction types and mechanisms (esp. substitution)',
          'Understand combustion equations and pollutants',
          'Memorise risk and safety symbols and free radical steps',
        ]
      },
      style: { width: 350 }
    },
  ];

  // Define edges between nodes
  const initialEdges: Edge[] = [
    // Main connections from Topic 4
    { id: 'e-topic4-4A1', source: 'topic4', target: '4A-1', animated: true, style: { stroke: '#22c55e' } },
    { id: 'e-topic4-4A5', source: 'topic4', target: '4A-5', animated: true, style: { stroke: '#22c55e' } },
    { id: 'e-topic4-4B1', source: 'topic4', target: '4B-1', animated: true, style: { stroke: '#22c55e' } },
    
    // 4A section connections
    { id: 'e-4A1-4A2', source: '4A-1', target: '4A-2', style: { stroke: '#16a34a' } },
    { id: 'e-4A2-4A3', source: '4A-2', target: '4A-3', style: { stroke: '#16a34a' } },
    { id: 'e-4A3-4A4', source: '4A-3', target: '4A-4', style: { stroke: '#16a34a' } },
    
    // 4A section continued
    { id: 'e-4A5-4A6', source: '4A-5', target: '4A-6', style: { stroke: '#16a34a' } },
    { id: 'e-4A6-4A7', source: '4A-6', target: '4A-7', style: { stroke: '#16a34a' } },
    
    // 4B section connections
    { id: 'e-4B1-4B2', source: '4B-1', target: '4B-2', style: { stroke: '#15803d' } },
    { id: 'e-4B2-4B3', source: '4B-2', target: '4B-3', style: { stroke: '#15803d' } },
    { id: 'e-4B3-4B4', source: '4B-3', target: '4B-4', style: { stroke: '#15803d' } },
    
    // Connect to Key Takeaways
    { id: 'e-4A4-key', source: '4A-4', target: 'key-takeaways', animated: true, style: { stroke: '#22c55e', strokeDasharray: '5 5' } },
    { id: 'e-4A7-key', source: '4A-7', target: 'key-takeaways', animated: true, style: { stroke: '#22c55e', strokeDasharray: '5 5' } },
    { id: 'e-4B4-key', source: '4B-4', target: 'key-takeaways', animated: true, style: { stroke: '#22c55e', strokeDasharray: '5 5' } },
    
    // Cross-connections between related topics
    { id: 'e-4A4-4A5', source: '4A-4', target: '4A-5', animated: true, style: { stroke: '#65a30d', strokeDasharray: '5 5' } },
    { id: 'e-4A6-4B4', source: '4A-6', target: '4B-4', animated: true, style: { stroke: '#65a30d', strokeDasharray: '5 5' } },
    { id: 'e-4B2-4B3', source: '4B-2', target: '4B-3', animated: true, style: { stroke: '#65a30d', strokeDasharray: '5 5' } },
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
            if (n.id.includes('4A')) return '#16a34a';
            if (n.id.includes('4B')) return '#15803d';
            return '#22c55e';
          }}
          nodeColor={(n) => {
            if (n.id.includes('4A')) return '#f0fdf4';
            if (n.id.includes('4B')) return '#dcfce7';
            return '#ecfdf5';
          }}
        />
        <Background color="#aaa" gap={16} />
        <Panel position="top-right">
          <div className="flex space-x-2">
            <button 
              onClick={resetLayout}
              className="px-4 py-2 font-semibold text-sm bg-green-500 text-white rounded shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Reset Layout
            </button>
            <button 
              onClick={() => setShowHelp(!showHelp)}
              className="px-4 py-2 font-semibold text-sm bg-orange-500 text-white rounded shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              {showHelp ? 'Hide Guide' : 'Show Guide'}
            </button>
          </div>
        </Panel>
        {showHelp && (
          <Panel position="top-left">
            <div className="bg-white p-4 rounded shadow-md w-80">
              <h3 className="font-bold text-lg text-green-800 mb-2">Organic Chemistry Mind Map Guide</h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li><span className="font-medium">Click on any topic</span> to expand and see detailed information</li>
                <li><span className="font-medium">Color coding:</span> 
                  <ul className="list-disc pl-5 mt-1">
                    <li><span className="text-green-600 font-medium">Light green</span> - 4A sections (fundamentals)</li>
                    <li><span className="text-green-800 font-medium">Dark green</span> - 4B sections (alkanes)</li>
                  </ul>
                </li>
                <li><span className="font-medium">Dotted lines</span> show relationships between different sections</li>
                <li>Use the controls at the bottom right to <span className="font-medium">zoom and pan</span></li>
                <li>Check the <span className="font-medium">✅ Tips & Tricks</span> for exam-focused points</li>
                <li>Pay special attention to the <span className="font-medium">KEY TAKEAWAYS</span> node</li>
              </ul>
            </div>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
};

export default OrganicChemistryMindMap;