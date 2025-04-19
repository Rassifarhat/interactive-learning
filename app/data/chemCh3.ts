import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  name: "Topic 3: Chemical Bonding",
  id: "topic3-root",
  children: [
    {
      name: "3A Ionic Bonding",
      id: "ionic-root",
      children: [
        {
          name: "3A.1 Nature of Ionic Bonding",
          id: "req-3a-1",
          summary: `• Ions form by e⁻ loss (cations) or gain (anions); show with dot‑and‑cross.\n• Ionic lattice = giant 3‑D array of oppositely charged ions held by non‑directional electrostatic attraction.\n• Lattice energy ↑ with higher ionic charge & smaller ionic radius.\n• Evidence: molten/aqueous electrolysis & electron‑density maps (e.g. NaCl).`,
          children: [
            {
              name: "Q: Explain, in terms of lattice energy, why MgO has much stronger ionic bonding than NaCl.",
              id: "q-3a-1-1",
              summary: "Mg²⁺ and O²⁻ have double charges and radii similar to Na⁺/Cl⁻, so electrostatic attraction (and lattice energy) is far greater, giving stronger bonding."
            }
          ]
        },
        {
          name: "3A.2 Ionic Radii & Polarisation",
          id: "req-3a-2",
          summary: `• Radii ↑ down a group; ↓ with ↑ nuclear charge in isoelectronic series.\n• Fajan’s rules: high‑charge/small cation + high‑charge/large anion → strong polarisation → covalent character.\n• Polarising power ∝ charge/r² (charge density).`,
          children: [
            {
              name: "Q: Arrange Li⁺, Na⁺, Mg²⁺, Al³⁺ in order of increasing polarising power and justify your order.",
              id: "q-3a-2-1",
              summary: "Polarising power rises with ↑ charge and ↓ radius: Na⁺ < Li⁺ < Mg²⁺ < Al³⁺."
            }
          ]
        },
        {
          name: "3A.3 Physical Properties of Ionic Compounds",
          id: "req-3a-3",
          summary: `• High m.p. from strong lattice attractions; brittle because like‑charges repel when layers slide.\n• Non‑conductor when solid (ions fixed) but conductor when molten/aqueous (ions mobile).\n• Often water‑soluble—hydration energy can offset lattice energy.`,
          children: [
            {
              name: "Q: Why does solid NaCl fail to conduct electricity whereas molten NaCl conducts well?",
              id: "q-3a-3-1",
              summary: "In the solid lattice ions are locked in place; on melting they become free to migrate and carry charge."
            }
          ]
        }
      ]
    },
    {
      name: "3B Covalent Bonding",
      id: "covalent-root",
      children: [
        {
          name: "3B.1 σ & π Bonds, Bond Length vs Strength",
          id: "req-3b-1",
          summary: `• σ bond = end‑on overlap; π bond = side‑on overlap (only after σ formed).\n• Shorter bonds are usually stronger; multiple bonds shorten/strengthen link.\n• Lone‑pair repulsions can weaken bonds (e.g. N–N vs C–C).`,
          children: [
            {
              name: "Q: Why is a C=C double bond shorter and stronger than a C–C single bond?",
              id: "q-3b-1-1",
              summary: "Additional π overlap increases electron density between nuclei, drawing them closer and raising bond energy."
            }
          ]
        },
        {
          name: "3B.2 Electronegativity & Bond Polarity",
          id: "req-3b-2",
          summary: `• Electronegativity ↑ across a period, ↓ down a group.\n• ΔEN creates polar covalent bonds; bonding type forms a continuum from covalent → ionic.\n• % ionic character grows with larger ΔEN.`,
          children: [
            {
              name: "Q: Place C–F, C–Cl, C–Br, C–I in order of decreasing bond polarity.",
              id: "q-3b-2-1",
              summary: "Electronegativity difference: C–F > C–Cl > C–Br > C–I."
            }
          ]
        },
        {
          name: "3B.3 Discrete Molecules & Dot‑and‑Cross",
          id: "req-3b-3",
          summary: `• Discrete molecules = neutral groups of atoms bonded covalently.\n• Octet rule has exceptions (BeCl₂, BF₃, SF₆, PCl₅).\n• For VSEPR shapes, treat each multiple bond as one region of e⁻ density.`,
          children: [
            {
              name: "Q: Draw and explain the linear shape of CO₂ using VSEPR theory.",
              id: "q-3b-3-1",
              summary: "Two regions of electron density (two double bonds) around C repel to 180°, giving linear geometry."
            }
          ]
        },
        {
          name: "3B.4 Dative (Coord.) Bonds",
          id: "req-3b-4",
          summary: `• Both electrons supplied by one atom; shown with →.\n• Examples: NH₄⁺, H₃O⁺, Al₂Cl₆, CO.\n• Coordinate bond identical in strength to ordinary σ once formed.`,
          children: [
            {
              name: "Q: In NH₄⁺, identify the coordinate bond and describe how it forms.",
              id: "q-3b-4-1",
              summary: "N’s lone pair donates into H⁺’s empty 1s orbital forming an N→H bond."
            }
          ]
        }
      ]
    },
    {
      name: "3C Shapes & Polarity",
      id: "shape-root",
      children: [
        {
          name: "3C.1 Electron‑Pair Repulsion (VSEPR)",
          id: "req-3c-1",
          summary: `• Shape set by minimising repulsion: LP–LP > LP–BP > BP–BP.\n• Common geometries & angles: linear 180°, trig‑planar 120°, tetra 109.5°, trig‑pyramidal 107°, bent 104.5°.`,
          children: [
            {
              name: "Q: Predict the shape and bond angle of PF₃.",
              id: "q-3c-1-1",
              summary: "PF₃ has 3 BP + 1 LP → trigonal pyramidal, ~107°."
            }
          ]
        },
        {
          name: "3C.2 Molecular Polarity",
          id: "req-3c-2",
          summary: `• Overall dipole = vector sum of bond dipoles; depends on both ΔEN and symmetry.\n• Symmetric molecules (CO₂, CCl₄) are non‑polar; asymmetry (H₂O, CHCl₃) gives polarity.`,
          children: [
            {
              name: "Q: Explain why CHCl₃ is polar but CCl₄ is non‑polar.",
              id: "q-3c-2-1",
              summary: "In CHCl₃ the C–H bond dipole fails to cancel the three C–Cl dipoles; in tetrahedral CCl₄ four identical C–Cl dipoles cancel out."
            }
          ]
        }
      ]
    },
    {
      name: "3D Metallic Bonding",
      id: "metallic-root",
      summary: `• Giant lattice of cations in a sea of delocalised e⁻.\n• Properties: high m.p., conductivity, malleable/ductile, good thermal conductor.\n• Strength ↑ with more delocalised e⁻ and higher cation charge‑to‑radius ratio.`,
      children: [
        {
          name: "Q: Why does aluminium conduct electricity better than sodium?",
          id: "q-3d-1",
          summary: "Al contributes three delocalised electrons per ion (vs one for Na) and has higher charge density, so charge carriers are more abundant."
        }
      ]
    },
    {
      name: "3E Giant Lattices & Structures",
      id: "lattice-root",
      children: [
        {
          name: "3E.1 Types of Solid Lattice",
          id: "req-3e-1",
          summary: `• Metallic, ionic, giant covalent (diamond, graphite, graphene), molecular (I₂, S₈, CO₂).\n• Diamond: 3‑D covalent, very hard, non‑conductor.\n• Graphite/graphene: layered or single sheet, delocalised π e⁻ → conductor parallel to layers, lubricant.`,
          children: [
            {
              name: "Q: Why is diamond hard while graphite is soft and electrically conductive?",
              id: "q-3e-1-1",
              summary: "Diamond’s 3‑D network of strong C–C σ bonds resists deformation; graphite has weak inter‑layer forces and delocalised electrons within layers enabling conductivity."
            }
          ]
        },
        {
          name: "3E.2 Relating Structure to Properties",
          id: "req-3e-2",
          summary: `• Bonding/structure dictate m.p., conductivity, solubility.\n• Flow‑chart: conductivity & m.p. clues identify lattice type; exceptions (graphite, Si).`,
          children: [
            {
              name: "Q: A substance melts at 2230 °C and is an electrical non‑conductor. Deduce its likely bonding and structure.",
              id: "q-3e-2-1",
              summary: "Very high m.p. + non‑conductivity suggest a giant covalent lattice (e.g. SiO₂ or Si)."
            }
          ]
        }
      ]
    }
  ]
};

export default data;
