import { MindMapNode } from '../types/MindMapNode';

const data: MindMapNode = {
  "name": "BandName is a primary key for the Band table. Does this mean that as a foreign key in the Member table it must have unique values? Explain your reasoning.",
  "id": "root",
  "children": [
    {
      "name": "Explain the process of electrolysis and its applications in the extraction of metals.",
      "id": "1-1",
      "children": [],
      "summary": "Electrolysis is the process of using electrical energy to drive a non-spontaneous chemical reaction. In the extraction of metals, it is used to separate metal ions from their ores by passing an electric current through a molten or aqueous solution of the ore. The metal ions are reduced at the cathode, while anions are oxidized at the anode. Applications include the extraction of aluminum from bauxite and copper from copper(II) sulfate."
    },
    {
      "name": "Explain the limitations of using a file-based approach for data storage and retrieval.",
      "id": "1-2",
      "children": [
        {
          "name": "Databases",
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
          "name": "What are the limitations of using a file-based approach for data storage and retrieval?",
          "id": "2-3",
          "children": [],
          "summary": "File-based systems can lead to data redundancy, inconsistency, lack of data integrity, difficulty in data sharing, and limited data access capabilities."
        }
      ],
      "summary": "File-based systems can lead to data redundancy, inconsistency, and difficulty in data retrieval. They lack support for complex queries and relationships, making data management inefficient."
    },
    {
      "name": "Page 2",
      "id": "1-3",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are two data integrity problems identified in the text file storing band member information?",
      "id": "1-4",
      "children": [
        {
          "name": "Identify two data integrity problems present in the text file storing band member information.",
          "id": "2-4",
          "children": [],
          "summary": "1. Incorrect order of names for Vandana Graham (first name and family name swapped). 2. Duplication of data for Precious Olsen (multiple entries with the same name and different band associations)."
        },
        {
          "name": "Explain why a database system is more effective than a file-based system for managing sensitive information such as banking details and contact details.",
          "id": "2-5",
          "children": [],
          "summary": "A database system allows for controlled access to specific data, ensuring that only authorized personnel can view sensitive information, thereby enhancing data privacy and security compared to a file-based system where access cannot be restricted."
        }
      ],
      "summary": "1. Incorrect data entry (e.g., names in the wrong order for Vandana Graham). 2. Duplication of data (e.g., multiple entries for Precious Olsen with different band names)."
    },
    {
      "name": "Explain the concept of data redundancy and its implications in file-based systems.",
      "id": "1-5",
      "children": [],
      "summary": "Data redundancy refers to the unnecessary duplication of data across different files. In file-based systems, this can lead to data inconsistency due to errors in original entries or subsequent edits, compromising data integrity. The database approach aims to eliminate such redundancy."
    },
    {
      "name": "What is meant by 'data dependency' in the context of file-based systems, and how does it affect program development and data management?",
      "id": "1-6",
      "children": [],
      "summary": "Data dependency refers to the reliance of programs on the specific structure and organization of data files. It affects program development as any change in data structure necessitates rewriting both the data files and the associated programs. This complicates data management, especially when multiple departments have overlapping data needs or when new data requirements arise."
    },
    {
      "name": "Page 4",
      "id": "1-7",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What is a primary key in a relational database, and why is it important?",
      "id": "1-8",
      "children": [],
      "summary": "A primary key is an attribute or a combination of attributes that uniquely identifies each tuple in a table. It is important because it ensures that each record can be uniquely retrieved and prevents duplicate entries."
    },
    {
      "name": "Explain the role of primary and foreign keys in ensuring data integrity within a relational database.",
      "id": "1-9",
      "children": [],
      "summary": "Primary keys ensure each record is unique and prevent duplicate entries, while foreign keys establish relationships between tables and enforce referential integrity by preventing entries that do not correspond to existing records in the referenced table."
    },
    {
      "name": "Is the primary key 'BandName' in the Band table required to have unique values when used as a foreign key in the Member table? Explain your reasoning.",
      "id": "1-10",
      "children": [],
      "summary": "Yes, 'BandName' must have unique values in the Band table as it is a primary key. However, when used as a foreign key in the Member table, it does not need to be unique; multiple members can belong to the same band, allowing for non-unique 'BandName' entries in the Member table."
    },
    {
      "name": "Page 6",
      "id": "1-11",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the steps involved in creating an entity-relationship diagram for a database design?",
      "id": "1-12",
      "children": [
        {
          "name": "WORKED EXAMPLE 11.01",
          "id": "2-6",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "What is the cardinality of the relationship between Member and Band in the context of a band booking system?",
          "id": "2-7",
          "children": [],
          "summary": "The cardinality is many-to-one (M:1) because multiple members can belong to one band."
        }
      ],
      "summary": "1. Choose the entities by identifying the nouns relevant to the scenario. 2. Identify the relationships between the entities, ensuring not to define too many. 3. Decide on the cardinalities of the relationships (one-to-one, one-to-many, many-to-one, many-to-many)."
    },
    {
      "name": "Explain the relationship between Member and Band in the context of an E-R diagram.",
      "id": "1-13",
      "children": [],
      "summary": "The relationship between Member and Band is M:1, meaning each Member belongs to one Band, while each Band can have multiple Members."
    },
    {
      "name": "Page 8",
      "id": "1-14",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the significance of cardinality in the context of database relationships. Does the position of entities affect the cardinality?",
      "id": "1-15",
      "children": [
        {
          "name": "Explain the difference between a relation and a relationship in the context of chemistry.",
          "id": "2-8",
          "children": [],
          "summary": "A relation refers to a mathematical or functional connection between variables, while a relationship describes the broader interaction or correlation between substances or phenomena in chemistry."
        }
      ],
      "summary": "Cardinality defines the number of instances of one entity that can or must be associated with instances of another entity. The position of entities does not affect cardinality; it is determined by the nature of the relationship itself."
    },
    {
      "name": "Page 9",
      "id": "1-16",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Describe how to convert a conceptual E-R diagram for a cruise booking system into a logical E-R diagram, including the creation of a key table.",
      "id": "1-17",
      "children": [
        {
          "name": "Explain the significance of primary keys and foreign keys in a relational database, using the provided key table as an example.",
          "id": "2-9",
          "children": [],
          "summary": "Primary keys uniquely identify each record in a table, ensuring data integrity. Foreign keys create relationships between tables by referencing primary keys in other tables. In the key table, 'MemberID' in the Member table is a primary key, while 'BandName' in the Band table serves as a foreign key in the Member table, linking members to their respective bands. The 'Band-Booking' table uses a compound primary key of 'BandName' and 'BookingID' to establish a many-to-many relationship between bands and bookings."
        },
        {
          "name": "Explain the process of esterification and provide the general equation for the reaction between a carboxylic acid and an alcohol.",
          "id": "2-10",
          "children": [],
          "summary": "Esterification is the reaction between a carboxylic acid and an alcohol, resulting in the formation of an ester and water. The general equation is: RCOOH + R'OH ⇌ RCOOR' + H2O, where R and R' are hydrocarbon chains."
        }
      ],
      "summary": "To convert the conceptual E-R diagram into a logical E-R diagram, identify the entities such as Cruise, Passenger, and Port. For M:M relationships, create a link entity (e.g., Cruise-Port). Define primary keys for each entity (e.g., CruiseID, PassengerID, PortID) and foreign keys in the link entity referencing the primary keys of the related entities. The key table will summarize the primary and foreign keys for each table: \n| Table name | Primary key | Foreign key |\n| :-- | :-- | :-- |\n| Passenger | PassengerID |  |\n| Cruise | CruiseID |  |\n| Cruise-Port | CruiseID & PortID | CruiseID, PortID |\n| Port | PortID |  |"
    },
    {
      "name": "Page 10",
      "id": "1-18",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Explain the concept of normalisation in the context of database design and its importance using the example of the booking data sheet.",
      "id": "1-19",
      "children": [
        {
          "name": "What is the term 'normalisation' in the context of chemistry, and how does it apply to data analysis?",
          "id": "2-11",
          "children": [],
          "summary": "Normalisation in chemistry refers to the process of adjusting values measured on different scales to a common scale, often to allow for comparison or to reduce bias in data analysis."
        },
        {
          "name": "WORKED EXAMPLE 11.02",
          "id": "2-12",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Explain the significance of using a booking data sheet in a theatrical company.",
          "id": "2-13",
          "children": [],
          "summary": "A booking data sheet helps organize and manage ticket sales, track audience attendance, and streamline communication regarding performances, ensuring efficient operation of the theatrical company."
        },
        {
          "name": "Booking data sheet: 2016/023",
          "id": "2-14",
          "children": [],
          "summary": "\n\n"
        },
        {
          "name": "Explain why the original data sheet cannot be represented as a single relational table.",
          "id": "2-15",
          "children": [],
          "summary": "The original data sheet contains a repeating group (BandName, NumberOfMembers, Headlining), which violates the principle of atomicity in relational databases. Each row must have unique attributes without redundancy, necessitating the use of separate tuples for each band to avoid data duplication."
        }
      ],
      "summary": "Normalisation is a design technique used to organize data in a database to reduce redundancy and improve data integrity. In the booking data sheet example, normalisation is necessary to separate repeating groups (e.g., bands booked) into distinct tables, ensuring that each table has single rows and atomic attribute values. This prevents data redundancy, as seen with the repeated BookingID and venue data, and allows for more efficient data management."
    },
    {
      "name": "Explain the process of converting an unnormalised table to first normal form (1NF) and provide an example of how to identify primary keys and table names.",
      "id": "1-20",
      "children": [],
      "summary": "To convert an unnormalised table to 1NF, identify repeating groups and separate them into distinct tables. Each table should have a primary key that uniquely identifies each record. For example, if a table contains student information with multiple subjects, create one table for student details (e.g., StudentID as primary key) and another for subjects (e.g., SubjectID as primary key)."
    },
    {
      "name": "Explain the process of converting a database schema from First Normal Form (1NF) to Third Normal Form (3NF).",
      "id": "1-21",
      "children": [
        {
          "name": "What is the process for converting a database schema to second normal form (2NF)?",
          "id": "2-16",
          "children": [],
          "summary": "To convert to 2NF, examine each non-key attribute to determine if it is dependent on both parts of the compound key. Attributes dependent on only one part must be moved to a new table."
        },
        {
          "name": "Explain the significance of foreign key constraints in the Band-Booking database schema.",
          "id": "2-17",
          "children": [],
          "summary": "Foreign key constraints ensure referential integrity between the BandName and BookingID fields, preventing orphaned records and maintaining consistent relationships between the Band and Booking tables."
        },
        {
          "name": "What are the characteristics of a table in third normal form (3NF)?",
          "id": "2-18",
          "children": [],
          "summary": "In 3NF, each non-key attribute must be dependent on the primary key, the whole key, and nothing but the key, meaning there are no transitive dependencies."
        }
      ],
      "summary": "To convert from 1NF to 2NF, identify non-key attributes dependent on only part of a compound key and move them to a new table. Then, to convert from 2NF to 3NF, check for non-key attributes dependent on other non-key attributes and create new tables as necessary. Ensure that in 3NF, all non-key attributes depend only on the primary key."
    },
    {
      "name": "In Step 2 of Worked Example 11.02, why is the Headlining attribute not placed in the Band table?",
      "id": "1-22",
      "children": [],
      "summary": "The Headlining attribute is not placed in the Band table because it is not a characteristic of the band itself, but rather a property of the performance or event, which is more appropriately associated with a separate table."
    },
    {
      "name": "Normalise the data shown in Figure 11.11 by creating a suitable table structure that eliminates redundancy and ensures data integrity.",
      "id": "1-23",
      "children": [],
      "summary": "Create separate tables for Customers, Products, and Orders. Each table should have a primary key (e.g., CustomerID, ProductID, OrderID) and foreign keys to link them. Ensure that each piece of information is stored only once to avoid redundancy."
    },
    {
      "name": "Page 13",
      "id": "1-24",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "What are the three levels of the ANSI database architecture and their functions?",
      "id": "1-25",
      "children": [
        {
          "name": "Explain the three levels of the ANSI architecture in database management systems.",
          "id": "2-19",
          "children": [],
          "summary": "The three levels of the ANSI architecture are: 1) External level: individual user views with external schemas defining accessible parts of the database. 2) Conceptual level: a universal view of the database with a conceptual schema managed by the DBA. 3) Internal level: the physical storage of data on disk, known only to the DBMS, detailing the internal schema."
        },
        {
          "name": "Explain the difference between a simple database system and a central database for a large organization.",
          "id": "2-20",
          "children": [],
          "summary": "A simple database system is designed for individual use, typically managing personal data with minimal complexity, while a central database for a large organization is a comprehensive system that handles vast amounts of data, supports multiple users, and is managed by a Database Administrator (DBA) to ensure data integrity and security."
        }
      ],
      "summary": "The three levels are: 1) External level - provides individual user views and external schemas for data access; 2) Conceptual level - offers a universal view of the database with a conceptual schema managed by the DBA; 3) Internal level - deals with the physical storage of data on disk, controlled by the DBMS."
    },
    {
      "name": "Explain the role of a Database Management System (DBMS) in managing data.",
      "id": "1-26",
      "children": [],
      "summary": "A DBMS provides tools for creating tables, defining attributes and data types, developing user interfaces, processing queries for data extraction and manipulation, and generating formatted reports."
    },
    {
      "name": "Explain the role of the DBA in managing a database and list two key features of a DBMS that support data integrity.",
      "id": "1-27",
      "children": [
        {
          "name": "How many of the above concepts are recognisable in your experience of using a database?",
          "id": "2-21",
          "children": [],
          "summary": "The concepts of data organization, retrieval, and manipulation are all recognisable in database usage."
        }
      ],
      "summary": "The DBA is responsible for setting up user and programmer views and defining access rights. Two key features of a DBMS that support data integrity are transaction management, which prevents the database from entering an undefined state during incomplete transactions, and regular backups to ensure data can be restored."
    },
    {
      "name": "Page 15",
      "id": "1-28",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "Complete the DDL for creating the four tables for the BandBooking database using the specified data types.",
      "id": "1-29",
      "children": [
        {
          "name": "Write the DDL commands to create the four tables for the BandBooking database, using the specified data types.",
          "id": "2-22",
          "children": [],
          "summary": "CREATE TABLE Booking { BookingID varchar(8), Date date, BandName varchar(25), Headlining character }; CREATE TABLE Band { BandName varchar(25), NumberOfMembers integer, PRIMARY KEY (BandName) }; CREATE TABLE Venue { VenueName varchar(25), Capacity integer, PRIMARY KEY (VenueName) }; CREATE TABLE Performance { PerformanceID varchar(8), BookingID varchar(8), BandName varchar(25), VenueName varchar(25), Date date, FOREIGN KEY (BookingID) REFERENCES Booking(BookingID), FOREIGN KEY (BandName) REFERENCES Band(BandName), FOREIGN KEY (VenueName) REFERENCES Venue(VenueName) };"
        },
        {
          "name": "What are the three categories of use for Data Manipulation Language (DML)?",
          "id": "2-23",
          "children": [],
          "summary": "1. Data Retrieval: Selecting data from a database. 2. Data Insertion: Adding new records to a database. 3. Data Modification: Updating or deleting existing records in a database."
        }
      ],
      "summary": "CREATE TABLE Booking { BookingID varchar(8), Date date, BandName varchar(25), Headlining character }; CREATE TABLE Band { BandName varchar(25), NumberOfMembers integer PRIMARY KEY }; CREATE TABLE Venue { VenueName varchar(25), Capacity integer }; CREATE TABLE Performance { PerformanceID varchar(8), BookingID varchar(8), BandName varchar(25), VenueName varchar(25), Date date, FOREIGN KEY (BookingID) REFERENCES Booking(BookingID), FOREIGN KEY (BandName) REFERENCES Band(BandName), FOREIGN KEY (VenueName) REFERENCES Venue(VenueName) };"
    },
    {
      "name": "Explain the purpose of the SELECT command in SQL and provide an example query that retrieves all attributes from a table named 'Band'.",
      "id": "1-30",
      "children": [],
      "summary": "The SELECT command is used to retrieve data from a database. An example query that retrieves all attributes from the 'Band' table is: SELECT * FROM Band;"
    },
    {
      "name": "What SQL command would you use to find the average number of members in bands with more than two members?",
      "id": "1-31",
      "children": [],
      "summary": "SELECT AVG(NumberOfMembers) FROM Band WHERE NumberOfMembers > 2;"
    },
    {
      "name": "Explain the significance of foreign keys in relational databases, using the example of BandName in the context of Band and Band-Booking tables.",
      "id": "1-32",
      "children": [],
      "summary": "Foreign keys establish a relationship between two tables, ensuring referential integrity. In this case, BandName in Band-Booking must correspond to an existing entry in Band, preventing orphan records and maintaining data consistency."
    },
    {
      "name": "Explain the concept of normalisation in database design and outline the steps involved in achieving third normal form.",
      "id": "1-33",
      "children": [
        {
          "name": "Explain the process of normalisation in database design and its importance.",
          "id": "2-24",
          "children": [],
          "summary": "Normalisation is a method that organizes data into tables to reduce redundancy and improve data integrity. It involves converting a collection of attributes into first normal form (1NF), second normal form (2NF), and third normal form (3NF), ensuring that each table contains only related data and that dependencies are properly managed."
        }
      ],
      "summary": "Normalisation is a method of organizing data in a database to reduce redundancy and improve data integrity. The steps to achieve third normal form (3NF) include: 1) Convert the database to first normal form (1NF) by ensuring all attributes are atomic. 2) Convert to second normal form (2NF) by removing partial dependencies; all non-key attributes must depend on the entire primary key. 3) Achieve third normal form (3NF) by removing transitive dependencies; non-key attributes must depend only on the primary key."
    },
    {
      "name": "Page 19",
      "id": "1-34",
      "children": [],
      "summary": "\n\n"
    },
    {
      "name": "i Define the terms used to describe the components in a relational database table using examples from this table.",
      "id": "1-35",
      "children": [],
      "summary": "The components of a relational database table include: 1. **Table**: A collection of related data entries, e.g., the table containing student data. 2. **Row (Record)**: A single entry in the table, e.g., the row for 'Xiangfei' studying 'Computing'. 3. **Column (Field)**: A specific attribute of the data, e.g., 'Subject' or 'Level of Study'. 4. **Primary Key**: A unique identifier for each record, which is not explicitly shown but is necessary for relational integrity."
    },
    {
      "name": "a Identify an unnormalised list of attributes using the data shown in this form. Make sure that you distinguish between the repeating and non-repeating attributes.",
      "id": "1-36",
      "children": [],
      "summary": "Unnormalised list of attributes: StudentID, StudentName, StudentOtherName, DateOfBirth (non-repeating); SubjectName, SubjectTeacher (repeating)."
    },
    {
      "name": "i Describe how the one-to-many relationship between CLASS and CLASS-GROUP is implemented.",
      "id": "1-37",
      "children": [],
      "summary": "The relationship is implemented by having a foreign key in the CLASS-GROUP table that references the primary key (ClassID) in the CLASS table, allowing multiple CLASS-GROUP entries to be associated with a single CLASS."
    }
  ],
  "summary": "No, as a foreign key in the Member table, BandName does not need to have unique values. A foreign key references a primary key from another table, which means it can have duplicate values in the Member table, allowing multiple members to belong to the same band."
};

export default data;
