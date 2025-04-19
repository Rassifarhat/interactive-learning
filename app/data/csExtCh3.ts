import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Describe the differences between Random Access Memory (RAM) and Read Only Memory (ROM).",
  "id": "root",
  "children": [
    {
      "name": "Page 1",
      "id": "1-1",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the differences between Random Access Memory (RAM) and Read Only Memory (ROM).",
      "id": "1-2",
      "children": [
        {
          "name": "Hardware",
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
          "name": "Explain the differences between Random Access Memory (RAM) and Read Only Memory (ROM).",
          "id": "2-3",
          "children": [],
          "summary": "RAM is volatile memory used for temporary data storage while a computer is running, allowing for read and write operations. ROM is non-volatile memory that permanently stores data and instructions, typically used for firmware."
        }
      ],
      "summary": "RAM is volatile memory used for temporary data storage while the computer is on, allowing for read and write operations. ROM is non-volatile memory that permanently stores data and instructions, typically used for firmware."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the difference between primary storage and secondary storage in a computer system.",
      "id": "1-4",
      "children": [
        {
          "name": "Explain the difference between primary storage and secondary storage in a computer system.",
          "id": "2-4",
          "children": [],
          "summary": "Primary storage refers to components like registers, cache memory, and main memory that provide fast access to data directly by the CPU, while secondary storage includes devices like hard disks and solid-state drives used for long-term data storage with slower access times."
        }
      ],
      "summary": "Primary storage refers to memory components that the CPU can access directly, such as registers and cache memory, which provide fast access but have limited capacity. Secondary storage includes devices like hard disks and solid-state drives used for long-term data storage, which offer larger capacity but slower access times."
    },
    {
      "name": "What are some examples of remote storage options used for backup?",
      "id": "1-5",
      "children": [],
      "summary": "Examples include cloud storage, magnetic tape, RAID, and SAN."
    },
    {
      "name": "Explain the role of the I/O sub-system in a computer system.",
      "id": "1-6",
      "children": [
        {
          "name": "Explain the role of the I/O sub-system in a computer system.",
          "id": "2-5",
          "children": [],
          "summary": "The I/O sub-system manages data input and output, facilitating communication between the computer system and external devices, as well as handling data read from or written to internal storage."
        }
      ],
      "summary": "The I/O sub-system manages data input and output operations, facilitating communication between the computer and external devices, as well as handling data read from or written to storage devices."
    },
    {
      "name": "Page 4",
      "id": "1-7",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "How might useful information from an embedded system installed in a domestic appliance be communicated over a network to the owner of the appliance?",
      "id": "1-8",
      "children": [
        {
          "name": "How might useful information from an embedded system installed in a domestic appliance be communicated over a network to the owner of the appliance?",
          "id": "2-6",
          "children": [],
          "summary": "Information can be communicated via Wi-Fi or Bluetooth to a smartphone app or web interface, using protocols like MQTT or HTTP to send data such as appliance status, maintenance alerts, or energy usage."
        }
      ],
      "summary": "Information can be communicated via a mobile app or web interface, sending alerts or updates through Wi-Fi or cellular networks. This may include notifications about maintenance needs, energy usage, or operational status."
    },
    {
      "name": "Page 5",
      "id": "1-9",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main differences between Dynamic RAM (DRAM) and Static RAM (SRAM)?",
      "id": "1-10",
      "children": [],
      "summary": "DRAM requires regular recharging to maintain data and has a higher density and lower cost, while SRAM retains data indefinitely while powered, offers faster access times, and is typically used for cache memory."
    },
    {
      "name": "Page 6",
      "id": "1-11",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Give two examples of data transfer that would require a buffer in a computer system.",
      "id": "1-12",
      "children": [
        {
          "name": "Can you think of examples of data transfer that would need a buffer?",
          "id": "2-7",
          "children": [],
          "summary": "Examples include streaming video/audio, printing documents, and data transmission in network communications."
        }
      ],
      "summary": "1. Streaming video from the internet to a media player. 2. Printing documents from a computer to a printer."
    },
    {
      "name": "Page 7",
      "id": "1-13",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the function of the read head and write head in a hard disk drive.",
      "id": "1-14",
      "children": [
        {
          "name": "Explain the function of the read-write head in a hard disk drive and how it interacts with the magnetic medium.",
          "id": "2-8",
          "children": [],
          "summary": "The read-write head in a hard disk drive reads data by detecting changes in magnetisation on the platter surface, affecting electrical properties. It writes data by altering the magnetisation state of the medium, representing binary 1s and 0s."
        }
      ],
      "summary": "The read head detects the magnetisation state of the platter, converting it into an electrical signal (1 or 0), while the write head changes the magnetisation state of the platter to store data."
    },
    {
      "name": "Explain why a hard drive is considered a direct-access read-write device and describe the implications of data fragmentation on performance.",
      "id": "1-15",
      "children": [],
      "summary": "A hard drive is considered a direct-access read-write device because any sector can be accessed directly for reading or writing. However, data fragmentation occurs when sectors allocated to a file are not contiguous, leading to slower performance as the read/write head must move to different locations to access the fragmented data."
    },
    {
      "name": "Explain the difference between the laser wavelengths used for reading CDs and DVDs and the significance of this difference in terms of data storage capacity.",
      "id": "1-16",
      "children": [],
      "summary": "CDs use an infrared laser light of wavelength 780 nm, while DVDs use a red laser light of wavelength 680 nm. The shorter wavelength of the DVD laser allows for a tighter focus, enabling more data to be stored in the same area compared to CDs, thus increasing the storage capacity."
    },
    {
      "name": "Explain how data is written to and read from a CD-RW or DVD-RW disc.",
      "id": "1-17",
      "children": [],
      "summary": "Data is written by heating a special alloy material with a laser, causing it to change to liquid form and then cool to either a crystalline or amorphous solid. The crystalline solid reflects laser light, representing a '1', while the amorphous solid does not reflect light, representing a '0'. Data is read by detecting the reflected light."
    },
    {
      "name": "Explain the working principle of NAND flash memory and its advantages over traditional hard drives.",
      "id": "1-18",
      "children": [
        {
          "name": "What are the advantages and disadvantages of using SSDs compared to HDDs for laptop storage?",
          "id": "2-9",
          "children": [],
          "summary": "Advantages of SSDs include faster access speeds, lower power consumption, and greater durability due to no moving parts. Disadvantages include higher cost per GB and lower storage capacity compared to HDDs."
        }
      ],
      "summary": "NAND flash memory operates using arrays of transistors as memory cells, allowing data to be written and read efficiently. Its advantages over traditional hard drives include faster access speeds, no moving parts (increasing durability), and the ability to erase blocks of memory all at once."
    },
    {
      "name": "Page 10",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain how a liquid-crystal display (LCD) screen creates an image, including the role of backlighting and liquid crystal alignment.",
      "id": "1-20",
      "children": [
        {
          "name": "Explain how a liquid-crystal display (LCD) screen creates an image using pixels.",
          "id": "2-10",
          "children": [],
          "summary": "An LCD screen creates an image by using a matrix of liquid crystal cells that control the transmission of backlit light. Each pixel consists of liquid crystals that change alignment when a voltage is applied, altering the polarization of light passing through them. This allows for varying levels of light to be transmitted, resulting in the display of different colors."
        },
        {
          "name": "Explain how the eye-pieces in a virtual reality headset create a 3D effect for the wearer.",
          "id": "2-11",
          "children": [],
          "summary": "The eye-pieces display paired images to each eye, mimicking the way human vision perceives depth through binocular disparity, allowing the wearer to experience a 3D environment."
        },
        {
          "name": "Describe the main differences in the printing process between inkjet and laser printers.",
          "id": "2-12",
          "children": [],
          "summary": "Inkjet printers spray tiny droplets of liquid ink onto paper, while laser printers use a laser beam to create an electrostatic image on a drum, which is then transferred to paper using toner."
        }
      ],
      "summary": "An LCD screen creates an image by using a matrix of liquid crystal cells that control the transmission of backlight. The backlight, usually from LEDs, illuminates the pixel matrix. When a voltage is applied to a liquid crystal cell, the alignment of the liquid crystal molecules changes, affecting the polarization of light passing through. This modulation of light allows different colors and images to be displayed on the screen."
    },
    {
      "name": "Describe the process of how a laser printer creates an image on paper, including the role of the drum and toner.",
      "id": "1-21",
      "children": [],
      "summary": "The laser printer first charges the drum and revolves it step by step. A laser beam discharges specific positions on the drum to create an electrostatic image. Charged toner adheres to the discharged areas, and the drum then rolls over a charged sheet of paper, transferring the toner. The paper is heated to fuse the toner, sealing the image."
    },
    {
      "name": "Explain the difference between bitmap and vector graphics, and provide one advantage of each type.",
      "id": "1-22",
      "children": [],
      "summary": "Bitmap graphics are made up of pixels, which can lead to loss of quality when scaled. An advantage is that they can represent complex images with detailed color variations. Vector graphics are made up of paths defined by mathematical equations, allowing them to be scaled without loss of quality. An advantage is that they are generally smaller in file size and can be easily edited."
    },
    {
      "name": "Describe the process of creating a 3D printed object, including the role of layers and curing.",
      "id": "1-23",
      "children": [],
      "summary": "A 3D printed object is created by designing a model in CAD software, which is then split into layers. The printer uses a nozzle to deposit material layer by layer onto the printer bed. After all layers are formed, the object undergoes a curing process to ensure adhesion and achieve the desired material properties."
    },
    {
      "name": "Page 13",
      "id": "1-24",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain how a keyboard converts a key press into a character displayed on the screen.",
      "id": "1-25",
      "children": [
        {
          "name": "Describe the process by which a keyboard input is converted to a character displayed on the screen.",
          "id": "2-13",
          "children": [],
          "summary": "When a key is pressed, it closes a circuit at the intersection of row and column wires in the key matrix. The microprocessor detects this closed circuit, identifies the intersection, retrieves the corresponding character code from the ROM, and sends the character to the screen for display."
        },
        {
          "name": "Explain the significance of graphical user interfaces (GUIs) in computer systems.",
          "id": "2-14",
          "children": [],
          "summary": "GUIs allow users to interact with computers through visual icons and pointing mechanisms, making data input more intuitive and user-friendly compared to traditional text-based interfaces."
        },
        {
          "name": "Explain how a resistive touch screen detects a touch input.",
          "id": "2-15",
          "children": [],
          "summary": "A resistive touch screen detects touch input by having two flexible layers separated by a thin space. When pressure is applied by a finger, the top layer bends and makes contact with the bottom layer, creating a voltage divider at the point of contact. This allows the screen to determine the coordinates of the touch."
        }
      ],
      "summary": "When a key is pressed, it closes a circuit at the intersection of a row and column wire in the key matrix. The microprocessor detects this closed circuit, identifies the intersection, and retrieves the corresponding character code from the ROM. This character code is then sent to the screen for display."
    },
    {
      "name": "Explain how a projective capacitive touch (PCT) screen detects multiple touches simultaneously.",
      "id": "1-26",
      "children": [],
      "summary": "A PCT screen uses an array of capacitors beneath the glass surface to measure changes in capacitance caused by multiple fingertips. The mutual capacitance allows the screen to detect the position of several touches at once, enabling sophisticated applications."
    },
    {
      "name": "Explain the role of a charge-coupled device (CCD) in image capturing and processing.",
      "id": "1-27",
      "children": [
        {
          "name": "Discuss the benefits and drawbacks of different flat-screen technologies used in devices such as computers, laptops, tablets, and mobile phones.",
          "id": "2-16",
          "children": [],
          "summary": "Benefits include lightweight design, energy efficiency, and thin profiles. Drawbacks may include limited viewing angles (for some technologies), potential for screen burn-in (OLED), and varying color accuracy."
        },
        {
          "name": "Describe the function of a charge-coupled device (CCD) in the process of scanning an image.",
          "id": "2-17",
          "children": [],
          "summary": "A CCD consists of an array of photo-sensitive cells that produce an electrical response proportional to the light intensity for each cell. It requires an analogue-to-digital converter to convert the electrical signals into digital values for transmission to the computer."
        }
      ],
      "summary": "A CCD consists of an array of photo-sensitive cells that produce an electrical response proportional to light intensity. It converts the analog signals into digital values using an analogue-to-digital converter for transmission to the computer."
    },
    {
      "name": "Page 15",
      "id": "1-28",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the function of a microphone in voice input systems and describe how it converts sound into an electrical signal.",
      "id": "1-29",
      "children": [
        {
          "name": "Describe the function of a microphone in the context of voice input for a computer system.",
          "id": "2-18",
          "children": [],
          "summary": "A microphone converts sound waves into an electrical signal by causing a diaphragm to vibrate, which is then processed by an analogue-to-digital converter (ADC) to create a digital signal for the computer."
        },
        {
          "name": "Explain the process of analogue to digital conversion in sound recording and its significance.",
          "id": "2-19",
          "children": [],
          "summary": "Analogue to digital conversion involves sampling the analogue sound wave at discrete intervals and quantizing the amplitude of these samples into binary values. This process allows for digital manipulation, storage, and playback of sound, improving sound quality and enabling various digital applications."
        },
        {
          "name": "Explain what is meant by the term 'peripheral' in the context of computer devices. Provide examples of peripheral devices and categorize them into input, output, and storage devices.",
          "id": "2-20",
          "children": [],
          "summary": "The term 'peripheral' refers to any external device that connects to a computer to add functionality. Examples include input devices (e.g., keyboard, mouse), output devices (e.g., printer, monitor), and storage devices (e.g., external hard drive, USB flash drive)."
        },
        {
          "name": "Describe the differences between primary storage and secondary storage in a computer system.",
          "id": "2-21",
          "children": [],
          "summary": "Primary storage (main memory) includes RAM and ROM, which are used for immediate data access and processing. Secondary storage refers to magnetic, optical, and solid-state media used for long-term data storage."
        }
      ],
      "summary": "A microphone converts sound waves into an electrical signal by using a diaphragm that vibrates in response to sound. This vibration changes the electrical signal, which can be processed by an analogue-to-digital converter (ADC) to create a digital signal."
    },
    {
      "name": "Page 16",
      "id": "1-30",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe two differences between RAM and ROM.",
      "id": "1-31",
      "children": [],
      "summary": "1. RAM is volatile memory, meaning it loses its data when power is turned off, while ROM is non-volatile and retains data without power. 2. RAM is used for temporary data storage during operation, whereas ROM is used for permanent storage of firmware and system instructions."
    }
  ],
  "summary": "RAM is volatile memory that can be read from and written to, losing its contents when power is off, while ROM is non-volatile memory that can only be read and retains its contents without power."
};

export default data;
