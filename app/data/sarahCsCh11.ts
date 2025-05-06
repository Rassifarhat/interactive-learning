import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-11",
  "id": "root",
  "children": [
    {
      "name": "Chapter 11",
      "id": "1",
      "children": [
        {
          "name": "What are the key components of a database management system (DBMS)?",
          "id": "1-1",
          "summary": "The key components of a database management system (DBMS) include: 1. Database Engine: The core service for accessing and processing the data. 2. Database Schema: The structure that defines the organization of data, including tables, fields, and relationships. 3. Query Processor: A component that interprets and executes database queries and commands. 4. Data Dictionary: A repository that stores metadata about the database's structure, relationships, and constraints. 5. User Interface: Tools and applications that allow users to interact with the database, including graphical user interfaces (GUIs) and command-line interfaces. 6. Transaction Management: Ensures that database transactions are processed reliably and ensures data integrity. 7. Backup and Recovery: Mechanisms to secure the data against loss or corruption, enabling restoration to a stable state when necessary.",
          "children": []
        },
        {
          "name": "What are the learning objectives for the IGCSE curriculum?",
          "id": "1-2",
          "summary": "The learning objectives for the IGCSE curriculum are designed to provide students with a clear understanding of the knowledge and skills expected from them. They typically include objectives related to mastering subject content, developing critical thinking skills, applying knowledge to real-world situations, and demonstrating effective communication skills. The objectives also emphasize the importance of independent learning and encourage students to take responsibility for their own educational progress.",
          "children": []
        },
        {
          "name": "Show understanding of the limitations of using a file-based approach for the storage and retrieval of data.",
          "id": "1-3",
          "summary": "File-based systems can lead to data redundancy and inconsistency, as multiple copies of the same data may exist in various files. They lack efficient data management features like querying, and searching through data can be time-consuming. Furthermore, file-based systems do not easily enforce data integrity and do not provide concurrent access controls, which increases the risk of data corruption when multiple users access files simultaneously. They also struggle with complex relationships between data, which may complicate the data retrieval process.",
          "children": []
        }
      ]
    },
    {
      "name": "11 01 Limitations Of A File Based Approach",
      "id": "2",
      "children": [
        {
          "name": "Discuss the data integrity problems that can occur in a file-based system using the example of a theatrical agency making bookings for bands.",
          "id": "2-1",
          "summary": "In a file-based system, data integrity problems can arise due to several factors. In the example of the theatrical agency, various data integrity issues can be highlighted:\n\n1. **Incorrect Data Entry**: The data for Vandana Graham was entered with her names in the wrong order. This kind of mistake can go uncorrected if the original incorrect entry is not deleted, leading to confusion.\n\n2. **Missing Information**: Dylan Stoddart's entry lacks a band name, which exemplifies failure in validating the completeness of data entries. Proper validation techniques could have flagged this error during data entry.\n\n3. **Data Duplication**: There are multiple entries for Precious Olsen under different band names (ComputerKidz and ITWizz). Duplication can lead to inconsistency and complications in retrieving accurate information.\n\n4. **Inconsistent Data**: Different spellings or formats for the same data can emerge. For instance, the entries for Vandana Graham and Graham Vandana create inconsistency in how data is represented, which can affect sorting and searching functionalities.\n\n5. **Irrelevant or Non-existent Data**: There's a possibility that a band name might be entered even if that band doesn't exist, leading to questions about the validity of data stored in the system.\n\n6. **Lack of Built-in Control**: The absence of validation and control mechanisms when entering data increases the risk of the above problems occurring. Unlike a database system that offers various integrity constraints, a flat file system relies heavily on correct user input without checks, making it prone to errors.\n\nIn conclusion, the file-based approach presents several opportunities for data integrity issues, particularly in cases of manual entry, which leads to inaccuracies and inconsistencies in the stored data. Transitioning to a database system could mitigate these issues by enforcing data validation and maintaining integrity.",
          "children": []
        },
        {
          "name": "What are the data privacy issues related to using a single file for different departments, and how do databases address these issues?",
          "id": "2-2",
          "summary": "The data privacy issue with using a single file is that there is no control of access to specific parts of the file. This means, for example, that staff in the recruitment section could access banking details of band members, leading to a lack of data privacy. In contrast, a database system can properly handle data privacy by restricting access to sensitive information based on user roles or department needs. To mitigate the privacy problem in the case described, the agency decided to store data in different files for different departments. However, this approach leads to data duplication, known as data redundancy, across the files. Data redundancy, while recognizing that data is still useful, indicates that once data is stored in one file, there should be no need to store it again in another file. This redundancy can lead to data inconsistency, arising from errors in the original entry or from subsequent editing. The primary aim of the database approach is to eliminate data redundancy and improve data integrity.",
          "children": []
        }
      ]
    },
    {
      "name": "Discuss the problems associated with data dependency in file-based systems, as described in the context provided.",
      "id": "3",
      "summary": "Data dependency in file-based systems presents several issues. Firstly, programmers must have detailed knowledge of how data is organized within files, leading to data dependency. For example, if a system requires a specific piece of data, such as a band name located at a particular position in a file, the programmer must ensure the program accesses it correctly. This close coupling of programs and data structures means that any change in data organization necessitates rewriting both the data files and the associated programs, which can be time-consuming and error-prone. In addition, the lack of a plan for file sharing between departments can lead to redundancy, since different departments might store identical data in separate files without a centralized system to manage it. Furthermore, if there is a need to alter the data structure, like adding new fields to accommodate changes in the music industry (e.g., session musicians), the existing files and programs will require significant modifications. In contrast, a database system allows for the integration of additional data without disrupting existing applications, as only new programs would need to be developed to utilize the extra information. Lastly, when file structures are rigidly defined to suit specific applications, they may not accommodate future needs, complicating tasks such as data extraction for analytics and making it a complex and time-consuming process to derive insights from historical data.",
      "children": []
    },
    {
      "name": "Explain the structure and key features of a relational database, including concepts such as tables, attributes, primary keys, foreign keys, and data integrity.",
      "id": "4",
      "summary": "In the relational database model, data is stored in relations, which are special types of tables. A relational database is a collection of these relational tables. Each table is first given a name and its attributes are named, typically presented in a format like: TableName(AttributeName1, AttributeName2, ...). For instance, a database for a theatrical agency might include tables like Member(MemberID, MemberGivenName, MemberFamilyName, BandName, ...) and Band(BandName, AgentID, ...). \n\nThe logical view of data in these tables is such that each attribute corresponds to a column header in the table, with the actual data values found in the rows beneath each header. A fundamental aspect of the relational database is that similar to mathematical theory, there's no inherent ordering to the attribute columns, and to inspect data, queries should be utilized. \n\nIn terms of terminology, a row in a table is referred to as a 'tuple' or sometimes a 'record', and each attribute value is referred to as a 'field'. Each tuple is an atomic set of values, meaning each attribute contains a single value or none. \n\nA critical feature of relational databases is the primary key, which can be a single attribute or a combination of attributes that uniquely identifies each tuple within a table. Every table must possess a primary key, and each tuple must have unique values for this key to ensure integrity. The selection process for a primary key involves identifying candidate keys, where only one will be chosen as the primary key and others will be regarded as secondary keys or may lead to the creation of a new primary key if no natural candidates are available. An example is having 'MemberID' as the primary key in the Member table. \n\nThe primary key helps maintain data integrity by preventing duplicate entries. A relational database is typically interlinked, whereby tables relate to one another using foreign keys. When a foreign key is created, it references the primary key of another table, ensuring referential integrity. For example, in the design where the Member table has 'BandName' as a foreign key referencing 'BandName' in the Band table, database management systems (DBMS) will disallow any entries in the Member table that do not have a corresponding value present in the Band table, thereby ensuring referential integrity and maintaining overall data integrity within the relational database.",
      "children": []
    },
    {
      "name": "BandName is a primary key for the Band table. Does this mean that as a foreign key in the Member table it must have unique values? Explain your reasoning.",
      "id": "5",
      "summary": "No, as a foreign key in the Member table, BandName does not need to have unique values. A primary key is unique within its own table, meaning that each band has a distinct BandName. However, when BandName is used as a foreign key in the Member table, it represents a relationship where multiple members can belong to the same band. Therefore, it can have duplicate values in the Member table, indicating that multiple members are associated with the same band.",
      "children": []
    },
    {
      "name": "11 03 Entity Relationship Modelling",
      "id": "6",
      "children": [
        {
          "name": "WORKED EXAMPLE 11.01",
          "id": "6-1",
          "summary": "Please provide the details from WORKED EXAMPLE 11.01 so that I can create a full mark-scheme answer.",
          "children": []
        },
        {
          "name": "Describe the process of creating an entity-relationship diagram for a theatrical agency handling band bookings, including entities, relationships, and cardinalities.",
          "id": "6-2",
          "summary": "The process of creating an entity-relationship (E-R) diagram for a theatrical agency involves several systematic steps:\n\n1. **Identify Entities**: In this scenario, the relevant entities are 'Booking', 'Band', 'Member', and 'Venue'. The agency ignores 'agency' as there is only one. Each entity has multiple instances as there are many bookings, bands, members, and venues.\n\n2. **Identify Relationships**: The relationships between the entities are established: \n   - *Booking with Venue*\n   - *Booking with Band*\n   - *Band with Member*\n   It is noted that a direct relationship between 'Member' and 'Venue' is disregarded, assuming that these relationships can be handled through indirect links.\n\n3. **Decide on Cardinalities**: Next, the cardinalities of each relationship are defined:\n   - **Member and Band**: One Member belongs to only one Band (M:1) and a Band has many Members.\n   - **Booking and Venue**: One Booking is for one Venue and one Venue can host many Bookings (M:1), noting a Venue might exist with no bookings.\n   - **Band and Booking**: A Booking can be for many Bands and a Band can have many Bookings (M:M), with the possibility of a new band having no prior bookings.\n\n4. **Create Full E-R Diagram**: The entities and relationships are then combined into a full E-R diagram. Each relationship is labeled to indicate its meaning:\n   - Member belongs to Band\n   - Booking is made at Venue\n   - Booking has Bands\n\nTo illustrate reading from the diagram, one can denote: \n   - One Band is booked for zero or many Bookings.\n   - One Booking is for one or many Bands.\n\nThe above process results in a comprehensive E-R diagram which visually represents the structure of data handling within the theatrical agency's booking system.",
          "children": []
        }
      ]
    },
    {
      "name": "Question 11 02",
      "id": "7",
      "children": [
        {
          "name": "What is the difference between the terms relation and relationship?",
          "id": "7-1",
          "summary": "The term 'relation' typically refers to a connection or association between two or more entities, while 'relationship' usually describes a more complex, often emotional or social connection between individuals or groups. It is important to differentiate between these two terms to avoid confusion.",
          "children": []
        }
      ]
    },
    {
      "name": "11 04 A Logical Entity Relationship Model",
      "id": "8",
      "children": [
        {
          "name": "Is it possible to annotate the relationships in the booking database model, and how are primary and foreign keys determined?",
          "id": "8-1",
          "summary": "Yes, it is possible to annotate the relationships in the booking database model using a link entity. The link entity allows two foreign keys, one referencing the primary key of Band and another referencing the primary key of Booking. Each entity from the logical E-R diagram translates into a table in the relational database where primary keys and foreign keys can be designated. The primary keys are determined based on uniqueness requirements for each entity. The table titled 'Key Table for the Agency Booking Database' (Table 11.04) displays the following decisions regarding primary and foreign keys: \n- Member: Primary key is MemberID; Foreign key is BandName. \n- Band: Primary key is BandName; no foreign key. \n- Band-Booking: Primary key is a combination of BandName and BookingID (compound primary key); Foreign keys are BandName and BookingID. \n- Booking: Primary key is BookingID; Foreign key is VenueName. \n- Venue: Primary key is VenueName; no foreign key. \nA noteworthy consideration is that the link entity cannot use BandName or BookingID alone; however, a composite primary key consisting of both is valid.",
          "children": []
        },
        {
          "name": "Create a conceptual E-R diagram and convert it to a logical E-R diagram. Create a key table for the database that could be implemented from the design.",
          "id": "8-2",
          "summary": "1. Conceptual E-R Diagram:\n   - Entities:\n     a. Passenger\n     b. Cruise\n     c. Port\n   - Relationships:\n     a. Each Cruise has many Passengers (1:N relationship)\n     b. Each Cruise visits many Ports (M:N relationship)\n     c. Each Port can be visited by many Cruises (M:N relationship)\n\n2. Logical E-R Diagram:\n   - Convert the M:N relationship between Cruise and Port into a separate entity, e.g., 'Cruise_Port'.\n   - Entities:\n     a. Passenger (Passenger_ID [PK], Name, Contact_Info)\n     b. Cruise (Cruise_ID [PK], Cruise_Name, Date)\n     c. Port (Port_ID [PK], Port_Name, Country)\n     d. Cruise_Port (Cruise_Port_ID [PK], Cruise_ID [FK], Port_ID [FK])\n   - Relationships:\n     a. Passenger to Cruise (1:N)\n     b. Cruise to Cruise_Port (1:N)\n     c. Port to Cruise_Port (1:N)\n\n3. Key Table for the Database:\n   - Passenger Table:\n     - Passenger_ID (Primary Key)\n     - Name\n     - Contact_Info\n   - Cruise Table:\n     - Cruise_ID (Primary Key)\n     - Cruise_Name\n     - Date\n   - Port Table:\n     - Port_ID (Primary Key)\n     - Port_Name\n     - Country\n   - Cruise_Port Table:\n     - Cruise_Port_ID (Primary Key)\n     - Cruise_ID (Foreign Key)\n     - Port_ID (Foreign Key)",
          "children": []
        }
      ]
    },
    {
      "name": "11 05 Normalisation",
      "id": "9",
      "children": [
        {
          "name": "What is a different use of the term normalisation mentioned in the context?",
          "id": "9-1",
          "summary": "In Chapter 16, the term normalisation is used in a completely different context compared to its previous usage.",
          "children": []
        },
        {
          "name": "WORKED EXAMPLE 11.02:",
          "id": "9-2",
          "summary": "...",
          "children": []
        },
        {
          "name": "What is the purpose of normalising data for a theatrical agency?",
          "id": "9-3",
          "summary": "The purpose of normalising data for a theatrical agency is to organize and structure booking data in a way that reduces redundancy and dependency, allowing for efficient data management and retrieval. This technique enables the agency to maintain accurate records of bookings, improve data integrity, and facilitate easier updates and queries regarding shows and customer interactions. Normalised data helps ensure that the information is stored in a logical format that conforms to established database design principles.",
          "children": []
        },
        {
          "name": "What is the booking data sheet reference number?",
          "id": "9-4",
          "summary": "The booking data sheet reference number is 2016/023.",
          "children": []
        },
        {
          "name": "Explain the steps taken to convert the provided booking data into first normal form (1NF).",
          "id": "9-5",
          "summary": "The conversion to first normal form (1NF) involves the following steps: 1. Identify and separate non-repeating and repeating group attributes within the unnormalized data. In this case, the non-repeating group attributes include BookingID, VenueName, VenueAddress1, VenueAddress2, and Date, while the repeating group attributes are BandName, NumberOfMembers, and Headlining. 2. Create two separate tables: one for the non-repeating group attributes and another for the repeating group attributes. The first table should have a primary key, which can be BookingID, containing the non-repeating attributes. The second table should also have a primary key, potentially combining BookingID with BandName to ensure uniqueness, containing the repeating attributes: BandName, NumberOfMembers, and Headlining. 3. By organizing the data in this manner, redundancy is reduced, ensuring that each table adheres to the principle of having single rows and atomic attribute values, thus effectively achieving first normal form.",
          "children": []
        }
      ]
    },
    {
      "name": "Booking Booking Id Venue Name Venue Address1 Venue Address2 Date",
      "id": "10",
      "children": [
        {
          "name": "Explain the process of converting a database schema to Second Normal Form (2NF) and provide an example based on the given table definition for Band-Booking.",
          "id": "10-1",
          "summary": "To convert a database schema to Second Normal Form (2NF), first, we should ensure that the schema is already in First Normal Form (1NF). In the example provided for the Band-Booking table, the primary key is defined as BandName and BookingID, with BookingID being a foreign key (fk). 1NF is satisfied because there are no repeating groups, and all attributes are dependent on the primary key. \n\nNext, we analyze each non-key attribute to determine if it is dependent on both parts of the compound key. In this case, the non-key attribute NumberOfMembers is only dependent on BandName and not on BookingID. Therefore, to meet the requirements of 2NF, we must move NumberOfMembers to a new table. \n\nAs a result, we end up with three table definitions in 2NF: \n1. The original Band-Booking table, which would now only include BandName and BookingID. \n2. A new table for the NumberOfMembers, which would include BandName and NumberOfMembers. \n3. A potentially third table to handle relationships involving BookingID if necessary. This structure eliminates data redundancy and ensures that every non-key attribute is fully functionally dependent on the primary key.",
          "children": []
        },
        {
          "name": "Describe the relationships between the entities in the given database schema.",
          "id": "10-2",
          "summary": "In the provided database schema, there are two main entities: Booking and Band-Booking. The Booking entity includes attributes such as BookingID, VenueName, VenueAddress1, VenueAddress2, and Date, where BookingID acts as a unique identifier for each booking. The Band-Booking entity establishes a many-to-many relationship between Bands and Bookings; it includes attributes such as BandName (foreign key referencing the Band entity) and BookingID (foreign key referencing the Booking entity). The Headlining attribute indicates whether the band is the headliner for the specific booking. This design allows multiple bands to be associated with a single booking while also allowing a band to perform at multiple bookings.",
          "children": []
        },
        {
          "name": "In Step 2 of Worked Example 11.02, why is the Headlining attribute not placed in the Band table?",
          "id": "10-3",
          "summary": "The Headlining attribute is not placed in the Band table because it is a property that pertains specifically to the Booking context where a band is headlining a particular event. Placing it in the Band table would violate the normalization principles since Headlining is dependent on the relationship between the Band and Booking rather than being an intrinsic attribute of the Band itself. Instead, it is included in the Band-Booking table, which serves to associate the Band with specific Booking records, thus maintaining the data integrity and adhering to the rules of database normalization, particularly ensuring that non-key attributes are only dependent on the primary key.",
          "children": []
        }
      ]
    },
    {
      "name": "Normalise the data shown in Figure 11.11.",
      "id": "11",
      "summary": "To normalise the data, we need to ensure that it meets the requirements of the First, Second, and Third Normal Forms (1NF, 2NF, and 3NF). The steps typically involve identifying and removing duplicate data, ensuring each table has a primary key, and separating data into different tables to eliminate redundancy. After analyzing Figure 11.11, we can create separate tables for Orders, Customers, and Products, ensuring that attributes have atomic values and that there are no partial or transitive dependencies. Finally, we can link these tables through foreign keys to maintain relationships.",
      "children": []
    },
    {
      "name": "11 06 The Database Management System Dbms",
      "id": "12",
      "children": [
        {
          "name": "Explain the ANSI three-level architecture of a database.",
          "id": "12-1",
          "summary": "The ANSI three-level architecture of a database consists of three levels: the external level, the conceptual level, and the internal level. The external level provides individual user and programmer views, each with an external schema that describes which parts of the database are accessible. This allows for multiple user programs to support different views and can be used by the database administrator (DBA) to ensure security by controlling access rights to data. The conceptual level presents a single universal view of the database, controlled by the DBA, and has a conceptual schema that describes the organization of data as perceived by users or programmers. Finally, the internal level, the lowest level in the architecture, details the physical storage of data, which is managed by the database management system (DBMS) software. The DBMS programmers are privy to the internal schema and can accommodate changes in the storage medium.",
          "children": []
        },
        {
          "name": "Explain the facilities provided by a Database Management System (DBMS).",
          "id": "12-2",
          "summary": "A Database Management System (DBMS) provides several facilities regardless of the size of the database, whether for an individual or a large organization. Key facilities include: 1. **Use of SQL**: A special-purpose language, SQL, can be utilized for creating databases, although alternatives exist for most types of DBMS. 2. **Developer Interface**: The DBMS offers software tools through a developer interface that enable users to create tables and define attributes, including their data types. 3. **User Interface Development**: Facilities are provided for programmers to develop a user interface. 4. **Query Processor**: This allows for the creation and processing of queries, which are essential for extracting and manipulating data from the database. 5. **Report Generation**: The DBMS has the capability to create reports that present formatted output. Furthermore, programmers can integrate access to queries and reports within the user interface. In large organizations, the use of some DBMS facilities will be managed by a Database Administrator (DBA).",
          "children": []
        }
      ]
    },
    {
      "name": "Dbms Functions Likely To Be Used By A Dba",
      "id": "13",
      "children": [
        {
          "name": "How many of the above concepts are recognisable in your experience of using a database?",
          "id": "13-1",
          "summary": "In my experience of using a database, several concepts are recognisable, including: 1) Tables - Data is stored in structured tables consisting of rows and columns. 2) Fields - Each column in a table represents a field containing specific types of data. 3) Records - Each row in a table is a record that represents a single entry within the database. 4) Primary Keys - A unique identifier for each record in a table ensures that no two records are the same. 5) Relationships - Databases often involve relationships between tables, such as one-to-many or many-to-many relationships. 6) Queries - Users can retrieve specific data using queries, often written in SQL (Structured Query Language). 7) Forms - User-friendly interfaces that allow users to input or modify data in a database. 8) Reports - Summarised data outputs that present information in a structured format. 9) Indexing - Improves the speed of data retrieval operations on a database. Each of these concepts plays a critical role in the effective management and utilization of a database.",
          "children": []
        }
      ]
    },
    {
      "name": "11 07 Structured Query Language Sql",
      "id": "14",
      "children": [
        {
          "name": "For the database defined in Worked Example 11.02, complete the DDL for creating the four tables. Use varchar(8) for BookingID, integer for NumberOfMembers, date for Date, character for Headlining and varchar(25) for all other data.",
          "id": "14-1",
          "summary": "CREATE TABLE Booking {\n    BookingID varchar(8),\n    NumberOfMembers integer,\n    Date date,\n    Headlining character,\n    BandName varchar(25)\n};\n\nCREATE TABLE Band {\n    BandName varchar(25),\n    NumberOfMembers integer,\n    PRIMARY KEY (BandName)\n};\n\nCREATE TABLE Performance {\n    PerformanceID varchar(8),\n    Date date,\n    BandName varchar(25),\n    FOREIGN KEY (BandName) REFERENCES Band(BandName)\n};\n\nCREATE TABLE Customer {\n    CustomerID varchar(8),\n    Name varchar(25),\n    BookingID varchar(8),\n    FOREIGN KEY (BookingID) REFERENCES Booking(BookingID)\n};",
          "children": []
        },
        {
          "name": "What are the three categories of use for Data Manipulation Language (DML) in SQL?",
          "id": "14-2",
          "summary": "1. The insertion of data into the tables when the database is created. 2. The modification or removal of data in the database. 3. The reading of data stored in the database.",
          "children": []
        }
      ]
    },
    {
      "name": "Reflection Point",
      "id": "15",
      "children": [
        {
          "name": "What are the features and methods associated with database design and management?",
          "id": "15-1",
          "summary": "A database offers improved methods for ensuring data integrity compared to a file-based approach. A relational database comprises tables of a special type; each table has a primary key and may contain foreign keys. Entity-relationship modelling is a top-down approach to database design. Normalisation is a database design method that starts with a collection of attributes and converts them into first normal form then into second normal form and, finally, into third normal form. A database architecture provides, for the user, a conceptual level interface to the stored data. Features provided by a database management system (DBMS) include: a data dictionary, indexing capability, control of user access rights and backup procedures. Structured Query Language (SQL) includes data definition language (DDL) commands for establishing a database and data manipulation language (DML) commands for creating queries.",
          "children": []
        }
      ]
    },
    {
      "name": "Define the terms used to describe the components in a relational database table using examples from this table.",
      "id": "16",
      "summary": "In a relational database table, the components include: 1. Table: A collection of related data entries; for example, the table used to store student data. 2. Row (Record): A single entry in a table that contains data for one item; for example, (Xiangfei, 3, MUB, Computing, A, DER) represents all information for one student studying Computing. 3. Column (Field): A set of data values of a particular type; for example, 'StudentName', 'TutorGroup', 'Subject', etc. 4. Primary Key: A unique identifier for each record in the table, though not explicitly shown here, could be a combination of 'StudentName' and 'Subject' for uniqueness.",
      "children": []
    }
  ]
};

export default data;