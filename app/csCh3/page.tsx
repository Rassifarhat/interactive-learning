'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { saveNoteForRevision } from '../utilities/saveNoteForRevision';
import { VoiceCapture } from '../components/VoiceCapture';
import { AnsweringChoices } from '../components/AnsweringChoices';
import { Assessment } from '../components/Assessment';

// ────────────────────────────────────────────────────────────────────────────────
// Type definitions (unchanged)
// ────────────────────────────────────────────────────────────────────────────────
interface MindmapNode {
  name: string;
  id: string;
  summary?: string;
  children?: MindmapNode[];
}

// ────────────────────────────────────────────────────────────────────────────────
// Chapter 14 – Programming & Data Representation (detailed version)
// Summaries reference the Cambridge International AS & A‑Level Computer Science
// (9618) specification style: Paper 2 – Fundamental Problem‑solving & Programming.
// ────────────────────────────────────────────────────────────────────────────────

// app/components/InfoRepresentationQuestions.tsx


const data: MindmapNode = {
  name: "What does Chapter 3 cover about computer hardware components and their functions?",
  id: "hardware",
  summary: "Chapter 3 explores computer hardware, covering the major components for processing, storing, and handling data input and output. It examines memory components, storage devices, embedded systems, and various I/O technologies.",
  children: [
    {
      name: "Which three major operational capabilities does a computer system support?",
      id: "system-functionality",
      summary: "A computer system supports three major areas of operational capability: processing data (via the CPU), storing data (in memory and storage devices), and handling data input and output (through various peripherals). These functions are essential for a complete computing environment.",
      children: [
        {
          name: "How is data storage organized in the memory hierarchy, and what trade‑offs does each level involve?",
          id: "data-storage",
          summary: "Data storage follows a memory hierarchy with different components serving different purposes. The hierarchy includes registers (in the CPU), cache memory, main memory, hard disks, and auxiliary storage. As you move down this hierarchy, access times increase but so do capacity and cost-effectiveness. The choice of storage components involves a compromise between speed, capacity, and cost.",
          children: [
            {
              name: "What is the memory hierarchy and how do speed, capacity, and cost change through its levels?",
              id: "memory-hierarchy",
              summary: "The memory hierarchy represents the organization of storage components in a computer system based on access speed, capacity, and cost. At the top of the hierarchy are fast but limited-capacity registers and cache memory, followed by main memory, then secondary storage devices like hard disks and auxiliary storage. Moving down the hierarchy, access time and capacity increase while cost per unit of storage decreases."
            },
            {
              name: "How can storage be categorized by its relationship to the computer system?",
              id: "storage-categories",
              summary: "Storage can be categorized based on its relationship to the computer system:\n\n- Integral part of the system (hard disk or solid-state drive)\n- Removable media (optical discs, memory cards)\n- Peripheral devices (external drives)\n- Portable items for use across systems (flash drives)\n- Remote storage accessible via network (cloud storage, SAN, RAID)"
            }
          ]
        },
        {
          name: "What are the main methods for computer data output and what formats do they produce?",
          id: "data-output",
          summary: "Computer systems offer various options for data output, including:\n\n- Screen displays (monitors, digital displays)\n- Hardcopy via printers or plotters\n- Virtual headset displays\n- Audio output through speakers\n- Writing to storage devices\n- Transmission over network connections\n\nThese output methods allow users to view, hear, or otherwise access the results of data processing in different formats."
        },
        {
          name: "Which devices and interfaces handle data input, and how are I/O operations managed?",
          id: "data-input",
          summary: "Computer systems accept data input through various methods, including:\n\n- Keyboard or keypad entry\n- Screen interaction using pointing devices or touch\n- Game controllers\n- Scanners for document or image digitization\n- Microphones for voice input\n- Reading from storage devices\n- Receiving data via network connections\n\nAll input and output operations are managed by the I/O subsystem, which handles data transfer between the computer and external devices or storage media."
        }
      ]
    },
    {
      name: "What defines an embedded system, and how does it differ from a general‑purpose computer?",
      id: "embedded-systems",
      summary: "Embedded systems are specialized computer systems designed for specific functions within larger products or systems. Unlike general-purpose computers, they typically perform dedicated tasks and are found in many mechanical and electrical devices. An embedded system includes a processor, memory, and I/O capabilities, often integrated into a single microcontroller chip.",
      children: [
        {
          name: "What are the key characteristics of embedded systems?",
          id: "embedded-characteristics",
          summary: "Embedded systems have several key characteristics:\n\n- Special-purpose design, often performing a single function\n- Mass production leading to economies of scale\n- Integration within host systems (appliances, vehicles, devices)\n- Can range from simple input/output operations to complex interfaces\n- In modern systems, often include network connectivity as part of IoT\n\nThe specialized nature of embedded systems allows for optimized performance and cost-effectiveness for specific applications."
        },
        {
          name: "What advantages do embedded systems offer through their specialized design?",
          id: "embedded-advantages",
          summary: "Embedded systems offer several advantages:\n\n- Cost-effectiveness through mass production\n- Specialized design for specific functions\n- Optimized performance for dedicated tasks\n- Smaller size and lower power consumption\n- Integration directly into host products\n\nThese advantages make embedded systems ubiquitous in modern electronics and appliances."
        },
        {
          name: "What limitations do embedded systems have, and how are modern designs addressing these?",
          id: "embedded-limitations",
          summary: "Despite their advantages, embedded systems have some limitations:\n\n- Historically constrained by limited memory space\n- Difficulty updating software once deployed (though less problematic in modern systems)\n- Security concerns when connected to networks (IoT devices)\n- Limited flexibility compared to general-purpose computers\n- Potential challenges in user interface design\n\nModern embedded systems address some of these limitations through improved memory capacity and updatable firmware."
        }
      ]
    },
    {
      name: "What types of memory components are used in computers, and how do their roles differ?",
      id: "memory-components",
      summary: "Computer systems use several types of memory components to store data. These include Random Access Memory (RAM) and Read Only Memory (ROM), each with different characteristics, uses, and subtypes. The choice of memory technology depends on factors like speed requirements, cost constraints, and whether data needs to persist when power is removed.",
      children: [
        {
          name: "What is RAM, why is it volatile, and how does it function as working memory?",
          id: "ram",
          summary: "Random Access Memory (RAM) is the main working memory of a computer system. It can be accessed at any location independently of previous access patterns (hence 'random access'). RAM is volatile, meaning its contents are lost when power is removed. It serves as a temporary workspace for the CPU, storing program code and data currently in use.",
          children: [
            {
              name: "How does DRAM store data, and what makes it suitable for main memory?",
              id: "dram",
              summary: "Dynamic RAM (DRAM) stores data in capacitors that need to be refreshed regularly (every few milliseconds) to maintain data integrity. Characteristics include:\n\n- Fewer electronic components per bit than SRAM\n- Lower cost and higher density\n- Slower access time than SRAM\n- Requires regular refresh cycles\n- Commonly used for main memory in computer systems\n\nDRAM's cost-effectiveness makes it ideal for applications requiring large amounts of memory."
            },
            {
              name: "How does SRAM differ from DRAM, and why is it used for cache memory?",
              id: "sram",
              summary: "Static RAM (SRAM) stores data using flip-flop circuits that maintain their state as long as power is supplied. Characteristics include:\n\n- No need for refresh cycles (unlike DRAM)\n- Faster access time than DRAM\n- Uses more electronic components per bit\n- Higher cost and lower density than DRAM\n- Typically used for cache memory due to speed advantages\n- Often used in embedded systems with limited memory requirements\n\nSRAM's speed advantage makes it valuable for performance-critical applications despite its higher cost."
            }
          ]
        },
        {
          name: "What is ROM, and what are its main types and uses in computer systems?",
          id: "rom",
          summary: "Read Only Memory (ROM) is non-volatile memory that retains data when power is removed. It generally cannot be written to during normal computer operation. ROM is used to store firmware, bootstrap programs, and other critical data that needs to remain unchanged and available at system startup.",
          children: [
            {
              name: "What is standard ROM and how is its content set?",
              id: "standard-rom",
              summary: "Standard ROM has its contents programmed during manufacturing and cannot be altered afterward. The programs or data are permanently installed as part of the chip production process. If different contents are needed, the entire chip must be replaced."
            },
            {
              name: "What is PROM and how does it allow post‑manufacture programming?",
              id: "prom",
              summary: "Programmable ROM (PROM) allows the system builder to program the chip after manufacturing. This provides more flexibility than standard ROM, as the contents can be customized for specific applications. However, once programmed, a PROM cannot be reprogrammed—its contents are permanent."
            },
            {
              name: "What is EPROM and how does ultraviolet light enable its erasure?",
              id: "eprom",
              summary: "Erasable Programmable ROM (EPROM) can have its contents erased using ultraviolet light, allowing for reprogramming. This provides greater flexibility than PROM because the chip can be reused with different data. However, the erasure process typically requires removing the chip from the circuit."
            },
            {
              name: "What is EEPROM and why is it the most flexible type of ROM?",
              id: "eeprom",
              summary: "Electrically Erasable Programmable ROM (EEPROM) allows data to be erased and reprogrammed using electrical signals, without removing the chip from the circuit. This is the most flexible type of ROM, enabling in-system updates while maintaining non-volatility. After reprogramming, the chip still functions as read-only during normal system operation."
            }
          ]
        },
        {
          name: "What role do buffers play in data transfer between components with different speeds?",
          id: "buffers",
          summary: "Buffers are temporary storage areas used when transferring data between components that operate at different speeds. They function as queues, allowing data to be sent from a faster device to a slower one without data loss. The buffer temporarily holds data that has been sent but not yet processed by the receiving component.\n\nBuffers are commonly implemented in computer memory and are essential in many situations, such as:\n- Keyboard input processing\n- Printer operations\n- Network data transmission\n- Audio and video streaming\n- Disk read/write operations"
        }
      ]
    },
    {
      name: "What are secondary storage devices, and how do they complement primary memory?",
      id: "secondary-storage",
      summary: "Secondary storage devices provide long-term data storage that persists when power is removed. These devices complement primary storage (RAM) by offering larger capacity at lower cost, though with slower access times. Common technologies include magnetic media, optical media, and solid-state storage.",
      children: [
        {
          name: "How do magnetic storage media work, and what are their main forms?",
          id: "magnetic-media",
          summary: "Magnetic storage media use magnetized materials to store data. Information is written by changing the magnetic state of tiny areas on the storage medium, with different states representing binary 1s and 0s. Read-write heads detect or alter these magnetic states.",
          children: [
            {
              name: "What features characterize hard disk drives and how do they store data?",
              id: "hard-disk",
              summary: "Hard disk drives (HDDs) store data on rapidly rotating magnetic platters. Key features include:\n\n- Multiple platters (disks) spinning in unison\n- Read-write heads for each platter surface\n- Actuator arms that position heads over the platters\n- Concentric tracks divided into sectors for data storage\n- Air cushion preventing head-platter contact\n- Direct access capability to any sector\n- Data organized into cylinders across platters\n\nHDDs offer high capacity at relatively low cost, though they're slower than solid-state alternatives due to mechanical limitations."
            },
            {
              name: "What is magnetic tape storage used for and why is it still relevant?",
              id: "magnetic-tape",
              summary: "Magnetic tape was one of the earliest computer storage technologies, predating hard disks. While less common for primary storage today, tape remains important for:\n\n- Long-term archival storage\n- Backup systems\n- High-capacity data retention\n- Sequential access to data (unlike random access in hard disks)\n\nTape offers very high capacity at low cost per gigabyte, making it suitable for archiving large amounts of data that doesn't need frequent access."
            }
          ]
        },
        {
          name: "How do optical storage media encode and read data with lasers?",
          id: "optical-media",
          summary: "Optical storage media use laser technology to read and write data. Information is encoded as microscopic pits and lands (flat areas) on the disc surface, which affect how light is reflected from the disc.",
          children: [
            {
              name: "How do CD and DVD technologies work, and what accounts for their capacity difference?",
              id: "cd-dvd",
              summary: "CD and DVD technologies use lasers to read data from a spiral track on the disc. Key aspects include:\n\n- CDs use 780nm infrared laser light\n- DVDs use 680nm red laser light (shorter wavelength enables higher density)\n- One continuous spiral track from center to edge\n- Pits and lands on the surface encode binary data\n- Data formatted into sectors along the track\n- Direct access capability despite single track design\n\nWhile CDs typically store 700MB, DVDs can hold 4.7GB or more, reflecting the increased data density possible with shorter-wavelength lasers."
            },
            {
              name: "How does Blu-ray technology achieve higher density than DVD?",
              id: "blu-ray",
              summary: "Blu-ray technology uses even shorter wavelength blue-violet lasers (405nm) to achieve higher storage density than DVD. This allows a standard Blu-ray disc to store 25GB per layer, with dual-layer discs holding 50GB. The shorter wavelength enables more precise focusing, allowing smaller pits and lands to be used, increasing data density."
            },
            {
              name: "What read/write variants exist for optical media, and how do they function?",
              id: "optical-rw",
              summary: "Optical media comes in several write capability variants:\n\n- Read-only (ROM): Factory-pressed with data that cannot be changed\n- Recordable (R): Can be written once but not erased\n- Rewritable (RW): Can be erased and rewritten multiple times\n\nRewritable technologies use special alloy materials that can change between crystalline and amorphous states when heated by the laser, with different reflection properties that can be detected during reading."
            }
          ]
        },
        {
          name: "What advantages do solid-state storage media provide over mechanical drives?",
          id: "solid-state-media",
          summary: "Solid-state storage uses semiconductor technology with no moving parts to store data. It offers faster access times, lower power consumption, and greater physical durability than mechanical storage options.",
          children: [
            {
              name: "What is flash memory, and why is it the most common solid-state storage?",
              id: "flash-memory",
              summary: "Flash memory is the most common type of solid-state storage. Key characteristics include:\n\n- Based on NAND architecture with memory cells connected in series\n- Requires block erasure before writing new data\n- Organized into blocks containing multiple pages\n- Controller manages read/write operations and wear leveling\n- Non-volatile (retains data without power)\n- No moving parts\n\nFlash memory has limited write endurance, as cells degrade after many erase-write cycles, but controllers use wear-leveling algorithms to extend lifespan."
            },
            {
              name: "What is a USB flash drive, and how does it leverage flash memory for portability?",
              id: "usb-drives",
              summary: "USB flash drives (memory sticks) incorporate NAND flash memory with a USB connector, providing portable storage that can be easily connected to any computer with a USB port. They offer a convenient replacement for older removable media like floppy disks, with much higher capacity and better reliability."
            },
            {
              name: "How do SSDs differ from HDDs in performance and cost?",
              id: "ssd",
              summary: "Solid-State Drives (SSDs) use flash memory as an alternative to traditional hard disk drives. Advantages include:\n\n- Much faster access times (no mechanical movement)\n- Lower power consumption\n- No noise during operation\n- Greater resistance to physical shock\n- No fragmentation issues\n\nAlthough SSDs experience gradual material degradation with use, modern controllers can detect this and compensate, extending the usable life of the device. SSDs generally offer lower capacity per dollar than HDDs but provide significant performance advantages."
            }
          ]
        }
      ]
    },
    {
      name: "What types of output devices convert digital data into perceptible forms, and how do they work?",
      id: "output-devices",
      summary: "Output devices convert digital data from a computer system into forms that users can perceive. These include visual displays, printers, audio devices, and specialized output technologies, each suited to particular applications and user needs.",
      children: [
        {
          name: "How do screen displays generate images, and what role do pixels play?",
          id: "screen-displays",
          summary: "Screen displays present visual information by illuminating pixels arranged in a grid. Each pixel typically consists of three sub-pixels (red, green, and blue) that can vary in intensity to create different colors.",
          children: [
            {
              name: "How does LCD technology use liquid crystals and backlighting to display images?",
              id: "lcd",
              summary: "Liquid Crystal Display (LCD) technology uses liquid crystal cells that control light transmission. Key components include:\n\n- Backlight (typically LED-based)\n- Polarizing filters\n- Liquid crystal layer\n- Color filters for RGB sub-pixels\n- TFT (Thin Film Transistor) array to control individual pixels\n\nWhen voltage is applied to a liquid crystal cell, it changes the polarization of light passing through it, which combined with polarizing filters determines whether light reaches the screen."
            },
            {
              name: "What other display technologies exist and what trade-offs do they offer?",
              id: "other-displays",
              summary: "Besides LCD, other display technologies include:\n\n- CRT (Cathode Ray Tube): Historical technology using electron beams striking phosphor\n- OLED (Organic Light Emitting Diode): Self-illuminating pixels without backlight\n- LED Displays: Direct light emission from LEDs for each pixel\n- E-Ink: Reflective technology using charged particles for low-power displays\n\nEach technology offers different trade-offs in terms of color reproduction, contrast, power consumption, refresh rate, and viewing angles."
            }
          ]
        },
        {
          name: "How do virtual reality headsets create immersive 3D experiences?",
          id: "vr-headsets",
          summary: "Virtual reality headsets provide immersive 3D visual experiences. They contain two eye-pieces displaying slightly different images that, when viewed together, create the perception of depth and three-dimensional space. The wearer can control the viewpoint by moving their head or using external controllers, creating an interactive experience within a virtual environment."
        },
        {
          name: "What printing methods are commonly used, and how do they differ in operation and performance?",
          id: "printers",
          summary: "Printers create physical copies (hardcopies) of documents or images. Different technologies offer various trade-offs between cost, speed, quality, and color capabilities.",
          children: [
            {
              name: "How do inkjet printers produce images, and what are their advantages and drawbacks?",
              id: "inkjet",
              summary: "Inkjet printers create documents by spraying tiny droplets of ink onto paper. The printhead moves across the page horizontally while the paper advances vertically. Key features include:\n\n- Nozzles that spray precisely controlled ink droplets\n- Separate ink cartridges (typically cyan, magenta, yellow, and black)\n- Variable dot sizes for different quality levels\n- Can print both text and high-quality color images\n\nInkjet printers offer good color reproduction at relatively low initial cost, though ink can be expensive per page."
            },
            {
              name: "How do laser printers function, and why are they preferred for text-heavy output?",
              id: "laser",
              summary: "Laser printers use electrostatic processes to create images on paper. The process involves:\n\n1. Charging a photosensitive drum\n2. Using a laser to selectively discharge areas corresponding to the image\n3. Applying toner (fine powder) that adheres to charged areas\n4. Transferring toner to paper using electrostatic attraction\n5. Fusing toner to paper using heat and pressure\n\nColor laser printers repeat this process for each color (cyan, magenta, yellow, and black). Laser printers typically offer faster printing speeds and lower per-page costs than inkjet printers, especially for text-heavy documents."
            }
          ]
        },
        {
          name: "What specialized devices produce high-quality graphical output, and how do they operate?",
          id: "graphics-output",
          summary: "Specialized devices exist for creating high-quality graphical output, particularly for technical and design applications.",
          children: [
            {
              name: "What is a plotter and how does it create vector graphics?",
              id: "plotters",
              summary: "Plotters create vector graphics using pens that draw directly on paper. Unlike printers that create images from dots, plotters draw continuous lines. They're used for technical drawings, architectural plans, and engineering designs where precision is crucial. The paper moves on sprockets while pens move across it, controlled by data from vector graphic files."
            },
            {
              name: "How do 3D printers build physical objects layer by layer?",
              id: "3d-printers",
              summary: "3D printers create physical three-dimensional objects by building up successive layers of material. The process typically involves:\n\n1. Creating a 3D design using CAD software\n2. Slicing the design into horizontal layers\n3. The printer depositing material layer by layer\n4. Post-processing to cure or finish the object\n\n3D printers can use various materials including plastics, resins, metals, and even biological materials. They're used in prototyping, manufacturing, medical applications, and many other fields."
            }
          ]
        }
      ]
    },
    {
      name: "What devices are used for computer data input and how do they convert user actions into digital signals?",  
      id: "input-devices",
      summary: "Input devices convert user actions or physical phenomena into digital data that a computer system can process. They enable users to enter text, manipulate graphical interfaces, capture images, record sound, and interact with the system in various ways.",
      children: [
        {
          name: "How do keyboards detect key presses and translate them into codes?",
          id: "keyboard",
          summary: "The keyboard allows text and command input. It works through a combination of mechanical and electronic components:\n\n- Keys positioned above a matrix of row and column wires\n- Pressing a key creates a circuit between specific row and column wires\n- A microprocessor continuously scans for closed circuits\n- When detected, the processor identifies the key position\n- The corresponding character code is retrieved from ROM\n- The code is sent to the processor for display or action\n\nModern keyboards may use various switch technologies, including mechanical, membrane, or capacitive switches, each offering different tactile feedback and durability."
        },
        {
          name: "How can a display screen serve as an input device in a graphical user interface?",
          id: "screen-input",
          summary: "Screens can serve as input devices through various mechanisms. Graphical User Interfaces (GUIs) display interactive elements like icons, menus, and buttons that users can activate using pointing devices. This provides an intuitive way to control the system and input data without relying solely on text commands."
        },
        {
          name: "What technologies enable touch-screen input, and how do resistive and capacitive screens differ?",  
          id: "touch-screens",
          summary: "Touch screens allow direct interaction by touching the display surface. Several technologies enable this functionality:",
          children: [
            {
              name: "How does resistive touch-screen technology detect touch, and what are its pros and cons?",
              id: "resistive-touch",
              summary: "Resistive touch screens use two flexible layers separated by a small gap. When pressed, the top layer contacts the bottom layer, creating a voltage divider circuit. The point of contact generates specific voltage readings that are used to calculate the touch position. Resistive screens can be operated with any object (finger, stylus, gloved hand) but offer less clarity than other technologies."
            },
            {
              name: "How does capacitive touch-screen technology detect and process multi-touch input?",
              id: "capacitive-touch",
              summary: "Capacitive touch screens use the electrical properties of the human body. They contain a layer of electrically conductive material. When a finger touches the screen, it creates a capacitance change that the system can detect and locate. Projective Capacitive Touch (PCT) uses an array of capacitors below the screen and can detect multiple touch points simultaneously, enabling multi-touch gestures."
            }
          ]
        },
        {
          name: "Which devices capture images for input, and how do scanners and digital cameras operate?",
          id: "image-input",
          summary: "Various devices can capture and input images into a computer system:",
          children: [
            {
              name: "How do scanners convert physical documents into digital bitmaps?",
              id: "scanner",
              summary: "Scanners convert physical documents or images into digital format. They work by:\n\n- Moving a light source across the document\n- Using mirrors and lenses to direct reflected light\n- Capturing the light with a Charge-Coupled Device (CCD)\n- Converting the analog light intensity to digital values\n- Processing these values to create a bitmap image\n\nScanners can digitize text documents, photographs, artwork, and other flat media."
            },
            {
              name: "How do digital cameras use image sensors to capture and store images?",
              id: "digital-cameras",
              summary: "Digital cameras capture images using image sensors (typically CCD or CMOS) that convert light into electrical signals. These signals are processed and stored as digital files that can be transferred to a computer. Webcams are specialized digital cameras designed for video streaming directly to a computer system."
            }
          ]
        }
      ]
    },
    {
      name: "How do sound input and output devices convert between analog waves and digital data, and what applications rely on them?",  
      id: "sound-io",
      summary: "Sound input and output devices convert between sound waves and digital data, enabling computers to record, process, and produce audio. These technologies support applications from simple alerts to complex music production, voice recognition, and telecommunications.",
      children: [
        {
          name: "How does voice input convert sound waves into digital signals?",  
          id: "voice-input",
          summary: "Voice input requires converting sound waves to digital signals. This process involves:\n\n- A microphone with a diaphragm that vibrates with sound waves\n- Conversion of diaphragm movement to electrical signals\n- An Analog-to-Digital Converter (ADC) that samples the signal\n- Software processing of the digital signal\n\nMicrophones may use different technologies (condenser, dynamic, piezoelectric) to convert sound to electrical signals. For voice recognition, additional software analyzes the digital signal to identify speech patterns."
        },
        {
          name: "How does a DAC convert digital audio back into sound waves?",
          id: "sound-output",
          summary: "Sound output reverses the input process. Digital audio data is converted to analog signals by a Digital-to-Analog Converter (DAC). The resulting electrical signal drives speakers that produce sound waves:\n\n- Current flows through a coil in a magnetic field\n- The coil moves in response to changing current\n- The coil's movement drives a diaphragm\n- The diaphragm movement creates sound waves\n\nSound cards or integrated audio chips manage both the input and output processes, providing connections for microphones and speakers and handling the necessary conversions."
        },
        {
          name: "What applications utilize sound I/O, and how do they depend on audio hardware?",
          id: "audio-applications",
          summary: "Sound I/O supports various applications including:\n\n- Voice and video calling\n- Voice recognition for command input\n- Speech synthesis for screen readers and virtual assistants\n- Music recording and playback\n- Gaming audio\n- Multimedia presentations\n\nThese applications may use specialized hardware and software to optimize sound quality, reduce latency, or support specific features like 3D audio positioning."
        }
      ]
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterThreeMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  type PanelMode = 'choice' | 'answer' | 'recording' | 'feedback';

  const [panelMode, setPanelMode] = useState<PanelMode>('choice');
  const [transcript, setTranscript] = useState<string>('');


  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
  };
  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
  };
  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const w = 1200, h = 800;
      d3.select(svgRef.current).transition().duration(500).call(zoomRef.current.transform, d3.zoomIdentity.translate(w / 2, h / 2).scale(0.8));
    }
  };

  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    const n = new Set(hiddenNodes);
    n.has(activeNode) ? n.delete(activeNode) : n.add(activeNode);
    setHiddenNodes(n);
    if (svgRef.current) d3.select(svgRef.current).selectAll(`text[data-id="${activeNode}"]`).attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null);
  };

  const findName = (id: string | null, node: MindmapNode): string | null => {
    if (!id) return null;
    if (node.id === id) return node.name;
    if (node.children) for (const c of node.children) { const f = findName(id, c); if (f) return f; }
    return null;
  };
  const activeNodeName = findName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  const selectNode = (d: d3.HierarchyPointNode<MindmapNode>) => {
    setActiveNode(d.data.id);
    setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
    setSaveStatus('');
    setPanelMode('choice');
  };
  

  useEffect(() => {
    if (!svgRef.current) return;
  
    /* ────────── SVG scaffold ────────── */
    const width = 1200, height = 800,
          radius = Math.min(width, height) / 2 * 0.9;
  
    const svg = d3.select(svgRef.current)
      .attr('width',  width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
  
    svg.selectAll('*').remove();
    const g = svg.append('g');
  
    /* stop the default context‑menu that pops up on two‑finger click */
    svg.on('contextmenu', e => e.preventDefault());
  
    /* ────────── radial tree layout ────────── */
    const root = d3.hierarchy(data);
    const treeData = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)(root);
  
    const linkGen = d3.linkRadial<
      d3.HierarchyPointLink<MindmapNode>,
      d3.HierarchyPointNode<MindmapNode>>()
        .angle(d => d.x)
        .radius(d => d.y);
  
    const linkGroup = g.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-opacity', 0.7)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(treeData.links())
      .join('path')
      .attr('d', linkGen);
  
    /* ────────── nodes (group, circle, label) ────────── */
    const colour = d3.scaleOrdinal<string>()
      .domain(['0','1','2','3','4'])
      .range(['#4299E1','#48BB78','#F6AD55','#F56565','#9F7AEA']);
  
    const node = g.append('g')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
      .selectAll<SVGGElement, d3.HierarchyPointNode<MindmapNode>>('g')
      .data(treeData.descendants())
      .join('g')
      .attr('data-id', d => d.data.id)
      .attr('transform', d =>
        `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);
  
    /* circle */
    node.append('circle')
      .attr('fill', d => colour(d.depth.toString()))
      .attr('r', d => d.data.id === 'chapter-14' ? 10 : 6)
      .style('cursor', 'pointer')
      .on('mouseover', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 12 : 8).attr('stroke', 'black'))
      .on('mouseout', (e, d) =>
        d3.select(e.currentTarget).attr('r',
          d.data.id === 'chapter-14' ? 10 : 6).attr('stroke', null));
  
    /* label */
    node.append('text')
      .attr('dy', '0.31em')
      .style('font-size', '10px')
      .style('font-weight', 'bold')
      .style('pointer-events', 'none')
      .attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
      .attr('fill', d =>
        hiddenNodes.has(d.data.id) ? '#2D3748' : colour(d.depth.toString()))
      .attr('transform', d => {
        const inv = -(d.x * 180 / Math.PI - 90);
        const h   = d.x < Math.PI ? 8 : -8;
        return `rotate(${inv}) translate(${h},0)`;
      })
      .text(d => d.data.name);
  
    /* ────────── drag (only if two‑finger/right click) ────────── */
    const dragBehaviour = d3
      .drag<SVGGElement, d3.HierarchyPointNode<MindmapNode>>()
      /*  filter keeps left‑clicks for opening, right‑clicks for drag  */
      .filter(event => event.button === 2 || event.buttons === 2)
      .on('start', function (event, d) {
        event.sourceEvent.stopPropagation();       // keep zoom idle
        event.defaultPrevented = true;             // suppress click later
        d3.select(this).raise();
  
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      })
      .on('drag', function (event, d) {
        syncToPointer(event, d);
        moveNode(this, d);
        linkGroup.attr('d', linkGen);
      });
  
    node.call(dragBehaviour);               // ① drag attached first
  
    /* click attached AFTER drag so defaultPrevented check works */
    node.on('click', (event, d) => {
      if (event.defaultPrevented) return;   // ignore right‑drag sequence
  
      setActiveNode(d.data.id);
      setInfoContent(d.data.summary || `${d.data.name} – No summary yet.`);
      setSaveStatus('');
      setPanelMode('choice');
    });
  
    /* ────────── zoom / pan ────────── */
    const zoomer = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on('zoom', ev => {
        g.attr('transform', ev.transform.toString());
        setZoom(ev.transform.k);
      });
  
    zoomRef.current = zoomer;
    svg.call(zoomer).on('dblclick.zoom', null);
    svg.call(zoomer.transform, d3.zoomIdentity.translate(0, 0).scale(0.8));
  
    if (!activeNode) {
      setInfoContent('Click on any node for full exam‑ready notes.');
    }
  
    return () => { svg.on('.zoom', null); };
  
    /* ─── helpers ───────────────────────────────────────── */
    function syncToPointer(event: any, d: d3.HierarchyPointNode<MindmapNode>) {
      const t           = d3.zoomTransform(svgRef.current as SVGSVGElement);
      const [ux, uy]    = t.invert([event.x, event.y]);
      let angle         = Math.atan2(uy, ux) + Math.PI / 2;
      if (angle < 0) angle += 2 * Math.PI;
      d.x = angle;
      d.y = Math.hypot(ux, uy);
    }
    function moveNode(el: SVGGElement, d: d3.HierarchyPointNode<MindmapNode>) {
      d3.select(el)
        .attr('transform',
          `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);
  
      const inv = -(d.x * 180 / Math.PI - 90);
      const h   = d.x < Math.PI ? 8 : -8;
      d3.select(el).select('text')
        .attr('transform', `rotate(${inv}) translate(${h},0)`)
        .attr('text-anchor', d.x < Math.PI ? 'start' : 'end');
    }
  }, [hiddenNodes]);
    // dependencies stay unchanged
  
  

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 14: Programming &amp; Data Representation</h1>
      </div>

      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
          <svg ref={svgRef} className="w-full h-full" />
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button onClick={handleZoomIn} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom in"><span className="text-xl">+</span></button>
            <button onClick={handleZoomOut} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Zoom out"><span className="text-xl">−</span></button>
            <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Reset zoom"><span className="text-sm">Reset</span></button>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || 'Topic Information'} {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
             {activeNode && panelMode === 'choice' && (
  <AnsweringChoices
    onShowAnswer={() => setPanelMode('answer')}
    onTryAnswer={() => setPanelMode('recording')}
  />
)}

