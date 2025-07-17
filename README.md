# NodeJs Mastery Course



## Course Overview
Master the fundamentals of Nodejs and build scalable, high performance applications.

### Prerequisites

- Basic JavaScript knowledge
- Familiarity with command-line interfaces


### Module 01 : Node.js Fundamentals
1. Introduction to Node.js
2. Installing Node.js and setting up the environment
3. Basic syntax and data types
4. Modules and npm

### Module 2: Asynchronous Programming

1. Understanding callbacks
2. Promises and async/await
3. Error handling

### Module 3: Node.js Core Modules

1. File System (fs) module
2. HTTP module
3. Path module
4. URL module

### Module 4: Express.js Framework

1. Introduction to Express.js
2. Routing and middleware
3. Request and response objects
4. Template engines (e.g., EJS, Pug)

### Module 5: Database Integration

1. Introduction to databases (e.g., MongoDB, PostgreSQL)
2. Mongoose (MongoDB ORM)
3. Sequelize (PostgreSQL ORM)

### Module 6: Authentication and Authorization

1. Introduction to authentication and authorization
2. Passport.js
3. JSON Web Tokens (JWT)

### Module 7: Security Best Practices

1. Common security vulnerabilities
2. Secure coding practices
3. HTTPS and SSL/TLS

### Module 8: Testing and Debugging

1. Introduction to testing (unit, integration, end-to-end)
2. Mocha and Chai testing framework
3. Debugging techniques

### Module 9: Deployment and Scaling

1. Introduction to deployment strategies
2. Heroku and other cloud platforms
3. Containerization (Docker)
4. Load balancing and clustering

### Module 10: Advanced Topics

1. WebSockets and real-time applications
2. GraphQL
3. Microservices architecture

---


# 📘 Module 01: Node.js Fundamentals

---

## 1. 🚀 Introduction to Node.js

- **Node.js** is an **open-source, cross-platform** runtime environment that allows you to run JavaScript on the **server side**.
- Built on **Chrome’s V8 JavaScript engine**.
- Designed for **scalable network applications**.
- Uses **non-blocking, event-driven** architecture, making it **fast and efficient**.

**🔑 Key Features:**
- Asynchronous & Event-driven
- Single-threaded but highly scalable
- Fast execution using V8 engine
- Built-in modules for HTTP, File system, etc.



## 2. 💻 Installing Node.js and Setting Up the Environment

