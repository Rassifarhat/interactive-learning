import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Identify the type of system that the farmer has had installed.",
  "id": "root",
  "children": [
    {
      "name": "Explain the process of electrolysis and its applications in industry.",
      "id": "1-1",
      "children": [],
      "summary": "Electrolysis is the process of using electrical energy to drive a non-spontaneous chemical reaction, typically involving the decomposition of ionic compounds in solution or molten form. In industry, it is used for processes such as the extraction of metals from ores (e.g., aluminum from bauxite), electroplating to coat objects with a layer of metal, and the production of chemicals like chlorine and hydrogen from brine."
    },
    {
      "name": "Explain how a monitoring and control system can be used in a chemical process, including an example of bit manipulation.",
      "id": "1-2",
      "children": [
        {
          "name": "Explain how a monitoring and control system can be used to regulate the temperature of a chemical reaction. Include the role of sensors and actuators in your answer.",
          "id": "2-1",
          "children": [],
          "summary": "A monitoring and control system regulates temperature by using sensors to measure the current temperature of the reaction. The data from the sensors is processed by a controller, which compares the measured temperature to a desired set point. If the temperature deviates from the set point, the controller sends a signal to actuators (such as heaters or coolers) to adjust the temperature accordingly, maintaining optimal reaction conditions."
        }
      ],
      "summary": "A monitoring and control system in a chemical process involves sensors that collect data (e.g., temperature, pressure) and a control unit that processes this data to maintain optimal conditions. For example, if a temperature sensor detects a rise above a set point, the control unit can manipulate bits to activate a cooling system, ensuring the reaction occurs safely and efficiently."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "How many different types of motion sensor are you aware of?",
      "id": "1-4",
      "children": [
        {
          "name": "Describe the role of sensors in a computer-controlled monitoring system and give two examples of different types of sensors used for measurement.",
          "id": "2-2",
          "children": [],
          "summary": "Sensors in a computer-controlled monitoring system measure physical properties and transmit data to the computer for analysis. Examples include thermocouples for temperature measurement and pressure sensors for pressure measurement."
        },
        {
          "name": "How many different types of motion sensors are you aware of?",
          "id": "2-3",
          "children": [],
          "summary": "There are several types of motion sensors, including passive infrared (PIR) sensors, ultrasonic sensors, microwave sensors, and dual-technology sensors."
        }
      ],
      "summary": "Common types of motion sensors include passive infrared (PIR) sensors, ultrasonic sensors, microwave sensors, dual-technology sensors (combining PIR and microwave), and video motion detectors."
    },
    {
      "name": "Page 3",
      "id": "1-5",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the role of feedback in a closed-loop control system and how it differs from a monitoring system.",
      "id": "1-6",
      "children": [
        {
          "name": "Explain the difference between a monitoring system and a control system, and describe how a monitoring system could be modified to become a control system.",
          "id": "2-4",
          "children": [],
          "summary": "A monitoring system observes and reports data without taking action, while a control system actively adjusts outputs based on feedback to maintain desired conditions. To modify a monitoring system into a control system, it would need to incorporate a feedback mechanism, such as a controller that processes sensor data and sends signals to actuators to adjust the system accordingly."
        }
      ],
      "summary": "Feedback in a closed-loop control system allows the system to adjust its output based on the difference between the desired and actual outputs, enabling automatic correction. In contrast, a monitoring system only observes parameters without making adjustments."
    },
    {
      "name": "Where would you be likely to find a closed-loop feedback control system?",
      "id": "1-7",
      "children": [],
      "summary": "In industrial processes, temperature control systems, or automated manufacturing systems."
    },
    {
      "name": "Page 5",
      "id": "1-8",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the purpose of using a bitwise AND operation in the context of setting all bits to zero in a byte, as illustrated in the assembly code example.",
      "id": "1-9",
      "children": [
        {
          "name": "Explain the difference between a covalent bond and an ionic bond.",
          "id": "2-5",
          "children": [],
          "summary": "A covalent bond involves the sharing of electron pairs between atoms, while an ionic bond involves the transfer of electrons from one atom to another, resulting in the formation of charged ions."
        }
      ],
      "summary": "The bitwise AND operation is used to clear specific bits in a byte by performing a logical AND with a mask that has zeros in the positions to be cleared. In the example, ANDing with #800000000 sets all bits to zero, effectively resetting the flags."
    },
    {
      "name": "Page 6",
      "id": "1-10",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the role of sensors and actuators in a monitoring and control system.",
      "id": "1-11",
      "children": [],
      "summary": "Sensors measure physical quantities and provide data to the system, while actuators receive signals from the system to perform actions based on sensor input."
    },
    {
      "name": "Page 7",
      "id": "1-12",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "i Identify the type of system that the farmer has had installed. ii Identify the type of devices that have been installed inside the barn. iii Describe two examples of this type of device that could be used and explain what their purpose is with respect to the functioning of the computer-based system.",
      "id": "1-13",
      "children": [],
      "summary": "i Computer-based monitoring system. ii Sensors. iii Examples: Temperature sensor (monitors barn temperature to ensure optimal conditions for poultry), Humidity sensor (monitors humidity levels to prevent stress on poultry and ensure egg quality). Both devices provide real-time data to the system, triggering alerts if conditions are outside acceptable ranges."
    },
    {
      "name": "{\"q\":\"a) Name the type of system described. b) Identify three items of hardware that would be needed to acquire and record the temperature data. Justify your choice for each. c) Dry run the assembly language code starting at LOOP and finishing when EXIT is reached.\",\"a\":\"a) Data acquisition system. b) 1) Temperature sensor - to measure the temperature accurately. 2) Data logger - to record the temperature data over time. 3) Computer or microcontroller - to process and analyze the recorded data. c) | BITREG | COUNT | VALUE | ACC | | :--: | :--: | :--: | :--: | | 800001010 | 0 | 1 | 0 | | 800001010 | 1 | 1 | 1 | | 800001010 | 2 | 1 | 1 | | 800001010 | 2 | 2 | 1 | | 800",
      "id": "1-14",
      "children": [],
      "summary": "??"
    },
    {
      "name": "What is the missing operand for the instruction labelled TEST?",
      "id": "1-15",
      "children": [],
      "summary": "The missing operand is the condition or value to be tested."
    }
  ],
  "summary": "A monitoring system."
};

export default data;
