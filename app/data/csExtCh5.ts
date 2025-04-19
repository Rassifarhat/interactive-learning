import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Explain the purpose of the Arithmetic and Logic Unit (ALU) in a CPU.",
  "id": "root",
  "children": [
    {
      "name": "Explain how the structure of a water molecule contributes to its properties as a solvent.",
      "id": "1-1",
      "children": [],
      "summary": "The water molecule is polar, with a partial negative charge on the oxygen atom and partial positive charges on the hydrogen atoms. This polarity allows water to form hydrogen bonds with other polar molecules and ions, effectively surrounding and separating them, which enhances its ability to dissolve a wide range of substances."
    },
    {
      "name": "Describe the stages of the fetch-execute cycle in a computer system.",
      "id": "1-2",
      "children": [
        {
          "name": "Processor fundamentals",
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
          "name": "Explain the basic Von Neumann model of a computer system and the stored program concept.",
          "id": "2-3",
          "children": [],
          "summary": "The Von Neumann model consists of a central processing unit (CPU), memory, and input/output devices. The stored program concept allows instructions and data to be stored in memory, enabling the CPU to fetch and execute instructions sequentially."
        }
      ],
      "summary": "The fetch-execute cycle consists of the following stages: 1. Fetch: The Control Unit retrieves the next instruction from the memory (Immediate Access Store) using the address bus. 2. Decode: The instruction is decoded to determine the operation to be performed. 3. Execute: The Arithmetic and Logic Unit (ALU) performs the operation specified by the instruction. 4. Store: The result is written back to memory or a register if necessary."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the basic features of the von Neumann architecture.",
      "id": "1-4",
      "children": [],
      "summary": "The von Neumann architecture includes a central processing unit (CPU) that has direct access to memory, which contains a stored program and data. The stored program consists of individual instructions that the CPU executes sequentially."
    },
    {
      "name": "Page 3",
      "id": "1-5",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main functions of the Arithmetic Logic Unit (ALU) and the Control Unit in a CPU?",
      "id": "1-6",
      "children": [
        {
          "name": "What are the two main components of the CPU and their primary functions?",
          "id": "2-4",
          "children": [],
          "summary": "The two main components of the CPU are the Arithmetic Logic Unit (ALU) and the Control Unit. The ALU is responsible for arithmetic and logic processing, while the Control Unit manages the flow of data and ensures program instructions are executed correctly."
        },
        {
          "name": "Explain the role of the Accumulator in a CPU and its significance in arithmetic operations.",
          "id": "2-5",
          "children": [],
          "summary": "The Accumulator is a general-purpose register that stores a single value for use by the Arithmetic Logic Unit (ALU) during operations. Its proximity to the ALU allows for rapid access, facilitating efficient arithmetic calculations."
        }
      ],
      "summary": "The ALU is responsible for performing arithmetic and logic operations, while the Control Unit manages the flow of data within the CPU and ensures correct handling of program instructions."
    },
    {
      "name": "What is the function of the Memory Address Register (MAR) in a CPU?",
      "id": "1-7",
      "children": [],
      "summary": "The MAR stores the address of a memory location or an I/O component that is about to have a value read from or written to."
    },
    {
      "name": "Page 5",
      "id": "1-8",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe the function of the address bus in a computer system.",
      "id": "1-9",
      "children": [
        {
          "name": "What is the function of the address bus in a computer system?",
          "id": "2-6",
          "children": [],
          "summary": "The address bus carries an address from the MAR to specify a location in memory or an I/O component for data transfer."
        },
        {
          "name": "What is the function of the data bus in a computer system?",
          "id": "2-7",
          "children": [],
          "summary": "The data bus carries data, which can be instructions, addresses, or values, between the CPU, memory, and I/O devices."
        },
        {
          "name": "What is the primary function of the control bus in a computer system?",
          "id": "2-8",
          "children": [],
          "summary": "The control bus transmits signals from the control unit to other components and carries timing signals to synchronize data transmission."
        }
      ],
      "summary": "The address bus carries addresses from the MAR to specify memory or I/O locations for data transfer; it is a one-way bus that cannot send addresses back to the CPU."
    },
    {
      "name": "Page 6",
      "id": "1-10",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "a) Identify the three components referred to in the laptop specification of $4 \\mathrm{~GB}, 1 \\mathrm{~TB}, 1.7 \\mathrm{~GHz}$. b) Calculate the minimum time period that could separate successive activities on this system.",
      "id": "1-11",
      "children": [
        {
          "name": "a) Identify the three components referred to in the advertisement for the laptop computer: $4 \text{GB}$, $1 \text{TB}$, $1.7 \text{GHz}$. b) Calculate the minimum time period that could separate successive activities on this system.",
          "id": "2-9",
          "children": [],
          "summary": "a) 4 GB (RAM), 1 TB (hard drive/storage), 1.7 GHz (processor speed). b) Minimum time period = 1/(1.7 x 10^9) seconds = approximately 0.588 ns."
        },
        {
          "name": "What is the bus width of a typical modern computer system and how does it affect data transfer rates?",
          "id": "2-10",
          "children": [],
          "summary": "A typical modern computer system has a bus width of 32 or 64 bits. A wider bus allows more data to be transferred simultaneously, increasing the data transfer rate."
        }
      ],
      "summary": "a) 4 GB refers to RAM, 1 TB refers to storage (hard drive or SSD), and 1.7 GHz refers to the processor clock speed. b) Minimum time period = 1 / (1.7 \\times 10^9) seconds = 5.88 \\times 10^{-10} seconds or 0.588 nanoseconds."
    },
    {
      "name": "Page 7",
      "id": "1-12",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the key features of the Universal Serial Bus (USB) standard and how does it facilitate the connection of peripheral devices to a computer?",
      "id": "1-13",
      "children": [
        {
          "name": "Explain the significance of the Universal Serial Bus (USB) standard in the context of plug-and-play technology.",
          "id": "2-11",
          "children": [],
          "summary": "The USB standard is significant because it allows users to connect peripherals easily without needing technical expertise, fulfilling the plug-and-play concept."
        },
        {
          "name": "Explain the significance of the USB standard in terms of device connectivity and data transmission.",
          "id": "2-12",
          "children": [],
          "summary": "The USB standard allows for a hierarchical connection of up to 127 devices to a computer, enabling hot-swapping and automatic configuration, which facilitates easy data transmission and device management."
        },
        {
          "name": "Identify two USB storage devices, their USB technology, and potential data transfer speeds. Compare these speeds with the access speed of an internal hard drive.",
          "id": "2-13",
          "children": [],
          "summary": "Device 1: USB 3.0 flash drive, potential speed up to 5 Gbps. Device 2: USB 3.1 external SSD, potential speed up to 10 Gbps. Internal hard drive access speed typically around 100-200 MBps (0.1-0.2 Gbps). USB devices offer significantly higher data transfer speeds compared to internal hard drives."
        },
        {
          "name": "Explain why a VGA port is not suitable for displaying video on a second screen.",
          "id": "2-14",
          "children": [],
          "summary": "The VGA port does not transmit audio, which is necessary for video playback."
        }
      ],
      "summary": "The USB standard supports a hierarchy of connections with the computer at the root, allowing up to 127 devices to be connected. It enables plug-and-play functionality, allowing devices to be attached while the computer is on and automatically configured for use. USB drives store data and connect via USB ports, facilitating data transmission along the bus."
    },
    {
      "name": "Page 8",
      "id": "1-14",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe the fetch stage of the fetch, decode and execute cycle in a CPU.",
      "id": "1-15",
      "children": [],
      "summary": "In the fetch stage, the address in the program counter is transferred to the MAR, the instruction at that address is fetched into the MDR while the program counter is incremented, and the instruction in the MDR is then transferred to the CIR."
    },
    {
      "name": "What is the molar mass of water (H₂O)?",
      "id": "1-16",
      "children": [],
      "summary": "The molar mass of water is 18.02 g/mol."
    },
    {
      "name": "Page 10",
      "id": "1-17",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the significance of the double pair of brackets around MAR in the register transfer notation example provided.",
      "id": "1-18",
      "children": [],
      "summary": "The double pair of brackets around MAR indicates that the content of the MAR is an address, and it is the content at that address that is being transferred to the MDR."
    },
    {
      "name": "Page 11",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the steps involved in handling an interrupt in a CPU?",
      "id": "1-20",
      "children": [
        {
          "name": "Describe the steps involved in handling an interrupt in a CPU.",
          "id": "2-15",
          "children": [],
          "summary": "1. Store the contents of the program counter and registers in memory. 2. Load the start address of the appropriate ISR into the program counter. 3. Execute the ISR. 4. Check for further interrupts. 5. If more interrupts exist, repeat the ISR execution; if none, restore the saved registers and resume the original program."
        },
        {
          "name": "What is the abbreviation for the special purpose register that holds the address of the next instruction to be executed?",
          "id": "2-16",
          "children": [],
          "summary": "The abbreviation is PC, which stands for Program Counter."
        },
        {
          "name": "Describe the main components of the von Neumann architecture and their functions.",
          "id": "2-17",
          "children": [],
          "summary": "The von Neumann architecture consists of a CPU (which includes a control unit, arithmetic and logic unit, and registers), a system bus (comprising data, address, and control buses), and memory. The CPU executes instructions through the fetch-execute cycle, while registers store data temporarily. The control unit manages the execution of instructions, and the arithmetic and logic unit performs calculations and logical operations."
        }
      ],
      "summary": "1. Store the contents of the program counter and registers in memory. 2. Load the start address of the appropriate Interrupt Service Routine (ISR) into the program counter. 3. Execute the ISR. 4. Check for further interrupts. 5. If no further interrupts, restore the stored registers and resume the original program."
    },
    {
      "name": "Page 12",
      "id": "1-21",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the name of the general-purpose register in a processor?",
      "id": "1-22",
      "children": [],
      "summary": "Accumulator (ACC)"
    },
    {
      "name": "Explain the actions of the processor when an interrupt is detected.",
      "id": "1-23",
      "children": [],
      "summary": "The processor checks if there is an interrupt. If the interrupt flag is set, the address of the Interrupt Service Routine (ISR) is loaded to the Program Counter (PC). The current register contents are saved, and when the ISR completes, the processor restores the register contents, allowing the interrupted program to continue its execution."
    }
  ],
  "summary": "The ALU is responsible for performing arithmetic operations (such as addition and subtraction) and logic operations (such as AND, OR, and NOT) on the data provided by the registers."
};

export default data;
