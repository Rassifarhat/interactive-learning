// AlkenesMindMap.tsx
import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  NodeTypes,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AlkeneSummaryProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const AlkeneSummary: React.FC<AlkeneSummaryProps> = ({ title, content, onClose }) => {
  return (
    <Card sx={{ 
      position: 'absolute', 
      top: '20px', 
      right: '20px', 
      width: '400px', 
      maxHeight: '80vh', 
      overflow: 'auto',
      zIndex: 5,
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#6b46c1', color: 'white', p: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton size="small" onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
};

const CustomNode = ({ data, isConnectable }: any) => {
  return (
    <div 
      style={{ 
        background: data.color || '#f5f5f5', 
        color: data.textColor || '#000', 
        padding: '10px 15px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: data.width || 180,
        fontSize: data.fontSize || '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}
      onClick={data.onClick}
    >
      {data.label}
    </div>
  );
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const AlkenesMindMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  // Define node content
  const nodeContents = {
    alkenes: {
      title: "Alkenes Overview",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Concepts</Typography>
          <ul>
            <li><strong>General formula:</strong> C<sub>n</sub>H<sub>2n</sub> (non-cyclic)</li>
            <li><strong>Structure:</strong> Contain at least one C=C double bond</li>
            <li><strong>Trigonal planar geometry:</strong> Bond angles ~120°</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Always identify the C=C bond in structures first - it's the reactive site!</li>
            <li>Remember cycloalkenes have formula C<sub>n</sub>H<sub>2n-2</sub>, not C<sub>n</sub>H<sub>2n</sub></li>
            <li>Drawing structures: show C=C with 120° bond angles</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 3, mb: 2 }}>Common Mistakes</Typography>
          <ul>
            <li>Confusing alkanes and alkenes in naming or formula</li>
            <li>Forgetting double bonds need 2 fewer hydrogen atoms</li>
          </ul>
        </div>
      )
    },
    bonding: {
      title: "Alkene Bonding",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Concepts</Typography>
          <ul>
            <li><strong>Double bond structure:</strong>
              <ul>
                <li>Sigma (σ) bond: Head-on overlap, strong</li>
                <li>Pi (π) bond: Sideways p-orbital overlap, weak and reactive</li>
              </ul>
            </li>
            <li><strong>Hybridization:</strong> sp<sup>2</sup> hybridized carbon atoms</li>
            <li><strong>Geometry:</strong> Trigonal planar with 120° bond angles</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Sketch the pi bond correctly - it's above and below the plane of the carbon atoms</li>
            <li>The pi bond's exposure makes it vulnerable to attack by electrophiles</li>
            <li>Restricted rotation around C=C is crucial for understanding stereoisomerism</li>
          </ul>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: '#f0f4ff', borderRadius: 1 }}>
            <Typography variant="body2" fontStyle="italic">
              Remember: Pi bonds are formed by sideways overlap of unhybridized p orbitals.
              This is why rotation is restricted - it would break the pi bond!
            </Typography>
          </Box>
        </div>
      )
    },
    isomerism: {
      title: "Geometric Isomerism",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Concepts</Typography>
          <ul>
            <li><strong>Causes:</strong> Restricted rotation around C=C double bond</li>
            <li><strong>Requirements:</strong> Each carbon must have two different groups</li>
            <li><strong>Types:</strong>
              <ul>
                <li><em>E-isomer:</em> Higher priority groups on opposite sides</li>
                <li><em>Z-isomer:</em> Higher priority groups on same side</li>
              </ul>
            </li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Use Cahn-Ingold-Prelog priority rules to assign E/Z correctly</li>
            <li>Higher atomic number = higher priority</li>
            <li>Draw clear diagrams showing groups on opposite/same sides</li>
            <li>Only use cis/trans for identical groups, otherwise use E/Z</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 3, mb: 2 }}>Common Mistakes</Typography>
          <ul>
            <li>Using cis/trans when groups are different</li>
            <li>Incorrectly assigning priorities</li>
            <li>Forgetting that cyclic alkenes can also show E/Z isomerism</li>
          </ul>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: '#fff4f0', borderRadius: 1 }}>
            <Typography variant="body2" fontStyle="italic">
              Memorization Tip: E = "Enemies" (opposite sides), Z = "Zusammen" (together on same side)
            </Typography>
          </Box>
        </div>
      )
    },
    addition: {
      title: "Addition Reactions",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Addition Reactions</Typography>
          <ul>
            <li><strong>Hydrogenation:</strong> C=C + H<sub>2</sub> → C-C (Ni catalyst, 150°C)</li>
            <li><strong>Halogenation:</strong> C=C + X<sub>2</sub> → X-C-C-X (X = Br, Cl)</li>
            <li><strong>Hydrogen halides:</strong> C=C + HX → C-C-X (X = Cl, Br, I)</li>
            <li><strong>Hydration:</strong> C=C + H<sub>2</sub>O → C-C-OH (H<sub>3</sub>PO<sub>4</sub> catalyst)</li>
            <li><strong>Oxidation:</strong> C=C + [O] + H<sub>2</sub>O → C(OH)-C(OH) (KMnO<sub>4</sub>)</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li><strong>Test for C=C:</strong> Bromine water decolorization</li>
            <li><strong>Markovnikov's Rule:</strong> H adds to C with more H atoms</li>
            <li>Write balanced equations with all necessary reagents and conditions</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 3, mb: 2 }}>Common Mistakes</Typography>
          <ul>
            <li>Forgetting catalysts or conditions</li>
            <li>Applying Markovnikov's rule incorrectly</li>
            <li>Confusing hydration (with water) and hydrogenation (with H<sub>2</sub>)</li>
          </ul>
        </div>
      )
    },
    mechanism: {
      title: "Electrophilic Addition Mechanism",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Mechanism Steps</Typography>
          <ol>
            <li><strong>Step 1:</strong> Electrophile (E+) attacks the π bond
              <ul>
                <li>Pi electrons attack the electrophile</li>
                <li>Forms a carbocation intermediate</li>
              </ul>
            </li>
            <li><strong>Step 2:</strong> Nucleophile (Nu-) attacks the carbocation
              <ul>
                <li>Forms new C-Nu bond</li>
                <li>Completes the addition process</li>
              </ul>
            </li>
          </ol>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Use curly arrows correctly - start from electron source (bond/lone pair)</li>
            <li>Show all intermediate steps and charges</li>
            <li>With asymmetric alkenes, carbocation forms at more substituted carbon</li>
            <li>Show heterolytic bond breaking clearly</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 3, mb: 2 }}>Common Mistakes</Typography>
          <ul>
            <li>Incorrect arrow usage (direction/starting point)</li>
            <li>Not showing intermediate carbocation</li>
            <li>Forgetting to show charges</li>
            <li>Incorrect carbocation formation position</li>
          </ul>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: '#f0fff4', borderRadius: 1 }}>
            <Typography variant="body2" fontStyle="italic">
              Tip: Stability of carbocations: 3° &gt; 2° &gt; 1° - This explains Markovnikov's rule!
            </Typography>
          </Box>
        </div>
      )
    },
    polymerisation: {
      title: "Addition Polymerisation",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Concepts</Typography>
          <ul>
            <li><strong>Process:</strong> Alkene monomers join through double bonds</li>
            <li><strong>Conditions:</strong> High pressure, high temperature, catalyst</li>
            <li><strong>Result:</strong> Long chain with repeating units</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Common Polymers</Typography>
          <ul>
            <li><strong>Ethene → Poly(ethene)</strong> - Plastic bags, bottles</li>
            <li><strong>Propene → Poly(propene)</strong> - Ropes, carpets</li>
            <li><strong>Chloroethene → Poly(chloroethene)</strong> - PVC pipes</li>
            <li><strong>Tetrafluoroethene → PTFE</strong> - Non-stick coatings</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Draw repeat units in square brackets with continuation bonds</li>
            <li>Identify monomer from polymer and vice versa</li>
            <li>Use subscript 'n' to show repeating unit</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="error" sx={{ mt: 3, mb: 2 }}>Common Mistakes</Typography>
          <ul>
            <li>Drawing repeat units incorrectly (forgetting bonds that extend outside brackets)</li>
            <li>Confusing addition and condensation polymers</li>
            <li>Incorrect conversion between monomer and polymer structures</li>
          </ul>
        </div>
      )
    },
    environment: {
      title: "Environmental Concerns",
      content: (
        <div>
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 2 }}>Key Problems</Typography>
          <ul>
            <li><strong>Non-biodegradable:</strong> Most addition polymers persist in environment</li>
            <li><strong>Waste accumulation:</strong> Landfills, ocean pollution</li>
            <li><strong>Toxic emissions:</strong> Some release harmful gases when incinerated</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Solutions</Typography>
          <ul>
            <li><strong>Recycling:</strong> Melting and remolding thermoplastics</li>
            <li><strong>Incineration:</strong> Energy recovery but potential emissions</li>
            <li><strong>Biodegradable alternatives:</strong> Polymers that break down naturally</li>
            <li><strong>Reducing usage:</strong> Alternatives to single-use plastics</li>
          </ul>
          
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mt: 3, mb: 2 }}>Exam Tips</Typography>
          <ul>
            <li>Discuss advantages AND disadvantages of each solution</li>
            <li>Link to sustainable development and green chemistry</li>
            <li>Use specific examples (PLA as biodegradable polymer)</li>
          </ul>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: '#f4f0ff', borderRadius: 1 }}>
            <Typography variant="body2" fontStyle="italic">
              Evaluation is key here - show understanding of the trade-offs between different approaches to polymer waste.
            </Typography>
          </Box>
        </div>
      )
    }
  };

  // Function to handle node click
  const handleNodeClick = useCallback((nodeId: string) => {
    const content = nodeContents[nodeId as keyof typeof nodeContents];
    setSelectedNode(content);
  }, []);

  // Define initial nodes with their positions
  const initialNodes: Node[] = [
    {
      id: 'alkenes',
      position: { x: 400, y: 50 },
      data: { 
        label: 'Alkenes (Topic 5)', 
        onClick: () => handleNodeClick('alkenes'),
        color: '#8b5cf6',
        textColor: 'white',
        width: 200,
        fontSize: '16px'
      },
      type: 'custom',
    },
    {
      id: 'bonding',
      position: { x: 150, y: 175 },
      data: { 
        label: '5A.1 Alkene Bonding', 
        onClick: () => handleNodeClick('bonding'),
        color: '#a78bfa',
        textColor: 'white'
      },
      type: 'custom',
    },
    {
      id: 'isomerism',
      position: { x: 400, y: 175 },
      data: { 
        label: '5A.2 Geometric Isomerism', 
        onClick: () => handleNodeClick('isomerism'),
        color: '#a78bfa',
        textColor: 'white'
      },
      type: 'custom',
    },
    {
      id: 'addition',
      position: { x: 650, y: 175 },
      data: { 
        label: '5A.3 Addition Reactions', 
        onClick: () => handleNodeClick('addition'),
        color: '#a78bfa', 
        textColor: 'white'
      },
      type: 'custom',
    },
    {
      id: 'mechanism',
      position: { x: 650, y: 300 },
      data: { 
        label: '5A.4 Electrophilic Addition Mechanism', 
        onClick: () => handleNodeClick('mechanism'),
        color: '#c4b5fd'
      },
      type: 'custom',
    },
    {
      id: 'polymerisation',
      position: { x: 150, y: 400 },
      data: { 
        label: '5B.1 Addition Polymerisation', 
        onClick: () => handleNodeClick('polymerisation'),
        color: '#8b5cf6',
        textColor: 'white' 
      },
      type: 'custom',
    },
    {
      id: 'environment',
      position: { x: 400, y: 400 },
      data: { 
        label: '5B.2 Environmental Concerns', 
        onClick: () => handleNodeClick('environment'),
        color: '#8b5cf6',
        textColor: 'white'
      },
      type: 'custom',
    },
  ];

  // Define edges connecting the nodes
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'alkenes', target: 'bonding', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e1-3', source: 'alkenes', target: 'isomerism', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e1-4', source: 'alkenes', target: 'addition', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e4-5', source: 'addition', target: 'mechanism', style: { stroke: '#a78bfa' } },
    { id: 'e1-6', source: 'alkenes', target: 'polymerisation', animated: true, style: { stroke: '#8b5cf6' } },
    { id: 'e1-7', source: 'alkenes', target: 'environment', animated: true, style: { stroke: '#8b5cf6' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <Box sx={{ height: '750px', width: '100%', border: '1px solid #e5e7eb', borderRadius: '8px', position: 'relative' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        connectionLineType={ConnectionLineType.SmoothStep}
      >
        <Controls />
        <MiniMap nodeStrokeWidth={3} zoomable pannable />
        <Background color="#f8f8f8" gap={16} />
      </ReactFlow>
      
      {selectedNode && (
        <AlkeneSummary
          title={selectedNode.title}
          content={selectedNode.content}
          onClose={() => setSelectedNode(null)}
        />
      )}
      
      <Box sx={{ 
        position: 'absolute', 
        bottom: '10px', 
        left: '10px', 
        bgcolor: 'rgba(255,255,255,0.8)', 
        p: 1, 
        borderRadius: 1, 
        fontSize: '14px',
        color: '#666'
      }}>
        Click on any node to see detailed information and exam tips
      </Box>
    </Box>
  );
};

export default AlkenesMindMap;