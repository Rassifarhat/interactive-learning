import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  name: 'Topic 6: Energetics',
  id: 'topic6_questions',
  summary: 'Exam-style questions for Topic 6: Energetics',
  children: [
    {
      name: 'What is enthalpy change and what are the standard conditions for its measurement?',
      id: 'topic6-1',
      summary: 'Enthalpy change (ΔH) is the heat energy change measured at constant pressure. Standard conditions are 100 kPa pressure and a specified temperature, usually 298 K.'
    },
    {
      name: 'How do exothermic and endothermic reactions differ in terms of enthalpy change?',
      id: 'topic6-2',
      summary: 'Exothermic reactions release heat and have a negative enthalpy change (ΔH < 0), while endothermic reactions absorb heat and have a positive enthalpy change (ΔH > 0).'  
    },
    {
      name: 'How can you construct and interpret an enthalpy level diagram for exothermic and endothermic reactions?',
      id: 'topic6-3',
      summary: 'An enthalpy level diagram shows reactants and products on a vertical energy axis. Exothermic reactions have products lower than reactants (ΔH negative); endothermic have products higher (ΔH positive). Arrows represent activation energy and enthalpy change.'
    },
    {
      name: 'Define the following standard enthalpy changes: reaction (ΔrH), formation (ΔfH), combustion (ΔcH), neutralisation (ΔneutH), and atomisation (ΔatH).',
      id: 'topic6-4',
      summary: 'ΔrH is the enthalpy change for the reaction as written. ΔfH is the enthalpy change when one mole of compound forms from elements in their standard states. ΔcH is the enthalpy change when one mole of substance combusts completely in oxygen under standard conditions. ΔneutH is the enthalpy change when one mole of water forms from an acid-base reaction. ΔatH is the enthalpy change when one mole of gaseous atoms forms from the element in its standard state.'
    },
    {
      name: 'How do you calculate the energy transferred in a reaction and convert it to the enthalpy change per mole using experimental data?',
      id: 'topic6-5',
      summary: 'Energy transferred (q) = mass (g) x specific heat capacity (J g⁻¹ °C⁻¹) x temperature change (°C). To find ΔH (kJ mol⁻¹), divide q by the moles of limiting reactant and convert J to kJ. Common experiments include solution calorimetry and combustion calorimetry.'
    },
    {
      name: 'State Hess’s Law and explain how to apply it to construct enthalpy cycles and calculate reaction enthalpy changes.',
      id: 'topic6-6',
      summary: 'Hess’s Law states that total enthalpy change is independent of the reaction pathway. To apply it, draw enthalpy cycles linking reactants and products, use known ΔH values, and sum the steps to find the desired ΔH.'
    },
    {
      name: 'What is the procedure for determining the enthalpy change of a reaction using Hess’s Law in Core Practical 2?',
      id: 'topic6-7',
      summary: 'Measure ΔH for related reactions by recording temperature changes and calculating q via q=mcΔT. Use these experimental values in an enthalpy cycle to calculate the ΔH for the target reaction using Hess’s Law.'
    },
    {
      name: 'How would you evaluate experimental results for enthalpy change measurements and identify sources of error and assumptions?',
      id: 'topic6-8',
      summary: 'Compare experimental ΔH to literature values to assess accuracy. Discuss precision issues. Identify systematic errors (heat loss, incomplete reactions, calorimeter heat uptake) and random errors (temperature reading fluctuations). Note assumptions like negligible calorimeter heat capacity and no heat losses.'
    },
    {
      name: 'What are bond enthalpy and mean bond enthalpy, and how are they used to calculate reaction enthalpies? What are the limitations of this method?',
      id: 'topic6-9',
      summary: 'Bond enthalpy is the energy required to break one mole of a given bond in gaseous molecules. Mean bond enthalpy is the average bond enthalpy over various compounds. Reaction ΔH = Σ(bond enthalpies of bonds broken) - Σ(bond enthalpies of bonds formed). Limitations include using gas-phase averages, neglecting molecular environment and bond variability.'
    },
    {
      name: 'How do you calculate mean bond enthalpies from experimental enthalpy changes of reaction?',
      id: 'topic6-10',
      summary: 'Use ΔH = Σ(D bonds broken) - Σ(D bonds formed). Substitute experimental ΔH and known bond enthalpies to solve for unknown bond enthalpies. Average values from multiple reactions to find the mean bond enthalpy.'
    },
    {
      name: 'How does bond enthalpy data indicate which bond will break first in a reaction, and how does this relate to reaction rate?',
      id: 'topic6-11',
      summary: 'Lower bond enthalpy bonds require less energy to break, so they cleave first. Lower bond enthalpies correspond to lower activation energies, which generally lead to faster reaction rates at a given temperature.'
    }
  ]
};

export default data;
