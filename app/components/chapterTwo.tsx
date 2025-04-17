import React, { useState } from 'react';

// Define the Section type (assuming structure is similar to Chapter One)
type Section = {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  examTips: string;
};

const MindMap: React.FC = () => {
  // Add type for state
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const mindMapData = {
    title: "Topic 2: Atomic Structure and the Periodic Table",
    description: "Understanding the building blocks of matter and their arrangement in the Periodic Table",
    sections: [
      {
        id: "2A1",
        title: "Structure of the Atom and Isotopes",
        content: "Understanding the subatomic particles and how they form atoms of different elements.",
        keyPoints: [
          "Atoms consist of protons, neutrons (in the nucleus) and electrons (in energy levels/shells)",
          "Protons have a relative mass of 1 and charge of +1",
          "Neutrons have a relative mass of 1 and no charge",
          "Electrons have negligible mass (1/1840) and charge of -1",
          "Atomic number (Z) = number of protons = number of electrons in a neutral atom",
          "Mass number (A) = number of protons + number of neutrons",
          "Isotopes are atoms with the same atomic number but different mass numbers",
          "Isotopes have the same chemical properties but different physical properties"
        ],
        examTips: "Questions often involve calculating numbers of subatomic particles in atoms or ions. Remember that in a positive ion, the number of electrons is less than the number of protons; in a negative ion, it's more."
      },
      {
        id: "2A2",
        title: "Mass Spectrometry and Relative Masses",
        content: "How we determine the masses of atoms, isotopes, and molecules using mass spectrometry.",
        keyPoints: [
          "Mass spectrometry measures the mass-to-charge (m/z) ratio of ions",
          "Process: vaporization → ionization → acceleration → deflection → detection",
          "Relative isotopic mass is the mass of an isotope compared to 1/12 the mass of a carbon-12 atom",
          "Relative atomic mass (Ar) is the weighted average of the isotopic masses in a naturally occurring sample",
          "Calculation: Ar = Σ(isotopic mass × fractional abundance)",
          "For diatomic molecules (e.g., Cl₂), the mass spectrum shows peaks for all possible combinations of isotopes",
          "Molecular ion peak (M⁺) corresponds to the intact molecular ion, which helps identify molecules"
        ],
        examTips: "Practice calculating relative atomic mass from isotopic abundance data. For mass spectra of diatomic molecules like Cl₂, remember that the pattern of peaks follows probability rules based on the abundance of each isotope."
      },
      {
        id: "2A3",
        title: "Atomic Orbitals and Electronic Configurations",
        content: "How electrons are arranged in atoms and how this determines their chemical behavior.",
        keyPoints: [
          "Quantum shells are main energy levels (n = 1, 2, 3, etc.)",
          "Sub-shells (s, p, d, f) have different shapes and energies within each shell",
          "s orbitals are spherical, p orbitals are dumbbell-shaped",
          "Maximum electrons: s orbital (2), p subshell (6), d subshell (10), f subshell (14)",
          "Electrons fill orbitals in order of increasing energy (Aufbau principle)",
          "Electrons occupy orbitals singly before pairing (Hund's rule)",
          "Two electrons in the same orbital must have opposite spins (Pauli Exclusion Principle)",
          "Electronic configuration can be written using: 1s², 2s², 2p⁶, etc. or using noble gas notation [Ne]3s²3p³"
        ],
        examTips: "Pay attention to exceptions in the d-block (e.g., Cr: [Ar]3d⁵4s¹ instead of [Ar]3d⁴4s²). Know how to represent electronic configurations using box diagrams to show unpaired electrons."
      },
      {
        id: "2A4",
        title: "Ionisation Energies",
        content: "The energy required to remove electrons from atoms and ions, and what this tells us about atomic structure.",
        keyPoints: [
          "First ionisation energy: energy to remove one electron from each atom in one mole of gaseous atoms",
          "Second and subsequent ionisation energies refer to removing additional electrons",
          "Ionisation energies always increase as more electrons are removed",
          "Large jumps in successive ionisation energies indicate the start of a new shell",
          "Factors affecting ionisation energy: nuclear charge, distance from nucleus, electron shielding, electron-electron repulsion",
          "Across a period: generally increases due to increasing nuclear charge",
          "Down a group: decreases due to increased shielding and distance from nucleus",
          "Anomalies exist between Groups 2-3 and 5-6 due to electron configuration"
        ],
        examTips: "Be able to explain trends in ionisation energy both across periods and down groups. Know the reasons for anomalies (e.g., Be→B and N→O) in terms of electron configurations and shielding effects."
      },
      {
        id: "2B1",
        title: "The Periodic Table",
        content: "How elements are arranged in the Periodic Table and what this tells us about their properties.",
        keyPoints: [
          "Elements are arranged by increasing atomic number",
          "Vertical columns are groups (elements with similar chemical properties)",
          "Horizontal rows are periods (elements with the same number of electron shells)",
          "s-block: Groups 1-2 (alkali metals, alkaline earth metals)",
          "p-block: Groups 3-8/13-18 (B to He/Ne/Ar/etc.)",
          "d-block: transition metals",
          "f-block: lanthanides and actinides",
          "Group number equals number of outer shell electrons (main groups)"
        ],
        examTips: "Remember that similar electronic configurations lead to similar chemical properties. Be able to predict the block an element belongs to from its position in the Periodic Table or its electronic configuration."
      },
      {
        id: "2B2",
        title: "Periodic Properties",
        content: "Patterns and trends in physical and chemical properties across the Periodic Table.",
        keyPoints: [
          "Atomic radius: decreases across a period, increases down a group",
          "Ionisation energy: generally increases across a period, decreases down a group",
          "Electron affinity: generally becomes more negative across a period",
          "Electronegativity: increases across a period, decreases down a group",
          "Melting/boiling points: vary based on structure and bonding",
          "Metallic character: decreases across a period, increases down a group",
          "Reactivity of metals: increases down Group 1, decreases down Group 2",
          "Reactivity of non-metals: decreases down Groups 6 and 7"
        ],
        examTips: "Be able to explain periodic trends in terms of atomic structure and electron configurations. For physical properties like melting points, consider the type of structure and bonding (metallic, ionic, covalent-molecular, covalent-giant)."
      },
      {
        id: "TB1",
        title: "Elemental Fingerprints",
        content: "How spectroscopy allows us to identify elements in distant stars and galaxies.",
        keyPoints: [
          "Each element produces a unique set of spectral lines when excited",
          "Emission spectrum: bright lines at specific wavelengths emitted by excited atoms",
          "Absorption spectrum: dark lines where light has been absorbed by atoms",
          "Spectral lines are like 'fingerprints' that identify elements",
          "This technique allows astronomers to determine the composition of stars",
          "Red shift in spectral lines provides evidence for an expanding universe",
          "Fraunhofer lines in the solar spectrum were the first observed absorption lines"
        ],
        examTips: "Understand the difference between emission and absorption spectra, and how they're produced. Know how spectroscopy can be used to identify elements in samples and distant celestial objects."
      }
    ]
  };

  // Add type for function parameter
  const handleClick = (id: string) => {
    if (selectedNode === id) {
      setSelectedNode(null);
    } else {
      setSelectedNode(id);
    }
  };

  // Add types for function parameter and return value
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
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("2A1")} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">2A: Atomic Structure</h2>
              <p className="text-sm">Atoms, electrons and nuclei</p>
            </div>
            <div className="flex flex-wrap gap-2 pl-4">
              <div onClick={() => handleClick("2A2")} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Mass Spectrometry</h3>
              </div>
              <div onClick={() => handleClick("2A3")} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Orbitals & Configurations</h3>
              </div>
              <div onClick={() => handleClick("2A4")} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Ionisation Energies</h3>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("2B1")} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">2B: The Periodic Table</h2>
              <p className="text-sm">Organization and patterns</p>
            </div>
            <div className="flex gap-2 pl-4">
              <div onClick={() => handleClick("2B2")} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex-1 shadow-md transition-all text-sm">
                <h3 className="font-bold">Periodic Properties</h3>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div onClick={() => handleClick("TB1")} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg w-60 shadow-md transition-all">
              <h2 className="font-bold">Thinking Bigger</h2>
              <p className="text-sm">Applications & extensions</p>
            </div>
          </div>
        </div>

        {/* Content display area */}
        {selectedNode && (() => {
          const sectionData = getSection(selectedNode);
          // Check if sectionData exists before rendering details
          if (!sectionData) {
            return <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-300 w-full max-w-xl mx-auto"><p className='text-red-700'>Error: Section details not found for ID: {selectedNode}</p></div>;
          }
          // Render details using sectionData
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-300 w-full max-w-5xl mx-auto">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold text-blue-700">{sectionData.id}: {sectionData.title}</h2>
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
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-300 w-full max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-blue-700 mb-4">How to Use This Mind Map</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Click on any node to see detailed information about that topic</li>
              <li className="mb-2">The map follows the structure of Topic 2 in your textbook</li>
              <li className="mb-2">Each section contains key points and exam tips relevant for AS level</li>
              <li className="mb-2">Use this as a quick reference when studying or before exams</li>
            </ul>
            <p className="text-gray-600">Start by clicking on any topic that you want to review!</p>
          </div>
        )}
        
        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-5xl text-center">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Essential Facts for Exam Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Electron Arrangements:</p>
                <p className="text-xs text-gray-600">1s: 2 e⁻, 2s: 2 e⁻, 2p: 6 e⁻</p>
                <p className="text-xs text-gray-600">3s: 2 e⁻, 3p: 6 e⁻, 3d: 10 e⁻</p>
                <p className="text-xs text-gray-600">4s: 2 e⁻, 4p: 6 e⁻, 4d: 10 e⁻, 4f: 14 e⁻</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Group Properties:</p>
                <p className="text-xs text-gray-600">Group 1: 1 valence e⁻, ns¹, highly reactive metals</p>
                <p className="text-xs text-gray-600">Group 2: 2 valence e⁻, ns², less reactive than Group 1</p>
                <p className="text-xs text-gray-600">Group 7: 7 valence e⁻, ns²np⁵, reactive non-metals</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Ionisation Energy Trends:</p>
                <p className="text-xs text-gray-600">↑ across a period (general trend)</p>
                <p className="text-xs text-gray-600">↓ down a group</p>
                <p className="text-xs text-gray-600">Exceptions: Be→B, N→O (orbital filling patterns)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Relative Mass Calculations:</p>
                <p className="text-xs text-gray-600">Ar = Σ(isotopic mass × % abundance ÷ 100)</p>
                <p className="text-xs text-gray-600">Mr = sum of Ar values for all atoms in formula</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Mass Spectrometry Peaks:</p>
                <p className="text-xs text-gray-600">M⁺: molecular ion (highest m/z for parent molecule)</p>
                <p className="text-xs text-gray-600">M+1: isotope peak (e.g., molecules containing ¹³C)</p>
                <p className="text-xs text-gray-600">Fragment ions: lower m/z values (structural information)</p>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <p className="font-bold text-blue-600">Quantum Rules:</p>
                <p className="text-xs text-gray-600">Aufbau: electrons fill lowest energy orbitals first</p>
                <p className="text-xs text-gray-600">Hund: electrons occupy orbitals singly before pairing</p>
                <p className="text-xs text-gray-600">Pauli: max 2 electrons per orbital, opposite spins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMap;
