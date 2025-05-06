import type { MindMapNode } from '../types/mind-map';

const data: MindMapNode = {
  "name": "chapter-9",
  "id": "root",
  "children": [
    {
      "name": "Chapter 9",
      "id": "1",
      "children": [
        {
          "name": "Explain the importance of security, privacy and data integrity in information systems.",
          "id": "1-1",
          "summary": "Security, privacy and data integrity are critical components of information systems for several reasons: First, security protects systems from unauthorized access, ensuring that sensitive data is not compromised or stolen. This is vital for maintaining trust among users and organizations. Second, privacy ensures that individuals' personal information is collected, stored, and processed in compliance with legal regulations and ethical standards. It safeguards user data from misuse and promotes user confidence in the system. Lastly, data integrity ensures that information remains accurate, consistent, and trustworthy throughout its lifecycle. It prevents data corruption and ensures that users can rely on the data for decision-making. Together, these elements help to create robust information systems that uphold user trust, comply with legal requirements, and ensure proper functioning.",
          "children": []
        },
        {
          "name": "Explain the difference between the terms security, privacy and integrity of data.",
          "id": "1-2",
          "summary": "Security refers to the measures taken to protect data and computer systems from unauthorized access, use, or damage. Privacy is the right of individuals to control how their personal information is collected and used, ensuring that personal information is kept confidential. Integrity refers to the accuracy, consistency, and reliability of data over its lifecycle, ensuring that data remains unaltered or undamaged during its storage and transfer.",
          "children": []
        }
      ]
    },
    {
      "name": "9 01 Definitions Of Data Integrity Privacy And Security",
      "id": "2",
      "children": [
        {
          "name": "What is data integrity and how can it be ensured?",
          "id": "2-1",
          "summary": "Data integrity refers to the accuracy and up-to-date status of stored data. To ensure data integrity, it is essential that any person or organisation storing data maintains its accuracy and validity. Methods to achieve data integrity will be discussed in this chapter and are also covered in Chapter 11 (Sections 11.01 & 11.02).",
          "children": []
        },
        {
          "name": "Explain the importance of data privacy and the role of data protection laws.",
          "id": "2-2",
          "summary": "Data privacy is crucial for keeping personal information private and preventing it from being publicly accessible. It applies to both individuals and organizations, with individuals having a vast amount of data associated with their lives. Assuming no involvement in criminal activities, individuals should control which data is public and which remains private. A legal framework, specifically data protection laws, is essential for enforcing this control and penalizing breaches of privacy. Key aspects of data protection laws include: 1) Focusing on personal, private data supplied by individuals to organizations; 2) Allowing data use only for purposes understood and agreed upon by individuals; 3) Obliging organizations to ensure the privacy and integrity of the data; 4) Acting as a deterrent against breaches, although laws do not guarantee adherence. This framework ultimately helps protect individuals' data privacy rights.",
          "children": []
        },
        {
          "name": "What data protection laws are in place in your country? Are you familiar with any details of these laws?",
          "id": "2-3",
          "summary": "Data protection laws vary by country but generally aim to protect individuals' personal information. These laws typically require that data be collected and processed with the consent of the individual and outline the rights individuals have regarding their data. Key aspects often include the right to access data, the right to correct inaccurate data, and the right to have data erased under certain circumstances. Examples include the General Data Protection Regulation (GDPR) in the European Union, the California Consumer Privacy Act (CCPA) in the United States, and the Data Protection Act in the UK. Whether these laws should extend to cover data obtained from telephone calls or search engine usage is a topic of debate, considering the growing concerns regarding privacy and data security in an increasingly digital world.",
          "children": []
        },
        {
          "name": "What are the key aspects of data security and system security measures?",
          "id": "2-4",
          "summary": "Data are secure if they are available for use when needed and the data made available are the data that were stored originally. The security of data has been breached if any data have been lost or corrupted. Data security must be achieved before either data integrity or data privacy can be achieved, but data security does not by itself guarantee either data integrity or data privacy. One of the requirements for protection of data is the security of the system used to store the data. System security does not just protect data. There are two primary aims of system security measures: to ensure that the system continues to carry out the tasks users need, and to ensure that only authorised users have access to the system.",
          "children": []
        }
      ]
    },
    {
      "name": "9 02 Threats To The Security Of A Computer System And Of The Data Stored In It",
      "id": "3",
      "children": [
        {
          "name": "List and explain the various types of malware and their functions.",
          "id": "3-1",
          "summary": "Malware is malicious software introduced into a system for harmful purposes. The various types of malware containing program code include:\n1. **Virus**: Tries to replicate itself inside other executable code.\n2. **Worm**: Runs independently and transfers itself to other network hosts.\n3. **Logic Bomb**: Stays inactive until some condition is met.\n4. **Trojan Horse**: Replaces all or part of a previously useful program.\n5. **Spyware**: Collects information and transmits it to another system.\n6. **Bot**: Takes control of another computer and uses it to launch attacks.\nAdditionally, malware can be classified based on activity:\n1. **Phishing**: Sending an email or electronic message from an apparently legitimate source requesting confidential information.\n2. **Pharming**: Setting up a bogus website that appears to be a legitimate site.\n3. **Keylogger**: Recording keyboard usage by the legitimate user of the system. Furthermore, the 'virus' category is often subdivided according to the software it attaches to, with examples such as boot sector viruses and macro viruses.",
          "children": []
        },
        {
          "name": "Carry out some research to find some examples of how phishing and pharming might be attempted.",
          "id": "3-2",
          "summary": "Phishing is typically attempted through deceptive emails or messages that appear to be from legitimate sources, directing individuals to fraudulent websites where they are prompted to enter personal information such as usernames, passwords, or credit card details. Examples of phishing include: 1. Email campaigns that impersonate banks, requesting users to 'verify' their accounts through a provided link. 2. Messages claiming to be from popular services like PayPal or Amazon, asking for account verification. Participants may also receive text messages (smishing) or social media messages. \n\nPharming is a more technical attempt where users are redirected from legitimate websites to fraudulent ones without their knowledge. Examples of pharming attempts include: 1. Malware installation on a user’s computer that alters the host file to redirect legitimate domain requests to fake sites. 2. Compromising a DNS server to redirect users accessing URLs to malicious IP addresses instead of the real websites. Both phishing and pharming are designed with the intention of stealing sensitive data or financial information.",
          "children": []
        }
      ]
    },
    {
      "name": "System Vulnerability Arising From User Activity",
      "id": "4",
      "children": [
        {
          "name": "Discuss the vulnerabilities arising from within system software, providing specific examples.",
          "id": "4-1",
          "summary": "Systems themselves often have security weaknesses. Examples of these vulnerabilities include: 1) Operating systems often lack good security; as they increase in complexity over time, there are more opportunities for weak security, leading to regular updates due to newly discovered security vulnerabilities. 2) Historically, commonly used application packages allowed macro viruses to spread, although this issue is now largely under control. 3) A specific vulnerability is the buffer overflow; programs written in the C programming language do not automatically perform array bound checks. This allows a program to intentionally write code to memory outside the defined address range of the array (buffer), overwriting stored data. A later program reading this overwritten section may not execute correctly, potentially causing minor disruptions or allowing an attacker to gain unauthorized access to the system and cause serious problems.",
          "children": []
        }
      ]
    },
    {
      "name": "9 03 Security Measures For Protecting Computer Systems",
      "id": "5",
      "children": [
        {
          "name": "What is disaster recovery contingency planning and what measures are involved?",
          "id": "5-1",
          "summary": "Disaster recovery contingency planning involves creating a strategy to ensure continuity of operation for large computer installations that are essential for the operations of an organization. It includes measures to ensure that the system continues to work during any adverse event or, in the case of a necessary system shut-down, to guarantee that services can resume within a very short time frame. The planning should be based on a risk assessment and include provisions for activating alternative systems. A key aspect is the use of a 'hot site', which is a fully operational system kept ready to replace the primary operational system. This hot site must be located remotely from the original system to facilitate recovery from natural disasters such as earthquakes or floods.",
          "children": []
        },
        {
          "name": "What special case of system vulnerability arises during major updates of hardware and/or software, and how do modern organizations manage this process?",
          "id": "5-2",
          "summary": "A special case of system vulnerability arises during major updates of hardware and/or software due to the potential for system failures or disruptions. Traditionally, organizations could install and test new systems over a weekend when no services were provided, allowing for a seamless transition. However, in the modern era, systems are often accessible at any time and from various locations, meaning that businesses are never truly closed. To ensure continuity of service during these updates, organizations may need to run both the original system and its replacement in parallel for a period of time.",
          "children": []
        },
        {
          "name": "Find an example of where the crisis was caused by technology failure and a different example where some natural disaster was the cause.",
          "id": "5-3",
          "summary": "An example of a crisis caused by technology failure is the 1986 Space Shuttle Challenger disaster, where the O-rings failed due to cold weather conditions, leading to the shuttle's destruction shortly after launch. This incident highlighted the failures in engineering decision-making and system design. A different example where a crisis was caused by a natural disaster is the 2011 Fukushima Daiichi nuclear disaster in Japan, where an earthquake and subsequent tsunami disabled the power supply and cooling systems of three Fukushima Daiichi reactors, leading to core meltdowns and the release of radioactive materials.",
          "children": []
        },
        {
          "name": "Create an example of a secure password using eight characters (but not one you are going to use). Assuming that each character is taken from the ASCII set of graphic characters, how many different possible passwords could be defined by eight characters? Do you think this is a sufficient number of characters to assume that the password would not be encountered by someone trying all possible passwords in turn to access the system?",
          "id": "5-4",
          "summary": "1. An example of a secure password using eight characters could be 'A1b2C3d4'.\n2. The ASCII set of graphic characters includes 95 characters (from space (32) to tilde (126)). For an eight-character password: 95^8 = 6,634,204,312,890,625 different possible passwords could be defined.\n3. Yes, using eight characters from a diverse set of 95 ASCII graphic characters provides a sufficiently large number of possible combinations, making it highly unlikely that someone could guess the password by trying all possibilities in a reasonable time frame.",
          "children": []
        },
        {
          "name": "What are some general good practices to keep a personal computer secure?",
          "id": "5-5",
          "summary": "General good practice that helps to keep a personal computer secure includes not leaving the computer switched on when unattended, not allowing someone else to observe you accessing the computer, and not writing down details of how you access it.",
          "children": []
        }
      ]
    },
    {
      "name": "Firewall",
      "id": "6",
      "children": [
        {
          "name": "What is a digital signature and how can it be used to verify the identity of an email sender?",
          "id": "6-1",
          "summary": "A digital signature is a mathematical scheme for verifying the authenticity and integrity of a message, software, or digital document. In the context of emails, it can be used to confirm the identity of the sender by having the sender attach a digital signature to the email. By checking this signature, the recipient can ascertain that the email has not been altered and that it indeed comes from the claimed sender. More details on this process can be found in Chapter 21 (Section 21.02).",
          "children": []
        },
        {
          "name": "Discuss the importance of anti-virus software and intrusion detection systems in maintaining system security.",
          "id": "6-2",
          "summary": "Anti-virus software and intrusion detection systems are critical components in the maintenance of system security. Security measures that restrict access to a system alone do not ensure the complete removal of threats; hence, software running on the system is essential to identify and address potential problems. Anti-virus software is typically used to combat all types of malware and performs regular scans to detect, remove, or deactivate these threats. In addition, special-purpose anti-spyware software may also be installed to further safeguard against specific forms of malware. Furthermore, an intrusion detection system analyzes system audit records and identifies any activities that deviate from expected norms, thus helping to detect and prevent unauthorized access or attacks. The threat landscape is continuously evolving, with malicious actors employing increasingly sophisticated methods. As a result, it is imperative that defense mechanisms, including anti-virus software and intrusion detection systems, are continually improved to effectively counteract emerging threats.",
          "children": []
        }
      ]
    },
    {
      "name": "9 04 Security Measures For Protecting Data",
      "id": "7",
      "children": [
        {
          "name": "List five reasons for accidental loss of data.",
          "id": "7-1",
          "summary": "1. A disk or tape gets corrupted. 2. A disk or tape is destroyed. 3. The system crashes. 4. The file is erased or overwritten by mistake. 5. The location of the file is forgotten.",
          "children": []
        },
        {
          "name": "Explain the purpose of restricting access to data within a computer system.",
          "id": "7-2",
          "summary": "Restricting access to data is crucial to ensure that users who have logged into a computer system are authorized to use the system and its resources according to their specific roles and needs. System administrators identify different categories of users, each with varied requirements in terms of data access. For example, an employee may need to lookup another employee's internal phone number but should not have access to sensitive information such as that employee's salary. An authorization policy is implemented to define distinct access rights for different users regarding different files, where an individual might have no access, read access, or limited write access based on their role and requirements. This finely-grained control over data access helps protect sensitive information and maintain security within the system.",
          "children": []
        },
        {
          "name": "What measures can be taken to protect data content and ensure stored data cannot be read by unauthorized access?",
          "id": "7-3",
          "summary": "Data can be encrypted to ensure that even if someone overcomes security measures to gain access to the system, the stored data cannot be read. Encryption methods are discussed in Chapter 21 (Sections 21.01, 21.03, 21.04, 21.05 & 21.06).",
          "children": []
        }
      ]
    },
    {
      "name": "9 05 Data Validation And Verification",
      "id": "8",
      "children": [
        {
          "name": "Explain the concept of data validation and provide typical examples of the different types of checks that can be implemented.",
          "id": "8-1",
          "summary": "Data validation is the process of ensuring that the data entered into a system is accurate and meets predefined criteria. It is important to note that validation does not guarantee that data is accurate; it only confirms that the data is of the correct type, format, or within the acceptable range. For instance, if a name is expected but an incorrect name is entered, the system might still accept it as valid because it fits the expected type (a name). Validation checks can prevent incorrect data entry only if the input is of the wrong type, wrong format, or out of specified ranges. Typical examples of types of data validation checks include: * a presence check to ensure that an entry field is not left blank, * a format check requiring specific formats, such as a date in the format dd/mm/yyyy, * a length check to verify that data meets a specified length, such as with telephone numbers, * a range check to ensure that numerical inputs, like the month in a date, do not exceed valid limits (e.g., 1-12 for months), * a limit check for input values, like setting a maximum number of years for someone's age, * a type check to verify that inputs are of the correct data type, such as only numeric values for a month, and * an existence check to confirm that a file referred to in the data entry actually exists.",
          "children": []
        },
        {
          "name": "What is verification in data entry and describe two methods used for verification?",
          "id": "8-2",
          "summary": "Verification in data entry means getting the user to confirm that the data entered was what was intended to be entered. However, this does not guarantee that the data entered is correct. One method of verification is double entry, commonly exemplified when a user is asked to supply a new password, which involves reentering the password for confirmation. Another method is a visual check, where a user reviews the data entered on a form before submitting it to ensure accuracy.",
          "children": []
        },
        {
          "name": "Explain the check digit method of verification and how it is used.",
          "id": "8-3",
          "summary": "The check digit method of verification involves using a series of numbers to identify something and requires a calculation with those numbers. The final part of the calculation involves integer division, where the remainder is added as an extra one or two digits at the end of the series of numbers. In a specific scheme, if the remainder calculated is 10, the letter X is used as the check digit. When the data is subsequently read, the same calculation is performed, and the result is compared to the stored check digit. This technique is commonly used for bar codes and for the ISBN of books.",
          "children": []
        },
        {
          "name": "Explain the methods used to verify data integrity during data transfer and their limitations.",
          "id": "8-4",
          "summary": "There are several methods used to verify data integrity during data transfer: 1. **Parity Check**: This is the simplest approach. It uses a one-bit parity check, where data is transferred in bytes using a seven-bit code. A parity bit (either even or odd) is added in the eighth bit. Procedure: a. At the transmitting end, the number of 1's in the seven-bit code is counted. b. If even, the parity bit is set to 0; if odd, it is set to 1. c. This process is repeated for each byte. d. At the receiving end, the number of 1's in the eight-bit code is counted. e. If even, the byte is accepted; this is repeated for all bytes. Limitations: This method only detects the presence of an error and cannot identify the actual bit that is in error. Additionally, it may pass a byte where two bits are flipped, falsely indicating correctness. 2. **Checksum Method**: This method calculates the sum of binary numbers for a defined block of bytes, generating a checksum value that is transmitted. The receiver performs the same calculation to verify the transmitted checksum. Limitations: Like the parity check, it can detect errors but cannot pinpoint their location. 3. **Parity Block Check Method**: This method employs longitudinal parity to check sequences of binary digits across multiple bytes, offering a more advanced verification method that can identify the presence of errors better than simple parity checks. However, the complexity of detecting and correcting the exact position of an error is significantly higher than with the previous methods. 4. **Difference Between Check Digit and Checksum**: It is important to note that a check digit is used for stored data, while a checksum is specifically used for transmitted data.",
          "children": []
        }
      ]
    },
    {
      "name": "Worked Example 9 01",
      "id": "9",
      "children": [
        {
          "name": "Explain how a parity block check is used to detect and correct errors in a serial data transmission as illustrated in the context provided.",
          "id": "9-1",
          "summary": "A parity block check involves multiple steps to ensure data integrity during transmission. Initially, a program reads a group of seven bytes, each represented by seven bits, excluding the most significant bit (bit 7) which is left undefined. To achieve even parity, a parity bit is set for each byte, where the most significant bit is utilized to ensure that the total number of 1s in the byte, including the parity bit, remains even. This is reflected in the addition of a parity byte, where each bit in this byte is calculated by checking parity for the corresponding bit position across all seven data bytes. After the transmission, the receiving end takes in the eight bytes (the seven data bytes and the parity byte) and checks the parity sums for each byte as well as for the bit positions of the received data. The method is designed for serial transmission and includes longitudinal checking, thereby utilizing a matrix of bit values for error checking. If an error occurs, particularly a single error in one of the seven bytes, the system can identify the specific bit that is erroneous, allowing for correction before the data is accepted. This method ensures reliability in data transmission, providing a mechanism for both error detection and correction.",
          "children": []
        }
      ]
    },
    {
      "name": "Question 9 02",
      "id": "10",
      "children": [
        {
          "name": "Identify what has gone wrong during the transmission. What would happen after the transmission is checked?",
          "id": "10-1",
          "summary": "a) During the transmission, errors occurred in the data bytes, resulting in a mismatch between the data and the expected parity check bits. The parity method checks whether the number of 1s in each byte is odd or even. If any byte has an incorrect parity, it indicates that there has been a transmission error. b) After the transmission is checked, the system would identify the bytes with incorrect parity. Depending on the protocol, the data may either be discarded, requested to be resent, or corrected if the method supports error correction.",
          "children": []
        }
      ]
    },
    {
      "name": "Reflection Point",
      "id": "11",
      "children": [
        {
          "name": "What are important considerations for the storage of data?",
          "id": "11-1",
          "summary": "Important considerations for the storage of data include data integrity, data privacy, and data security.",
          "children": []
        }
      ]
    },
    {
      "name": "Identify the missing word in the sentence 'Concerns about the integrity of data are concerns about its ...'",
      "id": "12",
      "summary": "accuracy.",
      "children": []
    }
  ]
};

export default data;