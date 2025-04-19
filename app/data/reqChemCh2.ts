import { MindMapNode } from '../types/MindMapNode';

// -----------------------------------------------------------------------------
// Topic 2 – Atomic Structure & the Periodic Table (FULL exam‑spec coverage)
// Source: OCR‑ed text “Topic 2 Atomic Structure and the Periodic Table”
// Every child.name is the exact question to test; child.summary is the mark‑scheme
// level answer a student must give in a British‑system AS examination.
// -----------------------------------------------------------------------------

const data: MindMapNode = {
  name: 'Atomic Structure & the Periodic Table',
  id: 'topic2_rev_questions',
  summary:
    'Complete exam‑style Q&A map for OCR/Edexcel Topic 2. Follow the order of the published learning‑objective list (2.1 → 2.18) so none can be missed.',
  children: [
    // ────────────────────── CORE DEFINITIONS ──────────────────────
    {
      name: 'Describe the structure of an atom in terms of electrons, protons and neutrons.',
      id: 't2-01',
      summary:
        'Atoms consist of a tiny nucleus containing protons (charge +1, relative mass 1) and neutrons (charge 0, relative mass 1). The nucleus occupies ~1 × 10⁻¹⁵ m but holds ≈99.9 % of the mass. Electrons (charge −1, mass ≈ 1⁄1840) move in quantised energy levels (quantum shells/orbitals) around the nucleus at ~1 × 10⁻¹⁰ m. Overall the atom is electrically neutral because number of protons = number of electrons. citeturn1file0',
    },
    {
      name: 'State the relative masses and charges of protons, neutrons and electrons.',
      id: 't2-02',
      summary:
        'Proton → mass 1, charge +1; Neutron → mass 1, charge 0; Electron → mass ≈ 1⁄1840 (0.000 55), charge –1. citeturn1file0',
    },
    {
      name: 'Define atomic (proton) number and mass number.',
      id: 't2-03',
      summary:
        'Atomic/proton number Z = number of protons in the nucleus; Mass number A = total number of protons + neutrons. citeturn1file0',
    },
    {
      name: 'Use Z and A to determine numbers of sub‑atomic particles in atoms and ions.',
      id: 't2-04',
      summary:
        'For any nuclide AᴢX: protons = Z; neutrons = A – Z; electrons = Z for neutral atoms, or Z ± charge for ions (e.g. Fe³⁺ has Z = 26 so e⁻ = 26 – 3 = 23). citeturn1file0',
    },
    {
      name: 'Define the term “isotope”.',
      id: 't2-05',
      summary:
        'Isotopes are atoms of the same element (same Z) that have different mass numbers because they contain different numbers of neutrons; identical electronic configurations ↔ identical chemical properties, but physical properties (density, b.p.) differ. citeturn1file0',
    },

    // ────────────────────── MASS SPECTROMETRY & RELATIVE MASSES ──────────────────────
    {
      name: 'Outline the stages in a time‑of‑flight mass spectrometer and explain how the resulting spectra are used (i) to deduce isotopic composition, (ii) to calculate relative atomic mass Aᵣ, (iii) to obtain relative molecular mass Mᵣ, (iv) to recognise 2+ ions.',
      id: 't2-06',
      summary:
        'Stages: (1) Vaporisation; (2) Ionisation by electron impact or electrospray → positive ions; (3) Acceleration by electric field to equal kinetic energy; (4) Ion drift/deflection in magnetic or field‑free region—lighter (lower m/z) ions travel faster; (5) Detection—ions accept electrons, inducing current proportional to abundance.\nInterpretation: Peak m/z = mass/charge; heights give % abundance. Weighted mean Σ(mass × %)/100 yields Aᵣ; highest‑m/z peak (or M + 1 due to ¹³C) gives Mᵣ. 2+ ions appear at half the expected m/z, so clusters reveal double charges. citeturn1file0',
    },
    {
      name: 'Predict and rationalise the mass spectrum of Cl₂ given ³⁵Cl (75.8 %) and ³⁷Cl (24.2 %).',
      id: 't2-07',
      summary:
        'Possible molecules: ³⁵Cl–³⁵Cl (m/z 70, prob = 0.758² = 0.575), ³⁵Cl–³⁷Cl (m/z 72, prob = 2 × 0.758 × 0.242 = 0.367), ³⁷Cl–³⁷Cl (m/z 74, prob = 0.242² = 0.059). Peak‑height ratio ≈ 9 : 6 : 1 (after scaling). citeturn1file0',
    },

    // ────────────────────── IONISATION ENERGY ──────────────────────
    {
      name: 'Define first, second and third ionisation energies and explain why all are endothermic.',
      id: 't2-08',
      summary:
        'IE₁ = energy to remove one electron from each atom in 1 mol of gaseous atoms, forming 1 mol M⁺. \nIE₂ and IE₃ analogous for further electrons. Because energy must be supplied to overcome electrostatic attraction, ΔH > 0 (endothermic). citeturn1file0',
    },
    {
      name: 'Describe how nuclear charge, electron shielding and subshell affect ionisation energy.',
      id: 't2-09',
      summary:
        'Higher nuclear charge ↑IE; greater distance/shielding ↓IE; electrons removed from p/d subshells or from paired orbitals experience extra repulsion → anomalies (e.g. Be→B, N→O). citeturn1file0',
    },

    // ────────────────────── ORBITALS & ELECTRONIC CONFIGURATION ──────────────────────
    {
      name: 'What is an orbital? State its maximum electron capacity and describe the shapes of s and p orbitals.',
      id: 't2-10',
      summary:
        'Orbital: region of space with a > 90 % probability of finding an electron; holds ≤ 2 electrons with opposite spin. s → spherical; p → dumb‑bell (three mutually perpendicular orientations pₓ, pᵧ, p_z). citeturn1file0',
    },
    {
      name: 'State Hund’s rule & the Pauli exclusion principle and use them to explain how electrons fill sub‑shells.',
      id: 't2-11',
      summary:
        'Hund: within a subshell, electrons occupy orbitals singly with parallel spins before pairing.\nPauli: no two electrons in the same orbital may share identical quantum numbers → paired electrons must have opposite spins. These rules minimise e⁻‑e⁻ repulsion and dictate the pattern of filling shown in electron‑in‑boxes diagrams. citeturn1file0',
    },
    {
      name: 'Predict full electronic configurations (s, p, d notation) for atoms/ions H → Kr, noting exceptions Cr and Cu.',
      id: 't2-12',
      summary:
        'General order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p.\nCr: [Ar] 3d⁵ 4s¹; Cu: [Ar] 3d¹⁰ 4s¹ (half/fully‑filled d subshell gains stability). For ions, remove 4s electrons before 3d. citeturn1file0',
    },
    {
      name: 'Explain how electronic configuration governs chemical properties and define s‑, p‑ and d‑blocks.',
      id: 't2-13',
      summary:
        'Valence‑shell configuration controls typical oxidation states, bonding & reactivity. s‑block: outermost e⁻ in s‑subshell (Groups 1–2); p‑block: highest e⁻ in p‑subshell (Groups 13–18); d‑block: filling d‑subshell (transition metals). citeturn1file0',
    },

    // ────────────────────── PERIODIC TRENDS ──────────────────────
    {
      name: 'Define a “periodic property” and describe how atomic radius varies across Periods 2 & 3.',
      id: 't2-14',
      summary:
        'Periodic property: one that shows a regular repeating pattern across the periodic table. Atomic (covalent) radius decreases left→right in a period because ↑nuclear charge attracts electrons more strongly without significant increase in shielding. citeturn1file0',
    },
    {
      name: 'Explain the variation in melting/boiling temperatures across Period 2 and 3 elements.',
      id: 't2-15',
      summary:
        'Left‑side metals (Li→Al/Na→Al) form giant metallic lattices; melting T rises with charge density & metallic‑bond strength (Li<Be, Na<Mg<Al). Si forms giant covalent lattice → very high Tₘ. Non‑metals (P,S,Cl) exist as simple molecules; Tₘ depends on London forces (S₈>P₄>Cl₂). Noble gases (Ne, Ar) are monoatomic with only weak dispersion forces → lowest T. citeturn1file0',
    },
    {
      name: 'Sketch and interpret first‑ionisation‑energy graphs for Z = 1–36 and explain their periodicity.',
      id: 't2-16',
      summary:
        'Plot IE₁ against atomic number: shows large peaks at noble gases (full shells), deep troughs at group 1 metals; overall rise across a period and fall down a group. Sub‑shell anomalies at Group 3 & Group 6 elements confirm subshell structure. The repeating pattern exemplifies periodicity. citeturn1file0',
    },

    // ────────────────────── CALCULATIONS & PRACTICAL APPS ──────────────────────
    {
      name: 'Calculate the relative atomic mass of an element or relative molecular mass of a diatomic sample from mass‑spectra data.',
      id: 't2-17',
      summary:
        'Formula for Aᵣ: Σ(relative isotopic mass × % abundance)/100. For Mᵣ of diatomic sample, use weighted mean of molecular peaks or 2Aᵣ. Worked example: Mg with 24 (78.6%), 25 (10.1%), 26 (11.3%) → Aᵣ = (24×78.6 + 25×10.1 + 26×11.3)/100 = 24.3 (3 s.f.). citeturn1file0',
    },
    {
      name: 'Describe Core‑Practical 1: determining molar volume of H₂ gas and sources of error.',
      id: 't2-18',
      summary:
        'React known mass of Mg ribbon with excess 2 mol dm⁻³ HCl in an inverted, water‑filled burette; measure collected H₂ volume at r.t.p. Convert to n(H₂) using V/24.0 dm³ mol⁻¹. Errors: Mg oxide layer, gas leakage, temperature fluctuation, reading meniscus, water vapour partial pressure; discuss systematic vs random contributions and improvements (use of acidified water bath, temperature probe, polished Mg). citeturn1file0',
    },
  ],
};

export default data;
