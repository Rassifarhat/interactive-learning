import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "What are the benefits and drawbacks of the waterfall model in software development?",
  "id": "root",
  "children": [
    {
      "name": "Page 1",
      "id": "1-1",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the purpose of a structure chart in program development.",
      "id": "1-2",
      "children": [
        {
          "name": "Software development",
          "id": "2-1",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Learning objectives",
          "id": "2-2",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "What are the main stages of the program development life cycle and what is the purpose of each stage?",
          "id": "2-3",
          "children": [],
          "summary": "The main stages are analysis (gathering requirements), design (creating architecture and specifications), coding (writing the actual code), testing (verifying functionality and finding errors), and maintenance (updating and fixing issues post-deployment). Each stage ensures a systematic approach to software development."
        }
      ],
      "summary": "A structure chart visually represents the breakdown of a program into its sub-tasks and modules, illustrating the relationships and data flow between them, which aids in understanding and organizing complex systems."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main stages involved in developing a software program?",
      "id": "1-4",
      "children": [
        {
          "name": "Describe the steps involved in problem-solving as outlined in the text.",
          "id": "2-4",
          "children": [],
          "summary": "1. Investigate the issues and current system; define the problem clearly. 2. Plan a solution, considering multiple options. 3. Decide on a method to solve the problem using bottom-up or top-down approaches."
        },
        {
          "name": "Describe the process of preparing a solution for a chemical reaction, including the steps for calculating concentrations and dilutions.",
          "id": "2-5",
          "children": [],
          "summary": "To prepare a solution, first calculate the required mass of solute using the formula: mass = concentration × volume. Next, weigh the solute accurately, then dissolve it in a small volume of solvent. Finally, transfer the solution to a volumetric flask and make up to the desired volume with solvent, ensuring thorough mixing."
        },
        {
          "name": "Explain the process of debugging in programming and its importance in ensuring a program functions as intended.",
          "id": "2-6",
          "children": [],
          "summary": "Debugging is the process of identifying and fixing errors or bugs in a program's code. It is important because it ensures the program runs correctly and meets its intended purpose, leading to reliable and accurate outputs."
        },
        {
          "name": "Explain the difference between the waterfall model and the iterative model in software development.",
          "id": "2-7",
          "children": [],
          "summary": "The waterfall model is a linear and sequential approach where each phase must be completed before the next begins, while the iterative model allows for repeated cycles (iterations) of development, enabling feedback and improvements at each stage."
        },
        {
          "name": "Discuss whether it is possible for all computer programs to be totally error-free.",
          "id": "2-8",
          "children": [],
          "summary": "It is generally accepted that it is not possible for all computer programs to be totally error-free due to the complexity of software, the limitations of testing, and the possibility of unforeseen circumstances or requirements. Even with rigorous testing, some errors may remain undetected."
        }
      ],
      "summary": "The main stages are: Analysis (defining the problem and requirements specification), Design (planning the solution and data structures), Coding (implementing the algorithm in a programming language), and Testing (ensuring the program works under all circumstances)."
    },
    {
      "name": "Page 3",
      "id": "1-5",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main benefits and drawbacks of the waterfall model in software development?",
      "id": "1-6",
      "children": [
        {
          "name": "What are two benefits and two drawbacks of the waterfall model as described in the text?",
          "id": "2-9",
          "children": [],
          "summary": "Benefits: 1) Simple to understand with clearly defined stages. 2) Easy to manage due to fixed stages with specific outcomes. Drawbacks: 1) No working software is produced until late in the life cycle. 2) Cannot accommodate changing requirements."
        }
      ],
      "summary": "Benefits: 1. Simple to understand with clearly defined stages. 2. Easy to manage due to fixed stages with specific outcomes. 3. Stages are processed one at a time. 4. Suitable for smaller projects with well-understood requirements. Drawbacks: 1. No working software until late in the cycle. 2. Not suitable for complex or object-oriented projects. 3. Poor for long or ongoing projects. 4. Cannot accommodate changing requirements."
    },
    {
      "name": "What are two disadvantages of the integration model in project management?",
      "id": "1-7",
      "children": [],
      "summary": "1. Difficult to measure progress within stages. 2. Late integration prevents early identification of technical or business issues."
    },
    {
      "name": "What are the main benefits of using an iterative life cycle model in software development?",
      "id": "1-8",
      "children": [
        {
          "name": "What are the key features of the Rapid Application Development (RAD) methodology?",
          "id": "2-10",
          "children": [],
          "summary": "RAD emphasizes minimal planning, uses prototyping, develops modules in parallel, integrates prototypes for faster delivery, incorporates iterative development cycles, and allows for changes during the development process."
        }
      ],
      "summary": "Early working model for identifying flaws, quick development of functionality, periodic results, planned parallel development, measurable progress, lower change costs, easier testing and debugging, risk management, operational product delivery, and customer feedback facilitation."
    },
    {
      "name": "What are the advantages and disadvantages of using Rapid Application Development (RAD) in software development?",
      "id": "1-9",
      "children": [],
      "summary": "Advantages include accommodating changing requirements, measurable progress, increased productivity, reduced development time, enhanced reusability of components, quick initial reviews, encouragement of customer feedback, and early integration. Disadvantages include the need for modular systems, highly skilled developers, suitability for component-based and scalable systems, continuous user involvement, and appropriateness for projects with shorter development times."
    },
    {
      "name": "Page 6",
      "id": "1-10",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Draw a structure chart for a module that inputs a number of kilometers and outputs the equivalent number of miles.",
      "id": "1-11",
      "children": [
        {
          "name": "Draw a structure chart for a program that inputs a number of kilometers and outputs the equivalent number of miles.",
          "id": "2-11",
          "children": [],
          "summary": "The structure chart should include a main module labeled 'Convert km to miles', with a sub-module for 'Input km', a sub-module for 'Calculate miles' (using the conversion factor 1 km = 0.621371 miles), and a sub-module for 'Output miles'. Control information can be shown to indicate the flow from input to calculation to output."
        }
      ],
      "summary": "The top-level box is 'Convert Km to Miles'. Level 1 has two sub-tasks: 'Input Km' (input parameter Km), and 'Calculate Miles' (input parameter Km, output parameter Miles). The 'OUTPUT Miles' sub-task receives the Miles parameter from 'Calculate Miles'."
    },
    {
      "name": "Explain the significance of the diamond shape and the semi-circular arrow in the structure charts presented in Figures 15.04 and 15.05.",
      "id": "1-12",
      "children": [],
      "summary": "The diamond shape represents a decision point where the flow of the program can branch based on a condition being True or False. The semi-circular arrow indicates a loop or repetition of the modules below it, showing that certain actions will be repeated until a specified condition is met."
    },
    {
      "name": "Amend the structure chart for the number-guessing game to include repeated guesses until the player guesses the secret number. What should be included in the structure chart to represent this functionality?",
      "id": "1-13",
      "children": [],
      "summary": "The structure chart should include a loop structure for 'Repeat Guessing' that calls the 'Get Guess' function and checks it against the 'Secret Number'. If the guess is incorrect, it should provide feedback and repeat the process until the correct guess is made."
    },
    {
      "name": "Page 8",
      "id": "1-14",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe the process of logging in using user IDs and passwords, including the handling of incorrect password attempts.",
      "id": "1-15",
      "children": [],
      "summary": "The user inputs a user ID, which is checked against the user ID list. If found, the corresponding password is retrieved. The user has three attempts to enter the correct password. If the password is correct, a success message is displayed. If all three attempts fail, a warning message is shown."
    },
    {
      "name": "Page 9",
      "id": "1-16",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the advantages of using local variables and parameters in modular programming.",
      "id": "1-17",
      "children": [
        {
          "name": "Write pseudocode to calculate the average of two numbers.",
          "id": "2-12",
          "children": [],
          "summary": "START\n  DECLARE num1, num2, average AS FLOAT\n  INPUT num1\n  INPUT num2\n  average = (num1 + num2) / 2\n  OUTPUT average\nEND"
        },
        {
          "name": "Explain how the concept of equilibrium applies to the reaction between nitrogen dioxide (NO2) and dinitrogen tetroxide (N2O4).",
          "id": "2-13",
          "children": [],
          "summary": "The reaction between NO2 and N2O4 is reversible and can reach a state of dynamic equilibrium where the rate of the forward reaction (NO2 to N2O4) equals the rate of the reverse reaction (N2O4 to NO2). Changes in temperature, pressure, or concentration can shift the position of equilibrium according to Le Chatelier's principle."
        }
      ],
      "summary": "Local variables and parameters make modules self-contained, preventing unintended side effects on global variables, enhancing code maintainability, and improving readability."
    },
    {
      "name": "Explain the process of determining whether a given quadrilateral is a rectangle using its diagonals. What properties of the diagonals are relevant?",
      "id": "1-18",
      "children": [],
      "summary": "To determine if a quadrilateral is a rectangle, check if the diagonals are equal in length and bisect each other. Measure the lengths of the diagonals using the distance formula; if they are equal, the quadrilateral may be a rectangle."
    },
    {
      "name": "Page 11",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe the behavior of the FSM when the input sequence 'ab' is applied starting from state S1.",
      "id": "1-20",
      "children": [],
      "summary": "Starting in state S1, input 'a' causes no change, remaining in S1. Then, input 'b' transforms the FSM to state S2."
    },
    {
      "name": "Describe the sequence of events that occurs when the sensor is activated while the system is in the 'System active' state.",
      "id": "1-21",
      "children": [],
      "summary": "When the sensor is activated, the system transitions from 'System active' to 'Alert mode'. The system will remain in 'Alert mode' for two minutes unless deactivated by entering the PIN."
    },
    {
      "name": "Explain the process of converting a positive binary integer to its two's complement representation.",
      "id": "1-22",
      "children": [],
      "summary": "To convert a positive binary integer to its two's complement representation, first write the binary equivalent of the integer. Then, if the integer is positive, the two's complement is the same as the original binary number, as two's complement is primarily used for representing negative numbers. For a positive integer, ensure the most significant bit (MSB) is 0."
    },
    {
      "name": "Explain the process of converting a binary integer to its two's complement negative equivalent using the method described in the provided text.",
      "id": "1-23",
      "children": [],
      "summary": "To convert a binary integer to its two's complement, output the bits up to the first 1 as is, then for each subsequent bit, output a 0 for each 1 and a 1 for each 0."
    },
    {
      "name": "What is the output from the FSM represented by the state-transition diagram in Figure 15.10, when the input is 0101?",
      "id": "1-24",
      "children": [
        {
          "name": "Does the FSM in Figure 15.10 work for converting a negative binary number into its positive equivalent?",
          "id": "2-14",
          "children": [],
          "summary": "No, the FSM does not work for converting a negative binary number into its positive equivalent as it is designed for a specific function that does not include sign conversion."
        }
      ],
      "summary": "The output is 1."
    },
    {
      "name": "Page 14",
      "id": "1-25",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main types of errors that can occur in software, and how can they be identified?",
      "id": "1-26",
      "children": [
        {
          "name": "What are the differences between syntax errors, logic errors, and run-time errors in programming?",
          "id": "2-15",
          "children": [],
          "summary": "Syntax errors occur when code does not follow the grammatical rules of the programming language, making them easy to identify during compilation. Logic errors arise when the program runs without crashing but produces incorrect results due to flawed logic. Run-time errors happen during program execution, causing the program to crash or freeze, often under specific conditions."
        }
      ],
      "summary": "The main types of errors in software are syntax errors, logic errors, and run-time errors. Syntax errors are identified by compilers or interpreters during code translation. Logic errors and run-time errors are more difficult to find and require careful testing, as they may only manifest under specific conditions."
    },
    {
      "name": "Page 15",
      "id": "1-27",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the main difference between black-box testing and white-box testing?",
      "id": "1-28",
      "children": [
        {
          "name": "What is the purpose of using stubs in user interface testing?",
          "id": "2-16",
          "children": [],
          "summary": "Stubs are used to simulate the behavior of incomplete procedures, allowing for testing of the user interface without full implementation."
        },
        {
          "name": "Explain the difference between white-box testing and black-box testing in software development.",
          "id": "2-17",
          "children": [],
          "summary": "White-box testing involves testing the internal structures or workings of a program, while black-box testing focuses on testing the functionality of the software without knowledge of its internal code."
        }
      ],
      "summary": "Black-box testing involves testing a program without knowledge of its internal code, focusing on input and output, while white-box testing requires knowledge of the code and its structure."
    },
    {
      "name": "Explain how the structure of an atom relates to its position in the periodic table.",
      "id": "1-29",
      "children": [],
      "summary": "The position of an atom in the periodic table is determined by its atomic number, which is the number of protons in the nucleus. This also indicates the number of electrons in a neutral atom, affecting its electron configuration and chemical properties."
    },
    {
      "name": "Describe the purpose of white-box testing in the context of the provided pseudocode example.",
      "id": "1-30",
      "children": [
        {
          "name": "WORKED EXAMPLE 15.03",
          "id": "2-18",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Given three numbers, describe how to determine the largest number using nested IF statements as shown in the pseudocode example. Provide an example with specific numbers to illustrate your explanation.",
          "id": "2-19",
          "children": [],
          "summary": "To determine the largest number among three inputs (Number1, Number2, Number3), compare them using nested IF statements. First, check if Number1 is greater than Number2. If true, then compare Number1 with Number3; if Number1 is also greater than Number3, output Number1 as the largest. If Number1 is not greater than Number3, output Number3. If Number1 is not greater than Number2, check if Number2 is greater than Number3; if true, output Number2, otherwise output Number3. For example, with inputs 15, 12, and 8, the output will be 15."
        }
      ],
      "summary": "White-box testing aims to verify that every path through the code is executed by using suitable test data, ensuring that all conditions and outputs are checked."
    },
    {
      "name": "Explain the significance of the nested IF statement in programming and provide an example of its use in decision-making processes.",
      "id": "1-31",
      "children": [],
      "summary": "The nested IF statement allows for multiple conditions to be evaluated in a structured manner, enabling complex decision-making. For example, in a grading system, a nested IF can determine letter grades based on a student's score: if the score is above 90, assign 'A'; if above 80 but below 90, assign 'B', and so on."
    },
    {
      "name": "What is the output message after the user guesses 55 in the number-guessing game?",
      "id": "1-32",
      "children": [
        {
          "name": "WORKED EXAMPLE 15.04",
          "id": "2-20",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Construct a trace table for the number-guessing game algorithm with the inputs 5 and 55.",
          "id": "2-21",
          "children": [],
          "summary": "| SecretNumber | Guess | NumberOfGuesses | Guess > SecretNumber | Message |\n| :-- | :-- | :-- | :-- | :-- |\n| 34 | 5 | 1 | FALSE | Guess a larger number: |\n|  | 55 | 2 | TRUE | Guess a smaller number: |"
        }
      ],
      "summary": "...smaller..."
    },
    {
      "name": "In a number-guessing game, if the user guesses 30 and the response is 'larger', what will be the next guess if the previous guess was 42 and the response was 'smaller'?",
      "id": "1-33",
      "children": [],
      "summary": "The next guess will be 36, as it is smaller than 42 and larger than 30."
    },
    {
      "name": "What is the purpose of the variable NoMoreSwaps in the bubble sort algorithm?",
      "id": "1-34",
      "children": [
        {
          "name": "WORKED EXAMPLE 15.05",
          "id": "2-22",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "What is the purpose of the variable NoMoreSwaps in the bubble sort algorithm?",
          "id": "2-23",
          "children": [],
          "summary": "NoMoreSwaps is used to determine if any swaps were made during a pass through the list. If no swaps occur, the algorithm concludes that the list is sorted and terminates."
        }
      ],
      "summary": "NoMoreSwaps is used to determine if any swaps were made during a pass through the list; if no swaps occur, the algorithm concludes that the list is sorted and terminates."
    },
    {
      "name": "Explain how the improved bubble sort algorithm works and discuss its efficiency compared to the standard bubble sort algorithm.",
      "id": "1-35",
      "children": [],
      "summary": "The improved bubble sort algorithm works by iterating through the list multiple times, comparing adjacent elements and swapping them if they are in the wrong order. The key improvement is that if no swaps are made during a pass, the algorithm can terminate early, indicating that the list is sorted. This reduces the number of unnecessary comparisons in best-case scenarios, making it more efficient than the standard bubble sort, which always performs n-1 passes regardless of the list's initial order."
    },
    {
      "name": "Complete the trace table for the function call ConvertFromHex('AS').",
      "id": "1-36",
      "children": [],
      "summary": "ValueSoFar: 0, HexLength: 2, i: 1, HexDigit: 'A', HexValue: 10; ValueSoFar: 10, i: 2, HexDigit: 'S', HexValue: 28; ValueSoFar: 188."
    },
    {
      "name": "What is the purpose of integration testing in software development?",
      "id": "1-37",
      "children": [],
      "summary": "Integration testing ensures that individual modules work together correctly when combined into a complete program."
    },
    {
      "name": "Page 21",
      "id": "1-38",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the three types of test data used in software testing and provide a brief explanation for each?",
      "id": "1-39",
      "children": [
        {
          "name": "WORKED EXAMPLE 15.06",
          "id": "2-24",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "What type of test data would be considered normal for the Pyramid Problem, and why?",
          "id": "2-25",
          "children": [],
          "summary": "Normal test data for the Pyramid Problem includes any odd positive integer greater than 1, such as 7, because it ensures the pyramid can be correctly formed."
        }
      ],
      "summary": "1. Normal (valid): Typical data values that are valid and should be accepted by the system. 2. Abnormal (erroneous): Data values that the system should not accept, such as negative numbers or non-integer values. 3. Boundary (extreme): Data values at the limits of the valid range, including values just inside (valid) and just outside (invalid) the boundary."
    },
    {
      "name": "Define what is meant by a boundary value in the context of programming and provide an example.",
      "id": "1-40",
      "children": [],
      "summary": "A boundary value is the smallest or largest value that is acceptable for a given input. For example, in the pyramid problem, the value 1 is a boundary value as it is the smallest number that can form a pyramid, while 79 is within the boundary for a maximum of 80 characters."
    },
    {
      "name": "Design test data for a number-guessing game.",
      "id": "1-41",
      "children": [
        {
          "name": "Explain how structured programming can help minimize errors in a software program.",
          "id": "2-26",
          "children": [],
          "summary": "Structured programming helps minimize errors by promoting clear control flow through the use of constructs like sequences, selections, and iterations, which makes the code easier to understand, test, and maintain."
        }
      ],
      "summary": "Test data should include a range of numbers (e.g., 1-100), edge cases (e.g., guessing the lowest and highest numbers), invalid inputs (e.g., negative numbers, non-numeric values), and repeated guesses to test the response for already guessed numbers."
    },
    {
      "name": "Page 23",
      "id": "1-42",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Design a trace table for the algorithm that converts a binary string to its denary value, and dry-run it using '101' as the input. Identify and correct any errors in the code.",
      "id": "1-43",
      "children": [
        {
          "name": "Identify the error in the algorithm that prevents it from correctly converting the binary string '101' to its denary value and provide the corrected version of the algorithm.",
          "id": "2-27",
          "children": [],
          "summary": "The error is in the line 'DenaryValue - DenaryValue + 2 + BitValue'. It should be 'DenaryValue - DenaryValue + 2^i * BitValue' to correctly calculate the denary value. The corrected line is 'DenaryValue = DenaryValue + 2^i * BitValue'."
        }
      ],
      "summary": "The trace table should include columns for i, Bit, BitValue, DenaryValue. For input '101', the values will be: \n- i=1, Bit='1', BitValue=1, DenaryValue=2+1=3 \n- i=2, Bit='0', BitValue=0, DenaryValue=3+2+0=5 \n- i=3, Bit='1', BitValue=1, DenaryValue=5+2+1=8. \nThe error is in the calculation of DenaryValue; it should be initialized to 0 before the loop and updated as DenaryValue = DenaryValue * 2 + BitValue."
    },
    {
      "name": "Page 24",
      "id": "1-44",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Design an algorithm for a computer to play as Player X in Connect 4.",
      "id": "1-45",
      "children": [],
      "summary": "1. Initialize game board as a 2D array. 2. Define a function to check for a win condition. 3. Define a function to check for a draw. 4. Define a function for the computer's move: a. Loop through columns from left to right. b. For each column, simulate dropping a piece. c. Check if this move results in a win. d. If it does, play this move. e. If no winning move, choose a random valid column. 5. Update the game board with the computer's move. 6. Check for win or draw after each move. 7. Alternate turns between Player O and Player X."
    },
    {
      "name": "Page 25",
      "id": "1-46",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Identify and correct the issues in the pseudocode provided to enhance its maintainability.",
      "id": "1-47",
      "children": [
        {
          "name": "Explain the process of dry-running a program and its benefits in debugging.",
          "id": "2-28",
          "children": [],
          "summary": "Dry-running involves manually stepping through a program's code, simulating its execution without actually running it on a computer. This helps identify logical errors, understand the flow of the program, and verify that the trace table accurately reflects the program's behavior."
        },
        {
          "name": "Explain the purpose of structure charts in program development and describe two types of control structures they represent.",
          "id": "2-29",
          "children": [],
          "summary": "Structure charts are used to represent the modular structure of solutions, showing how modules interact and the parameters passed between them. They represent control structures such as selection (where a module is called under certain conditions) and repetition (where modules are called repeatedly)."
        }
      ],
      "summary": "Replace 'Number1 - GetPositiveNumber' with 'Number1 := GetPositiveNumber()' and similarly for 'Number2'. Use a function to validate positive numbers to avoid code duplication. The revised pseudocode should include a separate function for validation."
    },
    {
      "name": "What is the difference between perfective maintenance and corrective maintenance in software development?",
      "id": "1-48",
      "children": [],
      "summary": "Perfective maintenance involves enhancing performance or maintainability, while corrective maintenance focuses on fixing bugs or defects in the software."
    },
    {
      "name": "Page 27",
      "id": "1-49",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the return value of the function call Binary(11)?",
      "id": "1-50",
      "children": [],
      "summary": "The return value is '1011'."
    },
    {
      "name": "Explain the purpose of a random number generator in the context of statistical testing and describe how you would validate its effectiveness.",
      "id": "1-51",
      "children": [],
      "summary": "A random number generator produces numbers that should ideally be uniformly distributed across a specified range. To validate its effectiveness, one would generate a large sample of numbers (e.g., 1000) and compare the actual frequency of each number (1 to 20) to the expected frequency (50 for 1000 tests). A chi-squared test can be used to assess whether the observed frequencies significantly differ from expected frequencies, indicating if the generator is biased."
    },
    {
      "name": "Explain the process of fractional distillation and its application in separating a mixture of liquids with different boiling points.",
      "id": "1-52",
      "children": [],
      "summary": "Fractional distillation involves heating a liquid mixture to create vapor, which is then cooled to separate components based on their boiling points. The component with the lowest boiling point vaporizes first and is collected, followed by higher boiling components. This technique is commonly used to separate crude oil into its fractions."
    }
  ],
  "summary": "Benefits: Simple to understand, easy to manage, stages are clearly defined, works well for smaller projects with well-understood requirements. Drawbacks: No working software until late in the cycle, poor for complex projects, cannot accommodate changing requirements, difficult to measure progress within stages."
};

export default data;
