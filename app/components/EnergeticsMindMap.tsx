// EnergeticsMindMap.tsx
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

// Node content interface
interface NodeContent {
  title: string;
  content: React.ReactNode;
}

// Custom node component
const CustomNode = ({ data }: any) => {
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

// Summary card component
const EnergySummary: React.FC<{
    title: string;
    content: React.ReactNode;
    onClose: () => void;
  }> = ({ title, content, onClose }) => {
    return (
      <div className="fixed top-20 right-5 w-[400px] max-h-[80vh] overflow-auto z-50 bg-white rounded-lg shadow-xl border border-gray-200">
        <div className="flex justify-between items-center bg-teal-600 text-white p-3 rounded-t-lg">
          <h3 className="text-lg font-bold">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Added text-gray-900 here to ensure body text is dark */}
        <div className="p-4 text-gray-900">
          {content}
        </div>
      </div>
    );
  };
  
const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const EnergeticsMindMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeContent | null>(null);

  // Define node content
  const nodeContents: Record<string, NodeContent> = {
    energetics: {
      title: "Energetics (Topic 6) Overview",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Key Concepts</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Enthalpy change (ΔH):</strong> Heat energy transferred in a reaction at constant pressure</li>
              <li><strong>System:</strong> The reacting substances</li>
              <li><strong>Surroundings:</strong> Everything outside the system</li>
              <li><strong>Exothermic:</strong> Heat energy released to surroundings (ΔH negative)</li>
              <li><strong>Endothermic:</strong> Heat energy absorbed from surroundings (ΔH positive)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Exam Tips</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Always include state symbols in thermochemical equations</li>
              <li>Remember standard conditions: 298 K (25°C) and 100 kPa</li>
              <li>Understand the meaning of each standard enthalpy change</li>
              <li>Know how to calculate enthalpy changes from experimental data</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="italic text-sm">
              Remember: Energy cannot be created or destroyed (First Law of Thermodynamics), only transformed from one form to another.
            </p>
          </div>
        </div>
      )
    },
    exothermic: {
      title: "Exothermic & Endothermic Reactions",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Exothermic Reactions</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Heat energy is released to surroundings</li>
              <li>ΔH is negative (-)</li>
              <li>Products have lower enthalpy than reactants</li>
              <li><strong>Examples:</strong> Combustion, neutralization, oxidation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Endothermic Reactions</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Heat energy is absorbed from surroundings</li>
              <li>ΔH is positive (+)</li>
              <li>Products have higher enthalpy than reactants</li>
              <li><strong>Examples:</strong> Thermal decomposition, photosynthesis</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Enthalpy Profile Diagrams</h4>
            <div className="border-l-4 border-teal-500 pl-3 mb-2">
              <p className="font-semibold">Exothermic:</p>
              <p className="italic">Reactants at higher level, arrow pointing down to products</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-3">
              <p className="font-semibold">Endothermic:</p>
              <p className="italic">Reactants at lower level, arrow pointing up to products</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Common Mistake:</strong> Remember, in exothermic reactions, the system loses energy, but the surroundings gain energy (get hotter).
            </p>
          </div>
        </div>
      )
    },
    standard: {
      title: "Standard Enthalpy Changes",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Standard Conditions</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Temperature: 298 K (25°C)</li>
              <li>Pressure: 100 kPa (1 bar)</li>
              <li>Concentration of solutions: 1 mol dm⁻³</li>
              <li>All reactants and products in their standard states</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Types of Standard Enthalpy Changes</h4>
            <div className="space-y-2">
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Standard Enthalpy Change of Combustion (ΔHc°):</p>
                <p>The enthalpy change when 1 mole of a substance burns completely in oxygen under standard conditions.</p>
                <p className="text-sm italic">e.g., CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) ΔHc° = -890 kJ mol⁻¹</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Standard Enthalpy Change of Formation (ΔHf°):</p>
                <p>The enthalpy change when 1 mole of a compound is formed from its elements in their standard states.</p>
                <p className="text-sm italic">e.g., C(s) + 2H₂(g) → CH₄(g) ΔHf° = -74.8 kJ mol⁻¹</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Standard Enthalpy Change of Neutralization (ΔHn°):</p>
                <p>The enthalpy change when 1 mole of water is formed in the neutralization of an acid and a base.</p>
                <p className="text-sm italic">e.g., H⁺(aq) + OH⁻(aq) → H₂O(l) ΔHn° = -57.1 kJ mol⁻¹</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Standard Enthalpy Change of Atomization (ΔHat°):</p>
                <p>The enthalpy change when 1 mole of gaseous atoms is formed from the element in its standard state.</p>
                <p className="text-sm italic">e.g., ½Cl₂(g) → Cl(g) ΔHat° = +121 kJ mol⁻¹</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    measurement: {
      title: "Measuring Enthalpy Changes",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Calorimetry Equation</h4>
            <div className="bg-gray-100 p-3 rounded-md text-center font-semibold">
              q = mcΔT
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>q = heat energy change (J)</li>
              <li>m = mass of water/solution (g)</li>
              <li>c = specific heat capacity (4.18 J g⁻¹ K⁻¹ for water)</li>
              <li>ΔT = temperature change (K or °C)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Converting to Molar Enthalpy Change</h4>
            <div className="bg-gray-100 p-3 rounded-md text-center font-semibold">
              ΔH = -q ÷ n
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>ΔH = enthalpy change (kJ mol⁻¹)</li>
              <li>q = heat energy change (J) converted to kJ</li>
              <li>n = number of moles of limiting reactant</li>
              <li>Negative sign because heat released by reaction is absorbed by surroundings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Types of Calorimetry</h4>
            <div className="space-y-2">
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Combustion:</p>
                <p>Using spirit burner and copper calorimeter with water</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Solution-based:</p>
                <p>Using polystyrene cup (to minimize heat loss) for neutralization, dissolution, etc.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Exam Tip:</strong> In calculations, make sure you account for the limiting reactant. Also, convert J to kJ (divide by 1000) when calculating ΔH in kJ mol⁻¹.
            </p>
          </div>
        </div>
      )
    },
    hess: {
      title: "Hess's Law & Enthalpy Cycles",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Hess's Law</h4>
            <div className="bg-gray-100 p-3 rounded-md">
              <p>The enthalpy change of a reaction is independent of the route taken, provided the initial and final conditions are the same.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Applications of Hess's Law</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Calculating unknown enthalpy changes</strong> from known values</li>
              <li><strong>Determining standard enthalpies of formation</strong> that cannot be measured directly</li>
              <li><strong>Finding enthalpy changes</strong> for reactions that are difficult to perform directly</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Methods of Calculation</h4>
            <div className="space-y-2">
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Using Enthalpies of Formation:</p>
                <p>ΔHreaction = ΣΔHf°(products) – ΣΔHf°(reactants)</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Using Enthalpies of Combustion:</p>
                <p>ΔHreaction = ΣΔHc°(reactants) – ΣΔHc°(products)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Drawing Enthalpy Cycles</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reactants in one corner, products in another</li>
              <li>Alternative routes between them showing enthalpy changes</li>
              <li>For combustion data: arrows point downwards to combustion products</li>
              <li>For formation data: arrows point from elements to compounds</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Remember:</strong> When using Hess's Law, keep track of whether you need to add or subtract enthalpy changes, and whether reaction equations need to be reversed (which changes the sign of ΔH).
            </p>
          </div>
        </div>
      )
    },
    bond: {
      title: "Bond Enthalpies",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Bond Enthalpy Definition</h4>
            <div className="bg-gray-100 p-3 rounded-md">
              <p>The energy required to break one mole of a particular bond in gaseous molecules under standard conditions.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Mean Bond Enthalpies</h4>
            <p>Average values of bond enthalpies across different compounds. Some important values (kJ mol⁻¹):</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-gray-50 p-2 rounded">H–H: 436</div>
              <div className="bg-gray-50 p-2 rounded">C–C: 347</div>
              <div className="bg-gray-50 p-2 rounded">C=C: 612</div>
              <div className="bg-gray-50 p-2 rounded">C–H: 412</div>
              <div className="bg-gray-50 p-2 rounded">O=O: 498</div>
              <div className="bg-gray-50 p-2 rounded">C–Cl: 338</div>
              <div className="bg-gray-50 p-2 rounded">O–H: 464</div>
              <div className="bg-gray-50 p-2 rounded">C=O: 743</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Calculating Enthalpy Changes</h4>
            <div className="bg-gray-100 p-3 rounded-md font-semibold text-center">
              ΔH = Σ(bonds broken) – Σ(bonds formed)
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Breaking bonds requires energy (endothermic, positive)</li>
              <li>Making bonds releases energy (exothermic, negative)</li>
              <li>The stronger the bond, the more energy needed to break it</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Example Calculation</h4>
            <p>For H₂(g) + Cl₂(g) → 2HCl(g):</p>
            <div className="space-y-2 mt-1">
              <div className="border-l-4 border-teal-500 pl-3">
                <p>Bonds broken:</p>
                <p>H–H: 436 kJ mol⁻¹</p>
                <p>Cl–Cl: 243 kJ mol⁻¹</p>
                <p>Total: 679 kJ mol⁻¹</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p>Bonds formed:</p>
                <p>2 × H–Cl: 2 × 432 = 864 kJ mol⁻¹</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p>ΔH = 679 – 864 = –185 kJ mol⁻¹</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Limitations:</strong> Bond enthalpy calculations are approximations because mean values are used. They only apply to gaseous reactions. The calculated value may differ from experimental values.
            </p>
          </div>
        </div>
      )
    },
    errors: {
      title: "Errors & Assumptions in Calorimetry",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Sources of Error in Combustion Experiments</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Heat loss to surroundings</li>
              <li>Incomplete combustion (soot formation)</li>
              <li>Heat transferred to calorimeter (not just water)</li>
              <li>Evaporation of water</li>
              <li>Movement of air causing heat loss</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Sources of Error in Solution Experiments</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Heat loss to surroundings</li>
              <li>Heat absorbed by container</li>
              <li>Measurement errors in thermometer readings</li>
              <li>Assuming solution has same specific heat capacity as water</li>
              <li>Imprecise volume measurements</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Minimizing Errors</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use a lid and insulation (e.g., polystyrene cup)</li>
              <li>Use draught shield for combustion experiments</li>
              <li>Stir solution thoroughly for even temperature distribution</li>
              <li>Position thermometer correctly</li>
              <li>Take readings quickly to minimize heat loss</li>
              <li>Account for heat capacity of calorimeter (if possible)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Exam Tip:</strong> Be prepared to evaluate experimental methods and suggest improvements. This is a common application question in exams!
            </p>
          </div>
        </div>
      )
    },
    application: {
      title: "Applications & Calculations",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Exam-Style Calculations</h4>
            <div className="space-y-2">
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">From experimental data:</p>
                <p>1. Calculate heat energy: q = mcΔT</p>
                <p>2. Convert to molar enthalpy: ΔH = -q ÷ n</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Using Hess's Law with formation enthalpies:</p>
                <p>ΔHreaction = ΣΔHf°(products) – ΣΔHf°(reactants)</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Using Hess's Law with combustion enthalpies:</p>
                <p>ΔHreaction = ΣΔHc°(reactants) – ΣΔHc°(products)</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-3">
                <p className="font-semibold">Using bond enthalpies:</p>
                <p>ΔH = Σ(bonds broken) – Σ(bonds formed)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Real-World Applications</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Combustion of fuels:</strong> Energy generation, comparing fuel efficiency</li>
              <li><strong>Chemical hand-warmers:</strong> Exothermic reactions for heat</li>
              <li><strong>Food energy:</strong> Calculating energy content</li>
              <li><strong>Alternative energy sources:</strong> Comparing efficiencies</li>
              <li><strong>Industrial processes:</strong> Optimizing energy usage</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-teal-700 font-bold mb-2">Key Values to Remember</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>ΔHc° of CH₄: -890 kJ mol⁻¹</li>
              <li>ΔHc° of C₂H₆: -1560 kJ mol⁻¹</li>
              <li>ΔHn° (acid-base): -57 kJ mol⁻¹</li>
              <li>ΔHf° of CO₂: -394 kJ mol⁻¹</li>
              <li>ΔHf° of H₂O: -286 kJ mol⁻¹</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="italic text-sm">
              <strong>Exam Tip:</strong> Learn key formulas and standard enthalpy values. Practice calculating enthalpy changes using different methods, as you may need to choose the appropriate method based on the data provided.
            </p>
          </div>
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
      id: 'energetics',
      position: { x: 400, y: 50 },
      data: { 
        label: 'Energetics (Topic 6)', 
        onClick: () => handleNodeClick('energetics'),
        color: '#14b8a6',
        textColor: 'white',
        width: 220,
        fontSize: '16px'
      },
      type: 'custom',
    },
    {
      id: 'exothermic',
      position: { x: 150, y: 175 },
      data: { 
        label: '6A. Exothermic & Endothermic', 
        onClick: () => handleNodeClick('exothermic'),
        color: '#2dd4bf',
        textColor: 'white',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'standard',
      position: { x: 400, y: 175 },
      data: { 
        label: '6B/C/D/E. Standard Enthalpy Changes', 
        onClick: () => handleNodeClick('standard'),
        color: '#2dd4bf',
        textColor: 'white',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'measurement',
      position: { x: 650, y: 175 },
      data: { 
        label: '6.2/6.5. Measuring Enthalpy Changes', 
        onClick: () => handleNodeClick('measurement'),
        color: '#2dd4bf', 
        textColor: 'white',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'hess',
      position: { x: 240, y: 300 },
      data: { 
        label: '6.3. Hess\'s Law & Enthalpy Cycles', 
        onClick: () => handleNodeClick('hess'),
        color: '#5eead4',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'bond',
      position: { x: 560, y: 300 },
      data: { 
        label: '6.4/6F/6G. Bond Enthalpies', 
        onClick: () => handleNodeClick('bond'),
        color: '#5eead4',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'errors',
      position: { x: 240, y: 425 },
      data: { 
        label: '6.6. Errors & Assumptions', 
        onClick: () => handleNodeClick('errors'),
        color: '#14b8a6',
        textColor: 'white',
        width: 200
      },
      type: 'custom',
    },
    {
      id: 'application',
      position: { x: 560, y: 425 },
      data: { 
        label: '6.7-6.9. Applications & Calculations', 
        onClick: () => handleNodeClick('application'),
        color: '#14b8a6',
        textColor: 'white',
        width: 200
      },
      type: 'custom',
    },
  ];

  // Define edges connecting the nodes
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'energetics', target: 'exothermic', animated: true, style: { stroke: '#14b8a6' } },
    { id: 'e1-3', source: 'energetics', target: 'standard', animated: true, style: { stroke: '#14b8a6' } },
    { id: 'e1-4', source: 'energetics', target: 'measurement', animated: true, style: { stroke: '#14b8a6' } },
    { id: 'e3-5', source: 'standard', target: 'hess', style: { stroke: '#2dd4bf' } },
    { id: 'e3-6', source: 'standard', target: 'bond', style: { stroke: '#2dd4bf' } },
    { id: 'e4-6', source: 'measurement', target: 'bond', style: { stroke: '#2dd4bf' } },
    { id: 'e5-7', source: 'hess', target: 'errors', style: { stroke: '#5eead4'} },
    { id: 'e5-8', source: 'hess', target: 'application', style: { stroke: '#5eead4' } },
    { id: 'e6-7', source: 'bond', target: 'errors', style: { stroke: '#5eead4' } },
    { id: 'e6-8', source: 'bond', target: 'application', style: { stroke: '#5eead4' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-full w-full border border-gray-300 rounded-lg relative">
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
        <EnergySummary
          title={selectedNode.title}
          content={selectedNode.content}
          onClose={() => setSelectedNode(null)}
        />
      )}
      
      <div className="absolute bottom-3 left-3 bg-white/80 p-2 rounded text-sm text-gray-600">
        Click on any node to see detailed information and exam tips
      </div>
    </div>
  );
};

export default EnergeticsMindMap;