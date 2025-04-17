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
const ChapterTenMindMap: React.FC = () => {
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
    name: "Organic Chemistry: Halogenoalkanes, Alcohols and Spectra",
    id: "organic-chemistry",
    summary: "This topic covers halogenoalkanes and alcohols, two important homologous series in organic chemistry. It also includes mass spectrometry and infrared spectroscopy, which are useful techniques for determining molecular structures.",
    children: [
      {
        name: "General Principles",
        id: "general-principles",
        summary: "Organic chemistry involves various types of reactions, including addition, elimination, substitution, oxidation, reduction, hydrolysis, and polymerization. Understanding reaction mechanisms is crucial for predicting and explaining organic reactions.",
        children: [
          {
            name: "Reaction Types",
            id: "reaction-types",
            summary: "There are seven major types of reactions in organic chemistry:\n\n1. Addition reactions - Two reactants combine to form a single product (A + B → C)\n2. Elimination reactions - Two atoms or groups are removed from neighboring carbon atoms, forming a double bond\n3. Substitution reactions - A group or atom is replaced by another (A + B → C + D)\n4. Oxidation reactions - Involves loss of hydrogen or gain of oxygen\n5. Reduction reactions - Involves gain of hydrogen or loss of oxygen\n6. Hydrolysis reactions - Reaction with water where OH replaces another group\n7. Polymerization reactions - Many small molecules combine to form a very large molecule",
            children: [
              {
                name: "Addition Reactions",
                id: "addition-reactions",
                summary: "In addition reactions, two reactant species combine to form a single product. A general equation is A + B → C. One example is the reaction between ethene and bromine: C₂H₄ + Br₂ → C₂H₄Br₂."
              },
              {
                name: "Elimination Reactions",
                id: "elimination-reactions",
                summary: "In elimination reactions, two atoms or groups are removed from neighboring carbon atoms, resulting in the formation of a double bond. For example, the reaction between bromoethane and ethanolic potassium hydroxide: CH₃CH₂Br + KOH → CH₂=CH₂ + KBr + H₂O."
              },
              {
                name: "Substitution Reactions",
                id: "substitution-reactions",
                summary: "In substitution reactions, one atom or group is replaced by another. A general equation is A + B → C + D. For example, the reaction between bromoethane and hydroxide ion: C₂H₅Br + OH⁻ → C₂H₅OH + Br⁻. This is not a redox reaction unlike displacement reactions."
              },
              {
                name: "Oxidation Reactions",
                id: "oxidation-reactions",
                summary: "In oxidation reactions, an organic compound loses hydrogen or gains oxygen. For example, the oxidation of ethanol by potassium dichromate(VI) and sulfuric acid: C₂H₅OH + [O] → CH₃CHO + H₂O."
              },
              {
                name: "Reduction Reactions",
                id: "reduction-reactions",
                summary: "In reduction reactions, an organic compound gains hydrogen or loses oxygen. For example, the reduction of ethene to ethane: C₂H₄ + H₂ → C₂H₆. This is also an example of an addition reaction."
              },
              {
                name: "Hydrolysis Reactions",
                id: "hydrolysis-reactions",
                summary: "In hydrolysis reactions, an organic compound reacts with water. The OH group from water replaces an atom or group in the organic compound. A general equation is: RX + H₂O → ROH + HX. This is actually a type of substitution reaction."
              },
              {
                name: "Polymerization Reactions",
                id: "polymerization-reactions",
                summary: "In addition polymerization, many molecules of a monomer react together to form one very large molecule. For example, the polymerization of ethene to form polyethene."
              }
            ]
          },
          {
            name: "Reaction Mechanisms",
            id: "reaction-mechanisms",
            summary: "A reaction mechanism explains the actual changes that occur during a reaction, especially in the bonding between atoms. It is a sequence of steps showing how a reaction takes place. There are different types of mechanisms:\n\n1. Free radical substitution in alkanes\n2. Electrophilic addition to alkenes\n3. Nucleophilic substitution in halogenoalkanes",
            children: [
              {
                name: "Bond Breaking",
                id: "bond-breaking",
                summary: "There are two types of bond breaking:\n\n1. Homolytic fission - The covalent bond breaks with each atom keeping one electron, forming free radicals\n2. Heterolytic fission - The covalent bond breaks with one atom keeping both electrons, forming ions"
              },
              {
                name: "Reactant Species",
                id: "reactant-species",
                summary: "Different mechanisms involve different attacking species:\n\n1. Free radicals in free radical substitution\n2. Electrophiles in electrophilic addition\n3. Nucleophiles in nucleophilic substitution"
              },
              {
                name: "Bond Polarity Role",
                id: "bond-polarity-role",
                summary: "Bond polarity influences the type of mechanism:\n\n1. Non-polar or slightly polar bonds favor homolytic fission\n2. Polar bonds favor heterolytic fission"
              }
            ]
          }
        ]
      },
      {
        name: "Halogenoalkanes",
        id: "halogenoalkanes",
        summary: "Halogenoalkanes are compounds with the general formula CₙH₂ₙ₊₁X, where X is a halogen (usually Cl, Br, or I). They are formed by replacing a hydrogen atom in a hydrocarbon with a halogen atom.",
        children: [
          {
            name: "Nomenclature and Classification",
            id: "halogenoalkanes-nomenclature",
            summary: "Halogenoalkanes are named by identifying the parent alkane chain and adding the prefix for the halogen (fluoro-, chloro-, bromo-, iodo-) with a number indicating its position. They are classified as primary, secondary, or tertiary based on the carbon atom bonded to the halogen.",
            children: [
              {
                name: "Naming Halogenoalkanes",
                id: "naming-halogenoalkanes",
                summary: "To name halogenoalkanes:\n1. Identify the parent alkane chain\n2. Add the prefix for the halogen (fluoro-, chloro-, bromo-, iodo-)\n3. Use numbers to indicate positions of substituents\n4. For multiple halogens, list them in alphabetical order\n\nExamples:\n- CH₂Cl-CHCl-CH₃: 1,2-dichloropropane\n- CH₂Br-CH₂-CH₂Cl: 1-bromo-3-chloropropane\n- CCl₄: tetrachloromethane\n- CH₃-CHF-CH₂-CH₃: 2-fluorobutane"
              },
              {
                name: "Primary, Secondary, Tertiary",
                id: "halogenoalkanes-classification",
                summary: "Halogenoalkanes are classified based on the number of alkyl groups attached to the carbon bonded to the halogen:\n\n- Primary (1°): One alkyl group attached (RCH₂X)\n- Secondary (2°): Two alkyl groups attached (R₂CHX)\n- Tertiary (3°): Three alkyl groups attached (R₃CX)\n\nExamples:\n- CH₃-CH₂-CH₂F: Primary halogenoalkane\n- CH₃-CHBr-CH₃: Secondary halogenoalkane\n- (CH₃)₂CCl-CH₂-CH₃: Tertiary halogenoalkane"
              }
            ]
          },
          {
            name: "Reactivity",
            id: "halogenoalkanes-reactivity",
            summary: "The C-X bond in halogenoalkanes is polar due to the electronegativity difference between carbon and the halogen. This polarity makes the carbon slightly positive (δ+) and attracts nucleophiles, which are species that donate electron pairs to electron-deficient atoms.",
            children: [
              {
                name: "Bond Polarity",
                id: "bond-polarity",
                summary: "The carbon-halogen bond is polar because halogens are more electronegative than carbon. This creates a partial positive charge (δ+) on the carbon atom and a partial negative charge (δ-) on the halogen atom. The polarity decreases down Group 7 as electronegativity decreases from fluorine to iodine."
              },
              {
                name: "Nucleophiles",
                id: "nucleophiles",
                summary: "Nucleophiles are species that are attracted to slightly positive or electron-deficient parts of a molecule. They can be negative ions or molecules with a slightly negative atom. Nucleophiles use a lone pair of electrons when attacking another species."
              },
              {
                name: "Hydrolysis",
                id: "hydrolysis",
                summary: "When halogenoalkanes react with water, the oxygen atom in water (with its partial negative charge) is attracted to the partially positive carbon atom in the halogenoalkane. The reaction is: RX + H₂O → ROH + HX. This produces an alcohol and a hydrogen halide."
              }
            ]
          },
          {
            name: "Factors Affecting Rate",
            id: "factors-affecting-rate",
            summary: "The rate of halogenoalkane reactions is affected by several factors including the nature of the halogen (C-I bonds react faster than C-Br and C-Cl bonds), and the structure of the halogenoalkane (tertiary > secondary > primary).",
            children: [
              {
                name: "Practical Rate Comparison",
                id: "practical-rate-comparison",
                summary: "The rate of hydrolysis reactions can be compared using silver nitrate solution. When halide ions are formed, they react with silver ions to form a precipitate: Ag⁺ + X⁻ → AgX. The speed of precipitate formation indicates the rate of the hydrolysis reaction."
              },
              {
                name: "Effect of Different Halogens",
                id: "effect-of-different-halogens",
                summary: "Under the same conditions, the rate of hydrolysis decreases in the order: iodoalkanes > bromoalkanes > chloroalkanes > fluoroalkanes.\n\nThis is due to bond strength: C-I bonds (228 kJ mol⁻¹) are weaker than C-Br bonds (290 kJ mol⁻¹), which are weaker than C-Cl bonds (346 kJ mol⁻¹)."
              },
              {
                name: "Effect of Structure",
                id: "effect-of-structure",
                summary: "Under the same conditions, the rate of hydrolysis decreases in the order: tertiary > secondary > primary halogenoalkanes.\n\nFor example: 2-bromo-2-methylpropane (tertiary) reacts faster than 2-bromobutane (secondary), which reacts faster than 1-bromobutane (primary)."
              }
            ]
          },
          {
            name: "Reactions and Mechanisms",
            id: "halogenoalkane-reactions",
            summary: "Halogenoalkanes undergo various reactions including nucleophilic substitution and elimination. The mechanism depends on the reactants and conditions.",
            children: [
              {
                name: "Substitution Reactions",
                id: "halogenoalkane-substitution",
                summary: "Halogenoalkanes undergo substitution reactions with various nucleophiles:\n\n1. Hydrolysis with water: RX + H₂O → ROH + HX\n2. With aqueous hydroxide: RX + OH⁻ → ROH + X⁻\n3. With cyanide: RX + CN⁻ → RCN + X⁻\n4. With ammonia: RX + NH₃ → RNH₂ + HX"
              },
              {
                name: "Nucleophilic Substitution Mechanism",
                id: "nucleophilic-substitution-mechanism",
                summary: "In nucleophilic substitution, a nucleophile attacks the electron-deficient carbon bonded to the halogen, forming a new bond while the C-X bond breaks. For example, in the reaction between bromoethane and hydroxide ions:\n\nBrCH₂CH₃ + OH⁻ → CH₃CH₂OH + Br⁻\n\nThe OH⁻ donates a lone pair to the carbon atom, forming a C-O bond as the C-Br bond breaks."
              },
              {
                name: "Elimination Reactions",
                id: "elimination-reactions-halogenoalkanes",
                summary: "When halogenoalkanes are heated with ethanolic potassium hydroxide, elimination occurs instead of substitution. The hydroxide ion acts as a base and removes a hydrogen from an adjacent carbon atom, while the halogen leaves, forming an alkene:\n\nCH₃-CHBr-CH₃ + KOH → CH₂=CH-CH₃ + H₂O + KBr"
              }
            ]
          }
        ]
      },
      {
        name: "Alcohols",
        id: "alcohols",
        summary: "Alcohols are compounds with the general formula CₙH₂ₙ₊₁OH. They contain a hydroxyl (-OH) group attached to a carbon atom.",
        children: [
          {
            name: "Nomenclature and Classification",
            id: "alcohols-nomenclature",
            summary: "Alcohols are named as derivatives of alkanes with the suffix -ol and a number indicating the position of the OH group. They are classified as primary, secondary, or tertiary based on the carbon atom to which the OH group is attached.",
            children: [
              {
                name: "Naming Alcohols",
                id: "naming-alcohols",
                summary: "To name alcohols:\n1. Identify the parent alkane chain\n2. Replace the -e ending with -ol\n3. Use a number to indicate the position of the OH group\n\nExamples:\n- CH₃-CH(OH)-CH₃: propan-2-ol\n- CH₃-CH₂-CH₂-CH₂OH: butan-1-ol\n- (CH₃)₂C-CH₂OH: 2,2-dimethylpropan-1-ol\n- CH₂(OH)-CH(OH)-CH₂OH: propane-1,2,3-triol (glycerol)"
              },
              {
                name: "Primary, Secondary, Tertiary",
                id: "alcohols-classification",
                summary: "Alcohols are classified based on the number of alkyl groups attached to the carbon bonded to the hydroxyl group:\n\n- Primary (1°): One alkyl group attached (RCH₂OH)\n- Secondary (2°): Two alkyl groups attached (R₂CHOH)\n- Tertiary (3°): Three alkyl groups attached (R₃COH)\n\nExamples:\n- CH₃-CH₂-CH₂OH: Primary alcohol\n- CH₃-CH(OH)-CH₃: Secondary alcohol\n- (CH₃)₂C(OH)-CH₂-CH₃: Tertiary alcohol"
              }
            ]
          },
          {
            name: "Reactions of Alcohols",
            id: "alcohol-reactions",
            summary: "Alcohols undergo various reactions including combustion, halogenation, and dehydration. The products depend on the structure of the alcohol and the reaction conditions.",
            children: [
              {
                name: "Combustion",
                id: "combustion",
                summary: "Alcohols burn in air to produce carbon dioxide and water. The equation for the complete combustion of ethanol is:\nC₂H₅OH + 3O₂ → 2CO₂ + 3H₂O"
              },
              {
                name: "Halogenation",
                id: "halogenation",
                summary: "Alcohols can be converted to halogenoalkanes by replacing the hydroxyl group with a halogen atom. Different methods are used for different halogens:\n\n- For chlorination: React with PCl₅ (e.g., CH₃CH₂CH₂OH + PCl₅ → CH₃CH₂CH₂Cl + POCl₃ + HCl)\n- For tertiary alcohols with HCl: (CH₃)₃COH + HCl → (CH₃)₃CCl + H₂O\n- For bromination: React with KBr and H₂SO₄ (e.g., CH₃CH₂CH₂CH₂OH + HBr → CH₃CH₂CH₂CH₂Br + H₂O)\n- For iodination: React with red phosphorus and iodine (e.g., 3C₂H₅OH + PI₃ → 3C₂H₅I + H₃PO₃)"
              },
              {
                name: "Dehydration",
                id: "dehydration",
                summary: "Heating alcohols with concentrated phosphoric acid causes dehydration, removing water and forming an alkene. For example, with butan-2-ol:\nCH₃CH(OH)CH₂CH₃ → CH₃CH=CHCH₃ + H₂O (but-2-ene)\nor\nCH₃CH(OH)CH₂CH₃ → CH₂=CHCH₂CH₃ + H₂O (but-1-ene)"
              }
            ]
          },
          {
            name: "Oxidation of Alcohols",
            id: "oxidation-of-alcohols",
            summary: "Primary alcohols can be oxidized to aldehydes and then to carboxylic acids. Secondary alcohols can be oxidized to ketones. Tertiary alcohols cannot be oxidized in this way. The typical oxidizing agent is potassium dichromate(VI) in dilute sulfuric acid.",
            children: [
              {
                name: "Oxidation Products",
                id: "oxidation-products",
                summary: "The products of alcohol oxidation depend on the alcohol type:\n\n- Primary alcohols (RCH₂OH) → aldehydes (RCHO) → carboxylic acids (RCOOH)\n- Secondary alcohols (R₂CHOH) → ketones (R₂CO)\n- Tertiary alcohols (R₃COH) → no oxidation product"
              },
              {
                name: "Oxidation Reactions",
                id: "oxidation-reactions-alcohols",
                summary: "Examples of oxidation reactions:\n\n- Propan-1-ol to propanal: CH₃CH₂CH₂OH + [O] → CH₃CH₂CHO + H₂O\n- Propanal to propanoic acid: CH₃CH₂CHO + [O] → CH₃CH₂COOH\n- Propan-2-ol to propanone: CH₃CH(OH)CH₃ + [O] → CH₃COCH₃ + H₂O"
              },
              {
                name: "Practical Techniques",
                id: "practical-techniques",
                summary: "Different practical techniques are used to obtain different oxidation products:\n\n- Heating under reflux: Used for complete oxidation to ketones or carboxylic acids\n- Distillation with addition: Used for partial oxidation to aldehydes (which immediately distill off before further oxidation)"
              }
            ]
          },
          {
            name: "Purification Techniques",
            id: "purification-techniques",
            summary: "Various techniques are used to purify organic compounds, including distillation, solvent extraction, and drying. The choice of technique depends on the properties of the compound and the impurities present.",
            children: [
              {
                name: "Simple Distillation",
                id: "simple-distillation",
                summary: "Simple distillation is used to separate liquids with very different boiling points. The liquid with the lower boiling point evaporates first and is collected separately. This is suitable for liquids with boiling points differing by at least 25°C."
              },
              {
                name: "Fractional Distillation",
                id: "fractional-distillation",
                summary: "Fractional distillation uses a fractionating column filled with glass beads or broken glass. This provides surfaces for vapor to condense and re-evaporate, effectively creating multiple distillations as vapor passes up the column. This technique provides better separation for liquids with similar boiling points."
              },
              {
                name: "Solvent Extraction",
                id: "solvent-extraction",
                summary: "Solvent extraction involves using an immiscible solvent to extract the desired product from a reaction mixture. The product should be more soluble in the added solvent than in the original mixture. After extraction, the solvent with the dissolved product can be separated by distillation."
              },
              {
                name: "Drying",
                id: "drying",
                summary: "Many organic liquids need to be dried using a drying agent to remove water. Common drying agents include anhydrous calcium sulfate, magnesium sulfate, and sodium sulfate. These form hydrated salts by absorbing water. The drying agent is added to the liquid, left for some time, then removed by filtration or decantation."
              },
              {
                name: "Testing for Purity",
                id: "testing-for-purity",
                summary: "For liquids, purity can be tested by measuring the boiling point. Pure substances have specific boiling points, while impurities typically raise the boiling point. However, this test has limitations as different compounds may have the same boiling point, and accurate measurement can be challenging."
              }
            ]
          }
        ]
      },
      {
        name: "Instrumental Analysis",
        id: "instrumental-analysis",
        summary: "Mass spectrometry and infrared spectroscopy are powerful analytical techniques used to determine the structures of organic compounds.",
        children: [
          {
            name: "Mass Spectrometry",
            id: "mass-spectrometry",
            summary: "Mass spectrometry is a technique used to determine the relative molecular mass and structural features of a compound. It works by ionizing molecules, which may then fragment. The resulting ions are sorted by their mass-to-charge ratio (m/z).",
            children: [
              {
                name: "Molecular Ion",
                id: "molecular-ion",
                summary: "The molecular ion is formed when the molecule loses an electron in the mass spectrometer. For example, with butane: C₄H₁₀ + e⁻ → C₄H₁₀⁺ + 2e⁻. The m/z value of the molecular ion peak indicates the relative molecular mass of the compound."
              },
              {
                name: "Fragmentation",
                id: "fragmentation",
                summary: "Fragmentation occurs when the molecular ion breaks into smaller pieces. For example, the ethane molecular ion can fragment: (CH₃-CH₃)⁺ → CH₃⁺ + CH₃. The m/z values of fragment ions provide information about the structure of the molecule."
              },
              {
                name: "Interpreting Mass Spectra",
                id: "interpreting-mass-spectra",
                summary: "To interpret a mass spectrum:\n1. Identify the molecular ion peak (highest m/z value)\n2. Look for characteristic fragment ions\n3. Compare with known spectra or use tables of common fragments\n\nCommon fragments include m/z 15 (CH₃⁺), 29 (CH₃CH₂⁺), 43 (CH₃CH₂CH₂⁺), etc."
              },
              {
                name: "Structure Deduction",
                id: "structure-deduction-ms",
                summary: "Mass spectra can help deduce structures of unknown compounds. For example, two compounds with formula C₃H₆O might be propanal (with a peak at m/z 29 from CHO⁺) and propanone (with a peak at m/z 43 from CH₃CO⁺)."
              }
            ]
          },
          {
            name: "Infrared Spectroscopy",
            id: "infrared-spectroscopy",
            summary: "Infrared spectroscopy is used to identify functional groups in organic compounds. It works by measuring the absorption of infrared radiation by molecules, which causes bonds to vibrate (stretch or bend).",
            children: [
              {
                name: "IR Absorption",
                id: "ir-absorption",
                summary: "When molecules absorb infrared radiation, bonds vibrate (stretch or bend). The amount of energy absorbed depends on:\n- The length of the bond\n- The strength of the bond\n- The mass of each atom involved in the bond\n\nPolar bonds absorb infrared radiation, while non-polar bonds (such as H₂ or Cl₂) do not."
              },
              {
                name: "IR Spectra",
                id: "ir-spectra",
                summary: "An IR spectrum shows:\n- Transmittance (%) on the vertical axis (100% means no absorption)\n- Wavenumber (cm⁻¹) on the horizontal axis (typically 4000-500 cm⁻¹)\n\nAbsorptions appear as dips in the spectrum at specific wavenumbers. The position of absorptions indicates which bonds are present."
              },
              {
                name: "Characteristic Absorptions",
                id: "characteristic-absorptions",
                summary: "Different functional groups absorb at characteristic wavenumbers:\n- O-H (alcohol): 3750-3200 cm⁻¹\n- O-H (carboxylic acid): 3300-2500 cm⁻¹\n- C-H (alkane): 2962-2853 cm⁻¹\n- C=O (ketone): 1720-1700 cm⁻¹\n- C=O (aldehyde): 1740-1720 cm⁻¹\n- C=C (alkene): 1669-1645 cm⁻¹"
              },
              {
                name: "Structure Deduction",
                id: "structure-deduction-ir",
                summary: "IR spectra can help deduce structures by identifying functional groups. For example, a compound with formula C₃H₆O₂ showing absorptions at 3000 cm⁻¹ (broad) and 1700 cm⁻¹ likely contains a carboxylic acid group (COOH), suggesting it might be propanoic acid (CH₃CH₂COOH)."
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
        <h1 className="text-xl font-semibold">Topic 10: Organic Chemistry: Halogenoalkanes, Alcohols and Spectra</h1>
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
export default ChapterTenMindMap;