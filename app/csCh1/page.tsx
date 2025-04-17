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
const ChapterOneMindMap: React.FC = () => {
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
    name: "Information Representation",
    id: "information-representation",
    summary: "Chapter 1 covers how information is represented in computer systems, including different number systems, internal coding of data like numbers, text, images, and sound, and techniques for data compression.",
    children: [
      {
        name: "Number Systems",
        id: "number-systems",
        summary: "Different number systems are used in computing, with the most important being binary, denary (decimal), and hexadecimal. Each system uses a different base and has specific uses in computer science.",
        children: [
          {
            name: "Denary Numbers",
            id: "denary-numbers",
            summary: "The denary (decimal) number system is base-10 and uses the digits 0-9. Each position in a denary number represents a power of 10.\n\nFor example, the number 346 represents: (3 × 10²) + (4 × 10¹) + (6 × 10⁰) = 300 + 40 + 6 = 346\n\nThis is the number system we use in everyday life."
          },
          {
            name: "Binary Numbers",
            id: "binary-numbers",
            summary: "The binary number system is base-2 and uses only the digits 0 and 1 (bits). Each position in a binary number represents a power of 2.\n\nFor example, the binary number 101110 represents: (1 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (1 × 2²) + (1 × 2¹) + (0 × 2⁰) = 32 + 0 + 8 + 4 + 2 + 0 = 46\n\nBinary is fundamental to computer systems because hardware components can represent only two states: 'on' and 'off'. A group of 8 bits is called a byte."
          },
          {
            name: "Hexadecimal Numbers",
            id: "hexadecimal-numbers",
            summary: "The hexadecimal system is base-16 and uses the digits 0-9 and the letters A-F (representing values 10-15). Each position represents a power of 16.\n\nFor example, the hexadecimal number 2A6 represents: (2 × 16²) + (A × 16¹) + (6 × 16⁰) = (2 × 256) + (10 × 16) + 6 = 512 + 160 + 6 = 678\n\nHexadecimal is useful because one hexadecimal digit can represent a nibble (4 bits), making binary values more readable. Two hexadecimal digits can represent one byte."
          },
          {
            name: "Number Conversions",
            id: "number-conversions",
            summary: "Converting between number systems is a fundamental skill in computer science.\n\nBinary to Denary: Add the place values for each '1' bit\nExample: 11001 = 16 + 8 + 1 = 25\n\nDenary to Binary: Divide repeatedly by 2 and record remainders\nExample: 78 ÷ 2 = 39 remainder 0, 39 ÷ 2 = 19 remainder 1, etc. Then read remainders in reverse: 1001110\n\nHexadecimal conversion typically involves converting to/from binary as an intermediate step, with each hex digit representing 4 bits.",
            children: [
              {
                name: "Binary-Denary Methods",
                id: "binary-denary-methods",
                summary: "There are two common methods for converting between binary and denary:\n\n1. Place value method: To convert binary to denary, add the place values for each '1' bit. For example, 11001 = 16 + 8 + 1 = 25\n\n2. Successive division method: To convert denary to binary, divide repeatedly by 2 and record remainders. Example: 246 ÷ 2 = 123 remainder 0, 123 ÷ 2 = 61 remainder 1, etc. Then read remainders in reverse: 11110110"
              },
              {
                name: "Hexadecimal Conversions",
                id: "hexadecimal-conversions",
                summary: "Converting hexadecimal to binary: Each hex digit converts to 4 bits\n0 → 0000, 1 → 0001, ..., 9 → 1001, A → 1010, B → 1011, ..., F → 1111\n\nConverting binary to hexadecimal: Group bits into sets of 4, starting from the right, and convert each group to a hex digit.\n\nExample: Binary 1011 0101 to hex: 1011 = B, 0101 = 5, so the result is B5"
              }
            ]
          }
        ]
      },
      {
        name: "Numbers and Quantities",
        id: "numbers-quantities",
        summary: "This section covers how to represent numeric values, especially large quantities with prefixes, and the distinction between decimal and binary prefixes.",
        children: [
          {
            name: "Types of Numbers",
            id: "types-of-numbers",
            summary: "Different types of numbers in computing include:\n\n- Integer: A whole number used for counting (e.g., 3, 47)\n- Signed integer: An integer with a sign (e.g., -3, +47)\n- Fraction: Values represented as ratios (e.g., 2/3, 52/17)\n- Mixed numbers: Numbers with whole and fractional parts (e.g., -37.85, 2.83)\n- Exponential notation: Numbers expressed as powers (e.g., 3.6×10⁸, 4.2×10⁻⁹)"
          },
          {
            name: "Decimal Prefixes",
            id: "decimal-prefixes",
            summary: "Decimal prefixes represent powers of 10:\n\n- kilo (k): 10³ = 1,000\n- mega (M): 10⁶ = 1,000,000\n- giga (G): 10⁹ = 1,000,000,000\n- tera (T): 10¹² = 1,000,000,000,000\n\nFor example, 23.567 km means 23.567 × 10³ meters."
          },
          {
            name: "Binary Prefixes",
            id: "binary-prefixes",
            summary: "Binary prefixes represent powers of 2:\n\n- kibi (Ki): 2¹⁰ = 1,024\n- mebi (Mi): 2²⁰ = 1,048,576\n- gibi (Gi): 2³⁰ = 1,073,741,824\n- tebi (Ti): 2⁴⁰ = 1,099,511,627,776\n\nBinary prefixes are used for quantities directly related to binary data storage, like memory size. For example, an 8 GiB RAM means 8 × 2³⁰ bytes of memory."
          }
        ]
      },
      {
        name: "Internal Coding of Numbers",
        id: "internal-coding-numbers",
        summary: "This section covers how computers internally represent and store numeric values, focusing on integer representation and binary arithmetic.",
        children: [
          {
            name: "Integer Coding",
            id: "integer-coding",
            summary: "Unsigned integers are stored simply as binary numbers. The number of bytes allocated determines the range of possible values.\n\nFor signed integers (that can be positive or negative), two representation methods exist:\n\n1. Sign and magnitude: Uses one bit to indicate the sign (0 for positive, 1 for negative)\n\n2. Two's complement: The most common method used in computers for representing signed integers.",
            children: [
              {
                name: "Two's Complement",
                id: "twos-complement",
                summary: "Two's complement is the standard method for representing signed integers in computers. To find the two's complement of a binary number:\n\n1. Invert all bits (change 0s to 1s and vice versa) - this is the one's complement\n2. Add 1 to the result\n\nFor example, to represent -25 in 8-bit two's complement:\n- +25 in binary is 00011001\n- Invert all bits: 11100110\n- Add 1: 11100111\n\nTwo's complement has several advantages:\n- Only one representation of zero\n- Addition and subtraction work naturally\n- No need for special handling of the sign bit"
              }
            ]
          },
          {
            name: "Binary Arithmetic",
            id: "binary-arithmetic",
            summary: "Basic rules for binary addition:\n0+0=0\n0+1=1\n1+0=1\n1+1=0 (with carry 1)\n\nBinary subtraction can be performed directly or by using two's complement (adding the negative of the number).\n\nA key issue in binary arithmetic is overflow, which occurs when the result of an operation is too large to be represented in the allocated number of bits. This can lead to unexpected results, particularly when using two's complement representation.",
            children: [
              {
                name: "Addition and Subtraction",
                id: "addition-subtraction",
                summary: "Binary addition follows these rules:\n- 0+0=0\n- 0+1=1\n- 1+0=1\n- 1+1=0 with carry 1\n- 1+1+1=1 with carry 1\n\nExample: Adding 1011 (11) and 1110 (14):\n   1011\n + 1110\n ------\n  11001 (25)\n\nBinary subtraction can be done directly using borrowing, similar to decimal subtraction, or by adding the two's complement of the subtrahend to the minuend."
              },
              {
                name: "Overflow Issues",
                id: "overflow-issues",
                summary: "Overflow occurs when the result of a calculation is too large to be represented in the allocated number of bits. This is particularly important with two's complement representation.\n\nFor example, adding two large positive numbers might result in what appears to be a negative number if the leading bit becomes 1. Similarly, adding two large negative numbers might result in what appears to be a positive number.\n\nComputer systems need to detect overflow conditions and handle them appropriately to avoid incorrect calculations."
              }
            ]
          },
          {
            name: "Binary Coded Decimal",
            id: "binary-coded-decimal",
            summary: "Binary Coded Decimal (BCD) is a method of encoding denary digits directly in binary. In simple BCD, each denary digit (0-9) is represented by a 4-bit binary number (a nibble).\n\nFor example, the number 359 in BCD would be encoded as:\n3 = 0011\n5 = 0101\n9 = 1001\nSo 359 in BCD is 0011 0101 1001\n\nBCD can be stored with one digit per byte (using only 4 bits per byte) or in packed form with two digits per byte.\n\nBCD is used in applications that display numbers (like calculators), in digital time displays, and for representing currency values where exact decimal representation is important.",
            children: [
              {
                name: "BCD Arithmetic",
                id: "bcd-arithmetic",
                summary: "Arithmetic with BCD is more complex than with pure binary. When adding BCD digits, if the result is greater than 9, a correction must be applied.\n\nFor example, adding 6 and 5 in BCD:\n0110 (6) + 0101 (5) = 1011\nThis equals 11 in binary, but in BCD, 1011 represents invalid data. To correct this, add 0110 (6):\n1011 + 0110 = 10001\nThe result is 0001 with a carry of 1, which correctly represents the digit 1 with a carry of 1 to the next position.\n\nThis procedure ensures results stay within the valid BCD range of 0-9 for each digit."
              }
            ]
          }
        ]
      },
      {
        name: "Internal Coding of Text",
        id: "internal-coding-text",
        summary: "This section explores how text is represented and stored in computer systems using character encoding schemes.",
        children: [
          {
            name: "ASCII Code",
            id: "ascii-code",
            summary: "ASCII (American Standard Code for Information Interchange) is a character encoding standard using 7 bits to represent 128 different characters. These include control characters, letters, digits, and symbols.\n\nKey characteristics of ASCII:\n- Control characters (non-printing) help with data transmission and handling\n- Includes upper and lowercase letters, punctuation, digits, and arithmetic symbols\n- Codes for numbers and letters are in sequence (e.g., '1' through '9' have sequential codes)\n- Upper and lowercase letter codes differ only in one bit (bit 5)\n\nExtended ASCII uses all 8 bits in a byte, allowing for 256 different characters, including additional symbols and characters used in European languages.",
            children: [
              {
                name: "ASCII Features",
                id: "ascii-features",
                summary: "Important features of ASCII include:\n\n1. Sequential codes: Characters like the digits 0-9 and letters A-Z have sequential codes, making it easy to perform operations like incrementing a character.\n\n2. Consistent case difference: Uppercase and lowercase letters differ by exactly one bit (bit 5), allowing simple conversion between them.\n\n3. Control characters: Codes 0-31 and 127 are reserved for control characters like NUL, SOH, CR, LF, etc., which control how text is processed rather than representing printable characters.\n\n4. Limited to English: Being a 7-bit code, ASCII can only represent 128 characters, which is sufficient for English but cannot represent characters from many other languages."
              }
            ]
          },
          {
            name: "Unicode",
            id: "unicode",
            summary: "Unicode is a character encoding standard designed to represent text from all the world's writing systems. The most widely used implementation is UTF-8.\n\nUTF-8 is a variable-length encoding that uses 1 to 4 bytes per character:\n- Characters U+0000 to U+007F (ASCII range) use 1 byte\n- Characters U+0080 to U+07FF use 2 bytes\n- Characters U+0800 to U+FFFF use 3 bytes\n- Characters U+10000 to U+10FFFF use 4 bytes\n\nUTF-8 is backward compatible with ASCII, as the first 128 Unicode code points (U+0000 to U+007F) are encoded identically to ASCII.",
            children: [
              {
                name: "Unicode Structure",
                id: "unicode-structure",
                summary: "UTF-8 uses a clever byte structure to encode Unicode characters while maintaining compatibility with ASCII:\n\n- Single-byte characters: 0xxxxxxx (compatible with ASCII)\n- Two-byte characters: 110xxxxx 10xxxxxx\n- Three-byte characters: 1110xxxx 10xxxxxx 10xxxxxx\n- Four-byte characters: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n\nThis structure allows a decoder to easily determine how many bytes make up a character by looking at the leading bits of the first byte. The 'continuation bytes' all start with the bit pattern '10', making them easily identifiable.\n\nIn Unicode terminology, a character code is called a 'code point' and is typically written as U+ followed by a hexadecimal number (e.g., U+0041 for the letter 'A')."
              }
            ]
          }
        ]
      },
      {
        name: "Images",
        id: "images",
        summary: "This section covers how images are represented and stored in computer systems, focusing on the two main types: vector graphics and bitmaps.",
        children: [
          {
            name: "Vector Graphics",
            id: "vector-graphics",
            summary: "Vector graphics store images as a collection of geometric objects (lines, shapes, curves) defined by mathematical equations. Each object has attributes like position, size, outline thickness, fill color, etc.\n\nA vector graphic file contains a drawing list with commands for each object and their attributes. The dimensions are defined relative to an imaginary canvas, making the image scalable without loss of quality.\n\nVector graphics are ideal for logos, illustrations, and diagrams where scalability is important. They typically result in smaller file sizes compared to bitmap equivalents.",
            children: [
              {
                name: "Vector Characteristics",
                id: "vector-characteristics",
                summary: "Key characteristics of vector graphics include:\n\n1. Scalability: Vector images can be resized without losing quality because they are mathematically defined.\n\n2. Resolution independence: The image looks the same at any display resolution.\n\n3. Editability: Individual components can be selected and modified.\n\n4. Smaller file sizes for simple graphics: Drawing commands often take less space than pixel-by-pixel data.\n\n5. Not suitable for photographic images: Complex images with subtle color variations are difficult to represent effectively as vectors.\n\nVector graphics are typically used in CAD software, drawing applications, and for logos, diagrams, and illustrations."
              }
            ]
          },
          {
            name: "Bitmaps",
            id: "bitmaps",
            summary: "Bitmap images (also called raster images) represent images as a grid of individual pixels. Each pixel has a specific position and color value.\n\nKey characteristics of bitmaps include:\n- Resolution: The dimensions of the image in pixels (e.g., 1366 × 768)\n- Color depth: The number of bits used to represent each pixel's color\n- Bit depth: The number of bits used for each color component (typically RGB)\n\nA color depth of 8 bits provides 256 different colors, while 24 bits (8 bits per RGB channel) provides over 16 million colors.\n\nBitmaps are suitable for photographs and complex images but become pixelated when enlarged beyond their original resolution.",
            children: [
              {
                name: "Bitmap File Size",
                id: "bitmap-file-size",
                summary: "The size of a bitmap file can be calculated using the formula:\n\nFile size (in bits) = Width × Height × Color depth\n\nExample: For an image with resolution 1366 × 768 and 24-bit color depth:\nSize = 1366 × 768 × 24 = 25,178,112 bits\n= 3,147,264 bytes\n= 3,073.5 KiB\n\nFile size increases significantly with higher resolution and color depth. A bitmap file also includes a header containing information about the image format, resolution, and color depth, which slightly increases the total file size."
              },
              {
                name: "Choosing Image Formats",
                id: "choosing-image-formats",
                summary: "When deciding between vector and bitmap formats, consider these factors:\n\n- Use vector graphics for diagrams, logos, illustrations, and any image that needs to be scaled to different sizes\n\n- Use bitmaps for photographs, complex images with many colors and subtle variations\n\n- Consider file size requirements, especially for web or mobile applications\n\n- Remember that vector graphics must be converted to bitmaps for display on most output devices (except specialized plotters)\n\n- Digital cameras and scanned images produce bitmaps"
              }
            ]
          }
        ]
      },
      {
        name: "Sound",
        id: "sound",
        summary: "This section covers how sound is digitally represented and stored in computer systems through the process of analog-to-digital conversion.",
        children: [
          {
            name: "Digital Sound Representation",
            id: "digital-sound-representation",
            summary: "Sound is naturally an analog phenomenon consisting of pressure waves. To store sound digitally, these continuous waves must be converted to discrete values.\n\nThe process involves:\n1. Using a band-limiting filter to remove very high frequencies beyond human hearing capability\n2. Employing an analog-to-digital converter (ADC) to sample the sound at regular intervals\n\nTwo key factors in digital sound representation are sampling rate and sampling resolution.",
            children: [
              {
                name: "Sampling Rate",
                id: "sampling-rate",
                summary: "Sampling rate is the number of samples taken per second, measured in Hertz (Hz). According to Nyquist's theorem, the sampling rate must be at least twice the highest frequency in the sound being sampled.\n\nCommon sampling rates include:\n- 44.1 kHz: CD-quality audio\n- 48 kHz: Professional audio and DVD\n- 96 kHz: High-resolution audio\n\nHigher sampling rates capture higher frequencies more accurately but increase file size proportionally."
              },
              {
                name: "Sampling Resolution",
                id: "sampling-resolution",
                summary: "Sampling resolution (also called bit depth) is the number of bits used to store each sample's amplitude value. It determines how accurately the amplitude of the sound wave can be represented.\n\nCommon sampling resolutions include:\n- 8-bit: 256 possible amplitude values (low quality)\n- 16-bit: 65,536 possible amplitude values (CD quality)\n- 24-bit: Over 16 million possible amplitude values (professional audio)\n\nHigher resolution provides more accurate sound reproduction with less quantization noise but increases file size."
              }
            ]
          },
          {
            name: "Analog-to-Digital Conversion",
            id: "analog-to-digital-conversion",
            summary: "The Analog-to-Digital Converter (ADC) samples the continuous analog sound wave at regular intervals and approximates each sample to the nearest available discrete value determined by the sampling resolution.\n\nThis process involves:\n1. Sampling: Measuring the amplitude of the wave at regular time intervals\n2. Quantization: Converting each measured value to the nearest discrete level\n3. Encoding: Representing each quantized value as a binary number\n\nThe accuracy of this process depends on both the sampling rate and resolution. Higher values for both parameters result in more accurate digital representation but larger file sizes."
          }
        ]
      },
      {
        name: "Compression Techniques",
        id: "compression-techniques",
        summary: "This section covers methods used to reduce file sizes, which is important for efficient storage and faster transmission of data files.",
        children: [
          {
            name: "Lossless Compression",
            id: "lossless-compression",
            summary: "Lossless compression reduces file size without losing any information. The original file can be perfectly reconstructed during decompression.\n\nCommon lossless compression techniques include:\n\n1. Run-length encoding: Replaces sequences of identical bytes with a count and the byte value. Effective for images with large areas of the same color.\n\n2. Huffman coding: Assigns shorter codes to frequently occurring characters and longer codes to rare ones. Used in text compression and as part of more complex algorithms.\n\nLossless compression is essential for text files, executable programs, and any data where information loss would be unacceptable.",
            children: [
              {
                name: "Run-Length Encoding",
                id: "run-length-encoding",
                summary: "Run-Length Encoding (RLE) compresses data by replacing sequences of identical bytes with a count and the byte value.\n\nFor example, a sequence like:\n01100110 01100110 01100110 01100110\n\nCould be encoded as:\n00000100 01100110\n\nMeaning '4 occurrences of 01100110'\n\nRLE is particularly effective for bitmap images with large areas of the same color, such as diagrams, simple graphics, and fax documents. However, it can actually increase file size for complex images with few repeated patterns."
              },
              {
                name: "Huffman Coding",
                id: "huffman-coding",
                summary: "Huffman coding assigns variable-length codes to input characters based on their frequencies. More common characters are given shorter codes, less common ones get longer codes.\n\nFor example, in English text, 'e' might be assigned a short code like '10', while 'z' gets a longer code like '0010'.\n\nA key feature is the prefix property: no code is a prefix of another code, ensuring unambiguous decoding.\n\nHuffman coding is used in many compression algorithms and is particularly effective for text files with repetitive character patterns."
              }
            ]
          },
          {
            name: "Lossy Compression",
            id: "lossy-compression",
            summary: "Lossy compression reduces file size by discarding some data. The original file cannot be perfectly reconstructed during decompression, but the loss is designed to be perceptually minimal.\n\nLossy compression is commonly used for:\n\n1. Images: Techniques like JPEG reduce file size by discarding fine details that human eyes are less sensitive to.\n\n2. Sound: Methods include reducing the bit depth of amplitude differences or removing frequencies that are less audible.\n\nLossy compression achieves much higher compression ratios than lossless methods but is only suitable when some data loss is acceptable.",
            children: [
              {
                name: "Image Lossy Compression",
                id: "image-lossy-compression",
                summary: "For bitmap images, lossy compression techniques include:\n\n1. Color reduction: Decreasing the color depth and mapping each pixel to the closest available color in the reduced palette\n\n2. Chroma subsampling: Reducing the resolution of color information while keeping full luminance resolution, taking advantage of human vision's lower sensitivity to color detail\n\n3. Transform coding (like JPEG): Converting image data to a frequency domain representation, then quantizing the coefficients to reduce precision, focusing on preserving visually important information\n\nThese methods achieve high compression ratios (often 10:1 or better) with only minor visible degradation."
              }
            ]
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
      .attr("r", d => d.data.id === "organic-chemistry" ? 10 : 6)
      .style("cursor", "pointer")
      .on("click", (event: MouseEvent, d: any) => {
        setActiveNode(d.data.id);
        setInfoContent(d.data.summary || `${d.data.name} - No summary available.`);
        setSaveStatus(''); // Reset save status when new node is clicked
      })
      .on("mouseover", (event: MouseEvent, d: any) => {
        // Cast currentTarget to SVGCircleElement for d3.select
        d3.select(event.currentTarget as SVGCircleElement)
          .attr('r', (d: any) => d.data.id === 'information-representation' ? 12 : 8)
          .attr('stroke', 'black'); // Enlarge and highlight on hover
      })
      .on("mouseout", (event: MouseEvent, d: any) => {
          // Cast currentTarget to SVGCircleElement for d3.select
          d3.select(event.currentTarget as SVGCircleElement)
            .attr('r', (d: any) => d.data.id === 'information-representation' ? 10 : 6)
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
        <h1 className="text-xl font-semibold">Topic 1: Information Representation</h1>
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

export default ChapterOneMindMap;