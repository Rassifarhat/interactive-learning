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
        className="font-semibold text-purple-800 cursor-pointer hover:text-purple-600 flex items-center justify-between"
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

// Initial Nodes for Chapter 10
const initialNodes: Node[] = [
  {
    id: '10',
    type: 'input',
    data: { label: 'Chapter 10: Halogenoalkanes, Alcohols & Spectroscopy' },
    position: { x: 600, y: 5 },
    style: { background: '#A855F7', color: 'white', border: '1px solid #7E22CE', width: 350 },
  },
  // 10A Halogenoalkanes
  {
    id: '10A.1',
    type: 'custom',
    data: {
      label: '10A Halogenoalkanes: Basics',
      description: 'Definition: Organic molecule with halogen (X) on saturated C chain (CₙH₂ₙ₊₁X).\nClassification: 1° (X on C-1C), 2° (X on C-2C), 3° (X on C-3C).\nPolarity: C(δ⁺)–X(δ⁻) bond. Strength ↓ down group (C-F > C-Cl > C-Br > C-I).\nReactivity: Iodo > Bromo > Chloro (weaker bond enthalpy, not polarity).'
    },
    position: { x: 50, y: 100 },
  },
  {
    id: '10A.2',
    type: 'custom',
    data: {
      label: '10A.2 Hydrolysis of Halogenoalkanes',
      description: 'Type: Nucleophilic substitution.\nReagents: Aq. AgNO₃ + ethanol (solvent).\nMechanism: Nucleophile (:Nu⁻) attacks C(δ⁺), X⁻ leaves.\nObservation: Halide + Ag⁺ → Precipitate (Cl⁻ white, Br⁻ cream, I⁻ yellow).\nRate: Faster ppt = faster hydrolysis (C–I fastest).'
    },
    position: { x: 50, y: 250 },
  },
  {
    id: '10A.3',
    type: 'custom',
    data: {
      label: '10A.3 Mechanism: Nucleophilic Substitution',
      description: '1. Nu⁻ attacks δ⁺ C from opposite side of X.\n2. Transition state forms.\n3. X⁻ leaves, Nu replaces.\nExamples: :OH⁻ → alcohol, :CN⁻ → nitrile, :NH₃ → amine.\nUse curly arrows, lone pairs, charges.'
    },
    position: { x: 50, y: 400 },
  },
  {
    id: '10A.4',
    type: 'custom',
    data: {
      label: '10A.4 Elimination of HX',
      description: 'Reagent: Hot ethanolic KOH.\nMechanism: OH⁻ acts as BASE, removes H from β-carbon.\nProducts: Alkene + H₂O + X⁻.\nCompetition: Ethanol favours elimination; Water favours substitution.'
    },
    position: { x: 50, y: 550 },
  },
  // 10B Alcohols
  {
    id: '10B.1',
    type: 'custom',
    data: {
      label: '10B Alcohols: Classification',
      description: 'Based on C attached to -OH:\n • Primary (1°): C bonded to 1 other C\n • Secondary (2°): C bonded to 2 other C\n • Tertiary (3°): C bonded to 3 other C'
    },
    position: { x: 350, y: 100 },
  },
  {
    id: '10B.2',
    type: 'custom',
    data: {
      label: '10B.2 Preparation of Alcohols',
      description: '1. From Halogenoalkanes: Nu substitution with OH⁻.\n2. From Alkenes: Electrophilic addition of steam (H⁺ catalyst).\n3. From Carbonyls: Reduction (NaBH₄ or LiAlH₄).'
    },
    position: { x: 350, y: 200 },
  },
  {
    id: '10B.3-Combustion',
    type: 'custom',
    data: {
      label: '10B.3 Reactions: Combustion',
      description: 'Complete: forms CO₂ + H₂O\nIncomplete: forms CO or C (soot)'
    },
    position: { x: 350, y: 300 },
  },
   {
    id: '10B.3-Substitution',
    type: 'custom',
    data: {
      label: '10B.3 Reactions: Substitution to Haloalkanes',
      description: 'Reagents:\n • PCl₅ → HCl gas\n • NaBr + H₂SO₄ → HBr (in situ)\n • Red P + I₂ → PI₃ (in situ)'
    },
    position: { x: 350, y: 400 },
  },
  {
    id: '10B.3-Oxidation',
    type: 'custom',
    data: {
      label: '10B.3 Reactions: Oxidation',
      description: 'Agent: K₂Cr₂O₇/H₂SO₄ (Orange → Green)\n • Primary (1°): Distill → Aldehyde, Reflux → Carboxylic Acid\n • Secondary (2°): Reflux → Ketone\n • Tertiary (3°): No reaction (resists oxidation)'
    },
    position: { x: 600, y: 100 },
  },
  {
    id: '10B.3-Elimination',
    type: 'custom',
    data: {
      label: '10B.3 Reactions: Elimination (Dehydration)',
      description: 'Reagents: Conc. H₂SO₄ or H₃PO₄, heat.\nForms: Alkene + H₂O'
    },
    position: { x: 600, y: 250 },
  },
  // 10C Practical
  {
    id: '10C',
    type: 'custom',
    data: {
      label: '10C Organic Practical Techniques',
      description: 'Heating: Reflux (no volatile loss), Distillation (separation by BP).\nPurification: Separating funnel (layers), Drying agents (anhydrous CaCl₂/MgSO₄), Redistillation.\nTesting Purity: Measure BP range (sharp = pure).'
    },
    position: { x: 850, y: 100 },
  },
  // 10D Spectroscopy
  {
    id: '10D.1',
    type: 'custom',
    data: {
      label: '10D.1 Mass Spectrometry (MS)',
      description: 'Provides Mr (molecular ion, M⁺) & structure clues (fragmentation).\nBase peak: Most intense peak (most stable fragment).'
    },
    position: { x: 850, y: 250 },
  },
  {
    id: '10D.2',
    type: 'custom',
    data: {
      label: '10D.2 Infrared (IR) Spectroscopy',
      description: 'Identifies functional groups via bond vibrations.\nKey Absorptions:\n • ~3200–3550 cm⁻¹: O–H (alcohol/acid broad)\n • ~1700 cm⁻¹: C=O (carbonyl strong)\n • ~2850–3100 cm⁻¹: C–H\nFingerprint Region (<1500 cm⁻¹): Unique pattern for ID.'
    },
    position: { x: 1100, y: 100 },
  },
  {
    id: '10D.3',
    type: 'custom',
    data: {
      label: '10D.3 Real-life Uses',
      description: 'Breathalysers: Detect O–H in ethanol via IR.\nPollution Monitoring: Detect CO, NO, etc. via IR.'
    },
    position: { x: 1100, y: 250 },
  },
  {
    id: '10-KeyTips',
    type: 'custom',
    data: {
      label: 'Key Tips & Reminders',
      description: ' • C-I hydrolysis fastest (weakest bond).\n • OH⁻: Nucleophile (subst), Base (elim).\n • 1° alcohol oxidation: Aldehyde (distill), Acid (reflux).\n • AgNO₃ tests for halides (ppt colour).\n • MS → Mr; IR → Functional groups.'
    },
    position: { x: 1100, y: 400 },
  },
];

