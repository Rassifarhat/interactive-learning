import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Convert the conditions in the following problem statement into a simple logic expression: A document can only be copied if it is not covered by copyright or if there is copyright and permission has been obtained.",
  "id": "root",
  "children": [
    {
      "name": "Explain the difference between a covalent bond and an ionic bond, providing one example of each.",
      "id": "1-1",
      "children": [],
      "summary": "A covalent bond is formed when two atoms share electrons, as seen in a water molecule (H2O). An ionic bond is formed when one atom transfers electrons to another, resulting in oppositely charged ions, as seen in sodium chloride (NaCl)."
    },
    {
      "name": "Construct the truth table for a logic circuit that consists of an AND gate followed by a NOT gate, with inputs A and B.",
      "id": "1-2",
      "children": [
        {
          "name": "Logic gates and logic circuits",
          "id": "2-1",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Construct the truth table for a logic circuit that consists of an AND gate followed by a NOT gate, with inputs A and B.",
          "id": "2-2",
          "children": [],
          "summary": "| A | B | A AND B | NOT (A AND B) |\n|---|---|---------|----------------|\n| 0 | 0 |    0    |        1       |\n| 0 | 1 |    0    |        1       |\n| 1 | 0 |    0    |        1       |\n| 1 | 1 |    1    |        0       |"
        }
      ],
      "summary": "| A | B | A AND B | NOT (A AND B) |\n|---|---|---------|----------------|\n| 0 | 0 |    0    |        1       |\n| 0 | 1 |    0    |        1       |\n| 1 | 0 |    0    |        1       |\n| 1 | 1 |    1    |        0       |"
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the difference between a conjunction and a disjunction in Boolean logic with examples.",
      "id": "1-4",
      "children": [],
      "summary": "A conjunction (AND) requires both propositions to be true for the overall statement to be true, e.g., 'It is raining AND the forecast is for rain later.' A disjunction (OR) requires at least one proposition to be true, e.g., 'It is raining OR the forecast is for rain later.'"
    },
    {
      "name": "Page 3",
      "id": "1-5",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Construct a logic expression for the following problem statement: A student will attend a lecture if they are enrolled in the course or if they have received a special invitation from the instructor.",
      "id": "1-6",
      "children": [
        {
          "name": "Construct a logic expression using the symbols A and B, and define the conditions for ordering a delivery of goods.",
          "id": "2-3",
          "children": [],
          "summary": "Delivery_order = A OR B OR (C AND D), where C = regular_customer and D = large_amount."
        }
      ],
      "summary": "Attend_lecture = TRUE IF (enrolled_in_course = TRUE) OR (special_invitation = TRUE)."
    },
    {
      "name": "Convert the conditions in the problem statement into a simple logic expression: A document can only be copied if it is not covered by copyright or if there is copyright and permission has been obtained.",
      "id": "1-7",
      "children": [],
      "summary": "C = not copyright, P = permission; X = C OR (copyright AND P)"
    },
    {
      "name": "Page 5",
      "id": "1-8",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Construct the truth table for the OR operator using the variables A and B, where X = A OR B.",
      "id": "1-9",
      "children": [
        {
          "name": "Construct a truth table for the logical expression A AND (B OR C).",
          "id": "2-4",
          "children": [],
          "summary": "The truth table should have columns for A, B, C, B OR C, and A AND (B OR C) with rows representing the binary combinations of A, B, and C from 000 to 111."
        },
        {
          "name": "Construct the truth table for the OR operator.",
          "id": "2-5",
          "children": [],
          "summary": "| A | B | A OR B |\n|---|---|--------|\n| 0 | 0 |   0    |\n| 0 | 1 |   1    |\n| 1 | 0 |   1    |\n| 1 | 1 |   1    |"
        }
      ],
      "summary": "| A | B | X |\n| :--: | :--: | :--: |\n| 0 | 0 | 0 |\n| 0 | 1 | 1 |\n| 1 | 0 | 1 |\n| 1 | 1 | 1 |"
    },
    {
      "name": "Page 6",
      "id": "1-10",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the function of a NAND gate in a digital circuit.",
      "id": "1-11",
      "children": [],
      "summary": "A NAND gate outputs a 0 only when all its inputs are 1; otherwise, it outputs a 1. It is equivalent to an AND gate followed by a NOT gate."
    },
    {
      "name": "Draw a circuit diagram showing inputs A and B going into an AND gate, then the output of the AND gate going into a NOT gate, resulting in output X. Explain how this configuration is equivalent to a NAND gate.",
      "id": "1-12",
      "children": [],
      "summary": "The output of the AND gate is A AND B, which is true only when both A and B are true. The NOT gate inverts this output, giving X = NOT(A AND B). A NAND gate directly outputs NOT(A AND B), thus both configurations yield the same result: X = A NAND B."
    },
    {
      "name": "Could the same outcome be produced by positioning a NOT gate before the AND gate?",
      "id": "1-13",
      "children": [
        {
          "name": "Describe the truth table for an AND gate and an OR gate.",
          "id": "2-6",
          "children": [],
          "summary": "The truth table for an AND gate shows that the output is true (1) only when both inputs are true (1). For an OR gate, the output is true (1) if at least one input is true (1)."
        },
        {
          "name": "Define the symbols and functions of the six basic logic gates: AND, OR, NOT, NAND, NOR, and XOR.",
          "id": "2-7",
          "children": [],
          "summary": "AND: A·B = 1 if both A and B are 1; OR: A+B = 1 if at least one of A or B is 1; NOT: A' = 1 if A is 0; NAND: A·B = 0 if both A and B are 1; NOR: A+B = 0 if both A and B are 0; XOR: A⊕B = 1 if A and B are different."
        },
        {
          "name": "WORKED EXAMPLE 4.02",
          "id": "2-8",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Construct a logic circuit based on the following conditions: A customer must have been with the bank for two years (A), and satisfy at least two of the following: is married (B), is aged 25 or older (C), or has parents who are customers (D).",
          "id": "2-9",
          "children": [],
          "summary": "The logic circuit should represent the expression A AND (((B AND C) OR (B AND D)) OR (C AND D)). This includes an AND gate for A and an OR gate for the combinations of B, C, and D."
        }
      ],
      "summary": "No, positioning a NOT gate before the AND gate would invert the input, changing the outcome of the logic expression."
    },
    {
      "name": "Describe how to construct a logic circuit using AND and OR gates based on a given logic expression.",
      "id": "1-14",
      "children": [],
      "summary": "To construct the logic circuit, identify the number of AND and OR gates required from the logic expression. Use four AND gates and two OR gates to represent the inputs and outputs as specified in the problem statement."
    },
    {
      "name": "Construct a truth table for a logic circuit with three inputs A, B, and C, showing all possible combinations of inputs and the corresponding output X.",
      "id": "1-15",
      "children": [
        {
          "name": "Construct the truth table for a circuit with three inputs A, B, and C, showing all possible combinations and the output X.",
          "id": "2-10",
          "children": [],
          "summary": "The truth table should include all 8 combinations of A, B, and C (000, 001, 010, 011, 100, 101, 110, 111) and the corresponding output X based on the circuit logic."
        }
      ],
      "summary": "The truth table should include 8 rows representing all combinations of A, B, and C (000, 001, 010, 011, 100, 101, 110, 111) and the output X for each combination based on the logic circuit's behavior."
    },
    {
      "name": "Using the truth table provided, derive the logic expression for the output X in terms of inputs A, B, and C.",
      "id": "1-16",
      "children": [],
      "summary": "X = A'B'C + A'BC' + AB'C'"
    },
    {
      "name": "Using the truth table provided, derive the logical expression for the output in terms of inputs A, B, and C.",
      "id": "1-17",
      "children": [],
      "summary": "Output = (NOT A AND NOT B AND C) OR (NOT A AND B AND C) OR (A AND NOT B AND NOT C)"
    },
    {
      "name": "Draw a logic circuit that activates a warning light if the thermometer is in range (C=1) and either the fan (A=0) or the internal light (B=0) is not working.",
      "id": "1-18",
      "children": [],
      "summary": "The circuit should have an AND gate for C=1 and an OR gate for (A=0) or (B=0). Connect the output of the OR gate to the input of the AND gate along with C. The output of the AND gate activates the warning light."
    },
    {
      "name": "Page 11",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the relationship between logic gates and Boolean operators, and how truth tables are used to represent the outcomes of logic expressions.",
      "id": "1-20",
      "children": [
        {
          "name": "Explain the relationship between logic expressions, truth tables, and logic circuits in the context of Boolean algebra.",
          "id": "2-11",
          "children": [],
          "summary": "Logic expressions are mathematical representations of logic propositions using Boolean operators. Truth tables provide a systematic way to represent the output of these expressions for all possible input combinations. Logic circuits are physical implementations of logic expressions, constructed using logic gates that perform the same operations as the Boolean operators in the expressions."
        }
      ],
      "summary": "Logic gates perform operations that correspond to Boolean operators (AND, OR, NOT). Truth tables systematically list all possible input combinations and their corresponding outputs, allowing for the representation of logic expressions derived from these outputs."
    },
    {
      "name": "Page 12",
      "id": "1-21",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Identify each of the logic gates shown in the images provided.",
      "id": "1-22",
      "children": [],
      "summary": "Gate 1: AND, Gate 2: OR, Gate 3: NOT."
    },
    {
      "name": "Complete the truth table for the logic circuit described in part (a).",
      "id": "1-23",
      "children": [],
      "summary": "| A | B | C | X |\n|---|---|---|---|\n| 0 | 0 | 0 | 1 |\n| 0 | 0 | 1 | 1 |\n| 0 | 1 | 0 | 1 |\n| 0 | 1 | 1 | 0 |\n| 1 | 0 | 0 | 1 |"
    },
    {
      "name": "Complete the truth table for the logic expression X is 1 IF (B is NOT 1 AND S is NOT 1) OR (P is NOT 1 AND S is 1).",
      "id": "1-24",
      "children": [],
      "summary": "| B | S | P | X |\n|---|---|---|---|\n| 0 | 0 | 0 | 1 |\n| 0 | 0 | 1 | 1 |\n| 0 | 1 | 0 | 0 |\n| 0 | 1 | 1 | 0 |\n| 1 | 0 | 0 | 1 |\n| 1 | 0 | 1 | 1 |\n| 1 | 1 | 0 | 0 |\n| 1 | 1 | 1 | 0 |"
    },
    {
      "name": "Page 15",
      "id": "1-25",
      "children": [],
      "summary": "\n\n\n"
    }
  ],
  "summary": "Let A represent 'not covered by copyright' and B represent 'permission obtained'. The logic expression is: X = A OR (NOT A AND B)."
};

export default data;
