import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.ts";
import productRoutes from "./src/routes/product.routes.ts";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.get("/", (req, res) => {
  res.send("Art eCommerce API is running x");
});

app.listen(5001, () => console.log("Server running on port 5001"));
