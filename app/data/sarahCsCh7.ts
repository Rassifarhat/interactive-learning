import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-7",
  "id": "root",
  "children": [
    {
      "name": "Chapter 7",
      "id": "1",
      "children": [
        {
          "name": "Explain the concepts of monitoring and control systems and the use of bit manipulation in device management.",
          "id": "1-1",
          "summary": "Monitoring and control systems are essential systems that allow for the supervision and regulation of various processes and devices. They work by collecting data from the environment or the device through sensors, analyzing this data, and then taking action based on the analysis to ensure that the system operates within desired parameters.\n\nBit manipulation is a technique used in programming where the individual bits of binary numbers are directly manipulated to perform operations efficiently. In the context of monitoring and control systems, bit manipulation can be used to control device states, read sensor values, and perform logical operations.\n\nFor instance, specific bits can be set or cleared in a control register to turn devices on or off, change configurations, or monitor the status of a device. This method provides an efficient way to manage hardware devices and allows for precise control over operations, enabling responsive actions based on real-time data.",
          "children": []
        }
      ]
    },
    {
      "name": "7 01 Monitoring Systems",
      "id": "2",
      "children": [
        {
          "name": "Describe the role of sensors in a monitoring system and provide examples of different types of sensors.",
          "id": "2-1",
          "summary": "In a monitoring system, sensors are crucial devices that detect physical properties and record values which can subsequently be transmitted to a computer or microprocessor for further analysis. Sensors do not possess built-in intelligence, meaning they cannot independently take action in response to detected issues; for instance, if a temperature sensor indicates a dangerously high temperature, it is the computer that triggers an alarm, not the sensor itself. Examples of different types of sensors include: 1. Thermocouples - used to measure temperature by outputting an electrical voltage that changes with temperature. 2. Pressure sensors - measure pressure levels. 3. Humidity sensors - measure moisture levels in the air. 4. Carbon monoxide sensors - detect the presence of carbon monoxide gas. 5. pH sensors - measure the acidity or alkalinity of a solution. 6. Sound sensors - measure sound levels. 7. Infrared sensors - can be passive, measuring received infrared light, or active, measuring the level of reflected infrared light. 8. Motion sensors - a generic term describing sensors that detect movement, which can vary in the physical properties they measure.",
          "children": []
        },
        {
          "name": "How many different types of motion sensor are you aware of?",
          "id": "2-2",
          "summary": "There are several different types of motion sensors, including Passive Infrared (PIR) sensors, Ultrasonic sensors, Microwave sensors, Tomographic sensors, and Dual technology sensors. Each type works on different principles and can be used in various applications.",
          "children": []
        }
      ]
    },
    {
      "name": "7 02 Control Systems",
      "id": "3",
      "children": [
        {
          "name": "Where would you be likely to find a closed-loop feedback control system?",
          "id": "3-1",
          "summary": "Closed-loop feedback control systems are commonly found in various applications including temperature control systems (like heating, ventilation and air conditioning systems), automatic pilots in aircraft, industrial process control (such as chemical processing plants), and robotic control systems. These systems continuously monitor the output, compare it to a desired setpoint, and adjust the input accordingly to maintain the desired performance.",
          "children": []
        }
      ]
    },
    {
      "name": "7 03 Bit Manipulation To Control Devices",
      "id": "4",
      "children": [
        {
          "name": "Are you clear that a bitwise logic operation acts on every bit individually?",
          "id": "4-1",
          "summary": "Yes, a bitwise logic operation operates on each bit of the binary representations of numbers independently. For example, in an AND operation, the corresponding bits of the operands are compared, and the result is determined for each pair of bits.",
          "children": []
        }
      ]
    },
    {
      "name": "Describe the components and functionality of a monitoring and control system.",
      "id": "5",
      "summary": "A monitoring and control system requires sensors and actuators. Sensors measure physical quantities such as temperature, humidity, pH, infrared, pressure, sound, and carbon monoxide. The system operates using a program that must function in real time and utilize an infinite loop to accept input from the sensors at timed intervals. If the sensor readings indicate a need for control measures, the program transmits signals to the actuators to take appropriate action. Additionally, bit manipulation can be used within an assembly language program to monitor or control devices.",
      "children": []
    },
    {
      "name": "A farmer has a large barn to house poultry for the purpose of collecting the eggs that are laid. The environment inside the barn affects the egg-laying performance of the poultry. Traditionally, the farmer had routinely entered the barn to check that all was well with the environment. If there was a concern, the barn had facilities for correcting the problem. a More recently a computer-based system has been installed. This allows the farmer to observe data on a computer screen. If any of the data is of concern the system has been programmed to show a flashing red sign on the screen. i Identify the type of system that the farmer has had installed. ii Identify the type of devices that have been installed inside the barn. iii Describe two examples of this type of device that could be used and explain what their purpose is with respect to the functioning of the computer-based system. b The farmer has been told that there is no need for someone to be watching a screen all of the time. A different type of computer-based system could be installed. i Identify the type of this new computer-based system. ii Identify the new type of device that would need to be installed inside the barn. (There would be more than one needed). iii Describe how the new computer-based system would interact with these devices.",
      "id": "6",
      "summary": {
        "a": {
          "i": "Monitoring system",
          "ii": "Sensors",
          "iii": {
            "1": {
              "example": "Temperature sensor",
              "purpose": "Monitors the temperature inside the barn and alerts the system if it is outside the optimal range for egg-laying."
            },
            "2": {
              "example": "Humidity sensor",
              "purpose": "Monitors the humidity levels inside the barn to ensure they are suitable for the poultry."
            }
          }
        },
        "b": {
          "i": "Automated monitoring and control system",
          "ii": "Actuators",
          "iii": "The new computer-based system would interact with these devices by receiving data from sensors, processing this information, and automatically activating actuators to correct any issues without human intervention."
        }
      },
      "children": []
    }
  ]
};

export default data;