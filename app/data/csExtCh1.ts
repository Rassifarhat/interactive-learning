import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Calculate the denary number corresponding to the binary number 10010101.",
  "id": "root",
  "children": [
    {
      "name": "Page 1",
      "id": "1-1",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the difference between binary prefixes and decimal prefixes, and provide an example of each.",
      "id": "1-2",
      "children": [
        {
          "name": "Information representation",
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
          "name": "Explain the difference between binary prefixes and decimal prefixes, providing examples of each.",
          "id": "2-3",
          "children": [],
          "summary": "Binary prefixes (e.g., kibi, mebi) are based on powers of 2 (e.g., 1 KiB = 1024 bytes), while decimal prefixes (e.g., kilo, mega) are based on powers of 10 (e.g., 1 kB = 1000 bytes)."
        }
      ],
      "summary": "Binary prefixes (e.g., kibi, mebi) are based on powers of 2, while decimal prefixes (e.g., kilo, mega) are based on powers of 10. For example, 1 KiB = 1024 bytes (binary) and 1 kB = 1000 bytes (decimal)."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Convert the binary number 110101 to denary.",
      "id": "1-4",
      "children": [
        {
          "name": "Explain how the denary number 346 is represented using place values and calculate its total value.",
          "id": "2-4",
          "children": [],
          "summary": "The number 346 is represented as 3 in the hundreds place (3 x 100 = 300), 4 in the tens place (4 x 10 = 40), and 6 in the units place (6 x 1 = 6). The total value is 300 + 40 + 6 = 346."
        },
        {
          "name": "Convert the binary number 110101 to its denary equivalent.",
          "id": "2-5",
          "children": [],
          "summary": "53"
        },
        {
          "name": "Convert the hexadecimal number 2A6 to its decimal (denary) equivalent.",
          "id": "2-6",
          "children": [],
          "summary": "678"
        }
      ],
      "summary": "53"
    },
    {
      "name": "Explain the relationship between binary, hexadecimal, and denary number systems, and provide an example of each.",
      "id": "1-5",
      "children": [],
      "summary": "Binary is base-2, hexadecimal is base-16, and denary is base-10. For example, the binary number 00001010 is equivalent to hexadecimal A and denary 10."
    },
    {
      "name": "Convert the denary number 19 to binary using the method of identifying the largest power of 2.",
      "id": "1-6",
      "children": [
        {
          "name": "Convert the binary number 10110 to its denary equivalent.",
          "id": "2-7",
          "children": [],
          "summary": "22"
        }
      ],
      "summary": "The largest power of 2 less than 19 is 16 (2^4). Write 1 in the 2^4 position. Subtract 16 from 19 to get 3. The largest power of 2 less than 3 is 2 (2^1). Write 1 in the 2^1 position. Subtract 2 from 3 to get 1. The largest power of 2 less than 1 is 1 (2^0). Write 1 in the 2^0 position. The binary representation is 10011."
    },
    {
      "name": "Convert the denary number 78 into binary using the method of successive subtraction of powers of two.",
      "id": "1-7",
      "children": [],
      "summary": "The binary representation of 78 is 1001110."
    },
    {
      "name": "Convert the denary numbers 96, 215, and 374 into hexadecimal numbers.",
      "id": "1-8",
      "children": [
        {
          "name": "What is the maximum denary value that can be represented with eight bits?",
          "id": "2-8",
          "children": [],
          "summary": "255"
        },
        {
          "name": "Convert the denary numbers 96, 215, and 374 into hexadecimal numbers. Convert the hexadecimal numbers B4, FF, and 3A2C to denary numbers.",
          "id": "2-9",
          "children": [],
          "summary": "96 in hexadecimal is 60; 215 in hexadecimal is D7; 374 in hexadecimal is 176. B4 in denary is 180; FF in denary is 255; 3A2C in denary is 15020."
        }
      ],
      "summary": "96 = 60, 215 = D7, 374 = 176."
    },
    {
      "name": "Page 5",
      "id": "1-9",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the difference between the decimal prefix 'kilo' in the context of measurement and in computing.",
      "id": "1-10",
      "children": [],
      "summary": "In measurement, 'kilo' represents a factor of $10^{3}$ (1000), while in computing, it often represents $2^{10}$ (1024), reflecting a historical adaptation to binary systems."
    },
    {
      "name": "Convert 34560 bytes to kibibytes and express the answer with one or two denary digits before the decimal point.",
      "id": "1-11",
      "children": [],
      "summary": "34.06 KiB"
    },
    {
      "name": "Page 7",
      "id": "1-12",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the process of converting a negative denary integer to its two's complement binary form.",
      "id": "1-13",
      "children": [
        {
          "name": "Explain the process of converting a negative denary integer to its two's complement binary form.",
          "id": "2-10",
          "children": [],
          "summary": "1. Disregard the sign and convert the absolute value to binary. 2. Add a 0 in front of the binary value. 3. Convert this binary value to its two's complement form."
        },
        {
          "name": "Explain the method for converting a negative number from two's complement to denary.",
          "id": "2-11",
          "children": [],
          "summary": "To convert a negative number in two's complement to denary, first, identify the number of bits. Invert all bits (change 0s to 1s and 1s to 0s) to find the positive equivalent, then add 1 to this inverted binary number. Finally, convert the resulting binary to denary and apply a negative sign."
        }
      ],
      "summary": "1. Disregard the sign of the denary value and convert it to binary. 2. Add a 0 in front of the binary value. 3. Convert this binary value to its two's complement form."
    },
    {
      "name": "What is the two's complement representation of the signed denary number -79?",
      "id": "1-14",
      "children": [],
      "summary": "10110001"
    },
    {
      "name": "Page 9",
      "id": "1-15",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Take the two's complement of the binary code for -7 and show that you get the code for +7.",
      "id": "1-16",
      "children": [
        {
          "name": "Convert the two's complement number 1011 to the denary equivalent. Then do the same for 111011 and confirm that you get the same value.",
          "id": "2-12",
          "children": [],
          "summary": "The two's complement number 1011 represents -5 in denary. The two's complement number 111011 represents -21 in denary. Both conversions are correct and confirm the values."
        },
        {
          "name": "What is the two's complement of the binary value 1000? Are you surprised by this?",
          "id": "2-13",
          "children": [],
          "summary": "The two's complement of the binary value 1000 is 0111. This is not surprising as the two's complement is found by inverting the bits and adding 1, resulting in 0111."
        },
        {
          "name": "What is the binary sum of the denary numbers 14 and 11? Show your working.",
          "id": "2-14",
          "children": [],
          "summary": "The binary sum is 11001. Working: 1110 (14) + 1011 (11) = 1 (carry) + 1 + 0 = 0 (carry 1); 1 + 1 + 1 (carry) = 1 (carry 1); 0 + 1 + 1 (carry) = 0 (carry 1); 1 + 1 + 1 (carry) = 1 (carry 1). Final result: 11001."
        }
      ],
      "summary": "The binary code for +7 is 0111. The two's complement is found by inverting the bits (1000) and adding 1 (1001). To find -7, take the two's complement of 1001, which gives 0111, confirming that the two's complement of -7 is +7."
    },
    {
      "name": "Explain the process of binary subtraction and how borrowing is handled, using the example of subtracting the binary equivalent of denary 11 from the binary equivalent of denary 14.",
      "id": "1-17",
      "children": [],
      "summary": "Binary subtraction starts from the least significant bit, borrowing when necessary. For 14 (1110) - 11 (1011): 1-1=0, 0-1 requires a borrow (becomes 10-1=1), 0-1 requires another borrow (becomes 10-0=1), and 1-0=1. The result is 0011, which is denary 3."
    },
    {
      "name": "Explain how overflow can occur in binary addition and how it can be detected in a two's complement system.",
      "id": "1-18",
      "children": [],
      "summary": "Overflow occurs when the result of a binary addition exceeds the range representable by the number of bits used, leading to incorrect interpretation of the result (e.g., a positive result interpreted as negative). In a two's complement system, overflow can be detected by checking if the carry into the most significant bit differs from the carry out of the most significant bit."
    },
    {
      "name": "Using binary arithmetic with two's complement representations, subtract denary 35 from denary 67. Show your workings.",
      "id": "1-19",
      "children": [
        {
          "name": "Explain the advantages of using Binary Coded Decimal (BCD) for representing currency values instead of real numbers.",
          "id": "2-15",
          "children": [],
          "summary": "BCD allows for accurate representation of each denary digit, avoiding rounding errors associated with real numbers, which is crucial for financial calculations."
        }
      ],
      "summary": "1. Convert 67 and 35 to binary: 67 = 01000011, 35 = 00100011. 2. Find two's complement of 35: Invert bits = 11011100, add 1 = 11011101. 3. Add to 67: 01000011 + 11011101 = 1 00100000 (ignore carry). 4. Result in binary = 00100000, which is 32 in denary."
    },
    {
      "name": "Explain how BCD addition is corrected when an invalid BCD value is produced during the addition of two decimal numbers.",
      "id": "1-20",
      "children": [],
      "summary": "When an invalid BCD value is produced (e.g., values greater than 9), 0110 is added to the incorrect result. This correction adjusts the value to a valid BCD representation and any carry is propagated to the next nibble."
    },
    {
      "name": "Page 13",
      "id": "1-21",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the maximum number of distinct characters that can be represented using the 7-bit ASCII coding scheme?",
      "id": "1-22",
      "children": [
        {
          "name": "What is the hexadecimal equivalent of the binary code 00110001?",
          "id": "2-16",
          "children": [],
          "summary": "31"
        },
        {
          "name": "Explain the significance of bit 5 in the ASCII coding scheme.",
          "id": "2-17",
          "children": [],
          "summary": "Bit 5 differentiates upper-case letters from lower-case letters, allowing simple conversion between the two cases."
        }
      ],
      "summary": "128 distinct characters."
    },
    {
      "name": "What is the main difference between 7-bit ASCII and Extended ASCII?",
      "id": "1-23",
      "children": [],
      "summary": "7-bit ASCII uses 7 bits to represent characters, while Extended ASCII uses 8 bits, allowing for additional characters such as accented letters."
    },
    {
      "name": "If a character is represented by one byte (6 bits), which characters can be represented and which cannot?",
      "id": "1-24",
      "children": [
        {
          "name": "Explain the structure of UTF-8 encoding and how it differentiates between single and multiple byte codes.",
          "id": "2-18",
          "children": [],
          "summary": "UTF-8 encoding uses a variable-length format where a single byte code has the most significant bit set to 0, allowing for 7-bit ASCII representation. Multiple byte codes start with specific patterns: two-byte codes begin with '110', three-byte codes with '1110', and four-byte codes with '11110', followed by continuation bytes starting with '10'. This structure ensures that single byte codes do not conflict with the start of multi-byte codes."
        }
      ],
      "summary": "Characters representable include those in the range U+0000 to U+003F (ASCII characters). Characters outside this range, such as those requiring more than 6 bits (e.g., U+0040 and above), cannot be represented."
    },
    {
      "name": "Page 15",
      "id": "1-25",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the main differences between vector graphics and bitmap images in terms of storage and scalability?",
      "id": "1-26",
      "children": [
        {
          "name": "Explain the advantages of using vector graphics over raster graphics in digital images.",
          "id": "2-19",
          "children": [],
          "summary": "Vector graphics are resolution-independent, allowing for scaling without loss of quality; they have smaller file sizes due to the use of mathematical equations rather than pixel data; and they allow for easy editing of individual components."
        },
        {
          "name": "Explain the main advantage of using vector graphics over bitmap images.",
          "id": "2-20",
          "children": [],
          "summary": "Vector graphics are scalable without loss of quality, as they are defined by mathematical equations rather than fixed pixels."
        },
        {
          "name": "Explain what a bitmap image is and describe how it is created.",
          "id": "2-21",
          "children": [],
          "summary": "A bitmap image is a digital representation of an image where each pixel corresponds to a specific color. It is created by capturing an existing image through scanning or screen-shotting, or by using graphics software to define the color of each pixel."
        }
      ],
      "summary": "Vector graphics store images as a list of drawing commands with attributes, allowing for scalability without distortion. Bitmap images store images as a grid of pixels, which can lose quality when scaled."
    },
    {
      "name": "Calculate the file size in bytes of a bitmap image with a resolution of 1366 by 768 pixels and a colour depth of 24 bits per pixel.",
      "id": "1-27",
      "children": [],
      "summary": "The file size is 3147264 bytes."
    },
    {
      "name": "Explain how the bit depth affects the total number of bits used to define an image in pixels.",
      "id": "1-28",
      "children": [],
      "summary": "The bit depth determines the number of bits used for each color channel in a pixel. For an 8-bit depth per channel (RGB), the total bits per pixel would be calculated as 8 bits (red) + 8 bits (green) + 8 bits (blue) = 24 bits per pixel."
    },
    {
      "name": "Calculate the minimum size of a bitmap file with a bit depth of 8, printed at 72 dpi, and dimensions 5 inches by 3 inches.",
      "id": "1-29",
      "children": [],
      "summary": "The minimum size of the bitmap file is approximately 227.8 KiB."
    },
    {
      "name": "Page 18",
      "id": "1-30",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the role of the band-limiting filter and the analogue-to-digital converter (ADC) in the process of converting analogue sound signals to digital format.",
      "id": "1-31",
      "children": [],
      "summary": "The band-limiting filter removes high-frequency components that cannot be detected by the human ear to prevent coding issues. The ADC converts the filtered analogue sound signal into a digital format by sampling the amplitude at regular intervals and approximating it to the nearest defined amplitude value."
    },
    {
      "name": "Page 19",
      "id": "1-32",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the difference between lossless and lossy compression? Provide an example of each.",
      "id": "1-33",
      "children": [],
      "summary": "Lossless compression reduces file size without losing any information, allowing the original file to be perfectly reconstructed (e.g., run-length encoding). Lossy compression reduces file size by removing some information, making it impossible to recover the exact original file (e.g., JPEG image compression)."
    },
    {
      "name": "Explain the difference between lossless and lossy compression in the context of image and sound files.",
      "id": "1-34",
      "children": [],
      "summary": "Lossless compression preserves all original data and allows for exact reconstruction of the file, suitable for vector graphics like SVG. Lossy compression removes some data deemed unnecessary, resulting in reduced file size but potential loss of quality, commonly used in sound files and bitmap images."
    },
    {
      "name": "What compression techniques are used by JPEG, GIF, PNG, and TIFF formats?",
      "id": "1-35",
      "children": [
        {
          "name": "What are the different possibilities for what one byte might be coded to represent in a computer system?",
          "id": "2-22",
          "children": [],
          "summary": "One byte can represent 256 different values (0-255), which can correspond to characters in ASCII, colors in digital images, or numerical values in data storage."
        },
        {
          "name": "Explain the difference between lossless and lossy compression in data storage.",
          "id": "2-23",
          "children": [],
          "summary": "Lossless compression allows the original file to be perfectly reconstructed from the compressed data, while lossy compression permanently removes some information, resulting in a loss of quality."
        }
      ],
      "summary": "JPEG uses lossy compression, GIF uses lossless compression with LZW, PNG uses lossless compression with DEFLATE, and TIFF can use both lossless and lossy compression methods."
    },
    {
      "name": "Page 21",
      "id": "1-36",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Calculate the denary number corresponding to the unsigned integer represented by the two bytes 10010101 and 00110011.",
      "id": "1-37",
      "children": [],
      "summary": "The denary number is 149."
    },
    {
      "name": "Convert the decimal number 359 into Binary Coded Decimal (BCD) form.",
      "id": "1-38",
      "children": [],
      "summary": "359 in BCD is 0011 0101 1001."
    }
  ],
  "summary": "The denary number is 149."
};

export default data;
