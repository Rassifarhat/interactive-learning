import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  MiniMap,
  Panel,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';

// Define the data structure for node content
interface NodeData {
  label: string;
  description: string;
}

// Custom node component (reusing the same style)
const CustomNode = ({ data }: { data: NodeData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 shadow-md max-w-md">
      <div
        className="font-semibold text-green-800 cursor-pointer hover:text-green-600 flex items-center justify-between"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{data.label}</span>
        <span className="text-xs ml-2">{expanded ? '[-]' : '[+]'}</span>
      </div>

      {expanded && (
        <div className="mt-2 text-sm whitespace-pre-wrap">
          <div className="mt-1 text-gray-700">{data.description}</div>
        </div>
      )}
    </div>
  );
};

// Node types for ReactFlow
const nodeTypes = { custom: CustomNode };

// Initial Nodes for Chapter 9
const initialNodes: Node[] = [
  {
    id: '9',
    type: 'input',
    data: { label: 'Chapter 9: Kinetics & Equilibria' },
    position: { x: 500, y: 5 },
    style: { background: '#34D399', color: 'white', border: '1px solid #059669', width: 250 },
  },
  // 9A Rates & Factors
  {
    id: '9A.1',
    type: 'custom',
    data: {
      label: '9A.1 Rates of Reaction',
      description: 'Rate = Δ[conc] / Δt (or amount/time)\nMeasured by: Gas volume, Mass change, Precipitate, Colour change, pH change.\nGraph: Gradient = rate (Steeper = faster, Flat = finished).'
    },
    position: { x: 50, y: 100 },
  },
  {
    id: '9A.2',
    type: 'custom',
    data: {
      label: '9A.2 Factors Affecting Rate',
      description: 'Collision Theory: Collide + ≥Ea + Correct Orientation\nFactors:\n • Concentration (↑ = more freq collisions)\n • Pressure (gases) (↑ = more freq collisions)\n • Temperature (↑ = more freq + energetic collisions)\n • Surface area (↑ = more exposure)\n • Catalysts (↓ Ea)'
    },
    position: { x: 50, y: 250 },
  },
  {
    id: '9A.3',
    type: 'custom',
    data: {
      label: '9A.3 Maxwell–Boltzmann Distribution',
      description: 'Shows energy distribution.\nFeatures: Starts at origin, peaks, Area = # particles, Never touches x-axis.\nEffect of Temp ↑: Curve shifts right, peak lowers, more particles ≥ Ea.\nEffect of Catalyst: Lowers Ea, more particles ≥ Ea (curve shape unchanged).'
    },
    position: { x: 50, y: 450 },
  },
  // 9B Catalysts
  {
    id: '9B',
    type: 'custom',
    data: {
      label: '9B. Catalysts',
      description: 'Increases rate via alternative route with lower Ea.\nNot used up.\nTypes: Homogeneous (same phase), Heterogeneous (different phase).\nDoes NOT affect equilibrium position, only speed.'
    },
    position: { x: 350, y: 100 },
  },
  // 9C Equilibrium
  {
    id: '9C',
    type: 'custom',
    data: {
      label: '9C. Dynamic Equilibrium',
      description: 'In closed system, reversible reaction.\nEquilibrium when: Forward rate = backward rate, Concentrations constant.\nMust be a closed system.'
    },
    position: { x: 350, y: 250 },
  },
  // 9D Le Chatelier
  {
    id: '9D',
    type: 'custom',
    data: {
      label: '9D. Le Chatelier’s Principle',
      description: '"System shifts to oppose change applied at equilibrium."\nEffects:\n • Conc: ↑ Reactants → shifts right (→)\n • Pressure (gases): ↑ Pressure → shifts to side with fewer gas moles\n • Temp: ↑ Temp → favours endothermic direction\n • Catalyst: No shift, faster equilibrium.'
    },
    position: { x: 650, y: 100 },
  },
  // 9E Industrial
  {
    id: '9E',
    type: 'custom',
    data: {
      label: '9E. Industrial Equilibria (Optimisation)',
      description: 'Haber Process: N₂ + 3H₂ ⇌ 2NH₃ (ΔH = –92)\nConditions: Compromise 450°C, 200 atm, Fe catalyst (Low T, High P favourable but slow).\nContact Process (H₂SO₄): 2SO₂ + O₂ ⇌ 2SO₃ (ΔH = –196)\nConditions: 450°C, 2 atm, V₂O₅ catalyst.'
    },
    position: { x: 650, y: 300 },
  },
  // 9F Atom Economy
  {
    id: '9F',
    type: 'custom',
    data: {
      label: '9F. Atom Economy',
      description: 'Atom Economy = (Mr desired product / Total Mr reactants) × 100\nMeasures efficiency of resource use.\nHigh atom economy = less waste (Green Chemistry goal).'
    },
    position: { x: 950, y: 100 },
  },
  // 9G Practical
  {
    id: '9G',
    type: 'custom',
    data: {
      label: '9G. Practical Tips & Warnings',
      description: 'Measuring rates: Gas syringe/mass loss (gas), Colorimetry/turbidity (solutions).\nRepeat for accuracy. ID limiting reagent.\nCommon Pitfalls:\n • Catalyst affects equilibrium position (No!)\n • Ignoring stoichiometry for pressure changes\n • Not using Le Chatelier correctly\n • Confusing rate vs. equilibrium position.'
    },
    position: { x: 950, y: 250 },
  },
];

// Initial Edges for Chapter 9
const initialEdges: Edge[] = [
  { id: 'e9-9A.1', source: '9', target: '9A.1' },
  { id: 'e9-9A.2', source: '9', target: '9A.2' },
  { id: 'e9-9A.3', source: '9', target: '9A.3' },
  { id: 'e9-9B', source: '9', target: '9B' },
  { id: 'e9-9C', source: '9', target: '9C' },
  { id: 'e9-9D', source: '9', target: '9D' },
  { id: 'e9-9E', source: '9', target: '9E' },
  { id: 'e9-9F', source: '9', target: '9F' },
  { id: 'e9-9G', source: '9', target: '9G' },
];

const ChapterNineMindMap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

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
        style={{ background: '#000' }} // Black background
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#444" />
      </ReactFlow>
    </div>
  );
};

export default ChapterNineMindMap;