// Initial Edges for Chapter 10
const initialEdges: Edge[] = [
  // Main sections to Title
  { id: 'e10-10A.1', source: '10', target: '10A.1' },
  { id: 'e10-10B.1', source: '10', target: '10B.1' },
  { id: 'e10-10C', source: '10', target: '10C' },
  { id: 'e10-10D.1', source: '10', target: '10D.1' }, // Link to MS
  { id: 'e10-10D.2', source: '10', target: '10D.2' }, // Link to IR
  { id: 'e10-KeyTips', source: '10', target: '10-KeyTips' },

  // 10A Halogenoalkanes sub-links
  { id: 'e10A.1-10A.2', source: '10A.1', target: '10A.2', animated: true },
  { id: 'e10A.2-10A.3', source: '10A.2', target: '10A.3', animated: true },
  { id: 'e10A.3-10A.4', source: '10A.3', target: '10A.4', animated: true },

  // 10B Alcohols sub-links
  { id: 'e10B.1-10B.2', source: '10B.1', target: '10B.2', animated: true },
  { id: 'e10B.2-10B.3-Combustion', source: '10B.2', target: '10B.3-Combustion' },
  { id: 'e10B.2-10B.3-Substitution', source: '10B.2', target: '10B.3-Substitution' },
  { id: 'e10B.2-10B.3-Oxidation', source: '10B.2', target: '10B.3-Oxidation' },
  { id: 'e10B.2-10B.3-Elimination', source: '10B.2', target: '10B.3-Elimination' },

  // 10D Spectroscopy sub-links
  { id: 'e10D.1-10D.2', source: '10D.1', target: '10D.2' }, // Link MS to IR
  { id: 'e10D.2-10D.3', source: '10D.2', target: '10D.3', animated: true }, // Link IR to Uses
];


const ChapterTenMindMap = () => {
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

export default ChapterTenMindMap;
