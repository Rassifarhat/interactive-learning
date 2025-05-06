import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-2",
  "id": "root",
  "children": [
    {
      "name": "Chapter 2",
      "id": "1",
      "children": [
        {
          "name": "Explain the key concepts of communication and networking technologies.",
          "id": "1-1",
          "summary": "Communication and networking technologies refer to the devices, systems, and protocols that enable the exchange of data and information between computers and other devices. Key concepts include:\n\n1. **Networking Models**: Understand the two main networking models - the OSI (Open Systems Interconnection) model with its seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application; and the TCP/IP model with its four layers: Link, Internet, Transport, and Application.\n\n2. **Transmission Media**: Different types of physical media used for data transmission, including twisted pair cables, coaxial cables, fiber optic cables, and wireless communication methods.\n\n3. **Network Topologies**: Various ways to structure a network such as star, ring, mesh, and bus topologies, each with advantages and disadvantages related to performance, reliability, and costs.\n\n4. **Protocols**: Standardized rules for communication between devices, such as TCP (Transmission Control Protocol), IP (Internet Protocol), HTTP (HyperText Transfer Protocol), and SMTP (Simple Mail Transfer Protocol).\n\n5. **Network Devices**: Hardware components that facilitate communication in a network, including routers, switches, hubs, modems, and access points.\n\n6. **IP Addressing**: The system of assigning a unique identifier (IP address) to each device on a network to facilitate communication; understanding IPv4 and IPv6 addressing schemes.\n\n7. **Wireless Technologies**: Methods of communication that do not require physical connections, such as Wi-Fi, Bluetooth, and cellular networks, along with their uses and limitations.\n\n8. **Data Security**: The importance of securing communication through measures like encryption, firewalls, and secure protocols to protect data during transmission and prevent unauthorized access.\n\n9. **Network Types**: Understanding different types of networks, including LAN (Local Area Network), WAN (Wide Area Network), MAN (Metropolitan Area Network), and VPN (Virtual Private Network), with their specific characteristics and applications.\n\n10. **Internet and Web Technologies**: The role of the Internet as a global network connecting millions of private, public, academic, business, and government networks, including the technologies that support web browsing, email, and online services.",
          "children": []
        },
        {
          "name": "What are the learning objectives?",
          "id": "1-2",
          "summary": "The learning objectives outline the key goals that students should achieve during the learning process, providing a framework for assessment and evaluation of their understanding and skills in the subject matter.",
          "children": []
        },
        {
          "name": "Show understanding of the purpose and benefits of networking devices.",
          "id": "1-3",
          "summary": "Networking devices are essential components in a network infrastructure that facilitate communication and the sharing of resources between computers and devices. The primary purposes of networking devices include: 1. Connecting multiple devices: Devices like switches and routers allow various computers and peripherals to connect to a network, enabling file sharing and resource utilization. 2. Managing data traffic: Routers manage data traffic between different networks, ensuring efficient data transfer and reducing congestion. 3. Enhancing security: Firewalls and intrusion detection systems help protect against unauthorized access and cyber threats by monitoring and controlling incoming and outgoing network traffic. 4. Providing network services: Devices such as servers can provide services like storing data, hosting applications, and managing user access. The benefits include improved communication efficiency, resource sharing, centralized data management, enhanced security, and cost savings through shared resources.",
          "children": []
        }
      ]
    },
    {
      "name": "2 01 The Evolution Of The Purpose And Benefits Of Networking",
      "id": "2",
      "children": [
        {
          "name": "Describe the key characteristics and benefits of a Wide Area Network (WAN).",
          "id": "2-1",
          "summary": "A Wide Area Network (WAN) is characterized by the following: it is used by an organisation or company to connect sites or branches; it is not owned by the organisation but leased from a public switched telephone network company (PSTN); a dedicated communication link is provided by the PSTN; the transmission medium is typically fibre-optic cable; transmission within the WAN occurs from switch to switch; each site is connected to the WAN via a switch; and there are no end-systems connected directly to the WAN. The benefits of having computers connected by a WAN include: the ability to run a 'job' on a remote computer that has the required application software; accessing a data archive stored on a remote computer; and transmitting messages electronically to users on remote computers.",
          "children": []
        },
        {
          "name": "What are the characteristics and benefits of a Local Area Network (LAN)?",
          "id": "2-2",
          "summary": "A Local Area Network (LAN) is typically characterized by the following features: it is used by an organization or company within a site or branch, it is owned by the organization or company, it is one of many individual LANs at one site, the transmission medium will be twisted pair cable or WiFi, the LAN will contain a device that allows connection to other networks, and there will be end-systems connected which will be user systems or servers.\n\nThe benefits of connecting PCs in a LAN include: the savings on the expense of installing application software by installing it on an application server attached to the LAN instead of individual PCs; the ability to attach a file server to store larger files and share files between users; the option to connect one or more higher quality printers to a print server instead of individual printers for each user's PC; the facilitation of electronic mail for communication among staff instead of using paper memos; and the potential for a 'paper-less office' where files are stored in digital form on a file server rather than as paper copies.",
          "children": []
        }
      ]
    },
    {
      "name": "Discussion Point",
      "id": "3",
      "children": [
        {
          "name": "Describe the developments in computing and networking from the 1990s to the 2000s, including key terms and technologies.",
          "id": "3-1",
          "summary": "The 1990s marked the beginning of the modern era of computing and network use with the widespread adoption of the Internet. The term 'Internet' is a shortened form of 'internetwork', which refers to a collection of interconnected networks. Local Area Networks (LANs) connect to Wide Area Networks (WANs), which are further connected to the Internet, enabling global access to resources. During the 2000s, the usage of mobile devices and wireless networking technologies became prevalent, further expanding the capabilities of users. Although the fundamental purposes and benefits of networking remain consistent, their scale and scope have dramatically increased, allowing individuals to have complete access to networks through their personal devices.",
          "children": []
        },
        {
          "name": "Explain the client-server model, including the roles of thin-client and thick-client, and circumstances in which the client-server approach is beneficial.",
          "id": "3-2",
          "summary": "The client-server model is an architecture used in computing where the server provides resources or services, and the client accesses those resources or services. Initially, this model was used in large organizations with internal networks connecting individual Local Area Networks (LANs) via a Wide Area Network (WAN), with powerful central computers acting as servers, which clients (usually PCs) connected to for accessing the server's resources. In the modern client-server model, the client is typically a web browser connected to the Internet, while the server is a web server hosted online. The server provides applications which the client uses. \n\nThere are two main types of clients in this model: \n1. **Thin-client**: \n   - Chooses an application to run on the server.\n   - Sends input data to the server when requested by the application.\n   - Receives output from the application.\n\n2. **Thick-client**: \n   - Chooses an application provided by the server.\n   - Possibly processes data before running the application on the server and after receiving output from the application.\n   - Alternatively, it may download the application from the server and run it locally.\n   - In thick-client mode, processing can be controlled by a scripting language.\n\nThe client-server approach is preferred in situations where: \n- The server stores a database accessed by the client system. \n- The server hosts a web application that allows the client to find or provide information. \n- The server enables e-commerce or financial transactions for the client system.",
          "children": []
        }
      ]
    },
    {
      "name": "Describe and compare the client-server model with the peer-to-peer model in file sharing.",
      "id": "4",
      "summary": "In a client-server model, a user uploads files to a file server, which then allows other users (clients) to download these files from the server. The advantages of the client-server model include: 1) It allows an organisation to control the downloading and use of files. 2) Files can be better protected from malware attacks because they are stored on one server, which can be regularly scanned using appropriate anti-virus software. \n\nIn contrast, a peer-to-peer (P2P) model operates without a single server. Each peer (networked computer) stores some of the files, allowing each peer to act both as a client and a server. The advantages of the peer-to-peer model include: 1) It avoids the possibility of network congestion when many clients attempt to download files simultaneously. 2) Parts of a file can be downloaded separately. 3) The parts are available from more than one host. \n\nIn summary, the client-server model emphasizes central control and protection against malware, while the peer-to-peer model facilitates decentralized file sharing with advantages in efficiency and flexibility.",
      "children": []
    },
    {
      "name": "Describe the requirements for a data communications system and explain the different modes of data transmission.",
      "id": "5",
      "summary": "A data communications system requires five components: a sender, a receiver, a transmission medium, a message, and a protocol. The transmission medium can be either air (e.g., for WiFi) or cables (e.g., for Ethernet). Data can be transmitted through the medium in three modes: 1) Simplex mode, where data flow is one-way only; 2) Half duplex, where data can flow either way but not simultaneously; 3) Full duplex, allowing simultaneous both-ways data flow.",
      "children": []
    },
    {
      "name": "Discuss the concept of hybrid networks and their advantages in connecting different LAN topologies.",
      "id": "6",
      "summary": "In a hybrid network, several Local Area Networks (LANs) are connected, each of which can have different topologies or supporting technologies. This results in a network configuration that allows for flexibility and adaptability in design. A special connecting device is necessary to ensure the hybrid network functions correctly, facilitating communication between the varied LANs. One significant advantage of hybrid networks is the ability to integrate a new topology LAN with existing LANs even when it is impractical or impossible to use the existing topology for the new LAN. For example, a scenario may arise where a wired LAN is already in place, and there is a necessity to connect a new wireless LAN to it. This capability to link different topologies enhances network scalability and usability.",
      "children": []
    },
    {
      "name": "2 03 Transmission Media",
      "id": "7",
      "children": [
        {
          "name": "Discuss the suitability of twisted pair, coaxial, and fibre-optic cables for network installations, considering cost, bandwidth, attenuation, interference, and the need for repeaters.",
          "id": "7-1",
          "summary": "Twisted pair, coaxial, and fibre-optic cables are the three main types of network cables, each with distinct characteristics that affect their suitability for various applications. \n\n1. **Cost**: \n   - Twisted pair cables are the least expensive option. \n   - Coaxial cables are more expensive than twisted pair but less than fibre-optic. \n   - Fibre-optic cables have the highest cost due to more advanced technology and materials used. \n\n2. **Bandwidth or Data Rate**: \n   - Twisted pair cables provide the lowest bandwidth and data transmission rates. \n   - Coaxial cables offer higher bandwidth than twisted pair. \n   - Fibre-optic cables have the highest bandwidth capabilities and data rates, making them suitable for high-speed applications. \n\n3. **Attenuation at High Frequency**: \n   - Twisted pair cables are affected by attenuation, causing signal deterioration at high frequencies. \n   - Coaxial cables are most affected, leading to more significant signal loss over distance. \n   - Fibre-optic cables exhibit the least amount of attenuation, preserving signal quality even at high frequencies. \n\n4. **Interference**: \n   - Twisted pair cables are worst affected by interference, making them less reliable in environments with potential electronic noise. \n   - Coaxial cables are less affected than twisted pair. \n   - Fibre-optic cables are least affected by interference, providing more consistent performance in various conditions. \n\n5. **Need for Repeaters**: \n   - Twisted pair cables require more frequent use of repeaters to maintain signal quality over longer distances. \n   - Coaxial cables also require repeaters more often than fibre-optic. \n   - Fibre-optic cables need repeaters less often due to their superior performance. \n\nIn conclusion, fibre-optic cables excel in performance and bandwidth but at a higher cost, making them ideal for new installations. However, when replacing existing copper cables, the cost implications of switching to fibre-optic may not be justified. Twisted pair cables are commonly used for telephone connections and in high-speed local area networks due to their lower cost, despite their limitations in bandwidth and interference.",
          "children": []
        },
        {
          "name": "Twisted pair cable can be shielded or unshielded. What are the options for this? How does shielding affect the use of the cable?",
          "id": "7-2",
          "summary": "Twisted pair cable can be divided into two options based on shielding: shielded twisted pair (STP) and unshielded twisted pair (UTP). STP has a shield that protects the wires inside from electromagnetic interference (EMI) and crosstalk from adjacent pairs of wiring. This shielding allows STP to be used in environments with high interference and supports longer cable runs compared to UTP. On the other hand, UTP lacks such shielding and is more susceptible to interference, making it suitable for less demanding environments where signal quality is not heavily compromised. UTP is also typically easier to install and more cost-effective than STP.",
          "children": []
        }
      ]
    },
    {
      "name": "Wireless",
      "id": "8",
      "children": [
        {
          "name": "Compare the advantages and disadvantages of cable and wireless transmission methods.",
          "id": "8-1",
          "summary": "Cables are referred to as 'guided media' while wireless is called 'unguided media'; however, this is misleading as only radio wave transmission is truly unguided, since microwaves and infrared can also direct transmissions. Some advantages of cable transmission include the stability and reliability of the connection, while disadvantages include the need for permission to lay cables from landowners. Wireless transmission, while convenient because it does not require physical cables, is subject to government regulations on frequencies used, and interference can significantly affect performance, depending on the frequencies in use. For global communications, fibre-optic cables and satellite transmission are the main technologies. Mobile phones now predominantly use wireless transmission methods. In a small home or office, both wired and wireless are equally efficient, but wireless is often preferred as it does not require installation of cables. Furthermore, repeaters are needed less often for wireless transmission. However, for satellite systems, one must consider satellite types: geostationary Earth orbit (GEO) satellites provide extensive coverage for long-distance communication and only three are needed for global service, while medium-Earth-orbit (MEO) satellites need ten for global positioning system (GPS) coverage, and low-Earth-orbit (LEO) satellites require about fifty for full global coverage but have many more in current deployment. The downside of satellite transmission includes transmission delays due to greater distances which may lead to issues within the network.",
          "children": []
        }
      ]
    },
    {
      "name": "Calculate the approximate time taken for a transmission from the surface of the Earth to a medium-Earth-orbit satellite. (Take the speed of light to be 300000 km per second.)",
      "id": "9",
      "summary": "To calculate the time taken for a transmission to a medium-Earth-orbit (MEO) satellite, we first need to know the approximate altitude of a MEO satellite. A typical MEO satellite orbits at about 20,000 kilometers above the Earth's surface. Using the speed of light, which is 300,000 kilometers per second, we can use the formula: time = distance / speed. The distance for one way is approximately 20,000 km. Therefore, the time taken for a transmission to the satellite would be: \n \nTime = 20,000 km / 300,000 km/s = 0.06667 seconds, or approximately 66.67 milliseconds (ms).",
      "children": []
    },
    {
      "name": "2 04 Lan Hardware",
      "id": "10",
      "children": [
        {
          "name": "Describe the differences between bus and star configurations in wired LANs.",
          "id": "10-1",
          "summary": "In a bus configuration, the network consists of a series of sockets linked by coaxial or twisted pair cables, with terminators at each end to prevent signals from reflecting back down the bus. Each end-system, which can be either a user workstation or a server, requires a short length of cable with an RJ-45 connector at each end, connecting it to the bus socket and the LAN port. In contrast, a star configuration has each end-system connected to a central device using longer lengths of the same type of cable with RJ-45 connectors. This central device can be a hub, switch, or router, with switches being the most common. Additionally, a bus can be extended by linking two cables with a repeater to overcome signal attenuation over long distances, while segments of a bus network can be connected using a bridge that stores network addresses for the end-systems in both segments. The LAN port on an end-system connects to a Network Interface Card (NIC), which has a unique network address for identifying the end-system.",
          "children": []
        },
        {
          "name": "What is WiFi and how does it function as a wireless LAN?",
          "id": "10-2",
          "summary": "WiFi, also known as WLAN in some countries, refers to wireless Ethernet and is formally described by the IEEE 802.11 standard. It operates as a wireless Local Area Network (LAN) that utilizes radio frequency transmission for connectivity. The primary device in a WiFi LAN is a Wireless Access Point (WAP), which can also function as an end-system in a wired network. A WAP is capable of communicating with an end-system in the WiFi LAN, given that the end-system is equipped with a Wireless Network Interface Card (WNIC).",
          "children": []
        }
      ]
    },
    {
      "name": "2 05 Ethernet",
      "id": "11",
      "children": [
        {
          "name": "Carry out some research about the different versions of Ethernet. Which version is implemented for the systems you use? For how long will it give sufficient performance?",
          "id": "11-1",
          "summary": "Ethernet has several versions, with the most common being: 10BASE-T (10 Mbps), 100BASE-TX (Fast Ethernet - 100 Mbps), 1000BASE-T (Gigabit Ethernet - 1 Gbps), 10GBASE-T (10 Gigabit Ethernet - 10 Gbps), and newer versions such as 40GBASE-T (40 Gbps) and 100GBASE-T (100 Gbps). The version implemented in the systems I use is likely 1000BASE-T (Gigabit Ethernet), given its widespread use in modern networks. This version provides sufficient performance for typical tasks such as streaming, gaming, and general browsing for the next 5-10 years, assuming technological advancements do not rapidly outpace these speeds. However, for more demanding applications or larger networks, upgrading to 10GBASE-T may be necessary to ensure adequate performance in the future.",
          "children": []
        }
      ]
    },
    {
      "name": "2 06 The Internet Infrastructure",
      "id": "12",
      "children": [
        {
          "name": "Explain the hierarchical structure of Internet Service Providers (ISPs).",
          "id": "12-1",
          "summary": "The hierarchical structure of Internet Service Providers (ISPs) consists of several distinct levels. At the top of the hierarchy are tier 1 ISPs, also known as 'backbone' ISPs, which connect to major Internet content providers. Below them are middle tier or regional ISPs that connect to these tier 1 ISPs. Access ISPs, which provide Internet access to individuals or companies, connect to the middle tier ISPs. Connections between ISPs are managed through Internet Exchange Points (IXPs). This structure illustrates a layered hierarchy where access ISPs serve end-users, regional ISPs aggregate these connections, and tier 1 ISPs serve as the backbone of the Internet.",
          "children": []
        },
        {
          "name": "How many ISPs or major Internet content providers are you familiar with?",
          "id": "12-2",
          "summary": "There are numerous Internet Service Providers (ISPs) and major Internet content providers worldwide. Some of the well-known ISPs include AT&T, Verizon, Comcast, Spectrum, and British Telecom. Major Internet content providers include companies like Google, Facebook, Amazon, Netflix, and Microsoft. The exact number of ISPs varies by region and can include both large national providers and smaller local ones, totaling hundreds or even thousands globally.",
          "children": []
        },
        {
          "name": "How near are you to an under-the-sea Internet fibre-optic cable?",
          "id": "12-3",
          "summary": "The proximity to an under-the-sea Internet fibre-optic cable can vary greatly depending on your geographical location. Under-the-sea fibre-optic cables are generally laid in specific routes that connect continents and major countries, especially in coastal areas. If you are located near a coastal region where these cables land, you may be quite close, potentially within a few kilometers. However, if you are situated inland or in a location far from these cable landing points, you may be several hundred kilometers away. It's also important to note that many under-the-sea cables are located in deep ocean waters, making them inaccessible and not directly observable.",
          "children": []
        },
        {
          "name": "Describe the role of PSTN in the development of Internet infrastructure and the types of services they provide.",
          "id": "12-4",
          "summary": "The Public Switched Telephone Network (PSTN), also known as plain old telephone service (POTS), has historically provided significant infrastructure support for the Internet. Initially, during the early years of networking, PSTNs carried analogue voice data, but they also enabled the transmission of digital data through the use of modems. These modems converted digital data to analogue signals for transmission and reversed the process at the receiving end, allowing for dial-up connections which offered modest-speed, shared access. Organisations could alternatively opt for leased line services, which provided dedicated, permanently connected links with guaranteed transmission speeds, commonly used to establish Wide Area Networks (WANs) or Metropolitan Area Networks (MANs). Recently, PSTNs have upgraded their main communication lines to fibre-optic cables utilizing digital technology, allowing them to improve leased line services for Internet Service Providers (ISPs). Additionally, PSTNs now provide their own ISP services which include two types of offerings: a broadband network connection for traditional network access and WiFi hotspot technology, where an access point connects to a wired network to provide Internet access.",
          "children": []
        },
        {
          "name": "Describe how mobile phones can be used to access the Internet.",
          "id": "12-5",
          "summary": "Mobile phones equipped with the appropriate software can communicate with a standard cell tower to access the wireless telephone network. This wireless network, provided by mobile phone companies acting as Internet Service Providers (ISPs), then offers a connection to the Internet.",
          "children": []
        }
      ]
    },
    {
      "name": "2 07 Applications That Make Use Of The Internet",
      "id": "13",
      "children": [
        {
          "name": "Describe the difference between the Internet and the World Wide Web (WWW).",
          "id": "13-1",
          "summary": "The Internet is an Internetwork, while the World Wide Web (WWW) is a distributed application that is available on the Internet. The web consists of an enormous collection of websites, each containing one or more web pages. A key feature of a web page is its ability to include hyperlinks, which allow for direct and immediate access to other web pages when clicked.",
          "children": []
        },
        {
          "name": "Explain the different approaches an organisation can take when establishing its own private cloud and discuss the advantages and disadvantages of using a public cloud.",
          "id": "13-2",
          "summary": "An organisation can take three possible approaches when establishing its own private cloud: 1) The organisation takes full responsibility for creating and managing the cloud installed on-site and connected to a private network; 2) The organisation outsources to a third-party the creation and management of an on-site installation connected to a private network; 3) The organisation outsources the creation and management of an Internet accessible system by a third-party. In contrast, a public cloud is created, managed, and owned by a third-party cloud service provider and can be accessed by any individual user or organisation. \n\nThe services provided by clouds are similar to those of file servers and application servers, accessible via a browser from any suitable device in any location. Services can be characterised as infrastructure provision, platform provision, or software provision. \n\nAdvantages of using a cloud include better performance for running software, increased storage capacity, facilities for software development and testing, and the ability to run high-performance applications without the need for high costs associated with buying and installing software. Additionally, users do not require extensive technical expertise due to outsourcing. \n\nHowever, disadvantages relate primarily to the use of a public cloud. The cloud service provider has complete access to all data stored on the cloud, raising concerns about data privacy and the potential sharing of data with third parties. There are also security concerns regarding the reliance on the cloud service provider to ensure data cannot be lost.",
          "children": []
        },
        {
          "name": "Explain the process and challenges of streaming media over the Internet.",
          "id": "13-3",
          "summary": "Streaming media makes use of the Internet for leisure activities such as listening to music or watching videos. Before data is transmitted, it is stored in bytes, which can be transmitted sequentially as a 'byte stream'. Due to the large file sizes involved, streamed media is always compressed to a sequence of bits, known as a 'bit stream'. Compression techniques can be employed to convert the byte stream into a more efficient bit stream with fewer bits overall. For successful decoding at the receiver end, the data must be sent as a bit stream.\n\nThere are two categories of streaming media: on-demand and real-time (live) transmission. In on-demand streaming, the media source is a website where media is already stored, allowing users to download files for later viewing or listening. In contrast, real-time streaming delivers content as it is created, such as during live sporting events. A significant challenge in real-time streaming is managing the high volume of users watching simultaneously, which requires the media to be transmitted to numerous content provider servers before reaching individual users.\n\nDelivering media content smoothly is crucial for user experience. The bit rate determines how the content is delivered; for example, a poor-quality video may require a bit rate of 300 kbps, whereas a reasonably good-quality audio file can be delivered at 128 kbps. The buffer plays a critical role by storing incoming media data and delivering it at the correct bit rate for smooth playback. It is essential that data is sent into the buffer at a higher rate to account for any delays.\n\nThe bandwidth of the network connection limits the rate of data transmission to the buffer. For example, good-quality movie presentations often require a broadband connection of about 2.5 Mbps. To accommodate different users, videos may come in multiple compression levels; the most highly compressed version is of poorer quality but has a lower bit rate suitable for users with slower Internet connections. A well-sized buffer and a media player that monitors buffer levels are crucial for providing a satisfactory streaming experience.",
          "children": []
        }
      ]
    },
    {
      "name": "Consider a bit-streaming scenario for a video where the following values apply: the buffer size is 1 MiB, the low-water mark is set at 100 KiB, the high-water mark is set at 900 KiB, the incoming data rate is 1 Mbps, and the video display rate is 300 Kbps. Assume that the video is playing and that the buffer content has dropped to the low-water mark. The media player sets the controls for data input to begin again. Calculate the amount of data that will be input to the buffer in two seconds and the amount of data that will be removed from the buffer in the same time period. Repeat the calculation for 4, 6, 8, 10, and 12 seconds. From this data, estimate when the buffer will have filled up to the high-water mark. Assuming that the incoming transmission is halted at this time, calculate how long it will be before the buffer content has again fallen to the low-water mark level.",
      "id": "14",
      "summary": {
        "buffer_parameters": {
          "buffer_size": "1 MiB (1024 KiB)",
          "low_water_mark": "100 KiB",
          "high_water_mark": "900 KiB"
        },
        "data_rates": {
          "incoming_data_rate": "1 Mbps (125 KiB/s)",
          "video_display_rate": "300 Kbps (37.5 KiB/s)"
        },
        "calculations": [
          {
            "time_seconds": 2,
            "data_input": "250 KiB",
            "data_output": "75 KiB",
            "buffer_content_change": "250 KiB - 75 KiB = 175 KiB"
          },
          {
            "time_seconds": 4,
            "data_input": "500 KiB",
            "data_output": "150 KiB",
            "buffer_content_change": "500 KiB - 150 KiB = 350 KiB"
          },
          {
            "time_seconds": 6,
            "data_input": "750 KiB",
            "data_output": "225 KiB",
            "buffer_content_change": "750 KiB - 225 KiB = 525 KiB"
          },
          {
            "time_seconds": 8,
            "data_input": "1000 KiB",
            "data_output": "300 KiB",
            "buffer_content_change": "1000 KiB - 300 KiB = 700 KiB"
          },
          {
            "time_seconds": 10,
            "data_input": "1250 KiB",
            "data_output": "375 KiB",
            "buffer_content_change": "1250 KiB - 375 KiB = 875 KiB"
          },
          {
            "time_seconds": 12,
            "data_input": "1500 KiB",
            "data_output": "450 KiB",
            "buffer_content_change": "1500 KiB - 450 KiB = 1050 KiB"
          }
        ],
        "buffer_fill_time": {
          "estimated_fill_time_to_high_water_mark": "approximately 10 seconds, when buffer reaches 900 KiB",
          "time_until_low_water_mark_reached": "approximately 8 seconds; after fill halts, the buffer will take time to drop to 100 KiB."
        }
      },
      "children": []
    },
    {
      "name": "2 08 Ip Addressing",
      "id": "15",
      "children": [
        {
          "name": "Explain the IPv4 addressing scheme including the structure of different address classes.",
          "id": "15-1",
          "summary": "IPv4 addressing uses Internet Protocol version 4, devised in the late 1970s, which is based on 32 bits (four bytes) to define an IPv4 address. This allows for $2^{32}$ different addresses, approximately four billion in total. Given the global population is about seven billion, with nearly half having Internet access, this number is becoming insufficient. The addressing scheme consists of a hierarchical structure: a group of bits defines a network (netID) and another group defines a host on that network (hostID). There are five classes of IPv4 addresses, but the first three classes are most common:\n\n- Class A: Class identifier is 0, with 7 bits for netID and 24 bits for hostID, allowing for 128 networks and about 16 million hosts each.\n- Class B: Class identifier is 10, with 14 bits for netID and 16 bits for hostID, allowing for about 16,384 networks and 65,536 hosts each.\n- Class C: Class identifier is 110, with 21 bits for netID and 8 bits for hostID, allowing for about 2 million networks and 256 hosts each.\n\nThe issues arose with the increase in LANs supporting PCs, which led to inadequacy in Class B netIDs and a limited number of hostIDs in Class C. The usual representation of an IP address in transmission is in 32-bit binary code, but for user-friendliness, it is represented in dotted decimal notation, e.g., 128.12.2.30.",
          "children": []
        }
      ]
    },
    {
      "name": "Discussion Point",
      "id": "16",
      "children": [
        {
          "name": "Create an example of the binary code for a Class C address expressed in CIDR format. Give the corresponding dotted decimal representation.",
          "id": "16-1",
          "summary": "An example of a Class C address expressed in CIDR format could be an address with a netID of 192.168.1.0 and a suffix of 24. The binary code representation for this address is: 11000000.10101000.00000001.00000000/24. The corresponding dotted decimal representation is 192.168.1.0/24.",
          "children": []
        },
        {
          "name": "Explain the concept of sub-netting in the context of IP addressing and its benefits for an organisation with multiple LANs.",
          "id": "16-2",
          "summary": "Sub-netting is a technique used to divide a larger network into smaller, more manageable segments called subnets. This approach allows for a more efficient use of hostIDs by applying a structured organization to the address space. For example, in a medium-sized organization with about 150 employees, each having their own workstation, sub-netting allows for better IP address management. The organization would originally require seven individual Class C netIDs for their six department LANs and one head-office LAN, where each netID is identified by the first 24 bits of the IPv4 address, leaving the remaining 8 bits for hostIDs. This would result in a total of 1792 possible addresses (256 addresses per LAN multiplied by 7 LANs), which exceeds the actual need, creating 1642 unused addresses.\n\nBy applying sub-netting, the organization would only need to allocate one Class C netID, for example, from 194.10.9.0 to 194.10.9.255. The hostID can be structured in a way that the top three bits represent individual LANs and the remaining five bits represent individual workstations. This setup would allow the router to route traffic accurately to workstations across the LANs via a gateway. In this structure, even though only 150 workstations are used, there are 106 unused addresses, which provides room for future expansion while keeping the other six netIDs available for potential use by other organizations.",
          "children": []
        }
      ]
    },
    {
      "name": "Explain the purpose and function of network address translation (NAT) in private networks.",
      "id": "17",
      "summary": "Network address translation (NAT) allows large organizations to create private networks (intranets) that use the same Internet protocols while deviating from the principle that every IP address should be unique. The main purpose of NAT is to facilitate Internet connectivity while maintaining a private network structure. NAT uses a single public IP address for the entire private network, which is visible over the Internet and utilized for sending and receiving data. Internally, organizations must assign private IP addresses selected from specific ranges, which include: 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, and 192.168.0.0 to 192.168.255.255. This allows multiple private networks to use the same IP addresses simultaneously without interference, as the Internet does not recognize these private IP addresses. The NAT box, equipped with software, examines incoming and outgoing transmissions, providing security checks to ensure data is directed to the correct internal addresses. Overall, NAT enhances security by isolating the internal network from the Internet while still enabling connectivity.",
      "children": []
    },
    {
      "name": "Static And Dynamic Ip Addresses",
      "id": "18",
      "children": [
        {
          "name": "Can you find out which IP addressing scheme is being used when you are connected to the Internet?",
          "id": "18-1",
          "summary": "To determine the IP addressing scheme being used when connected to the Internet, you typically check whether your device is using IPv4 or IPv6 addressing. You can do this by using the command prompt or terminal. For Windows, open Command Prompt and type 'ipconfig' to view the assigned IP address. For macOS or Linux, open Terminal and type 'ifconfig' or 'ip a'. If the IP address is in the format 'xxx.xxx.xxx.xxx' (where xxx is a number from 0 to 255), it is using IPv4. If the address starts with '2001:' or has colons, it is using IPv6. Additionally, you can utilize online tools such as 'WhatIsMyIP.com' which can display your public IP address and indicate if it's IPv4 or IPv6. This information helps in understanding the addressing scheme in use.",
          "children": []
        },
        {
          "name": "Describe the characteristics of IPv6 addressing and provide examples.",
          "id": "18-2",
          "summary": "IPv6 uses a 128-bit addressing scheme which allows for $2^{128}$ different addresses, accommodating the need for more complex structuring of addresses. IPv6 addresses are documented in a colon hexadecimal notation, divided into 16-bit parts, with each part represented by four hexadecimal characters. Some abbreviations are permitted. Examples of IPv6 addresses include: a full address '68E6:7C48:FFFE:FFFF:3D20:1180:695A:FF01'; an abbreviated address '72E6::CFFE:3D20:1180:295A:FF01' where ':0000:0000:' is replaced by '::'; an address where leading zeros are omitted '6C48:23:FFFE:FFFF:3D20:1180:95A:FF01'; and an IPv4 address used in IPv6 as '$::$ 192.31.20.46'.",
          "children": []
        }
      ]
    },
    {
      "name": "If IPv6 addressing is used, how many addresses would be available per square metre of the Earth's surface? Do you think there will be enough to go round?",
      "id": "19",
      "summary": "IPv6 uses 128-bit addresses, allowing for 2^128 unique addresses. The surface area of the Earth is approximately 510 million square kilometres or 510 trillion square metres. To find the number of addresses available per square metre, divide the total number of addresses by the total surface area in square metres: 2^128 / 510 trillion = approximately 3.4x10^23 addresses per square metre. Given this vast number, it is highly likely that there will be more than enough IPv6 addresses available for every square metre of the Earth's surface.",
      "children": []
    },
    {
      "name": "2 09 Domain Names",
      "id": "20",
      "children": [
        {
          "name": "In several places you have been asked to carry out some research. Are you using the most efficient search methods? Specifically, how could they be improved?",
          "id": "20-1",
          "summary": "To improve my search methods, I could start by using specific keywords instead of broad terms to narrow down results. Implementing advanced search techniques, such as using quotation marks for exact phrases or Boolean operators (AND, OR, NOT), could enhance relevancy. Additionally, utilizing academic databases, library resources, and reputable websites rather than general search engines will likely yield more credible results. I should also evaluate the sources for reliability and bias, and consider different formats and types of information (articles, journals, databases) to gain a comprehensive understanding of the topic.",
          "children": []
        },
        {
          "name": "What are the main options for file sharing in networking and describe their characteristics?",
          "id": "20-2",
          "summary": "Client-server and peer-to-peer networking are options for file sharing. In client-server networking, a central server provides resources or services to multiple clients, making it easier to manage and secure data. In contrast, peer-to-peer networking allows each participant (peer) to share files directly with others without a central server, which facilitates decentralized file distribution.",
          "children": []
        }
      ]
    },
    {
      "name": "a One option they are considering is to use cabling for the network and to install it themselves. i Name the three types of cabling that they might consider.",
      "id": "21",
      "summary": "The three types of cabling they might consider are: 1. Twisted Pair Cabling (e.g. Ethernet cables), 2. Coaxial Cabling, 3. Fiber Optic Cabling.",
      "children": []
    }
  ]
};

export default data;