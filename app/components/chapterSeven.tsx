import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  Node,
  Edge,
  BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';

// Define the data structure for node content
interface NodeData {
  label: string;
  description: string;
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
          <div className="mt-1 text-gray-700">{data.description}</div>
        </div>
      )}
    </div>
  );
};

// Node types for ReactFlow
const nodeTypes = { custom: CustomNode };

// Updated Initial Nodes based on detailed user input
const initialNodes: Node[] = [
  {
    id: '7',
    type: 'input', // Or 'default'
    data: { label: 'Chapter 7: Intermolecular Forces' },
    position: { x: 250, y: 5 },
    style: { background: '#63B3ED', color: 'white', border: '1px solid #2A69AC', width: 250 },
  },
  {
    id: '7A.1',
    type: 'custom',
    data: {
      label: '7A.1 Intermolecular Forces (General)',
      description: 'Forces of attraction BETWEEN molecules (weaker than intramolecular bonds like covalent/ionic). Determine physical properties (BP, MP, solubility, volatility).\nTypes: London (dispersion), Permanent Dipole-Dipole, Hydrogen Bonding.',
    },
    position: { x: 50, y: 100 },
  },
  {
    id: '7A.2',
    type: 'custom',
    data: {
      label: '7A.2 London (Dispersion) Forces',
      description: 'Temporary induced dipole–induced dipole attractions due to uneven electron distribution.\nCharacteristics: Found in ALL molecules (even non-polar/noble gases); Temporary dipoles induce dipoles in neighbours.\nStrength increases with: More electrons, More surface area (straight chain > branched).\nTrend: BP increases CH₄ < C₂H₆ < C₃H₈ due to stronger London forces.',
    },
    position: { x: 450, y: 100 },
  },
  {
    id: '7A.3',
    type: 'custom',
    data: {
      label: '7A.3 Permanent Dipole–Dipole Interactions',
      description: 'Between polar molecules (permanent dipoles). δ⁺ end attracts δ⁻ end.\nAlignment: Effective in solids, disrupted by movement in liquids.\nExample: CH₃Cl, CH₃Br.\nStrength: Usually weaker than H-bonds, can be weaker than London forces in large molecules.',
    },
    position: { x: 50, y: 250 },
  },
  {
    id: '7A.4',
    type: 'custom',
    data: {
      label: '7A.4 Hydrogen Bonding',
      description: 'Special strong dipole-dipole. Requires: H bonded to N, O, or F; AND lone pair on another N, O, F.\nExamples: H₂O, NH₃, HF, Alcohols (CH₃OH), Amines (CH₃NH₂).\nDirectional: Straight line between H and lone pair.\nEffect: Significantly increases BP, affects density, solubility, structure.',
    },
    position: { x: 450, y: 250 },
  },
  {
    id: '7A.5',
    type: 'custom',
    data: {
      label: '7A.5 Structure & Properties of Water/Ice',
      description: 'Water: H-bonds between molecules (up to 4 per molecule).\nIce: Forms open hexagonal lattice via H-bonding. Less dense than liquid water (ice floats).\nMelting: H-bonds partially break, molecules move closer.',
    },
    position: { x: 50, y: 400 },
  },
  {
    id: '7A.6',
    type: 'custom',
    data: {
      label: '7A.6 Boiling Points & IMF',
      description: 'BP reflects energy to overcome IMF.\nBP rises with: Stronger IMF (H-bond > dipole-dipole > London), Larger molecular mass (more electrons -> stronger London forces).\nExamples: Ethane (-88.6°C, London only), Methoxymethane (-24.8°C, Dipole-dipole), Ethanol (78.5°C, H-bonding).',
    },
    position: { x: 450, y: 400 },
  },
  {
    id: '7A.7',
    type: 'custom',
    data: {
      label: '7A.7 BP Trends: Alkanes & Alcohols',
      description: 'Alkanes: Straight-chain > branched BP. BP increases with chain length (stronger London forces).\nAlcohols: Much higher BP due to H-bonding. Longer chains still higher BP (London + H-bonding). Branching reduces BP (less surface contact).',
    },
    position: { x: 50, y: 550 },
  },
  {
    id: '7A.8',
    type: 'custom',
    data: {
      label: '7A.8 BP of Hydrogen Halides',
      description: 'Trend: HF (highest BP due to H-bonding) >> HI > HBr > HCl (BP increases due to increasing London forces). HF is anomaly.',
    },
    position: { x: 450, y: 550 },
  },
  {
    id: '7A.9',
    type: 'custom',
    data: {
      label: '7A.9 Solubility & H-Bonding',
      description: '"Like dissolves like" (polar in polar, non-polar in non-polar).\nExamples: NaCl in H₂O (ion-dipole), Alcohols in H₂O (H-bonding), Alkanes not in H₂O.\nAlcohol Solubility Trend: Decreases as non-polar chain grows (Methanol/Ethanol/Propanol miscible, Butanol partial, Pentanol+ immiscible). Balance hydrophilic (-OH) vs hydrophobic (alkyl).',
    },
    position: { x: 50, y: 700 },
  },
  {
    id: '7A.10',
    type: 'custom',
    data: {
      label: '7A.10 Enthalpy of Vaporisation (ΔHvap)',
      description: 'Energy to convert 1 mol liquid to gas at BP. Compares IMF strength.\nExamples: Butan-1-ol (ΔHvap ≈ 52 kJ/mol, H-bonding) vs Butane (ΔHvap ≈ 20 kJ/mol, London only). Large ΔHvap = strong IMF.',
    },
    position: { x: 450, y: 700 },
  },
  {
    id: 'Summary',
    type: 'custom',
    data: {
      label: 'Summary Key Concepts',
      description: 'IMF weaker than bonds, influence properties.\nTypes: London, Dipole-Dipole, H-bonding.\nLondon: All molecules, grows w/ size/surface.\nH-bond: Needs H-(N/O/F) & lone pair on N/O/F. High BPs for HF, H₂O, NH₃.\nBP increases with Mr & stronger IMF.\nWater expands on freezing (lattice).\nSolubility: Polarity & H-bonding. \nΔHvap higher for H-bonded.',
    },
    position: { x: 250, y: 850 },
    style: { background: '#F0FFF4', border: '1px solid #38A169', width: 400 },
  },
];

