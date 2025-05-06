import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-1",
  "id": "root",
  "children": [
    {
      "name": "Chapter 1",
      "id": "1",
      "children": [
        {
          "name": "What are the different methods of information representation?",
          "id": "1-1",
          "summary": "The different methods of information representation include: 1. Text: Used to represent data using letters, numbers, and symbols. 2. Images: Includes photographs, drawings, and other visual content. 3. Sound: Used to represent information through audio, such as music and speech. 4. Video: Combines both audio and visual elements to represent information. 5. Graphics: Involves charts, diagrams, and infographics that visually represent data and relationships. 6. Tables: Organizes information into rows and columns for clarity. 7. Symbols: Utilizes specific characters or images to convey specific meanings, often used in coding and programming. Each method has its own advantages and is suited to specific types of information.",
          "children": []
        },
        {
          "name": "What are the learning objectives?",
          "id": "1-2",
          "summary": "Learning objectives outline the expected outcomes of a lesson or course. They specify what students should be able to understand, demonstrate, or achieve by the end of a learning period. Typically, they focus on knowledge acquisition, skills development, and application of learned concepts.",
          "children": []
        },
        {
          "name": "Explain the difference between binary prefixes and decimal prefixes.",
          "id": "1-3",
          "summary": "Binary prefixes are based on powers of 2, such as kibibyte (KiB), mebibyte (MiB), and gibibyte (GiB), where 1 KiB = 2^10 bytes, 1 MiB = 2^20 bytes, and 1 GiB = 2^30 bytes. Decimal prefixes, on the other hand, are based on powers of 10, such as kilobyte (KB), megabyte (MB), and gigabyte (GB), where 1 KB = 10^3 bytes, 1 MB = 10^6 bytes, and 1 GB = 10^9 bytes. The primary difference lies in their base: binary prefixes use base 2 while decimal prefixes use base 10.",
          "children": []
        }
      ]
    },
    {
      "name": "1 01 Number Systems",
      "id": "2",
      "children": [
        {
          "name": "Explain the concept of denary numbers and illustrate how place values work using the denary number 346.",
          "id": "2-1",
          "summary": "Denary numbers, also known as decimal numbers, are part of a base-10 number system that uses ten different symbols (0-9) to represent digits. In a denary number, the value represented by each digit depends on its position in the number, known as place value. For example, in the denary number 346: \n- The digit '3' is in the hundreds place (10^2) and represents 300 (3 x 100).\n- The digit '4' is in the tens place (10^1) and represents 40 (4 x 10).\n- The digit '6' is in the units place (10^0) and represents 6 (6 x 1).\nThus, the overall value of the number 346 is the sum of these products: 300 + 40 + 6 = 346. Place values increase by powers of 10 as you move from right to left in the number, starting from the least significant digit.",
          "children": []
        },
        {
          "name": "Explain the binary number system and its significance in computer systems, including how binary numbers are represented and the role of bytes.",
          "id": "2-2",
          "summary": "The binary number system is a base-2 numeral system that uses only two symbols: 0 and 1. Each binary digit is termed a 'bit.' The value of a binary number, like a denary number, is determined by its place values. For example, in the binary number 101110, the place values are represented as follows: $2^{5}=32$, $2^{4}=16$, $2^{3}=8$, $2^{2}=4$, $2^{1}=2$, and $2^{0}=1$. Each bit corresponds to a place value, and by adding up the products of each bit and its corresponding place value, the binary number 101110 equates to the denary number 46 (32 + 0 + 8 + 4 + 2 + 0 = 46). Understanding the binary number system is essential for comprehending computer systems because computers operate using components that recognize only two states: 'on' and 'off.' Consequently, all software running on hardware utilizes binary codes, which consist of bits and can represent values or commands. Binary codes typically consist of groups of eight bits, known as a byte.",
          "children": []
        },
        {
          "name": "Explain what hexadecimal numbers are and their significance in computing, including how they relate to binary numbers.",
          "id": "2-3",
          "summary": "Hexadecimal numbers are base-16 numbers represented by the symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, where A to F represent the denary values 10 to 15. The value of a hexadecimal number is determined by its place values; for example, in the hexadecimal number 2A6 (Table 1.03), the contributions of each digit based on their position are: 2 × 16^2 (256) + A (10) × 16^1 (16) + 6 × 16^0 (1), yielding an equivalent denary number of 678. Hexadecimal numbers are utilized because a nibble, which consists of four bits, can be represented by a single hexadecimal digit. Consequently, a byte (eight bits) can be expressed as two hexadecimal digits. Examples include the binary 00001010, which translates to hexadecimal 0A (denary 10), and 11111111 which translates to FF (denary 255), as shown in Table 1.04. Hexadecimal representations are often used in debugging, such as during a memory dump to show the contents of memory in hexadecimal format, and for defining character codes in binary. While octal numbers, which are base-8, may be referenced in some contexts, they are not necessary for understanding hexadecimal systems.",
          "children": []
        }
      ]
    },
    {
      "name": "Converting Between Binary And Denary Numbers",
      "id": "3",
      "children": [
        {
          "name": "Explain the method to convert a binary number to denary and demonstrate with the binary number 11001.",
          "id": "3-1",
          "summary": "To convert a binary number to denary, start at the most significant bit (the leftmost bit) and use the following method: \n1. Successively multiply the accumulated total by 2 and then add the next digit of the binary number.\n\nFor the binary number 11001: \n- Start with the first bit (1): 1 × 2 = 2 \n- Add the next bit (1): 2 + 1 = 3 \n- Multiply by 2: 3 × 2 = 6 \n- Add the next bit (0): 6 + 0 = 6 \n- Multiply by 2: 6 × 2 = 12 \n- Add the next bit (0): 12 + 0 = 12 \n- Multiply by 2: 12 × 2 = 24 \n- Add the last bit (1): 24 + 1 = 25\nThus, the binary number 11001 converts to the denary number 25.",
          "children": []
        }
      ]
    },
    {
      "name": "Worked Example 1 02",
      "id": "4",
      "children": [
        {
          "name": "What is the maximum denary value possible with seven bits and how does it compare to the maximum value of eight bits?",
          "id": "4-1",
          "summary": "The maximum denary value possible in seven bits is $2^{7}-1$, which equals 127. In comparison, eight bits can hold values up to $2^{8}-1$, which equals 255. Therefore, eight bits can represent a larger range of values than seven bits.",
          "children": []
        },
        {
          "name": "Convert each of the denary numbers 96, 215 and 374 into hexadecimal numbers.",
          "id": "4-2",
          "summary": {
            "96": "60",
            "215": "D7",
            "374": "176"
          },
          "children": []
        }
      ]
    },
    {
      "name": "Explain the different types of numbers within the denary system and give examples.",
      "id": "5",
      "summary": "There are several different types of numbers within the denary system. The main types include: 1. **Integer** - Examples include 3 or 47; it is a whole number used for counting. 2. **Signed integer** - Examples include -3 or 47; the positive number has an implied + sign. 3. **Fraction** - Examples include 2/3 or 52/17; this type is rarely used in computer science. 4. **A number with a whole number part and a fractional number part** - Examples include -37.85 or 2.83; the positive number has an implied + sign. 5. **A number expressed in exponential notation** - Examples include -3.6 × 10^8 or 4.2 × 10^{-9}; the value can be positive or negative and the exponent can be positive or negative.",
      "children": []
    },
    {
      "name": "1 03 Internal Coding Of Numbers",
      "id": "6",
      "children": [
        {
          "name": "Explain how integers are stored in computers and describe the process of converting a positive and a negative denary integer to its two's complement binary form.",
          "id": "6-1",
          "summary": "Computers store integer values in binary format, which may be simple integers or signed integers. Simple integers can be positive and are stored as binary numbers, requiring a decision on the number of bytes used. For two bytes (16 bits), the range of values is from 0 to 65535 (0 to 2^16 - 1). Signed integers allow identification of both positive and negative numbers by using one additional bit to represent the sign: 0 for positive (+) and 1 for negative (-). However, signed integers are typically represented in two's complement format due to disadvantages of sign and magnitude representation. In two's complement, the one's complement is the binary number obtained by subtracting each binary digit from 1 (swapping 0s for 1s and vice versa), and the two's complement is obtained by adding 1 to the one's complement. To quickly convert a binary number to its two's complement, start from the least significant bit, moving left and ignoring zeros until the first 1, then invert the remaining bits. To convert a positive denary integer to two's complement binary form, convert the denary number to binary, add a 0 at the front. For a negative denary integer, convert the absolute value to binary, add a 0 in front, then convert this binary value to its two's complement. The leading zero is ignored when converting a positive two's complement binary number back to denary. For negative values, there are two methods to convert from two's complement binary to denary, as illustrated in examples related to this topic.",
          "children": []
        },
        {
          "name": "Explain the methods for converting a negative number expressed in two's complement form to the corresponding denary number.",
          "id": "6-2",
          "summary": "There are two methods to convert a negative number expressed in two's complement form to its corresponding denary number. Considering the two's complement binary number 10110001:\n\n**Method 1:** Convert to the corresponding positive binary number then convert to denary before adding the minus sign.\n1. To convert 10110001 to its corresponding positive binary, you keep the least significant bit unchanged (the 1), and invert the remaining bits, resulting in 01001111.\n2. Ignoring the leading zero, convert the remaining binary 1001111 to denary, which equals 79.\n3. Add the minus sign to yield -79.\n\n**Method 2:** Sum the individual place values treating the most significant bit as a negative value.\n1. Break down the binary number:\n   - Place values: -2^7, 2^6, 2^5, 2^4, 2^3, 2^2, 2^1, 2^0\n   - Corresponding digits for 10110001: 1, 0, 1, 1, 0, 0, 0, 1\n   - Products: -128, 0, 32, 16, 0, 0, 0, 1\n2. Add the products from the individual digit: -128 + 0 + 32 + 16 + 0 + 0 + 0 + 1 = -79.\n\n**Points to Note About Two's Complement Representation:**\n- There is only one representation of zero.\n- Each successive higher value is formed by adding 1 to the binary code starting from the lowest negative value; rolling over to an all-zero code occurs when the maximum negative value is reached.\n- Adding a leading zero to an unsigned binary value converts it to two's complement representation of the corresponding positive number.\n- Two's complement conversions change the sign of a number, being self-complementary.\n- Leading zeros can be added to positive values without changing their value, while leading ones can be added to negative values without changing their value.",
          "children": []
        }
      ]
    },
    {
      "name": "Tip",
      "id": "7",
      "children": [
        {
          "name": "Convert the two's complement number 1011 to the denary equivalent. Then do the same for 111011 and convince yourself that you get the same value.",
          "id": "7-1",
          "summary": "To convert a two's complement number to denary, first determine if it is a positive or negative number by checking the leftmost bit (the sign bit). If the sign bit is 0, it is positive; if it is 1, it is negative. For 1011: 1 is the sign bit (1 = negative). To find the denary equivalent, first find the two's complement: invert the bits to get 0100 and add 1, resulting in 0101, which equals 5 in denary. Therefore, 1011 in two's complement is -5 in denary. For 111011: again, the sign bit is 1 (1 = negative). Invert the bits to get 000100 and add 1, resulting in 000101, which equals 5 in denary. Therefore, 111011 in two's complement is -5 in denary as well. Thus, both 1011 and 111011 in two's complement represent the decimal value of -5.",
          "children": []
        },
        {
          "name": "What is the two's complement of the binary value 1000? Are you surprised by this?",
          "id": "7-2",
          "summary": "To find the two's complement of the binary value 1000, follow these steps: First, invert the digits (change 0s to 1s and 1s to 0s), resulting in 0111. Then, add 1 to this inverted binary value. Adding 1 to 0111 gives us 1000. Thus, the two's complement of 1000 is 1000. It may be surprising because the two's complement of a binary number can often result in a different binary value, but in this case, the original number and its two's complement are identical.",
          "children": []
        },
        {
          "name": "Explain the process of binary addition and subtraction, including examples.",
          "id": "7-3",
          "summary": "Binary addition and subtraction involve starting at the least significant digit and proceeding to the left. The rules for binary addition are as follows: 0+0=0, 0+1=1, 1+0=1, 1+1=0 with a carry of 1, 1+1+0=0 with a carry of 1, and 1+1+1=1 with a carry of 1. For example, adding the binary equivalent of denary 14 (1110) to the binary equivalent of denary 11 (1011) results in:\n\n```\n  1 1 1 0  \n+ 1 0 1 1  \n---------  \n  1 1 0 0 1  \n``` \n\nThe steps followed from right to left are:\n- 0 + 1 = 1 (no carry)\n- 1 + 1 = 0 (carry 1)\n- 0 + 1 + carry 1 = 0 (carry 1)\n- 1 + 1 + carry 1 = 1 (carry 1)\n\nThe result is 11001, which is the binary equivalent of 25.\n\nBinary subtraction also starts from the least significant digit. The rules for binary subtraction are: 0-0=0, 0-1=1 after a borrow, 1-0=1, and 1-1=0. For instance, subtracting the binary equivalent of denary 11 (1011) from 14 (1110) gives:\n\n```\n  1 1 1 0  \n- 1 0 1 1  \n---------  \n  0 0 1 1  \n```\n\nThe steps are:\n- Borrow leads to subtraction of 1 from 10 (from 1) resulting in 1.\n- Another borrow makes it 10 again, so 1 - 0 = 1.\n- 0 - 0 = 0.\n- 1 - 1 = 0.\n\nThus, the answer is 11, which is the binary value for denary 3.\n\nIn computers, binary addition can lead to overflow if the result exceeds the bit limit, while two's complement form simplifies subtraction by converting the number being subtracted into its two's complement and adding.",
          "children": []
        }
      ]
    },
    {
      "name": "Task 1 04",
      "id": "8",
      "children": [
        {
          "name": "Explain the Binary Coded Decimal (BCD) representation and its applications. How is BCD arithmetic performed, particularly in the context of currency values, and what steps are taken to correct addition errors?",
          "id": "8-1",
          "summary": "Binary Coded Decimal (BCD) is a binary-encoded representation of integer values that uses a nibble (four bits) to represent each decimal digit. BCD is useful in applications where individual denary digits need to be stored or transmitted. The digits 0 through 9 are represented by the binary values 0000 to 1001, while the binary values from 1010 to 1111 do not have any meaning in this scheme. When converting a multi-digit denary number to BCD, each denary digit is stored as a separate 4-bit code. There are two options for storing BCD: 'one BCD digit per byte,' which leaves four bits unused, and 'packed BCD,' where two BCD digits are stored in one byte. For example, the denary number 8503 can be represented in BCD with one BCD digit per byte as: 00001000 (8), 00000101 (5), 00000000 (0), 00000011 (3) or with two BCD digits per byte as: 10000101 (85), 00000011 (03). Applications of BCD include displaying denary digits on calculators or digital displays and representing currency values accurately, as fixed-point decimal numbers. Storing currency values as BCD avoids inaccuracies that can occur with real numbers due to floating-point representation issues. In BCD arithmetic, such as with currency values, if two BCD values are added, an error can arise if the result exceeds a single decimal digit, leading to carry issues. For example, when adding 0.26 and 0.85 represented in packed BCD, the addition of the fractional parts may yield invalid BCD values (e.g., 10 or 11). To correct this, the processor must detect that the resulting value is invalid and apply a correction by adding 0110 (6 in decimal) whenever an impossible value is generated. The steps in the correction process involve identifying invalid BCD results, adding the correction value, and properly managing carries to ensure the result remains a valid BCD representation.",
          "children": []
        }
      ]
    },
    {
      "name": "1 04 Internal Coding Of Text",
      "id": "9",
      "children": [
        {
          "name": "Explain the ASCII coding scheme and provide examples of ASCII codes including their binary, hexadecimal equivalents, and character descriptions.",
          "id": "9-1",
          "summary": "ASCII (American Standard Code for Information Interchange) is a coding scheme that has been used for the longest time. The 7-bit version of the code, known as US ASCII, was standardized by ANSI (American National Standards Institute). ASCII codes are typically presented in a table format. The first column contains binary codes stored in one byte (with the most significant bit set to zero), while the second column shows the hexadecimal equivalent. A full 7-bit ASCII table has $2^{7}(128)$ different codes. Here are some examples: \n\n| Binary code | Hexadecimal equivalent | Character | Description |\n| :--: | :--: | :--: | :--: |\n| 00000000 | 00 | NUL | Null character |\n| 00000001 | 01 | SOH | Start of heading |\n| 00100000 | 20 |   | Space |\n| 00100001 | 21 | # | Number |\n| 00110000 | 30 | 0 | Zero |\n| 00110001 | 31 | 1 | One |\n| 01000001 | 41 | A | Uppercase A |\n| 01000010 | 42 | B | Uppercase B |\n| 01100001 | 61 | a | Lowercase a |\n| 01100010 | 62 | b | Lowercase b |",
          "children": []
        },
        {
          "name": "What are the key facts about the ASCII coding scheme?",
          "id": "9-2",
          "summary": "* A limited number of the codes represent non-printing or control characters; these were introduced to assist in data transmission or for data handling at a computer terminal.\n* The majority of the codes are for characters that would be found in an English text and which are available on a standard keyboard.\n* These include upper- and lower-case letters, punctuation marks, denary digits and arithmetic symbols.\n* The codes for numbers and for letters are in sequence so that, for example, if 1 is added to the code for seven, the code for eight is produced.\n* The codes for the upper-case letters differ from the codes for the corresponding lower-case letters only in the value of bit 5, which allows a simple conversion from upper to lower case or the reverse. (Don't forget that the least significant bit is bit 0.)\n* Note that this coding for numbers is exclusively for use in the context of stored, displayed or printed text. All of the other coding schemes for numbers are for internal use in a computer system and would not be used in a text.\n* Although a standard version of ASCII has been created, different versions of 7-bit ASCII are tailored to different software or different countries. Mostly, the coding for the printable characters has remained unchanged. A notable exception was the use in some countries of the code 00100001 to represent a currency symbol rather than #. However, because most of the control characters became of limited use, there were versions of ASCII that used these codes to produce small graphic icons. For example, the code 00000001 would show $\bigcirc$.\n* Extended ASCII is a code that uses all eight bits in a byte. The most used standardised version is often referred to as ISO Latin-1. The name Latin-1 reflects the fact that many of the new character definitions are for accented or otherwise modified alphabetic characters found in European languages, for example Ç or ü. As with the 7-bit code, there are many variations of the standard code.",
          "children": []
        }
      ]
    },
    {
      "name": "Question 1 02",
      "id": "10",
      "children": [
        {
          "name": "Explain the Unicode system and its benefits over ASCII coding.",
          "id": "10-1",
          "summary": "Unicode is a character encoding standard designed to represent any possible text in code form, including characters from all languages in the world. Unlike ASCII, which is limited to 128 characters, Unicode provides a much larger set of codes, allowing for greater character representation. The most widely used version of Unicode is UTF-8, which includes 1-byte, 2-byte, 3-byte, and 4-byte encodings. The inclusion of 8 in the name signifies that this standard accommodates codes defined by one byte, as well as additional byte formats. Notably, the 1-byte format duplicates the 7-bit ASCII characters, allowing for seamless compatibility. Furthermore, the structure of UTF-8 encoding ensures that bytes representing multiple characters can be distinguished through specific patterns in their most significant bits (for instance, continuation bytes begin with '10' while single bytes begin with '0'). Unicode defines character codes as 'code points', which are indicated in documentation as U+ followed by a 4-digit hexadecimal number. This system enables the representation of a vast range of characters, enhancing text encoding across diverse languages and symbols, beyond the limitations of ASCII.",
          "children": []
        }
      ]
    },
    {
      "name": "1 05 Images",
      "id": "11",
      "children": [
        {
          "name": "Describe how data is stored in a vector graphic file.",
          "id": "11-1",
          "summary": "A vector graphic file contains a drawing list, which includes a command for each object in the image. Each command has a list of attributes that define the properties of the object, including basic geometric data, such as the position of the center and radius for circular objects. Additional properties include the thickness and style of a line, the color of a line, and the color that fills the shape.",
          "children": []
        },
        {
          "name": "Construct a partial drawing list for the graphic shown in Figure 1.05.",
          "id": "11-2",
          "summary": "1. Origin: Bottom left corner of the box (0, 0)\n2. Object 1: Rectangle\n   - Coordinates: (0, 0), (Width, 0), (Width, Height), (0, Height)\n   - Description: Bottom-left corner (0,0) to top-right corner defined by Width and Height.\n3. Object 2: Circle\n   - Center Coordinates: (X_Center, Y_Center)\n   - Radius: R\n   - Description: Circle centered at (X_Center, Y_Center) with radius R.\n4. Object 3: Line\n   - Start Coordinates: (X_Start, Y_Start)\n   - End Coordinates: (X_End, Y_End)\n   - Description: Line drawn from start to end coordinates.\n\nNote: Ensure that all dimensions are calculated relative to the imaginary drawing canvas. All objects can be rescaled without distortion.",
          "children": []
        },
        {
          "name": "Explain the structure and creation of bitmap images, including concepts of pixels, colour depth, and file size calculations.",
          "id": "11-3",
          "summary": "Bitmap images are represented as a two-dimensional matrix of pixels, which are the smallest identifiable components of the image. Each pixel has a position in the matrix and has a specific colour. The colour representation scheme must be defined; for example, one bit can represent a pixel as either black or white, while four bits allow for greyscale. At least eight bits per pixel are necessary to represent a sufficient range of colours accurately. The number of bits per pixel is also referred to as 'colour depth.' A colour depth of 8 bits per pixel provides 256 different colours, while a bit depth of 8 bits per primary colour in the RGB colour scheme allows for a total of 16,777,216 different colours. Although the human eye cannot distinguish this many colours, it is necessary for images with gradually changing colour areas, such as in a picture of the sky. If a lower bit depth is used, images will exhibit bands of colour instead of a smooth transition.\n\nResolution defines the clarity of the image, represented as the product of the number of pixels per row times the number of rows. It's essential to differentiate between the image resolution stored in the bitmap file and the screen resolution of the monitor being used to display the image. A bitmap file does not specify the physical size of a pixel or the whole image, and scaling an image does not change the number of pixels; however, magnifying an image too much can lead to visible pixels.\n\nFile size is an important consideration, as a larger file requires more memory space and takes longer to display. Generally, a vector graphic uses less memory than a corresponding bitmap file. The size of a bitmap can be calculated based on its resolution and colour depth. For instance, if a bitmap graphic needs to fill a laptop screen with a resolution of 1366 by 768 and a colour depth of 24 bits, the number of bits needed would be computed as follows:\n\n\\[ 1366 \\times 768 \\times 24 = 25,178,112 \\text{ bits} \\]\n\nThis result must be converted to bytes or multiples of bytes:\n\n\\[ \\begin{aligned}\n25,178,112 \\text{ bits} & = \\frac{25,178,112}{8} = 3,146,464 \\text{ bytes} \\\\\n& = \\frac{3,146,464}{1024} = 3,073.5 \\text{ kibibytes} (3,073.5 \\mathrm{KiB})\\end{aligned} \\]\n\nIt's important to note that if the bit depth specifies eight bits for red, green, and blue, then the calculation for bits per pixel would be adjusted to 8 + 8 + 8.",
          "children": []
        }
      ]
    },
    {
      "name": "Calculate the minimum size of a bitmap file with a bit depth of 8, printed at 72 dpi, and dimensions of 5 inches by 3 inches. Explain the calculations involved.",
      "id": "12",
      "summary": "To calculate the minimum size of a bitmap file with a bit depth of 8, we first determine the number of pixels. The bitmap will be printed with 72 dpi (dots per inch). Thus, the number of pixels per row is calculated as: 5 inches * 72 dpi = 360 pixels. The number of pixels per column is calculated as: 3 inches * 72 dpi = 216 pixels. Therefore, the total number of pixels is: 360 pixels (rows) * 216 pixels (columns) = 77,760 pixels. Since the bit depth is 8 bits per RGB component, we have 24 bits needed for one pixel. To find the total number of bits, we multiply the total pixels by 24: 77,760 pixels * 24 bits/pixel = 1,866,240 bits. To convert bits into bytes, we divide by 8 (since there are 8 bits in a byte): 1,866,240 bits / 8 = 233,280 bytes. Finally, to convert bytes into kibibytes, we divide by 1024: 233,280 bytes / 1024 ≈ 227.8 KiB. It is also important to note that a bitmap file must include a file header, which contains information such as the colour depth and resolution, making the actual file size larger than just the pixel data.",
      "children": []
    },
    {
      "name": "Explain the process of converting analogue sound signals to digital sound and discuss the factors affecting sound quality.",
      "id": "13",
      "summary": "The process of converting analogue sound signals to digital sound involves several steps. First, the original analogue sound signal must be converted into binary code through a sound encoder, which includes two main components: a band-limiting filter and an analogue-to-digital converter (ADC). The band-limiting filter removes high-frequency components that the human ear cannot detect, which helps prevent coding problems. The ADC then converts the analogue data into digital data by sampling the amplitude of the sound wave at regular intervals. During this sampling process, the amplitude is approximated by the closest of the defined amplitudes. The accuracy of this approximation depends on two main decisions: the number of bits used to store amplitude values (sampling resolution) and the sampling rate, which is the number of samples taken per second. According to Nyquist's theorem, sampling must occur at a frequency at least twice the highest frequency present in the sound being sampled to avoid aliasing. The choice of sampling resolution affects the number of defined amplitude levels; for instance, using only three bits allows for eight levels, which may result in significant error if too few bits are used. In practice, 16 bits provide reasonable accuracy for most digitized sound. Additionally, an increase in either the sampling rate or sampling resolution will lead to a larger file size, which can be a concern for storage and transmission.",
      "children": []
    },
    {
      "name": "Explain the different types of compression techniques and provide examples.",
      "id": "14",
      "summary": "There are two categories of compression techniques: lossless compression and lossy compression. Lossless compression reduces file size without losing any information, meaning the original file can be perfectly recreated. One common method of lossless compression is run-length encoding, which is effective for bitmap files. For example, a sequence of bytes like 01100110 repeated can be represented as '00000100 01100110', indicating four repetitions of the byte. Another lossless method is Huffman coding, where the most frequently used characters are assigned shorter binary codes, ensuring no ambiguity during decompression. For instance, if a text uses eight different characters, they could be represented by unique binary codes without overlap. On the other hand, lossy compression reduces file size by removing some information, which can result in minor quality loss that is often imperceptible to the human ear or eye. An example of lossy compression for sound files is converting individual amplitude samples to amplitude differences and using lower resolution for storage. For bitmap images, a simple technique involves reducing the color depth, changing the pixel color codes to the closest match in a new scheme. In summary, lossless compression techniques like run-length encoding and Huffman coding preserve original data, while lossy techniques reduce data size by modifying or removing less critical information.",
      "children": []
    },
    {
      "name": "Extension Question 1 01",
      "id": "15",
      "children": [
        {
          "name": "Can you recall the different possibilities for what one byte might be coded to represent?",
          "id": "15-1",
          "summary": "One byte can represent various possibilities including but not limited to: a single character (such as letters, numbers, or symbols in ASCII or UTF-8), a small integer value (ranging from 0 to 255 in unsigned format), a color value in an image (such as 256 different shades of grey), or a part of a larger data structure in computing. Additionally, it can be used to represent different types of data such as instructions in machine code or various control codes. A byte consists of 8 bits, allowing it to represent 2^8 or 256 distinct values.",
          "children": []
        },
        {
          "name": "Describe the methods of coding for numerical values and text characters, and explain file formats for images and audio signals.",
          "id": "15-2",
          "summary": "Binary code or binary numbers can be represented as hexadecimal numbers. Signed integers are typically represented using a two's complement method. In binary addition, overflow can occur when the result exceeds the storage capacity. For single decimal digits, BCD (Binary-Coded Decimal) is a useful coding scheme. Text characters are encoded using standardised schemes such as ASCII and Unicode. Images can be stored in either vector graphic files or bitmap files. An Analog-to-Digital Converter (ADC) operates by sampling a continuous waveform. Furthermore, there are two types of data compression: lossless compression, which allows for the original file to be fully recovered by a decoder, and lossy compression, which results in some informational loss that cannot be reversed.",
          "children": []
        }
      ]
    },
    {
      "name": "A file contains binary coding. The following are two successive bytes in the file: 10010101 and 00110011 a One possibility for the information stored is that the two bytes together represent one unsigned integer binary number. i Calculate the denary number corresponding to this. ii Calculate the hexadecimal number corresponding to this.",
      "id": "16",
      "summary": "i To calculate the denary number, combine the two bytes: 10010101 00110011. This is equivalent to the binary number 1001010100110011. To convert this binary number to denary, calculate: 1*(2^15) + 0*(2^14) + 0*(2^13) + 1*(2^12) + 0*(2^11) + 1*(2^10) + 0*(2^9) + 1*(2^8) + 0*(2^7) + 0*(2^6) + 1*(2^5) + 1*(2^4) + 0*(2^3) + 0*(2^2) + 1*(2^1) + 1*(2^0) = 256 + 64 + 32 + 16 + 2 + 1 =  213 (denary number). ii To convert to hexadecimal, first group the binary number into 4-bit sections: 1001 0101 0011 0011. Then convert each section to hexadecimal: 1001 = 9, 0101 = 5, 0011 = 3, 0011 = 3. Therefore, the hexadecimal number is 9533.",
      "children": []
    }
  ]
};

export default data;