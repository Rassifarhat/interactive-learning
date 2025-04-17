import React, { useState } from 'react';

type Section = {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  examTips: string;
};

const MindMap: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const mindMapData = {
    title: "Topic 1: Formulae, Equations and Amount of Substance",
    description: "The foundation of chemistry calculations and reactions",
    sections: [
      {
        id: "1A",
        title: "Atoms, Elements and Molecules",
        content: "Understanding the basic building blocks of chemistry and their relationships.",
        keyPoints: [
          "Atom: The smallest part of an element that has the properties of that element",
          "Element: A substance containing atoms of only one type (e.g., H, O, Fe)",
          "Molecule: A particle made of two or more atoms bonded together (e.g., H₂, H₂O)",
          "Compound: A substance containing atoms of different elements (e.g., H₂O, NaCl)",
          "Ion: A species with a positive (cation) or negative (anion) charge",
          "Monatomic: Elements of single atoms (He)",
          "Diatomic: Elements/compounds of two atoms (O₂, N₂)",
          "Polyatomic: Elements/compounds with several atoms (P₄, CH₄)"
        ],
        examTips: "Be precise when distinguishing between atoms, elements, molecules, and compounds. Look for specific examples in questions asking for classification."
      },
      {
        id: "1B1",
        title: "Writing Chemical Equations",
        content: "How to represent chemical reactions with balanced equations and state symbols.",
        keyPoints: [
          "Chemical equations show reactants → products",
          "Must be balanced (same number of each atom on both sides)",
          "Include state symbols: (s)=solid, (l)=liquid, (g)=gas, (aq)=aqueous",
          "Reversible reactions use ⇌ instead of →",
          "Coefficients are used to balance equations (e.g., 2H₂O)",
          "Common formulae to remember: O₂, H₂, N₂, H₂O, NaOH, HNO₃, etc."
        ],
        examTips: "Always check your equations are balanced. Pay attention to state symbols, especially distinguishing between (l) and (aq) for water."
      },
      {
        id: "1B2",
        title: "Typical Reactions of Acids",
        content: "Key reaction types involving acids and how to write their equations.",
        keyPoints: [
          "Acids with metals: metal + acid → salt + hydrogen (e.g., Mg + 2HCl → MgCl₂ + H₂)",
          "Acids with metal oxides/hydroxides: oxide/hydroxide + acid → salt + water",
          "Acids with alkalis: acid + alkali → salt + water (neutralization)",
          "Acids with carbonates: carbonate + acid → salt + water + carbon dioxide",
          "Acids with hydrogencarbonates: similar to carbonates"
        ],
        examTips: "Learn the general patterns for each reaction type. Be prepared to write the ionic equation versions, especially for neutralization (H⁺ + OH⁻ → H₂O)."
      },
      {
        id: "1B3",
        title: "Displacement Reactions",
        content: "Reactions where one element displaces another in a compound.",
        keyPoints: [
          "More reactive elements displace less reactive ones from compounds",
          "Metal displacement: metal A + compound of metal B → metal B + compound of metal A",
          "Displacement reactions are redox reactions (involve electron transfer)",
          "Common example: Mg + CuSO₄ → Cu + MgSO₄",
          "Reactivity series determines if displacement occurs"
        ],
        examTips: "Know how to identify the oxidized and reduced species. Remember that in metal displacement, the more reactive metal will always displace the less reactive one."
      },
      {
        id: "1B4",
        title: "Precipitation Reactions",
        content: "Reactions that form insoluble products (precipitates) from soluble reactants.",
        keyPoints: [
          "Used for chemical tests and working out equations",
          "Common tests: CO₂ with Ca(OH)₂ (limewater); Ba²⁺ for sulfates; Ag⁺ for halides",
          "Ionic equation focus on ions that form the precipitate",
          "Example: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
          "Simplified: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)"
        ],
        examTips: "Practice writing full and simplified ionic equations. Remember that spectator ions (those unchanged in the reaction) are excluded from simplified ionic equations."
      },
      {
        id: "1C1",
        title: "Comparing Masses of Substances",
        content: "Understanding relative atomic mass and related concepts.",
        keyPoints: [
          "Relative atomic mass (Aᵣ): Weighted mean atomic mass compared to 1/12 mass of carbon-12",
          "Relative molecular mass (Mᵣ): Sum of relative atomic masses in a molecule",
          "Relative formula mass (Mᵣ): Same as molecular mass but for ionic compounds",
          "Molar mass (M): Mass per mole of substance (g·mol⁻¹)",
          "Example: Mᵣ of H₂O = 2(1.0) + 16.0 = 18.0, so M = 18.0 g·mol⁻¹"
        ],
        examTips: "Always use the Relative Atomic Masses from the data booklet. Be careful with ionic compounds containing water of crystallization."
      },
      {
        id: "1C2",
        title: "Calculations Involving Moles",
        content: "Using the mole concept for chemical calculations.",
        keyPoints: [
          "Mole: Amount of substance containing 6.02 × 10²³ particles (Avogadro constant)",
          "Mole calculations: n = m/M (amount = mass/molar mass)",
          "Counting particles: Number = n × L (amount × Avogadro constant)",
          "Always identify the specific particle: atoms, molecules, ions, or electrons",
          "Converting between mass and amount is fundamental for all stoichiometric calculations"
        ],
        examTips: "Practice rearranging the mole equation. Always include units in your calculations and final answers. Ensure you know whether you're referring to atoms or molecules."
      },
      {
        id: "1C3",
        title: "Calculations Using Reacting Masses",
        content: "Using balanced equations to calculate amounts and masses of reactants and products.",
        keyPoints: [
          "Steps: 1) Calculate molar masses, 2) Convert masses to moles, 3) Use equation ratios, 4) Convert back to masses",
          "Balanced equations provide stoichiometric ratios",
          "Example: N₂ + 3H₂ → 2NH₃ shows 1:3:2 ratio",
          "Amount ratios are the same as the stoichiometric coefficients",
          "Can calculate amount of one substance if amount of another is known"
        ],
        examTips: "Use the mole ratios from the balanced equation, not the empirical formula. Watch for substances that are in excess - focus on the limiting reactant."
      },
      {
        id: "1C4",
        title: "The Yield of a Reaction",
        content: "Understanding theoretical, actual, and percentage yields in reactions.",
        keyPoints: [
          "Theoretical yield: Maximum possible product calculable from equations",
          "Actual yield: Measured product mass obtained in practice",
          "Percentage yield: (Actual yield/Theoretical yield) × 100",
          "Reasons for low yields: Reversible reactions, side reactions, purification losses",
          "Critical in industry where yield affects profitability"
        ],
        examTips: "Always show your working for theoretical yield calculations. Be prepared to explain why yields are less than 100% in specific contexts."
      },
      {
        id: "1C5",
        title: "Atom Economy",
        content: "Assessing efficiency of reactions based on atoms utilized in desired products.",
        keyPoints: [
          "Atom economy = (Molar mass of desired product / Sum of molar masses of all products) × 100",
          "Addition reactions have 100% atom economy (all atoms end up in the product)",
          "Substitution and elimination reactions have lower atom economies",
          "Important for green chemistry and sustainable manufacturing",
          "Concept developed by Barry Trost to assess reaction efficiency"
        ],
        examTips: "Distinguish between percentage yield and atom economy - they measure different aspects of efficiency. Remember that atom economy only depends on the balanced equation, not the actual reaction conditions."
      },
      {
        id: "1D1",
        title: "Empirical Formulae",
        content: "Finding the simplest whole-number ratio of atoms in a compound.",
        keyPoints: [
          "Calculation steps: 1) Divide mass by Aᵣ, 2) Divide by smallest number, 3) Convert to whole numbers",
          "Can be calculated from percentage composition or experimental data",
          "Combustion analysis: Used for CHO compounds by measuring CO₂ and H₂O produced",
          "Example: CH₂O (empirical) vs C₆H₁₂O₆ (molecular) for glucose",
          "When oxygen must be calculated by difference: 100% - (sum of other percentages)"
        ],
        examTips: "Watch for ratios that aren't obvious whole numbers - look for common fractions like 1:1.5 indicating a 2:3 ratio. Use at least 2 significant figures in your calculations."
      },
      {
        id: "1D2",
        title: "Molecular Formulae",
        content: "Determining the actual number of atoms in a molecule.",
        keyPoints: [
          "Molecular formula = Empirical formula × n (where n is a whole number)",
          "n = Molecular mass / Empirical formula mass",
          "Examples: Hydrogen peroxide (HO empirical, H₂O₂ molecular)",
          "Compounds with the same empirical and molecular formulae: CO₂, H₂O",
          "Can be determined using molar mass from ideal gas equation PV = nRT"
        ],
        examTips: "Practice converting between empirical and molecular formulae. Remember that the molecular formula must be a whole-number multiple of the empirical formula."
      },
      {
        id: "1E1",
        title: "Molar Volume Calculations",
        content: "Calculations involving gases using the molar volume concept.",
        keyPoints: [
          "Molar volume: Volume occupied by 1 mole of any gas (24 dm³ at r.t.p.)",
          "r.t.p.: Room temperature and pressure (298K, 100kPa)",
          "Calculations: volume = amount × molar volume",
          "Useful for reactions involving gases: Amount(mol) = Volume(dm³)/24",
          "Link between masses and volumes in gas reactions"
        ],
        examTips: "Check if gas volumes are at r.t.p. - if not, you must use the ideal gas equation instead. Remember that molar volume is the same for all gases at the same temperature and pressure."
      },
      {
        id: "1E2",
        title: "Concentrations of Solutions",
        content: "Expressing and calculating solution concentrations.",
        keyPoints: [
          "Mass concentration (g·dm⁻³): mass of solute/volume of solution",
          "Molar concentration (mol·dm⁻³): amount of solute/volume of solution",
          "Interconverting: Concentration(mol·dm⁻³) = Concentration(g·dm⁻³)/Molar mass",
          "Solution calculations: m = c × V × M (mass = concentration × volume × molar mass)",
          "Used in titration and reaction calculations involving solutions"
        ],
        examTips: "Pay attention to units - ensure volumes are in dm³ (convert from cm³ by dividing by 1000). Make sure you're using the correct type of concentration."
      },
      {
        id: "1E3",
        title: "Concentrations in PPM",
        content: "Understanding parts per million for dilute solutions and trace substances.",
        keyPoints: [
          "ppm = (mass of solute / mass of solution) × 10⁶ for solutions",
          "ppm = (volume of gas / volume of air) × 10⁶ for gases",
          "1 ppm = 1 mg per kg = 1 μg per g",
          "Used for environmental pollutants, trace elements, water quality",
          "Example: CO₂ in atmosphere (~410 ppm)"
        ],
        examTips: "Remember that ppm is simply a different way of expressing concentration for very dilute solutions. Always check whether mass or volume ppm is required."
      }
    ]
  };

  const handleClick = (id: string) => {
    if (selectedNode === id) {
      setSelectedNode(null);
    } else {
      setSelectedNode(id);
    }
  };

  const getSection = (id: string | null): Section | undefined => {
    if (!id) return undefined; // Handle null id explicitly
    return mindMapData.sections.find(section => section.id === id);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-2">{mindMapData.title}</h1>
      <p className="text-gray-600 mb-6 text-center">{mindMapData.description}</p>

      <div className="flex flex-col w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* Main branches */}
          <div onClick={() => handleClick("1A")} className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
            <h2 className="font-bold">1A: Atoms, Elements and Molecules</h2>
            <p className="text-sm">Basic building blocks</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("1B1")} className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">1B: Equations and Reaction Types</h2>
              <p className="text-sm">Writing & balancing equations</p>
            </div>
            <div className="flex gap-2 pl-4">
              <div onClick={() => handleClick("1B2")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Acid Reactions</h3>
              </div>
              <div onClick={() => handleClick("1B3")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Displacement</h3>
              </div>
              <div onClick={() => handleClick("1B4")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Precipitation</h3>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("1C1")} className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">1C: Amount of Substance</h2>
              <p className="text-sm">Masses, moles and calculations</p>
            </div>
            <div className="flex flex-wrap gap-2 pl-4">
              <div onClick={() => handleClick("1C2")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Mole Calculations</h3>
              </div>
              <div onClick={() => handleClick("1C3")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Reacting Masses</h3>
              </div>
              <div onClick={() => handleClick("1C4")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Yield</h3>
              </div>
              <div onClick={() => handleClick("1C5")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Atom Economy</h3>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("1D1")} className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">1D: Formulae</h2>
              <p className="text-sm">Empirical & molecular formulae</p>
            </div>
            <div className="flex gap-2 pl-4">
              <div onClick={() => handleClick("1D2")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Molecular Formulae</h3>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("1E1")} className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">1E: Solutions & Gases</h2>
              <p className="text-sm">Concentrations and volumes</p>
            </div>
            <div className="flex gap-2 pl-4">
              <div onClick={() => handleClick("1E2")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Solution Concentrations</h3>
              </div>
              <div onClick={() => handleClick("1E3")} className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">PPM</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Display section details only if a node is selected */}
        {selectedNode && (() => {
          const sectionData = getSection(selectedNode);
          // Check if sectionData is found before rendering
          if (!sectionData) {
            return <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-300 w-full max-w-xl mx-auto"><p className='text-red-700'>Error: Section details not found for ID: {selectedNode}</p></div>;
          }
          // Render section details if data exists
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-300 w-full max-w-xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-pink-700">{sectionData.id}: {sectionData.title}</h2>
                <button onClick={() => setSelectedNode(null)} className="text-gray-500 hover:text-gray-700">
                  Close ×
                </button>
              </div>
              <p className="text-gray-700 mb-4">{sectionData.content}</p>
              
              <h3 className="font-bold text-gray-700 mb-2">Key Points to Remember:</h3>
              <ul className="list-disc pl-6 mb-4">
                {sectionData.keyPoints.map((point, index) => (
                  <li key={index} className="mb-1 text-gray-600">{point}</li>
                ))}
              </ul>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <h3 className="font-bold text-yellow-700 mb-1">Exam Tips:</h3>
                <p className="text-yellow-800">{sectionData.examTips}</p>
              </div>
            </div>
          );
        })()}

        {!selectedNode && (
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-300 w-full max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-pink-700 mb-4">How to Use This Mind Map</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Click on any node to see detailed information about that topic</li>
              <li className="mb-2">The map follows the structure of Chapter 1 in your textbook</li>
              <li className="mb-2">Each section contains key points and exam tips relevant for AS level</li>
              <li className="mb-2">Use this as a quick reference when studying or before exams</li>
            </ul>
            <p className="text-gray-600">Start by clicking on any topic that you want to review!</p>
          </div>
        )}
        
        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-5xl text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Essential Formulas for Exam Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Mole Calculations:</p>
                <p className="font-mono">n = m/M</p>
                <p className="text-xs text-gray-600">where n = amount (mol), m = mass (g), M = molar mass (g/mol)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Concentration:</p>
                <p className="font-mono">c = n/V</p>
                <p className="text-xs text-gray-600">where c = concentration (mol/dm³), n = amount (mol), V = volume (dm³)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Percentage Yield:</p>
                <p className="font-mono">% yield = (actual/theoretical) × 100</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Atom Economy:</p>
                <p className="font-mono">% atom economy = (M₁/(M₁+M₂+...)) × 100</p>
                <p className="text-xs text-gray-600">M₁ = molar mass of desired product, M₂+... = other products</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Avogadro's Constant:</p>
                <p className="font-mono">L = 6.02 × 10²³ mol⁻¹</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-pink-600">Ideal Gas Equation:</p>
                <p className="font-mono">pV = nRT</p>
                <p className="text-xs text-gray-600">p = pressure (Pa), V = volume (m³), R = 8.31 J·mol⁻¹·K⁻¹</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMap;
