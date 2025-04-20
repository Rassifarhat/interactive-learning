// Define the Exercise type
export type Exercise = {
    id: string;
    question: string;
    modelAnswer: string;
    explanation: string;
    commonMistakeTip: string;
  };
  
  // Export an array of all exercises
  export const exercises: Exercise[] = [
    {
        id: "12.1",
        question: `For each of the following variables described in a program scenario, identify the most appropriate data type (e.g., Integer, Real, Boolean, Char, String, or other as applicable such as Date). Briefly justify why each data type is appropriate:
    a) age – Represents a person's age in whole years.
    b) temperature – Represents an outdoor temperature that could have fractional degrees.
    c) firstInitial – Represents the first letter of a person's last name.
    d) fullName – Represents a person's full name.
    e) isMember – Represents whether a user is a member of a library or not.
    f) appointmentDate – Represents a calendar date for an appointment (day, month, year).`,
        modelAnswer: `a) Integer – Age in whole years is best stored as an integer since it’s a whole number (no fractional part). An integer data type holds whole numbers (positive, negative, or zero) and is appropriate for counting years in age.
    b) Real – Temperature may have a fractional part (e.g. 23.5°C), so a real number data type is needed to represent decimal values. Real data types can store numbers with fractional parts, unlike integers which store only whole numbers.
    c) Char – A single letter (like an initial) is represented by a char data type, which holds exactly one character. Using a char is more precise than a string here because only one character is required.
    d) String – A full name is a sequence of characters (multiple letters including possibly spaces), which calls for a string data type. A string can store a collection of characters like a name (e.g. "Alice Smith") whereas a char could only store one letter.
    e) Boolean – A yes/no or true/false condition such as membership status is represented by a Boolean. A Boolean variable can only have the logical values TRUE or FALSE, which fits the idea of “is a member or not.”
    f) Date – An appointment date consisting of day, month, and year should use a date type if available. A Date type is designed to store dates (and sometimes time) in a single composite value. This ensures the components of the date (day, month, year) are kept together and can be handled with date operations (like comparing which date is earlier). If a Date type is not available in the pseudocode, the date could be stored as a formatted string or as separate integer fields for day, month, year, but most high-level languages and pseudocode libraries provide a Date data type for convenience.`,
        explanation: `Each answer correctly identifies the most fitting data type and provides a brief rationale. The explanations use precise terminology and demonstrate understanding of what each type represents in context (e.g., Real for fractional values, Char for a single character, Boolean for binary logic). Part (f) also shows understanding of composite types beyond primitives, adding depth to the answer.`,
        commonMistakeTip: `Avoid using general terms like “number” or “text.” Choose specific and accurate types like Integer, Real, or Date.`
      },
      {
        id: "12.2",
        question: `You are writing a program where the user inputs their age as text, and you need to use this age in a calculation.
    Explain what type casting (type conversion) means and why it is necessary in this scenario.
    Write a short pseudocode snippet to:
    - Prompt the user to input their age (as a string).
    - Convert the input string to an integer.
    - Add 1 to this integer (to calculate the age next year).
    - Output a message displaying the age next year.
    Clearly indicate the casting operation.`,
        modelAnswer: `DECLARE ageText : STRING
    DECLARE ageNum  : INTEGER
    
    OUTPUT "Please enter your age: "
    INPUT ageText               // e.g., user types "18" (string)
    
    ageNum ← INT(ageText)       // Convert the string "18" to the integer 18
    
    ageNum ← ageNum + 1         // Add 1 to the age
    OUTPUT "Next year, you will be " & STRING(ageNum) & " years old."`,
        explanation: `Type casting is the act of converting data from one type to another. The user’s age is input as a string. Arithmetic cannot be performed on text, so we cast it to an integer using INT(). After the calculation, we use STRING() to convert the result back to text for output. The pseudocode shows INT(ageText) and STRING(ageNum) as explicit casting functions. This process avoids type-mismatch errors and demonstrates good understanding of data conversion.`,
        commonMistakeTip: `Always cast before doing arithmetic with strings, and cast back to string before concatenating with other text.`
      },
      {
        id: "12.3",
        question: `Consider the following expressions in a pseudocode context and determine the result of each. Explain the difference between integer division and real division as illustrated by these examples:
    a) 7 DIV 2
    b) 7 / 2 (Assume default behavior is real division if operands are not both integers)
    c) REAL(7) / 2
    d) 7 MOD 2`,
        modelAnswer: `a) 7 DIV 2 – The result is 3. DIV performs integer division, which means it divides 7 by 2 and discards any fractional part.
    b) 7 / 2 – The result is 3.5 (as a Real number). Standard division returns a floating-point result if possible.
    c) REAL(7) / 2 – The result is 3.5 as well. We explicitly cast 7 to a real, so division is done in real mode.
    d) 7 MOD 2 – The result is 1. MOD gives the remainder after integer division (7 ÷ 2 = 3 remainder 1).`,
        explanation: `DIV gives the whole number part of division, truncating the decimal. The / operator gives a real number result when at least one operand is real or the context requires it. Using REAL() forces this explicitly. MOD returns the leftover value after integer division. This combination is useful when splitting quantities or looping in fixed-size groups. Understanding the difference between these operations is key in algorithm design.`,
        commonMistakeTip: `Don't confuse DIV with / — DIV discards the decimal, while / may return a fraction. Use MOD for remainders.`
      },
      {
        id: "12.4",
        question: `In an application for a library, we need to store information about books. Each book has the following details: Title, Author, Year of Publication, and IsHardcover (a true/false indicating if the book is hardcover).
    
    a) Define a record type called BookType to represent a book with these fields. Use pseudocode syntax for defining a record (user-defined composite data type).
    
    b) Declare a variable Book1 of type BookType and assign the following sample details to it: 
    Title = "The Time Machine", 
    Author = "H.G. Wells", 
    Year = 1895, 
    IsHardcover = FALSE. 
    
    Finally, show an example of how you would output the book’s title from this record.`,
        modelAnswer: `TYPE BookType
        Title       : STRING
        Author      : STRING
        Year        : INTEGER
        IsHardcover : BOOLEAN
    ENDTYPE
    
    DECLARE Book1 : BookType
    
    Book1.Title       ← "The Time Machine"
    Book1.Author      ← "H.G. Wells"
    Book1.Year        ← 1895
    Book1.IsHardcover ← FALSE
    
    OUTPUT "Book title: " & Book1.Title`,
        explanation: `The record type definition groups all book-related data in one structure using TYPE ... ENDTYPE. We then declare a variable Book1 of type BookType and assign values to each field using dot notation. This demonstrates how composite types encapsulate multiple fields of related data (as opposed to using separate variables or parallel arrays). The output uses Book1.Title to show how to retrieve a specific field from a record.`,
        commonMistakeTip: `Make sure each field is declared with an appropriate type inside TYPE ... ENDTYPE, and use dot notation like Book1.Title to access fields.`
      },
      {
        id: "12.5",
        question: `You need to store and process the scores of 5 students in a test. 
    - Declare a 1D array Scores that can hold 5 integer scores.
    - Write pseudocode to input 5 values from the user and store them in the Scores array.
    - Calculate the average score and output it.
    Use a loop for input and another for summing the scores. Show all indexing and assume 0-based indices.`,
        modelAnswer: `DECLARE Scores : ARRAY[0:4] OF INTEGER
    
    FOR i ← 0 TO 4
        OUTPUT "Enter score for student ", i, ": "
        INPUT Scores[i]
    NEXT i
    
    DECLARE total : INTEGER ← 0
    FOR i ← 0 TO 4
        total ← total + Scores[i]
    NEXT i
    
    DECLARE average : REAL
    average ← total / 5
    
    OUTPUT "Average score = ", average`,
        explanation: `This pseudocode first declares an array with indices 0 to 4, suitable for 5 values. A FOR loop is used to collect input values into Scores[i]. A second FOR loop adds all values to compute the total. Average is declared as REAL to prevent truncation in case of a non-integer average. Finally, the average is output.`,
        commonMistakeTip: `Ensure the loop runs exactly 5 times (0 to 4) and that the array is declared with the right bounds. Declare average as REAL to avoid integer division.`
      },
      {
        id: "12.6",
        question: `You have an array Names containing 10 names (strings) in no particular order. You want to check if a given name (stored in variable targetName) exists in this array and find its index if it does.
    
    Write pseudocode for a linear search algorithm that:
    - Iterates through the Names array
    - Compares each element with targetName
    - If a match is found, outputs "Found [name] at index [i]" and stops
    - If no match is found, outputs "Name not found"
    
    Use appropriate variables for indexing and a Boolean flag. Assume array indices 0–9.`,
        modelAnswer: `DECLARE Names : ARRAY[0:9] OF STRING
    DECLARE targetName : STRING
    DECLARE found : BOOLEAN ← FALSE
    DECLARE index : INTEGER ← 0
    
    WHILE index <= 9 AND found = FALSE
        IF Names[index] = targetName THEN
            found ← TRUE
        ELSE
            index ← index + 1
        ENDIF
    ENDWHILE
    
    IF found = TRUE THEN
        OUTPUT "Found ", targetName, " at index ", index
    ELSE
        OUTPUT "Name not found"
    ENDIF`,
        explanation: `This linear search algorithm checks each element of the array one by one using a WHILE loop. If a match is found, found is set to TRUE and the loop stops. If not, the index is incremented. After the loop, the value of found is checked to determine the output. The use of found avoids out-of-bounds errors and clearly signals whether a match occurred.`,
        commonMistakeTip: `Do not forget to increment the index inside the ELSE, and make sure the WHILE condition prevents array overrun.`
      },
      {
        id: "12.7",
        question: `Consider the following pseudocode, which operates on an integer array A of size 5. The array A is initially: [3, 8, 2, 5, 6]. Dry-run (manually execute) this code and show the values of the variables i and foundFlag after each iteration of the loop, as well as any output produced. Finally, state what the output is after the loop finishes.
    
    DECLARE A : ARRAY[0:4] OF INTEGER ← [3, 8, 2, 5, 6]
    DECLARE target : INTEGER ← 5
    DECLARE foundFlag : BOOLEAN ← FALSE
    DECLARE i : INTEGER ← 0
    
    WHILE i <= 4 AND foundFlag = FALSE
        IF A[i] = target THEN
            foundFlag ← TRUE
        ELSE
            i ← i + 1
        ENDIF
    ENDWHILE
    
    IF foundFlag = TRUE THEN
        OUTPUT "Target found at index ", i
    ELSE
        OUTPUT "Not found"
    ENDIF`,
        modelAnswer: `Trace table:
    
    Iteration | i (start) | A[i] | foundFlag (start) | Condition        | Action           | i (end) | foundFlag (end)
    ----------|-----------|------|------------------|------------------|------------------|---------|------------------
    1         | 0         | 3    | FALSE            | 3 = 5? FALSE     | i ← i + 1        | 1       | FALSE
    2         | 1         | 8    | FALSE            | 8 = 5? FALSE     | i ← i + 1        | 2       | FALSE
    3         | 2         | 2    | FALSE            | 2 = 5? FALSE     | i ← i + 1        | 3       | FALSE
    4         | 3         | 5    | FALSE            | 5 = 5? TRUE      | foundFlag ← TRUE | 3       | TRUE
    
    Output: Target found at index 3`,
        explanation: `Each iteration checks if the current element A[i] matches the target. If found, foundFlag is set TRUE and loop stops. If not, i is incremented. The loop stops either when the target is found or when i > 4. After exiting the loop, if foundFlag is TRUE, the output shows the index of the found value.`,
        commonMistakeTip: `Don't forget that i does not increment if the match is found. Avoid off-by-one errors in loop bounds.`
      },
      {
        id: "12.8",
        question: `Write pseudocode for a procedure that, given a 1D array of positive integers called Data (size N), finds the smallest and largest values in the array. Output both. Assume the array is already populated.`,
        modelAnswer: `PROCEDURE FindMinMax(Data : ARRAY[0:N-1] OF INTEGER, N : INTEGER)
        DECLARE minVal : INTEGER
        DECLARE maxVal : INTEGER
    
        minVal ← Data[0]
        maxVal ← Data[0]
    
        FOR i ← 1 TO N-1
            IF Data[i] < minVal THEN
                minVal ← Data[i]
            ENDIF
            IF Data[i] > maxVal THEN
                maxVal ← Data[i]
            ENDIF
        NEXT i
    
        OUTPUT "Minimum value = ", minVal
        OUTPUT "Maximum value = ", maxVal
    END PROCEDURE`,
        explanation: `By initializing minVal and maxVal to the first element, we ensure they start within valid range. As the loop progresses, we compare each Data[i] to update min or max accordingly. At the end, they hold the smallest and largest values.`,
        commonMistakeTip: `Avoid initializing min or max to arbitrary values like 0. Use the first element of the array.`
      },
      {
        id: "12.9",
        question: `You have the array X = [42, 15, 23, 8, 16]. Apply bubble sort to sort this array in ascending order. After each pass of the outer loop, write the state of the array. Also, provide the final sorted array.`,
        modelAnswer: `Initial array: [42, 15, 23, 8, 16]
    
    Pass 1: [15, 23, 8, 16, 42]
    Pass 2: [15, 8, 16, 23, 42]
    Pass 3: [8, 15, 16, 23, 42]
    Pass 4: [8, 15, 16, 23, 42] (no swaps)
    
    Final sorted array: [8, 15, 16, 23, 42]`,
        explanation: `Bubble sort compares and swaps adjacent elements if out of order. After each pass, the next largest item bubbles to its correct place. If a pass completes without swaps, the array is sorted and sorting can stop early.`,
        commonMistakeTip: `Track if swaps happen during a pass. If no swaps, the list is sorted early — useful for optimization.`
      },
      {
        id: "12.10",
        question: `The standard bubble sort algorithm sorts an array in ascending order. How would you modify the algorithm to sort in descending order (highest to lowest)? Describe the change in logic, and if needed, provide a brief pseudocode or code snippet illustrating the modified comparison. You do not need to rewrite the entire bubble sort, just highlight the difference between ascending and descending sort in the bubble sort context.`,
        modelAnswer: `To sort in descending order using bubble sort, the only change needed is the comparison condition.
    
    In ascending order:
      IF A[j] > A[j+1] THEN
        swap A[j] and A[j+1]
    
    In descending order:
      IF A[j] < A[j+1] THEN
        swap A[j] and A[j+1]
    
    This change causes larger values to move forward toward the beginning of the array.
    
    Example:
    Original array: [5, 2, 9, 1]
    Descending bubble sort result: [9, 5, 2, 1]`,
        explanation: `The key change from ascending to descending bubble sort is inverting the comparison: instead of swapping when the left is greater, we swap when the left is less. This ensures the largest values rise to the top of the array. All other aspects of the algorithm remain the same, including loop structure and optional optimization flags.`,
        commonMistakeTip: `Many students forget that only the comparison operator needs to change — the rest of the structure remains intact.`
      },
      {
        id: "12.11",
        question: `Write pseudocode for a program that asks the user to input a sentence (string), and then counts how many times the letter 'A' (or 'a') appears in that string. The program should output the count.`,
        modelAnswer: `DECLARE sentence : STRING
    DECLARE countA : INTEGER ← 0
    
    OUTPUT "Enter a sentence: "
    INPUT sentence
    
    sentence ← UPPERCASE(sentence)
    
    FOR i ← 0 TO LENGTH(sentence) - 1
      IF sentence[i] = 'A' THEN
        countA ← countA + 1
      ENDIF
    NEXT i
    
    OUTPUT "Number of 'A' letters in the sentence: ", countA`,
        explanation: `We convert the sentence to uppercase to standardize the comparison. Then we loop through each character using a FOR loop from 0 to LENGTH-1, incrementing the counter if the character is 'A'. This avoids needing to check both 'A' and 'a'.`,
        commonMistakeTip: `Ensure the string is processed case-insensitively, either by converting case or comparing both 'A' and 'a'.`
      },
      {
        id: "12.12",
        question: `You have a two-dimensional array Table of size 3x4 (3 rows and 4 columns), containing integer values. Write pseudocode to calculate the sum of each row in this 2D array and output the results for each row.`,
        modelAnswer: `DECLARE Table : ARRAY[0:2, 0:3] OF INTEGER
    DECLARE rowSum : INTEGER
    
    FOR r ← 0 TO 2
      rowSum ← 0
      FOR c ← 0 TO 3
        rowSum ← rowSum + Table[r, c]
      NEXT c
      OUTPUT "Sum of row ", r, " = ", rowSum
    NEXT r`,
        explanation: `We use a nested loop to iterate over rows and then columns. rowSum is reset to 0 for each row. Each element in the current row is added to rowSum, which is then output.`,
        commonMistakeTip: `Do not forget to reset rowSum to 0 for each new row. Also, make sure array indices match the declared dimensions.`
      },
      {
        id: "12.13",
        question: `A two-dimensional array Matrix is declared as ARRAY[1:4, 1:3] OF INTEGER in a pseudocode (using 1-based indexing for convenience). Answer the following questions:
    a. How many elements does this Matrix contain in total?
    b. What are the valid index ranges for the first dimension (rows) and second dimension (columns)?
    c. How would you refer to the element in the 3rd row and 2nd column in pseudocode notation?`,
        modelAnswer: `a. The array is declared as ARRAY[1:4, 1:3], which means it has 4 rows (indexed 1 through 4) and 3 columns (indexed 1 through 3). Therefore, the total number of elements is 4 × 3 = 12.
    
    b. Valid index ranges are:
    - For the first dimension (rows): 1 to 4 (inclusive)
    - For the second dimension (columns): 1 to 3 (inclusive)
    That means you can access Matrix[1,1] to Matrix[4,3]. Any index outside of these ranges would be invalid.
    
    c. The element in the 3rd row and 2nd column is referred to as Matrix[3, 2].
    Example: value ← Matrix[3, 2]`,
        explanation: `Each part of the question directly checks understanding of how two-dimensional arrays are structured and accessed. The answer shows that 4 × 3 = 12 elements exist in total, it clearly states both row and column index bounds, and properly uses notation Matrix[3, 2] to reference the element in the third row, second column. The explanation makes it clear that row index comes first, then column, and alternatives like Matrix[3][2] may be used in some pseudocode styles.`,
        commonMistakeTip: `Be careful not to reverse row and column indices. Always follow the convention: row first, then column.`
      },
      {
        id: "12.14",
        question: `A text file named "students.txt" contains a list of student names, one name per line. You need to read all the names from this file into an array Names. Write pseudocode to:
    - Open the file for reading.
    - Read each name from the file and store it into the next element of the Names array (assume the file has at most 100 names, and Names is sized accordingly).
    - Close the file.
    - Finally, output the total number of names read from the file.`,
        modelAnswer: `DECLARE Names : ARRAY[0:99] OF STRING
    DECLARE count : INTEGER ← 0
    
    OPENFILE "students.txt" FOR READ
    
    WHILE NOT EOF("students.txt")
        READFILE "students.txt", Names[count]
        count ← count + 1
    ENDWHILE
    
    CLOSEFILE "students.txt"
    
    OUTPUT "Number of names read: ", count`,
        explanation: `The program declares an array to hold up to 100 names. It opens the file, then uses a WHILE loop to read each line using READFILE and store it into the array Names. The counter keeps track of how many names are stored. Once the loop ends (EOF is true), the file is closed and the count is output. This method ensures safe file reading and accurate tracking of names.`,
        commonMistakeTip: `Don’t forget to check for EOF in the loop and to close the file. Also ensure the count is incremented only after a successful read.`
      },
      {
        id: "12.15",
        question: `Suppose you have an array HighScores[0:4] containing 5 integer high score values for a game. You want to save these scores to a text file named "scores.txt", one score per line. Write pseudocode to open the file for writing and output each score from the array to the file. Make sure to close the file afterwards.`,
        modelAnswer: `DECLARE HighScores : ARRAY[0:4] OF INTEGER ← [1200, 850, 990, 1330, 1075]
    OPENFILE "scores.txt" FOR WRITE
    
    FOR i ← 0 TO 4
        WRITEFILE "scores.txt", HighScores[i]
    NEXT i
    
    CLOSEFILE "scores.txt"`,
        explanation: `The pseudocode first initializes the array with example scores. It opens the file for writing, then iterates through each score in the array using a FOR loop and writes each score to the file. Each score appears on a new line. After the loop, the file is closed to ensure all data is saved properly. This method ensures that the data is correctly and cleanly saved to the file.`,
        commonMistakeTip: `Be sure to use WRITEFILE properly and not forget to close the file. Also verify the loop covers all array indices.`
      },
      {
        id: "12.16",
        question: `A company needs to store information about up to 50 employees. For each employee, the following details must be recorded: EmployeeID (integer), Name (string), DateOfBirth (date), and IsManager (Boolean, true if the employee is a manager). The company will frequently need to look up an employee’s details by their EmployeeID. Design an appropriate data structure to store this information in a program. Your answer should include:
    - A definition of a suitable record type for an employee.
    - A declaration of a structure to store up to 50 employees (e.g., an array of these records).
    - A brief explanation of why this structure is appropriate for the lookup requirement.`,
        modelAnswer: `TYPE EmployeeType
        EmployeeID : INTEGER
        Name       : STRING
        DateOfBirth: DATE
        IsManager  : BOOLEAN
    ENDTYPE
    
    DECLARE Employees : ARRAY[0:49] OF EmployeeType`,
        explanation: `We define a record type EmployeeType that includes all necessary fields about an employee. Then we declare an array of 50 elements to hold these employee records. Each element Employees[i] can store the full data of a single employee, using field access like Employees[i].Name or Employees[i].IsManager. This is a good structure for lookups because you can search for an EmployeeID through the array and return all related information once found. Since we are only dealing with 50 entries, even a linear search would be efficient.`,
        commonMistakeTip: `Avoid using parallel arrays for different fields. Keep all employee data together in one record per array element.`
      },
      {
        id: "12.17",
        question: `A file named "books.txt" contains information about books in a library. Each line of the file has one book’s data in the format: Title,Author,Year,IsFiction. Assume there are at most 200 books in the file. Design a way to read the contents of this file into an appropriate data structure in your program for further processing. Specifically:
    - Define a record type to represent a Book.
    - Show pseudocode that opens the file, reads each line, parses the line, stores each book as a record in an array, and then closes the file.
    - Output the Title and Author of the first book read and the total count of books.`,
        modelAnswer: `TYPE BookType
        Title     : STRING
        Author    : STRING
        Year      : INTEGER
        IsFiction : BOOLEAN
    ENDTYPE
    
    DECLARE Books : ARRAY[0:199] OF BookType
    DECLARE count : INTEGER ← 0
    DECLARE line  : STRING
    DECLARE titleField, authorField, yearField, fictionField : STRING
    
    OPENFILE "books.txt" FOR READ
    WHILE NOT EOF("books.txt")
        READFILE "books.txt", line
        titleField, authorField, yearField, fictionField ← SPLIT(line, ",")
        Books[count].Title     ← titleField
        Books[count].Author    ← authorField
        Books[count].Year      ← INT(yearField)
        Books[count].IsFiction ← (fictionField = "TRUE")
        count ← count + 1
    ENDWHILE
    CLOSEFILE "books.txt"
    
    IF count > 0 THEN
        OUTPUT "First book: ", Books[0].Title, " by ", Books[0].Author
    ENDIF
    OUTPUT "Total books read: ", count`,
        explanation: `Each book's details are read as a line and split into four parts using SPLIT(). Year is converted from a string to an integer using INT(), and IsFiction is evaluated as a Boolean by comparing the string to "TRUE". Each book record is stored in the Books array at index 'count', which is incremented for each line. After reading, the program outputs a simple check: the first book’s title and author and the total count.`,
        commonMistakeTip: `Remember to split the line into separate fields and convert the appropriate fields to the correct data types.`
      },
      {
        id: "12.18",

        question: `Briefly describe two key differences between storing data in an array (in memory during program execution) and storing data in a text file (on disk). Why might you choose one over the other in a given scenario?`,
        modelAnswer: `1. Volatility and Persistence: Data in an array is volatile — it is stored in memory (RAM) and is lost when the program ends. Data in a text file is persistent — it remains available even after the program terminates.
    
    2. Access Patterns and Structure: Arrays allow direct (indexed) access to data, enabling fast retrieval of elements. Files typically require sequential access, which means reading from the start to reach a certain point unless indexed separately. Arrays are fixed in size and suited to small, fast computations, while files are flexible and good for storing large datasets permanently.`,
        explanation: `Arrays are useful for temporary, fast-access data manipulation during program execution. Files are essential for saving data between sessions or for exchanging data between programs. Choosing between them depends on whether you need persistence or speed.`,
        commonMistakeTip: `Don't confuse the permanence of file storage with the fast access of arrays. They're optimized for different needs.`
      }
  ];
  