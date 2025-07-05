# 👨‍💼 Employee Dummy Data Generator

A full-stack web application that generates 10 dummy employee records in a MongoDB database with a single click!

Built with **Node.js**, **Express**, **MongoDB**, and **Bootstrap**.

---

## 🚀 Features

- Generates 10 random employee entries (name, salary, language, city, isManager)
- Deletes old records before generating new ones
- Bootstrap-based button UI
- Clean project structure with `models/`, `utils/`, and `public/`
- Connected frontend and backend using `fetch()` API

---

## 📁 Project Structure

```
dummy-data-generator/
├── models/
│   └── Employee.js          # Mongoose schema
├── public/
│   └── index.html           # Frontend with Generate button
├── utils/
│   └── data_generator.js    # Random data functions
├── server.js                # Express server
├── package.json
└── README.md
```

---

## 📦 Tech Stack

- **Frontend**: HTML, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose

---

## 🛠 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/employee-dummy-generator.git
cd employee-dummy-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB (locally)

Make sure MongoDB is running on `mongodb://localhost:27017`.

### 4. Run the server

```bash
npm start
```

### 5. Open in browser

Visit [http://localhost:3000](http://localhost:3000)

Click the **"Generate Data"** button to insert dummy employee records.

---

## 🧠 Learning Highlights

- Using Express middleware like `express.static`
- Organizing full-stack projects
- Fetch API and routing
- Using `Employee.create()` and `deleteMany()`
- Bootstrap UI and utility classes

---

