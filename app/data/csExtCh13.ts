import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "Complete the following variable identifier table: | Variable | Example value | Data type | | :-- | :-- | :-- | | ColourCode | \"034AB45\" |  | | ProductionDate | 2018/03/31 |  | | Weight | 67.45 |  | | NumberInStock | 98 |  | | SizeCode | 'X' |  | | Completed | FALSE |  |",
  "id": "root",
  "children": [
    {
      "name": "Page 1",
      "id": "1-1",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the key features of a stack and provide an example of a situation where it would be the most suitable data structure to use.",
      "id": "1-2",
      "children": [
        {
          "name": "Data types and structures",
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
          "name": "Explain the purpose of a record structure in programming and provide an example of how it can be defined in pseudocode.",
          "id": "2-3",
          "children": [],
          "summary": "A record structure is used to hold a set of related data of different data types under one identifier, allowing for organized data management. Example pseudocode: RECORD Student { STRING name; INTEGER age; REAL grade; }."
        }
      ],
      "summary": "A stack is a Last In First Out (LIFO) data structure where the last element added is the first to be removed. Key features include push (adding an element), pop (removing the top element), and peek (viewing the top element without removing it). A suitable situation for using a stack is in function call management in programming, where the most recent function call needs to be completed before returning to previous calls."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the primitive data types used in programming, and provide a brief description of each?",
      "id": "1-4",
      "children": [
        {
          "name": "Define the term 'primitive data type' and give two examples of primitive data types used in programming.",
          "id": "2-4",
          "children": [],
          "summary": "A primitive data type is a basic data type that is built into a programming language. Examples include INTEGER (for whole numbers) and REAL (for numbers with decimal points)."
        },
        {
          "name": "What is the difference between the string '12' and the number 12?",
          "id": "2-5",
          "children": [],
          "summary": "The string '12' is a sequence of characters representing text, while the number 12 is a numerical value that can be used in mathematical operations."
        }
      ],
      "summary": "Primitive data types include INTEGER (whole numbers), REAL (numbers with decimal points), CHAR (single characters), BOOLEAN (logical values TRUE or FALSE), and STRING (sequences of characters)."
    },
    {
      "name": "Page 3",
      "id": "1-5",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Write the declaration of a record type to store the details of a book: Title, Year of publication, Price, ISBN. Write the statements required to assign the values \"Computer Science\", 2019, £44.95, \"9781108733755\" to the fields respectively.",
      "id": "1-6",
      "children": [],
      "summary": "TYPE BookType\nTitle : STRING\nYearOfPublication : INTEGER\nPrice : REAL\nISBN : STRING\nENDTYPE\nDECLARE Book : BookType\nBook.Title $\text{=} \"Computer Science\"\nBook.YearOfPublication $\text{=} 2019\nBook.Price $\text{=} 44.95\nBook.ISBN $\text{=} \"9781108733755\""
    },
    {
      "name": "Page 4",
      "id": "1-7",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Define an array and explain the difference between a one-dimensional array and a two-dimensional array.",
      "id": "1-8",
      "children": [
        {
          "name": "Explain the importance of declaring arrays before use in pseudocode.",
          "id": "2-6",
          "children": [],
          "summary": "Declaring arrays before use is important because it defines the identifier, data type, and bounds, ensuring memory allocation and preventing runtime errors."
        }
      ],
      "summary": "An array is an ordered set of data items, usually of the same type, grouped together using a single identifier. A one-dimensional array (list) is a single row of elements, while a two-dimensional array (matrix) consists of rows and columns, allowing for the storage of data in a grid format."
    },
    {
      "name": "Page 5",
      "id": "1-9",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the purpose of using a 1D array in programming, and how would you declare an array to store 7 integers in pseudocode?",
      "id": "1-10",
      "children": [
        {
          "name": "What is the pseudocode to set the 10th element of an array named Scores to 85?",
          "id": "2-7",
          "children": [],
          "summary": "Scores[10] = 85"
        },
        {
          "name": "WORKED EXAMPLE 13.01",
          "id": "2-8",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Explain how a 1D array can be used to store multiple numbers and provide an example with the numbers 25, 34, 98, 7, 41, 19, and 5.",
          "id": "2-9",
          "children": [],
          "summary": "A 1D array allows for the storage of multiple numbers in a single data structure, using an identifier and indices to access each element. For example, if we create an array MyList, we can store the numbers as follows: MyList[0] = 25, MyList[1] = 34, MyList[2] = 98, MyList[3] = 7, MyList[4] = 41, MyList[5] = 19, MyList[6] = 5."
        }
      ],
      "summary": "A 1D array is used to store multiple values in a single variable, allowing for efficient data management. To declare an array to store 7 integers in pseudocode, you would write: DECLARE MyList : ARRAY[0:6] OF INTEGER."
    },
    {
      "name": "Define two arrays: one for friends' names and one for their ages, including at least three entries.",
      "id": "1-11",
      "children": [],
      "summary": "Names array: ['Matt', 'Fred', 'Anna', 'Xenios']; Ages array: [15, 16, 14, 17]."
    },
    {
      "name": "Explain the process of a linear search in a 1D array and how it determines if a value is present.",
      "id": "1-12",
      "children": [],
      "summary": "A linear search starts at the first element of the array and checks each element in order until it finds the search value or reaches the end of the array. It uses a boolean variable 'Found' to indicate if the value has been located, and an index variable to track the current position in the array."
    },
    {
      "name": "Design an algorithm to search for a friend's name in an array and output their age if found. Assume you have two arrays: one for names and one for corresponding ages.",
      "id": "1-13",
      "children": [],
      "summary": "1. Initialize Found as FALSE.\n2. Set Index to 0.\n3. Set MaxIndex to the length of the names array.\n4. REPEAT\n   a. If names[Index] equals the search name, set Found to TRUE and output 'Age: ' + ages[Index].\n   b. Increment Index by 1.\n5. UNTIL Found is TRUE OR Index >= MaxIndex.\n6. IF Found is FALSE THEN output 'Name not found'."
    },
    {
      "name": "Describe the process of sorting an unordered list of values using the method outlined in the text. What is the outcome after the first pass?",
      "id": "1-14",
      "children": [
        {
          "name": "Describe the process of sorting an unordered list using the method outlined in the text. What is the significance of each pass through the array?",
          "id": "2-10",
          "children": [],
          "summary": "The method involves comparing adjacent values and swapping them if the first is larger than the second. Each pass through the array places the largest unsorted value in its correct position at the end, progressively sorting the list."
        }
      ],
      "summary": "The method involves comparing adjacent values and swapping them if the first is larger than the second. After the first pass, the largest value is positioned at the end of the array, while the other values may not be in the correct order."
    },
    {
      "name": "Explain how the bubble sort algorithm works and describe its time complexity.",
      "id": "1-15",
      "children": [],
      "summary": "The bubble sort algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until no swaps are needed, indicating that the list is sorted. The time complexity of bubble sort is O(n^2) in the average and worst cases, where n is the number of elements in the list."
    },
    {
      "name": "Explain how the improved bubble sort algorithm determines when to stop sorting the array.",
      "id": "1-16",
      "children": [],
      "summary": "The algorithm uses a boolean variable NoMoreSwaps, initialized to TRUE at the start of each pass. If any swaps occur during the pass, it is set to FALSE. After each pass, if NoMoreSwaps remains TRUE, the algorithm stops, indicating the array is sorted."
    },
    {
      "name": "Explain what happens to the time complexity of a sorting algorithm if the input array is already sorted. Provide an example of a sorting algorithm that behaves differently in this case.",
      "id": "1-17",
      "children": [],
      "summary": "If the input array is already sorted, the time complexity of some sorting algorithms, like bubble sort or insertion sort, can improve to O(n) because they can detect that no swaps are needed. For example, insertion sort will only make a single pass through the array, confirming that it is sorted."
    },
    {
      "name": "Describe how to sort the following array in descending order: [5, 3, 8, 1, 2].",
      "id": "1-18",
      "children": [],
      "summary": "To sort the array in descending order, compare each pair of adjacent elements and swap them if the first element is smaller than the second. Repeat this process until no swaps are needed. The sorted array will be [8, 5, 3, 2, 1]."
    },
    {
      "name": "Page 11",
      "id": "1-19",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is the pseudocode to declare a 2D array for a game board with 6 rows and 7 columns?",
      "id": "1-20",
      "children": [
        {
          "name": "Explain what is meant by an index pair in the context of accessing elements in a two-dimensional array.",
          "id": "2-11",
          "children": [],
          "summary": "An index pair refers to two indices used to specify the position of an element within a two-dimensional array, where the first index represents the row and the second index represents the column."
        },
        {
          "name": "Explain the purpose of nested loops when working with 2D arrays in programming.",
          "id": "2-12",
          "children": [],
          "summary": "Nested loops are used to iterate through each row and each column of a 2D array, allowing access to and manipulation of each individual element."
        },
        {
          "name": "Describe the purpose of the algorithm provided in the pseudocode for the two-dimensional array ThisTable.",
          "id": "2-13",
          "children": [],
          "summary": "The algorithm initializes all elements of the two-dimensional array ThisTable to zero."
        }
      ],
      "summary": "Board : ARRAY[1:6,1:7] OF INTEGER"
    },
    {
      "name": "Explain the purpose of nested loops in the context of outputting a 2D array.",
      "id": "1-21",
      "children": [],
      "summary": "Nested loops allow for iterating through each element of the 2D array, enabling the output of all values in a single row on the same line, followed by a new line for the next row."
    },
    {
      "name": "Declare a 2D array to store the board data for Noughts and Crosses.",
      "id": "1-22",
      "children": [
        {
          "name": "WORKED EXAMPLE 13.05",
          "id": "2-14",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Describe the steps required to implement a Connect 4 game program that allows players to take turns and checks for a winner.",
          "id": "2-15",
          "children": [],
          "summary": "1. Initialize a 2D array to represent the game board (6 rows x 7 columns). 2. Set up a loop to alternate turns between players 'O' and 'X'. 3. Prompt the current player to select a column to drop their token. 4. Check if the selected column is not full; if it is, prompt for a different column. 5. Place the token in the lowest available row of the selected column. 6. After each turn, check for a winner by scanning the board for four consecutive tokens horizontally or vertically. 7. If a winner is found, announce the winner and end the game. 8. If the board is full and no winner, declare a draw."
        }
      ],
      "summary": "String[][] board = new String[3][3];"
    },
    {
      "name": "What is the purpose of the 'OutputBoard' procedure in the Connect 4 game pseudocode?",
      "id": "1-23",
      "children": [],
      "summary": "The 'OutputBoard' procedure displays the current contents of the game board to the players."
    },
    {
      "name": "Explain the purpose of the `FindFreeRow` function in the context of the game setup.",
      "id": "1-24",
      "children": [],
      "summary": "The `FindFreeRow` function determines the next available row in the chosen column of the game board where a player's token can be placed, ensuring that tokens are stacked correctly from the bottom up."
    }
  ],
  "summary": "| ColourCode | STRING | | ProductionDate | DATE | | Weight | REAL | | NumberInStock | INTEGER | | SizeCode | CHAR | | Completed | BOOLEAN |"
};

export default data;
