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
  name: "What topics are explored in Chapter 2 on communication and networking technologies?",
  id: "communication-networking",
  summary: "Chapter 2 explores communication and networking technologies, covering network types, topologies, transmission media, hardware, protocols, and key services like the Internet and World Wide Web.",
  children: [
    {
      name: "How can networks be categorized by their scope and scale, and what distinguishes WANs from LANs?",
      id: "network-types",
      summary: "Networks can be categorized by their scope and scale. The primary types are Wide Area Networks (WANs) and Local Area Networks (LANs), each with their own characteristics and purposes.",
      children: [
        {
          name: "What is a Wide Area Network (WAN), and what are its key characteristics and uses?",
          id: "wan",
          summary: "A Wide Area Network (WAN) connects computers across large geographical distances, often spanning cities, countries, or continents. Modern WANs typically have these characteristics:\n\n- Used by organizations to connect their sites or branches\n- Not owned by the organization but leased from telecommunication providers\n- Uses dedicated communication links provided by public switched telephone networks (PSTN)\n- Primarily uses fiber-optic cables as transmission medium\n- Transmission occurs from switch to switch\n- No end-systems are directly connected to the WAN\n- Each site connects to the WAN through a switch"
        },
        {
          name: "What is a Local Area Network (LAN), and what are its main features and benefits?",
          id: "lan",
          summary: "A Local Area Network (LAN) connects computers within a limited area such as a building, office, or campus. Modern LANs typically have these characteristics:\n\n- Used by organizations within a site or branch\n- Owned by the organization\n- Often consists of multiple individual LANs at one site\n- Uses twisted pair cable or WiFi as transmission medium\n- Contains devices for connecting to other networks\n- Has end-systems connected (user systems or servers)\n\nLANs emerged in the 1980s with personal computers, providing benefits such as centralized software installation, file sharing, shared printing resources, and electronic communication."
        }
      ]
    },
    {
      name: "What network models define how computers interact and share resources?",
      id: "network-models",
      summary: "Network models define how computers interact and share resources within a network. The main models are client-server and peer-to-peer, with variations like thin-client and thick-client architectures.",
      children: [
        {
          name: "What is the client-server model, and what roles do clients and servers play?",
          id: "client-server",
          summary: "In the client-server model, dedicated servers provide services, resources, or data to client computers. The server hosts applications and services while clients request and use these services.\n\nToday, a typical client is a web browser connected to the internet, and the server is a web server hosted online. This model is particularly useful for:\n- Databases accessed by client systems\n- Web applications for finding or supplying information\n- E-commerce and financial transaction applications",
          children: [
            {
              name: "What is a thin-client architecture, and how does it rely on the server?",
              id: "thin-client",
              summary: "A thin-client has minimal processing capabilities and relies heavily on the server. It:\n\n- Chooses an application to run on the server\n- Sends input data to the server when requested\n- Receives output from the application\n\nThis approach centralizes processing on the server side, with the client primarily handling display and user interaction."
            },
            {
              name: "What is a thick-client architecture, and how does it differ from thin-client processing?",
              id: "thick-client",
              summary: "A thick-client (also called a fat-client or rich-client) has more processing power and capabilities than a thin-client. It:\n\n- Chooses an application provided by the server\n- May perform processing before sending data to the server and after receiving output\n- Can download applications from the server to run locally\n\nThick-clients reduce the processing load on servers and can function with intermittent network connectivity."
            }
          ]
        },
        {
          name: "How does a peer-to-peer model operate, and what are its advantages and disadvantages compared to client-server?",
          id: "peer-to-peer",
          summary: "In a peer-to-peer network, computers connect directly to each other without relying on a dedicated server. Each peer can function as both a client and a server, requesting and providing resources.\n\nAdvantages of peer-to-peer networking compared to client-server file downloading include:\n- Avoids network congestion when many clients download simultaneously\n- Parts of files can be downloaded separately\n- Files are available from multiple hosts\n\nClient-server advantages include:\n- Organizations can better control file downloading and usage\n- Files can be better protected from malware through centralized security measures"
        }
      ]
    },
    {
      name: "What is network topology, and what are the common types with their pros and cons?",
      id: "network-topologies",
      summary: "Network topology refers to the physical or logical arrangement of network devices. Common topologies include bus, star, mesh, and hybrid configurations, each with advantages and disadvantages.",
      children: [
        {
          name: "What is a bus topology, and what are its advantages and limitations?",
          id: "bus-topology",
          summary: "In a bus topology, all devices connect to a single communication line (bus). This topology:\n\n- Uses a multi-point connection shared by multiple end-systems\n- Requires messages to be broadcast even if intended for one recipient\n- Is resilient because a fault in one end-system doesn't affect others\n- Was common in early LANs but is less used today\n\nWith this arrangement, there is no direct connection between any pair of end-systems, as all communication occurs via the shared bus."
        },
        {
          name: "What is a star topology, and what makes it the most common modern configuration?",
          id: "star-topology",
          summary: "In a star topology, all devices connect to a central device like a switch or hub. This topology:\n\n- Provides point-to-point connections between each end-system and the central device\n- Supports duplex transmission and various message types (unicast, multicast, broadcast)\n- Remains functional if an end-system fails, but is vulnerable to central device failure\n- Is the most common modern network configuration\n\nThe central device (typically a switch) can connect the network to other networks, including the Internet."
        },
        {
          name: "What is a mesh topology, and how does it enhance reliability?",
          id: "mesh-topology",
          summary: "In a mesh topology, each device connects directly to every other device in the network. This topology:\n\n- Uses point-to-point connections between all end-systems\n- Supports duplex transmission and all message types\n- Provides multiple paths for data, enhancing reliability\n- Requires extensive cabling, making it impractical for large end-system networks\n\nMesh topologies are more commonly used to connect network infrastructure devices like switches and routers rather than end-user systems."
        },
        {
          name: "What is a hybrid topology, and when is it used?",
          id: "hybrid-topology",
          summary: "A hybrid topology combines two or more different topologies to form a larger network. This approach:\n\n- Allows connecting LANs with different topologies or technologies\n- Requires special connecting devices to ensure full functionality\n- Enables adding new network segments with different topologies to existing networks\n\nAn example is connecting a new wireless LAN to an existing wired LAN, creating a hybrid network."
        }
      ]
    },
    {
      name: "What are the main transmission media used in networks, and how do their characteristics compare?",
      id: "transmission-media",
      summary: "Transmission media provide the physical pathways for data. They include various types of cables and wireless technologies, each with different characteristics affecting performance.",
      children: [
        {
          name: "What cable types are used for data transmission, and how do twisted pair, coaxial, and fiber-optic compare?",
          id: "cable-types",
          summary: "Cable transmission media include twisted pair, coaxial, and fiber-optic cables. When choosing a cable type, considerations include cost, bandwidth capabilities, signal attenuation, and susceptibility to interference.",
          children: [
            {
              name: "What are the characteristics and common uses of twisted pair cable?",
              id: "twisted-pair",
              summary: "Twisted pair cable consists of pairs of insulated copper wires twisted together to reduce interference. It comes in shielded (STP) and unshielded (UTP) varieties.\n\nCharacteristics include:\n- Lowest cost among cable types\n- Lower bandwidth compared to other options\n- Moderate attenuation at high frequencies\n- Higher susceptibility to interference\n- Requires repeaters more frequently over long distances\n\nIt's widely used in telephone networks and local area networks due to its cost-effectiveness and adequate performance for many applications."
            },
            {
              name: "What are the features and applications of coaxial cable?",
              id: "coaxial",
              summary: "Coaxial cable consists of a central copper conductor surrounded by insulation, a braided metal shield, and an outer jacket.\n\nCharacteristics include:\n- Moderate cost, higher than twisted pair\n- Higher bandwidth than twisted pair\n- Significant attenuation at high frequencies\n- Less susceptible to interference than twisted pair\n- Requires repeaters for long distances\n\nIt's commonly used in cable television networks and some metropolitan area networks but is less common for telephone or general networking applications."
            },
            {
              name: "Why is fiber-optic cable preferred for high-speed, long-distance communications?",
              id: "fiber-optic",
              summary: "Fiber-optic cable transmits data as light pulses through thin strands of glass or plastic.\n\nCharacteristics include:\n- Highest cost among cable types\n- Significantly higher bandwidth than copper cables\n- Minimal attenuation even at high frequencies\n- Almost immune to electromagnetic interference\n- Requires fewer repeaters over long distances\n\nIt's the preferred option for high-speed, long-distance communications, including the Internet backbone, telecommunications, and increasingly for local networks needing high bandwidth."
            }
          ]
        },
        {
          name: "What wireless media types exist, and how do radio, microwave, and infrared differ?",
          id: "wireless-media",
          summary: "Wireless transmission media use electromagnetic waves to carry signals without physical connections. The three main types are radio, microwave, and infrared, each operating at different frequency ranges.",
          children: [
            {
              name: "What are the properties and uses of radio wave transmission in networks?",
              id: "radio",
              summary: "Radio waves operate in the 3 kHz to 3 GHz frequency range and are widely used for wireless networking.\n\nCharacteristics include:\n- Lower bandwidth compared to higher frequency options\n- Less attenuation from rain and obstacles\n- Better penetration through walls and solid objects\n- Less directional, broadcasting in many directions\n- More susceptible to certain types of interference\n\nRadio waves are commonly used in WiFi, Bluetooth, and mobile networks due to their ability to penetrate obstacles and cover wide areas."
            },
            {
              name: "What are the characteristics and applications of microwave communication?",
              id: "microwave",
              summary: "Microwave signals operate in the 3 GHz to 300 GHz range and are used for point-to-point communications.\n\nCharacteristics include:\n- Higher bandwidth than radio waves\n- More susceptible to attenuation from rain (rain fade)\n- Limited ability to penetrate solid objects\n- Can be focused directionally\n- Moderate susceptibility to interference\n\nMicrowaves are used for long-distance communications, satellite links, and some point-to-point wireless connections where line-of-sight is available."
            },
            {
              name: "What are the advantages and limitations of infrared transmission?",
              id: "infrared",
              summary: "Infrared signals operate in the 300 GHz to 400 THz range and are used for short-range communications.\n\nCharacteristics include:\n- Highest bandwidth among wireless options\n- Significant attenuation from obstacles\n- Cannot penetrate walls or solid objects\n- Highly directional\n- Less susceptible to radio frequency interference\n\nInfrared is primarily suited for indoor, line-of-sight applications like remote controls and some device-to-device data transfer. Its inability to penetrate walls provides security benefits for contained environments."
            }
          ]
        },
        {
          name: "How does satellite communication function, and what are the differences between GEO, MEO, and LEO satellites?",
          id: "satellite-communication",
          summary: "Satellite communication uses satellites orbiting Earth as relay stations to transmit signals across long distances. Three main types of satellites are used:\n\n1. Geostationary Earth Orbit (GEO) satellites:\n   - Orbit 35,786 km above the equator\n   - Maintain fixed position relative to Earth's surface\n   - Only three satellites needed for global coverage\n   - Used for long-distance telecommunications\n   - Higher latency due to distance\n\n2. Medium Earth Orbit (MEO) satellites:\n   - Orbit 2,000 to 35,786 km above Earth\n   - Include Global Positioning System (GPS) satellites\n   - Require about 10 satellites for global coverage\n\n3. Low Earth Orbit (LEO) satellites:\n   - Orbit below 2,000 km\n   - Work in constellations to supplement mobile networks\n   - Require 50+ satellites for global coverage\n   - Lower latency than higher orbits\n\nSatellites enable communications over vast distances but introduce transmission delays that can affect network performance."
        }
      ]
    },
    {
      name: "What network hardware devices enable data transmission and interconnection?",  
      id: "network-hardware",
      summary: "Network hardware includes the physical devices that enable data transmission, routing, and interconnection of systems within a network infrastructure.",
      children: [
        {
          name: "What are end-systems, and how do they connect to the network?",
          id: "end-systems",
          summary: "End-systems are the devices that users interact with directly and that run applications. They include:\n\n- User workstations (desktops, laptops)\n- Servers (file servers, application servers, web servers)\n- Mobile devices (smartphones, tablets)\n\nEach end-system in a network requires a Network Interface Card (NIC) which has a unique network address to identify the system on the network."
        },
        {
          name: "What connection devices link network segments, and what OSI layers do they operate on?",
          id: "connection-devices",
          summary: "Connection devices link end-systems together and facilitate data transmission across networks. They operate at different layers of the network model.",
          children: [
            {
              name: "What is a repeater and how does it extend network range?",
              id: "repeater",
              summary: "A repeater regenerates signals to extend the range of a network. It:\n\n- Receives an input signal that has been attenuated (weakened)\n- Generates a new full-strength signal\n- Works at the physical layer\n- Doesn't filter or process the data\n\nRepeaters are used to overcome distance limitations in cable networks, particularly when signals become too weak for reliable communication."
            },
            {
              name: "What is a hub and why has it been replaced by switches?",
              id: "hub",
              summary: "A hub is a central connection device in a star topology that simply forwards all incoming data to all connected devices. It:\n\n- Creates a shared communication medium\n- Does not filter or direct traffic\n- Operates at the physical layer\n- Creates a single collision domain\n\nHubs have largely been replaced by switches in modern networks due to their inefficient broadcast nature."
            },
            {
              name: "What is a bridge and how does it improve network performance?",
              id: "bridge",
              summary: "A bridge connects two network segments and selectively forwards traffic between them. It:\n\n- Stores network addresses for systems in connected segments\n- Filters traffic based on MAC addresses\n- Operates at the data link layer\n- Reduces collision domains\n\nBridges are used to segment networks for better performance and to connect different network types while maintaining protocol compatibility."
            },
            {
              name: "What is a switch and how does it differ from a hub?",  
              id: "switch",
              summary: "A switch is an intelligent connection device that directs data to specific destinations based on MAC addresses. It:\n\n- Creates point-to-point connections between communicating devices\n- Maintains a MAC address table mapping ports to connected devices\n- Operates at the data link layer\n- Creates separate collision domains for each port\n- Can buffer incoming messages until transmission is possible\n\nSwitches are the most common modern LAN connection devices, providing efficient traffic management and higher performance than hubs."
            },
            {
              name: "What is a router and how does it direct traffic between networks?",
              id: "router",
              summary: "A router connects different networks and determines the best path for data to travel. It:\n\n- Routes packets based on logical (IP) addresses\n- Connects networks with different protocols\n- Operates at the network layer\n- Contains routing tables with path information\n- Creates separate broadcast domains\n\nRouters are essential for internet connectivity and for linking LANs to WANs or other networks. They make intelligent decisions about data packet forwarding based on network conditions and programmed rules."
            },
            {
              name: "What role does a wireless access point play in a WiFi network?",  
              id: "wireless-access-point",
              summary: "A Wireless Access Point (WAP) connects wireless devices to a wired network. It:\n\n- Acts as a central transmitter and receiver for wireless signals\n- May be a standalone device or integrated into another network device\n- Enables communication between wired and wireless segments\n- Requires wireless clients to have Wireless Network Interface Cards (WNICs)\n\nWAPs are fundamental to implementing WiFi networks and providing wireless connectivity in homes, businesses, and public spaces."
            }
          ]
        }
      ]
    },
    {
      name: "What is Ethernet, and how has it evolved to improve LAN performance?",  
      id: "ethernet",
      summary: "Ethernet is the dominant technology for local area networks, standardized as IEEE 802.3. Originally designed for shared media, modern Ethernet uses switched connections to improve performance and reliability.",
      children: [
        {
          name: "What was CSMA/CD collision detection, and why is it obsolete in switched Ethernet?",  
          id: "collision-detection",
          summary: "In early Ethernet networks with shared media (bus topology or star with hub), collisions could occur when two devices transmitted simultaneously. CSMA/CD (Carrier Sense Multiple Access with Collision Detection) was developed to handle these collisions.\n\nThe CSMA/CD process:\n1. Check voltage on the transmission medium for activity\n2. If activity detected, wait a random time before checking again\n3. If no activity detected, start transmission\n4. Continuously check for collisions during transmission\n5. If no collision detected, continue transmission\n6. If collision detected, stop transmission, send jamming signal, and retry after a random time\n\nIn modern switched Ethernet, full-duplex connections eliminate collisions, making CSMA/CD unnecessary."
        },
        {
          name: "How has Ethernet technology evolved in speed and topology from 10 Mbps to 100 Gbps?",  
          id: "ethernet-evolution",
          summary: "Ethernet has evolved through several generations, each increasing in speed and capability:\n\n- Standard (Traditional) Ethernet: 10 Mbps\n- Fast Ethernet: 100 Mbps\n- Gigabit Ethernet: 1 Gbps\n- 10 Gigabit Ethernet: 10 Gbps\n- 100 Gigabit Ethernet: 100 Gbps\n\nOriginal Ethernet used a shared medium in bus or star-with-hub topologies, where all devices received all transmissions. Modern Ethernet uses switches that create dedicated connections between communicating devices, greatly improving efficiency and performance."
        }
      ]
    },
    {
      name: "Which Internet technologies and infrastructure components enable global connectivity?",  
      id: "internet-technologies",
      summary: "The Internet is the world's largest internetwork, connecting millions of smaller networks globally. Various technologies and infrastructure components make this possible.",
      children: [
        {
          name: "What makes up the Internet's physical infrastructure, and how do ISPs and undersea cables fit in?",  
          id: "internet-infrastructure",
          summary: "The Internet's physical infrastructure consists of a global network of interconnected devices and transmission media. Key components include:\n\n- A hierarchical structure of Internet Service Providers (ISPs)\n- A mesh of undersea and terrestrial fiber-optic cables\n- Routers that direct traffic between networks\n- Public Switched Telephone Networks (PSTNs) providing connectivity\n- Cell phone networks offering mobile access\n\nThis infrastructure has evolved organically rather than through centralized design, resulting in a resilient but complex system.",
          children: [
            {
              name: "How are Internet Service Providers organized, and how do they interconnect?",  
              id: "internet-service-providers",
              summary: "Internet Service Providers (ISPs) operate in a hierarchical structure:\n\n- Access ISPs: Provide direct connections to individual users and organizations\n- Regional (or middle-tier) ISPs: Connect access ISPs to larger networks\n- Tier 1 (backbone) ISPs: Top-level providers with global reach\n\nConnections between ISPs are facilitated through Internet Exchange Points (IXPs). Major content providers like Google and Amazon also maintain extensive network infrastructure connecting directly to tier 1 ISPs."
            },
            {
              name: "How has the PSTN contributed to Internet connectivity over time?",  
              id: "pstn-contribution",
              summary: "Public Switched Telephone Networks (PSTNs) significantly contribute to Internet infrastructure by:\n\n- Providing leased lines for dedicated connections between sites\n- Offering broadband services for home and business Internet access\n- Supporting WiFi hotspots for public Internet access\n- Leveraging their extensive existing cable infrastructure\n\nInitially using analog technology requiring modems for digital data transmission, modern PSTNs have largely upgraded to digital fiber-optic networks, enabling higher-speed services."
            }
          ]
        },
        {
          name: "How does IP addressing enable data routing, and what limitations led to IPv4 exhaustion?",  
          id: "ip-addressing",
          summary: "IP (Internet Protocol) addressing provides the identification system that allows data to be routed across the Internet. IP addresses identify both the network and the specific device.",
          children: [
            {
              name: "How does IPv4 addressing work, and why did its classful system prove inefficient?",  
              id: "ipv4-addressing",
              summary: "IPv4 uses 32-bit addresses typically written in dotted decimal notation (e.g., 192.168.1.1). With only about 4 billion possible addresses, IPv4 faced exhaustion as the Internet grew.\n\nThe original IPv4 system used classes:\n- Class A: First bit 0, 7-bit network ID, 24-bit host ID (large organizations)\n- Class B: First bits 10, 14-bit network ID, 16-bit host ID (medium organizations)\n- Class C: First bits 110, 21-bit network ID, 8-bit host ID (small organizations)\n\nAs this system proved inefficient, several solutions were developed:"
            },
            {
              name: "What techniques address IPv4 limitations, and how do they function?",  
              id: "addressing-solutions",
              summary: "Several approaches help address IPv4 limitations:\n\n1. CIDR (Classless Inter-Domain Routing):\n   - Removes rigid class boundaries\n   - Uses a suffix to specify network bits (e.g., 192.168.1.0/24)\n   - Allows more flexible allocation of address blocks\n\n2. Subnetting:\n   - Divides a single network into multiple logical networks\n   - Uses part of the host ID to identify subnets\n   - Allows more efficient use of assigned addresses\n\n3. NAT (Network Address Translation):\n   - Allows multiple devices to share one public IP address\n   - Uses private IP addresses internally (e.g., 192.168.x.x, 10.x.x.x)\n   - Translates between private and public addresses at the network boundary\n\n4. IPv6:\n   - Uses 128-bit addresses (vastly more than IPv4)\n   - Written in hexadecimal notation with colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)\n   - Designed to replace IPv4 eventually"
            }
          ]
        },
        {
          name: "What role does the Domain Name System play, and how does DNS resolve domain names?",  
          id: "domain-name-system",
          summary: "The Domain Name System (DNS) translates human-readable domain names (like example.com) into IP addresses that computers use for routing. This system:\n\n- Is organized as a hierarchical distributed database\n- Uses multiple servers arranged in a hierarchy with root servers at the top\n- Divides the name space into non-overlapping zones\n- Uses primary and secondary name servers for redundancy\n\nThe naming system has top-level domains that are either generic (.com, .org, .edu) or country-specific (.uk, .fr, .jp). The domain name hierarchy is read from right to left, with each level separated by dots.",
          children: [
            {
              name: "What are the steps of DNS name resolution, including caching and authoritative responses?",  
              id: "name-resolution",
              summary: "Name resolution is the process of converting a domain name to an IP address. When a DNS query is made, three possible outcomes may occur:\n\n1. If the queried domain is under the server's control, it returns an authoritative answer\n2. If the domain isn't under the server's control but was recently requested, the server may return a cached (potentially outdated) response\n3. If the domain is remote, the query is forwarded to appropriate servers in the DNS hierarchy until an authoritative answer is found\n\nThis process allows users to access websites using memorable names rather than numerical IP addresses."
            },
            {
              name: "What are the components of a URL, and how does a browser use it to retrieve resources?",  
              id: "url-structure",
              summary: "A Uniform Resource Locator (URL) identifies specific resources on the World Wide Web. A typical URL includes:\n\n- Protocol (e.g., http://, https://) - specifies how to access the resource\n- Domain name (e.g., example.com) - identifies the server hosting the resource\n- Path (e.g., /products/index.html) - specifies the resource's location on the server\n- Query parameters (e.g., ?id=123) - provides additional information for the resource\n\nWhen a URL is entered in a browser, the DNS resolves the domain name to an IP address, and then the browser requests the specific resource at that address."
            }
          ]
        },
        {
          name: "What Internet applications does Chapter 2 describe, and what are their defining characteristics?",  
          id: "internet-applications",
          summary: "The Internet enables various applications that provide services to users. These include the World Wide Web, cloud computing, and bit streaming technologies.",
          children: [
            {
              name: "What is the World Wide Web, and how does it differ from the underlying Internet?",  
              id: "world-wide-web",
              summary: "The World Wide Web (WWW) is a distributed application available on the Internet, not the Internet itself. It consists of websites with web pages that can contain hyperlinks to other pages.\n\nThe Web's key features include:\n- Hypertext documents connected via hyperlinks\n- Accessible through web browsers\n- Resources identified by URLs\n- Communication via HTTP/HTTPS protocols\n\nUnlike the Internet (the physical network infrastructure), the Web is an information space built on top of that infrastructure."
            },
            {
              name: "What is cloud computing, and what service models (IaaS, PaaS, SaaS) does it include?",  
              id: "cloud-computing",
              summary: "Cloud computing provides computing services via the Internet or private networks. Organizations can create private clouds or use public clouds provided by third parties.\n\nCloud services typically fall into three categories:\n1. Infrastructure as a Service (IaaS) - computing resources, storage, networking\n2. Platform as a Service (PaaS) - development and testing environments\n3. Software as a Service (SaaS) - applications delivered over the Internet\n\nAdvantages include scalability, accessibility from any location, reduced need for technical expertise, and cost savings. Disadvantages include potential privacy concerns, security risks, and reliance on third-party providers."
            },
            {
              name: "What is bit streaming, and what are the differences between on-demand and live streaming technologies?",  
              id: "bit-streaming",
              summary: "Bit streaming transmits compressed media (audio or video) as a continuous flow of bits over the Internet, allowing playback to begin before the entire file is downloaded.\n\nTwo main types of streaming exist:\n1. On-demand streaming - pre-recorded content accessed when users request it\n2. Live streaming - content delivered in real-time as it's being generated\n\nKey technical aspects include:\n- Buffer management to handle network fluctuations\n- Bit rate control to match available bandwidth\n- High-water and low-water marks to regulate streaming flow\n- Multiple compression levels for different connection speeds\n\nEffective streaming requires sufficient bandwidth to maintain the necessary bit rate for the media type being delivered."
            }
          ]
        }
      ]
    }
  ]
};


// ────────────────────────────────────────────────────────────────────────────────
// Component logic – identical to the earlier template (omitted comments for brevity)
// ────────────────────────────────────────────────────────────────────────────────
const ChapterFourteenMindMap: React.FC = () => {
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
                      2,
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

export default ChapterFourteenMindMap;