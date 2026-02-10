const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const User = require("./models/User");

const app = express();

// Allow requests only from your React app's origin
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// Use environment variable for MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/art-hub";

// Async bootstrap for DB connection and server start
async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Test route
    app.get("/", (req, res) => {
      res.send("Art eCommerce API is running x");
    });

    // Register route
    app.post("/api/register", async (req, res) => {
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return res.json({ success: false, message: "All fields required" });

      const hashed = await bcrypt.hash(password, 10);
      try {
        const user = await User.create({ name, email, password: hashed });
        res.json({ success: true, user: { name: user.name, email: user.email } });
      } catch (e) {
        console.error("Registration error:", e);
        if (e.code === 11000) {
          res.json({ success: false, message: "Email already exists" });
        } else {
          res.json({ success: false, message: "Registration failed. Please try again." });
        }
      }
    });

    // Login route
  app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.json({ success: false, message: "Incorrect password" });

    res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        cartCount: user.cart.length,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});


    app.listen(4000, () => console.log("Server running on port 4000"));
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();