// Updated Initial Edges
const initialEdges: Edge[] = [
  { id: 'e7-7A.1', source: '7', target: '7A.1', animated: true },
  { id: 'e7-7A.2', source: '7', target: '7A.2', animated: true },
  { id: 'e7-7A.3', source: '7', target: '7A.3', animated: true },
  { id: 'e7-7A.4', source: '7', target: '7A.4', animated: true },
  { id: 'e7-7A.5', source: '7', target: '7A.5', animated: true },
  { id: 'e7-7A.6', source: '7', target: '7A.6', animated: true },
  { id: 'e7-7A.7', source: '7', target: '7A.7', animated: true },
  { id: 'e7-7A.8', source: '7', target: '7A.8', animated: true },
  { id: 'e7-7A.9', source: '7', target: '7A.9', animated: true },
  { id: 'e7-7A.10', source: '7', target: '7A.10', animated: true },
  { id: 'e7-Summary', source: '7', target: 'Summary', animated: true, style: { stroke: '#38A169', strokeWidth: 2 } },
];

const ChapterSevenMindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const resetLayout = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={{ background: '#000' }}
        attributionPosition="bottom-right"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.id.startsWith('7A')) return '#ff4000';
            if (n.id.startsWith('7B')) return '#00bfff';
            if (n.id.startsWith('7C')) return '#32cd32';
            return '#fff';
          }}
        />
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#444" />
        <Panel position="top-right">
          <div className="flex space-x-2">
            <button
              onClick={resetLayout}
              className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Reset Layout
            </button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default ChapterSevenMindMap;