{panelMode === 'recording' && (
  <VoiceCapture onFinished={async (base64) => {
    const res = await fetch('/api/speechToText', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64: base64 })
    });
    const { text } = await res.json();
    setTranscript(text);
    setPanelMode('feedback');          // triggers <Assessment>
  }} />
)}

{panelMode === 'answer' && <p className="whitespace-pre-wrap">{infoContent}</p>}

{panelMode === 'feedback' && (
  <div className="prose prose-invert text-gray-300 whitespace-pre-line mb-4">
    <h3 className="text-lg font-semibold mb-1">Transcribed Answer:</h3>
    <p>{transcript}</p>
  </div>
)}
{panelMode === 'feedback' && (
  <>
    <Assessment
      transcript={transcript}
      modelAnswer={infoContent}
      question={activeNodeName ?? ''}
    />
    <p className="whitespace-pre-wrap mt-4">{infoContent}</p>
  </>
)}
            </div>

            {saveStatus && <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">{saveStatus}</div>}

            {activeNode && (panelMode === 'answer' || panelMode === 'feedback') && (
              <div className="space-y-2">
                {/* "I know this very well" button */}
                <button
                  onClick={toggleNodeVisibility}
                  className={`px-4 py-2 rounded-md font-medium w-full ${
                    isNodeHidden
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isNodeHidden
                    ? 'I need to review this, show it'
                    : 'I know this very well, hide it'}
                </button>

                {/* "I need to revise this later" button */}
                <button
                  onClick={() =>
                    saveNoteForRevision(
                      activeNodeName,
                      infoContent,
                      'computerScience',
                      3,
                      setSaveStatus,
                      setIsSaving
                    )
                  }
                  className="px-4 py-2 rounded-md font-medium w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  I need to revise this later, save it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterThreeMindMap;