export default [

    {
        topic: 'Introduction',
        content: `<h2>Introduction</h2>
        <p>Python is a simple, general purpose, high level, and object-oriented programming language.</p>
        <p>Python is an interpreted scripting language also. <em>Guido Van Rossum</em> is known as the founder of Python programming.</p>
        <p>Our Python tutorial includes all topics of Python Programming such as installation, control statements,&nbsp;Strings,&nbsp;Lists,&nbsp;Tuples,&nbsp;Dictionary,&nbsp;Exceptions, Date and Time, File I/O, Programs, etc. There are also given Python interview questions to help you better understand Python Programming.</p>
        <h2>What is Python</h2>
        <p><strong>Python</strong> is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications. It is simple and easy to learn and provides lots of high-level data structures.</p>
        <p>Python is <em>easy to learn</em> yet powerful and versatile scripting language, which makes it attractive for Application Development.</p>
        <p>Python&apos;s syntax and <em>dynamic typing</em> with its interpreted nature make it an ideal language for scripting and rapid application development.</p>
        <p>Python supports <em>multiple programming pattern</em>, including object-oriented, imperative, and functional or procedural programming styles.</p>
        <p>Python is not intended to work in a particular area, such as web programming. That is why it is known as <em>multipurpose</em> programming language because it can be used with web, enterprise, 3D CAD, etc.</p>
        <p>We don&apos;t need to use data types to declare variable because it is <em>dynamically typed</em> so we can write a=10 to assign an integer value in an integer variable.</p>
        <p>Python makes the development and debugging <em>fast</em> because there is no compilation step included in Python development, and edit-test-debug cycle is very fast.</p>
        <h2>Python 2 vs. Python 3</h2>
        <p>In most of the programming languages, whenever a new version releases, it supports the features and syntax of the existing version of the language, therefore, it is easier for the projects to switch in the newer version. However, in the case of Python, the two versions Python 2 and Python 3 are very much different from each other.</p>
        <p>A list of differences between Python 2 and Python 3 are given below:</p>
        <ol>
            <li>Python 2 uses <strong>print</strong> as a statement and used as print &quot;something&quot; to print some string on the console. On the other hand, Python 3 uses <strong>print</strong> as a function and used as print(&quot;something&quot;) to print something on the console.</li>
            <li>Python 2 uses the function raw_input() to accept the user&apos;s input. It returns the string representing the value, which is typed by the user. To convert it into the integer, we need to use the int() function in Python. On the other hand, Python 3 uses input() function which automatically interpreted the type of input entered by the user. However, we can cast this value to any type by using primitive functions (int(), str(), etc.).</li>
            <li>In Python 2, the implicit string type is ASCII, whereas, in Python 3, the implicit string type is Unicode.</li>
            <li>Python 3 doesn&apos;t contain the xrange() function of Python 2. The xrange() is the variant of range() function which returns a xrange object that works similar to Java iterator. The range() returns a list for example the function range(0,3) contains 0, 1, 2.</li>
            <li>There is also a small change made in Exception handling in Python 3. It defines a keyword <strong>as</strong> which is necessary to be used. We will discuss it in Exception handling section of Python programming tutorial.</li>
        </ol>
        <h2>Python History</h2>
        <p>Python was invented by <strong>Guido van Rossum</strong> in 1991 at CWI in Netherland. The idea of Python programming language has taken from the ABC programming language or we can say that ABC is a predecessor of Python language.</p>
        <p>There is also a fact behind the choosing name Python. Guido van Rossum was a fan of the popular BBC comedy show of that time, <strong>&quot;Monty Python&apos;s Flying Circus&quot;</strong>. So he decided to pick the name <strong>Python</strong> for his newly created programming language.</p>
        <p>Python has the vast community across the world and releases its version within the short period.</p>
        <h2>Why learn Python?</h2>
        <p>Python provides many useful features to the programmer. These features make it most popular and widely used language. We have listed below few-essential feature of Python.</p>
        <ul>
            <li>Easy to use and Learn</li>
            <li>Expressive Language</li>
            <li>Interpreted Language</li>
            <li>Object-Oriented Language</li>
            <li>Open Source Language</li>
            <li>Extensible</li>
            <li>Learn Standard Library</li>
            <li>GUI Programming Support</li>
            <li>Integrated</li>
            <li>Embeddable</li>
            <li>Dynamic Memory Allocation</li>
            <li>Wide Range of Libraries and Frameworks &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
        </ul>
        <h2>Where is Python used?</h2>
<p>Python is a general-purpose, popular programming language and it is used in almost every technical field. The various areas of Python use are given below.</p>
<ul>
    <li>Data Science</li>
    <li>Date Mining</li>
    <li>Desktop Applications</li>
    <li>Console-based Applications</li>
    <li>Mobile Applications</li>
    <li>Software Development</li>
    <li>Artificial Intelligence</li>
    <li>Web Applications</li>
    <li>Enterprise Applications</li>
    <li>3D CAD Applications</li>
    <li>Machine Learning</li>
    <li>Computer Vision or Image Processing Applications.</li>
    <li>Speech Recognitions &nbsp; &nbsp;</li>
</ul>`,
    },
    {
        topic: 'History',
        content: `<h1>Python History and Versions</h1>
        <ul>
            <li>Python laid its foundation in the late 1980s.</li>
            <li>The implementation of Python was started in December 1989 by&nbsp;<strong>Guido Van Rossum</strong> at CWI in Netherland.</li>
            <li>In February 1991,&nbsp;<strong>Guido Van Rossum</strong> published the code (labeled version 0.9.0) to alt.sources.</li>
            <li>In 1994, Python 1.0 was released with new features like lambda, map, filter, and reduce.</li>
            <li>Python 2.0 added new features such as list comprehensions, garbage collection systems.</li>
            <li>On December 3, 2008, Python 3.0 (also called &quot;Py3K&quot;) was released. It was designed to rectify the fundamental flaw of the language.</li>
            <li><em>ABC programming language</em> is said to be the predecessor of Python language, which was capable of Exception Handling and interfacing with the Amoeba Operating System.</li>
            <li>The following programming languages influence Python:<ul>
                    <li>ABC language.</li>
                    <li>Modula-3</li>
                </ul>
            </li>
        </ul>
        <h2>Why the Name Python?</h2>
        <p>There is a fact behind choosing the name&nbsp;Python</p>
        <div><br></div>
        <p>.&nbsp;<strong>Guido van Rossum</strong> was reading the script of a popular BBC comedy series &quot;<strong>Monty Python&apos;s Flying Circus</strong>&quot;. It was late on-air 1970s.</p>
        <p><br></p>
        <p>Van Rossum wanted to select a name which unique, sort, and little-bit mysterious. So he decided to select naming Python after the&nbsp;<strong>&quot;Monty Python&apos;s Flying Circus&quot;</strong> for their newly created programming language.</p>
        <p>The comedy series was creative and well random. It talks about everything. Thus it is slow and unpredictable, which made it very interesting.</p>
        <p>Python is also versatile and widely used in every technical field, such as&nbsp;Machine Learning, &nbsp;Artificial Intelligence,&nbsp; Web Development,&nbsp;Mobile Application,&nbsp; Desktop Application,&nbsp; Scientific Calculation, etc.
        
         
        <p><br></p>
        <h2>Python Version List</h2>
        <p>Python programming language is being updated regularly with new features and supports. There are lots of update in Python versions, started from 1994 to current release.</p>
        <p>A list of Python versions with its released date is given below.</p>
        <table>
            <thead>
                <tr>
                    <th>Python Version</th>
                    <th>Released Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Python 1.0</td>
                    <td>January 1994</td>
                </tr>
                <tr>
                    <td>Python 1.5</td>
                    <td>December 31, 1997</td>
                </tr>
                <tr>
                    <td>Python 1.6</td>
                    <td>September 5, 2000</td>
                </tr>
                <tr>
                    <td>Python 2.0</td>
                    <td>October 16, 2000</td>
                </tr>
                <tr>
                    <td>Python 2.1</td>
                    <td>April 17, 2001</td>
                </tr>
                <tr>
                    <td>Python 2.2</td>
                    <td>December 21, 2001</td>
                </tr>
                <tr>
                    <td>Python 2.3</td>
                    <td>July 29, 2003</td>
                </tr>
                <tr>
                    <td>Python 2.4</td>
                    <td>November 30, 2004</td>
                </tr>
                <tr>
                    <td>Python 2.5</td>
                    <td>September 19, 2006</td>
                </tr>
                <tr>
                    <td>Python 2.6</td>
                    <td>October 1, 2008</td>
                </tr>
                <tr>
                    <td>Python 2.7</td>
                    <td>July 3, 2010</td>
                </tr>
                <tr>
                    <td>Python 3.0</td>
                    <td>December 3, 2008</td>
                </tr>
                <tr>
                    <td>Python 3.1</td>
                    <td>June 27, 2009</td>
                </tr>
                <tr>
                    <td>Python 3.2</td>
                    <td>February 20, 2011</td>
                </tr>
                <tr>
                    <td>Python 3.3</td>
                    <td>September 29, 2012</td>
                </tr>
                <tr>
                    <td>Python 3.4</td>
                    <td>March 16, 2014</td>
                </tr>
                <tr>
                    <td>Python 3.5</td>
                    <td>September 13, 2015</td>
                </tr>
                <tr>
                    <td>Python 3.6</td>
                    <td>December 23, 2016</td>
                </tr>
                <tr>
                    <td>Python 3.7</td>
                    <td>June 27, 2018</td>
                </tr>
                <tr>
                    <td>Python 3.8</td>
                    <td>October 14, 2019</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        topic: 'Variables',
        content: `<h1>Python Variables</h1>
        <p>Variable is a name that is used to refer to memory location. Python variable is also known as an identifier and used to hold value.</p>
        <p>In Python, we don&apos;t need to specify the type of variable because Python is a infer language and smart enough to get variable type.</p>
        <p>Variable names can be a group of both the letters and digits, but they have to begin with a letter or an underscore.</p>
        <p>It is recommended to use lowercase letters for the variable name. Rahul and rahul both are two different variables.</p>
        <p><br></p>
        <h2>Identifier Naming</h2>
        <p>Variables are the example of identifiers. An Identifier is used to identify the literals used in the program. The rules to name an identifier are given below.</p>
        <ul>
            <li>The first character of the variable must be an alphabet or underscore ( _ ).</li>
            <li>All the characters except the first character may be an alphabet of lower-case(a-z), upper-case (A-Z), underscore, or digit (0-9).</li>
            <li>Identifier name must not contain any white-space, or special character (!, @, #, %, ^, &amp;, *).</li>
            <li>Identifier name must not be similar to any keyword defined in the language.</li>
            <li>Identifier names are case sensitive; for example, my name, and MyName is not the same.</li>
            <li>Examples of valid identifiers: a123, _n, n_9, etc.</li>
            <li>Examples of invalid identifiers: 1a, n%4, n 9, etc.</li>
        </ul>
        <h2>Declaring Variable and Assigning Values</h2>
        <p>Python does not bind us to declare a variable before using it in the application. It allows us to create a variable at the required time.</p>
        <p>We don&apos;t need to declare explicitly variable in Python. When we assign any value to the variable, that variable is declared automatically.</p>
        <p>The equal (=) operator is used to assign value to a variable.</p>
        <h2>Object References</h2>
        <p>It is necessary to understand how the Python interpreter works when we declare a variable. The process of treating variables is somewhat different from many other programming languages.</p>
        <p>Python is the highly object-oriented programming language; that&apos;s why every data item belongs to a specific type of class. Consider the following example.</p>
        <div>
            <div>
                <ol start="1">
                    <li>print(&quot;John&quot;) &nbsp;</li>
                </ol>
            </div>
        </div>
        <p><strong>Output:</strong></p>
        <div>
            <pre><strong>John</strong></pre>
        </div>
        <p>The Python object creates an integer object and displays it to the console. In the above print statement, we have created a string object. Let&apos;s check the type of it using the Python built-in <strong>type()</strong> function.</p>
        <ol start="1">
            <li>type(&quot;John&quot;) &nbsp;</li>
        </ol>
        <p><strong>Output:</strong></p>
        <div>
            <pre>&lt;class &apos;str&apos;&gt;</pre>
        </div>
        <p>In Python, variables are a symbolic name that is a reference or pointer to an object. The variables are used to denote objects by that name.</p>
        <p>Let&apos;s understand the following example</p>
        <ol start="1">
            <li>a =&nbsp;50&nbsp; &nbsp;</li>
        </ol>
        <p><img src="src\assets\python-variables.png" alt="Python Variables"></p>
        <p>In the above image, the variable&nbsp;<strong>a</strong> refers to an integer object.</p>
        <p>Suppose we assign the integer value 50 to a new variable b.</p>
        <p><br></p>
        <div>
            <p>a = 50</p>
            <p>b = a</p>
        </div>
        <p><img src="https://static.javatpoint.com/python/images/python-variables2.png" alt="Python Variables"></p>
        <p>The variable b refers to the same object that a points to because Python does not create another object.</p>
        <p>Let&apos;s assign the new value to b. Now both variables will refer to the different objects.</p>
        <div>
            <p>a = 50</p>
            <p>b =100</p>
        </div>
        <p><img src="https://static.javatpoint.com/python/images/python-variables3.png" alt="Python Variables"></p>
        <p>Python manages memory efficiently if we assign the same variable to two different values.</p>
        <h2>Object Identity</h2>
        <p>In Python, every created object identifies uniquely in Python. Python provides the guaranteed that no two objects will have the same identifier. The built-in&nbsp;<strong>id()</strong> function, is used to identify the object identifier. Consider the following example.</p>
        <ol start="1">
            <li>a =&nbsp;50&nbsp;&nbsp;</li>
            <li>b = a &nbsp;</li>
            <li>print(id(a)) &nbsp;</li>
            <li>print(id(b)) &nbsp;</li>
            <li># Reassigned variable a &nbsp;</li>
            <li>a = 500&nbsp;&nbsp;</li>
            <li>print(id(a)) &nbsp;</li>
        </ol>
        <p><strong>Output:</strong></p>
        <div>
            <pre>140734982691168
        140734982691168
        2822056960944</pre>
        </div>
        <p>We assigned the&nbsp;<strong>b = a, a</strong> and&nbsp;<strong>b</strong> both point to the same object. When we checked by the&nbsp;<strong>id()</strong> function it returned the same number. We reassign&nbsp;<strong>a</strong> to 500; then it referred to the new object identifier.</p>
        <h2>Variable Names</h2>
        <p>We have already discussed how to declare the valid variable. Variable names can be any length can have uppercase, lowercase (A to Z, a to z), the digit (0-9), and underscore character(_). Consider the following example of valid variables names.</p>
        <ol start="1">
            <li>name =&nbsp;&quot;Devansh&quot;&nbsp;&nbsp;</li>
            <li>age = 20&nbsp;&nbsp;</li>
            <li>marks = 80.50&nbsp;&nbsp;</li>
            <li>&nbsp;&nbsp;</li>
            <li>print(name) &nbsp;</li>
            <li>print(age) &nbsp;</li>
            <li>print(marks) &nbsp;</li>
        </ol>
        <p><strong>Output:</strong></p>
        <div>
            <pre>Devansh
        20
        80.5</pre>
        </div>
        <p><strong>Consider the following valid variables name.</strong></p>
        <ol start="1">
            <li>name =&nbsp;&quot;A&quot;&nbsp;&nbsp;</li>
            <li>Name = &quot;B&quot;&nbsp;&nbsp;</li>
            <li>naMe = &quot;C&quot;&nbsp;&nbsp;</li>
            <li>NAME = &quot;D&quot;&nbsp;&nbsp;</li>
            <li>n_a_m_e = &quot;E&quot;&nbsp;&nbsp;</li>
            <li>_name = &quot;F&quot;&nbsp;&nbsp;</li>
            <li>name_ = &quot;G&quot;&nbsp;&nbsp;</li>
            <li>_name_ = &quot;H&quot; &nbsp;</li>
            <li>na56me = &quot;I&quot; &nbsp;</li>
        </ol>
        <p>print(name,Name,naMe,NAME,n_a_m_e, NAME, n_a_m_e, _name, name_,_name, na56me) &nbsp;</p>
        <p><strong>Output:</strong></p>
        <div>
            <pre>A B C D E D E F G F I</pre>
        </div>
        <p>In the above example, we have declared a few valid variable names such as name, _name_ , etc. But it is not recommended because when we try to read code, it may create confusion. The variable name should be descriptive to make code more readable.</p>
        <p>The multi-word keywords can be created by the following method.</p>
        
        
        
        <ul>
            <li><strong>Camel Case -</strong> In the camel case, each word or abbreviation in the middle of begins with a capital letter. There is no intervention of whitespace. For example - nameOfStudent, valueOfVaraible, etc.</li>
            <li><strong>Pascal Case -</strong> It is the same as the Camel Case, but here the first word is also capital. For example - NameOfStudent, etc.</li>
            <li><strong>Snake Case -</strong> In the snake case, Words are separated by the underscore. For example - name_of_student, etc.</li>
        </ul>
        <h2>Multiple Assignment</h2>
        <p>Python allows us to assign a value to multiple variables in a single statement, which is also known as multiple assignments.</p>
        <p>We can apply multiple assignments in two ways, either by assigning a single value to multiple variables or assigning multiple values to multiple variables. Consider the following example.</p>
        <p><strong>1. Assigning single value to multiple variables</strong></p>
        <p><strong>Eg:</strong></p>
        
                <ol start="1">
                    <li>x=y=z=50&nbsp; &nbsp;&nbsp;</li>
                    <li>print(x) &nbsp; &nbsp;</li>
                    <li>print(y) &nbsp; &nbsp;</li>
                    <li>print(z) &nbsp; &nbsp;</li>
                </ol>
        
        <p><strong>Output:</strong></p>
        <div>
            <pre>50  
        50  
        50  </pre>
        </div>
        <p><strong>2. Assigning multiple values to multiple variables:</strong></p>
        <p><strong>Eg:</strong></p>
        
                <ol start="1">
                    <li>a,b,c=5,10,15&nbsp; &nbsp;&nbsp;</li>
                    <li>print a &nbsp; &nbsp;</li>
                    <li>print b &nbsp; &nbsp;</li>
                    <li>print c &nbsp; &nbsp;</li>
                </ol>
        
        <p><strong>Output:</strong></p>
        <div>
            <pre>5  
        10  
        15  </pre>
        </div>
        <p>The values will be assigned in the order in which variables appear.</p>
        <h2>Python Variable Types</h2>
        <p>There are two types of variables in Python - Local variable and Global variable. Let&apos;s understand the following variables.</p>
        <h3>Local Variable</h3>
        <p>Local variables are the variables that declared inside the function and have scope within the function. Let&apos;s understand the following example.</p>
        <p><strong>Example -</strong></p>
        
           
                <ol start="1">
                    <li>#&nbsp;Declaring&nbsp;a&nbsp;function&nbsp;&nbsp;</li>
                    <li>def&nbsp;add(): &nbsp;</li>
                    <li>&nbsp; &nbsp; #&nbsp;Defining&nbsp;local&nbsp;variables.&nbsp;They&nbsp;has&nbsp;scope&nbsp;only&nbsp;within&nbsp;a&nbsp;function&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; a = 20&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; b = 30&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; c = a + b &nbsp;</li>
                    <li>&nbsp; &nbsp; print(&quot;The&nbsp;sum&nbsp;is:&quot;, c) &nbsp;</li>
                    <li>&nbsp;&nbsp;</li>
                    <li>#&nbsp;Calling&nbsp;a&nbsp;function&nbsp;&nbsp;</li>
                    <li>add() &nbsp;</li>
                </ol>
         
        <p><strong>Output:</strong></p>
        <div>
            <pre>The sum is: 50</pre>
        </div>
        <p><strong>Explanation:</strong></p>
        <p>In the above code, we declared a function named&nbsp;<strong>add()</strong> and assigned a few variables within the function. These variables will be referred to as the&nbsp;<strong>local variables</strong> which have scope only inside the function. If we try to use them outside the function, we get a following error.</p>
        
                <ol start="1">
                    <li>add() &nbsp;</li>
                    <li># Accessing local variable outside the function&nbsp;&nbsp;&nbsp;</li>
                    <li>print(a) &nbsp;</li>
                </ol>
        
        <p><strong>Output:</strong></p>
        <div>
            <pre>The sum is: 50
            print(a)
        NameError: name &apos;a&apos; is not defined</pre>
        </div>
        <p>We tried to use local variable outside their scope; it threw the&nbsp;<strong>NameError.</strong></p>
        <h3>Global Variables</h3>
        <p>Global variables can be used throughout the program, and its scope is in the entire program. We can use global variables inside or outside the function.</p>
        <p>A variable declared outside the function is the global variable by default. Python provides the&nbsp;<strong>global</strong> keyword to use global variable inside the function. If we don&apos;t use the&nbsp;<strong>global</strong> keyword, the function treats it as a local variable. Let&apos;s understand the following example.</p>
        <p><strong>Example -</strong></p>
        
                <ol start="1">
                    <li>#&nbsp;Declare&nbsp;a&nbsp;variable&nbsp;and&nbsp;initialize&nbsp;it&nbsp;&nbsp;</li>
                    <li>x = 101&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;</li>
                    <li>#&nbsp;Global&nbsp;variable&nbsp;in&nbsp;function&nbsp;&nbsp;</li>
                    <li>def&nbsp;mainFunction(): &nbsp;</li>
                    <li>&nbsp; &nbsp; #&nbsp;printing&nbsp;a&nbsp;global&nbsp;variable&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; global&nbsp;x &nbsp;</li>
                    <li>&nbsp; &nbsp; print(x) &nbsp;</li>
                    <li>&nbsp; &nbsp; #&nbsp;modifying&nbsp;a&nbsp;global&nbsp;variable&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; x = &apos;Welcome&nbsp;To&nbsp;Javatpoint&apos;&nbsp;&nbsp;</li>
                    <li>&nbsp; &nbsp; print(x) &nbsp;</li>
                    <li>&nbsp;&nbsp;</li>
                    <li>mainFunction() &nbsp;</li>
                    <li>print(x) &nbsp;</li>
                </ol>
          
        <p><strong>Output:</strong></p>
        <div>
            <pre>101
        Welcome To Javatpoint
        Welcome To Javatpoint</pre>
        </div>
        <p><strong>Explanation:</strong></p>
        <p>In the above code, we declare a global variable&nbsp;<strong>x</strong> and assign a value to it. Next, we defined a function and accessed the declared variable using the&nbsp;<strong>global</strong> keyword inside the function. Now we can modify its value. Then, we assigned a new string value to the variable x.</p>
        <p>Now, we called the function and proceeded to print&nbsp;<strong>x</strong>. It printed the as newly assigned value of x.</p>
        <h2>Delete a variable</h2>
        <p>We can delete the variable using the&nbsp;<strong>del</strong> keyword. The syntax is given below.</p>
        <p><strong>Syntax -</strong></p>
        
                <ol start="1">
                    <li>del&nbsp;&lt;variable_name&gt; &nbsp;</li>
                </ol>
         
        <p>In the following example, we create a variable x and assign value to it. We deleted variable x, and print it, we get the error&nbsp;<strong>&quot;variable x is not defined&quot;</strong>. The variable x will no longer use in future.</p>
        <p><strong>Example -</strong></p>
        
                <ol start="1">
                    <li>#&nbsp;Assigning&nbsp;a&nbsp;value&nbsp;to&nbsp;x&nbsp;&nbsp;</li>
                    <li>x = 6&nbsp;&nbsp;</li>
                    <li>print(x) &nbsp;</li>
                    <li># deleting a variable.&nbsp;&nbsp;&nbsp;</li>
                    <li>del&nbsp;x &nbsp;</li>
                    <li>print(x) &nbsp;</li>
                </ol>
         
        <p><strong>Output:</strong></p>
        <div>
            <pre>6
        Traceback (most recent call last):
          File &quot;C:/Users/DEVANSH SHARMA/PycharmProjects/Hello/multiprocessing.py&quot;, line 389, in 
            print(x)
        NameError: name &apos;x&apos; is not defined</pre>
        </div>
        <h2>Maximum Possible Value of an Integer in Python</h2>
        <p>Unlike the other programming languages, Python doesn&apos;t have long int or float data types. It treats all integer values as an&nbsp;<strong>int</strong> data type. Here, the question arises. What is the maximum possible value can hold by the variable in Python? Consider the following example.</p>
        <p><strong>Example -</strong></p>
        
                <ol start="1">
                    <li>#&nbsp;A&nbsp;Python&nbsp;program&nbsp;to&nbsp;display&nbsp;that&nbsp;we&nbsp;can&nbsp;store&nbsp;&nbsp;</li>
                    <li>#&nbsp;large&nbsp;numbers&nbsp;in&nbsp;Python&nbsp;&nbsp;</li>
                    <li>&nbsp;&nbsp;</li>
                    <li>a = 10000000000000000000000000000000000000000000&nbsp;&nbsp;</li>
                    <li>a = a + 1&nbsp;&nbsp;</li>
                    <li>print(type(a)) &nbsp;</li>
                    <li>print&nbsp;(a) &nbsp;</li>
                </ol>
        
        <p><strong>Output:</strong></p>
        <div>
            <pre>&lt;class &apos;int&apos;&gt;
        10000000000000000000000000000000000000000001</pre>
        </div>
        <p>As we can see in the above example, we assigned a large integer value to variable&nbsp;<strong>x</strong> and checked its type. It printed&nbsp;<strong>class &lt;int&gt;</strong> not long int. Hence, there is no limitation number by bits and we can expand to the limit of our memory.</p>
        <p>Python doesn&apos;t have any special data type to store larger numbers.</p>
        <h3>Print Single and Multiple Variables in Python</h3>
        <p>We can print multiple variables within the single print statement. Below are the example of single and multiple printing values.</p>
        <p><strong>Example - 1 (Printing Single Variable)</strong></p>
        
                <ol start="1">
                    <li># printing single value&nbsp;&nbsp;&nbsp;</li>
                    <li>a = 5&nbsp;&nbsp;</li>
                    <li>print(a) &nbsp;</li>
                    <li>print((a)) &nbsp;</li>
                </ol>
        
        <p><strong>Output:</strong></p>
        <div>
            <pre>5
        5</pre>
        </div>
        <p><strong>Example - 2 (Printing Multiple Variables)</strong></p>
        
                <ol start="1">
                    <li>a =&nbsp;5&nbsp;&nbsp;</li>
                    <li>b = 6&nbsp;&nbsp;</li>
                    <li>#&nbsp;printing&nbsp;multiple&nbsp;variables&nbsp;&nbsp;</li>
                    <li>print(a,b) &nbsp;</li>
                    <li>#&nbsp;separate&nbsp;the&nbsp;variables&nbsp;by&nbsp;the&nbsp;comma&nbsp;&nbsp;</li>
                    <li>Print(1,&nbsp;2,&nbsp;3,&nbsp;4,&nbsp;5,&nbsp;6,&nbsp;7,&nbsp;8) &nbsp;&nbsp;</li>
                </ol>
         
        <p><strong>Output:</strong></p>
        <div>
            <pre>5 6
        1 2 3 4 5 6 7 8</pre>
        </div>
        
        `
    },
    {
        topic: 'Data types',
        content: `
        <h2>Built-in Data Types</h2>
<p>In programming, data type is an important concept.</p>
<p>Variables can store data of different types, and different types can do different things.</p>
<p>Python has the following data types built-in by default, in these categories:</p>
<table class="w3-table">
<tbody>
<tr>
<td>Text Type:</td>
<td><code class="w3-codespan">str</code></td>
</tr>
<tr>
<td>Numeric Types:</td>
<td><code class="w3-codespan">int</code>,&nbsp;<code class="w3-codespan">float</code>,&nbsp;<code class="w3-codespan">complex</code></td>
</tr>
<tr>
<td>Sequence Types:</td>
<td><code class="w3-codespan">list</code>,&nbsp;<code class="w3-codespan">tuple</code>,&nbsp;<code class="w3-codespan">range</code></td>
</tr>
<tr>
<td>Mapping Type:</td>
<td><code class="w3-codespan">dict</code></td>
</tr>
<tr>
<td>Set Types:</td>
<td><code class="w3-codespan">set</code>,&nbsp;<code class="w3-codespan">frozenset</code></td>
</tr>
<tr>
<td>Boolean Type:</td>
<td><code class="w3-codespan">bool</code></td>
</tr>
<tr>
<td>Binary Types:</td>
<td><code class="w3-codespan">bytes</code>,&nbsp;<code class="w3-codespan">bytearray</code>,&nbsp;<code class="w3-codespan">memoryview</code></td>
</tr>
<tr>
<td>None Type:</td>
<td><code class="w3-codespan">NoneType</code></td>
</tr>
</tbody>
</table>
<hr />
<h2>Getting the Data Type</h2>
<p>You can get the data type of any object by using the&nbsp;<code class="w3-codespan">type()</code>&nbsp;function:</p>
<div class="w3-example">
<h3>Example</h3>
<p>Print the data type of the variable x:</p>
<div class="w3-code notranslate pythonHigh"><span class="pythoncolor">x =&nbsp;<span class="pythonnumbercolor">5</span><br /><span class="pythonkeywordcolor">print</span>(<span class="pythonkeywordcolor">type</span>(x))</span></div>
<a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type" target="_blank">Try it Yourself &raquo;</a></div>
<hr />
<h2>Setting the Data Type</h2>
<p>In Python, the data type is set when you assign a value to a variable:</p>
<table id="dtref" class="ws-table-all notranslate">
<tbody>
<tr>
<th>Example</th>
<th>Data Type</th>
<th>Try it</th>
</tr>
<tr>
<td>x = "Hello World"</td>
<td>str</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_str" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = 20</td>
<td>int</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_int" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = 20.5</td>
<td>float</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_float" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = 1j</td>
<td>complex</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_complex" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = ["apple", "banana", "cherry"]</td>
<td>list</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_list" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = ("apple", "banana", "cherry")</td>
<td>tuple</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_tuple" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = range(6)</td>
<td>range</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_range" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = {"name" : "John", "age" : 36}</td>
<td>dict</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_dict" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = {"apple", "banana", "cherry"}</td>
<td>set</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_set" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = frozenset({"apple", "banana", "cherry"})</td>
<td>frozenset</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_frozenset" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = True</td>
<td>bool</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_bool" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = b"Hello"</td>
<td>bytes</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_bytes" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = bytearray(5)</td>
<td>bytearray</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_bytearray" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = memoryview(bytes(5))</td>
<td>memoryview</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_memoryview" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>x = None</td>
<td>NoneType</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_type_nonetype" target="_blank">Try it &raquo;</a></td>
</tr>
</tbody>
</table>
<hr />
<div id="midcontentadcontainer">&nbsp;</div>
        
        `
    },
    {
        topic: 'Operators',
        content: `<h2>Python Operators</h2>
        <p>Operators are used to perform operations on variables and values.</p>
        <p>In the example below, we use the&nbsp;<code class="w3-codespan">+</code>&nbsp;operator to add together two values:</p>
        <div class="w3-example">
        <h3>Example</h3>
        <div class="w3-code notranslate pythonHigh"><span class="pythoncolor"><span class="pythonkeywordcolor">print</span>(<span class="pythonnumbercolor">10</span>&nbsp;+&nbsp;<span class="pythonnumbercolor">5</span>)</span></div>
        <a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper" target="_blank">Run example &raquo;</a></div>
        <p>Python divides the operators in the following groups:</p>
        <ul>
        <li>Arithmetic operators</li>
        <li>Assignment operators</li>
        <li>Comparison operators</li>
        <li>Logical operators</li>
        <li>Identity operators</li>
        <li>Membership operators</li>
        <li>Bitwise operators</li>
        </ul>
        <hr />
        <h2>Python Arithmetic Operators</h2>
        <p>Arithmetic operators are used with numeric values to perform common mathematical operations:</p>
        <table class="ws-table-all notranslate">
        <tbody>
        <tr>
        <th>Operator</th>
        <th>Name</th>
        <th>Example</th>
        <th>Try it</th>
        </tr>
        <tr>
        <td>+</td>
        <td>Addition</td>
        <td>x + y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_add" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>-</td>
        <td>Subtraction</td>
        <td>x - y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_sub" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>*</td>
        <td>Multiplication</td>
        <td>x * y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_mult" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>/</td>
        <td>Division</td>
        <td>x / y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_div" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>%</td>
        <td>Modulus</td>
        <td>x % y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_mod" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>**</td>
        <td>Exponentiation</td>
        <td>x ** y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_exp" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>//</td>
        <td>Floor division</td>
        <td>x // y</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_floordiv" target="_blank">Try it &raquo;</a></td>
        </tr>
        </tbody>
        </table>
        <hr />
        <h2>Python Assignment Operators</h2>
        <p>Assignment operators are used to assign values to variables:</p>
        <table class="ws-table-all notranslate">
        <tbody>
        <tr>
        <th>Operator</th>
        <th>Example</th>
        <th>Same As</th>
        <th>Try it</th>
        </tr>
        <tr>
        <td>=</td>
        <td>x = 5</td>
        <td>x = 5</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass1" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>+=</td>
        <td>x += 3</td>
        <td>x = x + 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass2" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>-=</td>
        <td>x -= 3</td>
        <td>x = x - 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass3" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>*=</td>
        <td>x *= 3</td>
        <td>x = x * 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass4" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>/=</td>
        <td>x /= 3</td>
        <td>x = x / 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass5" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>%=</td>
        <td>x %= 3</td>
        <td>x = x % 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass6" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>//=</td>
        <td>x //= 3</td>
        <td>x = x // 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass7" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>**=</td>
        <td>x **= 3</td>
        <td>x = x ** 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass8" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>&amp;=</td>
        <td>x &amp;= 3</td>
        <td>x = x &amp; 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass9" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>|=</td>
        <td>x |= 3</td>
        <td>x = x | 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass10" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>^=</td>
        <td>x ^= 3</td>
        <td>x = x ^ 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass11" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>&gt;&gt;=</td>
        <td>x &gt;&gt;= 3</td>
        <td>x = x &gt;&gt; 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass12" target="_blank">Try it &raquo;</a></td>
        </tr>
        <tr>
        <td>&lt;&lt;=</td>
        <td>x &lt;&lt;= 3</td>
        <td>x = x &lt;&lt; 3</td>
        <td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_ass13" target="_blank">Try it &raquo;</a></td>
        </tr>
        </tbody>
        </table>
        <hr />
        <div id="midcontentadcontainer">&nbsp;</div>
        
        <h2>Python Comparison Operators</h2>
<p>Comparison operators are used to compare two values:</p>
<table class="ws-table-all notranslate">
<tbody>
<tr>
<th>Operator</th>
<th>Name</th>
<th>Example</th>
<th>Try it</th>
</tr>
<tr>
<td>==</td>
<td>Equal</td>
<td>x == y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare1" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>!=</td>
<td>Not equal</td>
<td>x != y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare2" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>&gt;</td>
<td>Greater than</td>
<td>x &gt; y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare4" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>&lt;</td>
<td>Less than</td>
<td>x &lt; y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare5" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>&gt;=</td>
<td>Greater than or equal to</td>
<td>x &gt;= y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare6" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>&lt;=</td>
<td>Less than or equal to</td>
<td>x &lt;= y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_compare7" target="_blank">Try it &raquo;</a></td>
</tr>
</tbody>
</table>
<hr />
<h2>Python Logical Operators</h2>
<p>Logical operators are used to combine conditional statements:</p>
<table class="ws-table-all notranslate">
<tbody>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Example</th>
<th>Try it</th>
</tr>
<tr>
<td>and&nbsp;</td>
<td>Returns True if both statements are true</td>
<td>x &lt; 5 and&nbsp; x &lt; 10</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_logical1" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>or</td>
<td>Returns True if one of the statements is true</td>
<td>x &lt; 5 or x &lt; 4</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_logical2" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>not</td>
<td>Reverse the result, returns False if the result is true</td>
<td>not(x &lt; 5 and x &lt; 10)</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_logical3" target="_blank">Try it &raquo;</a></td>
</tr>
</tbody>
</table>
<hr />
<h2>Python Identity Operators</h2>
<p>Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location:</p>
<table class="ws-table-all notranslate">
<tbody>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Example</th>
<th>Try it</th>
</tr>
<tr>
<td>is&nbsp;</td>
<td>Returns True if both variables are the same object</td>
<td>x is y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_identity1" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>is not</td>
<td>Returns True if both variables are not the same object</td>
<td>x is not y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_identity2" target="_blank">Try it &raquo;</a></td>
</tr>
</tbody>
</table>
<hr />
<h2>Python Membership Operators</h2>
<p>Membership operators are used to test if a sequence is presented in an object:</p>
<table class="ws-table-all notranslate">
<tbody>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Example</th>
<th>Try it</th>
</tr>
<tr>
<td>in&nbsp;</td>
<td>Returns True if a sequence with the specified value is present in the object</td>
<td>x in y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_membership1" target="_blank">Try it &raquo;</a></td>
</tr>
<tr>
<td>not in</td>
<td>Returns True if a sequence with the specified value is not present in the object</td>
<td>x not in y</td>
<td><a class="w3-btn btnsmall btnsmall" href="https://www.w3schools.com/python/trypython.asp?filename=demo_oper_membership2" target="_blank">Try it &raquo;</a></td>
</tr>
</tbody>
</table>
<hr />
<h2>Python Bitwise Operators</h2>
<p>Bitwise operators are used to compare (binary) numbers:</p>
<table class="ws-table-all notranslate">
<tbody>
<tr>
<th>Operator</th>
<th>Name</th>
<th>Description</th>
</tr>
<tr>
<td>&amp;&nbsp;</td>
<td>AND</td>
<td>Sets each bit to 1 if both bits are 1</td>
</tr>
<tr>
<td>|</td>
<td>OR</td>
<td>Sets each bit to 1 if one of two bits is 1</td>
</tr>
<tr>
<td>&nbsp;^</td>
<td>XOR</td>
<td>Sets each bit to 1 if only one of two bits is 1</td>
</tr>
<tr>
<td>~&nbsp;</td>
<td>NOT</td>
<td>Inverts all the bits</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>Zero fill left shift</td>
<td>Shift left by pushing zeros in from the right and let the leftmost bits fall off</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>Signed right shift</td>
<td>Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off</td>
</tr>
</tbody>
</table>
<div id="midcontentadcontainer">&nbsp;</div>
        
        
        
        
        `
    },
    {
        topic: 'Loops',
        content: `<h2>Python Loops</h2>
        <p>Python has two primitive loop commands:</p>
        <ul>
        <li><span class="w3-codespan">while</span>&nbsp;loops</li>
        <li><span class="w3-codespan">for</span>&nbsp;loops</li>
        </ul>
        <hr />
        <h2>The while Loop</h2>
        <p>With the&nbsp;<span class="w3-codespan">while</span>&nbsp;loop we can execute a set of statements as long as a condition is true.</p>
        <div class="w3-example">
        <h3>Example</h3>
        <p>Print i as long as i is less than 6:</p>
        <div class="w3-code notranslate pythonHigh"><span class="pythoncolor">i =&nbsp;<span class="pythonnumbercolor">1</span><br /><span class="pythonkeywordcolor">while</span>&nbsp;i &lt;&nbsp;<span class="pythonnumbercolor">6</span>:<br />&nbsp;&nbsp;<span class="pythonkeywordcolor">print</span>(i)<br />&nbsp;&nbsp;i +=&nbsp;<span class="pythonnumbercolor">1</span><br /></span></div>
        <a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_while" target="_blank">Try it Yourself &raquo;</a></div>
        <div class="w3-panel w3-note">
        <p><strong>Note:</strong>&nbsp;remember to increment i, or else the loop will continue forever.</p>
        </div>
        <p>The&nbsp;<span class="w3-codespan">while</span>&nbsp;loop requires relevant variables to be ready, in this example we need to define an indexing variable,&nbsp;<span class="w3-codespan">i</span>, which we set to 1.</p>
        <hr />
        <h2>The break Statement</h2>
        <p>With the&nbsp;<span class="w3-codespan">break</span>&nbsp;statement we can stop the loop even if the while condition is true:</p>
        <div class="w3-example">
        <h3>Example</h3>
        <p>Exit the loop when i is 3:</p>
        <div class="w3-code notranslate pythonHigh"><span class="pythoncolor">i =&nbsp;<span class="pythonnumbercolor">1</span><br /><span class="pythonkeywordcolor">while</span>&nbsp;i &lt;&nbsp;<span class="pythonnumbercolor">6</span>:<br />&nbsp;&nbsp;<span class="pythonkeywordcolor">print</span>(i)<br />&nbsp;&nbsp;<span class="pythonkeywordcolor">if</span>&nbsp;i ==&nbsp;<span class="pythonnumbercolor">3</span>:<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="pythonkeywordcolor">break</span><br />&nbsp;&nbsp;i +=&nbsp;<span class="pythonnumbercolor">1</span></span></div>
        <a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_while_break" target="_blank">Try it Yourself &raquo;</a></div>
        <hr />
        <div id="midcontentadcontainer">&nbsp;</div>
        <h2>The continue Statement</h2>
<p>With the&nbsp;<span class="w3-codespan">continue</span>&nbsp;statement we can stop the current iteration, and continue with the next:</p>
<div class="w3-example">
<h3>Example</h3>
<p>Continue to the next iteration if i is 3:</p>
<div class="w3-code notranslate pythonHigh"><span class="pythoncolor">i =&nbsp;<span class="pythonnumbercolor">0</span><br /><span class="pythonkeywordcolor">while</span>&nbsp;i &lt;&nbsp;<span class="pythonnumbercolor">6</span>:<br />&nbsp;&nbsp;i +=&nbsp;<span class="pythonnumbercolor">1</span><br />&nbsp;&nbsp;<span class="pythonkeywordcolor">if</span>&nbsp;i ==&nbsp;<span class="pythonnumbercolor">3</span>:<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="pythonkeywordcolor">continue</span><br />&nbsp;&nbsp;<span class="pythonkeywordcolor">print</span>(i)<br /></span></div>
<a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_while_continue" target="_blank">Try it Yourself &raquo;</a></div>
<hr />
<h2>The else Statement</h2>
<p>With the&nbsp;<span class="w3-codespan">else</span>&nbsp;statement we can run a block of code once when the condition no longer is true:</p>
<div class="w3-example">
<h3>Example</h3>
<p>Print a message once the condition is false:</p>
<div class="w3-code notranslate pythonHigh"><span class="pythoncolor">i =&nbsp;<span class="pythonnumbercolor">1</span><br /><span class="pythonkeywordcolor">while</span>&nbsp;i &lt;&nbsp;<span class="pythonnumbercolor">6</span>:<br />&nbsp;&nbsp;<span class="pythonkeywordcolor">print</span>(i)<br />&nbsp;&nbsp;i +=&nbsp;<span class="pythonnumbercolor">1</span><br /><span class="pythonkeywordcolor">else</span>:<br />&nbsp;&nbsp;<span class="pythonkeywordcolor">print</span>(<span class="pythonstringcolor">"i is no longer less than 6"</span>)<br /></span></div>
<a class="w3-btn w3-margin-bottom" href="https://www.w3schools.com/python/trypython.asp?filename=demo_while_else" target="_blank">Try it Yourself &raquo;</a></div>
<hr /><form id="w3-exerciseform" action="https://www.w3schools.com/python/exercise.asp?filename=exercise_while_loops1" autocomplete="off" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow">
<h2>Exercise:</h2>
<p>Print&nbsp;<code class="w3-codespan">i</code>&nbsp;as long as&nbsp;<code class="w3-codespan">i</code>&nbsp;is less than 6.</p>
<div class="exerciseprecontainer">
<pre>i = 1
<input maxlength="5" name="ex1" type="text" /> i &lt; 6<input maxlength="1" name="ex2" type="text" />
  print(i)
  i += 1
</pre>
</div>
</div>
</form>
        `
    },
    {
        topic: 'Functions',
        content: `<h1>Python Functions</h1>
        <p
            style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            <strong
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Python
                Functions</strong>is a block of related statements designed to perform a computational,
            logical,
            or evaluative task. The idea is to put some commonly or repeatedly done tasks together and make a function so that
            instead of writing the same code again and again for different inputs,
            we can do the function calls to reuse code contained in it over and over again.&nbsp;
        </p>
        <p
            style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            Functions can be both built-in or user-defined. It helps the program to be concise,
            non-repetitive,
            and organized.</p>
        <p
            style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            <strong
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Syntax:</strong>&nbsp;
        </p>
        <pre
            style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: rgb(39, 50, 57); font-family: Consolas, monospace; overflow: auto; white-space: pre; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">def function_name(parameters): &quot;
        &quot;
        &quot;
        docstring&quot;
        &quot;
        &quot;
        statement(s) return expression</pre>
        <h2
            style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            <strong
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline;">Creating
                a Function</strong></h2>
        <p
            style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            We can create a &nbsp;
            Python function using the <strong
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">def</strong>keyword.
        </p>
        <h3
            style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            Example: Python Creating Function</h3>
        <div class="container"
            style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
            <div class="line number1 index0 alt2"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                <code class="comments"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># A simple Python function</code>
            </div>
            <div class="line number2 index1 alt1"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                &nbsp;
            </div>
            <div class="line number3 index2 alt2"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                <code class="keyword"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                    class="plain"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>fun():</code>
            </div>
            <div class="line number4 index3 alt1"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                <code class="undefined spaces"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        </code><code class="functions"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                    class="plain"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                    class="string"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; Welcome to GFG&quot; </code><code
                    class="plain"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
            </div>
        </div>
        <div class="responsive-tabs-wrapper"
            style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
            
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Calling a &nbsp;
                Function</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                After creating a function we can call it by using the name of the function followed by parenthesis containing
                parameters of that particular function.</p>
            <div
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <br></div>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Example: Python Calling Function</h3>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
        
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># A simple Python function</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>fun():</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        </code><code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; Welcome to GFG&quot; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code>&nbsp;
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver code to call a function</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>fun()</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">Welcome to GFG</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Arguments of a Function</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Arguments are the values passed inside the parenthesis of the function. A function can have any number of
                arguments separated by a comma.</p>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Example: Python Function with arguments</h3>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                In this example,
                we will create a simple function to check whether the number passed as an argument to the function is even or
                odd.</p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
               
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># A simple Python function to check</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># whether x is even or odd</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>evenOdd(x):</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>if</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>%</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>0</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>):</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; even&quot; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>else</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>:</code>
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; odd&quot; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number12 index11 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver code to call the function</code>
                </div>
                <div class="line number13 index12 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>evenOdd(</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number14 index13 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>evenOdd(</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>3</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">even odd</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Types of Arguments</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Python supports various types of arguments that can be passed at the time of the function call. Let&rsquo;
                s discuss each type in detail.</p>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <a href="https://www.geeksforgeeks.org/default-arguments-in-python/"
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; outline: 0px; color: var(--color-gfg); text-decoration: underline; font-weight: 500; display: inline;"><strong
                        style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline;">Default
                        arguments</strong></a></h3>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                A default argument is a parameter that assumes a default value if a value is not provided in the function call
                for that argument. The following example illustrates Default arguments.&nbsp;
            </p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <p># Python program to demonstrate</p>
            <p># default arguments</p>
            <p>def myFun(x, y=50):</p>
            <p>&nbsp;
                &nbsp;
                print(&quot; x: &quot; , x)</p>
            <p>&nbsp;
                &nbsp;
                print(&quot; y: &quot; , y)</p>
            <p># Driver code (We call myFun() with only</p>
            <p># argument)</p>
            <p>myFun(10)</p>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">(&apos; x: &apos; , 10) (&apos; y: &apos; , 50)</pre>
            </div>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Like C++default arguments,
                any number of arguments in a function can have a default value. But once we have a default argument,
                all the arguments to its right must also have default values.</p>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline;">Keyword
                    arguments</strong></h3>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The idea is to allow the caller to specify the argument name with values so that caller does not need to
                remember the order of parameters.</p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Python program to demonstrate Keyword Arguments</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>student(firstname, lastname):</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(firstname, lastname)</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Keyword arguments</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>student(firstname</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Geeks&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, lastname</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Practice&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>student(lastname</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Practice&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, firstname</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Geeks&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">(&apos; Geeks&apos; , &apos; Practice&apos; ) (&apos; Geeks&apos; , &apos; Practice&apos; )</pre>
            </div>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <a href="https://www.geeksforgeeks.org/args-kwargs-python/"
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; outline: 0px; color: var(--color-gfg); text-decoration: underline; font-weight: 500; display: inline;">Variable-length
                    arguments</a></h3>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                In Python,
                we can pass a variable number of arguments to a function using special symbols. There are two special symbols:
            </p>
            <ul
                style="box-sizing: border-box; margin: 0px 0px 24px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; list-style: outside disc; flex-direction: column; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <li
                    style="box-sizing: border-box; margin: 0px 0px 0px 24px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; text-align: left; line-height: 1.58; color: var(--color-black);">
                    *args (Non-Keyword Arguments)</li>
                <li
                    style="box-sizing: border-box; margin: 0px 0px 0px 24px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; text-align: left; line-height: 1.58; color: var(--color-black);">
                    **kwargs (Keyword Arguments)</li>
            </ul>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline;">Example
                    1:</strong>Variable length non-keywords argument</h3>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
               
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Python program to illustrate</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># *args for variable number of arguments</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>argv):</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>for</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>arg&nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>in</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>argv:</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(arg)</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Hello&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Welcome&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; to&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; GeeksforGeeks&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">Hello Welcome to GeeksforGeeks</pre>
            </div>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline;">Example
                    2: Variable length keyword arguments</strong></h3>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
               
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Python program to illustrate</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># *kwargs for variable number of keyword arguments</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>kwargs):</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>for</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>key,
        value&nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>in</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>kwargs.items():</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; %s==%s&quot; </code>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>%</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(key, value))</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver code</code>
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(first</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Geeks&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, mid</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; for&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, last</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&apos; Geeks&apos; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">first==Geeks mid==for last==Geeks</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Docstring</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The first string after the function is called the Document string or <a
                    href="https://www.geeksforgeeks.org/python-docstrings/"
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; outline: 0px; color: var(--color-gfg); text-decoration: underline; font-weight: 500; display: inline; word-break: break-word;">Docstring</a>in
                short. This is used to describe the functionality of the function. The use of docstring in functions is optional
                but it is considered a good practice.</p>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The below syntax can be used to print out the docstring of a function:</p>
            <pre
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: rgb(39, 50, 57); font-family: Consolas, monospace; overflow: auto; white-space: pre; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 16px; vertical-align: baseline;">Syntax:</strong>print(function_name.__doc__)</pre>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline;">Example:
                    Adding Docstring to the function</strong></h3>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># A simple Python function to check</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># whether x is even or odd</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>evenOdd(x):</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'>&quot;
        &quot;
        &quot;
        Function to check if the number is even or odd&quot;
        &quot;
        &quot;
        </code></div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code>&nbsp;
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>if</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>%</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>0</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>):</code>
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; even&quot; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>else</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>:</code>
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(</code><code
                        class="string"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 255) !important;'>&quot; odd&quot; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>)</code>
                </div>
                <div class="line number12 index11 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number13 index12 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number14 index13 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver code to call the function</code>
                </div>
                <div class="line number15 index14 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(evenOdd.__doc__)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">Function to check if the number is even or odd</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The return statement</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The function return statement is used to exit from a function and go back to the function caller and return the
                specified value or data item to the caller.</p>
            <pre
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: rgb(39, 50, 57); font-family: Consolas, monospace; overflow: auto; white-space: pre; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><strong style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 16px; vertical-align: baseline;">Syntax:</strong>return [expression_list]</pre>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                The return statement can consist of a variable,
                an expression,
                or a constant which is returned to the end of the function execution. If none of the above is present with the
                return statement a None object is returned.</p>
            <h3
                style="box-sizing: border-box; margin: 24px 0px; padding: 0px; border: 0px; font-size: 18.72px; vertical-align: baseline; clear: both; word-break: break-word; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Example: Python Function Return Statement</h3>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>square_value(num):</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'>&quot;
        &quot;
        &quot;
        This function returns the square</code></div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'>value of the entered number&quot;
        &quot;
        &quot;
        </code></div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>return</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>num</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code>
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(square_value(</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>))</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(square_value(</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>-</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>4</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>))</code>
                </div>
            </div>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output:</strong>
            </p>
            <pre
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: rgb(39, 50, 57); font-family: Consolas, monospace; overflow: auto; white-space: pre; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">4 16</pre>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Is Python Function Pass by Reference or pass by value?&nbsp;
            </h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                One important thing to note is,
                in Python every variable name is a reference. When we pass a variable to a function,
                a new reference to the object is created. Parameter passing in Python is the same as reference passing in Java.
            </p>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Example:</strong>
            </p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Here x is a new reference to same list lst</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(x):</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp;
        &nbsp;
        &nbsp;
        </code><code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x[</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>0</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>]&nbsp;
        </code><code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>20</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp;
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver Code (Note that lst is modified</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># after function call.</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>lst&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>[</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>10</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>11</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>12</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>13</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>14</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>15</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>]</code>
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(lst)</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(lst)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">[20, 11, 12, 13, 14, 15]</pre>
            </div>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                When we pass a reference and change the received reference to something else, the connection between the passed
                and received parameter is broken. For example, consider the below program.<br
                    style="box-sizing: border-box;">&nbsp; </p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(x):</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># After below line link of x with previous</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># object gets broken. A new object is assigned</code>
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># to x.</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>[</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>20</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>30</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>40</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>]</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver Code (Note that lst is not modified</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># after function call.</code>
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>lst&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>[</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>10</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>11</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>12</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>13</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>14</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>, &nbsp; </code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>15</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>]</code>
                </div>
                <div class="line number12 index11 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(lst)</code>
                </div>
                <div class="line number13 index12 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(lst)</code>
                </div>
                <p><br></p>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">[10, 11, 12, 13, 14, 15]</pre>
            </div>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Another example to demonstrate that the reference link is broken if we assign a new value (inside the
                function).&nbsp; </p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
               
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(x):</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># After below line link of x with previous</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># object gets broken. A new object is assigned</code>
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># to x.</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>20</code>
                </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver Code (Note that lst is not modified</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># after function call.</code>
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>10</code>
                </div>
                <div class="line number12 index11 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>myFun(x)</code>
                </div>
                <div class="line number13 index12 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(x)</code>
                </div>
                <p><br></p>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">10</pre>
            </div>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Exercise:</strong>
                Try to guess the output of the following code.&nbsp; </p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>swap(x, y):</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>temp&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>y</code>
                </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="undefined spaces"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important;'>&nbsp; &nbsp; &nbsp; </code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>y&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>temp</code>
                </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Driver code</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>2</code>
                </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>y&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>3</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>swap(x, y)</code>
                </div>
                <div class="line number11 index10 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(x)</code>
                </div>
                <div class="line number12 index11 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(y)</code>
                </div>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">2 3</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <a href="https://www.geeksforgeeks.org/python-lambda-anonymous-functions-filter-map-reduce/"
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; outline: 0px; color: var(--color-gfg); text-decoration: underline; font-weight: 500; display: inline;">Anonymous
                    functions:</a>&nbsp; </h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                In Python, an anonymous function means that a function is without a name. As we already know the def keyword is
                used to define the normal functions and the lambda keyword is used to create anonymous functions. Please see <a
                    href="https://www.geeksforgeeks.org/python-lambda-anonymous-functions-filter-map-reduce/"
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; outline: 0px; color: var(--color-gfg); text-decoration: underline; font-weight: 500; display: inline; word-break: break-word;">this</a>
                for details.</p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                
            </div>
            <div class="container"
                style='box-sizing: content-box !important; margin: 0px !important; padding: 5px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: relative !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important;'>
                <div class="line number1 index0 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># Python code to illustrate the cube of a number</code>
                </div>
                <div class="line number2 index1 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="comments"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 130, 0) !important;'># using lambda function</code>
                </div>
                <div class="line number3 index2 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number4 index3 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number5 index4 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>def</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>cube(x):&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>return</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code>
                </div>
                <div class="line number6 index5 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number7 index6 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>cube_v2&nbsp; </code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>=</code>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>lambda</code>
                    <code class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x : x</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code><code
                        class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>*</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>x</code>
                </div>
                <div class="line number8 index7 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    &nbsp; </div>
                <div class="line number9 index8 alt2"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="keyword"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 700 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 102, 153) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(cube(</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>7</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>))</code>
                </div>
                <div class="line number10 index9 alt1"
                    style='box-sizing: content-box !important; margin: 0px !important; padding: 0px 1em 0px 0px !important; border: 0px !important; font-size: var(--font-din); vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px rgb(255, 255, 255) !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; min-height: auto !important; white-space: pre !important;'>
                    <code class="functions"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(255, 20, 147) !important;'>print</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>(cube_v2(</code><code
                        class="value"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 153, 0) !important;'>7</code><code
                        class="plain"
                        style='box-sizing: content-box !important; margin: 0px !important; padding: 0px !important; border: 0px !important; font-size: 11pt !important; vertical-align: baseline !important; border-radius: 0px !important; background: 0px 0px !important; inset: auto !important; float: none !important; height: auto !important; line-height: 1.2em !important; outline: 0px !important; overflow: auto hidden !important; position: static !important; text-align: left !important; width: auto !important; font-family: Consolas, "Bitstream Vera Sans Mono", "Courier New", Courier, monospace !important; font-weight: 400 !important; font-style: normal !important; direction: ltr !important; box-shadow: none !important; display: inline !important; min-height: auto !important; color: rgb(0, 0, 0) !important;'>))</code>
                </div>
                <p><br></p>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">343</pre>
            </div>
            <h2
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 24px; vertical-align: baseline; clear: both; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                Python Function within Functions</h2>
            <p
                style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                A function that is defined inside another function is known as the inner function or nested function. Nested
                functions are able to access variables of the enclosing scope. Inner functions are used so that they can be
                protected from everything happening outside the function.</p>
            <div class="responsive-tabs-wrapper"
                style="box-sizing: border-box; margin: 0px 0px 20px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; clear: both; zoom: 1; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
               
            </div>
            <div>
                <div><code># Python program to</code></div>
                <div><code># demonstrate accessing of</code></div>
                <div><code># variables of nested functions</code></div>
                <div>&nbsp; </div>
                <div><code>def</code> <code>f1():</code></div>
                <div><code>&nbsp; &nbsp; &nbsp; </code><code>s&nbsp; </code><code>=</code>
                    <code>&apos; I love GeeksforGeeks&apos; </code></div>
                <div><code>&nbsp; &nbsp; &nbsp; </code>&nbsp; </div>
                <div><code>&nbsp; &nbsp; &nbsp; </code><code>def</code> <code>f2():</code></div>
                <div><code>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </code><code>print</code><code>(s)</code></div>
                <div><code>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </code>&nbsp; </div>
                <div><code>&nbsp; &nbsp; &nbsp; </code><code>f2()</code></div>
                <div>&nbsp; </div>
                <div><code># Driver&apos; s code</code></div>
                <div><code>f1()</code></div>
                <p><br></p>
            </div>
            <div class="code-output"
                style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline; color: rgb(39, 50, 57); font-family: urw-din, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: 0.162px; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
                <strong
                    style="box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; font-size: 17px; vertical-align: baseline;">Output</strong>
                <pre
                    style="box-sizing: border-box; margin: 0px 0px 10px; padding: 20px; border: 0px; font-size: 12pt; vertical-align: baseline; background-color: var(--gfg-grey-bg); border-radius: 10px; color: var(--color-black); font-family: Consolas, monospace; overflow: auto; white-space: pre;">I love GeeksforGeeks</pre>
            </div>
        </div>`
    },
    {
        topic: 'Strings',
        content: `<h1>Strings in Python</h1><p>In Python,&nbsp;<strong>Strings&nbsp;</strong>are arrays of bytes representing Unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1. Square brackets can be used to access elements of the string.</p>
        <h2>Creating a String</h2>
        <p>Strings in Python can be created using single quotes or double quotes or even triple quotes.&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist1-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist1-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program for</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># Creation of String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="comments"># Creating a String</code></div>
        <div class="line number5 index4 alt2"><code class="comments"># with single Quotes</code></div>
        <div class="line number6 index5 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">'Welcome to the Geeks World'</code></div>
        <div class="line number7 index6 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"String with the use of Single Quotes: "</code><code class="plain">)</code></div>
        <div class="line number8 index7 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number9 index8 alt2">&nbsp;</div>
        <div class="line number10 index9 alt1"><code class="comments"># Creating a String</code></div>
        <div class="line number11 index10 alt2"><code class="comments"># with double Quotes</code></div>
        <div class="line number12 index11 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"I'm a Geek"</code></div>
        <div class="line number13 index12 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nString with the use of Double Quotes: "</code><code class="plain">)</code></div>
        <div class="line number14 index13 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number15 index14 alt2">&nbsp;</div>
        <div class="line number16 index15 alt1"><code class="comments"># Creating a String</code></div>
        <div class="line number17 index16 alt2"><code class="comments"># with triple Quotes</code></div>
        <div class="line number18 index17 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="comments">'''I'm a Geek and I live in a world of "Geeks"'''</code></div>
        <div class="line number19 index18 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nString with the use of Triple Quotes: "</code><code class="plain">)</code></div>
        <div class="line number20 index19 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number21 index20 alt2">&nbsp;</div>
        <div class="line number22 index21 alt1"><code class="comments"># Creating String with triple</code></div>
        <div class="line number23 index22 alt2"><code class="comments"># Quotes allows multiple lines</code></div>
        <div class="line number24 index23 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="comments">'''Geeks</code></div>
        <div class="line number25 index24 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">For</code></div>
        <div class="line number26 index25 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">Life'''</code></div>
        <div class="line number27 index26 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nCreating a multiline String: "</code><code class="plain">)</code></div>
        <div class="line number28 index27 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>String with the use of Single Quotes: 
        Welcome to the Geeks World
        
        String with the use of Double Quotes: 
        I'm a Geek
        
        String with the use of Triple Quotes: 
        I'm a Geek and I live in a world of "Geeks"
        
        Creating a multiline String: 
        Geeks
                    For
                    Life</pre>
        <h2>Accessing characters in Python</h2>
        <p>In Python, individual characters of a String can be accessed by using the method of Indexing. Indexing allows negative address references to access characters from the back of the String, e.g. -1 refers to the last character, -2 refers to the second last character, and so on.&nbsp;</p>
        <p>While accessing an index out of the range will cause an&nbsp;<strong>IndexError</strong>. Only Integers are allowed to be passed as an index, float or other types that will cause a&nbsp;<strong>TypeError</strong>.&nbsp;</p>
        <div id="AP_G4GR_5">&nbsp;</div>
        <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200204160843/strings.jpg" alt="strings" /></p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist2-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist2-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to Access</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># characters of String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"GeeksForGeeks"</code></div>
        <div class="line number5 index4 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number7 index6 alt2">&nbsp;</div>
        <div class="line number8 index7 alt1"><code class="comments"># Printing First character</code></div>
        <div class="line number9 index8 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nFirst character of String is: "</code><code class="plain">)</code></div>
        <div class="line number10 index9 alt1"><code class="keyword">print</code><code class="plain">(String1[</code><code class="value">0</code><code class="plain">])</code></div>
        <div class="line number11 index10 alt2">&nbsp;</div>
        <div class="line number12 index11 alt1"><code class="comments"># Printing Last character</code></div>
        <div class="line number13 index12 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nLast character of String is: "</code><code class="plain">)</code></div>
        <div class="line number14 index13 alt1"><code class="functions">print</code><code class="plain">(String1[</code><code class="keyword">-</code><code class="value">1</code><code class="plain">])</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Initial String: 
        GeeksForGeeks
        
        First character of String is: 
        G
        
        Last character of String is: 
        s</pre>
        <h2>String Slicing</h2>
        <p>To access a range of characters in the String, the method of slicing is used. Slicing in a String is done by using a Slicing operator (colon).&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist3-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist3-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># demonstrate String slicing</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="comments"># Creating a String</code></div>
        <div class="line number5 index4 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"GeeksForGeeks"</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number7 index6 alt2"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number8 index7 alt1">&nbsp;</div>
        <div class="line number9 index8 alt2"><code class="comments"># Printing 3rd to 12th character</code></div>
        <div class="line number10 index9 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nSlicing characters from 3-12: "</code><code class="plain">)</code></div>
        <div class="line number11 index10 alt2"><code class="keyword">print</code><code class="plain">(String1[</code><code class="value">3</code><code class="plain">:</code><code class="value">12</code><code class="plain">])</code></div>
        <div class="line number12 index11 alt1">&nbsp;</div>
        <div class="line number13 index12 alt2"><code class="comments"># Printing characters between</code></div>
        <div class="line number14 index13 alt1"><code class="comments"># 3rd and 2nd last character</code></div>
        <div class="line number15 index14 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nSlicing characters between "</code> <code class="keyword">+</code></div>
        <div class="line number16 index15 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="string">"3rd and 2nd last character: "</code><code class="plain">)</code></div>
        <div class="line number17 index16 alt2"><code class="functions">print</code><code class="plain">(String1[</code><code class="value">3</code><code class="plain">:</code><code class="keyword">-</code><code class="value">2</code><code class="plain">])</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Initial String: 
        GeeksForGeeks
        
        Slicing characters from 3-12: 
        ksForGeek
        
        Slicing characters between 3rd and 2nd last character: 
        ksForGee</pre>
        <h2>Deleting/Updating from a String</h2>
        <p>In Python, Updation or deletion of characters from a String is not allowed. This will cause an error because item assignment or item deletion from a String is not supported. Although deletion of the entire String is possible with the use of a built-in del keyword. This is because Strings are immutable, hence elements of a String cannot be changed once it has been assigned. Only new strings can be reassigned to the same name.&nbsp;</p>
        <h4>Updation of a character:&nbsp;</h4>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist4-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist4-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to Update</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># character of a String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"Hello, I'm a Geek"</code></div>
        <div class="line number5 index4 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number7 index6 alt2">&nbsp;</div>
        <div class="line number8 index7 alt1"><code class="comments"># Updating a character</code></div>
        <div class="line number9 index8 alt2"><code class="comments"># of the String</code></div>
        <div class="line number10 index9 alt1"><code class="plain">String1[</code><code class="value">2</code><code class="plain">] </code><code class="keyword">=</code> <code class="string">'p'</code></div>
        <div class="line number11 index10 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nUpdating character at 2nd Index: "</code><code class="plain">)</code></div>
        <div class="line number12 index11 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Error:</strong>&nbsp;</p>
        <blockquote>
        <p>Traceback (most recent call last):&nbsp;<br />File &ldquo;/home/360bb1830c83a918fc78aa8979195653.py&rdquo;, line 10, in&nbsp;<br />String1[2] = &lsquo;p&rsquo;&nbsp;<br />TypeError: &lsquo;str&rsquo; object does not support item assignment</p>
        </blockquote>
        <h4>Updating Entire String:</h4>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist5-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist5-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to Update</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># entire String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"Hello, I'm a Geek"</code></div>
        <div class="line number5 index4 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number7 index6 alt2">&nbsp;</div>
        <div class="line number8 index7 alt1"><code class="comments"># Updating a String</code></div>
        <div class="line number9 index8 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"Welcome to the Geek World"</code></div>
        <div class="line number10 index9 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nUpdated String: "</code><code class="plain">)</code></div>
        <div class="line number11 index10 alt2"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Initial String: 
        Hello, I'm a Geek
        
        Updated String: 
        Welcome to the Geek World </pre>
        <h4>Deletion of a character:&nbsp;</h4>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist6-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist6-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to Delete</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># characters from a String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"Hello, I'm a Geek"</code></div>
        <div class="line number5 index4 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number7 index6 alt2">&nbsp;</div>
        <div class="line number8 index7 alt1"><code class="comments"># Deleting a character</code></div>
        <div class="line number9 index8 alt2"><code class="comments"># of the String</code></div>
        <div class="line number10 index9 alt1"><code class="keyword">del</code> <code class="plain">String1[</code><code class="value">2</code><code class="plain">]</code></div>
        <div class="line number11 index10 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nDeleting character at 2nd Index: "</code><code class="plain">)</code></div>
        <div class="line number12 index11 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Error:</strong>&nbsp;</p>
        <blockquote>
        <p>Traceback (most recent call last):&nbsp;<br />File &ldquo;/home/499e96a61e19944e7e45b7a6e1276742.py&rdquo;, line 10, in&nbsp;<br />del String1[2]&nbsp;<br />TypeError: &lsquo;str&rsquo; object doesn&rsquo;t support item deletion</p>
        </blockquote>
        <h4>Deleting Entire String:</h4>
        <p>Deletion of the entire string is possible with the use of del keyword. Further, if we try to print the string, this will produce an error because String is deleted and is unavailable to be printed.&nbsp;&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist7-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist7-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program to Delete</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># entire String</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"Hello, I'm a Geek"</code></div>
        <div class="line number5 index4 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"Initial String: "</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number7 index6 alt2">&nbsp;</div>
        <div class="line number8 index7 alt1"><code class="comments"># Deleting a String</code></div>
        <div class="line number9 index8 alt2"><code class="comments"># with the use of del</code></div>
        <div class="line number10 index9 alt1"><code class="keyword">del</code> <code class="plain">String1</code></div>
        <div class="line number11 index10 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nDeleting entire String: "</code><code class="plain">)</code></div>
        <div class="line number12 index11 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Error:</strong>&nbsp;</p>
        <blockquote>
        <p>Traceback (most recent call last):&nbsp;<br />File &ldquo;/home/e4b8f2170f140da99d2fe57d9d8c6a94.py&rdquo;, line 12, in&nbsp;<br />print(String1)&nbsp;<br />NameError: name &lsquo;String1&rsquo; is not defined&nbsp;</p>
        </blockquote>
        <h2>Escape Sequencing in Python</h2>
        <p>While printing Strings with single and double quotes in it causes&nbsp;<strong>SyntaxError</strong>&nbsp;because String already contains Single and Double Quotes and hence cannot be printed with the use of either of these. Hence, to print such a String either Triple Quotes are used or Escape sequences are used to print such Strings.&nbsp;</p>
        <p>Escape sequences start with a backslash and can be interpreted differently. If single quotes are used to represent a string, then all the single quotes present in the string must be escaped and same is done for Double Quotes.&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist8-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist8-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program for</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># Escape Sequencing</code></div>
        <div class="line number3 index2 alt2"><code class="comments"># of String</code></div>
        <div class="line number4 index3 alt1">&nbsp;</div>
        <div class="line number5 index4 alt2"><code class="comments"># Initial String</code></div>
        <div class="line number6 index5 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="comments">'''I'm a "Geek"'''</code></div>
        <div class="line number7 index6 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"Initial String with use of Triple Quotes: "</code><code class="plain">)</code></div>
        <div class="line number8 index7 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number9 index8 alt2">&nbsp;</div>
        <div class="line number10 index9 alt1"><code class="comments"># Escaping Single Quote</code></div>
        <div class="line number11 index10 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">'I\'m a "Geek"'</code></div>
        <div class="line number12 index11 alt1"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nEscaping Single Quote: "</code><code class="plain">)</code></div>
        <div class="line number13 index12 alt2"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number14 index13 alt1">&nbsp;</div>
        <div class="line number15 index14 alt2"><code class="comments"># Escaping Double Quotes</code></div>
        <div class="line number16 index15 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"I'm a \"Geek\""</code></div>
        <div class="line number17 index16 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nEscaping Double Quotes: "</code><code class="plain">)</code></div>
        <div class="line number18 index17 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number19 index18 alt2">&nbsp;</div>
        <div class="line number20 index19 alt1"><code class="comments"># Printing Paths with the</code></div>
        <div class="line number21 index20 alt2"><code class="comments"># use of Escape Sequences</code></div>
        <div class="line number22 index21 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"C:\\Python\\Geeks\\"</code></div>
        <div class="line number23 index22 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nEscaping Backslashes: "</code><code class="plain">)</code></div>
        <div class="line number24 index23 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Initial String with use of Triple Quotes: 
        I'm a "Geek"
        
        Escaping Single Quote: 
        I'm a "Geek"
        
        Escaping Double Quotes: 
        I'm a "Geek"
        
        Escaping Backslashes: 
        C:\Python\Geeks\</pre>
        <p>To ignore the escape sequences in a String,&nbsp;<strong>r</strong>&nbsp;or&nbsp;<strong>R</strong>&nbsp;is used, this implies that the string is a raw string and escape sequences inside it are to be ignored.</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist9-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist9-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Printing Geeks in HEX</code></div>
        <div class="line number2 index1 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"This is \x47\x65\x65\x6b\x73 in \x48\x45\x58"</code></div>
        <div class="line number3 index2 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nPrinting in HEX with the use of Escape Sequences: "</code><code class="plain">)</code></div>
        <div class="line number4 index3 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number5 index4 alt2">&nbsp;</div>
        <div class="line number6 index5 alt1"><code class="comments"># Using raw String to</code></div>
        <div class="line number7 index6 alt2"><code class="comments"># ignore Escape Sequences</code></div>
        <div class="line number8 index7 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="plain">r</code><code class="string">"This is \x47\x65\x65\x6b\x73 in \x48\x45\x58"</code></div>
        <div class="line number9 index8 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nPrinting Raw String in HEX Format: "</code><code class="plain">)</code></div>
        <div class="line number10 index9 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;&nbsp;</p>
        <pre>Printing in HEX with the use of Escape Sequences: 
        This is Geeks in HEX
        
        Printing Raw String in HEX Format: 
        This is \x47\x65\x65\x6b\x73 in \x48\x45\x58</pre>
        <h2>Formatting of Strings</h2>
        <p>Strings in Python can be formatted with the use of&nbsp;<a href="https://www.geeksforgeeks.org/python-string-format-method/">format()</a>&nbsp;method which is a very versatile and powerful tool for formatting Strings. Format method in String contains curly braces {} as placeholders which can hold arguments according to position or keyword to specify the order.</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist10-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist10-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program for</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># Formatting of Strings</code></div>
        <div class="line number3 index2 alt2">&nbsp;</div>
        <div class="line number4 index3 alt1"><code class="comments"># Default order</code></div>
        <div class="line number5 index4 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{} {} {}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="string">'Geeks'</code><code class="plain">, </code><code class="string">'For'</code><code class="plain">, </code><code class="string">'Life'</code><code class="plain">)</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"Print String in default order: "</code><code class="plain">)</code></div>
        <div class="line number7 index6 alt2"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number8 index7 alt1">&nbsp;</div>
        <div class="line number9 index8 alt2"><code class="comments"># Positional Formatting</code></div>
        <div class="line number10 index9 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{1} {0} {2}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="string">'Geeks'</code><code class="plain">, </code><code class="string">'For'</code><code class="plain">, </code><code class="string">'Life'</code><code class="plain">)</code></div>
        <div class="line number11 index10 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nPrint String in Positional order: "</code><code class="plain">)</code></div>
        <div class="line number12 index11 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number13 index12 alt2">&nbsp;</div>
        <div class="line number14 index13 alt1"><code class="comments"># Keyword Formatting</code></div>
        <div class="line number15 index14 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{l} {f} {g}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(g</code><code class="keyword">=</code><code class="string">'Geeks'</code><code class="plain">, f</code><code class="keyword">=</code><code class="string">'For'</code><code class="plain">, l</code><code class="keyword">=</code><code class="string">'Life'</code><code class="plain">)</code></div>
        <div class="line number16 index15 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nPrint String in order of Keywords: "</code><code class="plain">)</code></div>
        <div class="line number17 index16 alt2"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Print String in default order: 
        Geeks For Life
        
        Print String in Positional order: 
        For Geeks Life
        
        Print String in order of Keywords: 
        Life For Geeks</pre>
        <p>Integers such as Binary, hexadecimal, etc., and floats can be rounded or displayed in the exponent form with the use of format specifiers.&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist11-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist11-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Formatting of Integers</code></div>
        <div class="line number2 index1 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{0:b}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="value">16</code><code class="plain">)</code></div>
        <div class="line number3 index2 alt2"><code class="keyword">print</code><code class="plain">(</code><code class="string">"\nBinary representation of 16 is "</code><code class="plain">)</code></div>
        <div class="line number4 index3 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number5 index4 alt2">&nbsp;</div>
        <div class="line number6 index5 alt1"><code class="comments"># Formatting of Floats</code></div>
        <div class="line number7 index6 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{0:e}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="value">165.6458</code><code class="plain">)</code></div>
        <div class="line number8 index7 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nExponent representation of 165.6458 is "</code><code class="plain">)</code></div>
        <div class="line number9 index8 alt2"><code class="functions">print</code><code class="plain">(String1)</code></div>
        <div class="line number10 index9 alt1">&nbsp;</div>
        <div class="line number11 index10 alt2"><code class="comments"># Rounding off Integers</code></div>
        <div class="line number12 index11 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"{0:.2f}"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="value">1</code><code class="keyword">/</code><code class="value">6</code><code class="plain">)</code></div>
        <div class="line number13 index12 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\none-sixth is : "</code><code class="plain">)</code></div>
        <div class="line number14 index13 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Binary representation of 16 is 
        10000
        
        Exponent representation of 165.6458 is 
        1.656458e+02
        
        one-sixth is : 
        0.17</pre>
        <p>A string can be left() or center(^) justified with the use of format specifiers, separated by a colon(:).&nbsp;&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist12-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist12-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># String alignment</code></div>
        <div class="line number2 index1 alt1"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"|{:&lt;10}|{:^10}|{:&gt;10}|"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="string">'Geeks'</code><code class="plain">, </code><code class="string">'for'</code><code class="plain">, </code><code class="string">'Geeks'</code><code class="plain">)</code></div>
        <div class="line number3 index2 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nLeft, center and right alignment with Formatting: "</code><code class="plain">)</code></div>
        <div class="line number4 index3 alt1"><code class="keyword">print</code><code class="plain">(String1)</code></div>
        <div class="line number5 index4 alt2">&nbsp;</div>
        <div class="line number6 index5 alt1"><code class="comments"># To demonstrate aligning of spaces</code></div>
        <div class="line number7 index6 alt2"><code class="plain">String1 </code><code class="keyword">=</code> <code class="string">"\n{0:^16} was founded in {1:&lt;4}!"</code><code class="plain">.</code><code class="functions">format</code><code class="plain">(</code><code class="string">"GeeksforGeeks"</code><code class="plain">, </code><code class="value">2009</code><code class="plain">)</code></div>
        <div class="line number8 index7 alt1"><code class="functions">print</code><code class="plain">(String1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Left, center and right alignment with Formatting: 
        |Geeks     |   for    |     Geeks|
        
         GeeksforGeeks   was founded in 2009 !</pre>
        <p>Old style formatting was done without the use of format method by using<strong>&nbsp;%&nbsp;</strong>operator&nbsp;</p>
        <div class="responsive-tabs-wrapper">
        <div class="responsive-tabs responsive-tabs--enabled">
        <ul class="responsive-tabs__list">
        <li id="tablist13-tab1" class="responsive-tabs__list__item responsive-tabs__list__item--active" tabindex="0">Python3</li>
        </ul>
        <div id="tablist13-panel1" class="tabcontent responsive-tabs__panel responsive-tabs__panel--active">
        <div class="code-block">
        <div class="code-gutter">
        <div class="line number1 index0 alt2"><code class="comments"># Python Program for</code></div>
        <div class="line number2 index1 alt1"><code class="comments"># Old Style Formatting</code></div>
        <div class="line number3 index2 alt2"><code class="comments"># of Integers</code></div>
        <div class="line number4 index3 alt1">&nbsp;</div>
        <div class="line number5 index4 alt2"><code class="plain">Integer1 </code><code class="keyword">=</code> <code class="value">12.3456789</code></div>
        <div class="line number6 index5 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"Formatting in 3.2f format: "</code><code class="plain">)</code></div>
        <div class="line number7 index6 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">'The value of Integer1 is %3.2f'</code> <code class="keyword">%</code> <code class="plain">Integer1)</code></div>
        <div class="line number8 index7 alt1"><code class="functions">print</code><code class="plain">(</code><code class="string">"\nFormatting in 3.4f format: "</code><code class="plain">)</code></div>
        <div class="line number9 index8 alt2"><code class="functions">print</code><code class="plain">(</code><code class="string">'The value of Integer1 is %3.4f'</code> <code class="keyword">%</code> <code class="plain">Integer1)</code></div>
        &nbsp;</div>
        <div class="code-container">&nbsp;</div>
        </div>
        </div>
        </div>
        </div>
        <p><strong>Output:</strong>&nbsp;</p>
        <pre>Formatting in 3.2f format: 
        The value of Integer1 is 12.35
        
        Formatting in 3.4f format: 
        The value of Integer1 is 12.3457</pre>`
    },
    {
        topic: 'List',
        content: `<h1>Python List</h1>
        <p class="editor-contents__short-description">Python lists are one of the most versatile data types that allow us to work with multiple elements at once. For example,</p>
        <div id="node-51" class="node node-python clearfix">
        <div class="content">
        <pre><code class="python hljs"><span class="hljs-comment"># a list of programming languages</span>
        [<span class="hljs-string">'Python'</span>, <span class="hljs-string">'C++'</span>, <span class="hljs-string">'JavaScript'</span>]</code></pre>
        <hr />
        <h2 id="create">Create Python Lists</h2>
        <p>In Python, a list is created by placing elements inside square brackets&nbsp;<code>[]</code>, separated by commas.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># list of integers</span>
        my_list = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]</code></pre>
        <p>A list can have any number of items and they may be of different types (integer, float, string, etc.).</p>
        <pre><code class="python hljs"><span class="hljs-comment"># empty list</span>
        my_list = []
        
        <span class="hljs-comment"># list with mixed data types</span>
        my_list = [<span class="hljs-number">1</span>, <span class="hljs-string">"Hello"</span>, <span class="hljs-number">3.4</span>]</code></pre>
        <p>A list can also have another list as an item. This is called a nested list.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># nested list</span>
        my_list = [<span class="hljs-string">"mouse"</span>, [<span class="hljs-number">8</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>], [<span class="hljs-string">'a'</span>]]</code></pre>
        <hr />
        <h2 id="access">Access List Elements</h2>
        <p>There are various ways in which we can access the elements of a list.</p>
        <h3 id="index">List Index</h3>
        <p>We can use the index operator&nbsp;<code>[]</code>&nbsp;to access an item in a list. In Python, indices start at 0. So, a list having 5 elements will have an index from 0 to 4.</p>
        <p>Trying to access indexes other than these will raise an&nbsp;<code>IndexError</code>. The index must be an integer. We can't use float or other types, this will result in&nbsp;<code>TypeError</code>.</p>
        <p>Nested lists are accessed using nested indexing.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_list = [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'e'</span>]
        
        <span class="hljs-comment"># first item</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">0</span>])  <span class="hljs-comment"># p</span>
        
        <span class="hljs-comment"># third item</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">2</span>])  <span class="hljs-comment"># o</span>
        
        <span class="hljs-comment"># fifth item</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">4</span>])  <span class="hljs-comment"># e</span>
        
        <span class="hljs-comment"># Nested List</span>
        n_list = [<span class="hljs-string">"Happy"</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">5</span>]]
        
        <span class="hljs-comment"># Nested indexing</span>
        <span class="hljs-keyword">print</span>(n_list[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>])
        
        <span class="hljs-keyword">print</span>(n_list[<span class="hljs-number">1</span>][<span class="hljs-number">3</span>])
        
        <span class="hljs-comment"># Error! Only integer can be used for indexing</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">4.0</span>])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>p
        o
        e
        a
        5
        Traceback (most recent call last):
          File "&lt;string&gt;", line 21, in &lt;module&gt;
        TypeError: list indices must be integers or slices, not float</samp></pre>
        <hr />
        <h3 id="negative">Negative indexing</h3>
        <p>Python allows negative indexing for its sequences. The index of -1 refers to the last item, -2 to the second last item and so on.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Negative indexing in lists</span>
        my_list = [<span class="hljs-string">'p'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'o'</span>,<span class="hljs-string">'b'</span>,<span class="hljs-string">'e'</span>]
        
        <span class="hljs-comment"># last item</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">-1</span>])
        
        <span class="hljs-comment"># fifth last item</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">-5</span>])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>e
        p</samp></pre>
        <figure><img title="Python list indexing" src="https://cdn.programiz.com/sites/tutorial2program/files/python-list-index.png" alt="Python list indexing" width="500" height="211" />
        <figcaption>List indexing in Python</figcaption>
        </figure>
        <hr />
        <h2 id="slice">List Slicing in Python</h2>
        <p>We can access a range of items in a list by using the slicing operator&nbsp;<code>:</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># List slicing in Python</span>
        
        my_list = [<span class="hljs-string">'p'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'o'</span>,<span class="hljs-string">'g'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'a'</span>,<span class="hljs-string">'m'</span>,<span class="hljs-string">'i'</span>,<span class="hljs-string">'z'</span>]
        
        <span class="hljs-comment"># elements from index 2 to index 4</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">2</span>:<span class="hljs-number">5</span>])
        
        <span class="hljs-comment"># elements from index 5 to end</span>
        <span class="hljs-keyword">print</span>(my_list[<span class="hljs-number">5</span>:])
        
        <span class="hljs-comment"># elements beginning to end</span>
        <span class="hljs-keyword">print</span>(my_list[:])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>['o', 'g', 'r']
        ['a', 'm', 'i', 'z']
        ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z']</samp></pre>
        <p class="note-tip"><strong>Note:</strong>&nbsp;When we slice lists, the start index is inclusive but the end index is exclusive. For example,&nbsp;<code>my_list[2: 5]</code>&nbsp;returns a list with elements at index 2, 3 and 4, but not 5.</p>
        <hr />
        <h2 id="change">Add/Change List Elements</h2>
        <p>Lists are mutable, meaning their elements can be changed unlike&nbsp;<a href="https://www.programiz.com/python-programming/string">string</a>&nbsp;or&nbsp;<a href="https://www.programiz.com/python-programming/tuple">tuple</a>.</p>
        <p>We can use the assignment operator&nbsp;<code>=</code>&nbsp;to change an item or a range of items.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Correcting mistake values in a list</span>
        odd = [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>]
        
        <span class="hljs-comment"># change the 1st item    </span>
        odd[<span class="hljs-number">0</span>] = <span class="hljs-number">1</span>            
        
        <span class="hljs-keyword">print</span>(odd)
        
        <span class="hljs-comment"># change 2nd to 4th items</span>
        odd[<span class="hljs-number">1</span>:<span class="hljs-number">4</span>] = [<span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>]  
        
        <span class="hljs-keyword">print</span>(odd)                   </code></pre>
        </div>
        </div>
        </div>
        <p>&nbsp;</p>
        <div id="block-inject-1" class="block-inject block-inject-1">
        <div class="pgAdWrapper">
        <div id="div-gpt-ad-Programizcom37046" data-google-query-id="CJyJ4LyTyPcCFYMe1QodBucJWw">
        <div id="google_ads_iframe_/8095840,68410703/.2_A.37046.3_Programiz.com_tier1_0__container__"><iframe id="google_ads_iframe_/8095840,68410703/.2_A.37046.3_Programiz.com_tier1_0" tabindex="0" title="3rd party ad content" name="google_ads_iframe_/8095840,68410703/.2_A.37046.3_Programiz.com_tier1_0" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" data-google-container-id="5" data-load-complete="true"></iframe></div>
        </div>
        </div>
        </div>
        <div class="clearfix">&nbsp;</div>
        <p><strong>Output</strong></p>
        <pre><samp>[1, 4, 6, 8]
        [1, 3, 5, 7]</samp></pre>
        <p>We can add one item to a list using the&nbsp;<code>append()</code>&nbsp;method or add several items using the&nbsp;<code>extend()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Appending and Extending lists in Python</span>
        odd = [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>]
        
        odd.append(<span class="hljs-number">7</span>)
        
        <span class="hljs-keyword">print</span>(odd)
        
        odd.extend([<span class="hljs-number">9</span>, <span class="hljs-number">11</span>, <span class="hljs-number">13</span>])
        
        <span class="hljs-keyword">print</span>(odd)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>[1, 3, 5, 7]
        [1, 3, 5, 7, 9, 11, 13]</samp></pre>
        <p>We can also use&nbsp;<code>+</code>&nbsp;operator to combine two lists. This is also called concatenation.</p>
        <p>The&nbsp;<code>*</code>&nbsp;operator repeats a list for the given number of times.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Concatenating and repeating lists</span>
        odd = [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>]
        
        <span class="hljs-keyword">print</span>(odd + [<span class="hljs-number">9</span>, <span class="hljs-number">7</span>, <span class="hljs-number">5</span>])
        
        <span class="hljs-keyword">print</span>([<span class="hljs-string">"re"</span>] * <span class="hljs-number">3</span>)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>[1, 3, 5, 9, 7, 5]
        ['re', 're', 're']</samp></pre>
        <p>Furthermore, we can insert one item at a desired location by using the method&nbsp;<code>insert()</code>&nbsp;or insert multiple items by squeezing it into an empty slice of a list.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Demonstration of list insert() method</span>
        odd = [<span class="hljs-number">1</span>, <span class="hljs-number">9</span>]
        odd.insert(<span class="hljs-number">1</span>,<span class="hljs-number">3</span>)
        
        <span class="hljs-keyword">print</span>(odd)
        
        odd[<span class="hljs-number">2</span>:<span class="hljs-number">2</span>] = [<span class="hljs-number">5</span>, <span class="hljs-number">7</span>]
        
        <span class="hljs-keyword">print</span>(odd)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>[1, 3, 9]
        [1, 3, 5, 7, 9]</samp></pre>
        <hr />
        <h2 id="delete">Delete List Elements</h2>
        <p>We can delete one or more items from a list using the&nbsp;<a title="Python del" href="https://www.programiz.com/python-programming/del">Python del statement</a>. It can even delete the list entirely.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Deleting list items</span>
        my_list = [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'l'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'m'</span>]
        
        <span class="hljs-comment"># delete one item</span>
        <span class="hljs-keyword">del</span> my_list[<span class="hljs-number">2</span>]
        
        <span class="hljs-keyword">print</span>(my_list)
        
        <span class="hljs-comment"># delete multiple items</span>
        <span class="hljs-keyword">del</span> my_list[<span class="hljs-number">1</span>:<span class="hljs-number">5</span>]
        
        <span class="hljs-keyword">print</span>(my_list)
        
        <span class="hljs-comment"># delete the entire list</span>
        <span class="hljs-keyword">del</span> my_list
        
        <span class="hljs-comment"># Error: List not defined</span>
        <span class="hljs-keyword">print</span>(my_list)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>['p', 'r', 'b', 'l', 'e', 'm']
        ['p', 'm']
        Traceback (most recent call last):
          File "&lt;string&gt;", line 18, in &lt;module&gt;
        NameError: name 'my_list' is not defined</samp></pre>
        <p>We can use&nbsp;<code>remove()</code>&nbsp;to remove the given item or&nbsp;<code>pop()</code>&nbsp;to remove an item at the given index.</p>
        <p>The&nbsp;<code>pop()</code>&nbsp;method removes and returns the last item if the index is not provided. This helps us implement lists as stacks (first in, last out data structure).</p>
        <p>And, if we have to empty the whole list, we can use the&nbsp;<code>clear()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_list = [<span class="hljs-string">'p'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'o'</span>,<span class="hljs-string">'b'</span>,<span class="hljs-string">'l'</span>,<span class="hljs-string">'e'</span>,<span class="hljs-string">'m'</span>]
        my_list.remove(<span class="hljs-string">'p'</span>)
        
        <span class="hljs-comment"># Output: ['r', 'o', 'b', 'l', 'e', 'm']</span>
        <span class="hljs-keyword">print</span>(my_list)
        
        <span class="hljs-comment"># Output: 'o'</span>
        <span class="hljs-keyword">print</span>(my_list.pop(<span class="hljs-number">1</span>))
        
        <span class="hljs-comment"># Output: ['r', 'b', 'l', 'e', 'm']</span>
        <span class="hljs-keyword">print</span>(my_list)
        
        <span class="hljs-comment"># Output: 'm'</span>
        <span class="hljs-keyword">print</span>(my_list.pop())
        
        <span class="hljs-comment"># Output: ['r', 'b', 'l', 'e']</span>
        <span class="hljs-keyword">print</span>(my_list)
        
        my_list.clear()
        
        <span class="hljs-comment"># Output: []</span>
        <span class="hljs-keyword">print</span>(my_list)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>['r', 'o', 'b', 'l', 'e', 'm']
        o
        ['r', 'b', 'l', 'e', 'm']
        m
        ['r', 'b', 'l', 'e']
        []</samp></pre>
        <p>Finally, we can also delete items in a list by assigning an empty list to a slice of elements.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>my_list = [<span class="hljs-string">'p'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'o'</span>,<span class="hljs-string">'b'</span>,<span class="hljs-string">'l'</span>,<span class="hljs-string">'e'</span>,<span class="hljs-string">'m'</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>my_list[<span class="hljs-number">2</span>:<span class="hljs-number">3</span>] = []
        <span class="hljs-meta">&gt;&gt;&gt; </span>my_list
        [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'l'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'m'</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>my_list[<span class="hljs-number">2</span>:<span class="hljs-number">5</span>] = []
        <span class="hljs-meta">&gt;&gt;&gt; </span>my_list
        [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'m'</span>]</code></pre>
        <hr />
        <h2 id="method">Python List Methods</h2>
        <p>Python has many useful&nbsp;<a href="https://www.programiz.com/python-programming/methods/list">list methods</a>&nbsp;that makes it really easy to work with lists. Here are some of the commonly used list methods.</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Methods</th>
        <th>Descriptions</th>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/append">append()</a></td>
        <td>adds an element to the end of the list</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/extend">extend()</a></td>
        <td>adds all elements of a list to another list</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/insert">insert()</a></td>
        <td>inserts an item at the defined index</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/remove">remove()</a></td>
        <td>removes an item from the list</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/pop">pop()</a></td>
        <td>returns and removes an element at the given index</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/clear">clear()</a></td>
        <td>removes all items from the list</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/index">index()</a></td>
        <td>returns the index of the first matched item</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/count">count()</a></td>
        <td>returns the count of the number of items passed as an argument</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/sort">sort()</a></td>
        <td>sort items in a list in ascending order</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/reverse">reverse()</a></td>
        <td>reverse the order of items in the list</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/list/copy">copy()</a></td>
        <td>returns a shallow copy of the list</td>
        </tr>
        </tbody>
        </table>
        </div>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Example on Python list methods</span>
        
        my_list = [<span class="hljs-number">3</span>, <span class="hljs-number">8</span>, <span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>, <span class="hljs-number">8</span>, <span class="hljs-number">4</span>]
        
        <span class="hljs-comment"># Add 'a' to the end</span>
        my_list.append(<span class="hljs-string">'a'</span>)
        
        <span class="hljs-comment"># Output: [3, 8, 1, 6, 8, 8, 4, 'a']</span>
        <span class="hljs-keyword">print</span>(my_list)
        
        <span class="hljs-comment"># Index of first occurrence of 8</span>
        <span class="hljs-keyword">print</span>(my_list.index(<span class="hljs-number">8</span>))   <span class="hljs-comment"># Output: 1</span>
        
        <span class="hljs-comment"># Count of 8 in the list</span>
        <span class="hljs-keyword">print</span>(my_list.count(<span class="hljs-number">8</span>))  <span class="hljs-comment"># Output: 3 </span></code></pre>
        </div>
        </div>
        </div>
        <hr />
        <h2 id="comp">List Comprehension: Elegant way to create Lists</h2>
        <p>List comprehension is an elegant and concise way to create a new list from an existing list in Python.</p>
        <p>A list comprehension consists of an expression followed by&nbsp;<a href="https://www.programiz.com/python-programming/for-loop">for statement</a>&nbsp;inside square brackets.</p>
        <p>Here is an example to make a list with each item being increasing power of 2.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">pow2 = [<span class="hljs-number">2</span> ** x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">10</span>)]
        <span class="hljs-keyword">print</span>(pow2)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>[1, 2, 4, 8, 16, 32, 64, 128, 256, 512]</samp></pre>
        <p>This code is equivalent to:</p>
        <pre><code class="python hljs">pow2 = []
        <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">10</span>):
           pow2.append(<span class="hljs-number">2</span> ** x)</code></pre>
        <p>A list comprehension can optionally contain more&nbsp;<code>for</code>&nbsp;or&nbsp;<a href="https://www.programiz.com/python-programming/if-elif-else">if statements</a>. An optional&nbsp;<code>if</code>&nbsp;statement can filter out items for the new list. Here are some examples.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>pow2 = [<span class="hljs-number">2</span> ** x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">10</span>) <span class="hljs-keyword">if</span> x &gt; <span class="hljs-number">5</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>pow2
        [<span class="hljs-number">64</span>, <span class="hljs-number">128</span>, <span class="hljs-number">256</span>, <span class="hljs-number">512</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>odd = [x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">20</span>) <span class="hljs-keyword">if</span> x % <span class="hljs-number">2</span> == <span class="hljs-number">1</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>odd
        [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>, <span class="hljs-number">11</span>, <span class="hljs-number">13</span>, <span class="hljs-number">15</span>, <span class="hljs-number">17</span>, <span class="hljs-number">19</span>]
        <span class="hljs-meta">&gt;&gt;&gt; </span>[x+y <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> [<span class="hljs-string">'Python '</span>,<span class="hljs-string">'C '</span>] <span class="hljs-keyword">for</span> y <span class="hljs-keyword">in</span> [<span class="hljs-string">'Language'</span>,<span class="hljs-string">'Programming'</span>]]
        [<span class="hljs-string">'Python Language'</span>, <span class="hljs-string">'Python Programming'</span>, <span class="hljs-string">'C Language'</span>, <span class="hljs-string">'C Programming'</span>]</code></pre>
        <p>Visit&nbsp;<a href="https://www.programiz.com/python-programming/list-comprehension">Python list comprehension</a>&nbsp;to learn more.</p>
        <hr />
        <h2 id="other">Other List Operations in Python</h2>
        <h3 id="mem">List Membership Test</h3>
        <p>We can test if an item exists in a list or not, using the keyword&nbsp;<code>in</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_list = [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'l'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'m'</span>]
        
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'p'</span> <span class="hljs-keyword">in</span> my_list)
        
        <span class="hljs-comment"># Output: False</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'a'</span> <span class="hljs-keyword">in</span> my_list)
        
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'c'</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> my_list)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>True
        False
        True</samp></pre>
        <hr />
        <h3 id="iter">Iterating Through a List</h3>
        <p>Using a&nbsp;<code>for</code>&nbsp;loop we can iterate through each item in a list.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">for</span> fruit <span class="hljs-keyword">in</span> [<span class="hljs-string">'apple'</span>,<span class="hljs-string">'banana'</span>,<span class="hljs-string">'mango'</span>]:
            <span class="hljs-keyword">print</span>(<span class="hljs-string">"I like"</span>,fruit)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>I like apple
        I like banana
        I like mango</samp></pre>
        </div>
        </div>`
    },
    {
        topic: 'Tuples',
        content: `<h1>Python Tuple</h1>
        <div id="node-50" class="node node-python clearfix">
        <div class="content">
        <p id="introduction">A tuple in Python is similar to a&nbsp;<a href="https://www.programiz.com/python-programming/list">list</a>. The difference between the two is that we cannot change the elements of a tuple once it is assigned whereas we can change the elements of a list.</p>
        <hr />
        <h2 id="create">Creating a Tuple</h2>
        <p>A tuple is created by placing all the items (elements) inside parentheses&nbsp;<code>()</code>, separated by commas. The parentheses are optional, however, it is a good practice to use them.</p>
        <p>A tuple can have any number of items and they may be of different types (integer, float, list,&nbsp;<a href="https://www.programiz.com/python-programming/string">string</a>, etc.).</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Different types of tuples</span>
        
        <span class="hljs-comment"># Empty tuple</span>
        my_tuple = ()
        <span class="hljs-keyword">print</span>(my_tuple)
        
        <span class="hljs-comment"># Tuple having integers</span>
        my_tuple = (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>)
        <span class="hljs-keyword">print</span>(my_tuple)
        
        <span class="hljs-comment"># tuple with mixed datatypes</span>
        my_tuple = (<span class="hljs-number">1</span>, <span class="hljs-string">"Hello"</span>, <span class="hljs-number">3.4</span>)
        <span class="hljs-keyword">print</span>(my_tuple)
        
        <span class="hljs-comment"># nested tuple</span>
        my_tuple = (<span class="hljs-string">"mouse"</span>, [<span class="hljs-number">8</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>], (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>))
        <span class="hljs-keyword">print</span>(my_tuple)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>()
        (1, 2, 3)
        (1, 'Hello', 3.4)
        ('mouse', [8, 4, 6], (1, 2, 3))</samp></pre>
        <p>A tuple can also be created without using parentheses. This is known as tuple packing.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_tuple = <span class="hljs-number">3</span>, <span class="hljs-number">4.6</span>, <span class="hljs-string">"dog"</span>
        <span class="hljs-keyword">print</span>(my_tuple)
        
        <span class="hljs-comment"># tuple unpacking is also possible</span>
        a, b, c = my_tuple
        
        <span class="hljs-keyword">print</span>(a)      <span class="hljs-comment"># 3</span>
        <span class="hljs-keyword">print</span>(b)      <span class="hljs-comment"># 4.6</span>
        <span class="hljs-keyword">print</span>(c)      <span class="hljs-comment"># dog</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>(3, 4.6, 'dog')
        3
        4.6
        dog</samp></pre>
        <p>Creating a tuple with one element is a bit tricky.</p>
        <p>Having one element within parentheses is not enough. We will need a trailing comma to indicate that it is, in fact, a tuple.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_tuple = (<span class="hljs-string">"hello"</span>)
        <span class="hljs-keyword">print</span>(type(my_tuple))  <span class="hljs-comment"># &lt;class 'str'&gt;</span>
        
        <span class="hljs-comment"># Creating a tuple having one element</span>
        my_tuple = (<span class="hljs-string">"hello"</span>,)
        <span class="hljs-keyword">print</span>(type(my_tuple))  <span class="hljs-comment"># &lt;class 'tuple'&gt;</span>
        
        <span class="hljs-comment"># Parentheses is optional</span>
        my_tuple = <span class="hljs-string">"hello"</span>,
        <span class="hljs-keyword">print</span>(type(my_tuple))  <span class="hljs-comment"># &lt;class 'tuple'&gt;</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>&lt;class 'str'&gt;
        &lt;class 'tuple'&gt;
        &lt;class 'tuple'&gt;</samp></pre>
        <hr />
        <h2 id="access">Access Tuple Elements</h2>
        <p>There are various ways in which we can access the elements of a tuple.</p>
        <h3 id="index">1. Indexing</h3>
        <p>We can use the index operator&nbsp;<code>[]</code>&nbsp;to access an item in a tuple, where the index starts from 0.</p>
        <p>So, a tuple having 6 elements will have indices from 0 to 5. Trying to access an index outside of the tuple index range(6,7,... in this example) will raise an&nbsp;<code>IndexError</code>.</p>
        <p>The index must be an integer, so we cannot use float or other types. This will result in&nbsp;<code>TypeError</code>.</p>
        <p>Likewise, nested tuples are accessed using nested indexing, as shown in the example below.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Accessing tuple elements using indexing</span>
        my_tuple = (<span class="hljs-string">'p'</span>,<span class="hljs-string">'e'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'m'</span>,<span class="hljs-string">'i'</span>,<span class="hljs-string">'t'</span>)
        
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">0</span>])   <span class="hljs-comment"># 'p' </span>
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">5</span>])   <span class="hljs-comment"># 't'</span>
        
        <span class="hljs-comment"># IndexError: list index out of range</span>
        <span class="hljs-comment"># print(my_tuple[6])</span>
        
        <span class="hljs-comment"># Index must be an integer</span>
        <span class="hljs-comment"># TypeError: list indices must be integers, not float</span>
        <span class="hljs-comment"># my_tuple[2.0]</span>
        
        <span class="hljs-comment"># nested tuple</span>
        n_tuple = (<span class="hljs-string">"mouse"</span>, [<span class="hljs-number">8</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>], (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>))
        
        <span class="hljs-comment"># nested index</span>
        <span class="hljs-keyword">print</span>(n_tuple[<span class="hljs-number">0</span>][<span class="hljs-number">3</span>])       <span class="hljs-comment"># 's'</span>
        <span class="hljs-keyword">print</span>(n_tuple[<span class="hljs-number">1</span>][<span class="hljs-number">1</span>])       <span class="hljs-comment"># 4</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>p
        t
        s
        4</samp></pre>
        <hr />
        <h3 id="negative">2. Negative Indexing</h3>
        <p>Python allows negative indexing for its sequences.</p>
        <p>The index of -1 refers to the last item, -2 to the second last item and so on.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Negative indexing for accessing tuple elements</span>
        my_tuple = (<span class="hljs-string">'p'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'m'</span>, <span class="hljs-string">'i'</span>, <span class="hljs-string">'t'</span>)
        
        <span class="hljs-comment"># Output: 't'</span>
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">-1</span>])
        
        <span class="hljs-comment"># Output: 'p'</span>
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">-6</span>])</code></pre>
        </div>
        </div>
        </div>
        <p>&nbsp;</p>
        <div id="block-inject-1" class="block-inject block-inject-1">&nbsp;</div>
        <div class="clearfix">&nbsp;</div>
        <p><strong>Output</strong></p>
        <pre><samp>t
        p</samp></pre>
        <hr />
        <h3 id="slice">3. Slicing</h3>
        <p>We can access a range of items in a tuple by using the slicing operator colon&nbsp;<code>:</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Accessing tuple elements using slicing</span>
        my_tuple = (<span class="hljs-string">'p'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'o'</span>,<span class="hljs-string">'g'</span>,<span class="hljs-string">'r'</span>,<span class="hljs-string">'a'</span>,<span class="hljs-string">'m'</span>,<span class="hljs-string">'i'</span>,<span class="hljs-string">'z'</span>)
        
        <span class="hljs-comment"># elements 2nd to 4th</span>
        <span class="hljs-comment"># Output: ('r', 'o', 'g')</span>
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">1</span>:<span class="hljs-number">4</span>])
        
        <span class="hljs-comment"># elements beginning to 2nd</span>
        <span class="hljs-comment"># Output: ('p', 'r')</span>
        <span class="hljs-keyword">print</span>(my_tuple[:<span class="hljs-number">-7</span>])
        
        <span class="hljs-comment"># elements 8th to end</span>
        <span class="hljs-comment"># Output: ('i', 'z')</span>
        <span class="hljs-keyword">print</span>(my_tuple[<span class="hljs-number">7</span>:])
        
        <span class="hljs-comment"># elements beginning to end</span>
        <span class="hljs-comment"># Output: ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')</span>
        <span class="hljs-keyword">print</span>(my_tuple[:])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>('r', 'o', 'g')
        ('p', 'r')
        ('i', 'z')
        ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')</samp></pre>
        <p>Slicing can be best visualized by considering the index to be between the elements as shown below. So if we want to access a range, we need the index that will slice the portion from the tuple.</p>
        <figure><img title="Element Slicing" src="https://cdn.programiz.com/sites/tutorial2program/files/element-slicling.jpg" alt="Element Slicing in Python" width="400" height="126" />
        <figcaption>Element Slicing in Python</figcaption>
        </figure>
        <hr />
        <h2 id="change">Changing a Tuple</h2>
        <p>Unlike lists, tuples are immutable.</p>
        <p>This means that elements of a tuple cannot be changed once they have been assigned. But, if the element is itself a mutable data type like a list, its nested items can be changed.</p>
        <p>We can also assign a tuple to different values (reassignment).</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Changing tuple values</span>
        my_tuple = (<span class="hljs-number">4</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, [<span class="hljs-number">6</span>, <span class="hljs-number">5</span>])
        
        
        <span class="hljs-comment"># TypeError: 'tuple' object does not support item assignment</span>
        <span class="hljs-comment"># my_tuple[1] = 9</span>
        
        <span class="hljs-comment"># However, item of mutable element can be changed</span>
        my_tuple[<span class="hljs-number">3</span>][<span class="hljs-number">0</span>] = <span class="hljs-number">9</span>    <span class="hljs-comment"># Output: (4, 2, 3, [9, 5])</span>
        <span class="hljs-keyword">print</span>(my_tuple)
        
        <span class="hljs-comment"># Tuples can be reassigned</span>
        my_tuple = (<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'g'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'a'</span>, <span class="hljs-string">'m'</span>, <span class="hljs-string">'i'</span>, <span class="hljs-string">'z'</span>)
        
        <span class="hljs-comment"># Output: ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')</span>
        <span class="hljs-keyword">print</span>(my_tuple)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>(4, 2, 3, [9, 5])
        ('p', 'r', 'o', 'g', 'r', 'a', 'm', 'i', 'z')</samp></pre>
        <p>We can use&nbsp;<code>+</code>&nbsp;operator to combine two tuples. This is called&nbsp;<strong>concatenation</strong>.</p>
        <p>We can also&nbsp;<strong>repeat</strong>&nbsp;the elements in a tuple for a given number of times using the&nbsp;<code>*</code>&nbsp;operator.</p>
        <p>Both&nbsp;<code>+</code>&nbsp;and&nbsp;<code>*</code>&nbsp;operations result in a new tuple.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Concatenation</span>
        <span class="hljs-comment"># Output: (1, 2, 3, 4, 5, 6)</span>
        <span class="hljs-keyword">print</span>((<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>) + (<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>))
        
        <span class="hljs-comment"># Repeat</span>
        <span class="hljs-comment"># Output: ('Repeat', 'Repeat', 'Repeat')</span>
        <span class="hljs-keyword">print</span>((<span class="hljs-string">"Repeat"</span>,) * <span class="hljs-number">3</span>)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>(1, 2, 3, 4, 5, 6)
        ('Repeat', 'Repeat', 'Repeat')</samp></pre>
        <hr />
        <h2 id="delete">Deleting a Tuple</h2>
        <p>As discussed above, we cannot change the elements in a tuple. It means that we cannot delete or remove items from a tuple.</p>
        <p>Deleting a tuple entirely, however, is possible using the keyword&nbsp;<a href="https://www.programiz.com/python-programming/keyword-list#del">del</a>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Deleting tuples</span>
        my_tuple = (<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'g'</span>, <span class="hljs-string">'r'</span>, <span class="hljs-string">'a'</span>, <span class="hljs-string">'m'</span>, <span class="hljs-string">'i'</span>, <span class="hljs-string">'z'</span>)
        
        <span class="hljs-comment"># can't delete items</span>
        <span class="hljs-comment"># TypeError: 'tuple' object doesn't support item deletion</span>
        <span class="hljs-comment"># del my_tuple[3]</span>
        
        <span class="hljs-comment"># Can delete an entire tuple</span>
        <span class="hljs-keyword">del</span> my_tuple
        
        <span class="hljs-comment"># NameError: name 'my_tuple' is not defined</span>
        <span class="hljs-keyword">print</span>(my_tuple)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>Traceback (most recent call last):
          File "&lt;string&gt;", line 12, in &lt;module&gt;
        NameError: name 'my_tuple' is not defined</samp></pre>
        <hr />
        <h2 id="method">Tuple Methods</h2>
        <p>Methods that add items or remove items are not available with tuple. Only the following two methods are available.</p>
        <p>Some examples of Python tuple methods:</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">my_tuple = (<span class="hljs-string">'a'</span>, <span class="hljs-string">'p'</span>, <span class="hljs-string">'p'</span>, <span class="hljs-string">'l'</span>, <span class="hljs-string">'e'</span>,)
        
        <span class="hljs-keyword">print</span>(my_tuple.count(<span class="hljs-string">'p'</span>))  <span class="hljs-comment"># Output: 2</span>
        <span class="hljs-keyword">print</span>(my_tuple.index(<span class="hljs-string">'l'</span>))  <span class="hljs-comment"># Output: 3</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>2
        3</samp></pre>
        <hr />
        <h2 id="other">Other Tuple Operations</h2>
        <h3 id="member">1. Tuple Membership Test</h3>
        <p>We can test if an item exists in a tuple or not, using the keyword&nbsp;<code>in</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Membership test in tuple</span>
        my_tuple = (<span class="hljs-string">'a'</span>, <span class="hljs-string">'p'</span>, <span class="hljs-string">'p'</span>, <span class="hljs-string">'l'</span>, <span class="hljs-string">'e'</span>,)
        
        <span class="hljs-comment"># In operation</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'a'</span> <span class="hljs-keyword">in</span> my_tuple)
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'b'</span> <span class="hljs-keyword">in</span> my_tuple)
        
        <span class="hljs-comment"># Not in operation</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'g'</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> my_tuple)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>True
        False
        True</samp></pre>
        <hr />
        <h3 id="iterate">2. Iterating Through a Tuple</h3>
        <p>We can use a&nbsp;<code>for</code>&nbsp;loop to iterate through each item in a tuple.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Using a for loop to iterate through a tuple</span>
        <span class="hljs-keyword">for</span> name <span class="hljs-keyword">in</span> (<span class="hljs-string">'John'</span>, <span class="hljs-string">'Kate'</span>):
            <span class="hljs-keyword">print</span>(<span class="hljs-string">"Hello"</span>, name)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>Hello John
        Hello Kate</samp></pre>
        <hr />
        <h3 id="advantages">Advantages of Tuple over List</h3>
        <p>Since tuples are quite similar to lists, both of them are used in similar situations. However, there are certain advantages of implementing a tuple over a list. Below listed are some of the main advantages:</p>
        <ul>
        <li>We generally use tuples for heterogeneous (different) data types and lists for homogeneous (similar) data types.</li>
        <li>Since tuples are immutable, iterating through a tuple is faster than with list. So there is a slight performance boost.</li>
        <li>Tuples that contain immutable elements can be used as a key for a dictionary. With lists, this is not possible.</li>
        <li>If you have data that doesn't change, implementing it as tuple will guarantee that it remains write-protected.</li>
        </ul>
        </div>
        </div>`
    },
    {
        topic: 'Dictionary',
        content: `<h1>Python Dictionary</h1>
        <p class="editor-contents__short-description">Python dictionary is an unordered collection of items. Each item of a dictionary has a&nbsp;<code>key/value</code>&nbsp;pair.</p>
        <div id="node-48" class="node node-python clearfix">
        <div class="content">
        <p>Dictionaries are optimized to retrieve values when the key is known.</p>
        <hr />
        <h2 id="create">Creating Python Dictionary</h2>
        <p>Creating a dictionary is as simple as placing items inside curly braces&nbsp;<code>{}</code>&nbsp;separated by commas.</p>
        <p>An item has a&nbsp;<code>key</code>&nbsp;and a corresponding&nbsp;<code>value</code>&nbsp;that is expressed as a pair (<strong>key: value</strong>).</p>
        <p>While the values can be of any data type and can repeat, keys must be of immutable type (<a href="https://www.programiz.com/python-programming/string">string</a>,&nbsp;<a href="https://www.programiz.com/python-programming/numbers">number</a>&nbsp;or&nbsp;<a href="https://www.programiz.com/python-programming/tuple">tuple</a>&nbsp;with immutable elements) and must be unique.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># empty dictionary</span>
        my_dict = {}
        
        <span class="hljs-comment"># dictionary with integer keys</span>
        my_dict = {<span class="hljs-number">1</span>: <span class="hljs-string">'apple'</span>, <span class="hljs-number">2</span>: <span class="hljs-string">'ball'</span>}
        
        <span class="hljs-comment"># dictionary with mixed keys</span>
        my_dict = {<span class="hljs-string">'name'</span>: <span class="hljs-string">'John'</span>, <span class="hljs-number">1</span>: [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>]}
        
        <span class="hljs-comment"># using dict()</span>
        my_dict = dict({<span class="hljs-number">1</span>:<span class="hljs-string">'apple'</span>, <span class="hljs-number">2</span>:<span class="hljs-string">'ball'</span>})
        
        <span class="hljs-comment"># from sequence having each item as a pair</span>
        my_dict = dict([(<span class="hljs-number">1</span>,<span class="hljs-string">'apple'</span>), (<span class="hljs-number">2</span>,<span class="hljs-string">'ball'</span>)])</code></pre>
        <p>As you can see from above, we can also create a dictionary using the built-in&nbsp;<code>dict()</code>&nbsp;function.</p>
        <hr />
        <h2 id="access">Accessing Elements from Dictionary</h2>
        <p>While indexing is used with other data types to access values, a dictionary uses&nbsp;<code>keys</code>. Keys can be used either inside square brackets&nbsp;<code>[]</code>&nbsp;or with the&nbsp;<code>get()</code>&nbsp;method.</p>
        <p>If we use the square brackets&nbsp;<code>[]</code>,&nbsp;<code>KeyError</code>&nbsp;is raised in case a key is not found in the dictionary. On the other hand, the&nbsp;<code>get()</code>&nbsp;method returns&nbsp;<code>None</code>&nbsp;if the key is not found.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># get vs [] for retrieving elements</span>
        my_dict = {<span class="hljs-string">'name'</span>: <span class="hljs-string">'Jack'</span>, <span class="hljs-string">'age'</span>: <span class="hljs-number">26</span>}
        
        <span class="hljs-comment"># Output: Jack</span>
        <span class="hljs-keyword">print</span>(my_dict[<span class="hljs-string">'name'</span>])
        
        <span class="hljs-comment"># Output: 26</span>
        <span class="hljs-keyword">print</span>(my_dict.get(<span class="hljs-string">'age'</span>))
        
        <span class="hljs-comment"># Trying to access keys which doesn't exist throws error</span>
        <span class="hljs-comment"># Output None</span>
        <span class="hljs-keyword">print</span>(my_dict.get(<span class="hljs-string">'address'</span>))
        
        <span class="hljs-comment"># KeyError</span>
        <span class="hljs-keyword">print</span>(my_dict[<span class="hljs-string">'address'</span>])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>Jack
        26
        None
        Traceback (most recent call last):
          File "&lt;string&gt;", line 15, in &lt;module&gt;
            print(my_dict['address'])
        KeyError: 'address'</samp></pre>
        <hr />
        <h2 id="change">Changing and Adding Dictionary elements</h2>
        <p>Dictionaries are mutable. We can add new items or change the value of existing items using an assignment operator.</p>
        <p>If the key is already present, then the existing value gets updated. In case the key is not present, a new (<strong>key: value</strong>) pair is added to the dictionary.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Changing and adding Dictionary Elements</span>
        my_dict = {<span class="hljs-string">'name'</span>: <span class="hljs-string">'Jack'</span>, <span class="hljs-string">'age'</span>: <span class="hljs-number">26</span>}
        
        <span class="hljs-comment"># update value</span>
        my_dict[<span class="hljs-string">'age'</span>] = <span class="hljs-number">27</span>
        
        <span class="hljs-comment">#Output: {'age': 27, 'name': 'Jack'}</span>
        <span class="hljs-keyword">print</span>(my_dict)
        
        <span class="hljs-comment"># add item</span>
        my_dict[<span class="hljs-string">'address'</span>] = <span class="hljs-string">'Downtown'</span>
        
        <span class="hljs-comment"># Output: {'address': 'Downtown', 'age': 27, 'name': 'Jack'}</span>
        <span class="hljs-keyword">print</span>(my_dict)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{'name': 'Jack', 'age': 27}
        {'name': 'Jack', 'age': 27, 'address': 'Downtown'}</samp></pre>
        <hr />
        <h2 id="delete">Removing elements from Dictionary</h2>
        <p>We can remove a particular item in a dictionary by using the&nbsp;<code>pop()</code>&nbsp;method. This method removes an item with the provided&nbsp;<code>key</code>&nbsp;and returns the&nbsp;<code>value</code>.</p>
        <p>The&nbsp;<code>popitem()</code>&nbsp;method can be used to remove and return an arbitrary&nbsp;<code>(key, value)</code>&nbsp;item pair from the dictionary. All the items can be removed at once, using the&nbsp;<code>clear()</code>&nbsp;method.</p>
        <p>We can also use the&nbsp;<code>del</code>&nbsp;keyword to remove individual items or the entire dictionary itself.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Removing elements from a dictionary</span>
        
        <span class="hljs-comment"># create a dictionary</span>
        squares = {<span class="hljs-number">1</span>: <span class="hljs-number">1</span>, <span class="hljs-number">2</span>: <span class="hljs-number">4</span>, <span class="hljs-number">3</span>: <span class="hljs-number">9</span>, <span class="hljs-number">4</span>: <span class="hljs-number">16</span>, <span class="hljs-number">5</span>: <span class="hljs-number">25</span>}
        
        <span class="hljs-comment"># remove a particular item, returns its value</span>
        <span class="hljs-comment"># Output: 16</span>
        <span class="hljs-keyword">print</span>(squares.pop(<span class="hljs-number">4</span>))
        
        <span class="hljs-comment"># Output: {1: 1, 2: 4, 3: 9, 5: 25}</span>
        <span class="hljs-keyword">print</span>(squares)
        
        <span class="hljs-comment"># remove an arbitrary item, return (key,value)</span>
        <span class="hljs-comment"># Output: (5, 25)</span>
        <span class="hljs-keyword">print</span>(squares.popitem())
        
        <span class="hljs-comment"># Output: {1: 1, 2: 4, 3: 9}</span>
        <span class="hljs-keyword">print</span>(squares)
        
        <span class="hljs-comment"># remove all items</span>
        squares.clear()
        
        <span class="hljs-comment"># Output: {}</span>
        <span class="hljs-keyword">print</span>(squares)
        
        <span class="hljs-comment"># delete the dictionary itself</span>
        <span class="hljs-keyword">del</span> squares
        
        <span class="hljs-comment"># Throws Error</span>
        <span class="hljs-keyword">print</span>(squares)</code></pre>
        </div>
        </div>
        </div>
        <div id="block-inject-1" class="block-inject block-inject-1">&nbsp;</div>
        <div class="clearfix">&nbsp;</div>
        <p><strong>Output</strong></p>
        <pre><samp>16
        {1: 1, 2: 4, 3: 9, 5: 25}
        (5, 25)
        {1: 1, 2: 4, 3: 9}
        {}
        Traceback (most recent call last):
          File "&lt;string&gt;", line 30, in &lt;module&gt;
            print(squares)
        NameError: name 'squares' is not defined</samp></pre>
        <hr />
        <h2 id="methods">Python Dictionary Methods</h2>
        <p>Methods that are available with a dictionary are tabulated below. Some of them have already been used in the above examples.</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Method</th>
        <th>Description</th>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/clear">clear()</a></td>
        <td>Removes all items from the dictionary.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/copy">copy()</a></td>
        <td>Returns a shallow copy of the dictionary.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/fromkeys">fromkeys(seq[, v])</a></td>
        <td>Returns a new dictionary with keys from <var>seq</var> and value equal to <var>v</var> (defaults to <code>None</code>).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/get">get(key[,d])</a></td>
        <td>Returns the value of the <var>key</var>. If the <var>key</var> does not exist, returns <var>d</var> (defaults to <code>None</code>).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/items">items()</a></td>
        <td>Return a new object of the dictionary's items in (key, value) format.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/keys">keys()</a></td>
        <td>Returns a new object of the dictionary's keys.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/pop">pop(key[,d])</a></td>
        <td>Removes the item with the <var>key</var> and returns its value or <var>d</var> if <var>key</var> is not found. If <var>d</var> is not provided and the <var>key</var> is not found, it raises <code>KeyError</code>.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/popitem">popitem()</a></td>
        <td>Removes and returns an arbitrary item (<strong>key, value</strong>). Raises <code>KeyError</code> if the dictionary is empty.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/setdefault">setdefault(key[,d])</a></td>
        <td>Returns the corresponding value if the <var>key</var> is in the dictionary. If not, inserts the <var>key</var> with a value of <var>d</var> and returns <var>d</var> (defaults to <code>None</code>).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/update">update([other])</a></td>
        <td>Updates the dictionary with the key/value pairs from <var>other</var>, overwriting existing keys.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/dictionary/values">values()</a></td>
        <td>Returns a new object of the dictionary's values</td>
        </tr>
        </tbody>
        </table>
        </div>
        <p>Here are a few example use cases of these methods.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Dictionary Methods</span>
        marks = {}.fromkeys([<span class="hljs-string">'Math'</span>, <span class="hljs-string">'English'</span>, <span class="hljs-string">'Science'</span>], <span class="hljs-number">0</span>)
        
        <span class="hljs-comment"># Output: {'English': 0, 'Math': 0, 'Science': 0}</span>
        <span class="hljs-keyword">print</span>(marks)
        
        <span class="hljs-keyword">for</span> item <span class="hljs-keyword">in</span> marks.items():
            <span class="hljs-keyword">print</span>(item)
        
        <span class="hljs-comment"># Output: ['English', 'Math', 'Science']</span>
        <span class="hljs-keyword">print</span>(list(sorted(marks.keys())))</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{'Math': 0, 'English': 0, 'Science': 0}
        ('Math', 0)
        ('English', 0)
        ('Science', 0)
        ['English', 'Math', 'Science']</samp></pre>
        <hr />
        <h2 id="comprehension">Python Dictionary Comprehension</h2>
        <p>Dictionary comprehension is an elegant and concise way to create a new dictionary from an iterable in Python.</p>
        <p>Dictionary comprehension consists of an expression pair (<strong>key: value</strong>) followed by a&nbsp;<code>for</code>&nbsp;statement inside curly braces&nbsp;<code>{}</code>.</p>
        <p>Here is an example to make a dictionary with each item being a pair of a number and its square.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Dictionary Comprehension</span>
        squares = {x: x*x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">6</span>)}
        
        <span class="hljs-keyword">print</span>(squares)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</samp></pre>
        <p>This code is equivalent to</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs">squares = {}
        <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">6</span>):
            squares[x] = x*x
        <span class="hljs-keyword">print</span>(squares)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</samp></pre>
        <p>A dictionary comprehension can optionally contain more&nbsp;<a href="https://www.programiz.com/python-programming/for-loop">for</a>&nbsp;or&nbsp;<a href="https://www.programiz.com/python-programming/if-elif-else">if</a>&nbsp;statements.</p>
        <p>An optional&nbsp;<code>if</code>&nbsp;statement can filter out items to form the new dictionary.</p>
        <p>Here are some examples to make a dictionary with only odd items.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Dictionary Comprehension with if conditional</span>
        odd_squares = {x: x*x <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> range(<span class="hljs-number">11</span>) <span class="hljs-keyword">if</span> x % <span class="hljs-number">2</span> == <span class="hljs-number">1</span>}
        
        <span class="hljs-keyword">print</span>(odd_squares)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1: 1, 3: 9, 5: 25, 7: 49, 9: 81}</samp></pre>
        <p>To learn more dictionary comprehensions, visit&nbsp;<a href="https://www.programiz.com/python-programming/dictionary-comprehension">Python Dictionary Comprehension</a>.</p>
        <hr />
        <h2 id="other">Other Dictionary Operations</h2>
        <h3 id="membership">Dictionary Membership Test</h3>
        <p>We can test if a&nbsp;<code>key</code>&nbsp;is in a dictionary or not using the keyword&nbsp;<code>in</code>. Notice that the membership test is only for the&nbsp;<code>keys</code>&nbsp;and not for the&nbsp;<code>values</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Membership Test for Dictionary Keys</span>
        squares = {<span class="hljs-number">1</span>: <span class="hljs-number">1</span>, <span class="hljs-number">3</span>: <span class="hljs-number">9</span>, <span class="hljs-number">5</span>: <span class="hljs-number">25</span>, <span class="hljs-number">7</span>: <span class="hljs-number">49</span>, <span class="hljs-number">9</span>: <span class="hljs-number">81</span>}
        
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-number">1</span> <span class="hljs-keyword">in</span> squares)
        
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-number">2</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> squares)
        
        <span class="hljs-comment"># membership tests for key only not value</span>
        <span class="hljs-comment"># Output: False</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-number">49</span> <span class="hljs-keyword">in</span> squares)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>True
        True
        False</samp></pre>
        <h3 id="iterate">Iterating Through a Dictionary</h3>
        <p>We can iterate through each key in a dictionary using a&nbsp;<code>for</code>&nbsp;loop.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Iterating through a Dictionary</span>
        squares = {<span class="hljs-number">1</span>: <span class="hljs-number">1</span>, <span class="hljs-number">3</span>: <span class="hljs-number">9</span>, <span class="hljs-number">5</span>: <span class="hljs-number">25</span>, <span class="hljs-number">7</span>: <span class="hljs-number">49</span>, <span class="hljs-number">9</span>: <span class="hljs-number">81</span>}
        <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> squares:
            <span class="hljs-keyword">print</span>(squares[i])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>1
        9
        25
        49
        81</samp></pre>
        <hr />
        <h3 id="built">Dictionary Built-in Functions</h3>
        <p>Built-in functions like&nbsp;<code>all()</code>,&nbsp;<code>any()</code>,&nbsp;<code>len()</code>,&nbsp;<code>cmp()</code>,&nbsp;<code>sorted()</code>, etc. are commonly used with dictionaries to perform different tasks.</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Function</th>
        <th>Description</th>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/all">all()</a></td>
        <td>Return <code>True</code> if all keys of the dictionary are True (or if the dictionary is empty).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/any">any()</a></td>
        <td>Return <code>True</code> if any key of the dictionary is true. If the dictionary is empty, return <code>False</code>.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/len">len()</a></td>
        <td>Return the length (the number of items) in the dictionary.</td>
        </tr>
        <tr>
        <td>cmp()</td>
        <td>Compares items of two dictionaries. (Not available in Python 3)</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/sorted">sorted()</a></td>
        <td>Return a new sorted list of keys in the dictionary.</td>
        </tr>
        </tbody>
        </table>
        </div>
        <p>Here are some examples that use built-in functions to work with a dictionary.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Dictionary Built-in Functions</span>
        squares = {<span class="hljs-number">0</span>: <span class="hljs-number">0</span>, <span class="hljs-number">1</span>: <span class="hljs-number">1</span>, <span class="hljs-number">3</span>: <span class="hljs-number">9</span>, <span class="hljs-number">5</span>: <span class="hljs-number">25</span>, <span class="hljs-number">7</span>: <span class="hljs-number">49</span>, <span class="hljs-number">9</span>: <span class="hljs-number">81</span>}
        
        <span class="hljs-comment"># Output: False</span>
        <span class="hljs-keyword">print</span>(all(squares))
        
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(any(squares))
        
        <span class="hljs-comment"># Output: 6</span>
        <span class="hljs-keyword">print</span>(len(squares))
        
        <span class="hljs-comment"># Output: [0, 1, 3, 5, 7, 9]</span>
        <span class="hljs-keyword">print</span>(sorted(squares))</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>False
        True
        6
        [0, 1, 3, 5, 7, 9]</samp></pre>
        </div>
        </div>`
    },
    {
        topic: 'Set',
        content: `<div class="pgAdWrapper">&nbsp;</div>
        <div class="editor-contents">
        <h1>Python Sets</h1>
        <div id="node-79" class="node node-python clearfix">
        <div class="content">
        <p id="what">A set is an unordered collection of items. Every set element is unique (no duplicates) and must be immutable (cannot be changed).</p>
        <p>However, a set itself is mutable. We can add or remove items from it.</p>
        <p>Sets can also be used to perform mathematical set operations like union, intersection, symmetric difference, etc.</p>
        <hr />
        <h2 id="create">Creating Python Sets</h2>
        <p>A set is created by placing all the items (elements) inside curly braces&nbsp;<code>{}</code>, separated by comma, or by using the built-in&nbsp;<code>set()</code>&nbsp;function.</p>
        <p>It can have any number of items and they may be of different types (integer, float, tuple, string etc.). But a set cannot have mutable elements like&nbsp;<a href="https://www.programiz.com/python-programming/list">lists</a>, sets or&nbsp;<a href="https://www.programiz.com/python-programming/dictionary">dictionaries</a>&nbsp;as its elements.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Different types of sets in Python</span>
        <span class="hljs-comment"># set of integers</span>
        my_set = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>}
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># set of mixed datatypes</span>
        my_set = {<span class="hljs-number">1.0</span>, <span class="hljs-string">"Hello"</span>, (<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>)}
        <span class="hljs-keyword">print</span>(my_set)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 2, 3}
        {1.0, (1, 2, 3), 'Hello'}</samp></pre>
        <p>Try the following examples as well.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># set cannot have duplicates</span>
        <span class="hljs-comment"># Output: {1, 2, 3, 4}</span>
        my_set = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>}
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># we can make set from a list</span>
        <span class="hljs-comment"># Output: {1, 2, 3}</span>
        my_set = set([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>])
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># set cannot have mutable items</span>
        <span class="hljs-comment"># here [3, 4] is a mutable list</span>
        <span class="hljs-comment"># this will cause an error.</span>
        
        my_set = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]}</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 2, 3, 4}
        {1, 2, 3}
        Traceback (most recent call last):
          File "&lt;string&gt;", line 15, in &lt;module&gt;
            my_set = {1, 2, [3, 4]}
        TypeError: unhashable type: 'list'</samp></pre>
        <hr />
        <p>Creating an empty set is a bit tricky.</p>
        <p>Empty curly braces&nbsp;<code>{}</code>&nbsp;will make an empty dictionary in Python. To make a set without any elements, we use the&nbsp;<code>set()</code>&nbsp;function without any argument.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Distinguish set and dictionary while creating empty set</span>
        
        <span class="hljs-comment"># initialize a with {}</span>
        a = {}
        
        <span class="hljs-comment"># check data type of a</span>
        <span class="hljs-keyword">print</span>(type(a))
        
        <span class="hljs-comment"># initialize a with set()</span>
        a = set()
        
        <span class="hljs-comment"># check data type of a</span>
        <span class="hljs-keyword">print</span>(type(a))</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>&lt;class 'dict'&gt;
        &lt;class 'set'&gt;</samp></pre>
        <hr />
        <h2 id="change">Modifying a set in Python</h2>
        <p>Sets are mutable. However, since they are unordered, indexing has no meaning.</p>
        <p>We cannot access or change an element of a set using indexing or slicing. Set data type does not support it.</p>
        <p>We can add a single element using the&nbsp;<code>add()</code>&nbsp;method, and multiple elements using the&nbsp;<code>update()</code>&nbsp;method. The&nbsp;<code>update()</code>&nbsp;method can take&nbsp;<a href="https://www.programiz.com/python-programming/tuple">tuples</a>, lists,&nbsp;<a href="https://www.programiz.com/python-programming/string">strings</a>&nbsp;or other sets as its argument. In all cases, duplicates are avoided.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># initialize my_set</span>
        my_set = {<span class="hljs-number">1</span>, <span class="hljs-number">3</span>}
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># my_set[0]</span>
        <span class="hljs-comment"># if you uncomment the above line</span>
        <span class="hljs-comment"># you will get an error</span>
        <span class="hljs-comment"># TypeError: 'set' object does not support indexing</span>
        
        <span class="hljs-comment"># add an element</span>
        <span class="hljs-comment"># Output: {1, 2, 3}</span>
        my_set.add(<span class="hljs-number">2</span>)
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># add multiple elements</span>
        <span class="hljs-comment"># Output: {1, 2, 3, 4}</span>
        my_set.update([<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>])
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># add list and set</span>
        <span class="hljs-comment"># Output: {1, 2, 3, 4, 5, 6, 8}</span>
        my_set.update([<span class="hljs-number">4</span>, <span class="hljs-number">5</span>], {<span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>})
        <span class="hljs-keyword">print</span>(my_set)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 3}
        {1, 2, 3}
        {1, 2, 3, 4}
        {1, 2, 3, 4, 5, 6, 8}</samp></pre>
        <hr />
        <h2 id="remove">Removing elements from a set</h2>
        <p>A particular item can be removed from a set using the methods&nbsp;<code>discard()</code>&nbsp;and&nbsp;<code>remove()</code>.</p>
        <p>The only difference between the two is that the&nbsp;<code>discard()</code>&nbsp;function leaves a set unchanged if the element is not present in the set. On the other hand, the&nbsp;<code>remove()</code>&nbsp;function will raise an error in such a condition (if element is not present in the set).</p>
        <p>The following example will illustrate this.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Difference between discard() and remove()</span>
        
        <span class="hljs-comment"># initialize my_set</span>
        my_set = {<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>}
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># discard an element</span>
        <span class="hljs-comment"># Output: {1, 3, 5, 6}</span>
        my_set.discard(<span class="hljs-number">4</span>)
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># remove an element</span>
        <span class="hljs-comment"># Output: {1, 3, 5}</span>
        my_set.remove(<span class="hljs-number">6</span>)
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># discard an element</span>
        <span class="hljs-comment"># not present in my_set</span>
        <span class="hljs-comment"># Output: {1, 3, 5}</span>
        my_set.discard(<span class="hljs-number">2</span>)
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># remove an element</span>
        <span class="hljs-comment"># not present in my_set</span>
        <span class="hljs-comment"># you will get an error.</span>
        <span class="hljs-comment"># Output: KeyError</span>
        
        my_set.remove(<span class="hljs-number">2</span>)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 3, 4, 5, 6}
        {1, 3, 5, 6}
        {1, 3, 5}
        {1, 3, 5}
        Traceback (most recent call last):
          File "&lt;string&gt;", line 28, in &lt;module&gt;
        KeyError: 2</samp></pre>
        <p>Similarly, we can remove and return an item using the&nbsp;<code>pop()</code>&nbsp;method.</p>
        <p>Since set is an unordered data type, there is no way of determining which item will be popped. It is completely arbitrary.</p>
        <p>We can also remove all the items from a set using the&nbsp;<code>clear()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># initialize my_set</span>
        <span class="hljs-comment"># Output: set of unique elements</span>
        my_set = set(<span class="hljs-string">"HelloWorld"</span>)
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># pop an element</span>
        <span class="hljs-comment"># Output: random element</span>
        <span class="hljs-keyword">print</span>(my_set.pop())
        
        <span class="hljs-comment"># pop another element</span>
        my_set.pop()
        <span class="hljs-keyword">print</span>(my_set)
        
        <span class="hljs-comment"># clear my_set</span>
        <span class="hljs-comment"># Output: set()</span>
        my_set.clear()
        <span class="hljs-keyword">print</span>(my_set)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{'H', 'l', 'r', 'W', 'o', 'd', 'e'}
        H
        {'r', 'W', 'o', 'd', 'e'}
        set()</samp></pre>
        <hr />
        <h2 id="operations">Python Set Operations</h2>
        <p>Sets can be used to carry out mathematical set operations like union, intersection, difference and symmetric difference. We can do this with operators or methods.</p>
        <p>Let us consider the following two sets for the following operations.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>A = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        <span class="hljs-meta">&gt;&gt;&gt; </span>B = {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}</code></pre>
        <h3 id="union">Set Union</h3>
        <figure><img title="Set Union" src="https://cdn.programiz.com/sites/tutorial2program/files/set-union.jpg" alt="Set Union in Python" width="450" height="264" />
        <figcaption>Set Union in Python</figcaption>
        </figure>
        <p>Union of&nbsp;<var>A</var>&nbsp;and&nbsp;<var>B</var>&nbsp;is a set of all elements from both sets.</p>
        <p>Union is performed using&nbsp;<code>|</code>&nbsp;operator. Same can be accomplished using the&nbsp;<code>union()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Set union method</span>
        <span class="hljs-comment"># initialize A and B</span>
        A = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        B = {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use | operator</span>
        <span class="hljs-comment"># Output: {1, 2, 3, 4, 5, 6, 7, 8}</span>
        <span class="hljs-keyword">print</span>(A | B)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 2, 3, 4, 5, 6, 7, 8}</samp></pre>
        <p>Try the following examples on Python shell.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># use union function</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.union(B)
        {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use union function on B</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>B.union(A)
        {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}</code></pre>
        <hr />
        <h3 id="intersection">Set Intersection</h3>
        <figure><img title="Set Intersection" src="https://cdn.programiz.com/sites/tutorial2program/files/set-intersection.jpg" alt="Set Intersection in Python" width="450" height="262" />
        <figcaption>Set Intersection in Python</figcaption>
        </figure>
        <p>Intersection of&nbsp;<var>A</var>&nbsp;and&nbsp;<var>B</var>&nbsp;is a set of elements that are common in both the sets.</p>
        <p>Intersection is performed using&nbsp;<code>&amp;</code>&nbsp;operator. Same can be accomplished using the&nbsp;<code>intersection()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Intersection of sets</span>
        <span class="hljs-comment"># initialize A and B</span>
        A = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        B = {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use &amp; operator</span>
        <span class="hljs-comment"># Output: {4, 5}</span>
        <span class="hljs-keyword">print</span>(A &amp; B)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{4, 5}</samp></pre>
        <p>Try the following examples on Python shell.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># use intersection function on A</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.intersection(B)
        {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        
        <span class="hljs-comment"># use intersection function on B</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>B.intersection(A)
        {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>}</code></pre>
        <hr />
        <h3 id="difference">Set Difference</h3>
        <figure><img title="Set Difference" src="https://cdn.programiz.com/sites/tutorial2program/files/set-difference.jpg" alt="Set Difference in Python" width="450" height="263" />
        <figcaption>Set Difference in Python</figcaption>
        </figure>
        <p>Difference of the set&nbsp;<var>B</var>&nbsp;from set&nbsp;<var>A</var>(<var>A</var>&nbsp;-&nbsp;<var>B</var>) is a set of elements that are only in&nbsp;<var>A</var>&nbsp;but not in&nbsp;<var>B</var>. Similarly,&nbsp;<var>B</var>&nbsp;-&nbsp;<var>A</var>&nbsp;is a set of elements in&nbsp;<var>B</var>&nbsp;but not in&nbsp;<var>A</var>.</p>
        <p>Difference is performed using&nbsp;<code>-</code>&nbsp;operator. Same can be accomplished using the&nbsp;<code>difference()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Difference of two sets</span>
        <span class="hljs-comment"># initialize A and B</span>
        A = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        B = {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use - operator on A</span>
        <span class="hljs-comment"># Output: {1, 2, 3}</span>
        <span class="hljs-keyword">print</span>(A - B)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 2, 3}</samp></pre>
        <p>Try the following examples on Python shell.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># use difference function on A</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.difference(B)
        {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>}
        
        <span class="hljs-comment"># use - operator on B</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>B - A
        {<span class="hljs-number">8</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>}
        
        <span class="hljs-comment"># use difference function on B</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>B.difference(A)
        {<span class="hljs-number">8</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>}</code></pre>
        <hr />
        <h3 id="symmetric">Set Symmetric Difference</h3>
        <figure><img title="Set Symmetric Difference" src="https://cdn.programiz.com/sites/tutorial2program/files/set-symmetric-difference.jpg" alt="Set Symmetric Difference in Python" width="450" height="256" />
        <figcaption>Set Symmetric Difference in Python</figcaption>
        </figure>
        <p>Symmetric Difference of&nbsp;<var>A</var>&nbsp;and&nbsp;<var>B</var>&nbsp;is a set of elements in&nbsp;<var>A</var>&nbsp;and&nbsp;<var>B</var>&nbsp;but not in both (excluding the intersection).</p>
        <p>Symmetric difference is performed using&nbsp;<code>^</code>&nbsp;operator. Same can be accomplished using the method&nbsp;<code>symmetric_difference()</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># Symmetric difference of two sets</span>
        <span class="hljs-comment"># initialize A and B</span>
        A = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}
        B = {<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use ^ operator</span>
        <span class="hljs-comment"># Output: {1, 2, 3, 6, 7, 8}</span>
        <span class="hljs-keyword">print</span>(A ^ B)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>{1, 2, 3, 6, 7, 8}</samp></pre>
        <p>Try the following examples on Python shell.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># use symmetric_difference function on A</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.symmetric_difference(B)
        {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}
        
        <span class="hljs-comment"># use symmetric_difference function on B</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>B.symmetric_difference(A)
        {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>}</code></pre>
        <hr />
        <h2 id="methods">Other Python Set Methods</h2>
        <p>There are many set methods, some of which we have already used above. Here is a list of all the methods that are available with the set objects:</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Method</th>
        <th>Description</th>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/add">add()</a></td>
        <td>Adds an element to the set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/clear">clear()</a></td>
        <td>Removes all elements from the set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/copy">copy()</a></td>
        <td>Returns a copy of the set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/difference">difference()</a></td>
        <td>Returns the difference of two or more sets as a new set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/difference_update">difference_update()</a></td>
        <td>Removes all elements of another set from this set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/discard">discard()</a></td>
        <td>Removes an element from the set if it is a member. (Do nothing if the element is not in set)</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/intersection">intersection()</a></td>
        <td>Returns the intersection of two sets as a new set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/intersection_update">intersection_update()</a></td>
        <td>Updates the set with the intersection of itself and another</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/isdisjoint">isdisjoint()</a></td>
        <td>Returns <code>True</code> if two sets have a null intersection</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/issubset">issubset()</a></td>
        <td>Returns <code>True</code> if another set contains this set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/issuperset">issuperset()</a></td>
        <td>Returns <code>True</code> if this set contains another set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/pop">pop()</a></td>
        <td>Removes and returns an arbitrary set element. Raises <code>KeyError</code> if the set is empty</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/remove">remove()</a></td>
        <td>Removes an element from the set. If the element is not a member, raises a <code>KeyError</code></td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/symmetric_difference">symmetric_difference()</a></td>
        <td>Returns the symmetric difference of two sets as a new set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/symmetric_difference_update">symmetric_difference_update()</a></td>
        <td>Updates a set with the symmetric difference of itself and another</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/union">union()</a></td>
        <td>Returns the union of sets in a new set</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/set/update">update()</a></td>
        <td>Updates the set with the union of itself and others</td>
        </tr>
        </tbody>
        </table>
        </div>
        <hr />
        <h2>Other Set Operations</h2>
        <h3 id="membership">Set Membership Test</h3>
        <p>We can test if an item exists in a set or not, using the&nbsp;<code>in</code>&nbsp;keyword.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-comment"># in keyword in a set</span>
        <span class="hljs-comment"># initialize my_set</span>
        my_set = set(<span class="hljs-string">"apple"</span>)
        
        <span class="hljs-comment"># check if 'a' is present</span>
        <span class="hljs-comment"># Output: True</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'a'</span> <span class="hljs-keyword">in</span> my_set)
        
        <span class="hljs-comment"># check if 'p' is present</span>
        <span class="hljs-comment"># Output: False</span>
        <span class="hljs-keyword">print</span>(<span class="hljs-string">'p'</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> my_set)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>True
        False</samp></pre>
        <hr />
        <h3 id="iterating">Iterating Through a Set</h3>
        <p>We can iterate through each item in a set using a&nbsp;<code>for</code>&nbsp;loop.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> letter <span class="hljs-keyword">in</span> set(<span class="hljs-string">"apple"</span>):
        <span class="hljs-meta">... </span>    <span class="hljs-keyword">print</span>(letter)
        <span class="hljs-meta">... </span>   
        a
        p
        e
        l</code></pre>
        <hr />
        <h3 id="built">Built-in Functions with Set</h3>
        <p>Built-in functions like&nbsp;<code>all()</code>,&nbsp;<code>any()</code>,&nbsp;<code>enumerate()</code>,&nbsp;<code>len()</code>,&nbsp;<code>max()</code>,&nbsp;<code>min()</code>,&nbsp;<code>sorted()</code>,&nbsp;<code>sum()</code>&nbsp;etc. are commonly used with sets to perform different tasks.</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Function</th>
        <th>Description</th>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/all">all()</a></td>
        <td>Returns <code>True</code> if all elements of the set are true (or if the set is empty).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/any">any()</a></td>
        <td>Returns <code>True</code> if any element of the set is true. If the set is empty, returns <code>False</code>.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/enumerate">enumerate()</a></td>
        <td>Returns an enumerate object. It contains the index and value for all the items of the set as a pair.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/len">len()</a></td>
        <td>Returns the length (the number of items) in the set.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/max">max()</a></td>
        <td>Returns the largest item in the set.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/min">min()</a></td>
        <td>Returns the smallest item in the set.</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/sorted">sorted()</a></td>
        <td>Returns a new sorted list from elements in the set(does not sort the set itself).</td>
        </tr>
        <tr>
        <td><a href="https://www.programiz.com/python-programming/methods/built-in/sum">sum()</a></td>
        <td>Returns the sum of all elements in the set.</td>
        </tr>
        </tbody>
        </table>
        </div>
        <hr />
        <h2 id="frozenset">Python Frozenset</h2>
        <p>Frozenset is a new class that has the characteristics of a set, but its elements cannot be changed once assigned. While tuples are immutable lists, frozensets are immutable sets.</p>
        <p>Sets being mutable are unhashable, so they can't be used as dictionary keys. On the other hand, frozensets are hashable and can be used as keys to a dictionary.</p>
        <p>Frozensets can be created using the&nbsp;<a href="https://www.programiz.com/python-programming/methods/built-in/frozenset">frozenset()</a>&nbsp;function.</p>
        <p>This data type supports methods like&nbsp;<code>copy()</code>,&nbsp;<code>difference()</code>,&nbsp;<code>intersection()</code>,&nbsp;<code>isdisjoint()</code>,&nbsp;<code>issubset()</code>,&nbsp;<code>issuperset()</code>,&nbsp;<code>symmetric_difference()</code>&nbsp;and&nbsp;<code>union()</code>. Being immutable, it does not have methods that add or remove elements.</p>
        <pre><code class="python hljs"><span class="hljs-comment"># Frozensets</span>
        <span class="hljs-comment"># initialize A and B</span>
        A = frozenset([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>])
        B = frozenset([<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>])</code></pre>
        <p>Try these examples on Python shell.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>A.isdisjoint(B)
        <span class="hljs-literal">False</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.difference(B)
        frozenset({<span class="hljs-number">1</span>, <span class="hljs-number">2</span>})
        <span class="hljs-meta">&gt;&gt;&gt; </span>A | B
        frozenset({<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>})
        <span class="hljs-meta">&gt;&gt;&gt; </span>A.add(<span class="hljs-number">3</span>)
        ...
        AttributeError: <span class="hljs-string">'frozenset'</span> object has no attribute <span class="hljs-string">'add'</span></code></pre>
        </div>
        </div>
        </div>`
    },
    {
        topic: 'Files',
        content: `<div class="pgAdWrapper">
        <h1>Python File I/O</h1>
        <p class="editor-contents__short-description">&nbsp;</p>
        <div class="programiz-youtube-wrapper lite-youtube">&nbsp;</div>
        <div id="node-47" class="node node-python clearfix">
        <div class="content">
        <h2 id="what">Files</h2>
        <p>Files are named locations on disk to store related information. They are used to permanently store data in a non-volatile memory (e.g. hard disk).</p>
        <p>Since Random Access Memory (RAM) is volatile (which loses its data when the computer is turned off), we use files for future use of the data by permanently storing them.</p>
        <p>When we want to read from or write to a file, we need to open it first. When we are done, it needs to be closed so that the resources that are tied with the file are freed.</p>
        <p>Hence, in Python, a file operation takes place in the following order:</p>
        <ol>
        <li>Open a file</li>
        <li>Read or write (perform operation)</li>
        <li>Close the file</li>
        </ol>
        <hr />
        <h2 id="open">Opening Files in Python</h2>
        <p>Python has a built-in&nbsp;<code>open()</code>&nbsp;function to open a file. This function returns a file object, also called a handle, as it is used to read or modify the file accordingly.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>f = open(<span class="hljs-string">"test.txt"</span>)    <span class="hljs-comment"># open file in current directory</span>
        <span class="hljs-meta">&gt;&gt;&gt; </span>f = open(<span class="hljs-string">"C:/Python38/README.txt"</span>)  <span class="hljs-comment"># specifying full path</span></code></pre>
        <p>We can specify the mode while opening a file. In mode, we specify whether we want to read&nbsp;<code>r</code>, write&nbsp;<code>w</code>&nbsp;or append&nbsp;<code>a</code>&nbsp;to the file. We can also specify if we want to open the file in text mode or binary mode.</p>
        <p>The default is reading in text mode. In this mode, we get strings when reading from the file.</p>
        <p>On the other hand, binary mode returns bytes and this is the mode to be used when dealing with non-text files like images or executable files.</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Mode</th>
        <th>Description</th>
        </tr>
        <tr>
        <td><code>r</code></td>
        <td>Opens a file for reading. (default)</td>
        </tr>
        <tr>
        <td><code>w</code></td>
        <td>Opens a file for writing. Creates a new file if it does not exist or truncates the file if it exists.</td>
        </tr>
        <tr>
        <td><code>x</code></td>
        <td>Opens a file for exclusive creation. If the file already exists, the operation fails.</td>
        </tr>
        <tr>
        <td><code>a</code></td>
        <td>Opens a file for appending at the end of the file without truncating it. Creates a new file if it does not exist.</td>
        </tr>
        <tr>
        <td><code>t</code></td>
        <td>Opens in text mode. (default)</td>
        </tr>
        <tr>
        <td><code>b</code></td>
        <td>Opens in binary mode.</td>
        </tr>
        <tr>
        <td><code>+</code></td>
        <td>Opens a file for updating (reading and writing)</td>
        </tr>
        </tbody>
        </table>
        </div>
        <pre><code class="python hljs">f = open(<span class="hljs-string">"test.txt"</span>)      <span class="hljs-comment"># equivalent to 'r' or 'rt'</span>
        f = open(<span class="hljs-string">"test.txt"</span>,<span class="hljs-string">'w'</span>)  <span class="hljs-comment"># write in text mode</span>
        f = open(<span class="hljs-string">"img.bmp"</span>,<span class="hljs-string">'r+b'</span>) <span class="hljs-comment"># read and write in binary mode</span></code></pre>
        <p>Unlike other languages, the character&nbsp;<code>a</code>&nbsp;does not imply the number 97 until it is encoded using&nbsp;<code>ASCII</code>&nbsp;(or other equivalent encodings).</p>
        <p>Moreover, the default encoding is platform dependent. In windows, it is&nbsp;<code>cp1252</code>&nbsp;but&nbsp;<code>utf-8</code>&nbsp;in Linux.</p>
        <p>So, we must not also rely on the default encoding or else our code will behave differently in different platforms.</p>
        <p>Hence, when working with files in text mode, it is highly recommended to specify the encoding type.</p>
        <pre><code class="python hljs">f = open(<span class="hljs-string">"test.txt"</span>, mode=<span class="hljs-string">'r'</span>, encoding=<span class="hljs-string">'utf-8'</span>)</code></pre>
        <hr />
        <h2 id="close">Closing Files in Python</h2>
        <p>When we are done with performing operations on the file, we need to properly close the file.</p>
        <p>Closing a file will free up the resources that were tied with the file. It is done using the&nbsp;<code>close()</code>&nbsp;method available in Python.</p>
        <p>Python has a garbage collector to clean up unreferenced objects but we must not rely on it to close the file.</p>
        <pre><code class="python hljs">f = open(<span class="hljs-string">"test.txt"</span>, encoding = <span class="hljs-string">'utf-8'</span>)
        <span class="hljs-comment"># perform file operations</span>
        f.close()</code></pre>
        <p>This method is not entirely safe. If an exception occurs when we are performing some operation with the file, the code exits without closing the file.</p>
        <p>A safer way is to use a&nbsp;<a href="https://www.programiz.com/python-programming/exception-handling">try...finally</a>&nbsp;block.</p>
        <pre><code class="python hljs"><span class="hljs-keyword">try</span>:
           f = open(<span class="hljs-string">"test.txt"</span>, encoding = <span class="hljs-string">'utf-8'</span>)
           <span class="hljs-comment"># perform file operations</span>
        <span class="hljs-keyword">finally</span>:
           f.close()</code></pre>
        <p>This way, we are guaranteeing that the file is properly closed even if an exception is raised that causes program flow to stop.</p>
        <p>The best way to close a file is by using the&nbsp;<code>with</code>&nbsp;statement. This ensures that the file is closed when the block inside the&nbsp;<code>with</code>&nbsp;statement is exited.</p>
        <p>We don't need to explicitly call the&nbsp;<code>close()</code>&nbsp;method. It is done internally.</p>
        <pre><code class="python hljs"><span class="hljs-keyword">with</span> open(<span class="hljs-string">"test.txt"</span>, encoding = <span class="hljs-string">'utf-8'</span>) <span class="hljs-keyword">as</span> f:
           <span class="hljs-comment"># perform file operations</span></code></pre>
        <hr />
        <h2 id="write">Writing to Files in Python</h2>
        <p>In order to write into a file in Python, we need to open it in write&nbsp;<code>w</code>, append&nbsp;<code>a</code>&nbsp;or exclusive creation&nbsp;<code>x</code>&nbsp;mode.</p>
        <p>We need to be careful with the&nbsp;<code>w</code>&nbsp;mode, as it will overwrite into the file if it already exists. Due to this, all the previous data are erased.</p>
        <p>Writing a string or sequence of bytes (for binary files) is done using the&nbsp;<code>write()</code>&nbsp;method. This method returns the number of characters written to the file.</p>
        <pre><code class="python hljs"><span class="hljs-keyword">with</span> open(<span class="hljs-string">"test.txt"</span>,<span class="hljs-string">'w'</span>,encoding = <span class="hljs-string">'utf-8'</span>) <span class="hljs-keyword">as</span> f:
           f.write(<span class="hljs-string">"my first file\n"</span>)
           f.write(<span class="hljs-string">"This file\n\n"</span>)
           f.write(<span class="hljs-string">"contains three lines\n"</span>)</code></pre>
        <p>This program will create a new file named&nbsp;<code>test.txt</code>&nbsp;in the current directory if it does not exist. If it does exist, it is overwritten.</p>
        <p>We must include the newline characters ourselves to distinguish the different lines.</p>
        <hr />
        <h2 id="read">Reading Files in Python</h2>
        <p>To read a file in Python, we must open the file in reading&nbsp;<code>r</code>&nbsp;mode.</p>
        <p>There are various methods available for this purpose. We can use the&nbsp;<code>read(size)</code>&nbsp;method to read in the&nbsp;<var>size</var>&nbsp;number of data. If the&nbsp;<var>size</var>&nbsp;parameter is not specified, it reads and returns up to the end of the file.</p>
        <p>We can read the&nbsp;<code>text.txt</code>&nbsp;file we wrote in the above section in the following way:</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>f = open(<span class="hljs-string">"test.txt"</span>,<span class="hljs-string">'r'</span>,encoding = <span class="hljs-string">'utf-8'</span>)
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.read(<span class="hljs-number">4</span>)    <span class="hljs-comment"># read the first 4 data</span>
        <span class="hljs-string">'This'</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.read(<span class="hljs-number">4</span>)    <span class="hljs-comment"># read the next 4 data</span>
        <span class="hljs-string">' is '</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.read()     <span class="hljs-comment"># read in the rest till end of file</span>
        <span class="hljs-string">'my first file\nThis file\ncontains three lines\n'</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.read()  <span class="hljs-comment"># further reading returns empty sting</span>
        <span class="hljs-string">''</span></code></pre>
        <p>We can see that the&nbsp;<code>read()</code>&nbsp;method returns a newline as&nbsp;<code>'\n'</code>. Once the end of the file is reached, we get an empty string on further reading.</p>
        <p>We can change our current file cursor (position) using the&nbsp;<code>seek()</code>&nbsp;method. Similarly, the&nbsp;<code>tell()</code>&nbsp;method returns our current position (in number of bytes).</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>f.tell()    <span class="hljs-comment"># get the current file position</span>
        <span class="hljs-number">56</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.seek(<span class="hljs-number">0</span>)   <span class="hljs-comment"># bring file cursor to initial position</span>
        <span class="hljs-number">0</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">print</span>(f.read())  <span class="hljs-comment"># read the entire file</span>
        This <span class="hljs-keyword">is</span> my first file
        This file
        contains three lines</code></pre>
        <p>We can read a file line-by-line using a&nbsp;<a href="https://www.programiz.com/python-programming/for-loop">for loop</a>. This is both efficient and fast.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> line <span class="hljs-keyword">in</span> f:
        <span class="hljs-meta">... </span>    <span class="hljs-keyword">print</span>(line, end = <span class="hljs-string">''</span>)
        ...
        This <span class="hljs-keyword">is</span> my first file
        This file
        contains three lines</code></pre>
        <p>In this program, the lines in the file itself include a newline character&nbsp;<code>\n</code>. So, we use the end parameter of the&nbsp;<code>print()</code>&nbsp;function to avoid two newlines when printing.</p>
        <p>Alternatively, we can use the&nbsp;<code>readline()</code>&nbsp;method to read individual lines of a file. This method reads a file till the newline, including the newline character.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>f.readline()
        <span class="hljs-string">'This is my first file\n'</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.readline()
        <span class="hljs-string">'This file\n'</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.readline()
        <span class="hljs-string">'contains three lines\n'</span>
        
        <span class="hljs-meta">&gt;&gt;&gt; </span>f.readline()
        <span class="hljs-string">''</span></code></pre>
        <p>Lastly, the&nbsp;<code>readlines()</code>&nbsp;method returns a list of remaining lines of the entire file. All these reading methods return empty values when the end of file (EOF) is reached.</p>
        <pre><code class="python hljs"><span class="hljs-meta">&gt;&gt;&gt; </span>f.readlines()
        [<span class="hljs-string">'This is my first file\n'</span>, <span class="hljs-string">'This file\n'</span>, <span class="hljs-string">'contains three lines\n'</span>]</code></pre>
        <hr />
        <h2 id="methods">Python File Methods</h2>
        <p>There are various methods available with the file object. Some of them have been used in the above examples.</p>
        <p>Here is the complete list of methods in text mode with a brief description:</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Method</th>
        <th>Description</th>
        </tr>
        <tr>
        <td>close()</td>
        <td>Closes an opened file. It has no effect if the file is already closed.</td>
        </tr>
        <tr>
        <td>detach()</td>
        <td>Separates the underlying binary buffer from the <code>TextIOBase</code> and returns it.</td>
        </tr>
        <tr>
        <td>fileno()</td>
        <td>Returns an integer number (file descriptor) of the file.</td>
        </tr>
        <tr>
        <td>flush()</td>
        <td>Flushes the write buffer of the file stream.</td>
        </tr>
        <tr>
        <td>isatty()</td>
        <td>Returns <code>True</code> if the file stream is interactive.</td>
        </tr>
        <tr>
        <td>read(<var>n</var>)</td>
        <td>Reads at most <var>n</var> characters from the file. Reads till end of file if it is negative or <code>None</code>.</td>
        </tr>
        <tr>
        <td>readable()</td>
        <td>Returns <code>True</code> if the file stream can be read from.</td>
        </tr>
        <tr>
        <td>readline(<var>n</var>=-1)</td>
        <td>Reads and returns one line from the file. Reads in at most <var>n</var> bytes if specified.</td>
        </tr>
        <tr>
        <td>readlines(<var>n</var>=-1)</td>
        <td>Reads and returns a list of lines from the file. Reads in at most <var>n</var> bytes/characters if specified.</td>
        </tr>
        <tr>
        <td>seek(<var>offset</var>,<var>from</var>=<code>SEEK_SET</code>)</td>
        <td>Changes the file position to <var>offset</var> bytes, in reference to <var>from</var> (start, current, end).</td>
        </tr>
        <tr>
        <td>seekable()</td>
        <td>Returns <code>True</code> if the file stream supports random access.</td>
        </tr>
        <tr>
        <td>tell()</td>
        <td>Returns an integer that represents the current position of the file's object.</td>
        </tr>
        <tr>
        <td>truncate(<var>size</var>=<code>None</code>)</td>
        <td>Resizes the file stream to <var>size</var> bytes. If <var>size</var> is not specified, resizes to current location.</td>
        </tr>
        <tr>
        <td>writable()</td>
        <td>Returns <code>True</code> if the file stream can be written to.</td>
        </tr>
        <tr>
        <td>write(<var>s</var>)</td>
        <td>Writes the string <var>s</var> to the file and returns the number of characters written.</td>
        </tr>
        <tr>
        <td>writelines(<var>lines</var>)</td>
        <td>Writes a list of <var>lines</var> to the file.</td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>`
    },
    {
        topic: 'Array',
        content: `<div class="pgAdWrapper">
        <h1>Python Array</h1>
        <p class="editor-contents__short-description">In this tutorial, you&rsquo;ll learn about Python array module, the difference between arrays and lists, and how and when to use them with the help of examples.</p>
        <div id="node-1453" class="node node-python clearfix">
        <div class="content">
        <p class="note-tip"><strong>Note:</strong>&nbsp;When people say arrays in Python, more often than not, they are talking about&nbsp;<strong>Python lists</strong>. If that's the case, visit the&nbsp;<a title="Lists in Python" href="https://www.programiz.com/python-programming/list">Python list</a>&nbsp;tutorial.</p>
        <p>In this tutorial, we will focus on a module named&nbsp;<code>array</code>. The&nbsp;<code>array</code>&nbsp;module allows us to store a collection of numeric values.</p>
        <hr />
        <h2 id="create">Creating Python Arrays</h2>
        <p>To create an array of numeric values, we need to import the&nbsp;<code>array</code>&nbsp;module. For example:</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            a = arr.array(<span class="hljs-string">'d'</span>, [<span class="hljs-number">1.1</span>, <span class="hljs-number">3.5</span>, <span class="hljs-number">4.5</span>])
            <span class="hljs-keyword">print</span>(a)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('d', [1.1, 3.5, 4.5])</samp></pre>
        <p>Here, we created an array of&nbsp;<code>float</code>&nbsp;type. The letter&nbsp;<code>d</code>&nbsp;is a type code. This determines the type of the array during creation.</p>
        <p>Commonly used type codes are listed as follows:</p>
        <div class="table-responsive">
        <table border="0">
        <tbody>
        <tr>
        <th>Code</th>
        <th>C Type</th>
        <th>Python Type</th>
        <th>Min bytes</th>
        </tr>
        <tr>
        <td><code>b</code></td>
        <td>signed char</td>
        <td>int</td>
        <td>1</td>
        </tr>
        <tr>
        <td><code>B</code></td>
        <td>unsigned char</td>
        <td>int</td>
        <td>1</td>
        </tr>
        <tr>
        <td><code>u</code></td>
        <td>Py_UNICODE</td>
        <td>Unicode</td>
        <td>2</td>
        </tr>
        <tr>
        <td><code>h</code></td>
        <td>signed short</td>
        <td>int</td>
        <td>2</td>
        </tr>
        <tr>
        <td><code>H</code></td>
        <td>unsigned short</td>
        <td>int</td>
        <td>2</td>
        </tr>
        <tr>
        <td><code>i</code></td>
        <td>signed int</td>
        <td>int</td>
        <td>2</td>
        </tr>
        <tr>
        <td><code>I</code></td>
        <td>unsigned int</td>
        <td>int</td>
        <td>2</td>
        </tr>
        <tr>
        <td><code>l</code></td>
        <td>signed long</td>
        <td>int</td>
        <td>4</td>
        </tr>
        <tr>
        <td><code>L</code></td>
        <td>unsigned long</td>
        <td>int</td>
        <td>4</td>
        </tr>
        <tr>
        <td><code>f</code></td>
        <td>float</td>
        <td>float</td>
        <td>4</td>
        </tr>
        <tr>
        <td><code>d</code></td>
        <td>double</td>
        <td>float</td>
        <td>8</td>
        </tr>
        </tbody>
        </table>
        </div>
        <p>We will not discuss different C types in this article. We will use two type codes in this entire article:&nbsp;<code>i</code>&nbsp;for integers and&nbsp;<code>d</code>&nbsp;for floats.</p>
        <p class="note-tip"><strong>Note</strong>: The&nbsp;<code>u</code>&nbsp;type code for Unicode characters is deprecated since version 3.3. Avoid using as much as possible.</p>
        <hr />
        <h2 id="access">Accessing Python Array Elements</h2>
        <p>We use indices to access elements of an array:</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            a = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>])
            
            <span class="hljs-keyword">print</span>(<span class="hljs-string">"First element:"</span>, a[<span class="hljs-number">0</span>])
            <span class="hljs-keyword">print</span>(<span class="hljs-string">"Second element:"</span>, a[<span class="hljs-number">1</span>])
            <span class="hljs-keyword">print</span>(<span class="hljs-string">"Last element:"</span>, a[<span class="hljs-number">-1</span>])</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>First element: 2
            Second element: 4
            Last element: 8</samp></pre>
        <p class="note-tip"><strong>Note</strong>: The index starts from 0 (not 1) similar to lists.</p>
        <hr />
        <h2 id="slice">Slicing Python Arrays</h2>
        <p>We can access a range of items in an array by using the slicing operator&nbsp;<code>:</code>.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            numbers_list = [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">62</span>, <span class="hljs-number">5</span>, <span class="hljs-number">42</span>, <span class="hljs-number">52</span>, <span class="hljs-number">48</span>, <span class="hljs-number">5</span>]
            numbers_array = arr.array(<span class="hljs-string">'i'</span>, numbers_list)
            
            <span class="hljs-keyword">print</span>(numbers_array[<span class="hljs-number">2</span>:<span class="hljs-number">5</span>]) <span class="hljs-comment"># 3rd to 5th</span>
            <span class="hljs-keyword">print</span>(numbers_array[:<span class="hljs-number">-5</span>]) <span class="hljs-comment"># beginning to 4th</span>
            <span class="hljs-keyword">print</span>(numbers_array[<span class="hljs-number">5</span>:])  <span class="hljs-comment"># 6th to end</span>
            <span class="hljs-keyword">print</span>(numbers_array[:])   <span class="hljs-comment"># beginning to end</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [62, 5, 42])
            array('i', [2, 5, 62])
            array('i', [52, 48, 5])
            array('i', [2, 5, 62, 5, 42, 52, 48, 5])</samp></pre>
        <hr />
        <h2 id="change">Changing and Adding Elements</h2>
        <p>Arrays are mutable; their elements can be changed in a similar way as lists.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            numbers = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">10</span>])
            
            <span class="hljs-comment"># changing first element</span>
            numbers[<span class="hljs-number">0</span>] = <span class="hljs-number">0</span>    
            <span class="hljs-keyword">print</span>(numbers)     <span class="hljs-comment"># Output: array('i', [0, 2, 3, 5, 7, 10])</span>
            
            <span class="hljs-comment"># changing 3rd to 5th element</span>
            numbers[<span class="hljs-number">2</span>:<span class="hljs-number">5</span>] = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">8</span>])   
            <span class="hljs-keyword">print</span>(numbers)     <span class="hljs-comment"># Output: array('i', [0, 2, 4, 6, 8, 10])</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [0, 2, 3, 5, 7, 10])
            array('i', [0, 2, 4, 6, 8, 10])</samp></pre>
        <p>We can add one item to the array using the&nbsp;<code>append()</code>&nbsp;method, or add several items using the&nbsp;<code>extend()</code>&nbsp;method.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            numbers = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>])
            
            numbers.append(<span class="hljs-number">4</span>)
            <span class="hljs-keyword">print</span>(numbers)     <span class="hljs-comment"># Output: array('i', [1, 2, 3, 4])</span>
            
            <span class="hljs-comment"># extend() appends iterable to the end of the array</span>
            numbers.extend([<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>])
            <span class="hljs-keyword">print</span>(numbers)     <span class="hljs-comment"># Output: array('i', [1, 2, 3, 4, 5, 6, 7])</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [1, 2, 3, 4])
            array('i', [1, 2, 3, 4, 5, 6, 7])</samp></pre>
        <div id="block-inject-1" class="block-inject block-inject-1">&nbsp;</div>
        <div class="clearfix">&nbsp;</div>
        <p>We can also concatenate two arrays using&nbsp;<code>+</code>&nbsp;operator.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            odd = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>])
            even = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>])
            
            numbers = arr.array(<span class="hljs-string">'i'</span>)   <span class="hljs-comment"># creating empty array of integer</span>
            numbers = odd + even
            
            <span class="hljs-keyword">print</span>(numbers)</code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [1, 3, 5, 2, 4, 6])    </samp></pre>
        <hr />
        <h2 id="remove">Removing Python Array Elements</h2>
        <p>We can delete one or more items from an array using Python's&nbsp;<a href="https://www.programiz.com/python-programming/del">del</a>&nbsp;statement.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            number = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>])
            
            <span class="hljs-keyword">del</span> number[<span class="hljs-number">2</span>]  <span class="hljs-comment"># removing third element</span>
            <span class="hljs-keyword">print</span>(number)  <span class="hljs-comment"># Output: array('i', [1, 2, 3, 4])</span>
            
            <span class="hljs-keyword">del</span> number  <span class="hljs-comment"># deleting entire array</span>
            <span class="hljs-keyword">print</span>(number)  <span class="hljs-comment"># Error: array is not defined</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [1, 2, 3, 4])
            Traceback (most recent call last):
              File "&lt;string&gt;", line 9, in &lt;module&gt;
                print(number)  # Error: array is not defined
            NameError: name 'number' is not defined</samp></pre>
        <p>We can use the&nbsp;<code>remove()</code>&nbsp;method to remove the given item, and&nbsp;<code>pop()</code>&nbsp;method to remove an item at the given index.</p>
        <div class="code-editor">
        <div class="code-editor__area">
        <div class="pre-code-wrapper">
        <div class="copy-code-button" title="Click to copy">&nbsp;</div>
        <pre class="python-exec"><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            
            numbers = arr.array(<span class="hljs-string">'i'</span>, [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>])
            
            numbers.remove(<span class="hljs-number">12</span>)
            <span class="hljs-keyword">print</span>(numbers)   <span class="hljs-comment"># Output: array('i', [10, 11, 12, 13])</span>
            
            <span class="hljs-keyword">print</span>(numbers.pop(<span class="hljs-number">2</span>))   <span class="hljs-comment"># Output: 12</span>
            <span class="hljs-keyword">print</span>(numbers)   <span class="hljs-comment"># Output: array('i', [10, 11, 13])</span></code></pre>
        </div>
        </div>
        </div>
        <p><strong>Output</strong></p>
        <pre><samp>array('i', [10, 11, 12, 13])
            12
            array('i', [10, 11, 13])</samp></pre>
        <p>Check this page to learn more about&nbsp;<a href="https://docs.python.org/3/library/array.html">Python array and array methods</a>.</p>
        <hr />
        <h2 id="list-arrays">Python Lists Vs Arrays</h2>
        <p>In Python, we can treat lists as arrays. However, we cannot constrain the type of elements stored in a list. For example:</p>
        <pre><code class="python hljs"><span class="hljs-comment"># elements of different types</span>
            a = [<span class="hljs-number">1</span>, <span class="hljs-number">3.5</span>, <span class="hljs-string">"Hello"</span>] </code></pre>
        <p>If you create arrays using the&nbsp;<code>array</code>&nbsp;module, all elements of the array must be of the same numeric type.</p>
        <pre><code class="python hljs"><span class="hljs-keyword">import</span> array <span class="hljs-keyword">as</span> arr
            <span class="hljs-comment"># Error</span>
            a = arr.array(<span class="hljs-string">'d'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">3.5</span>, <span class="hljs-string">"Hello"</span>])</code></pre>
        <p><strong>Output</strong></p>
        <pre><samp>Traceback (most recent call last):
              File "&lt;string&gt;", line 3, in &lt;module&gt;
                a = arr.array('d', [1, 3.5, "Hello"])
            TypeError: must be real number, not str</samp></pre>
        <hr />
        <h2 id="use">When to use arrays?</h2>
        <p>Lists are much more flexible than arrays. They can store elements of different data types including strings. And, if you need to do mathematical computation on arrays and matrices, you are much better off using something like&nbsp;<a href="https://www.programiz.com/python-programming/matrix#numpy">NumPy</a>.</p>
        <p>So, what are the uses of arrays created from the Python array module?</p>
        <p>The&nbsp;<code>array.array</code>&nbsp;type is just a thin wrapper on C arrays which provides space-efficient storage of basic C-style data types. If you need to allocate an array that you know will not change, then arrays can be faster and use less memory than lists.</p>
        <p>Unless you don't really need arrays (array module may be needed to interface with C code), the use of the array module is not recommended.</p>
        </div>
        </div>
        <div id="node-47" class="node node-python clearfix">&nbsp;</div>
        </div>`
    },
    {
        topic: 'Oops',
        content: `<h1 class="h1">Python OOPs Concepts</h1>
        <p>Like other general-purpose programming languages, Python is also an object-oriented language since its beginning. It allows us to develop applications using an Object-Oriented approach. In&nbsp;<a href="https://www.javatpoint.com/python-tutorial">Python</a>, we can easily create and use classes and objects.</p>
        <p>An object-oriented paradigm is to design the program using classes and objects. The object is related to real-word entities such as book, house, pencil, etc. The oops concept focuses on writing the reusable code. It is a widespread technique to solve the problem by creating objects.</p>
        <p>Major principles of object-oriented programming system are given below.</p>
        <ul class="points">
        <li>Class</li>
        <li>Object</li>
        <li>Method</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Data Abstraction</li>
        <li>Encapsulation</li>
        </ul>
        <h2 class="h2">Class</h2>
        <p>The class can be defined as a collection of objects. It is a logical entity that has some specific attributes and methods. For example: if you have an employee class, then it should contain an attribute and method, i.e. an email id, name, age, salary, etc.</p>
        <p><strong>Syntax</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;ClassName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;statement-<span class="number">1</span>&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;statement-N&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h2 class="h2">Object</h2>
        <p>The object is an entity that has state and behavior. It may be any real-world object like the mouse, keyboard, chair, table, pen, etc.</p>
        <p>Everything in Python is an object, and almost everything has attributes and methods. All functions have a built-in attribute __doc__, which returns the docstring defined in the function source code.</p>
        <p>When we define a class, it needs to create an object to allocate the memory. Consider the following example.</p>
        <p><strong>Example:</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;car:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,modelname,&nbsp;year):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.modelname&nbsp;=&nbsp;modelname&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.year&nbsp;=&nbsp;year&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="special">self</span>.modelname,<span class="special">self</span>.year)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">c1&nbsp;=&nbsp;car(<span class="string">"Toyota"</span>,&nbsp;<span class="number">2016</span>)&nbsp;&nbsp;</li>
        <li class="alt">c1.display()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Toyota 2016
        </pre>
        </div>
        <p>In the above example, we have created the class named car, and it has two attributes modelname and year. We have created a c1 object to access the class attribute. The c1 object will allocate memory for these values. We will learn more about class and object in the next tutorial.</p>
        <h2 class="h2">Method</h2>
        <p>The method is a function that is associated with an object. In Python, a method is not unique to class instances. Any object type can have methods.</p>
        <h2 class="h2">Inheritance</h2>
        <p>Inheritance is the most important aspect of object-oriented programming, which simulates the real-world concept of inheritance. It specifies that the child object acquires all the properties and behaviors of the parent object.</p>
        <p>By using inheritance, we can create a class which uses all the properties and behavior of another class. The new class is known as a derived class or child class, and the one whose properties are acquired is known as a base class or parent class.</p>
        <p>It provides the re-usability of the code.</p>
        <h2 class="h2">Polymorphism</h2>
        <p>Polymorphism contains two words "poly" and "morphs". Poly means many, and morph means shape. By polymorphism, we understand that one task can be performed in different ways. For example - you have a class animal, and all animals speak. But they speak differently. Here, the "speak" behavior is polymorphic in a sense and depends on the animal. So, the abstract "animal" concept does not actually "speak", but specific animals (like dogs and cats) have a concrete implementation of the action "speak".</p>
        <h2 class="h2">Encapsulation</h2>
        <p>Encapsulation is also an essential aspect of object-oriented programming. It is used to restrict access to methods and variables. In encapsulation, code and data are wrapped together within a single unit from being modified by accident.</p>
        <h2 class="h2">Data Abstraction</h2>
        <p>Data abstraction and encapsulation both are often used as synonyms. Both are nearly synonyms because data abstraction is achieved through encapsulation.</p>
        <p>Abstraction is used to hide internal details and show only functionalities. Abstracting something means to give names to things so that the name captures the core of what a function or a whole program does.</p>
        <h2 class="h2">Object-oriented vs. Procedure-oriented Programming languages</h2>
        <p>The difference between object-oriented and procedure-oriented programming is given below:</p>
        <table class="alt">
        <tbody>
        <tr>
        <th>Index</th>
        <th>Object-oriented Programming</th>
        <th>Procedural Programming</th>
        </tr>
        <tr>
        <td>1.</td>
        <td>Object-oriented programming is the problem-solving approach and used where computation is done by using objects.</td>
        <td>Procedural programming uses a list of instructions to do computation step by step.</td>
        </tr>
        <tr>
        <td>2.</td>
        <td>It makes the development and maintenance easier.</td>
        <td>In procedural programming, It is not easy to maintain the codes when the project becomes lengthy.</td>
        </tr>
        <tr>
        <td>3.</td>
        <td>It simulates the real world entity. So real-world problems can be easily solved through oops.</td>
        <td>It doesn't simulate the real world. It works on step by step instructions divided into small parts called functions.</td>
        </tr>
        <tr>
        <td>4.</td>
        <td>It provides data hiding. So it is more secure than procedural languages. You cannot access private data from anywhere.</td>
        <td>Procedural language doesn't provide any proper way for data binding, so it is less secure.</td>
        </tr>
        <tr>
        <td>5.</td>
        <td>Example of object-oriented programming languages is C++, Java, .Net, Python, C#, etc.</td>
        <td>Example of procedural languages are: C, Fortran, Pascal, VB etc.</td>
        </tr>
        </tbody>
        </table>
        <h1 class="h1">Python Class and Objects</h1>
        <p>We have already discussed in previous tutorial, a class is a virtual entity and can be seen as a blueprint of an object. The class came into existence when it instantiated. Let's understand it by an example.</p>
        <p>Suppose a class is a prototype of a building. A building contains all the details about the floor, rooms, doors, windows, etc. we can make as many buildings as we want, based on these details. Hence, the building can be seen as a class, and we can create as many objects of this class.</p>
        <p>On the other hand, the object is the instance of a class. The process of creating an object can be called instantiation.</p>
        <p>In this section of the tutorial, we will discuss creating classes and objects in Python. We will also discuss how a class attribute is accessed by using the object.</p>
        <h2 class="h2">Creating classes in Python</h2>
        <p>In Python, a class can be created by using the keyword class, followed by the class name. The syntax to create a class is given below.</p>
        <p><strong>Syntax</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;ClassName:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#statement_suite&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>In Python, we must notice that each class is associated with a documentation string which can be accessed by using&nbsp;<strong>&lt;class-name&gt;.__doc__.</strong>&nbsp;A class contains a statement suite including fields, constructor, function, etc. definition.</p>
        <p>&nbsp;</p>
        <p>Consider the following example to create a class&nbsp;<strong>Employee</strong>&nbsp;which contains two fields as Employee id, and name.</p>
        <p>The class also contains a function&nbsp;<strong>display()</strong>, which is used to display the information of the&nbsp;<strong>Employee.</strong></p>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Employee:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;=&nbsp;<span class="number">10</span>&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;=&nbsp;<span class="string">"Devansh"</span>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display&nbsp;(<span class="special">self</span>):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="special">self</span>.id,<span class="special">self</span>.name)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>Here, the&nbsp;<strong>self</strong>&nbsp;is used as a reference variable, which refers to the current class object. It is always the first argument in the function definition. However, using&nbsp;<strong>self</strong>&nbsp;is optional in the function call.</p>
        <h3 class="h3">The self-parameter</h3>
        <p>The self-parameter refers to the current instance of the class and accesses the class variables. We can use anything instead of self, but it must be the first parameter of any function which belongs to the class.</p>
        <h2 class="h2">Creating an instance of the class</h2>
        <p>A class needs to be instantiated if we want to use the class attributes in another class or method. A class can be instantiated by calling the class using the class name.</p>
        <p>The syntax to create the instance of the class is given below.</p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt">&lt;object-name&gt;&nbsp;=&nbsp;&lt;<span class="keyword">class</span>-name&gt;(&lt;arguments&gt;)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>The following example creates the instance of the class Employee defined in the above example.</p>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Employee:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;=&nbsp;<span class="number">10</span>&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;=&nbsp;<span class="string">"John"</span>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display&nbsp;(<span class="special">self</span>):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"ID:&nbsp;%d&nbsp;\nName:&nbsp;%s"</span>%(<span class="special">self</span>.id,<span class="special">self</span>.name))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;Creating&nbsp;a&nbsp;emp&nbsp;instance&nbsp;of&nbsp;Employee&nbsp;class</span>&nbsp;&nbsp;</li>
        <li class="alt">emp&nbsp;=&nbsp;Employee()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">emp.display()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>ID: 10 
        Name: John
        </pre>
        </div>
        <p>In the above code, we have created the Employee class which has two attributes named id and name and assigned value to them. We can observe we have passed the self as parameter in display function. It is used to refer to the same class attribute.</p>
        <p>We have created a new instance object named&nbsp;<strong>emp.</strong>&nbsp;By using it, we can access the attributes of the class.</p>
        <h2 class="h2">Delete the Object</h2>
        <p>We can delete the properties of the object or object itself by using the del keyword. Consider the following example.</p>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Employee:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;=&nbsp;<span class="number">10</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;=&nbsp;<span class="string">"John"</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"ID:&nbsp;%d&nbsp;\nName:&nbsp;%s"</span>&nbsp;%&nbsp;(<span class="special">self</span>.id,&nbsp;<span class="special">self</span>.name))&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;Creating&nbsp;a&nbsp;emp&nbsp;instance&nbsp;of&nbsp;Employee&nbsp;class</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">emp&nbsp;=&nbsp;Employee()&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;Deleting&nbsp;the&nbsp;property&nbsp;of&nbsp;object</span>&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">del</span>&nbsp;emp.id&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;Deleting&nbsp;the&nbsp;object&nbsp;itself</span>&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">del</span>&nbsp;emp&nbsp;&nbsp;</li>
        <li class="alt">emp.display()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>It will through the Attribute error because we have deleted the object&nbsp;<strong>emp</strong>.</p>
        <h1 class="h1">Python Constructor</h1>
        <p>A constructor is a special type of method (function) which is used to initialize the instance members of the class.</p>
        <p>In C++ or Java, the constructor has the same name as its class, but it treats constructor differently in Python. It is used to create an object.</p>
        <p>Constructors can be of two types.</p>
        <ol class="points">
        <li>Parameterized Constructor</li>
        <li>Non-parameterized Constructor</li>
        </ol>
        <p>Constructor definition is executed when we create the object of this class. Constructors also verify that there are enough resources for the object to perform any start-up task.</p>
        <h2 class="h2">Creating the constructor in python</h2>
        <p>In Python, the method the&nbsp;<strong>__init__()</strong>&nbsp;simulates the constructor of the class. This method is called when the class is instantiated. It accepts the&nbsp;<strong>self</strong>-keyword as a first argument which allows accessing the attributes or method of the class.</p>
        <p>We can pass any number of arguments at the time of creating the class object, depending upon the&nbsp;<strong>__init__()</strong>&nbsp;definition. It is mostly used to initialize the class attributes. Every class must have a constructor, even if it simply relies on the default constructor.</p>
        <p>Consider the following example to initialize the&nbsp;<strong>Employee</strong>&nbsp;class attributes.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Employee:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,&nbsp;name,&nbsp;id):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.id&nbsp;=&nbsp;id&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.name&nbsp;=&nbsp;name&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"ID:&nbsp;%d&nbsp;\nName:&nbsp;%s"</span>&nbsp;%&nbsp;(<span class="special">self</span>.id,&nbsp;<span class="special">self</span>.name))&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">emp1&nbsp;=&nbsp;Employee(<span class="string">"John"</span>,&nbsp;<span class="number">101</span>)&nbsp;&nbsp;</li>
        <li class="alt">emp2&nbsp;=&nbsp;Employee(<span class="string">"David"</span>,&nbsp;<span class="number">102</span>)&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;accessing&nbsp;display()&nbsp;method&nbsp;to&nbsp;print&nbsp;employee&nbsp;1&nbsp;information</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">emp1.display()&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;accessing&nbsp;display()&nbsp;method&nbsp;to&nbsp;print&nbsp;employee&nbsp;2&nbsp;information</span>&nbsp;&nbsp;</li>
        <li class="">emp2.display()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>ID: 101 
        Name: John
        ID: 102 
        Name: David
        </pre>
        </div>
        <h3 class="h2">Counting the number of objects of a class</h3>
        <p>The constructor is called automatically when we create the object of the class. Consider the following example.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;count&nbsp;=&nbsp;<span class="number">0</span>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student.count&nbsp;=&nbsp;Student.count&nbsp;+&nbsp;<span class="number">1</span>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">s1=Student()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">s2=Student()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">s3=Student()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(<span class="string">"The&nbsp;number&nbsp;of&nbsp;students:"</span>,Student.count)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>The number of students: 3
        </pre>
        </div>
        <h2 class="h2">Python Non-Parameterized Constructor</h2>
        <p>The non-parameterized constructor uses when we do not want to manipulate the value or the constructor that has only self as an argument. Consider the following example.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;Constructor&nbsp;-&nbsp;non&nbsp;parameterized</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"This&nbsp;is&nbsp;non&nbsp;parametrized&nbsp;constructor"</span>)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;show(<span class="special">self</span>,name):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Hello"</span>,name)&nbsp;&nbsp;</li>
        <li class="alt">student&nbsp;=&nbsp;Student()&nbsp;&nbsp;</li>
        <li class="">student.show(<span class="string">"John"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h2 class="h2">Python Parameterized Constructor</h2>
        <p>The parameterized constructor has multiple parameters along with the&nbsp;<strong>self</strong>. Consider the following example.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;Constructor&nbsp;-&nbsp;parameterized</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,&nbsp;name):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"This&nbsp;is&nbsp;parametrized&nbsp;constructor"</span>)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.name&nbsp;=&nbsp;name&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;show(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Hello"</span>,<span class="special">self</span>.name)&nbsp;&nbsp;</li>
        <li class="">student&nbsp;=&nbsp;Student(<span class="string">"John"</span>)&nbsp;&nbsp;</li>
        <li class="alt">student.show()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>This is parametrized constructor
        Hello John
        </pre>
        </div>
        <h2 class="h2">Python Default Constructor</h2>
        <p>When we do not include the constructor in the class or forget to declare it, then that becomes the default constructor. It does not perform any task but initializes the objects. Consider the following example.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;roll_num&nbsp;=&nbsp;<span class="number">101</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;name&nbsp;=&nbsp;<span class="string">"Joseph"</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="special">self</span>.roll_num,<span class="special">self</span>.name)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">st&nbsp;=&nbsp;Student()&nbsp;&nbsp;</li>
        <li class="alt">st.display()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>101 Joseph
        </pre>
        </div>
        <h2 class="h2">More than One Constructor in Single class</h2>
        <p>Let's have a look at another scenario, what happen if we declare the two same constructors in the class.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;First&nbsp;Constructor"</span>)&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;second&nbsp;contructor"</span>)&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">st&nbsp;=&nbsp;Student()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>The Second Constructor
        </pre>
        </div>
        <p>In the above code, the object&nbsp;<strong>st</strong>&nbsp;called the second constructor whereas both have the same configuration. The first method is not accessible by the&nbsp;<strong>st</strong>&nbsp;object. Internally, the object of the class will always call the last constructor if the class has multiple constructors.</p>
        <h2 class="h2">Python built-in class functions</h2>
        <p>The built-in functions defined in the class are described in the following table.</p>
        <table class="alt">
        <tbody>
        <tr>
        <th>SN</th>
        <th>Function</th>
        <th>Description</th>
        </tr>
        <tr>
        <td>1</td>
        <td>getattr(obj,name,default)</td>
        <td>It is used to access the attribute of the object.</td>
        </tr>
        <tr>
        <td>2</td>
        <td>setattr(obj, name,value)</td>
        <td>It is used to set a particular value to the specific attribute of an object.</td>
        </tr>
        <tr>
        <td>3</td>
        <td>delattr(obj, name)</td>
        <td>It is used to delete a specific attribute.</td>
        </tr>
        <tr>
        <td>4</td>
        <td>hasattr(obj, name)</td>
        <td>It returns true if the object contains some specific attribute.</td>
        </tr>
        </tbody>
        </table>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,&nbsp;name,&nbsp;id,&nbsp;age):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.name&nbsp;=&nbsp;name&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.id&nbsp;=&nbsp;id&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.age&nbsp;=&nbsp;age&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;creates&nbsp;the&nbsp;object&nbsp;of&nbsp;the&nbsp;class&nbsp;Student</span>&nbsp;&nbsp;</li>
        <li class="">s&nbsp;=&nbsp;Student(<span class="string">"John"</span>,&nbsp;<span class="number">101</span>,&nbsp;<span class="number">22</span>)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;prints&nbsp;the&nbsp;attribute&nbsp;name&nbsp;of&nbsp;the&nbsp;object&nbsp;s</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(getattr(s,&nbsp;<span class="string">'name'</span>))&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;reset&nbsp;the&nbsp;value&nbsp;of&nbsp;attribute&nbsp;age&nbsp;to&nbsp;23</span>&nbsp;&nbsp;</li>
        <li class="">setattr(s,&nbsp;<span class="string">"age"</span>,&nbsp;<span class="number">23</span>)&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;prints&nbsp;the&nbsp;modified&nbsp;value&nbsp;of&nbsp;age</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(getattr(s,&nbsp;<span class="string">'age'</span>))&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;prints&nbsp;true&nbsp;if&nbsp;the&nbsp;student&nbsp;contains&nbsp;the&nbsp;attribute&nbsp;with&nbsp;name&nbsp;id</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(hasattr(s,&nbsp;<span class="string">'id'</span>))&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;deletes&nbsp;the&nbsp;attribute&nbsp;age</span>&nbsp;&nbsp;</li>
        <li class="alt">delattr(s,&nbsp;<span class="string">'age'</span>)&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="comment">#&nbsp;this&nbsp;will&nbsp;give&nbsp;an&nbsp;error&nbsp;since&nbsp;the&nbsp;attribute&nbsp;age&nbsp;has&nbsp;been&nbsp;deleted</span>&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(s.age)&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>John
        23
        True
        AttributeError: 'Student' object has no attribute 'age'
        </pre>
        </div>
        <h2 class="h2">Built-in class attributes</h2>
        <p>Along with the other attributes, a Python class also contains some built-in class attributes which provide information about the class.</p>
        <p>The built-in class attributes are given in the below table.</p>
        <table class="alt">
        <tbody>
        <tr>
        <th>SN</th>
        <th>Attribute</th>
        <th>Description</th>
        </tr>
        <tr>
        <td>1</td>
        <td>__dict__</td>
        <td>It provides the dictionary containing the information about the class namespace.</td>
        </tr>
        <tr>
        <td>2</td>
        <td>__doc__</td>
        <td>It contains a string which has the class documentation</td>
        </tr>
        <tr>
        <td>3</td>
        <td>__name__</td>
        <td>It is used to access the class name.</td>
        </tr>
        <tr>
        <td>4</td>
        <td>__module__</td>
        <td>It is used to access the module in which, this class is defined.</td>
        </tr>
        <tr>
        <td>5</td>
        <td>__bases__</td>
        <td>It contains a tuple including all base classes.</td>
        </tr>
        </tbody>
        </table>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Student:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,name,id,age):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.name&nbsp;=&nbsp;name;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.id&nbsp;=&nbsp;id;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.age&nbsp;=&nbsp;age&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display_details(<span class="special">self</span>):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Name:%s,&nbsp;ID:%d,&nbsp;age:%d"</span>%(<span class="special">self</span>.name,<span class="special">self</span>.id))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">s&nbsp;=&nbsp;Student(<span class="string">"John"</span>,<span class="number">101</span>,<span class="number">22</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(s.__doc__)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(s.__dict__)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(s.__module__)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>None
        {'name': 'John', 'id': 101, 'age': 22}
        __main__<br /><br /></pre>
        <h1 class="h1">Python Inheritance</h1>
        <p>Inheritance is an important aspect of the object-oriented paradigm. Inheritance provides code reusability to the program because we can use an existing class to create a new class instead of creating it from scratch.</p>
        <p>In inheritance, the child class acquires the properties and can access all the data members and functions defined in the parent class. A child class can also provide its specific implementation to the functions of the parent class. In this section of the tutorial, we will discuss inheritance in detail.</p>
        <p>In python, a derived class can inherit base class by just mentioning the base in the bracket after the derived class name. Consider the following syntax to inherit a base class into the derived class.</p>
        <pre><img src="https://static.javatpoint.com/python/images/python-inheritance.png" alt="Python Inheritance" /></pre>
        <h3 class="h2">Syntax</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;derived-<span class="keyword">class</span>(base&nbsp;<span class="keyword">class</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>A class can inherit multiple classes by mentioning all of them inside the bracket. Consider the following syntax.</p>
        <h3 class="h2">Syntax</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;derive-<span class="keyword">class</span>(&lt;base&nbsp;<span class="keyword">class</span>&nbsp;<span class="number">1</span>&gt;,&nbsp;&lt;base&nbsp;<span class="keyword">class</span>&nbsp;<span class="number">2</span>&gt;,&nbsp;.....&nbsp;&lt;base&nbsp;<span class="keyword">class</span>&nbsp;n&gt;):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>&nbsp;-&nbsp;suite&gt;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h3 class="h2">Example 1</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Animal:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;speak(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Animal&nbsp;Speaking"</span>)&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#child&nbsp;class&nbsp;Dog&nbsp;inherits&nbsp;the&nbsp;base&nbsp;class&nbsp;Animal</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Dog(Animal):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;bark(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"dog&nbsp;barking"</span>)&nbsp;&nbsp;</li>
        <li class="">d&nbsp;=&nbsp;Dog()&nbsp;&nbsp;</li>
        <li class="alt">d.bark()&nbsp;&nbsp;</li>
        <li class="">d.speak()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>dog barking
        Animal Speaking
        </pre>
        </div>
        <hr />
        <h2 class="h2">Python Multi-Level inheritance</h2>
        <p>Multi-Level inheritance is possible in python like other object-oriented languages. Multi-level inheritance is archived when a derived class inherits another derived class. There is no limit on the number of levels up to which, the multi-level inheritance is archived in python.</p>
        <p><img src="https://static.javatpoint.com/python/images/python-inheritance2.png" alt="Python Inheritance" /></p>
        <p>The syntax of multi-level inheritance is given below.</p>
        <h3 class="h2">Syntax</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;class1:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;class2(class1):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>&nbsp;suite&gt;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;class3(class2):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>&nbsp;suite&gt;&nbsp;&nbsp;</li>
        <li class="alt">.&nbsp;&nbsp;</li>
        <li class="">.&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Animal:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;speak(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Animal&nbsp;Speaking"</span>)&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#The&nbsp;child&nbsp;class&nbsp;Dog&nbsp;inherits&nbsp;the&nbsp;base&nbsp;class&nbsp;Animal</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Dog(Animal):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;bark(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"dog&nbsp;barking"</span>)&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#The&nbsp;child&nbsp;class&nbsp;Dogchild&nbsp;inherits&nbsp;another&nbsp;child&nbsp;class&nbsp;Dog</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;DogChild(Dog):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;eat(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Eating&nbsp;bread..."</span>)&nbsp;&nbsp;</li>
        <li class="">d&nbsp;=&nbsp;DogChild()&nbsp;&nbsp;</li>
        <li class="alt">d.bark()&nbsp;&nbsp;</li>
        <li class="">d.speak()&nbsp;&nbsp;</li>
        <li class="alt">d.eat()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>dog barking
        Animal Speaking
        Eating bread...
        </pre>
        </div>
        <hr />
        <h2 class="h2">Python Multiple inheritance</h2>
        <p>Python provides us the flexibility to inherit multiple base classes in the child class.</p>
        <p><img src="https://static.javatpoint.com/python/images/python-inheritance3.png" alt="Python Inheritance" /></p>
        <p>The syntax to perform multiple inheritance is given below.</p>
        <h3 class="h2">Syntax</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Base1:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Base2:&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;</li>
        <li class="">.&nbsp;&nbsp;</li>
        <li class="alt">.&nbsp;&nbsp;</li>
        <li class="">.&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;BaseN:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Derived(Base1,&nbsp;Base2,&nbsp;......&nbsp;BaseN):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="keyword">class</span>-suite&gt;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Calculation1:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Summation(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a+b;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Calculation2:&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Multiplication(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a*b;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Derived(Calculation1,Calculation2):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Divide(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a/b;&nbsp;&nbsp;</li>
        <li class="">d&nbsp;=&nbsp;Derived()&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(d.Summation(<span class="number">10</span>,<span class="number">20</span>))&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(d.Multiplication(<span class="number">10</span>,<span class="number">20</span>))&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(d.Divide(<span class="number">10</span>,<span class="number">20</span>))&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>30
        200
        0.5
        </pre>
        </div>
        <hr />
        <h2 class="h2">The issubclass(sub,sup) method</h2>
        <p>The issubclass(sub, sup) method is used to check the relationships between the specified classes. It returns true if the first class is the subclass of the second class, and false otherwise.</p>
        <p>Consider the following example.</p>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Calculation1:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Summation(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a+b;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Calculation2:&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Multiplication(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a*b;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Derived(Calculation1,Calculation2):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Divide(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a/b;&nbsp;&nbsp;</li>
        <li class="">d&nbsp;=&nbsp;Derived()&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(issubclass(Derived,Calculation2))&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(issubclass(Calculation1,Calculation2))&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>True
        False
        </pre>
        </div>
        <hr />
        <h2 class="h2">The isinstance (obj, class) method</h2>
        <p>The isinstance() method is used to check the relationship between the objects and classes. It returns true if the first parameter, i.e., obj is the instance of the second parameter, i.e., class.</p>
        <p>Consider the following example.</p>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Calculation1:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Summation(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a+b;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Calculation2:&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Multiplication(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a*b;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Derived(Calculation1,Calculation2):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;Divide(<span class="special">self</span>,a,b):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;a/b;&nbsp;&nbsp;</li>
        <li class="">d&nbsp;=&nbsp;Derived()&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(isinstance(d,Derived))&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>True
        </pre>
        </div>
        <hr />
        <h2 class="h2">Method Overriding</h2>
        <p>We can provide some specific implementation of the parent class method in our child class. When the parent class method is defined in the child class with some specific implementation, then the concept is called method overriding. We may need to perform method overriding in the scenario where the different definition of a parent class method is needed in the child class.</p>
        <p>Consider the following example to perform method overriding in python.</p>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Animal:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;speak(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"speaking"</span>)&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Dog(Animal):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;speak(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Barking"</span>)&nbsp;&nbsp;</li>
        <li class="alt">d&nbsp;=&nbsp;Dog()&nbsp;&nbsp;</li>
        <li class="">d.speak()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Barking
        </pre>
        </div>
        <h3 class="h2">Real Life Example of method overriding</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Bank:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;getroi(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;<span class="number">10</span>;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;SBI(Bank):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;getroi(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;<span class="number">7</span>;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;ICICI(Bank):&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;getroi(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;<span class="number">8</span>;&nbsp;&nbsp;</li>
        <li class="alt">b1&nbsp;=&nbsp;Bank()&nbsp;&nbsp;</li>
        <li class="">b2&nbsp;=&nbsp;SBI()&nbsp;&nbsp;</li>
        <li class="alt">b3&nbsp;=&nbsp;ICICI()&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(<span class="string">"Bank&nbsp;Rate&nbsp;of&nbsp;interest:"</span>,b1.getroi());&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(<span class="string">"SBI&nbsp;Rate&nbsp;of&nbsp;interest:"</span>,b2.getroi());&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(<span class="string">"ICICI&nbsp;Rate&nbsp;of&nbsp;interest:"</span>,b3.getroi());&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Bank Rate of interest: 10
        SBI Rate of interest: 7
        ICICI Rate of interest: 8
        </pre>
        </div>
        <hr />
        <h2 class="h2">Data abstraction in python</h2>
        <p>Abstraction is an important aspect of object-oriented programming. In python, we can also perform data hiding by adding the double underscore (___) as a prefix to the attribute which is to be hidden. After this, the attribute will not be visible outside of the class through the object.</p>
        <p>Consider the following example.</p>
        <h3 class="h2">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;Employee:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;__count&nbsp;=&nbsp;<span class="number">0</span>;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employee.__count&nbsp;=&nbsp;Employee.__count+<span class="number">1</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;display(<span class="special">self</span>):&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;number&nbsp;of&nbsp;employees"</span>,Employee.__count)&nbsp;&nbsp;</li>
        <li class="alt">emp&nbsp;=&nbsp;Employee()&nbsp;&nbsp;</li>
        <li class="">emp2&nbsp;=&nbsp;Employee()&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(emp.__count)&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">finally</span>:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;emp.display()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>The number of employees 2
        AttributeError: 'Employee' object has no attribute '__count'</pre>
        <h1 class="h1">Abstraction in Python</h1>
        <p>Abstraction is used to hide the internal functionality of the function from the users. The users only interact with the basic implementation of the function, but inner working is hidden. User is familiar with that&nbsp;<strong>"what function does"</strong>&nbsp;but they don't know&nbsp;<strong>"how it does."</strong></p>
        <p>In simple words, we all use the smartphone and very much familiar with its functions such as camera, voice-recorder, call-dialing, etc., but we don't know how these operations are happening in the background. Let's take another example - When we use the TV remote to increase the volume. We don't know how pressing a key increases the volume of the TV. We only know to press the "+" button to increase the volume.</p>
        <p>That is exactly the abstraction that works in the object-oriented-concept</p>
        <h2 class="h2">Why Abstraction is Important?</h2>
        <p>In Python, an abstraction is used to hide the irrelevant data/class in order to reduce the complexity. It also enhances the application efficiency. Next, we will learn how we can achieve abstraction using the python program.</p>
        <h2 class="h2">Abstraction classes in Python</h2>
        <p>In&nbsp;<a href="https://www.javatpoint.com/python-tutorial">Python</a>, abstraction can be achieved by using abstract classes and interfaces.</p>
        <p>A class that consists of one or more abstract method is called the abstract class. Abstract methods do not contain their implementation. Abstract class can be inherited by the subclass and abstract method gets its definition in the subclass. Abstraction classes are meant to be the blueprint of the other class. An abstract class can be useful when we are designing large functions. An abstract class is also helpful to provide the standard interface for different implementations of components. Python provides the&nbsp;<strong>abc</strong>&nbsp;module to use the abstraction in the Python program. Let's see the following syntax.</p>
        <p><strong>Syntax</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-j" start="1">
        <li class="alt">from&nbsp;abc&nbsp;<span class="keyword">import</span>&nbsp;ABC&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;ClassName(ABC):&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p>We import the ABC class from the&nbsp;<strong>abc</strong>&nbsp;module.</p>
        <h2 class="h2">Abstract Base Classes</h2>
        <p>An abstract base class is the common application program of the interface for a set of subclasses. It can be used by the third-party, which will provide the implementations such as with plugins. It is also beneficial when we work with the large code-base hard to remember all the classes.</p>
        <h2 class="h2">Working of the Abstract Classes</h2>
        <p>Unlike the other high-level language, Python doesn't provide the abstract class itself. We need to import the abc module, which provides the base for defining Abstract Base classes (ABC). The ABC works by decorating methods of the base class as abstract. It registers concrete classes as the implementation of the abstract base. We use the&nbsp;<strong><em>@abstractmethod</em></strong>&nbsp;decorator to define an abstract method or if we don't provide the definition to the method, it automatically becomes the abstract method. Let's understand the following example.</p>
        <p><strong>Example -</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-j" start="1">
        <li class="alt">#&nbsp;Python&nbsp;program&nbsp;demonstrate&nbsp;&nbsp;</li>
        <li class="">#&nbsp;<span class="keyword">abstract</span>&nbsp;base&nbsp;<span class="keyword">class</span>&nbsp;work&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">from&nbsp;abc&nbsp;<span class="keyword">import</span>&nbsp;ABC,&nbsp;abstractmethod&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Car(ABC):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;mileage(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Tesla(Car):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;mileage(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"The&nbsp;mileage&nbsp;is&nbsp;30kmph"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;Suzuki(Car):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;mileage(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"The&nbsp;mileage&nbsp;is&nbsp;25kmph&nbsp;"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Duster(Car):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;mileage(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"The&nbsp;mileage&nbsp;is&nbsp;24kmph&nbsp;"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Renault(Car):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;mileage(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"The&nbsp;mileage&nbsp;is&nbsp;27kmph&nbsp;"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">#&nbsp;Driver&nbsp;code&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">t=&nbsp;Tesla&nbsp;()&nbsp;&nbsp;&nbsp;</li>
        <li class="">t.mileage()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">r&nbsp;=&nbsp;Renault()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">r.mileage()&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">s&nbsp;=&nbsp;Suzuki()&nbsp;&nbsp;&nbsp;</li>
        <li class="">s.mileage()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">d&nbsp;=&nbsp;Duster()&nbsp;&nbsp;&nbsp;</li>
        <li class="">d.mileage()&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>The mileage is 30kmph
        The mileage is 27kmph 
        The mileage is 25kmph 
        The mileage is 24kmph
        </pre>
        </div>
        <p><strong>Explanation -</strong></p>
        <p>In the above code, we have imported the&nbsp;<strong>abc module</strong>&nbsp;to create the abstract base class. We created the Car class that inherited the ABC class and defined an abstract method named mileage(). We have then inherited the base class from the three different subclasses and implemented the abstract method differently. We created the objects to call the abstract method.</p>
        <p>Let's understand another example.</p>
        <p>Let's understand another example.</p>
        <p><strong>Example -</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <ol class="dp-j" start="1">
        <li class="alt">#&nbsp;Python&nbsp;program&nbsp;to&nbsp;define&nbsp;&nbsp;&nbsp;</li>
        <li class="">#&nbsp;<span class="keyword">abstract</span>&nbsp;<span class="keyword">class</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">from&nbsp;abc&nbsp;<span class="keyword">import</span>&nbsp;ABC&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Polygon(ABC):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;#&nbsp;<span class="keyword">abstract</span>&nbsp;method&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;def&nbsp;sides(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Triangle(Polygon):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;def&nbsp;sides(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Triangle&nbsp;has&nbsp;3&nbsp;sides"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Pentagon(Polygon):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;def&nbsp;sides(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Pentagon&nbsp;has&nbsp;5&nbsp;sides"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">class</span>&nbsp;Hexagon(Polygon):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;def&nbsp;sides(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"Hexagon&nbsp;has&nbsp;6&nbsp;sides"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">class</span>&nbsp;square(Polygon):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;def&nbsp;sides(self):&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span class="string">"I&nbsp;have&nbsp;4&nbsp;sides"</span>)&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">#&nbsp;Driver&nbsp;code&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">t&nbsp;=&nbsp;Triangle()&nbsp;&nbsp;&nbsp;</li>
        <li class="">t.sides()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">s&nbsp;=&nbsp;square()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">s.sides()&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;</li>
        <li class="alt">p&nbsp;=&nbsp;Pentagon()&nbsp;&nbsp;&nbsp;</li>
        <li class="">p.sides()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;</li>
        <li class="">k&nbsp;=&nbsp;Hexagon()&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">K.sides()&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Triangle has 3 sides
        Square has 4 sides
        Pentagon has 5 sides
        Hexagon has 6 sides
        </pre>
        </div>
        <p><strong>Explanation -</strong></p>
        <p>In the above code, we have defined the abstract base class named Polygon and we also defined the abstract method. This base class inherited by the various subclasses. We implemented the abstract method in each subclass. We created the object of the subclasses and invoke the&nbsp;<strong>sides()</strong>&nbsp;method. The hidden implementations for the&nbsp;<strong>sides()</strong>&nbsp;method inside the each subclass comes into play. The abstract method&nbsp;<strong>sides()</strong>&nbsp;method, defined in the abstract class, is never invoked.</p>
        <h2 class="h2">Points to Remember</h2>
        <p>Below are the points which we should remember about the abstract base class in Python.</p>
        <ul class="points">
        <li>An Abstract class can contain the both method normal and abstract method.</li>
        <li>An Abstract cannot be instantiated; we cannot create objects for the abstract class.</li>
        </ul>
        <p>Abstraction is essential to hide the core functionality from the users. We have covered the all the basic concepts of Abstraction in Python.</p>
        <p>&nbsp;</p>
        </div>
        </div>
        <hr />`
    },
    {
        topic: 'Exception Handling',
        content: `<div id="page">
        <div id="container">
        <div class="onlycontent">
        <div class="onlycontentinner">
        <div id="city">
        <table>
        <tbody>
        <tr>
        <td>
        <h1 class="h1">Python Exception</h1>
        <p>An exception can be defined as an unusual condition in a program resulting in the interruption in the flow of the program.</p>
        <p>Whenever an exception occurs, the program stops the execution, and thus the further code is not executed. Therefore, an exception is the run-time errors that are unable to handle to Python script. An exception is a Python object that represents an error</p>
        <p>Python provides a way to handle the exception so that the code can be executed without any interruption. If we do not handle the exception, the interpreter doesn't execute all the code that exists after the exception.</p>
        <p>Python has many&nbsp;<strong>built-in exceptions</strong>&nbsp;that enable our program to run without interruption and give the output. These exceptions are given below:</p>
        <h2 class="h2">Common Exceptions</h2>
        <p>Python provides the number of built-in exceptions, but here we are describing the common standard exceptions. A list of common exceptions that can be thrown from a standard Python program is given below.</p>
        <ol class="points">
        <li><strong>ZeroDivisionError:</strong>&nbsp;Occurs when a number is divided by zero.</li>
        <li><strong>NameError:</strong>&nbsp;It occurs when a name is not found. It may be local or global.</li>
        <li><strong>IndentationError:</strong>&nbsp;If incorrect indentation is given.</li>
        <li><strong>IOError:</strong>&nbsp;It occurs when Input Output operation fails.</li>
        <li><strong>EOFError:</strong>&nbsp;It occurs when the end of the file is reached, and yet operations are being performed.</li>
        </ol>
        <hr />
        <h2 class="h2">The problem without handling exceptions</h2>
        <p>As we have already discussed, the exception is an abnormal condition that halts the execution of the program.</p>
        <p>Suppose we have two variables&nbsp;<strong>a</strong>&nbsp;and&nbsp;<strong>b</strong>, which take the input from the user and perform the division of these values. What if the user entered the zero as the denominator? It will interrupt the program execution and through a&nbsp;<strong>ZeroDivision</strong>&nbsp;exception. Let's see the following example.</p>
        <h3 class="h3">Example</h3>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt">a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">c&nbsp;=&nbsp;a/b&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">print</span>(<span class="string">"a/b&nbsp;=&nbsp;%d"</span>&nbsp;%c)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#other&nbsp;code:&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">print</span>(<span class="string">"Hi&nbsp;I&nbsp;am&nbsp;other&nbsp;part&nbsp;of&nbsp;the&nbsp;program"</span>)&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a:10
        Enter b:0
        Traceback (most recent call last):
          File "exception-test.py", line 3, in &lt;module&gt;
            c = a/b;
        ZeroDivisionError: division by zero
        </pre>
        </div>
        <p>The above program is syntactically correct, but it through the error because of unusual input. That kind of programming may not be suitable or recommended for the projects because these projects are required uninterrupted execution. That's why an exception-handling plays an essential role in handling these unexpected exceptions. We can handle these exceptions in the following way.</p>
        <h2 class="h2">Exception handling in python</h2>
        <h3 class="h3">The try-expect statement</h3>
        <p>If the Python program contains suspicious code that may throw the exception, we must place that code in the&nbsp;<strong>try</strong>&nbsp;block. The&nbsp;<strong>try</strong>&nbsp;block must be followed with the&nbsp;<strong>except</strong>&nbsp;statement, which contains a block of code that will be executed if there is some exception in the try block.</p>
        <img src="https://static.javatpoint.com/python/images/python-exception-handling.png" alt="Python Exception handling" />
        <p><strong>Syntax</strong></p>
        <p>Consider the following example.</p>
        <p><strong>Example 1</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;c&nbsp;=&nbsp;a/b&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Can't&nbsp;divide&nbsp;with&nbsp;zero"</span>)&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a:10
        Enter b:0
        Can't divide with zero
        </pre>
        </div>
        <p>We can also use the else statement with the try-except statement in which, we can place the code which will be executed in the scenario if no exception occurs in the try block.</p>
        <p>The syntax to use the else statement with the try-except statement is given below.</p>
        <p>Consider the following program.</p>
        <p><strong>Example 2</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;c&nbsp;=&nbsp;a/b&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"a/b&nbsp;=&nbsp;%d"</span>%c)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;Using&nbsp;Exception&nbsp;with&nbsp;except&nbsp;statement.&nbsp;If&nbsp;we&nbsp;print(Exception)&nbsp;it&nbsp;will&nbsp;return&nbsp;exception&nbsp;class</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>&nbsp;Exception:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"can't&nbsp;divide&nbsp;by&nbsp;zero"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(Exception)&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Hi&nbsp;I&nbsp;am&nbsp;else&nbsp;block"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a:10
        Enter b:0
        can't divide by zero
        &lt;class 'Exception'&gt;
        </pre>
        </div>
        <h2 class="h3">The except statement with no exception</h2>
        <p>Python provides the flexibility not to specify the name of exception with the exception statement.</p>
        <p>Consider the following example.</p>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;c&nbsp;=&nbsp;a/b;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"a/b&nbsp;=&nbsp;%d"</span>%c)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"can't&nbsp;divide&nbsp;by&nbsp;zero"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Hi&nbsp;I&nbsp;am&nbsp;else&nbsp;block"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <h3 class="h3">The except statement using with exception variable</h3>
        <p>We can use the exception variable with the&nbsp;<strong>except</strong>&nbsp;statement. It is used by using the&nbsp;<strong>as</strong>&nbsp;keyword. this object will return the cause of the exception. Consider the following example:</p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;c&nbsp;=&nbsp;a/b&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"a/b&nbsp;=&nbsp;%d"</span>%c)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;Using&nbsp;exception&nbsp;object&nbsp;with&nbsp;the&nbsp;except&nbsp;statement</span>&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>&nbsp;Exception&nbsp;as&nbsp;e:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"can't&nbsp;divide&nbsp;by&nbsp;zero"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(e)&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Hi&nbsp;I&nbsp;am&nbsp;else&nbsp;block"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a:10
        Enter b:0
        can't divide by zero
        division by zero
        </pre>
        </div>
        <h2 class="h3">Points to remember</h2>
        <ol class="points">
        <li>Python facilitates us to not specify the exception with the except statement.</li>
        <li>We can declare multiple exceptions in the except statement since the try block may contain the statements which throw the different type of exceptions.</li>
        <li>We can also specify an else block along with the try-except statement, which will be executed if no exception is raised in the try block.</li>
        <li>The statements that don't throw the exception should be placed inside the else block.</li>
        </ol>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#this&nbsp;will&nbsp;throw&nbsp;an&nbsp;exception&nbsp;if&nbsp;the&nbsp;file&nbsp;doesn't&nbsp;exist.&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;fileptr&nbsp;=&nbsp;open(<span class="string">"file.txt"</span>,<span class="string">"r"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>&nbsp;IOError:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"File&nbsp;not&nbsp;found"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;file&nbsp;opened&nbsp;successfully"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;fileptr.close()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>File not found
        </pre>
        </div>
        <h2 class="h2">Declaring Multiple Exceptions</h2>
        <p>The Python allows us to declare the multiple exceptions with the except clause. Declaring multiple exceptions is useful in the cases where a try block throws multiple exceptions. The syntax is given below.</p>
        <p><strong>Syntax</strong></p>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#block&nbsp;of&nbsp;code&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>&nbsp;(&lt;Exception&nbsp;<span class="number">1</span>&gt;,&lt;Exception&nbsp;<span class="number">2</span>&gt;,&lt;Exception&nbsp;<span class="number">3</span>&gt;,...&lt;Exception&nbsp;n&gt;)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#block&nbsp;of&nbsp;code&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#block&nbsp;of&nbsp;code&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        </ol>
        <p>Consider the following example.</p>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a=<span class="number">10</span>/<span class="number">0</span>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>(ArithmeticError,&nbsp;IOError):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Arithmetic&nbsp;Exception"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Successfully&nbsp;Done"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Arithmetic Exception
        </pre>
        </div>
        <h2 class="h2">The try...finally block</h2>
        <p>Python provides the optional&nbsp;<strong>finally</strong>&nbsp;statement, which is used with the&nbsp;<strong>try</strong>&nbsp;statement. It is executed no matter what exception occurs and used to release the external resource. The finally block provides a guarantee of the execution.</p>
        <p>We can use the finally block with the try block in which we can pace the necessary code, which must be executed before the try statement throws an exception.</p>
        <p>The syntax to use the finally block is given below.</p>
        <p><strong>Syntax</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;block&nbsp;of&nbsp;code&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;this&nbsp;may&nbsp;throw&nbsp;an&nbsp;exception&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">finally</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;block&nbsp;of&nbsp;code&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">#&nbsp;this&nbsp;will&nbsp;always&nbsp;be&nbsp;executed&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <br /><img src="https://static.javatpoint.com/python/images/python-exception-handling3.png" alt="Python Exception handling" />
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;fileptr&nbsp;=&nbsp;open(<span class="string">"file2.txt"</span>,<span class="string">"r"</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileptr.write(<span class="string">"Hi&nbsp;I&nbsp;am&nbsp;good"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">finally</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fileptr.close()&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"file&nbsp;closed"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Error"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>file closed
        Error
        </pre>
        </div>
        <h2 class="h2">Raising exceptions</h2>
        <p>An exception can be raised forcefully by using the&nbsp;<strong>raise</strong>&nbsp;clause in Python. It is useful in in that scenario where we need to raise an exception to stop the execution of the program.</p>
        <p>For example, there is a program that requires 2GB memory for execution, and if the program tries to occupy 2GB of memory, then we can raise an exception to stop the execution of the program.</p>
        <p>The syntax to use the raise statement is given below.</p>
        <p><strong>Syntax</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">raise</span>&nbsp;Exception_class,&lt;value&gt;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Points to remember</strong></p>
        <ol class="points">
        <li>To raise an exception, the raise statement is used. The exception class name follows it.</li>
        <li>An exception can be provided with a value that can be given in the parenthesis.</li>
        <li>To access the value "<strong>as</strong>" keyword is used. "<strong>e</strong>" is used as a reference variable which stores the value of the exception.</li>
        <li>We can pass the value to an exception to specify the exception type.</li>
        </ol>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;age&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;the&nbsp;age:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>(age&lt;<span class="number">18</span>):&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">raise</span>&nbsp;ValueError&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"the&nbsp;age&nbsp;is&nbsp;valid"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>&nbsp;ValueError:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;age&nbsp;is&nbsp;not&nbsp;valid"</span>)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter the age:17
        The age is not valid
        </pre>
        </div>
        <p><strong>Example 2 Raise the exception with message</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a&nbsp;positive&nbsp;integer:&nbsp;"</span>))&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>(num&nbsp;&lt;=&nbsp;<span class="number">0</span>):&nbsp;&nbsp;</li>
        <li class=""><span class="comment">#&nbsp;we&nbsp;can&nbsp;pass&nbsp;the&nbsp;message&nbsp;in&nbsp;the&nbsp;raise&nbsp;statement</span>&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">raise</span>&nbsp;ValueError(<span class="string">"That&nbsp;is&nbsp;&nbsp;a&nbsp;negative&nbsp;number!"</span>)&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>&nbsp;ValueError&nbsp;as&nbsp;e:&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(e)&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a positive integer: -5
        That is a negative number!
        </pre>
        </div>
        <p><strong>Example 3</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;a:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;b&nbsp;=&nbsp;int(input(<span class="string">"Enter&nbsp;b:"</span>))&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">if</span>&nbsp;b&nbsp;<span class="keyword">is</span>&nbsp;<span class="number">0</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">raise</span>&nbsp;ArithmeticError&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">else</span>:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"a/b&nbsp;=&nbsp;"</span>,a/b)&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class=""><span class="keyword">except</span>&nbsp;ArithmeticError:&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"The&nbsp;value&nbsp;of&nbsp;b&nbsp;can't&nbsp;be&nbsp;0"</span>)&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock3">
        <pre>Enter a:10
        Enter b:0
        The value of b can't be 0
        </pre>
        </div>
        <h2 class="h2">Custom Exception</h2>
        <p>The Python allows us to create our exceptions that can be raised from the program and caught using the except clause. However, we suggest you read this section after visiting the Python object and classes.</p>
        <p>Consider the following example.</p>
        <p><strong>Example</strong></p>
        <div class="codeblock">
        <div class="dp-highlighter">
        <div class="bar">&nbsp;</div>
        <ol class="dp-py" start="1">
        <li class="alt"><span class="keyword">class</span>&nbsp;ErrorInCode(Exception):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__init__(<span class="special">self</span>,&nbsp;data):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="special">self</span>.data&nbsp;=&nbsp;data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">def</span>&nbsp;__str__(<span class="special">self</span>):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;repr(<span class="special">self</span>.data)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">try</span>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">raise</span>&nbsp;ErrorInCode(<span class="number">2000</span>)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="alt"><span class="keyword">except</span>&nbsp;ErrorInCode&nbsp;as&nbsp;ae:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li class="">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">print</span>(<span class="string">"Received&nbsp;error:"</span>,&nbsp;ae.data)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ol>
        </div>
        </div>
        <p><strong>Output:</strong></p>
        <div class="codeblock">
        <pre>Received error: 2000
        </pre>
        </div>
        <hr /></td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>`
    }


]