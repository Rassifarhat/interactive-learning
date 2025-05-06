import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-3",
  "id": "root",
  "children": [
    {
      "name": "Chapter 3",
      "id": "1",
      "children": [
        {
          "name": "What is hardware and provide examples?",
          "id": "1-1",
          "summary": "Hardware refers to the physical components of a computer system or electronic device that you can touch and see. Examples of hardware include the central processing unit (CPU), memory (RAM), hard drives, motherboards, graphics cards, input devices like keyboards and mice, output devices like monitors and printers, and storage devices such as USB drives.",
          "children": []
        },
        {
          "name": "What are the learning objectives for IGCSE curriculum?",
          "id": "1-2",
          "summary": "The learning objectives for the IGCSE curriculum typically include developing knowledge and understanding of the subject matter, promoting skills in analysis, evaluation, and synthesis of information, fostering critical thinking, enhancing problem-solving abilities, encouraging effective communication, and preparing students for further education and life skills. These objectives aim to provide a well-rounded education that supports academic achievement as well as personal growth.",
          "children": []
        },
        {
          "name": "Show understanding of the need for input, output, primary memory and secondary (including removable) storage.",
          "id": "1-3",
          "summary": "Input refers to the data and instructions entered into a computer system, while output refers to the processed data that is conveyed back to the user or to another device. Primary memory, such as RAM, is used for temporary storage of data and instructions that are actively in use, providing fast access speeds. Secondary storage, including hard drives and removable storage devices like USB flash drives, is used for long-term data storage, retaining information even when the power is off. Each component plays a crucial role in ensuring the efficient operation of computer systems.",
          "children": []
        }
      ]
    },
    {
      "name": "3 01 Overview Of Computer System Hardware Functionality",
      "id": "2",
      "children": [
        {
          "name": "Describe the memory hierarchy and its significance in data storage.",
          "id": "2-1",
          "summary": "The memory hierarchy in computing refers to the organization of different types of storage based on their speed, cost, and capacity. It typically consists of various levels, including registers, cache memory, main memory, and secondary storage. Registers, found within the CPU, offer the fastest access speed, followed by cache memory which has faster access than main memory. Main memory is used for active data and programs, while secondary storage, which includes hard disks and auxiliary storage, provides long-term data storage. The memory hierarchy is significant as it helps in selecting the appropriate components for a computer system based on cost, access speed, and capacity. Users often desire a large amount of primary storage that is inexpensive and allows quick access, but this is impractical; thus, there is a need for secondary storage as a cost-effective solution for long-term data retention. Additionally, storage media can be categorized based on accessibility, including integral parts (like hard disks or SSDs), removable items (like floppy disks or optical discs), peripheral devices (like memory sticks), portable items for personal backup, and remote storage accessible via networks, such as cloud storage, magnetic tape, RAID, or SAN.",
          "children": []
        }
      ]
    },
    {
      "name": "Data Output",
      "id": "3",
      "children": [
        {
          "name": "List the available options for data input into a computer system.",
          "id": "3-1",
          "summary": "* Keyboard or keypad entry by a user\n* User interaction with a screen using screen icons or menus; possibly using a pointing device and possibly involving the use of a touch screen\n* A user using a game controller\n* A user using a scanner\n* A user using a microphone in tandem with voice recognition software\n* Reading from any of the storage devices described earlier\n* Transmission on a network link.",
          "children": []
        }
      ]
    },
    {
      "name": "3 02 Embedded Systems",
      "id": "4",
      "children": [
        {
          "name": "How might useful information from an embedded system installed in a domestic appliance be communicated over a network to the owner of the appliance?",
          "id": "4-1",
          "summary": "Useful information from an embedded system installed in a domestic appliance can be communicated to the owner via a network using several methods: 1. **Mobile Applications**: The embedded system can be connected to a mobile app through Bluetooth or Wi-Fi, allowing the owner to receive updates, notifications, and control settings remotely. 2. **Email Alerts**: The system can send automated email notifications to the owner regarding status updates, maintenance reminders, or alerts about malfunctions. 3. **Web Interfaces**: The appliance can have a web-based interface that the owner can access through a browser, providing real-time data and control options. 4. **Push Notifications**: If the appliance is connected to the Internet, it can send push notifications directly to the owner's smartphone about issues needing attention or when tasks are completed (e.g., laundry finished). 5. **Integration with Smart Home Systems**: The appliance can communicate with smart home platforms (like Google Home or Amazon Alexa), allowing the owner to receive information and control the appliance through voice commands. 6. **Sensors and Monitoring Systems**: Data from sensors can be processed and transmitted via IoT protocols (like MQTT or HTTP), enabling continuous monitoring and diagnostics over the network. These options ensure that the owner remains informed and can take necessary actions regarding their domestic appliance efficiently.",
          "children": []
        }
      ]
    },
    {
      "name": "Explain the difference between RAM and ROM, including their types and characteristics.",
      "id": "5",
      "summary": "RAM (Random-Access Memory) and ROM (Read-Only Memory) are two primary components of a computer's main memory. RAM is volatile, meaning it loses its data when the computer is switched off, and it allows for read and write operations. The two main types of RAM are Dynamic RAM (DRAM) and Static RAM (SRAM). DRAM consists of capacitors that leak electricity and requires constant refreshing every few milliseconds to maintain the data, making it cheaper and denser but slower. Conversely, SRAM is made from flip-flops that store data indefinitely while powered, offering faster access times but at a higher cost and lower density than DRAM. Generally, DRAM is used for main memory in computers, while SRAM is utilized for cache memory due to its speed. On the other hand, ROM is non-volatile, retaining data when the computer is turned off and is typically used to store essential programs like the bootstrap program. There are four types of ROM: 1) Mask ROM, where data is programmed during manufacturing and cannot be changed; 2) Programmable ROM (PROM), which can be programmed by the system builder but is permanent once set; 3) Erasable PROM (EPROM), which can be erased with ultraviolet light and reprogrammed but requires removal from the circuit; and 4) Electrically Erasable PROM (EEPROM), which allows data to be erased and reprogrammed using electrical signals without removing the chip from the circuit, though it remains a read-only memory.",
      "children": []
    },
    {
      "name": "Discussion Point",
      "id": "6",
      "children": [
        {
          "name": "Can you think of examples of data transfer that would need a buffer?",
          "id": "6-1",
          "summary": "Examples of data transfer that would need a buffer include: 1. Streaming video or audio, where data is buffered to ensure smooth playback without interruptions. 2. Printing documents, where the print job is sent to a buffer before being processed by the printer. 3. Downloading files from the internet, where data is buffered to ensure it is received and stored correctly before being accessed. 4. Keyboard input, where keystrokes are buffered before being processed by the system. 5. Network data transfer, where incoming data packets are buffered before being processed by the application.",
          "children": []
        }
      ]
    },
    {
      "name": "3 04 Secondary Storage Devices",
      "id": "7",
      "children": [
        {
          "name": "Describe the construction and operation of a hard disk drive.",
          "id": "7-1",
          "summary": "A hard disk drive consists of more than one platter, with each platter having a read-write head for each side. The platters spin in unison at the same speed, and the read-write heads are attached to actuator arms that allow them to move over the surfaces of the platters. The motion of each read-write head is synchronized with the other heads, and a cushion of air ensures that the heads do not touch the platter surfaces. Data is stored in concentric tracks, each consisting of a sequence of bits formatted into sectors, which contain a defined number of bytes. The sector is the smallest unit of storage. Because the heads' movement is synchronized, related data can be stored on the same tracks across different disks, accessible by moving one head. To store a file, sufficient sectors must be allocated, which could become fragmented over time as files are created, deleted, or edited, leading to performance degradation. A defragmentation program can reorganize sectors to restore performance. The hard drive is a direct-access read-write device, allowing any sector to be read or written, but data in a sector must be read sequentially. Additionally, manufacturers must account for the increasing length of tracks from the center to the edge of the disk in their designs to optimize data storage capacity.",
          "children": []
        }
      ]
    },
    {
      "name": "Describe the principles of how an optical disc drive operates.",
      "id": "8",
      "summary": "An optical disc has one spiral track running from the inner extreme of the surface to the outer edge. During operation, the disc spins while a laser moves across, ensuring that it is continuously focused on the spiral track. The track on the surface of the disc consists of 'pits' and 'lands'. The laser beam is reflected from the surface of the disc, and the difference between the reflection from a pit compared to that from a land can be detected. This difference in the intensity of the light that the detector receives can be interpreted as either a 1 or a 0, allowing a binary code to be read from the disc. For CD-RW and DVD-RW technologies, the reflective surface is a special alloy material. When data is written to the disc ('burn' process), the heat generated by the absorption of the laser light changes the material to liquid form. Depending on the intensity of the laser light, the material reverts to either a crystalline or an amorphous solid form when it cools. When the disc is read, the laser light is reflected from the crystalline solid but not from the amorphous solid, allowing the coding of a 1 or 0. Despite there being only one track, the disc functions as a direct-access device because the laser can move forwards or backwards. The data is formatted into sectors along the track, similar to how a magnetic hard disk is formatted. The storage capacity of the optical disc depends on how closely individual physical representations of a binary digit can be placed, which is influenced by the speed of rotation and, more importantly, the wavelength of the light; shorter wavelength light can be better focused. This is why a DVD can store more than a CD, but less than a Blu-ray disc.",
      "children": []
    },
    {
      "name": "Solid State Media",
      "id": "9",
      "children": [
        {
          "name": "Carry out some research into the technologies currently available for storage, considering options available for the storage device inside a laptop computer and peripheral storage devices. Create tables for each, identify viable and uncompetitive technologies, and note any new technologies likely to come into common use.",
          "id": "9-1",
          "summary": "### Internal Storage Devices in Laptops\n| Technology Type | Cost (Approx.) | Storage Capacity | Access Speed (Read/Write) |\n|-----------------|----------------|------------------|-----------------------------|\n| HDD (Hard Disk Drive) | $30 - $100 | 500GB - 4TB | 80 - 160 MB/s |\n| SSD (Solid State Drive) | $50 - $300 | 128GB - 2TB | 200 - 550 MB/s |\n| NVMe SSD (Non-Volatile Memory Express) | $100 - $400 | 256GB - 2TB | 1000 - 5000 MB/s |\n\n### Peripheral Storage Devices\n| Technology Type | Cost (Approx.) | Storage Capacity | Access Speed (Read/Write) |\n|-----------------|----------------|------------------|-----------------------------|\n| External HDD | $50 - $150 | 1TB - 10TB | 80 - 160 MB/s |\n| External SSD | $100 - $500 | 250GB - 4TB | 400 - 2000 MB/s |\n| USB Flash Drive | $10 - $150 | 16GB - 2TB | 20 - 400 MB/s |\n| Optical Disc (e.g., DVD, Blu-Ray) | $1 - $10 per disc | 4.7GB (DVD) - 100GB (Blu-Ray) | 1 - 20 MB/s |\n\n### Analysis of Storage Technologies\n1. **Viable Technologies**:\n   - SSDs (including NVMe) remain highly viable due to their speed advantages and decreasing costs.\n   - External SSDs have also gained popularity due to their portability and performance.\n   - USB Flash Drives are convenient for everyday use.\n\n2. **Uncompetitive Technologies**:\n   - Traditional HDDs are becoming less competitive in speed compared to SSDs and NVMe SSDs despite having larger capacities at lower costs.\n   - Optical Discs are largely being replaced by digital downloads and cloud storage, making them less relevant.\n\n3. **Emerging Technologies**:\n   - New Technologies like 3D NAND and future advancements in storage class memory (SCM) could create faster and larger storage solutions.\n   - Quantum storage and DNA data storage are innovative concepts that could shape the future of data storage, though they are not yet common in consumer use.",
          "children": []
        }
      ]
    },
    {
      "name": "3 05 Output Devices Provided For A User Of A General Purpose Computer System",
      "id": "10",
      "children": [
        {
          "name": "Describe how an image is displayed on a screen using pixels and explain the technologies involved in pixel creation.",
          "id": "10-1",
          "summary": "An image is displayed on a screen through the concept of pixels. Each screen pixel is made up of three sub-pixels, typically colored red, green, and blue (RGB). By varying the light emitted from these sub-pixels, a full range of colors can be produced. The technologies used to create pixels have evolved over time. \n\n1. **Cathode Ray Tube (CRT) Technology**: In this original technology, there is no individual component for a pixel. The inner surface of the CRT screen is coated with phosphor, which emits light when struck by electrons. Each pixel is activated by controlling the direction of an electron beam. In color CRT displays, red, green, and blue phosphors are arranged to form an array of pixels, creating a colorful display.\n\n2. **Flat-Screen Technologies**: These have largely replaced CRTs, with Liquid-Crystal Display (LCD) screens being a common example. Each pixel in an LCD is formed by individual cells containing liquid crystals. The pixel matrix is illuminated by backlighting, often provided by light-emitting diodes (LEDs). \n   - Polarized light is directed towards the pixel matrix, and an additional polariser is placed between the pixel matrix and the screen. When a voltage is applied to an individual pixel cell, it affects the orientation of the liquid crystal molecules. This changes the polarization of light passing through the cell and alters what is displayed on the screen. \n\nOverall, LCD technology enhances the way images are displayed by controlling light transmission through liquid crystals, while CRT technology relies on electron beams and phosphors.",
          "children": []
        },
        {
          "name": "What are the components and functionality of a virtual reality headset?",
          "id": "10-2",
          "summary": "The most important components of a virtual reality headset are the two eye-pieces. These eye-pieces are fed paired images from the controlling system which, when looked at together, provide the sensation of being in a 3D environment. The images can be collected using specialised photographic techniques or can be created using a 3D graphics package. The wearer of the headset has the ability to control which part of the 3D environment is in view by moving their head or using a controlling device.",
          "children": []
        },
        {
          "name": "Explain the operation of inkjet and laser printers, including the steps involved in printing using both technologies.",
          "id": "10-3",
          "summary": "Inkjet Printer Operation: An inkjet printer works by feeding a sheet of paper into the printer. The printhead then moves across the paper, depositing ink onto it. After each pass, the paper is moved forward slightly, and the printhead repeats the process until the entire page is printed. The printhead uses nozzles that spray tiny droplets of ink onto the paper, and the ink is supplied from one or more ink cartridges. For color printing, separate color inks are used. \n\nLaser Printer Operation: The operation of a laser printer can be summarized in the following steps: 1) The drum is given an electric charge. 2) The drum starts to revolve step by step. 3) At each step, a laser beam is directed by a mirror and lens assembly to specific positions across the width of the drum. 4) The laser is either switched off (to keep the charge) or switched on (to discharge the position). 5) This process continues until a full-page electrostatic image is created on the drum. 6) The drum is coated with charged toner that only adheres to the discharged areas. 7) The drum rolls over a sheet of paper that is initially charged. 8) The paper is discharged, and it passes through heated rollers that fuse the toner particles to the paper surface. 9) After printing, the drum is discharged before starting the process again for the next page. For color printing, separate toners for cyan, magenta, yellow, and black are used, and the process is repeated for each color. Image quality in both technologies is dependent on the number of dots per inch (dpi), and software controls the number of dots per pixel.",
          "children": []
        }
      ]
    },
    {
      "name": "Explain the differences between bitmap and vector graphics, and describe the role of graphics plotters and 3D printers in creating hard-copy outputs.",
      "id": "11",
      "summary": "A graphic image can be stored as a bitmap or as a vector graphic. Bitmap graphics are composed of a grid of pixels, while vector graphics use mathematical equations to represent images, allowing for scalability without loss of quality. A graphics plotter prints hard-copies of vector graphics by converting them into a bitmap version, using pens to draw on large sheets of paper that are moved by sprockets. This allows for an accurate representation of designs, which is essential in technical applications used by engineers and designers. Additionally, 3D printers are employed for computer-aided manufacture (CAM) to create physical objects. In 3D printing, a design created in a computer-aided design (CAD) package is split into layers, and material is extruded layer by layer from a nozzle to build the object. After formation, the object must be cured to ensure layer adhesion and proper material transformation. An example of this technology is the creation of a bionic ear using three 'inks': silicone for structure, a gel with chondrocyte cells, and silicone infused with silver nanoparticles, culminating in an incubation process for cartilage production.",
      "children": []
    },
    {
      "name": "3 06 Input Devices Provided For A User Of A General Purpose Computer System",
      "id": "12",
      "children": [
        {
          "name": "Explain how a keyboard converts a key press into a character displayed on the screen.",
          "id": "12-1",
          "summary": "When a key is pressed on the keyboard, it causes contact at a point where wires in a key matrix intersect. The keyboard has electrical circuitry, a microprocessor, and a ROM chip. The microprocessor continuously tests the key matrix to identify if any electrical circuit involving a row wire and a column wire has become closed due to a key press. Once the microprocessor detects a closed circuit, it identifies the specific intersection that corresponds to the key pressed. The processor then refers to data stored in the ROM to determine the character code associated with the key at that intersection. Finally, the character code is sent to the screen for display. This process gives the illusion that the character is displayed immediately after the key press, but in reality, several steps occur to convert the key press into a character.",
          "children": []
        },
        {
          "name": "Describe how data can be input through interaction with a screen.",
          "id": "12-2",
          "summary": "Data can be input through interaction with a screen in several ways. Initially, users primarily used a keyboard and a monitor, where software displayed a menu on the screen, allowing users to input data by keying in a number corresponding to a menu option. A significant advancement occurred with the introduction of graphical user interfaces (GUIs) in the 1980s, which became standard features for microcomputer systems. A GUI includes various screen icons that facilitate user control over data input. To effectively use a GUI, a pointing mechanism is necessary, such as a computer mouse, which controls the position of a cursor on the screen. This advancement transformed the screen from merely an output device into an interactive input device, activated by mouse clicks.",
          "children": []
        },
        {
          "name": "Describe the different technologies used in touch screen devices.",
          "id": "12-3",
          "summary": "Touch screen technology has evolved with two primary types of screens: resistive and capacitive. Early versions utilized CRT screens but could also function with flat screens. The earliest mechanism involved emitters positioned on the sides of the screen and detectors opposite them, using infrared light or ultrasonic waves. When a finger touched the screen, it blocked some of the emitted signals, causing a detectable change in the signal level. Modern touch-sensitive screens consist of layers, where the first type, the resistive touch screen, has two layers separated by a small space. When pressure is applied, the top layer contacts the bottom layer, creating a voltage divider that determines the touch point's coordinates. The second type, the capacitive touch screen, operates without a soft surface and takes advantage of capacitance changes caused by a finger on a glass screen. The most effective variant is projective capacitive touch (PCT) with mutual capacitance, which contains arrays of capacitors beneath the screen, allowing for multiple touch detection simultaneously. In both types, a processor reads measurements to compute the touch position and initiate the requested action.",
          "children": []
        }
      ]
    },
    {
      "name": "Extension Question 3 02",
      "id": "13",
      "children": [
        {
          "name": "Investigate which flat-screen technologies are used in any computer, laptop, tablet or mobile/cell phone that you use. Discuss the benefits and drawbacks associated with their use.",
          "id": "13-1",
          "summary": "Flat-screen technologies commonly used in computers, laptops, tablets, and mobile/cell phones include Liquid Crystal Display (LCD), Light Emitting Diode (LED), Organic Light Emitting Diodes (OLED), and Super AMOLED. \n\n**1. LCD (Liquid Crystal Display):** \n   - **Benefits:** \n     - Generally more affordable than other technologies. \n     - Good color reproduction and clarity. \n     - Lightweight and thin design, making them suitable for mobile devices. \n   - **Drawbacks:** \n     - Limited viewing angles compared to OLED. \n     - Slower response times, which may not be ideal for fast-moving content. \n     - Higher power consumption compared to OLED. \n\n**2. LED (Light Emitting Diode):** \n   - **Benefits:** \n     - Brighter display and better contrast ratios than traditional LCD due to backlighting. \n     - Energy-efficient with lower power consumption. \n     - Slim form factor and lightweight. \n   - **Drawbacks:** \n     - Potential for backlight bleed affecting uniformity. \n     - Limited performance in dark scenes due to reliance on backlighting. \n\n**3. OLED (Organic Light Emitting Diodes):** \n   - **Benefits:** \n     - Each pixel emits its own light, providing true blacks and vibrant colors. \n     - Wide viewing angles and faster response times. \n     - Thinner and flexible designs are possible. \n   - **Drawbacks:** \n     - Higher manufacturing costs leading to more expensive devices. \n     - Risk of burn-in where static images can leave a permanent mark on the screen. \n     - Limited lifespan compared to LCD/LED technology. \n\n**4. Super AMOLED:** \n   - **Benefits:** \n     - Integrates touch sensors directly into the display, reducing thickness. \n     - Superior color accuracy and vibrancy, with deeper blacks due to pixel-level illumination. \n     - Uses less power in dark mode as pixels can be turned off. \n   - **Drawbacks:** \n     - High production costs contribute to higher device prices. \n     - Risk of burn-in is also present, similar to OLED. \n     - Can produce a 'blue shift' when viewed at an angle. \n\nIn summary, different flat-screen technologies have their unique benefits and drawbacks regarding cost, display quality, power consumption, and lifespan, influencing their use in various devices.",
          "children": []
        },
        {
          "name": "Explain the process of capturing an image using a scanner and describe the role of a charge-coupled device (CCD) in this process.",
          "id": "13-2",
          "summary": "A scanner captures an image by reversing the printing process. It takes a physical image or text on a sheet of paper and creates a digital representation. The process involves holding the paper in a fixed position while a light source moves from one end of the sheet to the other to cover its width. The reflected light is then directed by mirrors and lenses onto a charge-coupled device (CCD). A CCD consists of an array of photo-sensitive cells that produce an electrical response proportional to the light intensity captured by each cell. To convert these electrical signals into digital values that can be transmitted to the computer, an analogue-to-digital converter is required.",
          "children": []
        }
      ]
    },
    {
      "name": "3 07 Input And Output Of Sound",
      "id": "14",
      "children": [
        {
          "name": "Describe the process of voice input and output in a computer system, including the devices and components involved.",
          "id": "14-1",
          "summary": "Voice input and output in a computer system involves several key components: for input, a microphone is required. The microphone contains a diaphragm, which is a flexible material that vibrates when it detects incoming sound. This diaphragm is connected to suitable circuitry, which translates the vibrations into changes in an electrical signal. There are different types of microphones; a condenser microphone utilizes capacitance change, while another type employs a piezoelectric crystal. The analogue electrical signal produced by the microphone is then converted to a digital signal by an analogue-to-digital converter (ADC) for processing within the computer. For output, a speaker (or loudspeaker) is needed. This process is essentially the reverse of input. Digital data from the computer is converted to analogue signals by a digital-to-analogue converter (DAC). The analogue signal is applied as a varying electrical current to the speaker. In most speakers, this current flows through a coil that is suspended in a magnetic field created by a permanent magnet. As the electrical current changes in size and direction, the coil moves back and forth, which in turn causes the diaphragm of the speaker to move and produce sound. The entire input and output process is managed by a sound (audio) card installed in the computer.",
          "children": []
        },
        {
          "name": "Describe how music and voice sounds can be processed and outputted.",
          "id": "14-2",
          "summary": "Music as well as voice sounds can be recorded or live streamed in the same way that voices are recorded. Some sound recording devices carry out the analogue to digital conversion very early on in the process so that all the sound processing is done digitally. Music can be output via speakers or stored in digital form for later playback.",
          "children": []
        },
        {
          "name": "The description 'peripheral' is often used to describe devices that can be connected to a computer. In your research did you come across the word being used? Is it a useful one or is it possibly not so because of the lack of a clear definition?",
          "id": "14-3",
          "summary": "The term 'peripheral' is widely used to refer to devices that are externally connected to a computer system, such as printers, scanners, keyboards, mice, and external storage devices. It is useful because it categorizes these devices based on their function and connection method. However, its usefulness may be debated due to varying definitions and classifications in different contexts. Some may argue that the term lacks clarity, as it can encompass a broad range of devices that serve different purposes and could include both input and output devices, as well as storage devices. Therefore, while 'peripheral' is a commonly accepted term, its effectiveness can be influenced by the specific classification systems and technological context in which it is used.",
          "children": []
        },
        {
          "name": "Describe the different types of storage in a computer system.",
          "id": "14-4",
          "summary": "Primary storage is main memory, consisting of RAM (either DRAM or SRAM) and ROM, which can include types such as PROM, EPROM, or EEPROM. Secondary storage encompasses magnetic, optical, and solid-state media. Output devices comprise screens, printers, plotters, and speakers, while input devices include the keyboard, scanner, and microphone. Notably, screens can serve both input and output functions.",
          "children": []
        }
      ]
    },
    {
      "name": "Examples of primary and secondary storage devices include: Hard disk, DVD-RW, Flash memory. For each device, describe the type of media used.",
      "id": "15",
      "summary": "Hard disk: The hard disk uses magnetic media to store data on rotating disks coated with a magnetic material. Data is read and written using read/write heads that move across the platters. DVD-RW: The DVD-RW uses optical media that stores data in spiral tracks on a disc. A laser reads and writes data by changing the reflectivity of the disc's surface. Flash memory: Flash memory uses solid-state technology to store data in non-volatile memory cells, allowing for faster read and write operations without moving parts.",
      "children": []
    }
  ]
};

export default data;