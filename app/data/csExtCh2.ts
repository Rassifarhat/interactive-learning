import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "A new company has been established. It has bought some new premises which consist of a number of buildings on a single site. It has decided that all of the computer workstations in the different buildings need to be networked. They are considering ways in which the network might be set up. a One option they are considering is to use cabling for the network and to install it themselves. i Name the three types of cabling that they might consider. ii Explain two factors, other than cost, that they need to consider when choosing suitable cabling.",
  "id": "root",
  "children": [
    {
      "name": "Explain the process of electrolysis and its applications in industry.",
      "id": "1-1",
      "children": [],
      "summary": "Electrolysis is the process of using electrical energy to drive a non-spontaneous chemical reaction, typically involving the decomposition of an electrolyte into its constituent ions. In industry, it is used for electroplating, extracting metals from ores, and producing chemicals such as chlorine and hydrogen."
    },
    {
      "name": "What are the main differences between a LAN and a WAN?",
      "id": "1-2",
      "children": [
        {
          "name": "Communication and networking technologies",
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
          "name": "What are the key differences between a LAN and a WAN, and what are the typical applications of each?",
          "id": "2-3",
          "children": [],
          "summary": "A LAN (Local Area Network) covers a small geographic area, such as a home or office, and is typically used for connecting personal computers and devices within close proximity. A WAN (Wide Area Network) spans a larger geographic area, often connecting multiple LANs, and is used for communication over long distances, such as between cities or countries. Applications of LAN include file sharing and printing within an office, while WAN applications include internet access and connecting remote offices."
        }
      ],
      "summary": "A LAN (Local Area Network) covers a small geographic area, typically within a building or campus, and offers high data transfer rates with low latency. A WAN (Wide Area Network) spans a larger geographic area, connecting multiple LANs, and generally has lower data transfer rates and higher latency."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main differences between a Wide Area Network (WAN) and a Local Area Network (LAN)?",
      "id": "1-4",
      "children": [
        {
          "name": "What are the key characteristics of a typical Wide Area Network (WAN) as described in the text?",
          "id": "2-4",
          "children": [],
          "summary": "A typical WAN is used by an organization to connect sites, is not owned by the organization, is leased from a PSTN, has dedicated communication links, uses fibre-optic cables for transmission, transmits from switch to switch, connects each site via a switch, and does not have end-systems directly connected."
        },
        {
          "name": "What are two benefits of using a local area network (LAN) in an organization?",
          "id": "2-5",
          "children": [],
          "summary": "1. Cost savings by installing application software on a server instead of individual PCs. 2. Ability to share files and use centralized printing services."
        }
      ],
      "summary": "A WAN connects computers over large distances and is leased from a PSTN, while a LAN connects computers within a limited area (like a building) and is owned by the organization. WANs use fibre-optic cables and switches for transmission, whereas LANs typically connect PCs directly and may use various transmission media."
    },
    {
      "name": "Describe the characteristics of a Local Area Network (LAN) and its components.",
      "id": "1-5",
      "children": [],
      "summary": "A LAN is owned by an organization, consists of multiple individual networks at a site, uses twisted pair cables or WiFi for transmission, includes a device for connecting to other networks, and connects user systems or servers as end-systems."
    },
    {
      "name": "What are the key differences between a thin-client and a thick-client in the client-server model?",
      "id": "1-6",
      "children": [
        {
          "name": "Explain the difference between LANs and WANs in the context of networking.",
          "id": "2-6",
          "children": [],
          "summary": "LANs (Local Area Networks) cover a small geographic area, such as a single building, while WANs (Wide Area Networks) span larger areas, connecting multiple LANs over long distances."
        },
        {
          "name": "Explain the difference between a thin-client and a thick-client in the context of client-server architecture.",
          "id": "2-7",
          "children": [],
          "summary": "A thin-client relies on the server for application processing, sending input data and receiving output without local processing. A thick-client can perform local processing, may download applications to run independently, and can process data before and after interacting with the server."
        }
      ],
      "summary": "A thin-client relies on the server for application processing and only sends input and receives output, while a thick-client may perform some processing locally, can run applications downloaded from the server, and may handle output after processing."
    },
    {
      "name": "Explain the difference between a web application that allows a client system to find information and one that allows for e-commerce transactions.",
      "id": "1-7",
      "children": [],
      "summary": "A web application that allows a client system to find information primarily focuses on retrieving and displaying data, while an e-commerce web application facilitates transactions, enabling users to purchase goods or services online, involving payment processing and secure data handling."
    },
    {
      "name": "Compare and contrast the client-server model and peer-to-peer networking for file sharing, highlighting at least two advantages of each.",
      "id": "1-8",
      "children": [],
      "summary": "The client-server model allows for centralized control of file access and better protection against malware due to regular scanning of the server. In contrast, peer-to-peer networking reduces network congestion and allows for parts of files to be downloaded from multiple hosts."
    },
    {
      "name": "Page 5",
      "id": "1-9",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the differences between simplex, half duplex, and full duplex data transmission modes.",
      "id": "1-10",
      "children": [],
      "summary": "Simplex allows one-way data flow only; half duplex allows two-way data flow but not simultaneously; full duplex allows simultaneous two-way data flow."
    },
    {
      "name": "Describe the advantages of using a star topology in network configurations.",
      "id": "1-11",
      "children": [],
      "summary": "The advantages of using a star topology include: 1) Centralized management through a central device, 2) Isolation of end-systems, meaning failure of one does not affect others, 3) Easy to add or remove devices without disrupting the network, 4) Better performance due to dedicated connections, and 5) Scalability to connect to other networks, including the Internet."
    },
    {
      "name": "What is a hybrid network and why is it advantageous to use in connecting different LAN topologies?",
      "id": "1-12",
      "children": [],
      "summary": "A hybrid network is a combination of different LAN topologies or technologies, allowing for flexibility in connecting new networks to existing ones. It is advantageous because it enables the integration of various network types, such as wired and wireless LANs, without the need to replace existing infrastructure."
    },
    {
      "name": "Page 7",
      "id": "1-13",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the differences between shielded and unshielded twisted pair cables, and how does shielding affect their use?",
      "id": "1-14",
      "children": [
        {
          "name": "Compare and contrast twisted pair, coaxial, and fibre-optic cables in terms of cost, bandwidth, attenuation, interference, and need for repeaters.",
          "id": "2-8",
          "children": [],
          "summary": "Twisted pair has the lowest cost and bandwidth, is most affected by attenuation and interference, and requires repeaters more often. Coaxial is higher in cost and bandwidth, less affected by attenuation and interference, and also requires repeaters more often. Fibre-optic is the highest in cost and bandwidth, least affected by attenuation and interference, and requires repeaters the least often."
        },
        {
          "name": "What are the differences between shielded and unshielded twisted pair cables, and how does shielding affect their performance?",
          "id": "2-9",
          "children": [],
          "summary": "Shielded twisted pair (STP) cables have an additional layer of shielding to protect against electromagnetic interference (EMI), improving signal quality and reducing crosstalk. Unshielded twisted pair (UTP) cables lack this shielding, making them more susceptible to interference but generally cheaper and easier to install."
        }
      ],
      "summary": "Shielded twisted pair (STP) cables have an additional layer of insulation that protects against electromagnetic interference, making them suitable for environments with high interference. Unshielded twisted pair (UTP) cables lack this shielding, making them cheaper but more susceptible to interference, thus less suitable for high-noise environments."
    },
    {
      "name": "Describe the differences in the structure and function of coaxial cables and fibre-optic cables as shown in Figure 2.06.",
      "id": "1-15",
      "children": [],
      "summary": "Coaxial cables consist of a central conductor, an insulating layer, a metallic shield, and an outer insulating layer, allowing for the transmission of electrical signals. Fibre-optic cables, on the other hand, consist of a core made of glass or plastic surrounded by a cladding, which reflects light signals internally, enabling high-speed data transmission with minimal loss."
    },
    {
      "name": "Compare the advantages and disadvantages of wireless transmission using radio, microwave, and infrared frequencies.",
      "id": "1-16",
      "children": [
        {
          "name": "Discuss the advantages and disadvantages of guided media (cables) versus unguided media (wireless transmission) in communication systems.",
          "id": "2-10",
          "children": [],
          "summary": "Advantages of guided media include higher data rates, reduced interference, and greater security. Disadvantages include installation costs and the need for physical infrastructure. Advantages of unguided media include mobility and ease of deployment. Disadvantages include regulatory restrictions, potential interference, and lower data rates."
        }
      ],
      "summary": "Radio waves have good penetration through walls and are less affected by interference, but have lower bandwidth. Microwaves offer a better bandwidth and can be directed, but have higher attenuation and require line-of-sight. Infrared has the highest bandwidth but cannot penetrate walls and is limited to indoor use, making it suitable for specific applications."
    },
    {
      "name": "Explain the advantages and disadvantages of using satellite transmission for global communications compared to fibre-optic cables.",
      "id": "1-17",
      "children": [],
      "summary": "Advantages of satellite transmission include wider coverage area and ability to connect distant ground-based components without the need for extensive cabling. Disadvantages include greater transmission delays due to distance and potential interference from the Van Allen belts."
    },
    {
      "name": "Calculate the time taken for a transmission from the surface of the Earth to a medium-Earth-orbit satellite, given the speed of light is 300,000 km/s.",
      "id": "1-18",
      "children": [],
      "summary": "Time = Distance / Speed. For medium-Earth-orbit (approximately 20,200 km), Time = 20,200 km / 300,000 km/s = 0.0673 seconds or approximately 67.3 milliseconds."
    },
    {
      "name": "Page 10",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the role of a repeater in a bus network configuration?",
      "id": "1-20",
      "children": [
        {
          "name": "Explain the function of a repeater in a bus network configuration.",
          "id": "2-11",
          "children": [],
          "summary": "A repeater receives an input signal and generates a new full-strength signal to prevent attenuation over long distances, ensuring reliable communication."
        },
        {
          "name": "What is the role of a Wireless Access Point (WAP) in a WiFi LAN?",
          "id": "2-12",
          "children": [],
          "summary": "The WAP serves as the central device that enables communication between wireless devices and the wired network."
        }
      ],
      "summary": "A repeater receives an input signal and generates a new full-strength signal to prevent attenuation over long distances."
    },
    {
      "name": "Page 11",
      "id": "1-21",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the role of CSMA/CD in legacy Ethernet networks and describe how modern Ethernet has changed this requirement.",
      "id": "1-22",
      "children": [
        {
          "name": "What are the different versions of Ethernet and which version is commonly used in modern systems?",
          "id": "2-13",
          "children": [],
          "summary": "The different versions of Ethernet include 10BASE-T, 100BASE-TX, 1000BASE-T, 10GBASE-T, and 40GBASE-T. The most commonly used version in modern systems is 1000BASE-T (Gigabit Ethernet), which provides sufficient performance for typical applications for the next 5-10 years."
        }
      ],
      "summary": "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) was used in legacy Ethernet to manage collisions during message transmission on a shared medium. It required end-systems to check for activity before transmitting and to detect collisions to avoid message corruption. In modern Ethernet, switched networks eliminate collisions by using full-duplex links, making CSMA/CD unnecessary."
    },
    {
      "name": "Page 12",
      "id": "1-23",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the role of an Internet Service Provider (ISP) in the structure of the Internet.",
      "id": "1-24",
      "children": [
        {
          "name": "Describe the hierarchical structure of Internet Service Providers (ISPs) and their functions.",
          "id": "2-14",
          "children": [],
          "summary": "The hierarchical structure of ISPs includes access ISPs at the bottom, which provide Internet access to individuals or companies. These connect to middle tier or regional ISPs, which in turn connect to tier 1 (backbone) ISPs at the top of the hierarchy. Connections between ISPs are managed by Internet Exchange Points (IXPs)."
        },
        {
          "name": "Explain the process of ionic bonding using sodium chloride as an example.",
          "id": "2-15",
          "children": [],
          "summary": "Ionic bonding occurs when sodium (Na) donates one electron to chlorine (Cl), resulting in the formation of Na⁺ and Cl⁻ ions. The electrostatic attraction between these oppositely charged ions forms the ionic bond in sodium chloride (NaCl)."
        },
        {
          "name": "How near are you to an under-the-sea Internet fibre-optic cable?",
          "id": "2-16",
          "children": [],
          "summary": "The proximity to an under-the-sea Internet fibre-optic cable can vary significantly depending on geographical location, but generally, most urban areas are within a few hundred kilometers of such cables."
        },
        {
          "name": "Explain how PSTNs have evolved to support modern internet services.",
          "id": "2-17",
          "children": [],
          "summary": "PSTNs have upgraded from carrying analogue voice data to using fibre-optic cables and digital technology, enabling improved leased line services and the provision of broadband and WiFi hotspot services."
        },
        {
          "name": "Explain the process of ionic bonding using sodium chloride (NaCl) as an example.",
          "id": "2-18",
          "children": [],
          "summary": "Ionic bonding occurs when sodium (Na) donates one electron to chlorine (Cl), resulting in the formation of Na+ and Cl- ions. The electrostatic attraction between these oppositely charged ions forms the ionic bond in sodium chloride (NaCl)."
        }
      ],
      "summary": "ISPs provide Internet access to individuals and companies, connecting them to middle tier or regional ISPs, which in turn connect to tier 1 (backbone) ISPs, forming a hierarchical structure."
    },
    {
      "name": "Explain how a mobile phone connects to the Internet using a standard cell tower.",
      "id": "1-25",
      "children": [],
      "summary": "A mobile phone connects to the Internet by communicating with a standard cell tower, which is part of the wireless telephone network. The cell tower relays the phone's signals to the Internet, allowing for data transmission."
    },
    {
      "name": "Page 14",
      "id": "1-26",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the difference between the Internet and the World Wide Web.",
      "id": "1-27",
      "children": [
        {
          "name": "Explain the difference between the Internet and the World Wide Web.",
          "id": "2-19",
          "children": [],
          "summary": "The Internet is a global network of interconnected computers, while the World Wide Web is a distributed application that operates over the Internet, consisting of websites and web pages that can contain hyperlinks."
        },
        {
          "name": "What are the three possible approaches an organisation can take when establishing a private cloud?",
          "id": "2-20",
          "children": [],
          "summary": "1. Full responsibility for creating and managing the cloud on-site connected to a private network. 2. Outsourcing to a third-party for the creation and management of an on-site installation connected to a private network. 3. Outsourcing the creation and management of an Internet accessible system by a third-party."
        },
        {
          "name": "Explain what a 'bit stream' is and how it relates to data transmission in streaming media.",
          "id": "2-21",
          "children": [],
          "summary": "A 'bit stream' is a continuous sequence of bits (0s and 1s) transmitted over a network. In streaming media, data is encoded in bytes and sent as a byte stream, which is then converted into a bit stream for transmission, allowing for real-time access to audio or video content."
        }
      ],
      "summary": "The Internet is an internetwork of interconnected networks, while the World Wide Web (WWW) is a distributed application that operates on the Internet, consisting of websites and web pages that contain hyperlinks."
    },
    {
      "name": "Explain the importance of bit rate in media streaming and how it affects user experience.",
      "id": "1-28",
      "children": [],
      "summary": "Bit rate is crucial in media streaming as it determines the speed at which data is delivered to the user. A matching bit rate ensures that media plays back in real-time without distortion. Insufficient bit rates can lead to buffering and poor quality, while excessive bit rates may exceed the user's bandwidth, causing interruptions."
    },
    {
      "name": "In a bit-streaming scenario, explain the significance of the low-water mark and high-water mark in relation to buffer management.",
      "id": "1-29",
      "children": [],
      "summary": "The low-water mark (100 KiB) indicates the minimum buffer level before action is taken to refill the buffer, while the high-water mark (900 KiB) indicates the maximum level before action is taken to stop data input. This helps prevent buffer underflow and overflow, ensuring smooth streaming."
    },
    {
      "name": "{\"q\":\"Calculate the amount of data input to the buffer and removed from the buffer over 2, 4, 6, 8, 10, and 12 seconds. Estimate when the buffer will fill to the high-water mark and how long it takes for the buffer to drop back to the low-water mark after halting the incoming transmission.\",\"a\":\"Data input rate = 1 Mbps = 1000 Kbps; Data removal rate = 300 Kbps. In 2 seconds: Input = 2000 Kbps, Removed = 600 Kbps, Net = 1400 Kbps. In 4 seconds: Input = 4000 Kbps, Removed = 1200 Kbps, Net = 2800 Kbps. In 6 seconds: Input = 6000 Kbps, Removed = 1800 Kbps, Net = 4200 Kbps. In 8 seconds: Input = 8000 Kbps, Removed = 240",
      "id": "1-30",
      "children": [],
      "summary": "??"
    },
    {
      "name": "Page 17",
      "id": "1-31",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the structure of an IPv4 address and the significance of the netID and hostID.",
      "id": "1-32",
      "children": [
        {
          "name": "Explain the structure of an IPv4 address and the significance of the netID and hostID in the addressing scheme.",
          "id": "2-22",
          "children": [],
          "summary": "An IPv4 address is structured as a 32-bit binary number divided into a netID and a hostID. The netID identifies the network and is used for routing, while the hostID identifies the specific device within that network. This separation allows efficient routing of data across the Internet."
        }
      ],
      "summary": "An IPv4 address consists of 32 bits divided into a netID and a hostID. The netID identifies the network to which the device belongs, while the hostID identifies the specific device on that network. This hierarchical structure allows efficient routing of data across the Internet."
    },
    {
      "name": "What is the significance of the dotted decimal notation 128.12.2.30 in computer networking?",
      "id": "1-33",
      "children": [],
      "summary": "It represents an IPv4 address used to identify a device on a network."
    },
    {
      "name": "Create an example of the binary code for a Class C address expressed in CIDR format. Give the corresponding dotted decimal representation.",
      "id": "1-34",
      "children": [
        {
          "name": "Create an example of the binary code for a Class C address expressed in CIDR format. Give the corresponding dotted decimal representation.",
          "id": "2-23",
          "children": [],
          "summary": "Binary code: 11000000 10101000 00000001 00000001 00001000 (CIDR suffix /24). Dotted decimal representation: 192.168.1.1/24."
        },
        {
          "name": "Explain the concept of sub-netting in relation to IPv4 addressing and its benefits for an organisation with multiple LANs.",
          "id": "2-24",
          "children": [],
          "summary": "Sub-netting involves dividing a larger network into smaller, manageable sub-networks (LANs) to optimize the use of IP addresses. In the example, an organisation with 150 employees uses seven Class C netIDs for its LANs, allowing for 1792 potential workstation addresses. This efficient structure reduces wasted IP addresses and enhances network management."
        }
      ],
      "summary": "Binary code: 11000000 10101000 00000001 00000001 00000000\nDotted decimal representation: 192.168.1.1/24"
    },
    {
      "name": "Explain how sub-netting is used in the given organization and its benefits.",
      "id": "1-35",
      "children": [],
      "summary": "Sub-netting divides the Class C netID into smaller segments for individual LANs, using the top three bits for LAN identification and the remaining five bits for workstations. This allows for efficient management of IP addresses, with 256 total addresses available, of which only 150 are used, leaving 106 available for future expansion. It optimizes address allocation and maintains flexibility for growth."
    },
    {
      "name": "Explain the significance of private networks in relation to IP address allocation.",
      "id": "1-36",
      "children": [],
      "summary": "Private networks allow organizations to use non-unique IP addresses internally, conserving public IP address space and enhancing security by isolating internal traffic from the public Internet."
    },
    {
      "name": "Explain the purpose of Network Address Translation (NAT) in private networks.",
      "id": "1-37",
      "children": [],
      "summary": "NAT allows multiple private networks to use the same internal IP addresses while providing a single public IP address for Internet connectivity, enhancing security and conserving IP address space."
    },
    {
      "name": "What is the main difference between dynamic and static IP addresses?",
      "id": "1-38",
      "children": [
        {
          "name": "What is the purpose of the octet in an IPv4 address?",
          "id": "2-25",
          "children": [],
          "summary": "The octet in an IPv4 address represents one of the four 8-bit segments of the address, allowing for 256 possible values (0-255) in each segment, which helps in identifying devices on a network."
        },
        {
          "name": "Explain the significance of IPv6 in relation to the limitations of IPv4 addressing.",
          "id": "2-26",
          "children": [],
          "summary": "IPv6 addresses the limitations of IPv4 by providing a vastly larger address space (2^128 addresses), enabling more devices to connect to the Internet and allowing for more complex address structuring."
        }
      ],
      "summary": "Dynamic IP addresses can change and are re-allocated by the ISP, while static IP addresses remain constant and require an additional fee."
    },
    {
      "name": "What is the significance of the double colon (::) in the IPv6 address 72E6::CFFE:3D20:1180:295A:FF01?",
      "id": "1-39",
      "children": [],
      "summary": "The double colon (::) indicates that one or more groups of 16 bits, represented by '0000', have been omitted to simplify the address."
    },
    {
      "name": "Calculate the number of IPv6 addresses available per square metre of the Earth's surface and discuss if this is sufficient for future needs.",
      "id": "1-40",
      "children": [],
      "summary": "IPv6 provides 2^128 addresses. The surface area of the Earth is approximately 510 million km², which is 5.1 x 10^14 m². Therefore, the number of addresses per square metre is 2^128 / (5.1 x 10^14) ≈ 2.5 x 10^113 addresses/m². Yes, this is more than sufficient for current and future needs."
    },
    {
      "name": "Page 22",
      "id": "1-41",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the purpose of the Domain Name System (DNS) in the context of the Internet.",
      "id": "1-42",
      "children": [
        {
          "name": "Discuss two ways in which the efficiency of research methods can be improved when conducting scientific investigations.",
          "id": "2-27",
          "children": [],
          "summary": "1. Utilize advanced search engines and databases that specialize in scientific literature to access peer-reviewed articles more quickly. 2. Implement systematic review techniques to organize and prioritize sources, ensuring relevant information is gathered efficiently."
        },
        {
          "name": "What are the main factors to consider when choosing a transmission medium for networking?",
          "id": "2-28",
          "children": [],
          "summary": "Bandwidth, attenuation, interference, and the need for repeaters."
        }
      ],
      "summary": "The DNS translates human-readable domain names into IP addresses, allowing users to access websites without needing to remember numerical IP addresses."
    },
    {
      "name": "Explain the difference between an ionic bond and a covalent bond, including examples of each.",
      "id": "1-43",
      "children": [],
      "summary": "An ionic bond is formed through the transfer of electrons from one atom to another, resulting in the formation of charged ions; for example, sodium chloride (NaCl). A covalent bond is formed when two atoms share one or more pairs of electrons; for example, water (H2O)."
    },
    {
      "name": "Page 24",
      "id": "1-44",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Name the three types of cabling that they might consider for networking.",
      "id": "1-45",
      "children": [],
      "summary": "Twisted pair, coaxial, and fiber optic."
    },
    {
      "name": "a State what IP stands for.",
      "id": "1-46",
      "children": [],
      "summary": "Internet Protocol."
    }
  ],
  "summary": "i. Twisted pair, coaxial, fibre-optic. ii. 1. Bandwidth: The maximum data rate the cable can support. 2. Attenuation: The signal loss over distance that affects performance."
};

export default data;
