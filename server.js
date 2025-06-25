const express = require("express");
const path = require("path");
const workingHours = require("./middleware/workingHours");

const app = express();
const PORT = 3000;

// Middleware to check time
app.use(workingHours);

// Serve static CSS
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "services.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