**Steps:**
1. Download Node.js from [https://nodejs.org](https://nodejs.org)
2. Install using the setup wizard (LTS version recommended)
3. Verify installation:
   ```bash
   node -v     # Check Node.js version
   npm -v      # Check npm version




## 3. 🧠 Basic Syntax and Data Types

### 📄 JavaScript Syntax in Node.js

Node.js uses modern JavaScript (ES6+). Common syntax includes:

- `let`, `const` for variable declaration
- Functions (regular and arrow functions)
- `require()` to import modules
- `module.exports` to export functionalities

### 🔢 Data Types in Node.js

#### ✅ Primitive Data Types:
- `String`
- `Number`
- `Boolean`
- `null`
- `undefined`
- `Symbol`
- `BigInt`

#### ✅ Non-Primitive Data Types:
- `Object`
- `Array`
- `Function`




## 4. 📦 Modules and npm

### 🔹 What Are Modules?

Modules are **independent, reusable units of code** in Node.js.  
They help keep your code **organized** and **maintainable**.

### 📂 Types of Modules in Node.js

1. **Core Modules** – Built into Node.js  
   Example: `fs`, `http`, `path`, `os`, `events`

2. **User-defined Modules** – Files you create  
   Example: `calc.js`, `utils.js`, etc.

3. **Third-party Modules** – Installed via `npm`  
   Example: `express`, `axios`, `dotenv`, etc.





## 📦 What is npm?

### 🔹 Definition

- **npm** stands for **Node Package Manager**
- It is the **default package manager** for **Node.js**
- Installed automatically when you install Node.js



### 🎯 What Does npm Do?

- Installs **third-party packages/modules**
- Manages **project dependencies**
- Allows developers to **publish/share** their own packages
- Helps maintain version control using `package.json`



### 📁 Key Concepts

- **`package`**: A reusable block of code (library/module)
- **`package.json`**: A file that holds metadata & dependencies for your project
- **`node_modules/`**: Folder that stores installed packages



### 🛠️ Common npm Commands

| Command | Description |
|--------|-------------|
| `npm init -y` | Initializes a Node project with default settings |
| `npm install <package-name>` | Installs a specific package |
| `npm uninstall <package-name>` | Removes an installed package |
| `npm list` | Lists installed packages |
| `npm install` | Installs all dependencies listed in `package.json` |
| `npm update` | Updates all installed packages |
| `npm outdated` | Shows outdated packages in your project |

---

# 📁 Node.js File Handling Guide (ES Modules)

This guide covers how to perform file and directory operations in Node.js using the `fs` and `fs/promises` modules with ES Module (`import`/`export`) syntax.

---

## 📦 Setup

- Ensure `package.json` has `"type": "module"` for `import`/`export` usage.
- Use `fs` for sync/callback APIs and `fs/promises` for async/await.


## 1. Importing File System Modules

- `fs`: Synchronous and callback-based methods.
- `fs/promises`: Promise-based methods for async/await.


## 2. Reading Files

- Synchronous reading using `fs`.
- Asynchronous reading using `fs/promises`.


## 3. Writing Files

- Overwrites file content.
- Available in sync, callback, and promise forms.


## 4. Appending Files

- Adds content to the end of a file.
- Supported by both `fs` and `fs/promises`.


## 5. Deleting Files

- Removes a specified file.
- Use sync or async depending on the requirement.


## 6. Directory Operations

- Create directories (`mkdir`, recursive option available).
- Read contents of a directory.
- Remove directories (recursively if needed).


## 7. File Statistics

- Retrieve file or directory metadata.
- Check type, size, creation/modification date, etc.


## 8. Renaming and Moving Files

- Rename or move files with the same method.
- Supported in both sync and async forms.


## 9. Watching Files and Directories

- Watch for changes in a file or directory.
- Useful for logging, live reload, or dev tools.


## 10. Working with Streams

- Handle large file reads/writes efficiently.
- Use `createReadStream` and `createWriteStream`.


## 🧠 Best Practices

- Prefer `fs/promises` with async/await for modern apps.
- Avoid using synchronous methods in production.
- Always implement error handling using try/catch or error callbacks.
- Use streams for large file operations to improve performance.


## 🔚 Conclusion

Node.js provides robust and flexible tools for file handling. With ES Modules and async/await, managing files becomes cleaner and more maintainable.

---

# 📘 Node.js File Handling Methods (ES Modules Compatible)

A categorized list of commonly used file and directory handling methods from Node.js `fs`, `fs/promises`, and stream APIs.

---

## 📁 File Handling Methods

### ✅ Reading Files
- `fs.readFile`
- `fs.readFileSync`
- `fs/promises.readFile`


### ✍️ Writing Files
- `fs.writeFile`
- `fs.writeFileSync`
- `fs/promises.writeFile`



### ➕ Appending to Files
- `fs.appendFile`
- `fs.appendFileSync`
- `fs/promises.appendFile`



### ❌ Deleting Files
- `fs.unlink`
- `fs.unlinkSync`
- `fs/promises.unlink`



### 🔁 Renaming / Moving Files
- `fs.rename`
- `fs.renameSync`
- `fs/promises.rename`



### 📜 File Stats & Metadata
- `fs.stat`
- `fs.statSync`
- `fs/promises.stat`



## 📂 Directory Handling Methods

### 📁 Creating Directories
- `fs.mkdir`
- `fs.mkdirSync`
- `fs/promises.mkdir`



### 📄 Reading Directories
- `fs.readdir`
- `fs.readdirSync`
- `fs/promises.readdir`



### 🧹 Removing Directories
- `fs.rmdir` *(legacy, non-recursive)*
- `fs.rmdirSync`
- `fs/promises.rmdir`
- `fs.rm` *(modern, recursive-capable)*
- `fs.rmSync`
- `fs/promises.rm`

---

## 🔄 File Watching

- `fs.watch`
- `fs.watchFile`
- `fs.unwatchFile`



## 🚿 File Streams

### 📥 Read Stream
- `fs.createReadStream`

### 📤 Write Stream
- `fs.createWriteStream`


## 📌 Notes

- Use `fs/promises` for promise-based (async/await) operations.
- Avoid blocking methods (like `Sync` ones) in performance-critical applications.









# Projects

Here are some project ideas based on the Node.js Mastery Course modules:

### Module 1: Node.js Fundamentals

1. Command-line To-Do List App: Create a simple To-Do List app that allows users to add, remove, and list tasks.
2. File System Explorer: Build a command-line tool that explores the file system and displays directory contents.

### Module 2: Asynchronous Programming

1. Weather API Client: Create a Node.js app that fetches weather data from a public API and displays it in the console.
2. Async File Reader: Build a program that reads multiple files asynchronously and displays their contents.

### Module 3: Node.js Core Modules

1. Simple Web Server: Create a basic web server using the HTTP module that serves static files.
2. File System Organizer: Build a tool that organizes files in a directory based on their extensions.

### Module 4: Express.js Framework

1. Personal Blog: Create a simple blog using Express.js that allows users to create, read, update, and delete (CRUD) posts.
2. RESTful API: Build a RESTful API using Express.js that manages a collection of books.

### Module 5: Database Integration

1. User Management System: Create a system that allows users to register, login, and view their profiles using a database (e.g., MongoDB).
2. Bookstore API: Build a RESTful API that manages a collection of books stored in a database.

### Module 6: Authentication and Authorization

1. Secure Todo List App: Create a Todo List app that requires users to login and authenticate before accessing their tasks.
2. Role-Based Access Control: Build a system that demonstrates role-based access control using Passport.js.

### Module 7: Security Best Practices

1. Secure Password Storage: Create a system that securely stores and verifies user passwords.
2. Input Validation: Build a system that demonstrates input validation and sanitization.

### Module 8: Testing and Debugging

1. Unit Testing: Write unit tests for a simple calculator function using Mocha and Chai.
2. Debugging Exercise: Create a program with intentional bugs and debug it using Node.js debugging tools.

### Module 9: Deployment and Scaling

1. Deploying a Node.js App: Deploy a simple Node.js app to a cloud platform (e.g., Heroku).
2. Load Balancing: Demonstrate load balancing using a simple Node.js app and a load balancer.

### Module 10: Advanced Topics

1. Real-time Chat App: Create a real-time chat app using WebSockets and Node.js.
2. GraphQL API: Build a GraphQL API that manages a collection of books.


---
