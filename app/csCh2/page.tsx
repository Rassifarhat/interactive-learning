'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// Define TypeScript interfaces for our data structure
interface MindmapNode {
  name: string;
  id: string; // Unique identifier for the node
  summary?: string; // Optional detailed description
  children?: MindmapNode[];
}

// Define the main component
const ChapterTwoMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [infoContent, setInfoContent] = useState<string>('');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [hiddenNodes, setHiddenNodes] = useState<Set<string>>(new Set());
  const [saveStatus, setSaveStatus] = useState<string>('');
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  // Zoom control handlers
  const handleZoomIn = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 1.3);
    }
  };

  const handleZoomOut = () => {
    if (svgRef.current && zoomRef.current) {
      d3.select(svgRef.current)
        .transition()
        .duration(300)
        .call(zoomRef.current.scaleBy, 0.7);
    }
  };

  const handleReset = () => {
    if (svgRef.current && zoomRef.current) {
      const width = 1200; 
      const height = 800;
      d3.select(svgRef.current)
        .transition()
        .duration(500)
        .call(
          zoomRef.current.transform,
          d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8)
        );
    }
  };

  // Handle hiding/showing nodes
  const toggleNodeVisibility = () => {
    if (!activeNode) return;
    
    const newHiddenNodes = new Set(hiddenNodes);
    
    if (hiddenNodes.has(activeNode)) {
      newHiddenNodes.delete(activeNode);
    } else {
      newHiddenNodes.add(activeNode);
    }
    
    setHiddenNodes(newHiddenNodes);
    
    // Update the visibility in the graph
    if (svgRef.current) {
      d3.select(svgRef.current)
        .selectAll(`text[data-id="${activeNode}"]`)
        .attr('fill', hiddenNodes.has(activeNode) ? '#2D3748' : null); // Set to background color when hidden
    }
  };
  
  // Function to save note for revision
  const saveNoteForRevision = async () => {
    if (!activeNode || !infoContent) return;
    
    // Get node name
    const nodeName = findNodeName(activeNode, data);
    if (!nodeName) return;
    
    try {
      // Format the note content
      const timestamp = new Date().toISOString();
      const noteToSave = `# ${nodeName}\n${infoContent}\n\nSaved on: ${timestamp}\n\n---\n\n`;
      
      // Send note to API endpoint
      const response = await fetch('/api/saveNote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: noteToSave }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save note');
      }
      
      // Show success message
      setSaveStatus('Note saved!');
      
      // Reset message after 3 seconds
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    } catch (error) {
      console.error("Error saving note:", error);
      setSaveStatus('Error saving note');
      
      setTimeout(() => {
        setSaveStatus('');
      }, 3000);
    }
  };

  // Find the name of the active node for the title
  const findNodeName = (nodeId: string | null, nodeData: MindmapNode): string | null => {
    if (!nodeId) return null;
    if (nodeData.id === nodeId) return nodeData.name;
    if (nodeData.children) {
      for (const child of nodeData.children) {
        const found = findNodeName(nodeId, child);
        if (found) return found;
      }
    }
    return null;
  };

  // Define the data structure for the mindmap
  const data: MindmapNode = {
    name: "Communication & Networking",
    id: "communication-networking",
    summary: "Chapter 2 explores communication and networking technologies, covering network types, topologies, transmission media, hardware, protocols, and key services like the Internet and World Wide Web.",
    children: [
      {
        name: "Network Types",
        id: "network-types",
        summary: "Networks can be categorized by their scope and scale. The primary types are Wide Area Networks (WANs) and Local Area Networks (LANs), each with their own characteristics and purposes.",
        children: [
          {
            name: "Wide Area Network (WAN)",
            id: "wan",
            summary: "A Wide Area Network (WAN) connects computers across large geographical distances, often spanning cities, countries, or continents. Modern WANs typically have these characteristics:\n\n- Used by organizations to connect their sites or branches\n- Not owned by the organization but leased from telecommunication providers\n- Uses dedicated communication links provided by public switched telephone networks (PSTN)\n- Primarily uses fiber-optic cables as transmission medium\n- Transmission occurs from switch to switch\n- No end-systems are directly connected to the WAN\n- Each site connects to the WAN through a switch"
          },
          {
            name: "Local Area Network (LAN)",
            id: "lan",
            summary: "A Local Area Network (LAN) connects computers within a limited area such as a building, office, or campus. Modern LANs typically have these characteristics:\n\n- Used by organizations within a site or branch\n- Owned by the organization\n- Often consists of multiple individual LANs at one site\n- Uses twisted pair cable or WiFi as transmission medium\n- Contains devices for connecting to other networks\n- Has end-systems connected (user systems or servers)\n\nLANs emerged in the 1980s with personal computers, providing benefits such as centralized software installation, file sharing, shared printing resources, and electronic communication."
          }
        ]
      },
      {
        name: "Network Models",
        id: "network-models",
        summary: "Network models define how computers interact and share resources within a network. The main models are client-server and peer-to-peer, with variations like thin-client and thick-client architectures.",
        children: [
          {
            name: "Client-Server Model",
            id: "client-server",
            summary: "In the client-server model, dedicated servers provide services, resources, or data to client computers. The server hosts applications and services while clients request and use these services.\n\nToday, a typical client is a web browser connected to the internet, and the server is a web server hosted online. This model is particularly useful for:\n- Databases accessed by client systems\n- Web applications for finding or supplying information\n- E-commerce and financial transaction applications",
            children: [
              {
                name: "Thin-Client",
                id: "thin-client",
                summary: "A thin-client has minimal processing capabilities and relies heavily on the server. It:\n\n- Chooses an application to run on the server\n- Sends input data to the server when requested\n- Receives output from the application\n\nThis approach centralizes processing on the server side, with the client primarily handling display and user interaction."
              },
              {
                name: "Thick-Client",
                id: "thick-client",
                summary: "A thick-client (also called a fat-client or rich-client) has more processing power and capabilities than a thin-client. It:\n\n- Chooses an application provided by the server\n- May perform processing before sending data to the server and after receiving output\n- Can download applications from the server to run locally\n\nThick-clients reduce the processing load on servers and can function with intermittent network connectivity."
              }
            ]
          },
          {
            name: "Peer-to-Peer Model",
            id: "peer-to-peer",
            summary: "In a peer-to-peer network, computers connect directly to each other without relying on a dedicated server. Each peer can function as both a client and a server, requesting and providing resources.\n\nAdvantages of peer-to-peer networking compared to client-server file downloading include:\n- Avoids network congestion when many clients download simultaneously\n- Parts of files can be downloaded separately\n- Files are available from multiple hosts\n\nClient-server advantages include:\n- Organizations can better control file downloading and usage\n- Files can be better protected from malware through centralized security measures"
          }
        ]
      },
      {
        name: "Network Topologies",
        id: "network-topologies",
        summary: "Network topology refers to the physical or logical arrangement of network devices. Common topologies include bus, star, mesh, and hybrid configurations, each with advantages and disadvantages.",
        children: [
          {
            name: "Bus Topology",
            id: "bus-topology",
            summary: "In a bus topology, all devices connect to a single communication line (bus). This topology:\n\n- Uses a multi-point connection shared by multiple end-systems\n- Requires messages to be broadcast even if intended for one recipient\n- Is resilient because a fault in one end-system doesn't affect others\n- Was common in early LANs but is less used today\n\nWith this arrangement, there is no direct connection between any pair of end-systems, as all communication occurs via the shared bus."
          },
          {
            name: "Star Topology",
            id: "star-topology",
            summary: "In a star topology, all devices connect to a central device like a switch or hub. This topology:\n\n- Provides point-to-point connections between each end-system and the central device\n- Supports duplex transmission and various message types (unicast, multicast, broadcast)\n- Remains functional if an end-system fails, but is vulnerable to central device failure\n- Is the most common modern network configuration\n\nThe central device (typically a switch) can connect the network to other networks, including the Internet."
          },
          {
            name: "Mesh Topology",
            id: "mesh-topology",
            summary: "In a mesh topology, each device connects directly to every other device in the network. This topology:\n\n- Uses point-to-point connections between all end-systems\n- Supports duplex transmission and all message types\n- Provides multiple paths for data, enhancing reliability\n- Requires extensive cabling, making it impractical for large end-system networks\n\nMesh topologies are more commonly used to connect network infrastructure devices like switches and routers rather than end-user systems."
          },
          {
            name: "Hybrid Topology",
            id: "hybrid-topology",
            summary: "A hybrid topology combines two or more different topologies to form a larger network. This approach:\n\n- Allows connecting LANs with different topologies or technologies\n- Requires special connecting devices to ensure full functionality\n- Enables adding new network segments with different topologies to existing networks\n\nAn example is connecting a new wireless LAN to an existing wired LAN, creating a hybrid network."
          }
        ]
      },
      {
        name: "Transmission Media",
        id: "transmission-media",
        summary: "Transmission media provide the physical pathways for data. They include various types of cables and wireless technologies, each with different characteristics affecting performance.",
        children: [
          {
            name: "Cable Types",
            id: "cable-types",
            summary: "Cable transmission media include twisted pair, coaxial, and fiber-optic cables. When choosing a cable type, considerations include cost, bandwidth capabilities, signal attenuation, and susceptibility to interference.",
            children: [
              {
                name: "Twisted Pair",
                id: "twisted-pair",
                summary: "Twisted pair cable consists of pairs of insulated copper wires twisted together to reduce interference. It comes in shielded (STP) and unshielded (UTP) varieties.\n\nCharacteristics include:\n- Lowest cost among cable types\n- Lower bandwidth compared to other options\n- Moderate attenuation at high frequencies\n- Higher susceptibility to interference\n- Requires repeaters more frequently over long distances\n\nIt's widely used in telephone networks and local area networks due to its cost-effectiveness and adequate performance for many applications."
              },
              {
                name: "Coaxial",
                id: "coaxial",
                summary: "Coaxial cable consists of a central copper conductor surrounded by insulation, a braided metal shield, and an outer jacket.\n\nCharacteristics include:\n- Moderate cost, higher than twisted pair\n- Higher bandwidth than twisted pair\n- Significant attenuation at high frequencies\n- Less susceptible to interference than twisted pair\n- Requires repeaters for long distances\n\nIt's commonly used in cable television networks and some metropolitan area networks but is less common for telephone or general networking applications."
              },
              {
                name: "Fiber-Optic",
                id: "fiber-optic",
                summary: "Fiber-optic cable transmits data as light pulses through thin strands of glass or plastic.\n\nCharacteristics include:\n- Highest cost among cable types\n- Significantly higher bandwidth than copper cables\n- Minimal attenuation even at high frequencies\n- Almost immune to electromagnetic interference\n- Requires fewer repeaters over long distances\n\nIt's the preferred option for high-speed, long-distance communications, including the Internet backbone, telecommunications, and increasingly for local networks needing high bandwidth."
              }
            ]
          },
          {
            name: "Wireless Media",
            id: "wireless-media",
            summary: "Wireless transmission media use electromagnetic waves to carry signals without physical connections. The three main types are radio, microwave, and infrared, each operating at different frequency ranges.",
            children: [
              {
                name: "Radio",
                id: "radio",
                summary: "Radio waves operate in the 3 kHz to 3 GHz frequency range and are widely used for wireless networking.\n\nCharacteristics include:\n- Lower bandwidth compared to higher frequency options\n- Less attenuation from rain and obstacles\n- Better penetration through walls and solid objects\n- Less directional, broadcasting in many directions\n- More susceptible to certain types of interference\n\nRadio waves are commonly used in WiFi, Bluetooth, and mobile networks due to their ability to penetrate obstacles and cover wide areas."
              },
              {
                name: "Microwave",
                id: "microwave",
                summary: "Microwave signals operate in the 3 GHz to 300 GHz range and are used for point-to-point communications.\n\nCharacteristics include:\n- Higher bandwidth than radio waves\n- More susceptible to attenuation from rain (rain fade)\n- Limited ability to penetrate solid objects\n- Can be focused directionally\n- Moderate susceptibility to interference\n\nMicrowaves are used for long-distance communications, satellite links, and some point-to-point wireless connections where line-of-sight is available."
              },
              {
                name: "Infrared",
                id: "infrared",
                summary: "Infrared signals operate in the 300 GHz to 400 THz range and are used for short-range communications.\n\nCharacteristics include:\n- Highest bandwidth among wireless options\n- Significant attenuation from obstacles\n- Cannot penetrate walls or solid objects\n- Highly directional\n- Less susceptible to radio frequency interference\n\nInfrared is primarily suited for indoor, line-of-sight applications like remote controls and some device-to-device data transfer. Its inability to penetrate walls provides security benefits for contained environments."
              }
            ]
          },
          {
            name: "Satellite Communication",
            id: "satellite-communication",
            summary: "Satellite communication uses satellites orbiting Earth as relay stations to transmit signals across long distances. Three main types of satellites are used:\n\n1. Geostationary Earth Orbit (GEO) satellites:\n   - Orbit 35,786 km above the equator\n   - Maintain fixed position relative to Earth's surface\n   - Only three satellites needed for global coverage\n   - Used for long-distance telecommunications\n   - Higher latency due to distance\n\n2. Medium Earth Orbit (MEO) satellites:\n   - Orbit 2,000 to 35,786 km above Earth\n   - Include Global Positioning System (GPS) satellites\n   - Require about 10 satellites for global coverage\n\n3. Low Earth Orbit (LEO) satellites:\n   - Orbit below 2,000 km\n   - Work in constellations to supplement mobile networks\n   - Require 50+ satellites for global coverage\n   - Lower latency than higher orbits\n\nSatellites enable communications over vast distances but introduce transmission delays that can affect network performance."
          }
        ]
      },
      {
        name: "Network Hardware",
        id: "network-hardware",
        summary: "Network hardware includes the physical devices that enable data transmission, routing, and interconnection of systems within a network infrastructure.",
        children: [
          {
            name: "End-systems",
            id: "end-systems",
            summary: "End-systems are the devices that users interact with directly and that run applications. They include:\n\n- User workstations (desktops, laptops)\n- Servers (file servers, application servers, web servers)\n- Mobile devices (smartphones, tablets)\n\nEach end-system in a network requires a Network Interface Card (NIC) which has a unique network address to identify the system on the network."
          },
          {
            name: "Connection Devices",
            id: "connection-devices",
            summary: "Connection devices link end-systems together and facilitate data transmission across networks. They operate at different layers of the network model.",
            children: [
              {
                name: "Repeater",
                id: "repeater",
                summary: "A repeater regenerates signals to extend the range of a network. It:\n\n- Receives an input signal that has been attenuated (weakened)\n- Generates a new full-strength signal\n- Works at the physical layer\n- Doesn't filter or process the data\n\nRepeaters are used to overcome distance limitations in cable networks, particularly when signals become too weak for reliable communication."
              },
              {
                name: "Hub",
                id: "hub",
                summary: "A hub is a central connection device in a star topology that simply forwards all incoming data to all connected devices. It:\n\n- Creates a shared communication medium\n- Does not filter or direct traffic\n- Operates at the physical layer\n- Creates a single collision domain\n\nHubs have largely been replaced by switches in modern networks due to their inefficient broadcast nature."
              },
              {
                name: "Bridge",
                id: "bridge",
                summary: "A bridge connects two network segments and selectively forwards traffic between them. It:\n\n- Stores network addresses for systems in connected segments\n- Filters traffic based on MAC addresses\n- Operates at the data link layer\n- Reduces collision domains\n\nBridges are used to segment networks for better performance and to connect different network types while maintaining protocol compatibility."
              },
              {
                name: "Switch",
                id: "switch",
                summary: "A switch is an intelligent connection device that directs data to specific destinations based on MAC addresses. It:\n\n- Creates point-to-point connections between communicating devices\n- Maintains a MAC address table mapping ports to connected devices\n- Operates at the data link layer\n- Creates separate collision domains for each port\n- Can buffer incoming messages until transmission is possible\n\nSwitches are the most common modern LAN connection devices, providing efficient traffic management and higher performance than hubs."
              },
              {
                name: "Router",
                id: "router",
                summary: "A router connects different networks and determines the best path for data to travel. It:\n\n- Routes packets based on logical (IP) addresses\n- Connects networks with different protocols\n- Operates at the network layer\n- Contains routing tables with path information\n- Creates separate broadcast domains\n\nRouters are essential for internet connectivity and for linking LANs to WANs or other networks. They make intelligent decisions about data packet forwarding based on network conditions and programmed rules."
              },
              {
                name: "Wireless Access Point",
                id: "wireless-access-point",
                summary: "A Wireless Access Point (WAP) connects wireless devices to a wired network. It:\n\n- Acts as a central transmitter and receiver for wireless signals\n- May be a standalone device or integrated into another network device\n- Enables communication between wired and wireless segments\n- Requires wireless clients to have Wireless Network Interface Cards (WNICs)\n\nWAPs are fundamental to implementing WiFi networks and providing wireless connectivity in homes, businesses, and public spaces."
              }
            ]
          }
        ]
      },
      {
        name: "Ethernet",
        id: "ethernet",
        summary: "Ethernet is the dominant technology for local area networks, standardized as IEEE 802.3. Originally designed for shared media, modern Ethernet uses switched connections to improve performance and reliability.",
        children: [
          {
            name: "Collision Detection",
            id: "collision-detection",
            summary: "In early Ethernet networks with shared media (bus topology or star with hub), collisions could occur when two devices transmitted simultaneously. CSMA/CD (Carrier Sense Multiple Access with Collision Detection) was developed to handle these collisions.\n\nThe CSMA/CD process:\n1. Check voltage on the transmission medium for activity\n2. If activity detected, wait a random time before checking again\n3. If no activity detected, start transmission\n4. Continuously check for collisions during transmission\n5. If no collision detected, continue transmission\n6. If collision detected, stop transmission, send jamming signal, and retry after a random time\n\nIn modern switched Ethernet, full-duplex connections eliminate collisions, making CSMA/CD unnecessary."
          },
          {
            name: "Ethernet Evolution",
            id: "ethernet-evolution",
            summary: "Ethernet has evolved through several generations, each increasing in speed and capability:\n\n- Standard (Traditional) Ethernet: 10 Mbps\n- Fast Ethernet: 100 Mbps\n- Gigabit Ethernet: 1 Gbps\n- 10 Gigabit Ethernet: 10 Gbps\n- 100 Gigabit Ethernet: 100 Gbps\n\nOriginal Ethernet used a shared medium in bus or star-with-hub topologies, where all devices received all transmissions. Modern Ethernet uses switches that create dedicated connections between communicating devices, greatly improving efficiency and performance."
          }
        ]
      },
      {
        name: "Internet Technologies",
        id: "internet-technologies",
        summary: "The Internet is the world's largest internetwork, connecting millions of smaller networks globally. Various technologies and infrastructure components make this possible.",
        children: [
          {
            name: "Internet Infrastructure",
            id: "internet-infrastructure",
            summary: "The Internet's physical infrastructure consists of a global network of interconnected devices and transmission media. Key components include:\n\n- A hierarchical structure of Internet Service Providers (ISPs)\n- A mesh of undersea and terrestrial fiber-optic cables\n- Routers that direct traffic between networks\n- Public Switched Telephone Networks (PSTNs) providing connectivity\n- Cell phone networks offering mobile access\n\nThis infrastructure has evolved organically rather than through centralized design, resulting in a resilient but complex system.",
            children: [
              {
                name: "Internet Service Providers",
                id: "internet-service-providers",
                summary: "Internet Service Providers (ISPs) operate in a hierarchical structure:\n\n- Access ISPs: Provide direct connections to individual users and organizations\n- Regional (or middle-tier) ISPs: Connect access ISPs to larger networks\n- Tier 1 (backbone) ISPs: Top-level providers with global reach\n\nConnections between ISPs are facilitated through Internet Exchange Points (IXPs). Major content providers like Google and Amazon also maintain extensive network infrastructure connecting directly to tier 1 ISPs."
              },
              {
                name: "PSTN Contribution",
                id: "pstn-contribution",
                summary: "Public Switched Telephone Networks (PSTNs) significantly contribute to Internet infrastructure by:\n\n- Providing leased lines for dedicated connections between sites\n- Offering broadband services for home and business Internet access\n- Supporting WiFi hotspots for public Internet access\n- Leveraging their extensive existing cable infrastructure\n\nInitially using analog technology requiring modems for digital data transmission, modern PSTNs have largely upgraded to digital fiber-optic networks, enabling higher-speed services."
              }
            ]
          },
          {
            name: "IP Addressing",
            id: "ip-addressing",
            summary: "IP (Internet Protocol) addressing provides the identification system that allows data to be routed across the Internet. IP addresses identify both the network and the specific device.",
            children: [
              {
                name: "IPv4 Addressing",
                id: "ipv4-addressing",
                summary: "IPv4 uses 32-bit addresses typically written in dotted decimal notation (e.g., 192.168.1.1). With only about 4 billion possible addresses, IPv4 faced exhaustion as the Internet grew.\n\nThe original IPv4 system used classes:\n- Class A: First bit 0, 7-bit network ID, 24-bit host ID (large organizations)\n- Class B: First bits 10, 14-bit network ID, 16-bit host ID (medium organizations)\n- Class C: First bits 110, 21-bit network ID, 8-bit host ID (small organizations)\n\nAs this system proved inefficient, several solutions were developed:"
              },
              {
                name: "Addressing Solutions",
                id: "addressing-solutions",
                summary: "Several approaches help address IPv4 limitations:\n\n1. CIDR (Classless Inter-Domain Routing):\n   - Removes rigid class boundaries\n   - Uses a suffix to specify network bits (e.g., 192.168.1.0/24)\n   - Allows more flexible allocation of address blocks\n\n2. Subnetting:\n   - Divides a single network into multiple logical networks\n   - Uses part of the host ID to identify subnets\n   - Allows more efficient use of assigned addresses\n\n3. NAT (Network Address Translation):\n   - Allows multiple devices to share one public IP address\n   - Uses private IP addresses internally (e.g., 192.168.x.x, 10.x.x.x)\n   - Translates between private and public addresses at the network boundary\n\n4. IPv6:\n   - Uses 128-bit addresses (vastly more than IPv4)\n   - Written in hexadecimal notation with colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)\n   - Designed to replace IPv4 eventually"
              }
            ]
          },
          {
            name: "Domain Name System",
            id: "domain-name-system",
            summary: "The Domain Name System (DNS) translates human-readable domain names (like example.com) into IP addresses that computers use for routing. This system:\n\n- Is organized as a hierarchical distributed database\n- Uses multiple servers arranged in a hierarchy with root servers at the top\n- Divides the name space into non-overlapping zones\n- Uses primary and secondary name servers for redundancy\n\nThe naming system has top-level domains that are either generic (.com, .org, .edu) or country-specific (.uk, .fr, .jp). The domain name hierarchy is read from right to left, with each level separated by dots.",
            children: [
              {
                name: "Name Resolution",
                id: "name-resolution",
                summary: "Name resolution is the process of converting a domain name to an IP address. When a DNS query is made, three possible outcomes may occur:\n\n1. If the queried domain is under the server's control, it returns an authoritative answer\n2. If the domain isn't under the server's control but was recently requested, the server may return a cached (potentially outdated) response\n3. If the domain is remote, the query is forwarded to appropriate servers in the DNS hierarchy until an authoritative answer is found\n\nThis process allows users to access websites using memorable names rather than numerical IP addresses."
              },
              {
                name: "URL Structure",
                id: "url-structure",
                summary: "A Uniform Resource Locator (URL) identifies specific resources on the World Wide Web. A typical URL includes:\n\n- Protocol (e.g., http://, https://) - specifies how to access the resource\n- Domain name (e.g., example.com) - identifies the server hosting the resource\n- Path (e.g., /products/index.html) - specifies the resource's location on the server\n- Query parameters (e.g., ?id=123) - provides additional information for the resource\n\nWhen a URL is entered in a browser, the DNS resolves the domain name to an IP address, and then the browser requests the specific resource at that address."
              }
            ]
          }
        ]
      },
      {
        name: "Internet Applications",
        id: "internet-applications",
        summary: "The Internet enables various applications that provide services to users. These include the World Wide Web, cloud computing, and bit streaming technologies.",
        children: [
          {
            name: "World Wide Web",
            id: "world-wide-web",
            summary: "The World Wide Web (WWW) is a distributed application available on the Internet, not the Internet itself. It consists of websites with web pages that can contain hyperlinks to other pages.\n\nThe Web's key features include:\n- Hypertext documents connected via hyperlinks\n- Accessible through web browsers\n- Resources identified by URLs\n- Communication via HTTP/HTTPS protocols\n\nUnlike the Internet (the physical network infrastructure), the Web is an information space built on top of that infrastructure."
          },
          {
            name: "Cloud Computing",
            id: "cloud-computing",
            summary: "Cloud computing provides computing services via the Internet or private networks. Organizations can create private clouds or use public clouds provided by third parties.\n\nCloud services typically fall into three categories:\n1. Infrastructure as a Service (IaaS) - computing resources, storage, networking\n2. Platform as a Service (PaaS) - development and testing environments\n3. Software as a Service (SaaS) - applications delivered over the Internet\n\nAdvantages include scalability, accessibility from any location, reduced need for technical expertise, and cost savings. Disadvantages include potential privacy concerns, security risks, and reliance on third-party providers."
          },
          {
            name: "Bit Streaming",
            id: "bit-streaming",
            summary: "Bit streaming transmits compressed media (audio or video) as a continuous flow of bits over the Internet, allowing playback to begin before the entire file is downloaded.\n\nTwo main types of streaming exist:\n1. On-demand streaming - pre-recorded content accessed when users request it\n2. Live streaming - content delivered in real-time as it's being generated\n\nKey technical aspects include:\n- Buffer management to handle network fluctuations\n- Bit rate control to match available bandwidth\n- High-water and low-water marks to regulate streaming flow\n- Multiple compression levels for different connection speeds\n\nEffective streaming requires sufficient bandwidth to maintain the necessary bit rate for the media type being delivered."
          }
        ]
      }
    ]
  };
  
  const activeNodeName = findNodeName(activeNode, data);
  const isNodeHidden = activeNode ? hiddenNodes.has(activeNode) : false;

  // Use effect hook for D3 logic
  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1200;
    const height = 800;
    const radius = Math.min(width, height) / 2 * 0.9;

    // Select the SVG element and clear previous content
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('font', '10px sans-serif');
    svg.selectAll("*").remove(); // Clear previous render

    // Create root group centered in SVG
    const g = svg.append('g');

    // Create tree layout generator
    const treeLayout = d3.tree<MindmapNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    // Create hierarchy from data
    const root = d3.hierarchy(data);

    // Generate the tree layout
    const treeData = treeLayout(root);

    // Add links between nodes
    const link = g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#ccc") // Lighter link color
      .attr("stroke-opacity", 0.7)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(treeData.links())
      .join("path")
      .attr("d", d3.linkRadial<any, d3.HierarchyPointNode<MindmapNode>>() // Type hint for node data
        .angle(node => node.x) // Access angle from the node object
        .radius(node => node.y)); // Access radius from the node object

    // Add nodes with colors based on depth
    const colorScale = d3.scaleOrdinal<string, string>() // Domain type string (depth as string)
      .domain(["0", "1", "2", "3", "4"]) // Max depth assumed 4
      .range(["#4299E1", "#48BB78", "#F6AD55", "#F56565", "#9F7AEA"]);

    // Add nodes
    const node = g.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll("g")
      .data(treeData.descendants())
      .join("g")
      .attr("transform", d => `
        rotate(${(d.x * 180 / Math.PI - 90)}) 
        translate(${d.y},0)
      `)
      .attr("data-id", d => d.data.id); // Add data-id attribute for easier selection

    // Add node circles WITH HOVER EFFECT
    node.append("circle")
      .attr("fill", (d: any) => colorScale(d.depth.toString())) // Use string depth for colorScale
      .attr("r", d => d.data.id === "communication-networking" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'communication-networking' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'communication-networking' ? 10 : 6)
            .attr('stroke', null); // Revert size and highlight
      });

    // Add node text labels - Rotate First, Then Translate
    const text = node.append("text")
      .attr("data-id", d => d.data.id) // Add data-id attribute for easier selection
      .attr("transform", (d: any) => {
        const inverseRotation = -(d.x * 180 / Math.PI - 90);
        const horizontalOffset = d.x < Math.PI ? 8 : -8;
        // Apply rotation around origin (0,0) first, then translate horizontally
        return `rotate(${inverseRotation}) translate(${horizontalOffset}, 0)`; 
      })
      .attr("dy", "0.31em") // Vertical alignment
      .attr("text-anchor", (d: any) => d.x < Math.PI ? "start" : "end") // Anchor based on left/right side
      .attr("fill", (d: any) => hiddenNodes.has(d.data.id) ? "#2D3748" : colorScale(d.depth.toString())) // Use background color if hidden
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("pointer-events", "none") // Avoid interfering with circle click
      .text((d: any) => d.data.name);
      
    // Set initial content
    if (!activeNode) {
      setInfoContent("Click on any node to see detailed information about that topic.");
    }

    // Setup zoom behavior
    const zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 3])
      .on("zoom", (event: d3.D3ZoomEvent<SVGSVGElement, unknown>) => {
        g.attr("transform", event.transform.toString());
        setZoom(event.transform.k);
      });

    // Store zoom behavior in ref for external control
    zoomRef.current = zoomBehavior;

    // Apply zoom behavior to SVG
    svg.call(zoomBehavior)
      .on("dblclick.zoom", null); // Disable double-click zoom

    // Initialize with a slight zoom out
    const initialTransform = d3.zoomIdentity.translate(0, 0).scale(0.8); // Centered by viewBox
    svg.call(zoomBehavior.transform, initialTransform);

    // Cleanup function
    return () => {
      if (svgRef.current) {
        // Remove event listeners
        svg.on('.zoom', null);
      }
    };
  }, [hiddenNodes]); // Add hiddenNodes to dependency array to update when nodes are hidden/shown

  return (
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white"> {/* Full height, dark theme */}
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Topic 2: Communication and Networking Technologies</h1>
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden"> {/* Use flex-grow */} 
        {/* Mindmap Area */} 
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900"> {/* Darker background for SVG */}
          <svg ref={svgRef} className="w-full h-full"></svg>
          
          {/* Zoom controls - Now as a floating panel */}
          <div className="absolute bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-2 flex flex-col space-y-2">
            <button 
              onClick={handleZoomIn}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Zoom in"
            >
              <span className="text-xl">+</span>
            </button>
            <button 
              onClick={handleZoomOut}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Zoom out"
            >
              <span className="text-xl">-</span>
            </button>
            <button 
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Reset zoom"
            >
              <span className="text-sm">Reset</span>
            </button>
          </div>
        </div>
        
        {/* Information Panel */} 
        <div className="w-full md:w-1/3 h-1/3 md:h-full p-4 bg-gray-700 overflow-y-auto border-t md:border-t-0 md:border-l border-gray-600">
          <div className="bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              {activeNodeName || "Topic Information"} {/* Show active node name */} 
              {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4"> {/* Added whitespace-pre-line to preserve line breaks */} 
              {infoContent ? (
                <p>{infoContent}</p>
              ) : (
                <p>Click on a node in the mindmap to see detailed information.</p>
              )}
            </div>
            
            {/* Status message */}
            {saveStatus && (
              <div className="mb-4 p-2 bg-green-600 text-white rounded-md text-center">
                {saveStatus}
              </div>
            )}
            
            {/* Button Container */}
            {activeNode && (
              <div className="space-y-2">
                {/* "I know this very well" button */}
                <button
                  onClick={toggleNodeVisibility}
                  className={`px-4 py-2 rounded-md font-medium w-full ${
                    isNodeHidden 
                      ? "bg-blue-600 hover:bg-blue-700 text-white" 
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {isNodeHidden 
                    ? "I need to review this, show it" 
                    : "I know this very well, hide it"}
                </button>
                
                {/* "I need to revise this later" button */}
                <button
                  onClick={saveNoteForRevision}
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

export default ChapterTwoMindMap;