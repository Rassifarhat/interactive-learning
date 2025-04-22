export type Exercise = {
    id: string;
    question: string;
    modelAnswer: string;
    explanation: string;
    commonMistakeTip: string;
  };
  
  // Exercises for Chapter 4: Electricity and Electronics
  export const exercises: Exercise[] =[
    {
      id: "4.1",
      question: `A student measures the terminal p.d. V for various currents I through a cell and plots V (y‑axis) against I (x‑axis). Explain how to extract the EMF E and internal resistance r from this graph.`,
      modelAnswer: `- **M1**: Plot V against I and draw a straight‑line best fit.
  - **M1**: Identify the V‑intercept as E.
  - **M1**: Identify the gradient ΔV/ΔI as -r.
  - **A1**: State E = intercept value; r = -gradient.`,
      explanation: `It’s easy to forget the negative sign on the gradient—always write slope = -r.`,
      commonMistakeTip: `Label your axes (with units) before drawing the line of best fit.`
    },
    {
      id: "4.2",
      question: `Sketch and explain the difference between the I–V graph for (a) an ohmic resistor at constant temperature and (b) a filament lamp as current increases.`,
      modelAnswer: `- **M1**: Ohmic resistor: straight line through origin (I ∝ V).
  - **M1**: Filament lamp: curve through origin that flattens (decreasing gradient).
  - **M1**: Explain in filament lamp the temperature of the filament rises as I increases.
  - **M1**: Higher temperature ⇒ increased lattice vibrations ⇒ increased resistance ⇒ curve shape.
  - **A1**: Clear labelled sketches with correct shape.`,
      explanation: `Students often draw the lamp curve starting away from the origin—remember at V = 0, I = 0.`,
      commonMistakeTip: `Annotate “temperature rise” on your lamp sketch to show why the gradient changes.`
    },
    {
      id: "4.3",
      question: `Design an experiment to plot resistance R of a thermistor versus temperature T. State how you would keep errors minimal.`,
      modelAnswer: `- **M1**: Use a constant‑voltage source and measure current through the thermistor only.
  - **M1**: Calculate R = V/I for each temperature (use digital voltmeter/ammeter).
  - **M1**: Immerse thermistor in a water bath; vary T and allow thermal equilibrium.
  - **M1**: Record at least five (T,R) pairs and plot R on y‑axis vs T on x‑axis.
  - **M1**: Minimise self‑heating by using low current (< 10 mA) and stirring bath.
  - **A1**: State that accuracy improves by calibrating the thermometer and using a shielded circuit.`,
      explanation: `Self‑heating can seriously distort your R–T curve—always check current is small.`,
      commonMistakeTip: `Stir the water bath gently before each reading to ensure uniform temperature.`
    },
    {
      id: "4.4",
      question: `A light‑dependent resistor (LDR) of resistance R_LDR forms the lower leg of a 5 kΩ potential divider fed from 12 V. Calculate the output voltage V_out across the LDR when R_LDR = 1 kΩ.`,
      modelAnswer: `- **M1**: V_out = 12 × (R_LDR / (5 000 + R_LDR)).
  - **M1**: Substitute R_LDR = 1 000: V_out = 12 × (1 000 / 6 000).
  - **A1**: 2.0 V.`,
      explanation: `If you swap numerator/denominator you get the wrong answer—always put the lower resistor in the numerator for V_out.`,
      commonMistakeTip: `Check that V_out + V_other = 12 V as a quick sanity check.`
    },
    {
      id: "4.5",
      question: `Three resistors, R1 = 4 Ω, R2 = 6 Ω, R3 = 12 Ω, are connected: R1 in series with the parallel combination of R2 and R3. Find (a) the total R, (b) the current from a 24 V source, (c) the power in R2.`,
      modelAnswer: `- **M1**: R_parallel = (1/6 + 1/12)^{-1} = 4 Ω.
  - **M1**: Total R = 4 + 4 = 8 Ω.
  - **M1**: I_total = 24 / 8 = 3.0 A.
  - **M1**: Current divider: I2 = I_total × (R3 / (R2 + R3)) = 3.0 × (12 / 18) = 2.0 A.
  - **A1**: P2 = I2^2 × R2 = 2.0^2 × 6 = 24 W.`,
      explanation: `The most frequent mistake is using series‑current formula on a parallel branch—use the current‑divider rule.`,
      commonMistakeTip: `Always check that I_2 + I_3 = I_total to verify your branch currents.`
    },
    {
      id: "4.6",
      question: `A copper wire (free‑electron density n = 8.5×10^{28} m^{-3}) carries 2 A. Its cross‑section is 1.0×10^{-6} m^2. Calculate the drift velocity v_d. (Charge of electron = 1.6×10^{-19} C.)`,
      modelAnswer: `- **M1**: Use I = n A q v_d.
  - **M1**: v_d = I / (n A q).
  - **M1**: Substitute values: 2 / (8.5×10^{28} × 1×10^{-6} × 1.6×10^{-19}).
  - **A1**: ≈ 1.5×10^{-4} m/s.`,
      explanation: `Forgetting to convert μm^2 to m^2 loses six powers of ten—always check units.`,
      commonMistakeTip: `Write each power‑of‑ten factor on its own line when substituting to avoid exponent errors.`
    },
    {
      id: "4.7",
      question: `A student plots resistance R of a wire against its length ℓ. The best‑fit straight line has gradient 1.2 Ω m^{-1} and intercept 0.5 Ω. (a) Explain why the intercept is non‑zero. (b) Find the resistivity ρ, given cross‑sectional area A = 0.50×10^{-6} m^2.`,
      modelAnswer: `- **M1**: Intercept arises from contact and lead resistance.
  - **M1**: Gradient = ρ / A.
  - **M1**: ρ = gradient × A = 1.2 × 0.50×10^{-6}.
  - **A1**: 6.0×10^{-7} Ω m.`,
      explanation: `Students often quote gradient directly as ρ—remember to multiply by cross‑sectional area.`,
      commonMistakeTip: `Always subtract the intercept before calculating resistance if you need pure wire data.`
    },
    {
      id: "4.8",
      question: `Explain why using a voltmeter of resistance 10 kΩ to measure across a 1 kΩ resistor in a 12 V circuit leads to a significant error. Calculate the measured voltage.`,
      modelAnswer: `- **M1**: Equivalent resistance = (10 000 × 1 000) / 11 000 = 909 Ω.
  - **M1**: Divider: V_meas = 12 × (909 / (909 + 1 000)) ≈ 5.72 V.
  - **A1**: True would be 6.00 V ⇒ ~4.7% error.`,
      explanation: `Always consider the finite resistance of your meter—when the DUT is comparable to meter resistance, error is large.`,
      commonMistakeTip: `Use a meter ≥10× the resistance you are measuring to keep error below 10%.`
    },
    {
      id: "4.9",
      question: `In a single loop circuit two EMF sources 8 V and 12 V (r = 1 Ω each) oppose each other with a 4 Ω resistor. Find the loop current and terminal p.d. across each cell.`,
      modelAnswer: `- **M1**: Net EMF = 12 - 8 = 4 V.
  - **M1**: Total R = 1 + 1 + 4 = 6 Ω.
  - **M1**: I = 4 / 6 = 0.667 A (from 12 V).
  - **M1**: V_terminal(12) = 12 - 0.667 = 11.33 V.
  - **A1**: V_terminal(8) = 8 - 0.667 = 7.33 V (polarity reversed).`,
      explanation: `A common sign error is forgetting to subtract Ir in the correct direction for each battery.`,
      commonMistakeTip: `Pick a current direction first, then stick to it when applying Kirchhoff’s law.`
    },
    {
      id: "4.10",
      question: `Describe how a potentiometer can measure the EMF of a small cell more accurately than a voltmeter. State one advantage of the null method.`,
      modelAnswer: `- **M1**: Use a long uniform wire and a driver cell; slide contact until galvanometer reads zero.
  - **M1**: Measure balancing length x; E_test = E_driver × (x / L).
  - **A1**: Advantage: zero current in test cell ⇒ no internal‑resistance drop ⇒ high accuracy.`,
      explanation: `Many students forget that at null point the test cell draws no current—this is why internal resistance doesn’t affect reading.`,
      commonMistakeTip: `Always adjust driver voltage slightly above test EMF before sliding to null to avoid missing the zero crossing.`
    },
    {
      id: "4.11",
      question: `A battery of EMF E and internal resistance r delivers current I into an external resistor R. Show that its efficiency η is IR/E.`,
      modelAnswer: `- **M1**: P_out = I^2 R.
  - **M1**: P_in = E I.
  - **M1**: η = P_out / P_in = (I^2 R) / (E I).
  - **A1**: η = I R / E.`,
      explanation: `Students sometimes use V_terminal I in denominator rather than E I—this underestimates losses.`,
      commonMistakeTip: `Always relate back to the definition: useful power ÷ total power supplied.`
    },
    {
      id: "4.12",
      question: `Explain qualitatively how the resistance of a metal wire changes with temperature and how this affects its I–V graph.`,
      modelAnswer: `- **M1**: As T increases, lattice vibrations ↑ ⇒ increased electron scattering ⇒ resistance ↑.
  - **M1**: On an I–V graph, conductor curve will become slightly curved, deviating from straight line at higher I.
  - **A1**: Result: non‑linear I–V at high currents/temperatures.`,
      explanation: `Even “ohmic” conductors deviate at high currents—always mention temperature effects.`,
      commonMistakeTip: `For a truly linear I–V, the experiment must keep temperature essentially constant.`
    },
    {
      id: "4.13",
      question: `Two identical cells (E = 1.5 V, r = 0.5 Ω) are connected in parallel with a load R = 5 Ω. Find the terminal p.d. across the combination and the total current delivered.`,
      modelAnswer: `- **M1**: E_eq = 1.5 V; r_eq = 0.5 / 2 = 0.25 Ω.
  - **M1**: I_total = 1.5 / (5 + 0.25) = 0.286 A.
  - **A1**: V_terminal = I_total × 5 = 1.43 V.
  - **M1**: Each cell supplies 0.143 A.`,
      explanation: `A common slip is to add EMFs in parallel—they stay the same; only r halves.`,
      commonMistakeTip: `Always compute r_eq for parallel identical resistances as r/n.`
    },
    {
      id: "4.14",
      question: `Two wires, A (length 2 m, R = 4 Ω) and B (length 4 m, R = 6 Ω), have the same material but different diameters. Determine the ratio of their cross‑sectional areas A_A/A_B.`,
      modelAnswer: `- **M1**: A = ρ ℓ / R ⇒ A_A/A_B = (ℓ_A/R_A) / (ℓ_B/R_B) = (2/4) / (4/6).
  - **A1**: = 0.5 / 0.667 = 0.75.`,
      explanation: `Students often invert the ratio—write out the formula before substituting.`,
      commonMistakeTip: `Use “ℓ/R” consistently to avoid inversion errors.`
    },
    {
      id: "4.15",
      question: `Explain why a least‑squares fit to V–I data gives a more reliable value of r than picking two points.`,
      modelAnswer: `- **M1**: Least‑squares minimises the sum of squared deviations ⇒ uses all data ⇒ reduces random errors.
  - **A1**: Picking two points magnifies any measurement error in those points.`,
      explanation: `Always mention “minimises random error” when justifying least‑squares.`,
      commonMistakeTip: `If asked for uncertainty, least‑squares also provides standard errors in gradient.`
    },
    {
      id: "4.16",
      question: `Sketch the I–V characteristic of a silicon diode and explain why current only flows in one direction after threshold.`,
      modelAnswer: `- **M1**: Forward: near zero current until threshold ~0.6 V, then exponential rise.
  - **M1**: Reverse: small saturation current until breakdown.
  - **M1**: Explain charge‑carrier barrier in pn‑junction ⇒ one‑way conduction.
  - **A1**: Clear labelled sketch showing forward knee and reverse saturation.`,
      explanation: `Many draw symmetrical curves—remember diodes are highly asymmetric.`,
      commonMistakeTip: `Annotate “0.6 V knee” on your graph for full credit.`
    },
    {
      id: "4.17",
      question: `An LDR’s resistance varies roughly as R ∝ I^{-0.7} where I is light intensity. Show how to plot data so you can find the exponent from the slope.`,
      modelAnswer: `- **M1**: Take log of both sides: log R = -0.7 log I + const.
  - **M1**: Plot log R vs log I.
  - **A1**: Slope of line = -0.7.`,
      explanation: `Forgetting to label axes “log” is an easy slip—always specify log‑log.`,
      commonMistakeTip: `Use the same log base (e.g. 10) for both axes so the slope equals the exponent.`
    },
    {
      id: "4.18",
      question: `A student uses 3 loads (5, 10, 20 Ω) to find E and r; the 20 Ω reading gives noticeably poor line fit. Explain why.`,
      modelAnswer: `- **M1**: At high R ⇒ low current ⇒ small voltage drops ⇒ greater relative error in voltmeter reading.
  - **A1**: Data point deviates due to poor sensitivity at low currents.`,
      explanation: `Low‑current readings amplify instrument uncertainty—prefer intermediate resistances.`,
      commonMistakeTip: `Exclude or weight down data with I < 0.1 A in your fit.`
    },
    {
      id: "4.19",
      question: `In the circuit below, R1 = 8 Ω and R2 = 12 Ω are in series; that series is in parallel with R3 = 6 Ω, all across 24 V. Find the current in each branch.`,
      modelAnswer: `- **M1**: Series: Rs = 8 + 12 = 20 Ω ⇒ Is = 24 / 20 = 1.20 A.
  - **M1**: Other branch: I3 = 24 / 6 = 4.00 A.
  - **A1**: I_R1 = I_R2 = 1.20 A, I_R3 = 4.00 A.`,
      explanation: `The biggest slip is recalculating series‑branch currents separately—in series they’re identical.`,
      commonMistakeTip: `Draw a clear tree‑diagram of branches before calculating currents.`
    },
    {
      id: "4.20",
      question: `Compare the total EMF and internal resistance when two identical 1.5 V, 0.4 Ω cells are (a) in series, (b) in parallel.`,
      modelAnswer: `- **M1**: Series: E_tot = 3.0 V, r_tot = 0.8 Ω.
  - **M1**: Parallel: E_tot = 1.5 V, r_tot = 0.4 / 2 = 0.2 Ω.
  - **A1**: State both sets of values.`,
      explanation: `Never add EMFs when in parallel—only resistances combine as r/n.`,
      commonMistakeTip: `Use the mnemonic “Series adds EMF, Parallel halves r.”`
    },
    {
        id: "4.21",
        question: `The plot of variation of potential difference across a combination of three identical cells in series, versus current is shown. Find the internal resistance and emf of each cell.`,
        modelAnswer: `• Determine gradient = –r_total = –3 r ⇒ r_cell = (–1/3)×slope.  
    • V‑intercept = E_total = 3 E ⇒ E_cell = intercept/3.`,
        explanation: `By plotting V against I, the slope gives –3 r (since three cells in series) and the intercept gives 3 E. Divide accordingly. :contentReference[oaicite:0]{index=0}`,
        commonMistakeTip: `Remember when cells are in series their emfs and internal resistances both add. :contentReference[oaicite:1]{index=1}`
      },
      {
        id: "4.22",
        question: `The variation of potential difference V with length l, in case of potentiometer wires P and Q is shown. Which one of these will you prefer for comparing emf of two cells? Why?`,
        modelAnswer: `• Choose the wire with steeper slope (greater potential gradient) for higher sensitivity.  
    • It gives larger length for the same emf ⇒ more precise null measurement.`,
        explanation: `A steeper V–l slope means a larger potential difference per unit length, improving measurement accuracy. :contentReference[oaicite:2]{index=2}`,
        commonMistakeTip: `Do not pick the gentler curve—lower sensitivity leads to larger percentage error at the null point. :contentReference[oaicite:3]{index=3}`
      },
      {
        id: "4.23",
        question: `Figure shows a plot of current I flowing through the cross-section of a wire versus time t. Use the plot to find the charge flowing in 10 s through the wire.`,
        modelAnswer: `• Charge Q = ∫ I dt = area under the I–t graph.  
    • Calculate rectangular and triangular areas as indicated.`,
        explanation: `Integrate current over time; equal to total area under the graph segments. :contentReference[oaicite:4]{index=4}`,
        commonMistakeTip: `Students often multiply final current by total time—only valid if I is constant. :contentReference[oaicite:5]{index=5}`
      },
      {
        id: "4.24",
        question: `V–I graph for a metallic wire at two temperatures T₁ and T₂ is shown. Which of the two temperatures is higher and why?`,
        modelAnswer: `• Lower gradient (higher resistance) corresponds to higher temperature.  
    • The curve with smaller slope is at higher T.`,
        explanation: `Resistance increases with temperature in metals, reducing current for a given voltage. :contentReference[oaicite:6]{index=6}`,
        commonMistakeTip: `Don’t confuse steeper I–V slope with higher temperature—slope ∝ 1/R. :contentReference[oaicite:7]{index=7}`
      },
      {
        id: "4.25",
        question: `Two metallic resistors are connected first in series and then in parallel across a d.c. supply. The I–V graph is shown for both cases. Which one represents the parallel combination and why?`,
        modelAnswer: `• Parallel has lower equivalent resistance ⇒ higher current for same V ⇒ steeper slope.  
    • Identify the steeper line as the parallel case.`,
        explanation: `Parallel connection reduces total resistance, increasing current for the same voltage. :contentReference[oaicite:8]{index=8}`,
        commonMistakeTip: `Students may mistakenly think series gives higher current—remember series adds resistance. :contentReference[oaicite:9]{index=9}`
      },
      {
        id: "4.26",
        question: `Draw a graph showing the variation of current versus voltage for GaAs. Identify (i) the negative resistance region and (ii) the region where Ohm’s law is obeyed.`,
        modelAnswer: `• Plot: linear region at low V (Ohmic), then region where I decreases with increasing V (negative resistance), then I rises again.  
    • (i) Region where I falls as V increases.  
    • (ii) Initial straight‑line portion.`,
        explanation: `GaAs exhibits a region of negative differential resistance due to transferred‑electron effects. :contentReference[oaicite:10]{index=10}`,
        commonMistakeTip: `Label axes and knee points clearly; negative resistance isn’t the breakdown region. :contentReference[oaicite:11]{index=11}`
      },
      {
        id: "4.27",
        question: `A conductor of length L is stretched to 3 L, keeping emf E constant. Explain how its drift velocity is affected.`,
        modelAnswer: `• Resistance ∝ L/A ⇒ new R = 3 R.  
    • Current I = E/R ⇒ I_new = I/3.  
    • Drift velocity v_d ∝ I ⇒ v_new = v/3.`,
        explanation: `Stretching increases resistance (length ↑, area ↓), reducing current and thus drift velocity by a factor of three. :contentReference[oaicite:12]{index=12}`,
        commonMistakeTip: `Forgetting change in cross‑section leads to wrong R calculation—area decreases when stretched. :contentReference[oaicite:13]{index=13}`
      },
      {
        id: "4.28",
        question: `Why is it generally preferred to obtain the balance point near the middle of the bridge wire in meter bridge experiments?`,
        modelAnswer: `• Minimises fractional error in length measurement.  
    • Ensures scale divisions on both sides are similar in magnitude.`,
        explanation: `A mid‑wire balance point reduces percentage uncertainty from the fixed least‑count of the scale. :contentReference[oaicite:14]{index=14}`,
        commonMistakeTip: `Avoid balance points near the ends—reading errors are amplified. :contentReference[oaicite:15]{index=15}`
      },
      {
        id: "4.29",
        question: `Two conducting wires X and Y of the same diameter but different materials are joined in series across a battery. If the number density of electrons in X is twice that in Y, find the ratio of drift velocities v_X : v_Y.`,
        modelAnswer: `• In series I is same, and I = n A q v ⇒ v ∝ 1/n.  
    • v_X / v_Y = n_Y / n_X = 1 / 2.`,
        explanation: `With constant current, higher carrier density yields lower drift velocity. :contentReference[oaicite:16]{index=16}`,
        commonMistakeTip: `Students often invert ratio—remember v = I/(nAq). :contentReference[oaicite:17]{index=17}`
      },
      {
        id: "4.30",
        question: `A 10 V battery of negligible internal resistance is connected in series opposing a 200 V battery and a 38 Ω resistor. Find the current.`,
        modelAnswer: `• Net emf = 200 – 10 = 190 V.  
    • I = 190 V / 38 Ω = 5.0 A.`,
        explanation: `When two cells oppose, subtract the smaller emf from the larger before applying I = E/R. :contentReference[oaicite:18]{index=18}`,
        commonMistakeTip: `Remember to subtract emfs for opposed cells, not add them. :contentReference[oaicite:19]{index=19}`
      }
  ]
  