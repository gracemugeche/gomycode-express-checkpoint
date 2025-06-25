# Express.js Checkpoint Project

## 📚 Overview

This project is built as part of the GoMyCode backend checkpoint to demonstrate understanding of **Express.js**, **routing**, **custom middleware**, and **basic styling**.

The goal was to create a simple web application with:

- A **Home**, **Our Services**, and **Contact Us** page
- A **shared navigation bar** for easy routing
- A **time-based middleware** that allows access to the pages **only during working hours** (Monday–Friday, 9AM–5PM)
- Static assets served using Express
- Simple CSS styling for a clean and responsive layout

---

## 🚀 Features

- ✅ Express.js server setup
- ✅ Custom middleware for validating working hours
- ✅ HTML pages served with `res.sendFile()`
- ✅ Navigation bar links between pages
- ✅ Styled with CSS via the `public` folder
- ✅ `.gitignore` to keep node_modules and sensitive files out of GitHub

---

## 🗂️ Folder Structure

```

gomycode-express-checkpoint/
├── public/
│   └── style.css
├── pages/
│   ├── home.html
│   ├── services.html
│   └── contact.html
├── middleware/
│   └── workingHours.js
├── server.js
├── package.json
└── .gitignore

````

---

## 🛠️ How to Run

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
````

3. Run the app:

   ```bash
   node server.js
   ```

4. Open [http://localhost:3000](http://localhost:3000)

---

## 👩🏽 Author

**Grace Mugeche**
[LinkedIn Profile](https://www.linkedin.com/in/grace-mugeche/)

---


