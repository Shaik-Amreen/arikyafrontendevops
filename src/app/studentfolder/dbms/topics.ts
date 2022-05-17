export default [
    {
        topic: 'Introduction of DBMS',
        content: `<h1> Introduction of DBMS (Database Management System):</h1><p><strong>Important Terminology</strong></p>
        <p><strong>Database:&nbsp;</strong>Database is a collection of inter-related data which helps in efficient retrieval, insertion and deletion of data from database and organizes the data in the form of tables, views, schemas, reports etc. For Example, university database organizes the data about students, faculty, and admin staff etc. which helps in efficient retrieval, insertion and deletion of data from it.</p>
        <p><strong>DDL</strong> is short name of Data Definition Language, which deals with database schemas and descriptions, of how the data should reside in the database.</p>
        <ul>
            <li>CREATE: to create a database and its objects like (table, index, views, store procedure, function, and triggers)</li>
            <li>ALTER: alters the structure of the existing database</li>
            <li>DROP: delete objects from the database</li>
            <li>TRUNCATE: remove all records from a table, including all spaces allocated for the records are removed</li>
            <li>COMMENT: add comments to the data dictionary</li>
            <li>RENAME: rename an object<p><strong>DML</strong> is short name of Data Manipulation Language which deals with data manipulation and includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc., and it is used to store, modify, retrieve, delete and update data in a database.</p>
            </li>
            <li>SELECT: retrieve data from a database</li>
            <li>INSERT: insert data into a table</li>
            <li>UPDATE: updates existing data within a table</li>
            <li>DELETE: Delete all records from a database table</li>
            <li>MERGE: UPSERT operation (insert or update)</li>
            <li>CALL: call a PL/SQL or Java subprogram</li>
            <li>EXPLAIN PLAN: interpretation of the data access path</li>
            <li>LOCK TABLE: concurrency Control<p><strong>Database Management System:&nbsp;</strong>The software which is used to manage database is called Database Management System (DBMS). For Example, MySQL, Oracle etc. are popular commercial DBMS used in different applications. DBMS allows users the following tasks:</p>
                <div><br></div>
                <p><strong>Data Definition:</strong> It helps in creation, modification and removal of definitions that define the organization of data in database.</p>
                <p><strong>Data Updation:</strong> It helps in insertion, modification and deletion of the actual data in the database.</p>
                <p><strong>Data Retrieval:</strong> It helps in retrieval of data from the database which can be used by applications for various purposes.</p>
                <p><strong>User Administration:</strong> It helps in registering and monitoring users, enforcing data security, monitoring performance, maintaining data integrity, dealing with concurrency control and recovering information corrupted by unexpected failure.</p>
                <p><strong>Paradigm Shift from File System to DBMS</strong></p>
                <p><strong>&nbsp;</strong>File System manages data using files in hard disk. Users are allowed to create, delete, and update the files according to their requirement. Let us consider the example of file based University Management System. Data of students is available to their respective Departments, Academics Section, Result Section, Accounts Section, Hostel Office etc. Some of the data is common for all sections like Roll No, Name, Father Name, Address and Phone number of students but some data is available to a particular section only like Hostel allotment number which is a part of hostel office. Let us discuss the issues with this system:</p>
                <ul>
                    <li><strong>Redundancy of data:</strong> Data is said to be redundant if same data is copied at many places. If a student wants to change Phone number, he has to get it updated at various sections. Similarly, old records must be deleted from all sections representing that student.</li>
                    <li><strong>Inconsistency of Data:&nbsp;</strong>Data is said to be inconsistent if multiple copies of same data does not match with each other. If Phone number is different in Accounts Section and Academics Section, it will be inconsistent. Inconsistency may be because of typing errors or not updating all copies of same data.</li>
                    <li><strong>Difficult Data Access:</strong> A user should know the exact location of file to access data, so the process is very cumbersome and tedious. If user wants to search student hostel allotment number of a student from 10000 unsorted students&rsquo; records, how difficult it can be.</li>
                    <li><strong>Unauthorized Access:</strong> File System may lead to unauthorized access to data. If a student gets access to file having his marks, he can change it in unauthorized way.</li>
                    <li><strong>No Concurrent Access:&nbsp;</strong>The access of same data by multiple users at same time is known as concurrency. File system does not allow concurrency as data can be accessed by only one user at a time.</li>
                    <li><strong>No Backup and Recovery:</strong> File system does not incorporate any backup and recovery of data if a file is lost or corrupted.</li>
                </ul>
            </li>
        </ul>`
    },
    {
        topic: ' Introduction of 3-Tier Architecture in DBMS',
        content: `<p>DBMS 3-tier architecture divides the complete system into three inter-related but independent modules as shown below:<br><a href="https://media.geeksforgeeks.org/wp-content/uploads/dbms-3tier.jpg"><img src="https://media.geeksforgeeks.org/wp-content/uploads/dbms-3tier.jpg" alt="dbms-3-tier-architecture" width="362" height="189"></a></p>
        <ol>
            <li><strong>Physical Level:</strong> At the physical level, the information about the location of database objects in the data store is kept. Various users of DBMS are unaware of the locations of these objects.In simple terms,physical level of a database describes how the data is being stored in secondary storage devices like disks and tapes and also gives insights on additional storage details.</li>
            <li><strong>Conceptual Level:&nbsp;</strong>At conceptual level, data is represented in the form of various database tables. For Example, STUDENT database may contain STUDENT and COURSE tables which will be visible to users but users are unaware of their storage.Also referred as logical schema,it describes what kind of data is to be stored in the database.</li>
            <li><strong>External Level:&nbsp;</strong> An external level specifies a view of the data in terms of conceptual level tables. &nbsp;Each external level view is used to cater to the needs of a particular category of users. For Example, FACULTY of a university is interested in looking course details of students, STUDENTS are interested in looking at all details related to academics, accounts, courses and hostel details as well. So, different views can be generated for different users. The main focus of external level is data abstraction.</li>
        </ol>
        <p><strong>Data Independence</strong></p>
        <p>Data independence means a change of data at one level should not affect another level. Two types of data independence are present in this architecture:</p>
        <div><br></div>
        <ol>
            <li><strong>Physical Data Independence:</strong> Any change in the physical location of tables and indexes should not affect the conceptual level or external view of data. This data independence is easy to achieve and implemented by most of the DBMS.</li>
            <li><strong>Conceptual Data Independence:</strong> The data at conceptual level schema and external level schema must be independent. This means a change in conceptual schema should not affect external schema. e.g.; Adding or deleting attributes of a table should not affect the user&rsquo;s view of the table. But this type of independence is difficult to achieve as compared to physical data independence because the changes in conceptual schema are reflected in the user&rsquo;s view.</li>
        </ol>
        <p><strong>Phases of database design</strong></p>
        <p>Database designing for a real-world application starts from capturing the requirements to physical implementation using DBMS software which consists of following steps shown below:<br><a href="https://media.geeksforgeeks.org/wp-content/uploads/20190506212511/dbms-phases.jpg"><img src="https://media.geeksforgeeks.org/wp-content/uploads/20190506212511/dbms-phases.jpg" alt="phases-of-db"></a></p>
        <p><strong>Conceptual Design:&nbsp;</strong>The requirements of database are captured using high level conceptual data model. For Example, the ER model is used for the conceptual design of the database.</p>
        <p><strong>Logical Design:&nbsp;</strong>Logical Design represents data in the form of relational model. ER diagram produced in the conceptual design phase is used to convert the data into the Relational Model.</p>
        <p><strong>Physical Design:</strong> In physical design, data in relational model is implemented using commercial DBMS like Oracle, DB2.</p>
        <p><strong>Advantages of DBMS</strong></p>
        <p><strong>&nbsp;</strong>DBMS helps in efficient organization of data in database which has following advantages over typical file system:</p>
        <ul>
            <li><strong>Minimized redundancy and data inconsistency:</strong> Data is normalized in DBMS to minimize the redundancy which helps in keeping data consistent. For Example, student information can be kept at one place in DBMS and accessed by different users.This minimized redundancy is due to primary key and foreign keys</li>
            <li><strong>Simplified Data Access:</strong> A user need only name of the relation not exact location to access data, so the process is very simple.</li>
            <li><strong>Multiple data views:</strong> Different views of same data can be created to cater the needs of different users. For Example, faculty salary information can be hidden from student view of data but shown in admin view.</li>
            <li><strong>Data Security:</strong> Only authorized users are allowed to access the data in DBMS. Also, data can be encrypted by DBMS which makes it secure.</li>
            <li><strong>Concurrent access to data:&nbsp;</strong>Data can be accessed concurrently by different users at same time in DBMS.</li>
            <li><strong>Backup and Recovery mechanism:</strong> DBMS backup and recovery mechanism helps to avoid data loss and data inconsistency in case of catastrophic failures.</li>
        </ul>`
    },
    {
        topic: 'DBMS Architecture 1-level, 2-Level, 3-Level',
        content: `<p>A Database store a lots of critical information to access data quickly and securely. Hence it is important to select a correct Architecture for efficient data management.</p>
        <p>Types of DBMS Architecture:</p>
        <ul>
            <li>1- Tier Architecture</li>
            <li>2- Tier Architecture</li>
            <li>3- Tier Architecture</li>
        </ul>
        <p><strong>1- Tier Architecture:</strong></p>
        <p>In One- Tier Architecture the database is directly available to the user, the user can directly sit on the DBMS and use it i.e.; the client, server and the Database all present on the same machine. For Example- To learn SQL we setup SQL server and the database on the local system. This enable us to directly interact with the relational database and execute operation. Industry won&rsquo;t use this architecture they logically go for 2-Tier and 3-Tier Architecture.</p>
        <p><strong>Two-tier architecture:</strong>&nbsp;<br>The two-tier architecture is similar to a basic&nbsp;<strong>client-server</strong> model. The application at the client end directly communicates with the database at the server-side. APIs like ODBC, JDBC are used for this interaction. The server side is responsible for providing query processing and transaction management functionalities. On the client-side, the user interfaces and application programs are run. The application on the client-side establishes a connection with the server-side in order to communicate with the DBMS.&nbsp;<br>An advantage of this type is that maintenance and understanding are easier, compatible with existing systems. However, this model gives poor performance when there are a large number of users.&nbsp;</p>
        <div><br></div>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/33-3.png" alt=""></p>
        <p><strong>Three Tier architecture:</strong>&nbsp;<br>In this type, there is another layer between the client and the server. The client does not directly communicate with the server. Instead, it interacts with an application server which further communicates with the database system and then the query processing and transaction management takes place. This intermediate layer acts as a medium for the exchange of partially processed data between server and client. This type of architecture is used in the case of large web applications.&nbsp;<br><strong>Advantages:</strong>&nbsp;<br>&nbsp;</p>
        <ul>
            <li><strong>Enhanced scalability</strong> due to distributed deployment of application servers. Now, individual connections need not be made between client and server.</li>
            <li><strong>Data Integrity</strong> is maintained. Since there is a middle layer between client and server, data corruption can be avoided/removed.</li>
            <li><strong>Security</strong> is improved. This type of model prevents direct interaction of the client with the server thereby reducing access to unauthorized data.</li>
        </ul>
        <p><strong>Disadvantages</strong>:&nbsp;<br>Increased complexity of implementation and communication. It becomes difficult for this sort of interaction to take place due to the presence of middle layers.&nbsp;</p>
        <p><strong>Three-TierArchitecture</strong>&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/34-1.png" alt=""></p>`
    },

    {
        topic: " Need for DBMS",
        content: `<p>A&nbsp;<strong>D</strong>ata&nbsp;<strong>B</strong>ase&nbsp;<strong>M</strong>anagement&nbsp;<strong>S</strong>ystem is a system software for easy, efficient and reliable data processing and management. It can be used for:</p>
        <ul>
            <li>Creation of a database.</li>
            <li>Retrieval of information from the database.</li>
            <li>Updating the database.</li>
            <li>Managing a database.<p>It provides us with the many functionalities and is more advantageous than the traditional file system in many ways listed below:</p>
                <p><strong>1) Processing Queries and Object Management</strong>:<br>In traditional file systems, we cannot store data in the form of objects. In practical-world applications, data is stored in objects and not files. So in a file system, some application software maps the data stored in files to objects so that can be used further.<br>We can directly store data in the form of objects in a database management system. Application level code needs to be written to handle, store and scan through the data in a file system whereas a DBMS gives us the ability to query the database.</p>
                <p><strong>2) Controlling redundancy and inconsistency:</strong><br>Redundancy refers to repeated instances of the same data. A database system provides redundancy control whereas in a file system, same data may be stored multiple times. For example, if a student is studying two different educational programs in the same college, say ,Engineering and History, then his information such as the phone number and address may be stored multiple times, once in Engineering dept and the other in History dept. Therefore, it increases time taken to access and store data. This may also lead to inconsistent data states in both places. A DBMS uses&nbsp;<strong>data normalization</strong> to avoid redundancy and duplicates.</p>
                <p><strong>3) Efficient memory management and indexing:</strong><br>DBMS makes complex memory management easy to handle. In file systems, files are indexed in place of objects so query operations require entire file scans whereas in a DBMS , object indexing takes place efficiently through database schema based on any attribute of the data or a data-property. This helps in fast retrieval of data based on the indexed attribute.</p>
                <div><br></div>
                <p><strong>4) Concurrency control and transaction management:</strong><br>Several applications allow user to simultaneously access data. This may lead to inconsistency in data in case files are used. Consider two withdrawal transactions X and Y in which an amount of 100 and 200 is withdrawn from an account A initially containing 1000. Now since these transactions are taking place simultaneously, different transactions may update the account differently. X reads 1000, debits 100, updates the account A to 900, whereas Y also reads 1000, debits 200, updates A to 800. In both cases account A has wrong information. This results in data inconsistency. A DBMS provides mechanisms to deal with this kind of data inconsistency while allowing users to access data concurrently. A DBMS implements&nbsp;<a href="https://www.geeksforgeeks.org/acid-properties-in-dbms/">ACID</a>(atomicity, durability, isolation,consistency) properties to ensure efficient transaction management without data corruption.</p>
                <p><strong>5) Access Control and ease in accessing data:</strong><br>A DBMS can grant access to various users and determine which part and how much of the data can they access from the database thus removing redundancy. Otherwise in file system, separate files have to be created for each user containing the amount of data that they can access. Moreover, if a user has to extract specific data, then he needs a code/application to process that task in case of file system, e.g. Suppose a manager needs a list of all employees having salary greater than X. Then we need to write business logic for the same in case data is stored in files. In case of DBMS, it provides easy access of data through queries, (e.g.,&nbsp;<strong>SELECT</strong> queries) and whole logic need not be rewritten. Users can specify exactly what they want to extract out of the data.</p>
                <p><strong>6) Integrity constraints:</strong> Data stored in databases must satisfy integrity constraints. For example, Consider a database schema consisting of the various educational programs offered by a university such as(B.Tech/M.Tech/B.Sc/M.Sc/BCA/MCA) etc. Then we have a schema of students enrolled in these programs. A DBMS ensures that it is only out of one of the programs offered schema , that the student is enrolled in, i.e. Not anything out of the blue. Hence, database integrity is preserved.</p>
                <p>Apart from the above mentioned features a database management also provides the following:</p>
                <ul>
                    <li><strong>Multiple User Interface</strong></li>
                    <li><strong>Data scalability, expandability and flexibility</strong>: We can change schema of the database, all schema will be updated according to it.</li>
                    <li>Overall the time for developing an application is reduced.</li>
                    <li><strong>Security:</strong> Simplifies data storage as it is possible to assign security permissions allowing restricted access to data.</li>
                </ul>
            </li>
        </ul>`
    },
    {
        topic: " Advantages of DBMS over File system",
        content: `<p><strong>File System:&nbsp;</strong>A File Management system is a DBMS that allows access to single files or tables at a time. In a File System, data is directly stored in set of files. It contains flat files that have no relation to other files (when only one table is stored in single file, then this file is known as flat file).&nbsp;</p>
        <p><strong>DBMS:&nbsp;</strong>A Database Management System (DBMS) is a application software that allows users to efficiently define, create, maintain and share databases. Defining a database involves specifying the data types, structures and constraints of the data to be stored in the database. Creating a database involves storing the data on some storage medium that is controlled by DBMS. Maintaining a database involves updating the database whenever required to evolve and reflect changes in the miniworld and also generating reports for each change. Sharing a database involves allowing multiple users to access the database. DBMS also serves as an interface between the database and end users or application programs. It provides control access to the data and ensures that data is consistent and correct by defining rules on them.&nbsp;</p>
        <p>An application program accesses the database by sending queries or requests for data to the DBMS. A query causes some data to be retrieved from database.&nbsp;</p>
        <h3>Advantages of DBMS over File system:&nbsp;</h3>
        <ul>
            <li><strong>Data redundancy and inconsistency:&nbsp;</strong>Redundancy is the concept of repetition of data i.e. each data may have more than a single copy. The file system cannot control the redundancy of data as each user defines and maintains the needed files for a specific application to run. There may be a possibility that two users are maintaining the data of the same file for different applications. Hence changes made by one user do not reflect in files used by second users, which leads to inconsistency of data. Whereas DBMS controls redundancy by maintaining a single repository of data that is defined once and is accessed by many users. As there is no or less redundancy, data remains consistent.</li>
            <li><strong>Data sharing:&nbsp;</strong>The file system does not allow sharing of data or sharing is too complex. Whereas in DBMS, data can be shared easily due to a centralized system.</li>
            <li><strong>Data concurrency:&nbsp;</strong>Concurrent access to data means more than one user is accessing the same data at the same time. Anomalies occur when changes made by one user get lost because of changes made by another user. The file system does not provide any procedure to stop anomalies. Whereas DBMS provides a locking system to stop anomalies to occur.</li>
            <li><strong>Data searching:&nbsp;</strong>For every search operation performed on the file system, a different application program has to be written. While DBMS provides inbuilt searching operations. The user only has to write a small query to retrieve data from the database.</li>
            <li><strong>Data integrity:&nbsp;</strong>There may be cases when some constraints need to be applied to the data before inserting it into the database. The file system does not provide any procedure to check these constraints automatically. Whereas DBMS maintains data integrity by enforcing user-defined constraints on data by itself.</li>
            <li><strong>System crashing:&nbsp;</strong>In some cases, systems might have crashed due to various reasons. It is a bane in the case of file systems because once the system crashes, there will be no recovery of the data that&rsquo;s been lost. A DBMS will have the recovery manager which retrieves the data making it another advantage over file systems.&nbsp;</li>
            <li><strong>Data security:&nbsp;</strong>A file system provides a password mechanism to protect the database but how long can the password be protected? No one can guarantee that. This doesn&rsquo;t happen in the case of DBMS. DBMS has specialized features that help provide shielding to its data.&nbsp;</li>
            <li><strong>Backup:&nbsp;</strong>It creates a backup subsystem to restore the data if required.</li>
            <li><strong>Interfaces</strong>: It provides different multiple user interfaces like graphical user interface and application program interface.</li>
            <li><strong>Easy Maintenance</strong>: It is easily maintainable due to its centralized nature.</li>
        </ul>
        <p>DBMS is continuously evolving from time to time. It is a power tool for data storage and protection. In the coming years, we will get to witness an AI-based DBMS to retrieve databases of ancient eras.&nbsp;</p>
        <p><br></p>`
    },

    {
        topic: "Economic factors (Choice of DBMS)",
        content: `<p>Basically, the choice of a DBMS is governed by a number of factors such as:&nbsp;<br>&nbsp;</p>
        <ol>
            <li>Technical&nbsp;<br>&nbsp;</li>
            <li>Economics&nbsp;<br>&nbsp;</li>
            <li>Politics of Organization&nbsp;<br>&nbsp;</li>
        </ol>
        <p>Here we will basically discuss Non-technical factors which include the financial status and the support organization of the vendor. In this article, we will concentrate on discussing the economic and organizational factors that affect the choice of DBMS. Following cost are considered while choosing a DBMS these are as follows:&nbsp;</p>
        <p>&nbsp;</p>
        <ul>
            <li><strong>Software acquisition cost &ndash;</strong>&nbsp;<br>This is basically the up-front cost of software or buying cost of software including language options, different types of interfaces. The correct DBMS version for a specific OS must be selected. Basically, the Development tools, design tools, and additional language support are not included in basic pricing.&nbsp;<p>&nbsp;</p>
            </li>
            <li><strong>Maintenance cost &ndash;</strong>&nbsp;<br>This is basically the recurring cost of receiving standard maintenance service from the vendor and to keep the DBMS version up-to-date.&nbsp;<p>&nbsp;</p>
            </li>
            <li><strong>Hardware acquisition cost &ndash;</strong>&nbsp;<br>We may need hardware components such as memory, disk drives, controllers, archival storage etc cost of all these also we need to consider while choosing a DBMS.&nbsp;<p>&nbsp;</p>
            </li>
            <li><strong>Personal cost &ndash;</strong>&nbsp;<br>Acquisition of DBMS software for the first time by an organization is often accompanied by a reorganization of the data processing department. The position of DBA and staff exist in most companies and that have adopted DBMS.&nbsp;<p>&nbsp;</p>
            </li>
            <li><strong>Training cost &ndash;</strong>&nbsp;<br>DBMS are often complex systems personal must often be trained to use and program for DBMS. Training is required at all levels which include programming, application development and database administration.&nbsp;<p>&nbsp;</p>
            </li>
            <li><strong>Operating cost &ndash;</strong>&nbsp;<br>Cost of operating database also needs to be considered while choosing DBMS.&nbsp;<p>&nbsp;</p>
            </li>
        </ul>
        <p>&nbsp;</p>
        <div><br></div>`
    },
    {
        topic: "Data Abstraction and Data Independence",
        content: `<p>Database systems comprise complex data-structures. In order to make the system efficient in terms of retrieval of data, and reduce complexity in terms of usability of users, developers use abstraction i.e. hide irrelevant details from the users. This approach simplifies database design.&nbsp;</p>
        <p>There are mainly&nbsp;<strong>3&nbsp;</strong>levels of data abstraction:&nbsp;</p>
        <p><strong>Physical</strong>: This is the lowest level of data abstraction. It tells us how the data is actually stored in memory. The access methods like sequential or random access and file organization methods like B+ trees, hashing used for the same. Usability, size of memory, and the number of times the records are factors that we need to know while designing the database.&nbsp;<br>Suppose we need to store the details of an employee. Blocks of storage and the amount of memory used for these purposes are kept hidden from the user.&nbsp;</p>
        <p><strong>Logical</strong>: This level comprises the information that is actually stored in the database in the form of tables. It also stores the relationship among the data entities in relatively simple structures. At this level, the information available to the user at the view level is unknown.&nbsp;<br>We can store the various attributes of an employee and relationships, e.g. with the manager can also be stored.&nbsp;</p>
        <p><strong>View</strong>: This is the highest level of abstraction. Only a part of the actual database is viewed by the users. This level exists to ease the accessibility of the database by an individual user. Users view data in the form of rows and columns. Tables and relations are used to store data. Multiple views of the same database may exist. Users can just view the data and interact with the database, storage and implementation details are hidden from them.&nbsp;</p>
        <div><br></div>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/13-1.png" alt=""></p>
        <p>The main purpose of data abstraction is to achieve data independence in order to save time and cost required when the database is modified or altered.&nbsp;<br>We have namely two levels of data independence arising from these levels of abstraction :&nbsp;</p>
        <p><strong>Physical level data independence</strong>: It refers to the characteristic of being able to modify the physical schema without any alterations to the conceptual or logical schema, done for optimization purposes, e.g., Conceptual structure of the database would not be affected by any change in storage size of the database system server. Changing from sequential to random access files is one such example. These alterations or modifications to the physical structure may include:&nbsp;<br>&nbsp;</p>
        <ul>
            <li>Utilizing new storage devices.</li>
            <li>Modifying data structures used for storage.</li>
            <li>Altering indexes or using alternative file organization techniques etc.</li>
        </ul>
        <p><strong>Logical level data independence:</strong> It refers characteristic of being able to modify the logical schema without affecting the external schema or application program. The user view of the data would not be affected by any changes to the conceptual view of the data. These changes may include insertion or deletion of attributes, altering table structures entities or relationships to the logical schema, etc.&nbsp;</p>
        `
    },
    {
        content: `<h1 class="h1">ER model</h1>
        <ul class="points">
        <li>ER model stands for an Entity-Relationship model. It is a high-level data model. This model is used to define the data elements and relationship for a specified system.</li>
        <li>It develops a conceptual design for the database. It also develops a very simple and easy to design view of data.</li>
        <li>In ER modeling, the database structure is portrayed as a diagram called an entity-relationship diagram.</li>
        </ul>
        <p><strong>For example,</strong>&nbsp;Suppose we design a school database. In this database, the student will be an entity with attributes like address, name, id, age, etc. The address can be another entity with attributes like city, street name, pin code, etc and there will be a relationship between them.</p>
        <h1><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept.png" alt="DBMS ER model concept" /></h1>
        <h2 class="h2">Component of ER Diagram</h2>
        <h1><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept-diagram.png" alt="DBMS ER model concept" /></h1>
        <h3 class="h3">1. Entity:</h3>
        <p>An entity may be any object, class, person or place. In the ER diagram, an entity can be represented as rectangles.</p>
        <p>Consider an organization as an example- manager, product, employee, department etc. can be taken as an entity.</p>
        <h1><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept2.png" alt="DBMS ER model concept" /></h1>
        <p><strong>a. Weak Entity</strong></p>
        <p>An entity that depends on another entity called a weak entity. The weak entity doesn't contain any key attribute of its own. The weak entity is represented by a double rectangle.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept3.png" alt="DBMS ER model concept" /><br /></strong></p>
        <h3 class="h3">2. Attribute</h3>
        <p>The attribute is used to describe the property of an entity. Eclipse is used to represent an attribute.</p>
        <p><strong>For example,</strong>&nbsp;id, age, contact number, name, etc. can be attributes of a student.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept4.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>a. Key Attribute</strong></p>
        <p>The key attribute is used to represent the main characteristics of an entity. It represents a primary key. The key attribute is represented by an ellipse with the text underlined.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept5.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>b. Composite Attribute</strong></p>
        <p>An attribute that composed of many other attributes is known as a composite attribute. The composite attribute is represented by an ellipse, and those ellipses are connected with an ellipse.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept6.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>c. Multivalued Attribute</strong></p>
        <p>An attribute can have more than one value. These attributes are known as a multivalued attribute. The double oval is used to represent multivalued attribute.</p>
        <p><strong>For example,</strong>&nbsp;a student can have more than one phone number.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept7.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>d. Derived Attribute</strong></p>
        <p>An attribute that can be derived from other attribute is known as a derived attribute. It can be represented by a dashed ellipse.</p>
        <p><strong>For example,</strong>&nbsp;A person's age changes over time and can be derived from another attribute like Date of birth.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept8.png" alt="DBMS ER model concept" /><br /></strong></p>
        <h3 class="h3">3. Relationship</h3>
        <p>A relationship is used to describe the relation between entities. Diamond or rhombus is used to represent the relationship.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept9.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p>Types of relationship are as follows:</p>
        <p><strong>a. One-to-One Relationship</strong></p>
        <p>When only one instance of an entity is associated with the relationship, then it is known as one to one relationship.</p>
        <p><strong>For example,</strong>&nbsp;A female can marry to one male, and a male can marry to one female.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept10.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>b. One-to-many relationship</strong></p>
        <p>When only one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then this is known as a one-to-many relationship.</p>
        <p><strong>For example,</strong>&nbsp;Scientist can invent many inventions, but the invention is done by the only specific scientist.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept11.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>c. Many-to-one relationship</strong></p>
        <p>When more than one instance of the entity on the left, and only one instance of an entity on the right associates with the relationship then it is known as a many-to-one relationship.</p>
        <p><strong>For example,</strong>&nbsp;Student enrolls for only one course, but a course can have many students.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept12.png" alt="DBMS ER model concept" /><br /></strong></p>
        <p><strong>d. Many-to-many relationship</strong></p>
        <p>When more than one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then it is known as a many-to-many relationship.</p>
        <p><strong>For example,</strong>&nbsp;Employee can assign by many projects and project can have many employees.</p>
        <p><strong><br /><img src="https://static.javatpoint.com/dbms/images/dbms-er-model-concept13.png" alt="DBMS ER model concept" /><br /></strong></p>`,
        topic: "Introduction of ER Model"
    },
    {
        content: `<p>A relationship between two entities of a similar entity type is called a <strong>recursive</strong> relationship. Here the same entity type participates more than once in a relationship type with a different role for each instance. In other words, a relationship has always been between occurrences in two different entities. However, the same entity can participate in the relationship. This is termed a <strong>recursive</strong> relationship.&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/DBMS.jpg"></p>
        <p><strong>Example &ndash;</strong>&nbsp;<br>Let us suppose that we have an employee table. A manager supervises a subordinate. Every employee can have a supervisor except the CEO and there can be at most one boss for each employee. One employee may be the boss of more than one employee. Let&rsquo;s suppose that REPORTS_TO is a recursive relationship on the Employee entity type where each Employee plays two roles.</p>
        <ol>
            <li>Supervisor</li>
            <li>Subordinate<p>&nbsp;</p>
            </li>
        </ol>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/dbms2.jpg"></p>
        <div><br></div>
        <p>Supervisors and subordinates are called&nbsp;<strong>&ldquo;Role Names&rdquo;</strong>. Here the degree of the REPORTS_TO relationship is 1 i.e. a unary relationship.&nbsp;<br>&nbsp;</p>
        <ul>
            <li>The minimum cardinality of the Supervisor entity is ZERO since the lowest level employee may not be a manager for anyone.</li>
            <li>The maximum cardinality of the Supervisor entity is N since an employee can manage many employees.</li>
            <li>Similarly, the Subordinate entity has a minimum cardinality of ZERO to account for the case where CEO can never be a subordinate.</li>
            <li>Its maximum cardinality is ONE since a subordinate employee can have at most one supervisor.</li>
        </ul>
        <p><strong>Note &ndash;</strong> Here none of the participants have total participation since both minimum cardinalities are Zero. Hence, the relationships are connected by a single line instead of a double line in the ER diagram.&nbsp;</p>
        <p>To implement a recursive relationship, a foreign key of the employee&rsquo;s manager number would be held in each employee record. A Sample table would look something like this:-&nbsp;</p>
        <pre>Emp_entity( Emp_no,Emp_Fname, Emp_Lname, Emp_DOB, Emp_NI_Number, Manager_no);
        
        Manager no - (this is the employee no of the employee&apos;s manager)</pre>
        <p><br></p>`,
        topic: "Recursive Relationships in ER diagrams"
    },
    {
        topic: "Minimization of ER Diagrams",
        content: `<p>Entity-Relationship (ER) Diagram is a diagrammatic representation of data in databases, it shows how data is related.&nbsp;</p>
        <p>Note: This article is for those who already know what is ER diagram and how to draw ER diagram.&nbsp;</p>
        <p><strong>1) When there are Many to One&nbsp;</strong>cardinalities<strong>&nbsp;in&nbsp;</strong>the&nbsp;<strong>ER diagram.</strong>&nbsp;<br>For example, a student can be enrolled only in one course, but a course can be enrolled by many students.</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/many2one-300x115.png" alt="many2one"></p>
        <div><br></div>
        <p>For Student(SID, Name), SID is the primary key. &nbsp;For Course(CID, C_name ), CID is the primary key&nbsp;<br>&nbsp;</p>
        <pre>           Student                           Course 
                (SID   Name)                    ( CID   C_name )
                --------------                  -----------------
                  1      A                        c1      Z
                  2      B                        c2      Y
                  3      C                        c3      X
                  4      D
        
                      Enroll 
                    (SID   CID)
                     ----------
                     1       C1
                     2       C1
                     3       c3
                     4       C2</pre>
        <p>Now the question is, what should be the primary key for Enroll? Should it be SID or CID or both combined into one. We can&rsquo;t have CID as the primary key because a CID can have multiple SIDs. (SID, CID) can distinguish table uniquely, but it is not minimum. &nbsp;So SID is the primary key for the relation enrollment.&nbsp;</p>
        <p>For the above ER diagram, we considered three tables in the database&nbsp;<br>&nbsp;</p>
        <pre>Student 
        Enroll
        Course</pre>
        <p>But we can combine Student and Enroll table renamed as Student_enroll.&nbsp;<br>&nbsp;</p>
        <pre>                 Student_Enroll 
                        ( SID   Name   CID )
                        ---------------------
                          1      A      c1
                          2      B      c1
                          3      C      c3
                          4      D      c2</pre>
        <p>Student and enroll tables are merged now.&nbsp;</p>
        <p>So require a minimum of two DBMS tables for Student_enroll and Course.&nbsp;</p>
        <p><strong>Note:&nbsp;</strong>In One to Many relationships we can have a minimum of two tables.&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p><strong>2. When there</strong> <strong>are Many to Many cardinalities in ER Diagram.</strong>&nbsp;<br>Let us consider the above example with the change that now a student can enroll in more than 1 course.&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/many2many-300x115.png" alt="many2many"></p>
        <p>&nbsp;</p>
        <pre>  Student                            Course
        ( SID   Name)                    ( CID   C_name )
        --------------                  -----------------
           1      A                        c1      Z
           2      B                        c2      Y
           3      C                        c3      X
           4      D
        
                      Enroll 
                   ( SID   CID )
                     ----------
                     1       C1
                     1       C2
                     2       C1
                     2       C2
                     3       c3
                     4       C2</pre>
        <p>Now, the same question arises. What is the primary key of Enroll relation? If we carefully analyze, the primary key for Enroll table is ( SID, CID ).&nbsp;</p>
        <p>But in this case, we can&rsquo;t merge Enroll table with any one of the Student and Course. If we try to merge Enroll with any one of the Student and Course it will create redundant data.&nbsp;</p>
        <p><strong>Note:</strong> Minimum of three tables are required in the Many to Many relationships.&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p><strong>3. One to One Relationship</strong>&nbsp;</p>
        <p>There are two possibilities&nbsp;<br><strong>A) If we have One to One relationship and we have total participation at at-least one end.</strong>&nbsp;</p>
        <p>For example, consider the below ER diagram.&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/one2oneT1-300x115.png" alt="one2oneT"></p>
        <p>A1 and B1 are primary keys of E1 and E2 respectively.&nbsp;</p>
        <p>In the above diagram, we have total participation at the E1 end.&nbsp;</p>
        <p>Only a single table is required in this case having the primary key of E1 as its primary key.&nbsp;</p>
        <p>Since E1 is in total participation, each entry in E1 is related to only one entry in E2, but not all entries in E2 are related to an entry in E1.&nbsp;</p>
        <p>The primary key of E1 should be allowed as the primary key of the reduced table since if the primary key of E2 is used, it might have null values for many of its entries in the reduced table.&nbsp;</p>
        <p><strong>Note:</strong> Only 1 table required.&nbsp;</p>
        <p>&nbsp;&nbsp;</p>
        <p><strong>B) One to One relationship with no total participation.</strong>&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2015/07/one2one-300x115.png" alt="one2one"></p>
        <p>A1 and B1 are primary keys of E1 and E2 respectively.&nbsp;</p>
        <p>The primary key of R can be A1 or B1, but we can&rsquo;t still combine all three tables into one. if we do so, some entries in the combined table may have NULL entries. So the idea of merging all three tables into one is not good.&nbsp;</p>
        <p>But we can merge R into E1 or E2. &nbsp;So a minimum of 2 tables is required.&nbsp;</p>`
    },
    {
        topic: "Enhanced ER Model",
        content: `
        <p>Today the complexity of the data is increasing so it becomes more and more difficult to use the traditional ER model for database modeling. To reduce this complexity of modeling we have to make improvements or enhancements to the existing ER model to make it able to handle the complex application in a better way.&nbsp;<br>Enhanced entity-relationship diagrams are advanced database diagrams very similar to regular ER diagrams which represent requirements and complexities of complex databases.&nbsp;<br>It is a diagrammatic technique for displaying the Sub Class and Super Class; Specialization and Generalization; Union or Category; Aggregation etc.&nbsp;</p>
        <p><strong>Generalization and Specialization &ndash;</strong>&nbsp;<br>These are very common relationships found in real entities. However, this kind of relationship was added later as an enhanced extension to the classical ER model. <strong>Specialized&nbsp;</strong>classes are often called <strong>subclass</strong> while a <strong>generalized class</strong> is called a superclass, probably inspired by object-oriented programming. A sub-class is best understood by <strong>&ldquo;IS-A analysis&rdquo;</strong>. Following statements hopefully makes some sense to your mind &ldquo;Technician IS-A Employee&rdquo;, &ldquo;Laptop IS-A Computer&rdquo;.&nbsp;</p>
        <p>An entity is a specialized type/class of another entity. For example, a Technician is a special Employee in a university system Faculty is a special class of Employees. We call this phenomenon generalization/specialization. In the example here Employee is a generalized entity class while the Technician and Faculty are specialized classes of Employee.&nbsp;</p>
        <p><strong>Example &ndash;</strong> This example instance of <strong>&ldquo;sub-class&rdquo;</strong> relationships. Here we have four sets of employees: Secretary, Technician, and Engineer. The employee is super-class of the rest three sets of individual sub-class is a subset of Employee set.&nbsp;</p>
        <p>&nbsp;</p>
        <div><br></div>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Enhanced-ER-Model-Diagram.png" alt="Enhanced-ER-Model-Diagram"></p>
        <p>&nbsp;</p>
        <ul>
            <li>An entity belonging to a sub-class is related to some super-class entity. For instance emp, no 1001 is a secretary, and his typing speed is 68. Emp no 1009 is an engineer (sub-class) and her trade is &ldquo;Electrical&rdquo;, so forth.</li>
            <li>Sub-class entity &ldquo;inherits&rdquo; all attributes of super-class; for example, employee 1001 will have attributes eno, name, salary, and typing speed.</li>
        </ul>
        <p><strong>Enhanced ER model of above example &ndash;</strong>&nbsp;<br>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Enhanced-ER-Model-Diagram-1.png" alt="Enhanced-ER-Model-Diagram"></p>
        <p><strong>Constraints &ndash;</strong> There are two types of constraints on the &ldquo;Sub-class&rdquo; relationship.&nbsp;<br>&nbsp;</p>
        <ol>
            <li><strong>Total or Partial &ndash;</strong> A sub-classing relationship is total if every super-class entity is to be associated with some sub-class entity, otherwise partial. Sub-class &ldquo;job type based employee category&rdquo; is partial sub-classing &ndash; not necessary every employee is one of (secretary, engineer, and technician), i.e. union of these three types is a proper subset of all employees. Whereas other sub-classing &ldquo;Salaried Employee AND Hourly Employee&rdquo; is total; the union of entities from sub-classes is equal to the total employee set, i.e. every employee necessarily has to be one of them.</li>
            <li><strong>Overlapped or Disjoint &ndash;&nbsp;</strong>If an entity from super-set can be related (can occur) in multiple sub-class sets, then it is overlapped sub-classing, otherwise disjoint. Both the examples: job-type based and salaries/hourly employee sub-classing are disjoint.</li>
        </ol>
        <p><strong>Note &ndash;</strong> These constraints are independent of each other: can be &ldquo;overlapped and total or partial&rdquo; or &ldquo;disjoint and total or partial&rdquo;. Also, sub-classing has transitive properties.&nbsp;</p>
        <p><strong>Multiple Inheritance (sub-class of multiple&nbsp;</strong>superclasses<strong>) &ndash;</strong>&nbsp;<br>An entity can be a sub-class of multiple entity types; such entities are sub-class of multiple entities and have multiple super-classes; Teaching Assistant can subclass of Employee and Student both. A faculty in a university system can be a subclass of Employee and Alumnus. In multiple inheritances, attributes of sub-class are the union of attributes of all super-classes.&nbsp;</p>
        <p><strong>Union &ndash;&nbsp;</strong><br>&nbsp;</p>
        <ul>
            <li>Set of Library Members is <strong>UNION</strong> of Faculty, Student, and Staff. A union relationship indicates either type; for example, a library member is either Faculty or Staff or Student.</li>
            <li>Below are two examples that show how <strong>UNION</strong> can be depicted in ERD &ndash; Vehicle Owner is UNION of PERSON and Company, and RTO Registered Vehicle is UNION of Car and Truck.</li>
        </ul>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Enhanced-ER-Model-Diagram-2.png" alt="Enhanced-ER-Model-Diagram"></p>
        <p>You might see some confusion in Sub-class and UNION; consider an example in above figure Vehicle is super-class of CAR and Truck; this is very much the correct example of the subclass as well but here use it differently we are saying RTO Registered vehicle is UNION of Car and Vehicle, they do not inherit any attribute of Vehicle, attributes of car and truck are altogether independent set, where is in sub-classing situation car and truck would be inheriting the attribute of vehicle class.&nbsp;</p>
        <p><br></p>
        <p><br></p>`
    },
    {
        content: `<p>After designing the ER diagram of system, we need to convert it to Relational models which can directly be implemented by any RDBMS like Oracle, MySQL etc. &nbsp;In this article we will discuss how to convert ER diagram to Relational Model for different scenarios.&nbsp;</p>
        <p><strong>Case 1: &nbsp;Binary Relationship with 1:1 cardinality with total participation of an entity</strong>&nbsp;</p>
        <div><br></div>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Binary-Relationship-with-1_1-cardinality-with-total-participation-of-an-entity.png" alt="erm1"></p>
        <p>A person has 0 or 1 passport number and Passport is always owned by 1 person. So it is 1:1 cardinality with full participation constraint from Passport.&nbsp;</p>
        <p><strong>First Convert each entity and relationship to tables.</strong>&nbsp; Person table corresponds to Person Entity with key as Per-Id. Similarly Passport table corresponds to Passport Entity with key as Pass-No. HashTable represents relationship between Person and Passport (Which person has which passport). So it will take attribute Per-Id from Person and Pass-No from Passport.&nbsp;</p>
        <p>&nbsp;&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td colspan="2"><strong>Person</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Has</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Passport</strong></td>
                    </tr>
                    <tr>
                        <td><strong><u>Per-Id</u></strong></td>
                        <td><strong>Other Person Attribute</strong></td>
                        <td><strong><u>Per-Id</u></strong></td>
                        <td><strong>Pass-No</strong></td>
                        <td><strong><u>Pass-No</u></strong></td>
                        <td><strong>Other PassportAttribute</strong></td>
                    </tr>
                    <tr>
                        <td>PR1</td>
                        <td>&ndash;</td>
                        <td>PR1</td>
                        <td>PS1</td>
                        <td>PS1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>PR2</td>
                        <td>&ndash;</td>
                        <td>PR2</td>
                        <td>PS2</td>
                        <td>PS2</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>PR3</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Table 1 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></p>
        <p>As we can see from Table 1, each Per-Id and Pass-No has only one entry in&nbsp;<strong>Hash</strong>table. So we can merge all three tables into 1 with attributes shown in Table 2. Each Per-Id will be unique and not null. So it will be the key. Pass-No can&rsquo;t be key because for some person, it can be NULL.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>Per-Id</u></td>
                        <td>Other Person Attribute</td>
                        <td>Pass-No</td>
                        <td>Other PassportAttribute</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 2</strong></p>
        <p><strong>Case 2: Binary Relationship with 1:1 cardinality and partial participation of both entities</strong>&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Binary-Relationship-with-1_1-cardinality-and-partial-participation-of-both-entities.png" alt="erm2"></p>
        <p>A male marries 0 or 1 female and vice versa as well. So it is 1:1 cardinality with partial participation constraint from both. First Convert each entity and relationship to tables. &nbsp;Male table corresponds to Male Entity with key as M-Id. Similarly Female table corresponds to Female Entity with key as F-Id. Marry Table represents relationship between Male and Female (Which Male marries which female). So it will take attribute M-Id from Male and F-Id from Female.&nbsp;</p>
        <p>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td colspan="2"><strong>Male</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Marry</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Female</strong></td>
                    </tr>
                    <tr>
                        <td><u>M-Id</u></td>
                        <td>Other Male Attribute</td>
                        <td><u>M-Id</u></td>
                        <td>F-Id</td>
                        <td><u>F-Id</u></td>
                        <td>Other FemaleAttribute</td>
                    </tr>
                    <tr>
                        <td>M1</td>
                        <td>&ndash;</td>
                        <td>M1</td>
                        <td>F2</td>
                        <td>F1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>M2</td>
                        <td>&ndash;</td>
                        <td>M2</td>
                        <td>F1</td>
                        <td>F2</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>M3</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>F3</td>
                        <td>&ndash;</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 3</strong></p>
        <p>As we can see from Table 3, some males and some females do not marry. If we merge 3 tables into 1, for some M-Id, F-Id will be NULL. So there is no attribute which is always not NULL. So we can&rsquo;t merge all three tables into 1. We can convert into 2 tables. In table 4, M-Id who are married will have F-Id associated. For others, it will be NULL. Table 5 will have information of all females. Primary Keys have been underlined.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>M-Id</u></td>
                        <td>Other Male Attribute</td>
                        <td>F-Id</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>&nbsp;Table 4 &nbsp;&nbsp;</strong></p>
        <p>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>F-Id</u></td>
                        <td>Other FemaleAttribute</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Table 5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong></p>
        <p><strong>Note:</strong> Binary relationship with 1:1 cardinality will have 2 table if partial participation of both entities in the relationship. If atleast 1 entity has total participation, number of tables required will be 1.&nbsp;</p>
        <p><strong>Case 3: Binary Relationship with n: 1 cardinality</strong>&nbsp;</p>
        <p>&nbsp;</p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Binary-Relationship-with-n_-1-cardinality.png" alt="erm3"></p>
        <p>In this scenario, every student can enroll only in one elective course but for an elective course there can be more than one student. First Convert each entity and relationship to tables. &nbsp;Student table corresponds to Student Entity with key as S-Id. Similarly Elective_Course table corresponds to Elective_Course Entity with key as E-Id. Enrolls Table represents relationship between Student and Elective_Course (Which student enrolls in which course). So it will take attribute S-Id from and Student E-Id from Elective_Course.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td colspan="2"><strong>Student</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Enrolls</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Elective_Course</strong></td>
                    </tr>
                    <tr>
                        <td><u>S-Id</u></td>
                        <td>Other Student Attribute</td>
                        <td><u>S-Id</u></td>
                        <td>E-Id</td>
                        <td><u>E-Id</u></td>
                        <td>Other Elective CourseAttribute</td>
                    </tr>
                    <tr>
                        <td>S1</td>
                        <td>&ndash;</td>
                        <td>S1</td>
                        <td>E1</td>
                        <td>E1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S2</td>
                        <td>&ndash;</td>
                        <td>S2</td>
                        <td>E2</td>
                        <td>E2</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S3</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>S3</td>
                        <td>E1</td>
                        <td>&nbsp;</td>
                        <td>E3</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S4</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>S4</td>
                        <td>E1</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 6</strong></p>
        <p>As we can see from Table 6, S-Id is not repeating in Enrolls Table. So it can be considered as a key of Enrolls table. Both Student and Enrolls Table&rsquo;s key is same; we can merge it as a single table. The resultant tables are shown in Table 7 and Table 8. Primary Keys have been underlined.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>S-Id</u></td>
                        <td>Other Student Attribute</td>
                        <td>E-Id</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 7&nbsp;</strong></p>
        <p>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>E-Id</u></td>
                        <td>Other Elective CourseAttribute</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 8</strong></p>
        <p><strong>Case 4: Binary Relationship with m: n cardinality</strong></p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Binary-Relationship-with-m_-n-cardinality.png" alt="erm4"></p>
        <p>&nbsp;</p>
        <p>In this scenario, every student can enroll in more than 1 compulsory course and for a compulsory course there can be more than 1 student. First Convert each entity and relationship to tables. &nbsp;Student table corresponds to Student Entity with key as S-Id. Similarly Compulsory_Courses table corresponds to Compulsory Courses Entity with key as C-Id. Enrolls Table represents relationship between Student and Compulsory_Courses (Which student enrolls in which course). So it will take attribute S-Id from Person and C-Id from Compulsory_Courses.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td colspan="2"><strong>Student</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Enrolls</strong></td>
                        <td rowspan="4">&nbsp;</td>
                        <td colspan="2"><strong>Compulsory_Courses</strong></td>
                    </tr>
                    <tr>
                        <td><u>S-Id</u></td>
                        <td>Other Student Attribute</td>
                        <td><u>S-Id</u></td>
                        <td><u>C-Id</u></td>
                        <td><u>C-Id</u></td>
                        <td>Other Compulsory CourseAttribute</td>
                    </tr>
                    <tr>
                        <td>S1</td>
                        <td>&ndash;</td>
                        <td>S1</td>
                        <td>C1</td>
                        <td>C1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S2</td>
                        <td>&ndash;</td>
                        <td>S1</td>
                        <td>C2</td>
                        <td>C2</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S3</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>S3</td>
                        <td>C1</td>
                        <td>&nbsp;</td>
                        <td>C3</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>S4</td>
                        <td>&ndash;</td>
                        <td>&nbsp;</td>
                        <td>S4</td>
                        <td>C3</td>
                        <td>&nbsp;</td>
                        <td>C4</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>S4</td>
                        <td>C2</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>S3</td>
                        <td>C3</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 9</strong></p>
        <p>As we can see from Table 9, S-Id and C-Id both are repeating in Enrolls Table. But its combination is unique; so it can be considered as a key of Enrolls table. All tables&rsquo; keys are different, these can&rsquo;t be merged. &nbsp;Primary Keys of all tables have been underlined.&nbsp;</p>
        <p><strong>Case 5: Binary Relationship with weak entity</strong></p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/Binary-Relationship-with-weak-entity.png" alt="erm5"></p>
        <p>&nbsp;</p>
        <p>In this scenario, an employee can have many dependents and one dependent can depend on one employee. A dependent does not have any existence without an employee (e.g; you as a child can be dependent of your father in his company). So it will be a weak entity and its participation will always be total. Weak Entity does not have key of its own. So its key will be combination of key of its identifying entity (E-Id of Employee in this case) and its partial key (D-Name).&nbsp;</p>
        <p>First Convert each entity and relationship to tables. &nbsp;Employee table corresponds to Employee Entity with key as E-Id. Similarly Dependents table corresponds to Dependent Entity with key as &nbsp;D-Name and E-Id. HashTable represents relationship between Employee and Dependents (Which employee has which dependents). So it will take attribute E-Id from Employee and D-Name from Dependents.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td colspan="2"><strong>Employee</strong></td>
                        <td rowspan="6">&nbsp;</td>
                        <td colspan="2"><strong>Has</strong></td>
                        <td rowspan="6">&nbsp;</td>
                        <td colspan="3"><strong>Dependents</strong></td>
                    </tr>
                    <tr>
                        <td><u>E-Id</u></td>
                        <td>Other Employee Attribute</td>
                        <td><u>E-Id</u></td>
                        <td><u>D-Name</u></td>
                        <td><u>D-Name</u></td>
                        <td><u>E-Id</u></td>
                        <td>Other DependentsAttribute</td>
                    </tr>
                    <tr>
                        <td>E1</td>
                        <td>&ndash;</td>
                        <td>E1</td>
                        <td>RAM</td>
                        <td>RAM</td>
                        <td>E1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>E2</td>
                        <td>&ndash;</td>
                        <td>E1</td>
                        <td>SRINI</td>
                        <td>SRINI</td>
                        <td>E1</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>E3</td>
                        <td>&ndash;</td>
                        <td>E2</td>
                        <td>RAM</td>
                        <td>RAM</td>
                        <td>E2</td>
                        <td>&ndash;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>E3</td>
                        <td>ASHISH</td>
                        <td>ASHISH</td>
                        <td>E3</td>
                        <td>&ndash;</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>&nbsp;Table 10</strong></p>
        <p><strong>&nbsp;</strong>As we can see from Table 10, E-Id, D-Name is key for&nbsp;<strong>Has</strong> as well as Dependents Table. So we can merge these two into 1. So the resultant tables are shown in Tables 11 and 12. Primary Keys of all tables have been underlined.&nbsp;<br>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>E-Id</u></td>
                        <td>Other Employee Attribute</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 11</strong></p>
        <p>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><u>D-Name</u></td>
                        <td><u>E-Id</u></td>
                        <td>Other DependentsAttribute</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>&nbsp;</p>
        <p><strong>Table 12</strong></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><br></p>
        <div>
            <p><br></p>
        </div>
        <p><br></p>
        `,
        topic: "Mapping from ER Model to Relational Model"
    },
    {
        topic: "Relational model (relational algebra, tuple calculus)",
        content: `<h3>Relational Model in DBMS</h3>
        <p>Relational Model was proposed by E.F. Codd to model data in the form of relations or tables. After designing the conceptual model of Database using ER diagram, we need to convert the conceptual model in the relational model which can be implemented using any RDBMS languages like Oracle SQL, MySQL etc. So we will see what Relational Model is.</p>
        <p><strong>What is Relational Model?</strong>&nbsp;</p>
        <p>Relational Model represents how data is stored in Relational Databases. &nbsp;A relational database stores data in the form of relations (tables). Consider a relation STUDENT with attributes ROLL_NO, NAME, ADDRESS, PHONE and AGE shown in Table 1.&nbsp;</p>
        <p><strong>STUDENT</strong>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ROLL_NO</strong></td>
                        <td><strong>NAME</strong></td>
                        <td><strong>ADDRESS</strong></td>
                        <td><strong>PHONE</strong></td>
                        <td><strong>AGE</strong></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>RAM</td>
                        <td>DELHI</td>
                        <td>9455123451</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>RAMESH</td>
                        <td>GURGAON</td>
                        <td>9652431543</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SUJIT</td>
                        <td>ROHTAK</td>
                        <td>9156253131</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SURESH</td>
                        <td>DELHI</td>
                        <td>&nbsp;</td>
                        <td>18</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p><strong>&nbsp;IMPORTANT TERMINOLOGIES</strong></p>
        <div><br></div>
        <ul>
            <li><strong>Attribute:</strong> Attributes are the properties that define a relation. e.g.; <strong>ROLL_NO</strong>, <strong>NAME</strong></li>
            <li><strong>Relation Schema:</strong> A relation schema represents name of the relation with its attributes. e.g.; STUDENT (ROLL_NO, NAME, ADDRESS, PHONE and AGE) is relation schema for STUDENT. If a schema has more than 1 relation, it is called Relational Schema.</li>
            <li><strong>Tuple:</strong> Each row in the relation is known as tuple. The above relation contains 4 tuples, one of which is shown as:</li>
        </ul>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>RAM</td>
                        <td>DELHI</td>
                        <td>9455123451</td>
                        <td>18</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <ul>
            <li><strong>Relation Instance:</strong> The set of tuples of a relation at a particular instance of time is called as relation instance. Table 1 shows the relation instance of STUDENT at a particular time. It can change whenever there is insertion, deletion or updation in the database.</li>
            <li><strong>Degree:</strong> The number of attributes in the relation is known as degree of the relation. The <strong>STUDENT</strong> relation defined above has degree 5.</li>
            <li><strong>Cardinality:&nbsp;</strong>The number of tuples in a relation is known as cardinality. The <strong>STUDENT</strong> relation defined above has cardinality 4.</li>
            <li><strong>Column:</strong> Column represents the set of values for a particular attribute. The column <strong>ROLL_NO</strong> is extracted from relation STUDENT.</li>
        </ul>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ROLL_NO</strong></td>
                    </tr>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <ul>
            <li><strong>NULL Values:</strong> The value which is not known or unavailable is called NULL value. It is represented by blank space. e.g.; PHONE of STUDENT having ROLL_NO 4 is NULL.&nbsp;</li>
        </ul>
        <p><strong>Constraints in Relational Model</strong></p>
        <p>While designing Relational Model, we define some conditions which must hold for data present in database are called Constraints. These constraints are checked before performing any operation (insertion, deletion and updation) in database. If there is a violation in any of constrains, operation will fail.&nbsp;</p>
        <p><strong>Domain Constraints:</strong> These are attribute level constraints. An attribute can only take values which lie inside the domain range. e.g,; If a constrains AGE&gt;0 is applied on STUDENT relation, inserting negative value of AGE will result in failure.&nbsp;</p>
        <p><strong>Key Integrity:</strong> Every relation in the database should have atleast one set of attributes which defines a tuple uniquely. Those set of attributes is called key. e.g.; ROLL_NO in STUDENT is a key. No two students can have same roll number. So a key has two properties:&nbsp;</p>
        <ul>
            <li>It should be unique for all tuples.</li>
            <li>It can&rsquo;t have NULL values.</li>
        </ul>
        <p><strong>Referential Integrity:</strong> When one attribute of a relation can only take values from other attribute of same relation or any other relation, it is called referential integrity. Let us suppose we have 2 relations&nbsp;</p>
        <p><strong>STUDENT</strong>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ROLL_NO</strong></td>
                        <td><strong>NAME</strong></td>
                        <td><strong>ADDRESS</strong></td>
                        <td><strong>PHONE</strong></td>
                        <td><strong>AGE</strong></td>
                        <td><strong>BRANCH_CODE</strong></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>RAM</td>
                        <td>DELHI</td>
                        <td>9455123451</td>
                        <td>18</td>
                        <td>CS</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>RAMESH</td>
                        <td>GURGAON</td>
                        <td>9652431543</td>
                        <td>18</td>
                        <td>CS</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SUJIT</td>
                        <td>ROHTAK</td>
                        <td>9156253131</td>
                        <td>20</td>
                        <td>ECE</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SURESH</td>
                        <td>DELHI</td>
                        <td>&nbsp;</td>
                        <td>18</td>
                        <td>IT</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p><strong>&nbsp;BRANCH</strong>&nbsp;</p>
        <figure>
            <table>
                <tbody>
                    <tr>
                        <td><strong>BRANCH_CODE</strong></td>
                        <td>BRANCH_NAME</td>
                    </tr>
                    <tr>
                        <td><strong>CS</strong></td>
                        <td>COMPUTER SCIENCE</td>
                    </tr>
                    <tr>
                        <td><strong>IT</strong></td>
                        <td>INFORMATION TECHNOLOGY</td>
                    </tr>
                    <tr>
                        <td><strong>ECE</strong></td>
                        <td>ELECTRONICS AND COMMUNICATION ENGINEERING</td>
                    </tr>
                    <tr>
                        <td><strong>CV</strong></td>
                        <td>CIVIL ENGINEERING</td>
                    </tr>
                </tbody>
            </table>
        </figure>
        <p>BRANCH_CODE of STUDENT can only take the values which are present in BRANCH_CODE of BRANCH which is called referential integrity constraint. The relation which is referencing to other relation is called REFERENCING RELATION (STUDENT in this case) and the relation to which other relations refer is called REFERENCED RELATION (BRANCH in this case).&nbsp;<br>&nbsp;</p>
        <p><strong>ANOMALIES</strong></p>
        <p>An anomaly is an irregularity, or something which deviates from the expected or normal state. When designing databases, we identify three types of anomalies: Insert, Update and Delete.&nbsp;</p>
        <p><strong>Insertion Anomaly in Referencing Relation:</strong>&nbsp;</p>
        <p>We can&rsquo;t insert a row in REFERENCING RELATION if referencing attribute&rsquo;s value is not present in referenced attribute value. e.g.; Insertion of a student with BRANCH_CODE &lsquo;ME&rsquo; in STUDENT relation will result in error because &lsquo;ME&rsquo; is not present in BRANCH_CODE of BRANCH.&nbsp;</p>
        <p><strong>Deletion/ Updation Anomaly in Referenced Relation:</strong>&nbsp;</p>
        <p>We can&rsquo;t delete or update a row from REFERENCED RELATION if value of REFERENCED ATTRIBUTE is used in value of REFERENCING ATTRIBUTE. e.g; if we try to delete tuple from BRANCH having BRANCH_CODE &lsquo;CS&rsquo;, it will result in error because &lsquo;CS&rsquo; is referenced by BRANCH_CODE of STUDENT, but if we try to delete the row from BRANCH with BRANCH_CODE CV, it will be deleted as the value is not been used by referencing relation. It can be handled by following method:&nbsp;</p>
        <p><strong>ON DELETE CASCADE:</strong> It will delete the tuples from REFERENCING RELATION if &nbsp;value used by REFERENCING ATTRIBUTE is deleted from REFERENCED RELATION. e.g;, if we delete a row from BRANCH with BRANCH_CODE &lsquo;CS&rsquo;, the rows in STUDENT relation with BRANCH_CODE CS (ROLL_NO 1 and 2 in this case) will be deleted.&nbsp;</p>
        <p><strong>ON UPDATE CASCADE:</strong> It will update the REFERENCING ATTRIBUTE in REFERENCING RELATION if attribute value used by REFERENCING ATTRIBUTE is updated in REFERENCED RELATION. e.g;, if we update a row from BRANCH with BRANCH_CODE &lsquo;CS&rsquo; to &lsquo;CSE&rsquo;, the rows in STUDENT relation with BRANCH_CODE CS (ROLL_NO 1 and 2 in this case) will be updated with BRANCH_CODE &lsquo;CSE&rsquo;.&nbsp;</p>
        <p><strong>SUPER KEYS:</strong>&nbsp;<br>Any set of attributes that allows us to identify unique rows (tuples) in a given relation are known as super keys. Out of these super keys we can always choose a proper subset among these which can be used as a primary key. Such keys are known as Candidate keys. If there is a combination of two or more attributes which is being used as the primary key then we call it as a Composite key.&nbsp;</p>
        <p><br>&nbsp;</p>
        <div><br></div>
        
        
        <h3>Introduction of Relational Algebra in DBMS</h3>
        <p>Relational Algebra is procedural query language, which takes Relation as input and generate relation as output. Relational algebra mainly provides theoretical foundation for relational databases and SQL.</p>
        <p><strong>Operators in Relational Algebra</strong></p>
        <p><strong>Projection (&pi;)</strong><br>Projection is used to project required column data from a relation.</p>
        <p>Example :</p>
        <pre>     R 
          (A  B  C)    
          ----------
           1  2  4
           2  2  3
           3  2  3
           4  3  4</pre>
        <pre>&pi; (BC) 
        B  C
        -----
        2  4
        2  3
        3  4</pre>
        <p><strong>Note:&nbsp;</strong>By Default projection removes duplicate data.</p>
        <div><br></div>
        <p>&nbsp;</p>
        <p><strong>Selection (&sigma;)</strong><br>Selection is used to select required tuples of the relations.</p>
        <p>for the above relation<br>&sigma; (c&gt;3)R<br>will select the tuples which have c more than 3.</p>
        <p><strong>Note:&nbsp;</strong>selection operator only selects the required tuples but does not display them. For displaying, data projection operator is used.</p>
        <p>For the above selected tuples, to display we need to use projection also.</p>
        <pre> &pi; (&sigma; (c&gt;3)R ) will show following tuples.
        
        A  B  C
        -------
        1  2  4
        4  3  4</pre>
        <p>&nbsp;</p>
        <p><strong>Union (U)</strong><br>Union operation in relational algebra is same as union operation in set theory, only constraint is for union of two relation both relation must have same set of Attributes.</p>
        <p>&nbsp;</p>
        <p><strong>Set Difference (-)</strong><br>Set Difference in relational algebra is same set difference operation as in set theory with the constraint that both relation should have same set of attributes.</p>
        <p>&nbsp;</p>
        <p><strong>Rename (&rho;)</strong><br>Rename is a unary operation used for renaming attributes of a relation.<br>&rho; (a/b)R will rename the attribute &lsquo;b&rsquo; of relation by &lsquo;a&rsquo;.</p>
        <p>&nbsp;</p>
        <p><strong>Cross Product (X)</strong></p>
        <p>Cross product between two relations let say A and B, so cross product between A X B will results all the attributes of A followed by each attribute of B. Each record of A will pairs with every record of B.</p>
        <p>below is the example</p>
        <pre>   A                                  B
            (Name   Age  Sex )                (Id   Course)  
            ------------------                -------------
            Ram    14   M                      1     DS
            Sona   15   F                      2     DBMS
            kim    20   M
        
             A X B
          Name   Age   Sex   Id   Course
        ---------------------------------
          Ram    14    M      1    DS
          Ram    14    M      2    DBMS
          Sona   15    F      1    DS
          Sona   15    F      2    DBMS
          Kim    20    M      1    DS
          Kim    20    M      2    DBMS</pre>
        <p><strong>Note:</strong> if A has &lsquo;n&rsquo; tuples and B has &lsquo;m&rsquo; tuples then A X B will have &lsquo;n*m&rsquo; tuples.</p>
        <p>&nbsp;</p>
        <p><strong>Natural Join (⋈)</strong></p>
        <p>Natural join is a binary operator. Natural join between two or more relations will result set of all combination of tuples where they have equal common attribute.</p>
        <p>Let us see below example</p>
        <pre>
                   Emp                              Dep
           (Name   Id   Dept_name )          (Dept_name   Manager)
           ------------------------          ---------------------    
             A     120    IT                    Sale     Y
             B     125    HR                    Prod     Z
             C     110    Sale                  IT       A
             D     111    IT                      
        
        
        Emp ⋈ Dep
        
        Name   Id   Dept_name   Manager
        -------------------------------
        A     120   IT          A 
        C     110   Sale        Y
        D     111   IT          A</pre>
        <p>&nbsp;</p>
        <p><strong>Conditional Join</strong></p>
        <p>Conditional join works similar to natural join. In natural join, by default condition is equal between common attribute while in conditional join we can specify the any condition such as greater than, less than, not equal</p>
        <p>Let us see below example</p>
        <pre>         R                           S
          (ID   Sex   Marks)          (ID   Sex   Marks)
          ------------------          -------------------- 
           1   F   45                   10   M   20
           2   F   55                   11   M   22
           3   F   60                   12   M   59
         
        Join between R And S with condition <strong> R.marks &gt;= S.marks</strong>
        
        R.ID   R.Sex   R.Marks   S.ID   S.Sex   S.Marks
        -----------------------------------------------
        1       F       45        10     M        20
        1       F       45        11     M        22
        2       F       55        10     M        20
        2       F       55        11     M        22
        3       F       60        10     M        20
        3       F       60        11     M        22
        3       F       60        12     M        59</pre>
        <hr>
        <p><br></p>
        <p><br></p>
        
        <h3>Anomalies in Relational Model</h3>
        <article>
            <div>
                <p><strong>Anomalies</strong><br>There are different types of anomalies which can occur in referencing and referenced relation which can be discussed as:</p>
                <p><a href="https://media.geeksforgeeks.org/wp-content/uploads/image7.png"><img src="https://media.geeksforgeeks.org/wp-content/uploads/image7.png" alt="image" width="731" height="349"></a></p>
                <p><strong>Insertion anomaly:</strong> If a tuple is inserted in referencing relation and referencing attribute value is not present in referenced attribute, it will not allow inserting in referencing relation. For Example, If we try to insert a record in STUDENT_COURSE with STUD_NO =7, it will not allow.</p>
                <p><strong>Deletion and Updation anomaly:</strong> If a tuple is deleted or updated from referenced relation and referenced attribute value is used by referencing attribute in referencing relation, it will not allow deleting the tuple from referenced relation. For Example, If we try to delete a record from STUDENT with STUD_NO =1, it will not allow. To avoid this, following can be used in query:</p>
                <ul>
                    <li><strong>ON DELETE/UPDATE SET NULL:</strong> If a tuple is deleted or updated from referenced relation and referenced attribute value is used by referencing attribute in referencing relation, it will delete/update the tuple from referenced relation and set the value of referencing attribute to NULL.</li>
                    <li><strong>ON DELETE/UPDATE CASCADE:</strong> If a tuple is deleted or updated from referenced relation and referenced attribute value is used by referencing attribute in referencing relation, it will delete/update the tuple from referenced relation and referencing relation as well.</li>
                </ul>
                <p><br></p>
                <div>
                    <p><br></p>
                </div>
            </div>
        </article>
        <div>
            <div>
                <div><button><br>&nbsp;</button></div>
            </div>
        </div>
        
        
        <h3>Introduction of Relational Model and Codd Rules in DBMS</h3>
        <p align="center"><strong>Terminology</strong></p>
        <p><strong>Relational Model:</strong> Relational model represents data in the form of relations or tables.</p>
        <p><strong>Relational Schema:</strong> Schema represents structure of a relation. e.g.; Relational Schema of STUDENT relation can be represented as:<br>STUDENT (STUD_NO, STUD_NAME, STUD_PHONE, STUD_STATE, STUD_COUNTRY, STUD_AGE)</p>
        <p><strong>Relational Instance:</strong> The set of values present in a relation at a particular instance of time is known as relational instance as shown in Table 1 and Table 2.</p>
        <div><br></div>
        <p><strong>Attribute:</strong> Each relation is defined in terms of some properties, each of which is known as attribute. For Example, STUD_NO, STUD_NAME etc. are attributes of relation STUDENT.</p>
        <p><strong>Domain of an attribute:&nbsp;</strong>The possible values an attribute can take in a relation is called its domain. For Example, domain of STUD_AGE can be from 18 to 40.<br><strong>Tuple:</strong> Each row of a relation is known as tuple. e.g.; STUDENT relation given below has 4 tuples.</p>
        <p><strong>NULL values:</strong> Values of some attribute for some tuples may be unknown, missing or undefined which are represented by NULL. Two NULL values in a relation are considered different from each other.<br>Table 1 and Table 2 represent relational model having two relations STUDENT and STUDENT_COURSE.</p>
        <p><a href="https://media.geeksforgeeks.org/wp-content/uploads/image7.png"><img src="https://media.geeksforgeeks.org/wp-content/uploads/image7.png" alt="image" width="731" height="349"></a></p>
        <p align="center"><strong>Codd Rules</strong></p>
        <p>Codd rules were proposed by E.F. Codd which should be satisfied by relational model.</p>
        <ol>
            <li><strong>Foundation Rule:</strong> For any system that is advertised as, or claimed to be, a relational data base management system, that system must be able to manage data bases entirely through its relational capabilities.</li>
            <li><strong>Information Rule:</strong> Data stored in Relational model must be a value of some cell of a table.</li>
            <li><strong>Guaranteed Access Rule:</strong> Every data element must be accessible by table name, its primary key and name of attribute whose value is to be determined.</li>
            <li><strong>Systematic Treatment of NULL values:</strong> NULL value in database must only correspond to missing, unknown or not applicable values.</li>
            <li><strong>Active Online Catalog:</strong> Structure of database must be stored in an online catalog which can be queried by authorized users.</li>
            <li><strong>Comprehensive Data Sub-language Rule:</strong> A database should be accessible by a language supported for definition, manipulation and transaction management operation.</li>
            <li><strong>View Updating Rule:</strong> Different views created for various purposes should be automatically updatable by the system.</li>
            <li><strong>High level insert, update and delete rule:</strong> Relational Model should support insert, delete, update etc. operations at each level of relations. Also, set operations like Union, Intersection and minus should be supported.</li>
            <li><strong>Physical data independence:</strong> Any modification in the physical location of a table should not enforce modification at application level.</li>
            <li><strong>Logical data independence:</strong> Any modification in logical or conceptual schema of a table should not enforce modification at application level. For example, merging of two tables into one should not affect application accessing it which is difficult to achieve.</li>
            <li><strong>Integrity Independence:</strong> Integrity constraints modified at database level should not enforce modification at application level.</li>
            <li><strong>Distribution Independence:</strong> Distribution of data over various locations should not be visible to end-users.</li>
            <li><strong>Non-Subversion Rule:</strong> Low level access to data should not be able to bypass integrity rule to change data.</li>
        </ol>
        <p align="center"><strong>GATE Question</strong></p>
        <p><strong>Given the basic ER and relational models, which of the following is INCORRECT?</strong> [GATE CS 2012]<br>A. An attribute of an entity can have more than one value<br>B. An attribute of an entity can be composite<br>C. In a row of a relational table, an attribute can have more than one value<br>D. In a row of a relational table, an attribute can have exactly one value or a NULL value</p>
        <p><strong>Answer:</strong> In relation model, an attribute can&rsquo;t have more than one value. So, option C is the answer.</p>
        
        <br><br>
        <h3>Types of Keys in Relational Model (Candidate, Super, Primary, Alternate and Foreign)</h3>
        <p><strong>Different Types of Keys in Relational Model</strong></p>
        <p><img src="https://media.geeksforgeeks.org/wp-content/uploads/image7.png" alt="image"></p>
        <p><strong>Candidate Key:</strong> The minimal set of attributes that can uniquely identify a tuple is known as a candidate key. For Example, STUD_NO in STUDENT relation.&nbsp;<br>&nbsp;</p>
        <div><br></div>
        <ul>
            <li>The value of the Candidate Key is unique and non-null for every tuple.</li>
            <li>There can be more than one candidate key in a relation. For Example, STUD_NO is the candidate key for relation STUDENT.</li>
            <li>The candidate key can be simple (having only one attribute) or composite as well. For Example, {STUD_NO, COURSE_NO} is a composite candidate key for relation STUDENT_COURSE.</li>
            <li>No, of candidate keys in a Relation are nC(floor(n/2)),for example if a Relation have 5 attributes i.e. R(A,B,C,D,E) then total no of candidate keys are 5C(floor(5/2))=10.</li>
        </ul>
        <p><strong>Note &ndash;</strong> In SQL Server a unique constraint that has a nullable column, <strong>allows</strong> the value &lsquo;<strong>null</strong>&lsquo; in that column <strong>only once</strong>. That&rsquo;s why the STUD_PHONE attribute is a candidate here, but can not be &lsquo;null&rsquo; values in the primary key attribute.&nbsp;</p>
        <p><strong>Super Key:&nbsp;</strong>The set of attributes that can uniquely identify a tuple is known as Super Key. For Example, STUD_NO, (STUD_NO, STUD_NAME), etc.&nbsp;<br>&nbsp;</p>
        <ul>
            <li>Adding zero or more attributes to the candidate key generates the super key.</li>
            <li>A candidate key is a super key but vice versa is not true.</li>
        </ul>
        <p><strong>Primary Key:</strong> There can be more than one candidate key in relation out of which one can be chosen as the primary key. For Example, STUD_NO, as well as STUD_PHONE both, are candidate keys for relation STUDENT but STUD_NO can be chosen as the primary key (only one out of many candidate keys).&nbsp;</p>
        <p><strong>Alternate Key:&nbsp;</strong>The candidate key other than the primary key is called an alternate key. For Example, STUD_NO, as well as STUD_PHONE both, are candidate keys for relation STUDENT but STUD_PHONE will be an alternate key (only one out of many candidate keys).&nbsp;</p>
        <p><strong>Foreign Key:</strong> If an attribute can only take the values which are present as values of some other attribute, it will be a foreign key to the attribute to which it refers. The relation which is being referenced is called referenced relation and the corresponding attribute is called referenced attribute and the relation which refers to the referenced relation is called referencing relation and the corresponding attribute is called referencing attribute. The referenced attribute of the referenced relation should be the primary key to it. For Example, STUD_NO in STUDENT_COURSE is a foreign key to STUD_NO in STUDENT relation.&nbsp;</p>
        <p>It may be worth noting that unlike Primary Key of any given relation, Foreign Key can be NULL as well as may contain duplicate tuples i.e. it need not follow uniqueness constraint.&nbsp;</p>
        <p>For Example, STUD_NO in STUDENT_COURSE relation is not unique. It has been repeated for the first and third tuples. However, the STUD_NO in STUDENT relation is a primary key and it needs to be always unique, and it cannot be null.&nbsp;</p>
        <p><br></p>
        <div><br></div>`
    },
    {
        topic: "ACID Properties in DBMS",
        content: `<h1 class="h1">ACID Properties in DBMS</h1>
        <p>DBMS is the management of data that should remain integrated when any changes are done in it. It is because if the integrity of the data is affected, whole data will get disturbed and corrupted. Therefore, to maintain the integrity of the data, there are four properties described in the database management system, which are known as the&nbsp;<strong>ACID</strong>&nbsp;properties. The ACID properties are meant for the transaction that goes through a different group of tasks, and there we come to see the role of the ACID properties.</p>
        <p>In this section, we will learn and understand about the ACID properties. We will learn what these properties stand for and what does each property is used for. We will also understand the ACID properties with the help of some examples.</p>
        <h2 class="h2">ACID Properties</h2>
        <p>The expansion of the term ACID defines for:</p>
        <p><img src="https://static.javatpoint.com/dbms/images/acid-properties-in-dbms.png" alt="ACID Properties in DBMS" /></p>
        <p><strong>1) Atomicity:</strong>&nbsp;The term atomicity defines that the data remains atomic. It means if any operation is performed on the data, either it should be performed or executed completely or should not be executed at all. It further means that the operation should not break in between or execute partially. In the case of executing operations on the transaction, the operation should be completely executed and not partially.</p>
        <p><strong>Example:</strong>&nbsp;If Remo has account A having $30 in his account from which he wishes to send $10 to Sheero's account, which is B. In account B, a sum of $ 100 is already present. When $10 will be transferred to account B, the sum will become $110. Now, there will be two operations that will take place. One is the amount of $10 that Remo wants to transfer will be debited from his account A, and the same amount will get credited to account B, i.e., into Sheero's account. Now, what happens - the first operation of debit executes successfully, but the credit operation, however, fails. Thus, in Remo's account A, the value becomes $20, and to that of Sheero's account, it remains $100 as it was previously present.</p>
        <p><img src="https://static.javatpoint.com/dbms/images/acid-properties-in-dbms2.png" alt="ACID Properties in DBMS" /></p>
        <p>In the above diagram, it can be seen that after crediting $10, the amount is still $100 in account B. So, it is not an atomic transaction.</p>
        <p>The below image shows that both debit and credit operations are done successfully. Thus the transaction is atomic.</p>
        <p><img src="https://static.javatpoint.com/dbms/images/acid-properties-in-dbms3.png" alt="ACID Properties in DBMS" /></p>
        <p>Thus, when the amount loses atomicity, then in the bank systems, this becomes a huge issue, and so the atomicity is the main focus in the bank systems.</p>
        <p><strong>2) Consistency:</strong>&nbsp;The word&nbsp;<strong>consistency</strong>&nbsp;means that the value should remain preserved always. In&nbsp;<a href="https://www.javatpoint.com/dbms-tutorial">DBMS</a>, the integrity of the data should be maintained, which means if a change in the database is made, it should remain preserved always. In the case of transactions, the integrity of the data is very essential so that the database remains consistent before and after the transaction. The data should always be correct.</p>
        <p><strong>Example:</strong></p>
        <p><img src="https://static.javatpoint.com/dbms/images/acid-properties-in-dbms4.png" alt="ACID Properties in DBMS" /></p>
        <p>In the above figure, there are three accounts, A, B, and C, where A is making a transaction T one by one to both B &amp; C. There are two operations that take place, i.e., Debit and Credit. Account A firstly debits $50 to account B, and the amount in account A is read $300 by B before the transaction. After the successful transaction T, the available amount in B becomes $150. Now, A debits $20 to account C, and that time, the value read by C is $250 (that is correct as a debit of $50 has been successfully done to B). The debit and credit operation from account A to C has been done successfully. We can see that the transaction is done successfully, and the value is also read correctly. Thus, the data is consistent. In case the value read by B and C is $300, which means that data is inconsistent because when the debit operation executes, it will not be consistent.</p>
        <p><strong>4) Isolation:</strong>&nbsp;The term 'isolation' means separation. In DBMS, Isolation is the property of a database where no data should affect the other one and may occur concurrently. In short, the operation on one database should begin when the operation on the first database gets complete. It means if two operations are being performed on two different databases, they may not affect the value of one another. In the case of transactions, when two or more transactions occur simultaneously, the consistency should remain maintained. Any changes that occur in any particular transaction will not be seen by other transactions until the change is not committed in the memory.</p>
        <p><strong>Example:</strong>&nbsp;If two operations are concurrently running on two different accounts, then the value of both accounts should not get affected. The value should remain persistent. As you can see in the below diagram, account A is making T1 and T2 transactions to account B and C, but both are executing independently without affecting each other. It is known as Isolation.</p>
        <p><img src="https://static.javatpoint.com/dbms/images/acid-properties-in-dbms5.png" alt="ACID Properties in DBMS" /></p>
        <p><strong>4) Durability:</strong>&nbsp;Durability ensures the permanency of something. In DBMS, the term durability ensures that the data after the successful execution of the operation becomes permanent in the database. The durability of the data should be so perfect that even if the system fails or leads to a crash, the database still survives. However, if gets lost, it becomes the responsibility of the recovery manager for ensuring the durability of the database. For committing the values, the COMMIT command must be used every time we make changes.</p>
        <p>Therefore, the ACID property of DBMS plays a vital role in maintaining the consistency and availability of data in the database.</p>`
    },
    {
        topic: "Normalization in DBMS",
        content: `<h1>Normalization</h1>
        <p>A large database defined as a single relation may result in data duplication. This repetition of data may result in:</p>
        <ul>
            <li>Making relations very large.</li>
            <li>It isn&apos;t easy to maintain and update data as it would involve searching many records in relation.</li>
            <li>Wastage and poor utilization of disk space and resources.</li>
            <li>The likelihood of errors and inconsistencies increases.</li>
        </ul>
        <p>So to handle these problems, we should analyze and decompose the relations with redundant data into smaller, simpler, and well-structured relations that are satisfy desirable properties. Normalization is a process of decomposing the relations into relations with fewer attributes.</p>
        <h2>What is Normalization?</h2>
        <ul>
            <li>Normalization is the process of organizing the data in the database.</li>
            <li>Normalization is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies.</li>
            <li>Normalization divides the larger table into smaller and links them using relationships.</li>
            <li>The normal form is used to reduce redundancy from the database table.</li>
        </ul>
        <p>Why do we need Normalization?</p>
        <p>The main reason for normalizing the relations is removing these anomalies. Failure to eliminate anomalies leads to data redundancy and can cause data integrity and other problems as the database grows. Normalization consists of a series of guidelines that helps to guide you in creating a good database structure.</p>
        <div data-xpath="#city> table:eq(0) > tbody:eq(0) > tr:eq(0) > td:eq(0) > p:eq(3)" style="display: block; clear: both; text-align: center; margin: 10px auto; width: 535px; height: 300px; overflow: hidden;">
            <div>
                <div><iframe frameborder="0" scrolling="no" title="Primis Frame"></iframe>
                    <div>
                        <div>
                            <div>
                                <div><br></div>
                                <div><br></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div><br></div><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g>
                                                <path fill="#000000" d="M655.5,112.5C582.9,39.9,486.6,0,384,0S185.1,39.9,112.5,112.5S0,281.4,0,384s39.9,198.9,112.5,271.5S281.4,768,384,768 s198.9-39.9,271.5-112.5S768,486.6,768,384S728.1,185.1,655.5,112.5z M624.6,624.6C560.3,689,474.8,724.4,384,724.4 S207.7,689,143.4,624.6C10.7,492,10.7,276,143.4,143.4C207.7,79,293.2,43.6,384,43.6S560.3,79,624.6,143.4 C757.3,276,757.3,492,624.6,624.6z"></path>
                                                <path fill="#000000" d="M553.2,214.8c-8.6-8.6-22.3-8.6-30.9,0L384,353.1L245.7,214.8c-8.6-8.6-22.3-8.6-30.9,0c-8.6,8.6-8.6,22.3,0,30.9 L353.1,384L214.8,522.3c-8.6,8.6-8.6,22.3,0,30.9c4.2,4.2,9.9,6.5,15.4,6.5s11.2-2.1,15.4-6.5l138.3-138.3l138.3,138.3 c4.2,4.2,9.9,6.5,15.4,6.5c5.7,0,11.2-2.1,15.4-6.5c8.6-8.6,8.6-22.3,0-30.9L414.9,384l138.3-138.3 C561.8,237.1,561.8,223.4,553.2,214.8z"></path>
                                            </g>
                                        </svg>
                                        <div><br></div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div><br></div>
                                        </div>
                                        <div>
                                            <div><br></div>
                                            <div>
                                                <div>
                                                    <div><iframe src="https://imasdk.googleapis.com/js/core/bridge3.512.0_en.html#goog_981557392" allowfullscreen="" width="350" height="197"></iframe></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div><br></div>
                                                </div>
                                                <div>
                                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                                            <path fill="#fff" d="M257.778 64.444C138.666 64.444 37.609 145.218 0 257.778c37.609 112.56 138.666 193.333 257.778 193.333s220.169-80.774 257.778-193.333C477.947 145.218 376.89 64.444 257.778 64.444zm0 322.223c-71.184 0-128.889-57.706-128.889-128.889 0-71.184 57.705-128.889 128.889-128.889s128.889 57.705 128.889 128.889c0 71.182-57.705 128.889-128.889 128.889z"></path>
                                                            <path fill="#fff" d="M303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path>
                                                        </svg></div>
                                                    <div>33M</div>
                                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                                            <path fill="#fff" d="M775.9,522.1c15.7-20.1,23.3-41.6,22.3-63.8c-1-24.4-11.9-43.5-20.9-55.2c10.4-26,14.5-67-20.4-98.8c-25.5-23.3-68.9-33.7-129-30.8c-42.2,1.9-77.6,9.8-79,10.1h-0.2c-8,1.4-16.5,3.2-25.2,5.1c-0.6-10.3,1.1-35.8,20.1-93.3c22.5-68.4,21.2-120.8-4.2-155.8C512.8,2.9,470.2,0,457.7,0c-12,0-23.1,5-31,14.1c-17.8,20.7-15.7,58.9-13.5,76.6c-21.2,56.9-80.6,196.3-130.9,235c-1,0.6-1.8,1.4-2.6,2.2c-14.8,15.6-24.7,32.4-31.5,47.2c-9.5-5.1-20.2-8-31.8-8h-98c-36.9,0-66.8,30-66.8,66.8v261c0,36.9,30,66.8,66.8,66.8h98c14.3,0,27.6-4.5,38.5-12.2l37.7,4.5c5.8,0.8,108.6,13.8,214.1,11.7c19.1,1.4,37.1,2.2,53.8,2.2c28.7,0,53.8-2.2,74.7-6.7c49.1-10.4,82.7-31.3,99.7-62c13-23.4,13-46.7,10.9-61.5c32-28.9,37.6-60.9,36.5-83.4C781.8,541.4,778.9,530.3,775.9,522.1L775.9,522.1z M118.5,718.4c-13,0-23.4-10.6-23.4-23.4V433.8c0-13,10.6-23.4,23.4-23.4h98c13,0,23.4,10.6,23.4,23.4v261c0,13-10.6,23.4-23.4,23.4h-98V718.4L118.5,718.4z M734.8,503.3c-6.7,7.1-8,17.8-2.9,26.2c0,0.2,6.6,11.4,7.4,26.8c1.1,21-9,39.7-30.2,55.6c-7.5,5.8-10.6,15.7-7.4,24.7c0,0.2,6.9,21.4-4.3,41.4c-10.8,19.3-34.7,33.1-71,40.8c-29.1,6.3-68.6,7.4-117.1,3.5H507c-103.3,2.2-207.7-11.2-208.8-11.4h-0.2l-16.2-1.9c1-4.5,1.4-9.3,1.4-14.1V433.8c0-6.9-1.1-13.7-3.1-19.9c2.9-10.8,10.9-34.7,29.9-55.1c72.1-57.2,142.6-250.1,145.7-258.4c1.3-3.4,1.6-7.1,1-10.8c-2.7-18-1.8-40,2.1-46.6c8.5,0.2,31.5,2.6,45.3,21.7c16.4,22.6,15.7,63.1-1.9,116.8c-27,81.7-29.2,124.8-7.9,143.7c10.6,9.5,24.7,10,35,6.3c9.8-2.2,19.1-4.2,27.9-5.6c0.6-0.2,1.4-0.3,2.1-0.5C608.7,314.6,697,308,727.7,336c26,23.8,7.5,55.2,5.5,58.6c-5.9,9-4.2,20.7,3.9,27.9c0.2,0.2,17,16.1,17.8,37.4C755.5,474.3,748.7,488.9,734.8,503.3L734.8,503.3z"></path>
                                                            <path fill="#fff" d="M118.5,718.4c-13,0-23.4-10.6-23.4-23.4V433.8c0-13,10.6-23.4,23.4-23.4h98c13,0,23.4,10.6,23.4,23.4v261c0,13-10.6,23.4-23.4,23.4h-98V718.4L118.5,718.4z M734.8,503.3c-6.7,7.1-8,17.8-2.9,26.2c0,0.2,6.6,11.4,7.4,26.8c1.1,21-9,39.7-30.2,55.6c-7.5,5.8-10.6,15.7-7.4,24.7c0,0.2,6.9,21.4-4.3,41.4c-10.8,19.3-34.7,33.1-71,40.8c-29.1,6.3-68.6,7.4-117.1,3.5H507c-103.3,2.2-207.7-11.2-208.8-11.4h-0.2l-16.2-1.9c1-4.5,1.4-9.3,1.4-14.1V433.8c0-6.9-1.1-13.7-3.1-19.9c2.9-10.8,10.9-34.7,29.9-55.1c72.1-57.2,142.6-250.1,145.7-258.4c1.3-3.4,1.6-7.1,1-10.8c-2.7-18-1.8-40,2.1-46.6c8.5,0.2,31.5,2.6,45.3,21.7c16.4,22.6,15.7,63.1-1.9,116.8c-27,81.7-29.2,124.8-7.9,143.7c10.6,9.5,24.7,10,35,6.3c9.8-2.2,19.1-4.2,27.9-5.6c0.6-0.2,1.4-0.3,2.1-0.5C608.7,314.6,697,308,727.7,336c26,23.8,7.5,55.2,5.5,58.6c-5.9,9-4.2,20.7,3.9,27.9c0.2,0.2,17,16.1,17.8,37.4C755.5,474.3,748.7,488.9,734.8,503.3L734.8,503.3z"></path>
                                                        </svg></div>
                                                    <div>602</div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <div>Prime Ministers of India | List of Prime Minister of India (1947-2020)</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div><br></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div><br></div>
                                        <div><br></div>
                                        <div><br></div>
                                        <div><br></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p><br></p>
        <p><strong>Data modification anomalies can be categorized into three types:</strong></p>
        <ul>
            <li><strong>Insertion Anomaly:</strong> Insertion Anomaly refers to when one cannot insert a new tuple into a relationship due to lack of data.</li>
            <li><strong>Deletion Anomaly:</strong> The delete anomaly refers to the situation where the deletion of data results in the unintended loss of some other important data.</li>
            <li><strong>Updatation Anomaly:</strong> The update anomaly is when an update of a single data value requires multiple rows of data to be updated.</li>
        </ul>
        <h2>Types of Normal Forms:</h2>
        <p>Normalization works through a series of stages called Normal forms. The normal forms apply to individual relations. The relation is said to be in particular normal form if it satisfies constraints.</p>
        <p><strong>Following are the various types of Normal forms:</strong></p>
        <p><img src="https://static.javatpoint.com/dbms/images/dbms-normalization.png" alt="DBMS Normalization"></p>
        <table>
            <thead>
                <tr>
                    <th>Normal Form</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="https://www.javatpoint.com/dbms-first-normal-form">1NF<div><br></div></a></td>
                    <td>A relation is in 1NF if it contains an atomic value.</td>
                </tr>
                <tr>
                    <td><a href="https://www.javatpoint.com/dbms-second-normal-form">2NF<div><br></div></a></td>
                    <td>A relation will be in 2NF if it is in 1NF and all non-key attributes are fully functional dependent on the primary key.</td>
                </tr>
                <tr>
                    <td><a href="https://www.javatpoint.com/dbms-third-normal-form">3NF<div><br></div></a></td>
                    <td>A relation will be in 3NF if it is in 2NF and no transition dependency exists.</td>
                </tr>
                <tr>
                    <td>BCNF</td>
                    <td>A stronger definition of 3NF is known as Boyce Codd&apos;s normal form.</td>
                </tr>
                <tr>
                    <td><a href="https://www.javatpoint.com/dbms-forth-normal-form">4NF<div><br></div></a></td>
                    <td>A relation will be in 4NF if it is in Boyce Codd&apos;s normal form and has no multi-valued dependency.</td>
                </tr>
                <tr>
                    <td><a href="https://www.javatpoint.com/dbms-fifth-normal-form">5NF<div><br></div></a></td>
                    <td>A relation is in 5NF. If it is in 4NF and does not contain any join dependency, joining should be lossless.</td>
                </tr>
            </tbody>
        </table>
        <h2>Advantages of Normalization</h2>
        <ul>
            <li>Normalization helps to minimize data redundancy.</li>
            <li>Greater overall database organization.</li>
            <li>Data consistency within the database.</li>
            <li>Much more flexible database design.</li>
            <li>Enforces the concept of relational integrity.</li>
        </ul>
        <h2>Disadvantages of Normalization</h2>
        <ul>
            <li>You cannot start building the database before knowing what the user needs.</li>
            <li>The performance degrades when normalizing the relations to higher normal forms, i.e., 4NF, 5NF.</li>
            <li>It is very time-consuming and difficult to normalize relations of a higher degree.</li>
            <li>Careless decomposition may lead to a bad database design, leading to serious problems.</li>
        </ul>
        <p><br></p>`
    }

]