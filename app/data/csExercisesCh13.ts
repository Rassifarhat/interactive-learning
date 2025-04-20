// Define the Exercise type
export type Exercise = {
  id: string;
  question: string;
  modelAnswer: string;
  explanation: string;
  commonMistakeTip: string;
};

// Exercises for Chapter 13: Data Types and Structures
export const exercises: Exercise[] = [
  {
    id: "13.1",
    question: `For each of the following variables described in a program scenario, identify the most appropriate data type (e.g., Integer, Real, Boolean, Char, String, or other as applicable such as Date). Briefly justify why each data type is appropriate.
a) age – Represents a person's age in whole years.
b) temperature – Represents an outdoor temperature that could have fractional degrees.
c) firstInitial – Represents the first letter of a person's last name.
d) fullName – Represents a person's full name.
e) isMember – Represents whether a user is a member of a library or not.
f) appointmentDate – Represents a calendar date for an appointment (day, month, year).`,
modelAnswer: `a) Integer – Age in whole years is best stored as an integer since it’s a whole number (no fractional part). An integer data type holds whole numbers (positive, negative, or zero) and is appropriate for counting years in age.
b) Real (or Float/Double) – Temperature may have a fractional part (e.g. 23.5°C), so a real number data type is needed to represent decimal values. Real data types can store numbers with fractional parts, unlike integers which store only whole numbers.
c) Char (Character) – A single letter (like an initial) is represented by a char data type, which holds exactly one character. Using a char is more precise than a string here because only one character is required.
d) String – A full name is a sequence of characters (multiple letters including possibly spaces), which calls for a string data type. A string can store a collection of characters like a name (e.g. "Alice Smith") whereas a char could only store one letter.
e) Boolean – A yes/no or true/false condition such as membership status is represented by a Boolean. A Boolean variable can only have the logical values TRUE or FALSE​
file-ygqdjvytu4ycnn61bs7nmt
, which fits the idea of “is a member or not.”
f) Date – An appointment date consisting of day, month, and year should use a date type if available. A Date type is designed to store dates (and sometimes time) in a single composite value​
file-ygqdjvytu4ycnn61bs7nmt
. This ensures the components of the date (day, month, year) are kept together and can be handled with date operations (like comparing which date is earlier). If a Date type is not available in the pseudocode, the date could be stored as a formatted string or as separate integer fields for day, month, year, but most high-level languages and pseudocode libraries provide a Date data type for convenience.`,
explanation: `Each answer correctly identifies the most fitting data type and provides a brief rationale. In an exam, typically one mark is given for the correct data type and another for a valid justification. Notice the use of precise terminology (e.g. “integer” rather than just “number,” “Boolean” for true/false). The answers also consider what each data type means in context (e.g. using Real for temperature because of fractional values). This clarity and appropriate choice of types demonstrate understanding of primitive data types and would earn full marks. Additionally, part (f) acknowledges a specialized Date type as a composite data type for holding a date, which shows deeper insight beyond basic primitives.`,
commonMistakeTip: `Use precise terminology (e.g., Integer vs Number) and choose composite types (Date) when grouping related fields.`

  },
  {
    id: "13.2",
    question: `You are writing a program where the user inputs their age as text, and you need to use this age in a calculation.
Explain what type casting (type conversion) means and why it is necessary in this scenario.
Write a short pseudocode snippet to:
Prompt the user to input their age (as a string).
Convert the input string to an integer.
Add 1 to this integer (to calculate the age next year).
Output a message displaying the age next year.
In your pseudocode, clearly indicate the casting operation. For example, use a function or syntax like INT() or similar to convert a string to an integer.`,
    modelAnswer: `DECLARE ageText : STRING
DECLARE ageNum  : INTEGER

OUTPUT "Please enter your age: "
INPUT ageText               // e.g., user types "18" (string)

ageNum ← INT(ageText)       // Convert the string "18" to the integer 18

ageNum ← ageNum + 1         // Add 1 to the age
OUTPUT "Next year, you will be " & STRING(ageNum) & " years old."`,
    explanation: `Type casting is the act of converting data from one type to another. In our scenario, the user’s age is initially input as text (a string). We cannot perform arithmetic (like adding 1) on a string because it’s treated as text, not a number. Therefore, we cast the string to an integer so that numeric operations become possible. This conversion is necessary to interpret the characters "1" "8" (for example) as the numeric value 18, rather than text. In summary, casting changes the data type at runtime – here from String to Integer – enabling calculations that wouldn’t be allowed on the original type. The pseudocode demonstrates this by using INT(ageText) and STRING(ageNum) to perform explicit conversions.`,
    commonMistakeTip: `Always explicitly cast before arithmetic to avoid type-mismatch errors, and cast back to string for concatenation.`
  },
  {
    id: "13.3",
    question: `Consider the following expressions in a pseudocode context and determine the result of each. Explain the difference between integer division and real division as illustrated by these examples:
a) 7 DIV 2
b) 7 / 2 (Assume default behavior is real division if operands are not both integers)
c) REAL(7) / 2
d) 7 MOD 2

(Note: DIV is an integer division operator that returns the whole number quotient, and MOD returns the remainder of integer division.)`,
    modelAnswer: `a) 7 DIV 2 – The result is 3. DIV performs integer division, which means it divides 7 by 2 and discards any fractional part. 7 divided by 2 is 3 remainder 1, and DIV gives the integer quotient 3.
b) 7 / 2 – The result is 3.5 (as a Real number). Using the standard / for division in pseudocode typically yields a real (floating-point) result if a fractional result is possible.
c) REAL(7) / 2 – The result is 3.5 as well. Here, we explicitly cast 7 to a real number before division, so the result is in real (floating-point) mode.
d) 7 MOD 2 – The result is 1. MOD gives the remainder after integer division. 7 divided by 2 leaves remainder 1.`,
    explanation: `The key difference shown by (a)/(b)/(c) is between integer division and real division. DIV gives only the whole part of the quotient (truncating towards zero). In contrast, using the normal division operator / with real numbers yields a fractional result. Casting using REAL() forces real division. MOD complements DIV by providing the remainder, which is useful for splitting or distributing values.`,
    commonMistakeTip: `Do not confuse DIV with /; DIV truncates decimals, while / may return a real. Use REAL() if you need fractional output.`
  },
  {
    id: "13.4",
    question: `In an application for a library, we need to store information about books. Each book has the following details: Title, Author, Year of Publication, and IsHardcover (a true/false indicating if the book is hardcover).
a. Define a record type called BookType to represent a book with these fields. Use pseudocode syntax for defining a record (user-defined composite data type).
b. After defining the record type, write pseudocode to declare a variable Book1 of type BookType and assign the following sample details to it: Title = "The Time Machine", Author = "H.G. Wells", Year = 1895, IsHardcover = FALSE. Finally, show an example of how you would output the book’s title from this record.`,
    modelAnswer: `// a. Record type definition:
TYPE BookType
    Title       : STRING
    Author      : STRING
    Year        : INTEGER
    IsHardcover : BOOLEAN
ENDTYPE

// b. Declare a variable and assign values:
DECLARE Book1 : BookType   // declaring a variable Book1 of the record type

// Assign values to each field of the Book1 record:
Book1.Title       ← "The Time Machine"
Book1.Author      ← "H.G. Wells"
Book1.Year        ← 1895
Book1.IsHardcover ← FALSE

// Output the Title field of Book1:
OUTPUT "Book title: " & Book1.Title`,
    explanation: `This solution correctly demonstrates the syntax for defining and using a record in pseudocode. The record type definition is clearly presented with each field and its data type on separate lines, which is the expected format. In an exam, one mark might be allocated for the correct TYPE ... ENDTYPE structure and additional marks for each correctly defined field with an appropriate type. The answer explicitly notes that a record is a user-defined type and a composite type – using these terms shows understanding of how records differ from primitive types. The usage example (Book1) shows how to declare a record variable and assign/access fields using dot notation, which would likely earn full marks for that part. The output example confirms the record was populated correctly. The commentary within the answer also reinforces that records group different types of data logically (e.g., all details of a book), which is exactly why one would use a record structure for clarity and organization.`,
    commonMistakeTip: `Use dot notation to access fields, and don’t forget ENDTYPE after defining the record structure.`
  },
  {
    id: "13.5",
    question: `You need to store and process the scores of 5 students in a test. The tasks are:
- Declare a 1-dimensional array named Scores that can hold 5 integer scores.
- Write pseudocode to input 5 values from the user and store them in the Scores array.
- After storing the scores, calculate the average score and output it.

Make sure to use a loop for input, and another loop (or the same loop) for calculating the sum/average. Clearly show the array indexing in your pseudocode. Assume array indices start at 0 (as in many pseudocode conventions).`,
    modelAnswer: `// Array declaration:
DECLARE Scores : ARRAY[0:4] OF INTEGER

// Input 5 scores
FOR i ← 0 TO 4
    OUTPUT "Enter score for student ", i, ": "
    INPUT Scores[i]
NEXT i

// Compute total
DECLARE total : INTEGER ← 0
FOR i ← 0 TO 4
    total ← total + Scores[i]
NEXT i

// Compute average
DECLARE average : REAL
average ← total / 5

// Output the average
OUTPUT "Average score = ", average`,
    explanation: `This exercise’s solution demonstrates fundamental array operations: declaration, iteration for input, and iteration for processing (summing). The pseudocode uses a count-controlled loop (FOR i ← 0 TO 4) which is idiomatic and clear for iterating through array indices. Each step is commented, which is good practice for clarity. In an exam context, one mark may be given for correct array declaration (with proper bounds and type), one for using a loop for input, one for summing, and one for calculating/outputting the average. The answer explicitly shows the index on each array access (Scores[i]), which is important for clarity – forgetting to use the index or using the wrong bounds are common mistakes. Also, note that average is a real to avoid integer division; this attention to data type in calculation shows careful reasoning (and prevents truncating the average if it’s not a whole number). The structure is easy to follow, which aligns with expected coding style and would score highly for both correctness and clarity.`,
    commonMistakeTip: `Use correct array bounds (0 to 4), index explicitly with [i], and declare average as REAL to avoid integer division truncation.`
  },
  {
    id: "13.6",
    question: `You have an array Names containing 10 names (strings) in no particular order. You want to check if a given name (stored in a variable targetName) exists in this array, and find its index if it does. Develop pseudocode for a linear search algorithm that:
- Iterates through the Names array one element at a time.
- Compares each element with targetName.
- If a match is found, outputs a message "Found [name] at index [i]" and stops the search.
- If no match is found after checking all elements, outputs "Name not found".

Use appropriate variables for indexing and a Boolean flag to indicate when the name is found. Assume array indices 0–9.`,
    modelAnswer: `DECLARE Names : ARRAY[0:9] OF STRING    // assume this is already populated with 10 names
DECLARE targetName : STRING            // the name we are searching for
DECLARE found : BOOLEAN ← FALSE
DECLARE index : INTEGER ← 0

// Linear search loop
WHILE index <= 9 AND found = FALSE
    IF Names[index] = targetName THEN
        found ← TRUE                  // mark that we found the name
    ELSE 
        index ← index + 1             // move to the next index
    ENDIF
ENDWHILE

// After the loop, check if found
IF found = TRUE THEN
    OUTPUT "Found ", targetName, " at index ", index
ELSE
    OUTPUT "Name not found"
ENDIF`,
    explanation: `We use index to traverse the array from 0 to 9. The loop continues while index is within bounds and we haven’t found the name yet (the condition AND found = FALSE). Inside the loop, for each position, we compare Names[index] with targetName. If they match, we set found to TRUE. If not, we increment the index to check the next element. The loop ends either when found becomes TRUE (meaning the name was found and we can stop early) or when index exceeds 9 (meaning we checked all elements). After the loop, we use an IF to decide which message to output. If found, index will be at the position where the name was found (because we stopped incrementing when found occurred); if not found, index will be 10 and found remains FALSE. We output accordingly. This algorithm is a straightforward O(n) linear search. For example, if Names = ["Ali","Ben","Chloe",...,"Zara"] and targetName = "Chloe", the loop will find "Chloe" at index 2 and output “Found Chloe at index 2”. If targetName = "John", the loop will check all elements and output “Name not found”.`,
    commonMistakeTip: `Avoid going out of bounds. Use AND found = FALSE to prevent unnecessary checks and exit the loop early once a match is found.`
  },
  {
    id: "13.7",
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
ENDIF

Fill in a trace table for each iteration of the WHILE loop showing i and foundFlag, and then give the final output.`,
    modelAnswer: `Iteration	i (start of loop)	A[i]	foundFlag (start)	Condition Check	Action Taken	i (end)	foundFlag (end)
1	0	A[0] = 3	FALSE	3 = 5? (false)	i ← i + 1 (not found)	1	FALSE
2	1	A[1] = 8	FALSE	8 = 5? (false)	i ← i + 1	2	FALSE
3	2	A[2] = 2	FALSE	2 = 5? (false)	i ← i + 1	3	FALSE
4	3	A[3] = 5	FALSE	5 = 5? (true)	foundFlag ← TRUE (found!)	3	TRUE

Final output:
Target found at index 3`,
    explanation: `Iteration 1: i=0, foundFlag=FALSE. We check A[0] which is 3 against target 5. Not a match, so foundFlag stays FALSE, and we increment i to 1.
Iteration 2: i=1, foundFlag=FALSE. Check A[1] = 8 vs 5. Not a match, still FALSE, increment i to 2.
Iteration 3: i=2, foundFlag=FALSE. Check A[2] = 2 vs 5. Not a match, increment i to 3.
Iteration 4: i=3, foundFlag=FALSE. Check A[3] = 5 vs 5. This time it’s a match, so we set foundFlag = TRUE. We do not increment i in the ELSE because the IF condition was true. After setting foundFlag true, the loop condition will fail next time because foundFlag = TRUE. The loop exits immediately. After the loop, foundFlag is TRUE and i = 3. So the final output is “Target found at index 3”.`,
    commonMistakeTip: `Remember: if the IF condition is true, the ELSE block is skipped. Also ensure the loop stops once foundFlag = TRUE to avoid overstepping the array.`
  },
  {
    id: "13.8",
    question: `Write pseudocode for a procedure that, given a 1D array of positive integers called Data (size N), finds the smallest value in the array and the largest value in the array. The pseudocode should output both the minimum and maximum values found. Assume the array is already populated with N values. Explain how your algorithm ensures that the true min and max are found by the end. (Hint: You will need to initialize your min and max variables appropriately before scanning the array.)`,
    modelAnswer: `PROCEDURE FindMinMax(Data : ARRAY[0:N-1] OF INTEGER, N : INTEGER)
    DECLARE minVal : INTEGER
    DECLARE maxVal : INTEGER

    // Initialize minVal and maxVal to the first element of the array
    minVal ← Data[0]
    maxVal ← Data[0]

    // Loop through the array from index 1 to N-1
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
    explanation: `We start by setting both minVal and maxVal to Data[0], the first element. This ensures that after initialization, minVal and maxVal are at least actual values from the array. (All numbers in the array will be >= minVal and <= maxVal initially because both are that first element.) We then loop from the second element (index 1) to the last element. For each Data[i], we compare it to the current minVal. If Data[i] is smaller, it becomes the new minVal. Similarly, we compare Data[i] to maxVal, and if it’s larger, we update maxVal. By the time the loop finishes, we have examined every element and updated the trackers accordingly. This algorithm runs in linear time O(N). It ensures the true min and max because it never misses any element.`,
    commonMistakeTip: `Do not initialize min or max to arbitrary values like 0. Always use the first array element to avoid incorrect extremes.`
  },
  {
    id: "13.9",
    question: `You have the following unsorted array of five integers: X = [42, 15, 23, 8, 16]. You apply the standard bubble sort algorithm to sort this array in ascending order. Trace the execution of bubble sort by writing the contents of the array X after each pass of the outer loop. Also, give the final sorted array. (Assume a basic bubble sort that makes passes through the array, swapping adjacent elements if they are in the wrong order. You can stop when no swaps occur in a pass, or assume it always makes N-1 passes for simplicity.)`,
    modelAnswer: `Initial array: [42, 15, 23, 8, 16]

Pass 1:
Compare X[0]=42 and X[1]=15 → swap → [15, 42, 23, 8, 16]
Compare X[1]=42 and X[2]=23 → swap → [15, 23, 42, 8, 16]
Compare X[2]=42 and X[3]=8 → swap → [15, 23, 8, 42, 16]
Compare X[3]=42 and X[4]=16 → swap → [15, 23, 8, 16, 42]

Pass 2:
Compare X[0]=15 and X[1]=23 → no swap
Compare X[1]=23 and X[2]=8 → swap → [15, 8, 23, 16, 42]
Compare X[2]=23 and X[3]=16 → swap → [15, 8, 16, 23, 42]
Compare X[3]=23 and X[4]=42 → no swap

Pass 3:
Compare X[0]=15 and X[1]=8 → swap → [8, 15, 16, 23, 42]
Compare X[1]=15 and X[2]=16 → no swap
Compare X[2]=16 and X[3]=23 → no swap
Compare X[3]=23 and X[4]=42 → no swap

Pass 4:
Compare X[0]=8 and X[1]=15 → no swap
Compare X[1]=15 and X[2]=16 → no swap
Compare X[2]=16 and X[3]=23 → no swap
Compare X[3]=23 and X[4]=42 → no swap

Final sorted array: [8, 15, 16, 23, 42]`,
    explanation: `Each pass moves the next largest element to its correct position, like bubbles rising to the top. Pass 1 places 42 at the end. Pass 2 moves 23 to its place. Pass 3 moves 16 and so on. By Pass 4, no swaps are needed – the array is already sorted. Bubble sort continues to compare and swap adjacent pairs, and the array becomes increasingly sorted from the end backward. This trace includes the state after each full pass, fulfilling what is asked in a typical exam setting.`,
    commonMistakeTip: `Be sure to trace after full passes, not after each individual swap. Stop only when a pass makes no swaps (optional optimization).`
  },
  {
    id: "13.10",
    question: `The standard bubble sort algorithm sorts an array in ascending order. How would you modify the algorithm to sort in descending order (highest to lowest)? Describe the change in logic, and if needed, provide a brief pseudocode or code snippet illustrating the modified comparison. You do not need to rewrite the entire bubble sort, just highlight the difference between ascending and descending sort in the bubble sort context.`,
    modelAnswer: `// Ascending comparison (default):
FOR j ← 0 TO N-2
    IF A[j] > A[j+1] THEN
        // swap A[j] and A[j+1]
    ENDIF
NEXT j

// Descending comparison (modified):
FOR j ← 0 TO N-2
    IF A[j] < A[j+1] THEN
        // swap A[j] and A[j+1]
    ENDIF
NEXT j`,
    explanation: `To sort in descending order, reverse the comparison in the swap condition. Instead of swapping when A[j] > A[j+1], swap when A[j] < A[j+1]. This causes larger elements to move leftward toward the front of the array, effectively sorting from highest to lowest. All other parts of the algorithm remain the same. For example, [5, 2, 9, 1] would become [9, 5, 2, 1].`,
    commonMistakeTip: `Only change the comparison operator. Don't unnecessarily rewrite the full algorithm structure.`
  },
  {
    id: "13.11",
    question: `Write pseudocode for a program that asks the user to input a sentence (string), and then counts how many times the letter 'A' (or 'a') appears in that string. The program should output the count. Consider that the input might contain both uppercase and lowercase letters, and that 'A' and 'a' should both be counted.`,
    modelAnswer: `DECLARE sentence : STRING
DECLARE countA : INTEGER ← 0

OUTPUT "Enter a sentence: "
INPUT sentence

sentence ← UPPERCASE(sentence)   // normalize case to simplify comparison

FOR i ← 0 TO LENGTH(sentence) - 1
    IF sentence[i] = 'A' THEN
        countA ← countA + 1
    ENDIF
NEXT i

OUTPUT "Number of 'A' letters in the sentence: ", countA`,
    explanation: `We convert the input to uppercase so we only check for 'A'. Alternatively, we could check both 'A' and 'a' in the condition. The loop iterates through each character using LENGTH(sentence), ensuring all characters are checked. The counter increments when a match is found. The final output shows the total number of 'A' or 'a' letters.`,
    commonMistakeTip: `Don't forget to convert case or check both 'A' and 'a'. Ensure the loop correctly covers all character indices from 0 to LENGTH-1.`
  },
  {
    id: "13.12",
    question: `You have a two-dimensional array Table of size 3x4 (3 rows and 4 columns), containing integer values. Write pseudocode to calculate the sum of each row in this 2D array and output the results for each row. Use 0-based indexing for rows and columns (i.e., rows 0-2 and columns 0-3).`,
    modelAnswer: `DECLARE Table : ARRAY[0:2, 0:3] OF INTEGER
DECLARE rowSum : INTEGER

FOR r ← 0 TO 2
    rowSum ← 0
    FOR c ← 0 TO 3
        rowSum ← rowSum + Table[r, c]
    NEXT c
    OUTPUT "Sum of row ", r, " = ", rowSum
NEXT r`,
    explanation: `The outer loop iterates over each row (0 to 2). For each row, rowSum is initialized to 0. The inner loop (0 to 3) adds each element in the row to rowSum. After processing one full row, the sum is output. This pattern is repeated for all three rows. The code accesses elements using Table[row, column] with 0-based indexing.`,
    commonMistakeTip: `Always reset rowSum to 0 at the start of each row. Forgetting this results in incorrect totals across rows.`
  },
  {
    id: "13.13",
    question: `A two-dimensional array Matrix is declared as ARRAY[1:4, 1:3] OF INTEGER using 1-based indexing. 
a. How many elements does this Matrix contain in total? 
b. What are the valid index ranges for the rows and columns? 
c. How would you refer to the element in the 3rd row and 2nd column in pseudocode?`,
    modelAnswer: `a. 4 rows × 3 columns = 12 elements

b. Valid index ranges:
Rows: 1 to 4
Columns: 1 to 3

c. Matrix[3, 2] refers to the element in row 3, column 2`,
    explanation: `The matrix has 4 × 3 = 12 total elements. Index ranges follow the declaration: rows go from 1 to 4, columns from 1 to 3. Matrix[3, 2] accesses the element in the 3rd row and 2nd column, using standard row-major order. This notation aligns with common pseudocode conventions.`,
    commonMistakeTip: `Do not confuse the order of indices—row always comes before column: Matrix[row, column].`
  },
  {
    id: "13.14",
    question: `A text file named "students.txt" contains a list of student names, one name per line. Write pseudocode to:
- Open the file for reading
- Read each name into an array Names (maximum 100 entries)
- Close the file
- Output the total number of names read.
Use standard pseudocode operations like OPENFILE, READFILE, and EOF().`,
    modelAnswer: `DECLARE Names : ARRAY[0:99] OF STRING
DECLARE count : INTEGER ← 0

OPENFILE "students.txt" FOR READ

WHILE NOT EOF("students.txt")
    READFILE "students.txt", Names[count]
    count ← count + 1
ENDWHILE

CLOSEFILE "students.txt"

OUTPUT "Number of names read: ", count`,
    explanation: `The file is opened for reading and read line-by-line using a WHILE loop until EOF. Each name is stored in the Names array at index 'count', which is then incremented. When the loop ends, the file is closed and the number of names read is output. The program assumes the file contains at most 100 names.`,
    commonMistakeTip: `Don't forget to close the file. Ensure you don't exceed the array's maximum index (0 to 99).`
  },
  {
    id: "13.15",
    question: `You have an array HighScores[0:4] containing 5 integer values. Write pseudocode to save these values to a text file "scores.txt", one value per line. Use WRITEFILE to write and remember to close the file.`,
    modelAnswer: `DECLARE HighScores : ARRAY[0:4] OF INTEGER ← [1200, 850, 990, 1330, 1075]

OPENFILE "scores.txt" FOR WRITE

FOR i ← 0 TO 4
    WRITEFILE "scores.txt", HighScores[i]
NEXT i

CLOSEFILE "scores.txt"`,
    explanation: `The file is opened in write mode, which overwrites existing content or creates a new file. The loop writes each element of HighScores to the file using WRITEFILE, one score per line. After writing, the file is closed to ensure all data is saved.`,
    commonMistakeTip: `Make sure to open the file in WRITE mode and close it after writing to avoid data loss or corruption.`
  },
  {
    id: "13.16",
    question: `Design data structure for up to 50 employees: record EmployeeType and array Employees[0:49]. Explain lookup by EmployeeID.`,
    modelAnswer: `TYPE EmployeeType
    EmployeeID  : INTEGER
    Name        : STRING
    DateOfBirth : DATE
    IsManager   : BOOLEAN
ENDTYPE
DECLARE Employees : ARRAY[0:49] OF EmployeeType`,
    explanation: `Array of records groups each employee's data; lookup by linear search on EmployeeID.`,
    commonMistakeTip: `Ensure record fields match requirements and use meaningful names.`
  },
  {
    id: "13.17",
    question: `Read "books.txt" with lines Title,Author,Year,IsFiction into Books[0:199] array of BookType records. Output first title+author and count.`,
    modelAnswer: `TYPE BookType
    Title     : STRING
    Author    : STRING
    Year      : INTEGER
    IsFiction : BOOLEAN
ENDTYPE
DECLARE Books : ARRAY[0:199] OF BookType
count ← 0
OPENFILE "books.txt" FOR READ
WHILE NOT EOF("books.txt")
    READFILE "books.txt", line
    titleField,authorField,yearField,fictionField ← SPLIT(line, ",")
    Books[count].Title     ← titleField
    Books[count].Author    ← authorField
    Books[count].Year      ← INT(yearField)
    Books[count].IsFiction ← (fictionField = "TRUE")
    count ← count + 1
ENDWHILE
CLOSEFILE "books.txt"
IF count>0 THEN OUTPUT "First book: " & Books[0].Title & " by " & Books[0].Author ENDIF
OUTPUT "Total books read: " & count`,
    explanation: `Uses SPLIT to parse CSV, converts types, and stores in record array.`,
    commonMistakeTip: `Handle type conversion and ensure SPLIT returns correct number of fields.`
  },
  {
    id: "13.18",
    question: `Briefly describe two key differences between storing data in an array (in memory during program execution) and storing data in a text file (on disk). Why might you choose one over the other in a given scenario?`,
    modelAnswer: `1. **Volatility vs. Persistence**: Data in an array is stored in RAM and is lost when the program ends (volatile). File data is stored on disk and remains after program termination (persistent). Use a file when you need to save data for future use.

2. **Access and Structure**: Arrays support fast indexed access (e.g., accessing the 50th item directly). Files are usually read sequentially, meaning you may have to read from the beginning to find a specific line. Arrays are ideal for fast computation, while files are better for long-term storage or large datasets.`,
    explanation: `Arrays are useful for temporary, fast-access computations where data is needed only during execution. Files are preferred when data must be saved beyond the program’s run time or when the dataset is too large to fit into memory. Programs often use both: arrays for processing and files for saving/loading data.`,
    commonMistakeTip: `Don’t assume file data is accessible instantly like arrays—it usually requires parsing and sequential access.`
  },
  {
    id: "13.19",
    question: `You have an array of 1000 integers that is sorted in ascending order. You need to search for a particular value. Compare linear search vs. binary search in terms of:
- How each algorithm works
- Efficiency (comparisons in worst case)
- Which is more appropriate for this case and why.`,
    modelAnswer: `**Linear Search**: Checks each element from start to end until the target is found or the array ends. Worst case: up to 1000 comparisons. Works on unsorted arrays.

**Binary Search**: Works on sorted arrays. Repeatedly compares the middle element to the target and halves the search space. Worst case: ~log₂(1000) ≈ 10 comparisons. Much faster than linear search.

**Best Choice**: Binary search is more appropriate here because the array is sorted and large. It significantly reduces the number of comparisons compared to linear search.`,
    explanation: `Linear search is simple but inefficient for large sorted arrays. Binary search leverages the sorted order for faster results. With 1000 elements, binary search only needs ~10 comparisons, while linear search may need up to 1000. This efficiency difference becomes even more critical as the array size increases.`,
    commonMistakeTip: `Binary search only works on sorted arrays. Always check if your data meets this requirement before using it.`
  }
];