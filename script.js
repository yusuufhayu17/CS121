

const questions = [
  {
    "question": "What is a computer?",
    "options": [
      "A device that only processes text",
      "A programmable machine that accepts, stores, and manipulates data",
      "A tool for internet browsing",
      "A hardware component for gaming"
    ],
    "answer": 1
  },
  {
    "question": "Von Neumann Architecture is based on:",
    "options": [
      "Parallel processing",
      "Quantum computing",
      "Stored program concept",
      "Analog data handling"
    ],
    "answer": 2
  },
  {
    "question": "The fetch-execute cycle involves:",
    "options": [
      "Fetching data from the cloud",
      "Reading instructions from memory, decoding, and executing them",
      "Deleting old programs",
      "Encrypting data"
    ],
    "answer": 1
  },
  {
    "question": "Problem solving in computer science primarily involves:",
    "options": [
      "Memorizing code syntax",
      "Analyzing problems and producing algorithms",
      "Debugging hardware",
      "Designing user interfaces"
    ],
    "answer": 1
  },
  {
    "question": "A program is defined as:",
    "options": [
      "A collection of files",
      "A sequence of instructions executable by a computer",
      "A type of database",
      "An operating system module"
    ],
    "answer": 1
  },
  {
    "question": "Which step comes FIRST in problem-solving?",
    "options": [
      "Coding",
      "Understanding the problem",
      "Testing",
      "Documentation"
    ],
    "answer": 1
  },
  {
    "question": "During \"Problem analysis & specification,\" you identify:",
    "options": [
      "Programming language syntax",
      "Inputs, outputs, and constraints",
      "Employee salaries",
      "Hardware specifications"
    ],
    "answer": 1
  },
  {
    "question": "Algorithm development occurs in which problem-solving phase?",
    "options": [
      "Program design",
      "Testing",
      "Maintenance",
      "Coding"
    ],
    "answer": 0
  },
  {
    "question": "Coding involves:",
    "options": [
      "Drawing flowcharts",
      "Translating algorithms into a programming language",
      "Writing user manuals",
      "Testing hardware"
    ],
    "answer": 1
  },
  {
    "question": "The purpose of testing is to:",
    "options": [
      "Reveal errors using different inputs",
      "Finalize documentation",
      "Optimize hardware",
      "Design algorithms"
    ],
    "answer": 0
  },
  {
    "question": "Debugging refers to:",
    "options": [
      "Installing software",
      "Finding and fixing errors in programs",
      "Writing pseudocode",
      "Creating databases"
    ],
    "answer": 1
  },
  {
    "question": "Program maintenance may involve:",
    "options": [
      "Rewriting the entire program",
      "Fixing errors missed during development",
      "Deleting user data",
      "Upgrading hardware only"
    ],
    "answer": 1
  },
  {
    "question": "An algorithm must be:",
    "options": [
      "Ambiguous",
      "Infinite",
      "Precise and unambiguous",
      "Language-specific"
    ],
    "answer": 2
  },
  {
    "question": "Which is NOT an attribute of an algorithm?",
    "options": [
      "Precision",
      "Unambiguity",
      "Infinite execution",
      "Finiteness"
    ],
    "answer": 2
  },
  {
    "question": "Pseudocode is used to:",
    "options": [
      "Replace programming languages",
      "Describe algorithms informally without strict syntax",
      "Design hardware circuits",
      "Compile programs"
    ],
    "answer": 1
  },
  {
    "question": "Advantages of pseudocode over flowcharts include:",
    "options": [
      "Better visual appeal",
      "Easier to accommodate changes",
      "Requires drawing tools",
      "Longer development time"
    ],
    "answer": 1
  },
  {
    "question": "A flowchart symbol for decision has:",
    "options": [
      "One entry and one exit point",
      "One entry and multiple exit points",
      "Multiple entry and exit points",
      "No entry or exit points"
    ],
    "answer": 1
  },
  {
    "question": "The \"Start/Stop\" symbol in flowcharts:",
    "options": [
      "Denotes processing",
      "Indicates input/output",
      "Marks the beginning and end of a program",
      "Connects flow lines"
    ],
    "answer": 2
  },
  {
    "question": "Which symbol represents input/output in flowcharts?",
    "options": [
      "Rectangle",
      "Diamond",
      "Parallelogram",
      "Oval"
    ],
    "answer": 2
  },
  {
    "question": "A disadvantage of flowcharts is:",
    "options": [
      "Easy to redraw",
      "Time-consuming for complex problems",
      "Supports random access",
      "Requires no symbols"
    ],
    "answer": 1
  },
  {
    "question": "Structured programming forbids the use of:",
    "options": [
      "Loops",
      "`goto` statements",
      "Functions",
      "Variables"
    ],
    "answer": 1
  },
  {
    "question": "Procedural programming focuses on:",
    "options": [
      "Stateless functions",
      "Statements that change program state",
      "Rule-based inference",
      "Object interactions"
    ],
    "answer": 1
  },
  {
    "question": "Functional programming avoids:",
    "options": [
      "Recursion",
      "Variables and assignment statements",
      "Function calls",
      "Data structures"
    ],
    "answer": 1
  },
  {
    "question": "Logic programming uses:",
    "options": [
      "Axioms and inference rules",
      "Object inheritance",
      "Imperative loops",
      "Global variables"
    ],
    "answer": 0
  },
  {
    "question": "Object-Oriented Programming (OOP) treats programs as:",
    "options": [
      "A set of interacting objects",
      "Sequential function evaluations",
      "Database tables",
      "Linear arrays"
    ],
    "answer": 0
  },
  {
    "question": "A \"bit\" is:",
    "options": [
      "A group of 8 bytes",
      "A binary digit (0 or 1)",
      "A floating-point number",
      "A programming language"
    ],
    "answer": 1
  },
  {
    "question": "1 KB equals:",
    "options": [
      "1000 bytes",
      "1024 bytes",
      "2048 bytes",
      "512 bytes"
    ],
    "answer": 1
  },
  {
    "question": "A \"word\" in computing refers to:",
    "options": [
      "A string of characters",
      "A sequence of bits of a specific size",
      "A database record",
      "A file name"
    ],
    "answer": 1
  },
  {
    "question": "A database is:",
    "options": [
      "A single file",
      "An organized collection of related records",
      "A programming paradigm",
      "A type of hardware"
    ],
    "answer": 1
  },
  {
    "question": "DBMS stands for:",
    "options": [
      "Data Binary Management System",
      "Database Manipulation Service",
      "Database Management System",
      "Digital Bit Mapping Software"
    ],
    "answer": 2
  },
  {
    "question": "Data structures are used to:",
    "options": [
      "Organize data for efficient use",
      "Replace algorithms",
      "Design user interfaces",
      "Install operating systems"
    ],
    "answer": 0
  },
  {
    "question": "An array allows:",
    "options": [
      "Random access via indices",
      "Only sequential access",
      "Dynamic resizing without cost",
      "Unlimited heterogeneous elements"
    ],
    "answer": 0
  },
  {
    "question": "Linked lists are efficient for:",
    "options": [
      "Random access",
      "Insertion/deletion without relocation",
      "Fixed-size storage",
      "CPU cache optimization"
    ],
    "answer": 1
  },
  {
    "question": "A node in a singly linked list contains:",
    "options": [
      "Data and two pointers",
      "Data and a pointer to the next node",
      "Only data",
      "Only pointers"
    ],
    "answer": 1
  },
  {
    "question": "Doubly linked lists:",
    "options": [
      "Use a single pointer",
      "Contain pointers to next and previous nodes",
      "Cannot be traversed backward",
      "Require no memory"
    ],
    "answer": 1
  },
  {
    "question": "Circular linked lists:",
    "options": [
      "Always have a null-terminated end",
      "Point the last node to the first",
      "Cannot be traversed",
      "Exclude the head node"
    ],
    "answer": 1
  },
  {
    "question": "Sentinel nodes in linked lists:",
    "options": [
      "Store actual data",
      "Simplify algorithms by ensuring non-empty lists",
      "Increase ambiguity",
      "Replace head nodes"
    ],
    "answer": 1
  },
  {
    "question": "Stacks follow:",
    "options": [
      "FIFO (First-In-First-Out)",
      "LIFO (Last-In-First-Out)",
      "Random access",
      "Priority-based access"
    ],
    "answer": 1
  },
  {
    "question": "The \"push\" operation in a stack:",
    "options": [
      "Removes the top element",
      "Adds an element to the top",
      "Clears the stack",
      "Sorts elements"
    ],
    "answer": 1
  },
  {
    "question": "Queues follow:",
    "options": [
      "LIFO",
      "FIFO",
      "Random access",
      "Hierarchical order"
    ],
    "answer": 1
  },
  {
    "question": "In a queue, \"enqueue\" means:",
    "options": [
      "Remove from the front",
      "Add to the rear",
      "Peek at the front",
      "Clear the queue"
    ],
    "answer": 1
  },
  {
    "question": "Trees are hierarchical structures where nodes:",
    "options": [
      "Have no parent-child relationships",
      "Are linear sequences",
      "Have one root and parent/child relationships",
      "Lack branches"
    ],
    "answer": 2
  },
  {
    "question": "In a tree, leaf nodes:",
    "options": [
      "Have no children",
      "Are always the root",
      "Must have siblings",
      "Store no data"
    ],
    "answer": 0
  },
  {
    "question": "Binary trees restrict nodes to:",
    "options": [
      "Unlimited children",
      "Exactly two children",
      "At most two children",
      "No children"
    ],
    "answer": 2
  },
  {
    "question": "A perfect binary tree:",
    "options": [
      "Has all leaves at the same depth",
      "Is always incomplete",
      "Allows varying leaf depths",
      "Has no root"
    ],
    "answer": 0
  },
  {
    "question": "Tree traversal methods include:",
    "options": [
      "Only breadth-first",
      "Depth-first and breadth-first",
      "Random access",
      "Database indexing"
    ],
    "answer": 1
  },
  {
    "question": "In-order traversal processes nodes in the order:",
    "options": [
      "Root, left subtree, right subtree",
      "Left subtree, root, right subtree",
      "Right subtree, root, left subtree",
      "Root, right subtree, left subtree"
    ],
    "answer": 1
  },
  {
    "question": "Breadth-first traversal:",
    "options": [
      "Visits nodes level by level",
      "Processes leaves first",
      "Uses recursion exclusively",
      "Ignores the root"
    ],
    "answer": 0
  },
  {
    "question": "QBASIC emphasizes:",
    "options": [
      "Advanced graphics only",
      "Basic programming principles",
      "Database management",
      "Hardware design"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC constants are declared using:",
    "options": [
      "`DIM`",
      "`CONST`",
      "`LET`",
      "`INPUT`"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `DIM` is used for:",
    "options": [
      "Explicit variable declaration",
      "Commenting code",
      "Loop control",
      "Input operations"
    ],
    "answer": 0
  },
  {
    "question": "The `$` suffix in a QBASIC variable indicates:",
    "options": [
      "Integer type",
      "String type",
      "Single-precision",
      "Double-precision"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC variable names:",
    "options": [
      "Can include spaces",
      "Must start with a digit",
      "Are case-sensitive",
      "Can be up to 40 characters long"
    ],
    "answer": 3
  },
  {
    "question": "The `INPUT` statement in QBASIC:",
    "options": [
      "Prints output",
      "Reads data from the keyboard",
      "Declares variables",
      "Ends the program"
    ],
    "answer": 1
  },
  {
    "question": "The purpose of `PRINT` in QBASIC is:",
    "options": [
      "To read user input",
      "To display output",
      "To create files",
      "To debug code"
    ],
    "answer": 1
  },
  {
    "question": "A QBASIC `DO...LOOP` without conditions:",
    "options": [
      "Runs once and stops",
      "Executes endlessly",
      "Skips the loop body",
      "Requires a counter"
    ],
    "answer": 1
  },
  {
    "question": "To exit an infinite loop in QBASIC, use:",
    "options": [
      "`CONTINUE`",
      "`CONTROL-BREAK`",
      "`EXIT`",
      "`END`"
    ],
    "answer": 1
  },
  {
    "question": "The `DO WHILE` loop continues if:",
    "options": [
      "The condition is false",
      "The condition is true",
      "The loop body is empty",
      "Variables are uninitialized"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `IF-THEN-ELSE` is used for:",
    "options": [
      "Looping",
      "Two-way decisions",
      "Arithmetic operations",
      "File handling"
    ],
    "answer": 1
  },
  {
    "question": "The `ELSE` branch in an `IF` statement executes when:",
    "options": [
      "The condition is true",
      "The condition is false",
      "The program starts",
      "Variables match"
    ],
    "answer": 1
  },
  {
    "question": "Which is a QBASIC numeric function?",
    "options": [
      "`LEN`",
      "`ABS`",
      "`MID$`",
      "`PRINT`"
    ],
    "answer": 1
  },
  {
    "question": "The `SOUND` statement in QBASIC is categorized under:",
    "options": [
      "Numeric functions",
      "Sound functions",
      "File handling",
      "String functions"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `REM` is used for:",
    "options": [
      "Variable declaration",
      "Comments",
      "Loop control",
      "Input operations"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `CLS` clears:",
    "options": [
      "Variables",
      "The screen",
      "Files",
      "Memory"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC programs are executed by pressing:",
    "options": [
      "`F1`",
      "`F5`",
      "`F10`",
      "`ESC`"
    ],
    "answer": 1
  },
  {
    "question": "A byte consists of:",
    "options": [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    "answer": 1
  },
  {
    "question": "The memory capacity 1.5GB equals:",
    "options": [
      "1.5 × 10^9 bytes",
      "1.5 × 1024³ bytes",
      "1500 MB",
      "1024 MB"
    ],
    "answer": 1
  },
  {
    "question": "A 64-bit machine:",
    "options": [
      "Processes 32-bit instructions",
      "Fetches 64 bits of data/instructions at once",
      "Cannot run 32-bit OS",
      "Uses only 32-bit words"
    ],
    "answer": 1
  },
  {
    "question": "A file is:",
    "options": [
      "A collection of databases",
      "A sequence of bits stored on disk",
      "A programming paradigm",
      "A type of data structure"
    ],
    "answer": 1
  },
  {
    "question": "Abstract Data Types (ADTs) specify:",
    "options": [
      "Hardware details",
      "Operations and computational complexity",
      "User interface design",
      "Network protocols"
    ],
    "answer": 1
  },
  {
    "question": "Arrays store elements:",
    "options": [
      "Non-contiguously",
      "Contiguously in memory",
      "Without indices",
      "Only as strings"
    ],
    "answer": 1
  },
  {
    "question": "Zero-based indexing means:",
    "options": [
      "The first index is 0",
      "The first index is 1",
      "Indices start at n",
      "No indices are used"
    ],
    "answer": 0
  },
  {
    "question": "Linked lists vs. arrays:",
    "options": [
      "Arrays allow faster insertion/deletion",
      "Linked lists allow faster random access",
      "Linked lists use less memory",
      "Linked lists allow efficient insertion/deletion"
    ],
    "answer": 3
  },
  {
    "question": "A stack's \"peek\" operation:",
    "options": [
      "Removes the top element",
      "Adds an element",
      "Returns the top element without removal",
      "Clears the stack"
    ],
    "answer": 2
  },
  {
    "question": "Queue operations include:",
    "options": [
      "Push and pop",
      "Enqueue and dequeue",
      "Insert and delete",
      "Add and remove"
    ],
    "answer": 1
  },
  {
    "question": "In trees, siblings share:",
    "options": [
      "The same parent",
      "The same children",
      "No common ancestor",
      "Different roots"
    ],
    "answer": 0
  },
  {
    "question": "Pre-order traversal processes:",
    "options": [
      "Left subtree, root, right subtree",
      "Root, left subtree, right subtree",
      "Root, right subtree, left subtree",
      "Right subtree, left subtree, root"
    ],
    "answer": 1
  },
  {
    "question": "Post-order traversal processes:",
    "options": [
      "Root, left subtree, right subtree",
      "Left subtree, root, right subtree",
      "Left subtree, right subtree, root",
      "Right subtree, root, left subtree"
    ],
    "answer": 2
  },
  {
    "question": "Breadth-first traversal is also called:",
    "options": [
      "Depth-first search",
      "Level-order traversal",
      "In-order traversal",
      "Pre-order traversal"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `LET` is used to:",
    "options": [
      "Input data",
      "Assign values to variables",
      "Print output",
      "Declare constants"
    ],
    "answer": 1
  },
  {
    "question": "The term \"algorithm\" applies to:",
    "options": [
      "Only computer science",
      "Any problem-solving method",
      "Hardware design",
      "Database systems"
    ],
    "answer": 1
  },
  {
    "question": "Efficiency in algorithms refers to:",
    "options": [
      "Code length",
      "Resource consumption (time/memory)",
      "Number of variables",
      "Output size"
    ],
    "answer": 1
  },
  {
    "question": "Flowcharts help programmers:",
    "options": [
      "Write code faster",
      "Understand algorithms visually",
      "Ignore testing",
      "Delete documentation"
    ],
    "answer": 1
  },
  {
    "question": "Decision symbols in flowcharts are:",
    "options": [
      "Rectangles",
      "Diamonds",
      "Ovals",
      "Parallelograms"
    ],
    "answer": 1
  },
  {
    "question": "In problem-solving, \"maintenance\" involves:",
    "options": [
      "Initial coding",
      "Modifying programs after deployment",
      "Only debugging",
      "Algorithm design"
    ],
    "answer": 1
  },
  {
    "question": "Pseudocode uses:",
    "options": [
      "Strict programming syntax",
      "Informal, language-agnostic instructions",
      "Only binary code",
      "Hardware diagrams"
    ],
    "answer": 1
  },
  {
    "question": "Control structures in pseudocode include:",
    "options": [
      "Sequence, decision, repetition",
      "Only loops",
      "Database queries",
      "File operations"
    ],
    "answer": 0
  },
  {
    "question": "An example of sequence control is:",
    "options": [
      "`if-else`",
      "`while` loop",
      "Executing statements without branching",
      "Function calls"
    ],
    "answer": 2
  },
  {
    "question": "In flowcharts, flow lines should:",
    "options": [
      "Cross each other",
      "Not cross each other",
      "Be omitted",
      "Replace symbols"
    ],
    "answer": 1
  },
  {
    "question": "Full binary trees:",
    "options": [
      "Have nodes with 0 or 2 children",
      "Must be complete",
      "Have only leaf nodes",
      "Lack a root"
    ],
    "answer": 0
  },
  {
    "question": "Complete binary trees:",
    "options": [
      "Have all levels fully filled",
      "Allow gaps only in the last level",
      "Are always perfect",
      "Have no leaves"
    ],
    "answer": 1
  },
  {
    "question": "Balanced binary trees minimize:",
    "options": [
      "Node count",
      "Height for leaf nodes",
      "Root depth",
      "Memory usage"
    ],
    "answer": 1
  },
  {
    "question": "The number of leaf nodes in a perfect binary tree is:",
    "options": [
      "\( n/2 \)",
      "\( (n+1)/2 \)",
      "\( \log n \)",
      "\( n \)"
    ],
    "answer": 1
  },
  {
    "question": "Tree traversal sequentialization:",
    "options": [
      "Uniquely describes the tree",
      "Requires all three orders (pre/in/post)",
      "Paired with in-order, pre/post-order describes the tree uniquely",
      "Is unnecessary"
    ],
    "answer": 2
  },
  {
    "question": "QBASIC's `FOR...NEXT` loop is used for:",
    "options": [
      "Unconditional looping",
      "Fixed iterations",
      "Two-way decisions",
      "File handling"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `SELECT CASE` is an alternative to:",
    "options": [
      "`DO...LOOP`",
      "`IF-THEN-ELSE` for multiple branches",
      "`INPUT`",
      "`PRINT`"
    ],
    "answer": 1
  },
  {
    "question": "The `MOD` operator in QBASIC returns:",
    "options": [
      "Quotient",
      "Remainder",
      "Product",
      "Sum"
    ],
    "answer": 1
  },
  {
    "question": "To declare a string variable implicitly in QBASIC:",
    "options": [
      "Use `$` suffix",
      "Use `%` suffix",
      "Use `!` suffix",
      "Use `#` suffix"
    ],
    "answer": 0
  },
  {
    "question": "QBASIC's `RND` function generates:",
    "options": [
      "Random numbers",
      "Square roots",
      "Absolute values",
      "Strings"
    ],
    "answer": 0
  },
  {
    "question": "The `END` statement in QBASIC:",
    "options": [
      "Starts the program",
      "Terminates the program",
      "Skips loops",
      "Clears variables"
    ],
    "answer": 1
  },
  {
    "question": "A record in data structures is also called:",
    "options": [
      "A tuple or struct",
      "A linked list",
      "A stack",
      "A queue"
    ],
    "answer": 0
  },
  {
    "question": "Unions in data structures:",
    "options": [
      "Store multiple types simultaneously",
      "Store one primitive type at a time",
      "Are identical to records",
      "Cannot be tagged"
    ],
    "answer": 1
  },
  {
    "question": "Tagged unions include:",
    "options": [
      "A field indicating the current type",
      "No type information",
      "Only integer types",
      "Multiple children"
    ],
    "answer": 0
  },
  {
    "question": "Classes in OOP contain:",
    "options": [
      "Only data fields",
      "Data fields and methods",
      "Only methods",
      "Global variables"
    ],
    "answer": 1
  },
  {
    "question": "Arrays can be:",
    "options": [
      "Only one-dimensional",
      "Multi-dimensional",
      "Only static",
      "Non-indexed"
    ],
    "answer": 1
  },
  {
    "question": "Linked list disadvantages include:",
    "options": [
      "Efficient insertion",
      "Sequential access only",
      "Static size",
      "Contiguous memory"
    ],
    "answer": 1
  },
  {
    "question": "Sentinel nodes simplify algorithms by:",
    "options": [
      "Storing real data",
      "Ensuring non-empty lists",
      "Increasing memory usage",
      "Slowing traversal"
    ],
    "answer": 1
  },
  {
    "question": "Stacks are used for:",
    "options": [
      "Expression evaluation",
      "FIFO processing",
      "Random access",
      "Database queries"
    ],
    "answer": 0
  },
  {
    "question": "Queues often implement:",
    "options": [
      "Buffers",
      "Stacks",
      "Trees",
      "Arrays"
    ],
    "answer": 0
  },
  {
    "question": "Binary search trees:",
    "options": [
      "Are unordered",
      "Allow efficient searching",
      "Have no root",
      "Use LIFO"
    ],
    "answer": 1
  },
  {
    "question": "In QBASIC, `GOTO` is discouraged because:",
    "options": [
      "It causes infinite loops",
      "It leads to unstructured code",
      "It is slow",
      "It only works in loops"
    ],
    "answer": 1
  },
  {
    "question": "The `ON ERROR` statement in QBASIC handles:",
    "options": [
      "Syntax errors",
      "Runtime errors",
      "Logical errors",
      "User input"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `DATA` statement is used with:",
    "options": [
      "`PRINT`",
      "`READ`",
      "`INPUT`",
      "`LET`"
    ],
    "answer": 1
  },
  {
    "question": "To read multiple values in QBASIC, use:",
    "options": [
      "Multiple `INPUT` statements",
      "`READ` with `DATA`",
      "`DIM`",
      "`CONST`"
    ],
    "answer": 1
  },
  {
    "question": "The `SQR` function in QBASIC computes:",
    "options": [
      "Absolute value",
      "Square root",
      "Random number",
      "String length"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `LOOP UNTIL` continues until:",
    "options": [
      "The condition is true",
      "The condition is false",
      "Counter expires",
      "User intervenes"
    ],
    "answer": 0
  },
  {
    "question": "In `DO WHILE` loops, the body executes if:",
    "options": [
      "The condition is false",
      "The condition is true",
      "Always",
      "Never"
    ],
    "answer": 1
  },
  {
    "question": "The `EXIT DO` statement in QBASIC:",
    "options": [
      "Starts a loop",
      "Terminates a loop early",
      "Skips iterations",
      "Continues to next iteration"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `SELECT CASE` evaluates:",
    "options": [
      "Multiple conditions",
      "Only integers",
      "Strings exclusively",
      "No conditions"
    ],
    "answer": 0
  },
  {
    "question": "The `ASC` function in QBASIC returns:",
    "options": [
      "ASCII value of a character",
      "String length",
      "Square root",
      "Remainder"
    ],
    "answer": 0
  },
  {
    "question": "Von Neumann architecture's key concept is:",
    "options": [
      "Parallel processing",
      "Stored program",
      "Quantum bits",
      "Analog computation"
    ],
    "answer": 1
  },
  {
    "question": "The CPU speed is measured based on:",
    "options": [
      "Disk size",
      "Fetch-execute cycle",
      "Number of cores",
      "Clock frequency only"
    ],
    "answer": 1
  },
  {
    "question": "Software Development Life Cycle (SDLC) originates from:",
    "options": [
      "Problem-solving steps",
      "Hardware design",
      "Database management",
      "User interface design"
    ],
    "answer": 0
  },
  {
    "question": "In algorithm development, the goal is:",
    "options": [
      "To write code immediately",
      "To create precise computational steps",
      "To ignore testing",
      "To focus only on documentation"
    ],
    "answer": 1
  },
  {
    "question": "Precision in algorithms ensures:",
    "options": [
      "Ambiguity",
      "Correct solutions in all cases",
      "Infinite loops",
      "Language dependency"
    ],
    "answer": 1
  },
  {
    "question": "Pseudocode is preferred over flowcharts for:",
    "options": [
      "Visual appeal",
      "Ease of modification",
      "Symbol standardization",
      "Hardware representation"
    ],
    "answer": 1
  },
  {
    "question": "Flowchart connectors are used when:",
    "options": [
      "The flowchart is small",
      "Flow lines cross",
      "Continuing on another page",
      "No decision is needed"
    ],
    "answer": 2
  },
  {
    "question": "The \"process\" symbol in flowcharts represents:",
    "options": [
      "Input/output",
      "Arithmetic operations",
      "Start/stop",
      "Decisions"
    ],
    "answer": 1
  },
  {
    "question": "Testing with different inputs helps verify:",
    "options": [
      "Hardware compatibility",
      "Program meets specifications",
      "User preferences",
      "Network speed"
    ],
    "answer": 1
  },
  {
    "question": "Debugging is part of:",
    "options": [
      "Coding",
      "Testing phase",
      "Problem analysis",
      "Documentation"
    ],
    "answer": 1
  },
  {
    "question": "Maintenance is most time-consuming for:",
    "options": [
      "New programs",
      "Deployed programs",
      "Algorithms",
      "Pseudocode"
    ],
    "answer": 1
  },
  {
    "question": "An algorithm for starting a car includes:",
    "options": [
      "Calling a mechanic first",
      "Steps like inserting key and checking transmission",
      "Only turning the key",
      "Ignoring engine start time"
    ],
    "answer": 1
  },
  {
    "question": "Efficiency in algorithms prioritizes:",
    "options": [
      "Time and space (memory)",
      "Code beauty",
      "Variable names",
      "Comment length"
    ],
    "answer": 0
  },
  {
    "question": "Functional programming languages include:",
    "options": [
      "C++",
      "LISP",
      "Java",
      "Pascal"
    ],
    "answer": 1
  },
  {
    "question": "Logic programming is ideal for:",
    "options": [
      "Graphical interfaces",
      "Knowledge extraction from facts",
      "Real-time gaming",
      "Hardware control"
    ],
    "answer": 1
  },
  {
    "question": "OOP languages include:",
    "options": [
      "Haskell",
      "Prolog",
      "Smalltalk",
      "Fortran"
    ],
    "answer": 2
  },
  {
    "question": "A bit represents:",
    "options": [
      "A character",
      "Binary state (0/1)",
      "A byte",
      "A word"
    ],
    "answer": 1
  },
  {
    "question": "1 TB equals:",
    "options": [
      "1000 GB",
      "1024 GB",
      "1024 MB",
      "1000 MB"
    ],
    "answer": 1
  },
  {
    "question": "A 32-bit OS:",
    "options": [
      "Can run on 64-bit hardware",
      "Cannot run on any machine",
      "Requires 128-bit CPU",
      "Is obsolete"
    ],
    "answer": 0
  },
  {
    "question": "Arrays vs. linked lists: Arrays allow:",
    "options": [
      "Faster random access",
      "Easier insertion",
      "Dynamic resizing",
      "No indices"
    ],
    "answer": 0
  },
  {
    "question": "Stack overflow occurs when:",
    "options": [
      "Popping an empty stack",
      "Pushing to a full stack",
      "Peeking",
      "Clearing the stack"
    ],
    "answer": 1
  },
  {
    "question": "Queue underflow happens when:",
    "options": [
      "Enqueuing to a full queue",
      "Dequeuing from an empty queue",
      "Peeking",
      "Initializing"
    ],
    "answer": 1
  },
  {
    "question": "In trees, the root has:",
    "options": [
      "No parent",
      "No children",
      "Siblings",
      "Multiple parents"
    ],
    "answer": 0
  },
  {
    "question": "In-order traversal of a binary search tree yields:",
    "options": [
      "Random order",
      "Sorted order",
      "Reverse order",
      "Level order"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `FUNCTION` is used for:",
    "options": [
      "Subroutines returning values",
      "Main programs",
      "Comments",
      "Loops"
    ],
    "answer": 0
  },
  {
    "question": "QBASIC's `SUB` is for:",
    "options": [
      "Value-returning routines",
      "Procedures without return values",
      "Data types",
      "Constants"
    ],
    "answer": 1
  },
  {
    "question": "The `REDIM` statement in QBASIC:",
    "options": [
      "Declares constants",
      "Re-dimensions arrays",
      "Prints output",
      "Reads input"
    ],
    "answer": 1
  },
  {
    "question": "QBASIC's `INKEY$` reads:",
    "options": [
      "Full strings",
      "Single keystrokes",
      "Files",
      "Arrays"
    ],
    "answer": 1
  },
  {
    "question": "The `TIMER` function returns:",
    "options": [
      "Current time as string",
      "Seconds since midnight",
      "Date only",
      "User input"
    ],
    "answer": 1
  },
  {
    "question": "To create a delay in QBASIC, use:",
    "options": [
      "`SLEEP`",
      "`END`",
      "`CLS`",
      "`PRINT`"
    ],
    "answer": 0
  }
]


// UI Elements
const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});