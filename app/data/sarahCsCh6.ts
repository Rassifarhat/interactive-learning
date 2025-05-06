import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "learning-objectives",
  "id": "root",
  "children": [
    {
      "name": "Discuss the advantages and disadvantages of using assembly language compared to machine code.",
      "id": "1",
      "summary": "Advantages of using assembly language include:\n1. **Ease of Coding**: Assembly language provides mnemonics and symbolic representation which are easier to write and understand compared to raw machine code.\n2. **Error Reduction**: Programmers are less likely to make errors as they deal with symbolic names instead of binary values.\n3. **Readable Code**: Assembly language allows for comments and labels, which enhance readability and make debugging easier.\n4. **Control Over Hardware**: Assembly allows very fine control over hardware and system resources, enabling optimizations.\n5. **Features**: Use of macros and directives enables more complex and reusable code structures.\n\nDisadvantages of using assembly language include:\n1. **Complexity for Large Programs**: Larger programs can become cumbersome and hard to manage due to the low-level nature of assembly language.\n2. **Portability Issues**: Code written in assembly language is not portable across different architectures due to hardware-specific instructions.\n3. **Time-Consuming Development**: Writing and debugging in assembly language can take longer compared to high-level languages.\n4. **Instruction Set Variability**: Each processor has its own instruction set, making it necessary to rewrite code for different processors.\n5. **Limited Instructions**: Assembly language might lack built-in functions for complex operations that higher-level languages provide easily.",
      "children": []
    },
    {
      "name": "Explain the components of a machine code instruction and how they are structured in a simple system with one or zero operands.",
      "id": "2",
      "summary": "A machine code instruction consists of a sequence of instructions recognized by the CPU. Each instruction contains an opcode, which defines the operation to be performed. An instruction may not have any operands, but it can have up to three operands. The structure of a machine code instruction varies between different processors due to different instruction sets. However, the coding of comparable instructions for the same operations may differ. For a specific processor, the following must be defined for each machine code instruction: the total number of bits or bytes for the whole instruction, the number of bits that define the opcode, the number of operands that are defined in the remaining bits, and whether the opcode occupies the most significant or least significant bits. In a simple system assumed to have a 16-bit address bus width and an accumulator as the only general-purpose register, the number of bits needed for the opcode depends on the number of different opcodes available. A sensible instruction format might include an 8-bit opcode, divided into four bits for the operation, two bits for the address mode, and two bits for addressing registers. This allows for 16 different operations, each with one of four addressing modes. The opcode typically occupies the most significant bits, while the operand is allocated 16 bits, corresponding to the address bus. When an instruction is fetched into the CPU, the control unit checks the opcode to determine the action, described using register transfer notation.",
      "children": []
    },
    {
      "name": "6 02 Assembly Language",
      "id": "3",
      "children": [
        {
          "name": "Discuss the arguments for and against the use of assembly language in programming given that writing a program in assembly language is much easier than using machine code.",
          "id": "3-1",
          "summary": "Arguments for the use of assembly language include: 1. Performance: Assembly language can produce highly optimized code that runs faster and is more efficient in terms of resource usage compared to high-level languages. 2. Control: It allows programmers to have fine-grained control over hardware, which is essential for system-level programming, embedded systems, or performance-critical applications. 3. Understanding: Learning assembly language helps programmers understand how computers operate at a low level, including memory management and CPU instructions. 4. Existing Code: Many legacy systems and applications are written in assembly language, and maintaining or updating these systems may require knowledge of assembly. \n\nArguments against the use of assembly language include: 1. Complexity: Assembly language is more complex and less readable than high-level programming languages, making it harder to write, debug, and maintain code. 2. Development Speed: Writing programs in assembly language is often time-consuming compared to using high-level languages, which provide more abstract ways to achieve the same results. 3. Portability: Programs written in assembly language are generally not portable across different hardware architectures, while high-level languages can be more easily adapted to run on different systems. 4. Declining Use: As compilers and development tools for high-level languages have improved, the need for assembly language has decreased, leading many to argue that the skill set is declining in relevance for most programming tasks.",
          "children": []
        }
      ]
    },
    {
      "name": "Explain the differences between symbolic, relative, and absolute addressing in assembly language with examples.",
      "id": "4",
      "summary": "Symbolic addressing allows programmers to use labels instead of specific memory addresses. For instance, in the assembly program, instructions such as 'STO MAX' store data at a labeled address ('MAX') without the programmer worrying about the actual memory location. The assembler translates these labels to the correct memory addresses, making the code more readable and easier to maintain.\n\nRelative addressing uses offsets from a base address stored in a special-function base register (BR). For example, an instruction like 'STO [BR] + 15' stores a value relative to the base address held in BR. This flexibility allows code relocation without modification of absolute addresses.\n\nAbsolute addressing specifies the exact memory address directly. An instruction like 'STO 215' points to the specific memory location, which means the program must know the exact address where data is stored, reducing flexibility if the program needs to be relocated. \n\nIn summary:\n- Symbolic addressing uses labels that the assembler resolves into actual addresses. \n- Relative addressing calculates addresses based on a base register, allowing for more flexible program relocation.\n- Absolute addressing directly specifies exact memory addresses, making the code less versatile.",
      "children": []
    },
    {
      "name": "Explain the process of a two-pass assembler and describe the role of the symbol table.",
      "id": "5",
      "summary": "The assembly process for a two-pass assembler involves several steps to prepare assembly language code for translation into machine code. In the first pass, the assembler performs the following tasks: removal of comments from the code, replacement of any macro names with their corresponding macro definitions, and removal and storage of directives that will be processed later. The assembler reads the code line by line and uses a symbol table to keep track of symbolic addresses that are referenced but not yet defined. When a symbolic address is encountered for the first time, it is added to the symbol table along with its corresponding offset, which is determined by the current instruction count. For example, if the label 'STRTLP' is encountered at instruction offset +7, this entry is made in the symbol table. The symbol table format may look like this: | Symbol | Offset | | MAX | +15 | | TOTAL | +16 | | COUNT | +17 | | STRTLP | +7 |. In the second pass, the assembler uses the previously created symbol table and a lookup table containing the binary codes for each opcode. The output from the second pass is the machine code which includes the address translations based on the entries in the symbol table. It is noteworthy that most instructions have a 16-bit binary operand representing either an address or a value, with specific exceptions like the IN and END instructions, which have no operands. Additionally, the code is structured with the first instruction starting at address zero, and while the output is not executable in this form, it serves as valid output from the assembler. Finally, three memory locations after the program code are allocated a value zero to ensure they are available for use during program execution.",
      "children": []
    },
    {
      "name": "Describe the four addressing modes used in a simple processor and provide examples for each.",
      "id": "6",
      "summary": "The four addressing modes used in a simple processor are as follows: 1. Immediate: The operand is the value to be used in the instruction. Example: SUB #48, where #48 specifies the denary value 48. Other formats include #B00110000 for binary and #&30 for hexadecimal. 2. Direct: The operand is the address which holds the value to be used in the instruction. Example: ADD TOTAL, where TOTAL is the address containing the value. 3. Indirect: The operand is an address that holds the address which has the value to be used in the instruction. 4. Indexed: The operand is an address to which must be added the value currently in the index register (IX) to get the address that holds the value to be used in the instruction.",
      "children": []
    },
    {
      "name": "6 06 Assembly Language Instructions",
      "id": "7",
      "children": [
        {
          "name": "Explain the different types of data movement instructions and provide examples of how these instructions work in memory.",
          "id": "7-1",
          "summary": "Data movement instructions include operations that involve loading data into registers or storing data in memory. The instructions and their opcodes include: LDM #n (Immediate addressing, loading number n to ACC), LDR #n (Immediate addressing, loading number n to IX), LDD <address> (Direct addressing, loading the contents at the given address to ACC), LDI <address> (Indirect addressing, loading the contents of the address found at the given address to ACC), LDX <address> (Indexed addressing, copying contents from a calculated address of <address> + index register to ACC), MDV <register> (Moving contents from ACC to the specified register, such as IX), and STO <address> (Storing contents of ACC at the specified address). In memory, for example, using LDD 103 loads the value 110 from memory address 103 into the accumulator. Similarly, using LDI 106 loads the value 208 from address 101 into the accumulator, and the STO 106 instruction will store that value (208) into address 106. An additional example shows LDD INDEXVALUE (loading value 3 into ACC), MOV IX (transferring that value from ACC to IX), and LDX 102 (loading from the address calculated from 102 + index register). Each instruction serves specific functions essential for manipulating data within a program.",
          "children": []
        }
      ]
    },
    {
      "name": "Input And Output",
      "id": "8",
      "children": [
        {
          "name": "Describe the formats of jump and compare instructions in assembly language.",
          "id": "8-1",
          "summary": "| Instruction opcode | Instruction operand | Explanation |\n| :--: | :--: | :--: |\n| JMP | <address> | Jump to the given address |\n| CMP | <address> | Compare the contents of ACC with the contents of <address> |\n| CMP | #n | Compare the contents of ACC with the number n |\n| CMI | <address> | Indirect addressing. The address to be used is at the given address. Compare the contents of ACC with the contents of this second address |\n| JPE | <address> | Following a compare instruction, jump to <address> if the compare was True |\n| JPN | <address> | Following a compare instruction, jump to <address> if the compare was False |\n\nNote that the comparison is restricted to asking if two values are equal. The result of the comparison is recorded by a flag in the status register. The execution of the conditional jump instruction begins by checking whether or not the flag bit has been set. This jump instruction does not cause an immediate jump. This is because a new value has to be supplied to the program counter so that the next instruction is fetched from this newly specified address. The incrementing of the program counter that took place automatically when the instruction was fetched is overwritten.",
          "children": []
        },
        {
          "name": "Describe the instruction formats used for arithmetic operations, including details on addition, subtraction, increment, and decrement.",
          "id": "8-2",
          "summary": "The instruction formats for arithmetic operations are as follows: \n\n1. **Addition (ADD):** \n   - `ADD <address>`: Adds the contents of the given address to the ACC (Accumulator). \n   - `ADD #n`: Adds the denary number n to the ACC. \n\n2. **Subtraction (SUB):** \n   - `SUB <address>`: Subtracts the contents of the given address from the ACC. \n   - `SUB #n`: Subtracts the denary number n from the ACC. \n\n3. **Increment (INC):** \n   - `INC <register>`: Adds 1 to the contents of the specified register (either ACC or IX). \n\n4. **Decrement (DEC):** \n   - `DEC <register>`: Subtracts 1 from the contents of the specified register (either ACC or IX). \n\nAdditionally, there are notes regarding a program that calculates how many times 5 divides into 75: \n- The first three instructions initialise the count and the sum. \n- The instruction at address 103 is the point returned to in each loop iteration, and initially loads the value 0 into the accumulator, although this is unavoidable since the value is already stored.",
          "children": []
        }
      ]
    },
    {
      "name": "Memory Address Memory Content",
      "id": "9",
      "children": [
        {
          "name": "Describe the functions and consequences of logical shift operations in a simple processor.",
          "id": "9-1",
          "summary": "There are two shift instructions available: LSL (Logical Shift Left) and LSR (Logical Shift Right). In a logical shift, no consideration is given to what the binary code in the accumulator represents. During a left logical shift (LSL), the most significant bit (MSB) moves to the carry bit, the remaining bits are shifted left, and a zero is entered for the least significant bit (LSB). In a right logical shift (LSR), the least significant bit moves to the carry bit, and a zero is entered for the most significant bit. If the accumulator contains an unsigned integer, a left shift acts as a fast way to multiply by two, but this is only correct if the MSB is zero. The right logical shift represents integer division by two; for example, shifting 00110001 (denary 49) right gives 00011000 (denary 24), with the remainder in the carry bit. However, continued right shifts will eventually result in zeros for every bit. A logical shift cannot be reliably used for signed integers, as it may alter the sign of the number. Only logical shifts are available in simple processors; more complex processors may have cyclic shifts (where bits wrap around) and arithmetic shifts that preserve the sign bit for signed integer multiplication or division by two.",
          "children": []
        }
      ]
    },
    {
      "name": "Describe the bitwise logic operation instructions and explain the role of the operand in these operations.",
      "id": "10",
      "summary": "The bitwise logic operation instructions are as follows: \n\n1. AND: \n   - #Bn: This performs a bitwise AND operation of the contents of the accumulator (ACC) with the binary number n. \n   - <address>: This performs a bitwise AND operation of the contents of the ACC with the contents at the specified memory address. \n\n2. XOR: \n   - #Bn: This performs a bitwise XOR operation of the contents of the ACC with the binary number n. \n   - <address>: This performs a bitwise XOR operation of the contents of the ACC with the contents at the specified memory address. \n\n3. OR: \n   - #Bn: This performs a bitwise OR operation of the contents of the ACC with the binary number n. \n   - <address>: This performs a bitwise OR operation of the contents of the ACC with the contents at the specified memory address. \n\nThe operand for a bitwise logic operation instruction is referred to as a 'mask' because it can effectively cover some of the bits and only affect specific bits. This allows for selective manipulation of bits in the accumulator based on the given input.",
      "children": []
    },
    {
      "name": "6 07 Further Consideration Of Assembly Language Instructions",
      "id": "11",
      "children": [
        {
          "name": "Use register transfer notation to describe the execution of an LDI instruction.",
          "id": "11-1",
          "summary": "A C C = [IR(15: 0)]",
          "children": []
        },
        {
          "name": "What are the roles of the carry flag, negative flag, and overflow flag in computer arithmetic?",
          "id": "11-2",
          "summary": "The carry flag, identified as C, is set to 1 if there is a carry during arithmetic operations. The negative flag, identified as N, is set to 1 if the result of an operation is negative. The overflow flag, identified as V, is set to 1 if an overflow condition is detected during computation. These flags are essential for identifying specific overflow conditions and ensuring accurate results in computer arithmetic.",
          "children": []
        },
        {
          "name": "WORKED EXAMPLE 6.01",
          "id": "11-3",
          "summary": "Full mark-scheme answer for the worked example goes here.",
          "children": []
        },
        {
          "name": "Explain how the status register detects overflow and other errors during binary arithmetic operations.",
          "id": "11-4",
          "summary": "During the addition of two positive values using an eight-bit binary integer representation, if the resulting sum exceeds the representable range, an overflow condition can be detected. For example, adding denary 66 to denary 68 results in a value that cannot be correctly identified with 8 bits, producing denary -122 instead. This impossibility is flagged by having both the negative flag and the overflow flag set to 1. The processor monitors these flags, identifies the overflow issue, and generates an interrupt. Similarly, when adding two negative numbers, such as -66 and -68, the outcome is +122, which is invalid as the expected result should also be negative. This is identified by the negative flag not being set, while both the overflow and carry flags are set to 1. Hence, the status register plays a crucial role in error detection during arithmetic operations by examining the relevant flags.",
          "children": []
        }
      ]
    },
    {
      "name": "Extension Question 6 01",
      "id": "12",
      "children": [
        {
          "name": "Explain the process of tracing an assembly language program to check for errors.",
          "id": "12-1",
          "summary": "One effective method for checking if an assembly language program contains errors is to conduct a dry (practice) run of the program. The primary focus during this process is to monitor how the contents of the accumulator change while the program is running. This allows for the identification of any potential errors in the program's logic or execution. Two worked examples can illustrate this tracing process clearly.",
          "children": []
        },
        {
          "name": "Trace the execution of the given assembly language program and fill in the trace table based on the described inputs.",
          "id": "12-2",
          "summary": "The execution of the assembly language program can be traced through the following steps, with the given user inputs of 15, 27, and 31. Each instruction is processed in sequence, and the trace table demonstrates the changes in the accumulator, memory locations, and output at each stage.\n\n1. **Input** (15) - Load the value into the accumulator:\n   - Accumulator = 15\n\n2. **STO 200** - Store the value in memory location 200:\n   - Memory location 200 = 15\n\n3. **Input** (27) - Load the next value into the accumulator:\n   - Accumulator = 27\n\n4. **STO 201** - Store the value in memory location 201:\n   - Memory location 201 = 27\n\n5. **Input** (31) - Load the final value into the accumulator:\n   - Accumulator = 31\n\n6. **ADD 200** - Add the value from memory location 200 to the accumulator:\n   - Accumulator = 31 + 15 = 46\n\n7. **STO 200** - Store the new value in memory location 200:\n   - Memory location 200 = 46\n\n8. **ADD 201** - Add the value from memory location 201 to the accumulator:\n   - Accumulator = 46 + 27 = 73\n\n9. **INC ACC** - Increment the accumulator by 1:\n   - Accumulator = 73 + 1 = 74\n\n10. **OUT** - Output the value in the accumulator:\n    - Output = 74\n\n11. **END** - End of the program execution.\n\nThe trace table is completed as follows:\n| Accumulator | Memory location 200 | Memory location 201 | Output |\n| --- | --- | --- | --- |\n| 15 |   |   |   |\n|   | 15 |   |   |\n| 27 |   |   |   |\n|   |   | 27 |   |\n| 31 |   |   |   |\n| 46 |   |   |   |\n|   | 46 |   |   |\n| 73 |   |   |   |\n|   |   |   | 74 |\n|   |   |   |   |",
          "children": []
        }
      ]
    },
    {
      "name": "Worked Example 6 03",
      "id": "13",
      "children": [
        {
          "name": "Trace the execution of the program shown in memory locations 100 to 107 and describe the contents of the program counter (PC), the accumulator (ACC), and memory location 203 at each step.",
          "id": "13-1",
          "summary": "1. At address 100, the instruction 'LDD 200' is executed, loading the value from memory location 200 (which is 0001) into the ACC. The PC increments to 101. ACC = 0001, PC = 101, Memory[203] = (unchanged).\n\n2. At address 101, the instruction 'INC ACC' is executed, incrementing the ACC by 1 (0001 becomes 0010). The PC increments to 102. ACC = 0010, PC = 102, Memory[203] = (unchanged).\n\n3. At address 102, the instruction 'ADD 201' is executed, adding the value from memory location 201 (which is 0011) to the ACC (0010 + 0011 = 0101). The PC increments to 103. ACC = 0101, PC = 103, Memory[203] = (unchanged).\n\n4. At address 103, the instruction 'CMP 202' is executed, comparing the ACC (0101) with the value in memory location 202 (which is 0101). There is no change to the ACC, but the PC increments to 104. ACC = 0101, PC = 104, Memory[203] = (unchanged).\n\n5. At address 104, the instruction 'JPE 106' is executed as the comparison from the previous step was true (ACC = 0101 is equal to memory[202] = 0101). The PC is set to 106 instead of incrementing. ACC = 0101, PC = 106, Memory[203] = (unchanged).\n\n6. At address 106, the instruction 'INC ACC' is executed, incrementing the ACC by 1 (0101 becomes 0110). The PC increments to 107. ACC = 0110, PC = 107, Memory[203] = (unchanged).\n\n7. At address 107, the instruction 'STO 203' is executed, storing the current value of the ACC (0110) into memory location 203. The PC increments to 108. ACC = 0110, PC = 108, Memory[203] = 0110.",
          "children": []
        }
      ]
    },
    {
      "name": "Question 6 01",
      "id": "14",
      "children": [
        {
          "name": "How do the topics in this chapter relate to the content in earlier chapters?",
          "id": "14-1",
          "summary": "To understand the relationships between the topics in this chapter and earlier chapters, it is essential to review the previous content for connections and references. This includes identifying key concepts that are reiterated, understanding how theories or principles from earlier chapters apply to the current chapter, and recognizing any patterns or themes that link the chapters together. For example, if earlier chapters discussed foundational theories, see how they are expanded upon in this chapter. It's important to ensure a clear comprehension of these connections to fully grasp the material.",
          "children": []
        },
        {
          "name": "What are the components of a machine code instruction and how is an assembly language program structured?",
          "id": "14-2",
          "summary": "A machine code instruction consists of an opcode and an operand. An assembly language program contains assembly language instructions plus directives that provide information to the assembler.",
          "children": []
        }
      ]
    },
    {
      "name": "Consider the instruction LDO 103. i Draw arrows on a copy of the diagram below to explain execution of the instruction. ii Give the contents of the accumulator as a denary value after execution of the instruction.",
      "id": "15",
      "summary": "i To explain the execution of the instruction LDO 103: 1. Locate memory address 103 in the memory table. 2. The content at memory address 103 is 110. 3. Load the content (110) into the accumulator. 4. The accumulator will now have the value 110. ii After executing the instruction, the contents of the accumulator will be 110.",
      "children": []
    }
  ]
};

export default data;