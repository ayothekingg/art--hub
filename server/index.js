import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "../server/src/config/db.js";
import authRoutes from "../server/src/routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

// Allow requests only from your React app's origin
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use("api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Art eCommerce API is running x");
});


    app.listen(4000, () => console.log("Server running on port 4000"));
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();