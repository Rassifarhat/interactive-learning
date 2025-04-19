import { MindMapNode } from '../types/MindMapNode';

// Complete mind‑map for Edexcel/OCR/Pearson AS‑Level Chemistry Topic 5 – Alkenes & Addition Polymers.
// Each node is an exam‑style question; the summary that follows is the full‑mark answer aligned to the British marking scheme.

const data: MindMapNode = {
  name: "Topic 5: Alkenes & Addition Polymers",
  id: "topic5",
  summary: "Comprehensive knowledge tree covering every learning objective in Topic 5. Use this as revision and self‑testing material for AS‑Level (British system) exams.",
  children: [
    {
      name: "What is the general formula for (a) open‑chain alkenes and (b) cycloalkenes, and why are they described as unsaturated hydrocarbons?",
      id: "topic5-1",
      summary: "Acyclic alkenes follow CₙH₂ₙ. Cycloalkenes follow CₙH₂ₙ₋₂ because the ring removes two extra hydrogens. Both contain at least one C=C double bond (σ + π) that can undergo addition, so they are ‘unsaturated’."  //citeturn1file0
    },
    {
      name: "Describe the bonding within a C=C double bond and explain why it is more reactive than a C–C single bond.",
      id: "topic5-2",
      summary: "The double bond comprises one strong σ bond (end‑on overlap of sp² orbitals) and one weaker π bond (sideways overlap of p orbitals above/below the plane). π electrons are further from the nuclei, more exposed, and therefore readily attacked by electrophiles, making the double bond more reactive."  //citeturn1file0
    },
    {
      name: "Explain geometric (cis–trans) isomerism in alkenes and why restricted rotation around C=C is essential.",
      id: "topic5-3",
      summary: "Because rotation about the C=C axis is restricted, when each carbon bears two different substituents two fixed arrangements exist. Same‑side high‑priority groups give the cis (Z) isomer; opposite‑side arrangements give trans (E)."  //citeturn1file0
    },
    {
      name: "Outline the E–Z naming system for alkene stereoisomers and state when it is preferred over cis–trans.",
      id: "topic5-4",
      summary: "Assign priorities on each double‑bond carbon by atomic number (CIP rules). High‑priority groups on the same side → Z (zusammen); on opposite sides → E (entgegen). E–Z is essential when more than two different groups are attached, making cis/trans ambiguous."  //citeturn1file0
    },
    {
      name: "How would you test an unknown hydrocarbon for the presence of a C=C double bond?",
      id: "topic5-5",
      summary: "Shake the sample with orange bromine water in the dark. Instant decolourisation indicates an alkene as Br₂ adds across the π bond; alkanes only react slowly under UV light."  //citeturn1file0
    },
    {
      name: "Describe the five key electrophilic addition reactions of alkenes, giving reagents, conditions and products.",
      id: "topic5-6",
      children: [
        {
          name: "Hydrogenation: How is an alkene converted to an alkane industrially?",
          id: "topic5-6a",
          summary: "Pass H₂ and alkene over finely divided Ni at 150–200 °C (≈5 atm). Syn addition produces a saturated alkane; used for hardening vegetable oils."  //citeturn1file0
        },
        {
          name: "Halogenation: What happens when an alkene reacts with Br₂ or Cl₂?",
          id: "topic5-6b",
          summary: "The π bond polarises X–X, forming a cyclic halonium ion; X⁻ attacks the more substituted carbon giving a vicinal dihaloalkane (anti addition)."  //citeturn1file0
        },
        {
          name: "Hydrogen‑halide addition: Explain Markovnikov’s rule using propene + HBr.",
          id: "topic5-6c",
          summary: "Protonation gives the more stable secondary carbocation, so Br⁻ adds to C‑2, yielding 2‑bromopropane as major product; 1‑bromopropane forms only via the less‑stable primary carbocation."  //citeturn1file0
        },
        {
          name: "Hydration: Describe the direct industrial synthesis of ethanol from ethene.",
          id: "topic5-6d",
          summary: "Steam + ethene at ~300 °C, 60 atm over phosphoric acid on silica. Equilibrium mixture condensed; unreacted gases recycled. Product: ethanol."  //citeturn1file0
        },
        {
          name: "Oxidation: How is an alkene converted to a vicinal diol with KMnO₄?",
          id: "topic5-6e",
          summary: "Cold, dilute, acidified KMnO₄ adds –OH groups across the double bond (syn) and the solution turns from purple to colourless as MnO₄⁻ → Mn²⁺."  //citeturn1file0
        }
      ]
    },
    {
      name: "Describe, with curly‑arrow diagrams, the electrophilic addition of (a) Br₂ and (b) HBr to ethene.",
      id: "topic5-7",
      summary: "(a) π electrons polarise Br₂; attack forms a bromonium ion, followed by nucleophilic attack by Br⁻. (b) Polar H–Br supplies H⁺; protonation forms a carbocation captured by Br⁻. Both proceed via heterolytic bond fission."  //citeturn1file0
    },
    {
      name: "Using carbocation stability, predict the major product when propene reacts with HBr and justify your choice.",
      id: "topic5-8",
      summary: "Secondary carbocation > primary in stability due to two electron‑releasing CH₃ groups. Therefore 2‑bromopropane dominates; 1‑bromopropane is minor."  //citeturn1file0
    },
    {
      name: "Explain addition polymerisation and write the balanced equation for producing poly(ethene).",
      id: "topic5-9",
      summary: "Thousands of ethene molecules open their π bonds under high T/P with a radical initiator: n CH₂=CH₂ → –[–CH₂–CH₂–]ₙ–. The bracketed repeat unit shows bonds extending beyond the brackets and subscript n."  //citeturn1file0
    },
    {
      name: "Given a polymer repeat unit, how do you deduce and name its monomer?",
      id: "topic5-10",
      summary: "Identify two adjacent backbone carbons bearing the repeating side groups, insert a double bond, tidy side bonds, then name via IUPAC (e.g., CH₂=CHCl is chloroethene)."  //citeturn1file0
    },
    {
      name: "Discuss two strategies chemists use to mitigate environmental problems of polymer disposal.",
      id: "topic5-11",
      children: [
        {
          name: "How are biodegradable polymers designed and what are their advantages and limitations?",
          id: "topic5-11a",
          summary: "They incorporate hydrolysable ester/amide links (e.g., PLA, PHB) that microorganisms break down to CO₂, H₂O and biomass. Pros: reduced persistent waste; medical applications. Cons: compete with food crops; no material recycling of atoms."  //citeturn1file0
        },
        {
          name: "How are toxic gases managed during incineration of plastic waste?",
          id: "topic5-11b",
          summary: "Flue‑gas treatment: Ca(OH)₂ scrubs HCl/SO₂; high‑temperature catalytic beds destroy dioxins; electrostatic precipitators and activated carbon capture heavy metals and particulates, ensuring emissions meet statutory limits."  //citeturn1file0
        }
      ]
    }
  ]
};

export default data;
