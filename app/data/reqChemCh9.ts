import { MindMapNode } from '../types/MindMapNode';

 const data: MindMapNode = {
  name: "Topic 9: Introduction to Kinetics and Equilibria",
  id: "topic9-root",
  children: [
    {
      name: "9A Kinetics",
      id: "kinetics-root",
      children: [
        {
          name: "9.1 Collision theory – effect of concentration, temperature, pressure & surface area on rate",
          id: "req-9-1",
          summary: `• Rate ↑ when frequency of successful collisions (energy ≥ E_a & correct orientation) ↑.\n• Higher concentration (solutions) or pressure (gases) → particles closer → more collisions s⁻¹.\n• Greater surface area (solids) exposes more particles for collision.\n• Temperature rise gives particles more KE; a small T‑increase produces a large % of molecules with E ≥ E_a.\n• Exceptions: in heterogeneous catalysis (e.g. Haber Fe surface) once all active sites are saturated, extra pressure has little effect.`,
          children: [
            {
              name: "Q: Using collision theory, explain why doubling the concentration of HCl(aq) doubles the initial rate of its reaction with Mg ribbon.",
              id: "q-9-1-1",
              summary: "More H⁺ ions per dm³ → Mg surface is struck by twice as many H⁺ each second, so the frequency of successful collisions (with E ≥ E_a and correct orientation) doubles, hence rate doubles."
            }
          ]
        },
        {
          name: "9.2 Activation energy (E_a)",
          id: "req-9-2",
          summary: `Activation energy is the minimum energy colliding particles need for the reaction pathway to proceed. Collisions below E_a simply rebound; those ≥ E_a allow bond‑breaking/forming to reach the transition state. Steric orientation must also be favourable (steric factor). Example: H₂ + Cl₂ explosive when photons supply E_a; gentle collisions at room T are non‑reactive.`,
          children: [
            {
              name: "Q: Define activation energy and describe its role in the H₂ + Cl₂ reaction.",
              id: "q-9-2-1",
              summary: "Activation energy is the minimum collision energy required to start bond breaking; in H₂ + Cl₂, photons raise some H–Cl forming collisions above E_a so radical chain reaction proceeds; below that energy the molecules rebound un‑reacted."
            }
          ]
        },
        {
          name: "9.3 Calculating rate of reaction",
          id: "req-9-3",
          summary: `Two experimental routes: (i) Draw a tangent to concentration–time curve; gradient = Δ[ ]/Δt (mol dm⁻³ s⁻¹). Initial rate is tangent at t = 0. (ii) If a fixed quantity changes, use rate = 1/time (or volume/time). Units depend on measured quantity.`,
          children: [
            {
              name: "Q: A reaction produces 50 cm³ CO₂ in 25 s. What is the average rate in cm³ s⁻¹?",
              id: "q-9-3-1",
              summary: "Rate = 50 cm³ / 25 s = 2.0 cm³ s⁻¹."
            }
          ]
        },
        {
          name: "9.4 Maxwell–Boltzmann distribution & temperature",
          id: "req-9-4",
          summary: `MB curves show the spread of molecular energies. Raising T flattens/ broadens the curve, shifting peak right. Area under curve beyond E_a enlarges greatly → many more successful collisions, hence rate ↑ exponentially with modest T rise. Overall collision frequency rises only slightly.`,
          children: [
            {
              name: "Q: On an MB diagram, why does a 10 K rise cause a dramatic rate increase although average KE rises modestly?",
              id: "q-9-4-1",
              summary: "Because the high‑energy tail is very sensitive; a small KE increase moves a significant additional fraction of molecules over the E_a threshold, multiplying successful collision frequency."
            }
          ]
        },
        {
          name: "9.5 Catalysts provide alternative pathway of lower E_a",
          id: "req-9-5",
          summary: `Catalyst is unchanged overall but allows a different mechanism with lower E_a, so a larger fraction of molecules possess enough energy at given T. It increases forward & reverse rates equally, so equilibrium position is unaffected. Examples: MnO₂ catalyses H₂O₂ → H₂O + ½O₂; Fe catalyses N₂ + 3H₂ → 2NH₃.`,
          children: [
            {
              name: "Q: Why does adding MnO₂ speed up H₂O₂ decomposition but not alter ΔH?",
              id: "q-9-5-1",
              summary: "MnO₂ offers an alternative pathway with lower E_a, increasing rate, yet enthalpy change depends only on reactants/products so ΔH stays −196 kJ mol⁻¹."
            }
          ]
        },
        {
          name: "9.6 Reaction profile diagrams (uncatalysed vs catalysed)",
          id: "req-9-6",
          summary: `Profile plots potential energy vs progress. Uncatalysed curve peaks at transition state; ΔH is vertical gap between reactants & products. Catalysed path has lower peak and may show intermediate valley if two‑step. Learners must sketch and label E_a(catalysed), E_a(uncat), ΔH.`,
          children: [
            {
              name: "Q: Sketch and label a catalysed & uncatalysed profile for an exothermic reaction.",
              id: "q-9-6-1",
              summary: "Diagram should show reactants high, products lower, two curves: higher hump (E_a) and lower hump (with catalyst); both finish at same product level."
            }
          ]
        },
        {
          name: "9.7 Catalysts & sustainability/atom economy",
          id: "req-9-7",
          summary: `Industrial catalysts (e.g., V₂O₅ in Contact, zeolites for phenol, HF/Raney Ni for ibuprofen) enable lower‑T processes, reduced fossil energy use, higher selectivity, fewer by‑products, improved atom economy, easier separation and recycling. This lowers costs and environmental footprint.`,
          children: [
            {
              name: "Q: Give two ways catalysts contribute to greener chemical manufacturing.",
              id: "q-9-7-1",
              summary: "They cut energy demand by allowing lower operating temperatures and minimise waste by increasing atom economy/selectivity, reducing by‑product streams."
            }
          ]
        },
        {
          name: "9.8 MB interpretation of catalysed reactions",
          id: "req-9-8",
          summary: `With a catalyst the E_a line moves left on the same MB curve. Shaded area beyond new E_a shows increased fraction of energetic molecules; curve itself is unchanged because T unchanged.`,
          children: [
            {
              name: "Q: On an MB plot, what changes when a catalyst is introduced at constant T?",
              id: "q-9-8-1",
              summary: "The position of the activation energy threshold shifts left; the distribution curve remains identical. The shaded high‑energy fraction enlarges."
            }
          ]
        }
      ]
    },
    {
      name: "9B Equilibria",
      id: "equilibria-root",
      children: [
        {
          name: "9.9 Dynamic equilibrium definitions",
          id: "req-9-9",
          summary: `Reversible reactions in closed systems reach dynamic equilibrium where forward and reverse rates are equal and macroscopic concentrations remain constant. Must be reversible & closed. Example: H₂ + I₂ ⇌ 2HI at 573 K.`,
          children: [
            {
              name: "Q: State two conditions necessary for a reaction mixture to attain dynamic equilibrium.",
              id: "q-9-9-1",
              summary: "(1) The reaction must be reversible. (2) The system must be closed so no species enter or leave."
            }
          ]
        },
        {
          name: "9.10 Qualitative effect of T, P, concentration on position of equilibrium",
          id: "req-9-10",
          summary: `Changing concentration: system shifts to oppose change (increase reactant → equilibrium moves right). Pressure (gases): shifts toward side with fewer moles when P increases. Temperature: increasing T favours endothermic direction (greater relative rate). Catalyst speeds attainment of equilibrium but doesn’t shift position. Limitations: simultaneous changes can produce non‑intuitive outcomes.`,
          children: [
            {
              name: "Q: Predict the effect of increasing pressure on N₂ + 3H₂ ⇌ 2NH₃.",
              id: "q-9-10-1",
              summary: "Equilibrium shifts right (toward 2 mol products vs 4 mol reactants) so NH₃ yield rises."
            }
          ]
        },
        {
          name: "9.11 Industrial compromise between yield & rate",
          id: "req-9-11",
          summary: `Economic operation balances thermodynamic yield with kinetic rate & cost. Haber process: 450 °C, 250 atm, Fe catalyst give ~15 % one‑pass NH₃ but high throughput; higher P more yield but costly; lower T more yield but too slow. Similar logic in Contact process (450 °C, 2 atm, V₂O₅).`,
          children: [
            {
              name: "Q: Why is 450 °C used for Haber rather than a lower temperature that gives higher equilibrium yield?",
              id: "q-9-11-1",
              summary: "Lower T would raise equilibrium NH₃ yield (exothermic) but reaction rate would be prohibitively slow even with catalyst; 450 °C is a compromise that delivers acceptable yield rapidly and economically."
            }
          ]
        }
      ]
    }
  ]
};
export default data;