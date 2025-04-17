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
const SystemSoftwareMindMap: React.FC = () => {
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

  // Define the data structure for the mindmap based on Chapter 8
  const data: MindmapNode = {
    name: "System Software",
    id: "system-software",
    summary: "Chapter 8 explores system software, which is software designed to help run the computer system rather than perform specific tasks for users. It includes operating systems, utility software, program libraries, language translators, and development environments. System software provides the foundation that allows application software to run.",
    children: [
      {
        name: "Operating System Activities",
        id: "os-activities",
        summary: "An operating system provides an environment where programs can be run that benefit users. It manages hardware resources, provides interfaces, handles security, manages memory and files, and more. Operating systems are complex software that control computer hardware and interact with application software.",
        children: [
          {
            name: "User-System Interface",
            id: "user-system-interface",
            summary: "The user interface allows users to interact with software and hardware to perform useful tasks. An operating system should provide at least two types of interfaces:\n\n- Command-line interface: Allows users to type text commands directly\n- Graphical user interface (GUI): Provides visual elements like windows, icons, and buttons for interaction\n\nThese interfaces serve as the bridge between users and the complex operations happening within the computer system.",
          },
          {
            name: "Program-Hardware Interface",
            id: "program-hardware-interface",
            summary: "The operating system ensures that hardware does what software wants it to do. Program development tools allow programmers to write software without needing to know hardware details, particularly about the processor.\n\nThe operating system provides the mechanism for running developed programs by:\n- Translating high-level software instructions into hardware operations\n- Managing communication between software and hardware components\n- Providing standard interfaces for accessing hardware features\n- Abstracting hardware complexities so programmers can focus on functionality",
          },
          {
            name: "Resource Management",
            id: "resource-management",
            summary: "When a program runs, it's described as a process. Modern computer systems run many processes simultaneously, each needing access to system resources. The operating system manages these resources for optimal efficiency through:\n\n- Process scheduling: Determining which process runs when and for how long\n- Conflict resolution: Managing situations when two processes need the same resource\n- Resource allocation: Assigning memory, CPU time, and I/O devices to processes\n- Resource tracking: Monitoring usage to ensure fair distribution and prevent deadlocks\n\nEffective resource management allows multiple applications to run concurrently without interfering with each other.",
          },
          {
            name: "Memory Management",
            id: "memory-management",
            summary: "Memory management is a critical operating system task with three important aspects:\n\n1. Memory protection: Ensures one program doesn't use memory locations assigned to another program\n2. Memory organization: Implements schemes like virtual memory (paging or segmentation) to optimize limited memory\n3. Memory usage optimization: Decides which processes should be in main memory and where they should be stored\n\nEffective memory management allows more programs to run simultaneously and prevents programs from interfering with each other's data.",
          },
          {
            name: "Device Management",
            id: "device-management",
            summary: "Every computer system has various components categorized as 'devices' such as monitors, keyboards, printers, and webcams. The operating system manages these through:\n\n- Installation and maintenance of device driver software\n- Control of device usage by processes\n- Allocation of devices to different processes\n- Communication protocols between software and hardware devices\n- Error handling for device-related issues\n\nDevice management allows hardware components to work seamlessly with software applications.",
          },
          {
            name: "File Management",
            id: "file-management",
            summary: "File management is essential for organizing and accessing data. The operating system provides:\n\n- File naming conventions: Rules for how files can be named\n- Directory (folder) structures: Hierarchical organization of files\n- Access control mechanisms: Permissions determining who can access files\n- File operations: Creating, reading, writing, and deleting files\n- File system integrity: Ensuring data isn't corrupted or lost\n\nEffective file management allows users and programs to store and retrieve data reliably.",
          },
          {
            name: "Security Management",
            id: "security-management",
            summary: "Operating systems implement various security measures including:\n\n- Data recovery capabilities when information is lost\n- Prevention of unauthorized access or intrusion\n- Ensuring data privacy through encryption and access controls\n- Authentication systems for verifying user identities\n- Authorization systems that control what authenticated users can do\n- Audit trails that record system activity for security analysis\n\nSecurity management protects data and system resources from unauthorized access or tampering.",
          },
          {
            name: "Error Detection & Recovery",
            id: "error-detection-recovery",
            summary: "Errors can arise from badly written programs, inappropriate data, or malfunctioning devices. The operating system handles these by:\n\n- Interrupting problematic processes\n- Providing error diagnostics when possible\n- Allowing recovery from non-fatal errors\n- Safely shutting down the system in extreme cases without data loss\n- Creating logs for troubleshooting\n- Implementing fault tolerance mechanisms\n\nError handling capabilities prevent minor issues from becoming system-wide failures.",
          }
        ]
      },
      {
        name: "Utility Software",
        id: "utility-software",
        summary: "Utility software consists of programs that perform specific system maintenance tasks. Unlike the core operating system, utility programs are not executed as part of normal OS operation but are run when needed by users or the OS itself. Utilities help maintain, diagnose, and optimize system performance.",
        children: [
          {
            name: "Hard Disk Formatter & Checker",
            id: "disk-formatter-checker",
            summary: "Disk formatters prepare storage devices for use and may include disk checking capabilities:\n\n- Removing existing data from previously used disks\n- Setting up file systems with tables of contents linking files to physical disk locations\n- Partitioning disks into logical drives when required\n- Checking for physical errors like 'bad sectors'\n- Identifying and repairing file system errors caused by power loss or crashes\n- Marking damaged sectors to prevent future use\n- Recovering data from corrupted files when possible\n\nThese utilities ensure storage devices function reliably and efficiently.",
          },
          {
            name: "Hard Disk Defragmenter",
            id: "disk-defragmenter",
            summary: "A disk defragmenter optimizes file storage by reorganizing fragmented files:\n\n- As files are created, modified, and deleted, they become fragmented across non-contiguous sectors\n- Fragmentation occurs because the logical arrangement of data in sectors doesn't allow files to be stored as single blocks\n- A defragmenter reorganizes file storage so files occupy continuous sectors\n- This process improves read/write speeds and overall system performance\n- Defragmentation requires sufficient free space to rearrange files\n- Modern solid-state drives (SSDs) generally don't benefit from traditional defragmentation\n\nRegular defragmentation was particularly important for traditional hard disk drives to maintain optimal performance.",
          },
          {
            name: "Backup Software",
            id: "backup-software",
            summary: "Backup utility programs help protect data by creating redundant copies:\n\n- Establishing scheduled backups to ensure regular data protection\n- Creating incremental backups that only store changes since the last backup\n- Managing backup storage efficiently\n- Providing restore options when data is lost or corrupted\n- Verifying backup integrity to ensure recoverability\n- Supporting different backup types (full, differential, incremental)\n\nRegular backups are essential for preventing data loss due to hardware failure, user error, or malicious attacks.",
          },
          {
            name: "File Compression",
            id: "file-compression",
            summary: "File compression utilities reduce file size to save storage space or facilitate file transfer:\n\n- Compression minimizes storage requirements on hard disks\n- Compressed (or 'zipped') files are particularly useful for email attachments\n- Compression algorithms identify and eliminate redundancies in data\n- Some compression methods are lossless (preserving all original data)\n- Others are lossy (removing some data for greater compression)\n- Common formats include ZIP, RAR, 7Z for general data and specialized formats for media\n\nCompression is important for both storage optimization and efficient data transmission.",
          },
          {
            name: "Virus Checker",
            id: "virus-checker",
            summary: "Virus checking programs protect computer systems from malicious software:\n\n- Should be installed as a permanent security feature\n- Scan files when they enter the system\n- Perform regular system-wide scans to detect existing threats\n- Require frequent updates to recognize new viruses\n- Use virus definition databases to identify known threats\n- May employ heuristic analysis to detect suspicious behavior\n\nRegular updates are crucial because new viruses are constantly being created, and there's always a delay before virus checkers are updated to detect them.",
          }
        ]
      },
      {
        name: "Program Libraries",
        id: "program-libraries",
        summary: "Program libraries contain pre-written, tested subroutines that programmers can include in their own code. These save development time and reduce errors by providing reliable, reusable components for common tasks.",
        children: [
          {
            name: "Built-in Functions",
            id: "built-in-functions",
            summary: "Built-in functions are the most common examples of library routines:\n\n- Available for use when programming in a particular language\n- Perform common operations like mathematical calculations or string manipulation\n- Are thoroughly tested and optimized for performance\n- Save programmers from writing common code repeatedly\n- Are documented in language references\n- Examples include math functions, string operations, date/time handling\n\nBuilt-in functions provide reliable implementations of frequently used operations, allowing programmers to focus on unique aspects of their applications.",
          },
          {
            name: "Static Linking",
            id: "static-linking",
            summary: "Static linking incorporates library code directly into executable programs:\n\n- Library code becomes part of the executable file\n- Compiled object code is linked with code for any subroutines it uses\n- The resulting program doesn't depend on external libraries at runtime\n- This increases the storage space required for executable files\n- If multiple programs use the same routine, each needs its own copy\n- Memory usage increases when multiple processes use the same routine\n\nStatic linking creates standalone applications but at the cost of larger file sizes and memory usage.",
          },
          {
            name: "Dynamic Linked Libraries",
            id: "dynamic-linked-libraries",
            summary: "Dynamic Linked Libraries (DLLs) provide an alternative to static linking:\n\n- Programs include small code segments that link to separately stored routines\n- Multiple processes can link to the same routine in memory\n- Executable files require less storage space\n- Memory requirements are minimized as code is shared\n- Library updates automatically improve all programs using them\n- Main disadvantage: dependency on external files being available and functioning correctly\n- If a DLL becomes corrupted or a newer version has bugs, programs using it may fail\n\nDLLs offer greater efficiency but introduce dependencies that can cause compatibility issues.",
          },
          {
            name: "Specialized Libraries",
            id: "specialized-libraries",
            summary: "Specialized libraries provide functionality for specific domains:\n\n- The Numerical Algorithms Group (NAG) library contains over 1600 mathematical and statistical procedures\n- Graphics libraries provide routines for rendering and manipulating images\n- Networking libraries handle communication protocols\n- User interface libraries provide components for building GUIs\n- Database libraries offer functions for data storage and retrieval\n\nThese specialized collections allow programmers to leverage expert implementations rather than creating complex functionality from scratch.",
          }
        ]
      },
      {
        name: "Language Translators",
        id: "language-translators",
        summary: "Language translators convert programs written in human-readable programming languages to machine-executable code. There are different types of translators with various advantages and trade-offs.",
        children: [
          {
            name: "Assemblers",
            id: "assemblers",
            summary: "Assemblers translate assembly language programs into machine code:\n\n- Assembly language uses mnemonics to represent machine instructions\n- Assemblers convert these mnemonics to binary machine code the processor can execute\n- This is a relatively straightforward translation process\n- Each assembly language instruction typically corresponds to one machine instruction\n- Assemblers need to manage memory addresses and labels\n- They're specific to particular processor architectures\n\nAssembly language programming provides more direct control over hardware but is more complex than high-level languages.",
          },
          {
            name: "Compilers",
            id: "compilers",
            summary: "Compilers translate high-level language code into machine code through multiple steps:\n\n1. The source code file is read\n2. Each line is analyzed for syntax errors\n3. Errors are recorded but analysis continues\n4. Valid code is converted to intermediate code\n5. Only when the entire source is error-free is the intermediate code converted to object code\n6. The resulting executable file can be distributed and run without the compiler\n\nCompiled programs typically run faster than interpreted ones, and distributors can share object code without revealing source code.",
          },
          {
            name: "Interpreters",
            id: "interpreters",
            summary: "Interpreters execute programs directly from source code without creating executable files:\n\n1. The interpreter reads one line of source code at a time\n2. It analyzes the line for errors\n3. If an error is found, execution halts immediately\n4. If no error is found, the line is converted to intermediate code and executed\n5. This process repeats for each line\n\nInterpreters are advantageous during development because they provide immediate feedback on errors, but they require source code and the interpreter program to run applications.",
          },
          {
            name: "Compiled vs. Interpreted",
            id: "compiled-vs-interpreted",
            summary: "Compilers and interpreters have different advantages and disadvantages:\n\nAdvantages of interpreters during development:\n- Errors can be identified and corrected immediately\n- Debugging is often simpler with line-by-line execution\n- Changes can be tested without recompiling\n\nDisadvantages of interpreters:\n- Code parts with syntax errors may not be discovered until executed\n- Source code must be distributed to users\n- Runtime performance is typically slower\n\nAdvantages of compilers for finished programs:\n- Executable files can be distributed without source code\n- Only object code needs to be available to run programs\n- Compiled code generally executes faster\n\nDisadvantages of compilers:\n- The entire program must be recompiled after changes\n- Compiled code may contain viruses that are difficult to detect\n- The compilation process adds an extra step during development\n\nThe choice between interpreter and compiler depends on specific project requirements and development phase.",
          },
          {
            name: "Hybrid Approaches",
            id: "hybrid-approaches",
            summary: "Some languages use hybrid approaches that combine compilation and interpretation:\n\nJava uses a two-step process:\n1. Java source code is compiled to Java Byte Code (platform-independent)\n2. The Java Virtual Machine (JVM) interprets this Byte Code when the program runs\n3. Each computer needs its own JVM implementation\n4. The same Byte Code can run on any system with a JVM\n\nOther hybrid approaches include:\n- Just-In-Time (JIT) compilation that compiles code at runtime\n- Languages that precompile to intermediate code before interpretation\n- Tiered execution systems that interpret initially then compile frequently used sections\n\nHybrid approaches aim to balance development convenience with runtime performance and cross-platform compatibility.",
          }
        ]
      },
      {
        name: "IDE Features",
        id: "ide-features",
        summary: "Integrated Development Environments (IDEs) provide comprehensive tools for writing, testing, and debugging code. They combine editors, compilers/interpreters, and other development tools into a unified interface that enhances programmer productivity.",
        children: [
          {
            name: "Prettyprinting",
            id: "prettyprinting",
            summary: "Prettyprinting improves code readability through visual formatting:\n\n- Automatic syntax highlighting colors different code elements (keywords, comments, strings)\n- Different elements are displayed in distinct colors for easier recognition\n- Automatic indentation helps visualize code structure and nesting\n- Consistent formatting makes code easier to understand and maintain\n- May include automatic bracket matching and code folding\n\nPrettyprinting makes code structure immediately apparent and helps prevent syntax errors.",
          },
          {
            name: "Context-Sensitive Prompts",
            id: "context-sensitive-prompts",
            summary: "Context-sensitive prompts assist programmers by suggesting appropriate code options:\n\n- Displays hints or choices of keywords at the current insertion point\n- Shows available identifiers based on context\n- Auto-completes partially typed names of variables, functions, or methods\n- Lists parameters for functions and methods\n- Provides documentation snippets for selected items\n\nThese features speed up coding by reducing typing and helping programmers use correct syntax and available functions.",
          },
          {
            name: "Dynamic Syntax Checks",
            id: "dynamic-syntax-checks",
            summary: "Dynamic syntax checking identifies errors as code is written:\n\n- Performs syntax checks immediately when a line is typed\n- Alerts programmers to errors without waiting for compilation\n- Often underlines errors with squiggly lines or highlights them in red\n- May provide tooltips explaining the nature of errors\n- Can suggest corrections for common mistakes\n\nImmediate feedback on syntax errors helps programmers fix issues early, reducing debugging time later.",
          },
          {
            name: "Code Blocks Management",
            id: "code-blocks-management",
            summary: "Code blocks management features help navigate large programs:\n\n- Expanding and collapsing blocks of statements reduces scrolling\n- Code folding hides implementation details to focus on structure\n- Bracket matching helps identify block boundaries\n- Automatic indentation maintains visual hierarchy\n- Navigation shortcuts jump between related code sections\n\nThese features make it easier to work with large codebases by allowing programmers to focus on relevant sections while hiding details.",
          },
          {
            name: "Debugging Tools",
            id: "debugging-tools",
            summary: "Debugging tools help identify and fix program errors:\n\n- Breakpoints pause program execution at specified lines\n- Step-by-step execution allows inspection of program flow\n- Variable inspection shows current values during execution\n- Call stack viewing traces execution path\n- Watch windows monitor specific variables\n- Conditional breakpoints trigger only when conditions are met\n\nComprehensive debugging features allow programmers to observe program behavior in detail, making it easier to identify the causes of bugs.",
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
      .attr("r", d => d.data.id === "system-software" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'system-software' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'system-software' ? 10 : 6)
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
      setInfoContent("Click on any node to see detailed information about that topic from Chapter 8 on System Software.");
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
    <div className="flex flex-col w-full h-screen bg-gray-800 text-white">
      <div className="p-2 bg-gray-700 text-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold">Chapter 8: System Software</h1>
      </div>
      
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* Mindmap Area */} 
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden relative bg-gray-900">
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
              {activeNodeName || "Topic Information"} 
              {isNodeHidden && <span className="text-sm text-gray-400 ml-2">(Hidden)</span>}
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line mb-4">
              {infoContent ? (
                <p>{infoContent}</p>
              ) : (
                <p>Click on a node in the mindmap to see detailed information about system software concepts.</p>
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

export default SystemSoftwareMindMap;