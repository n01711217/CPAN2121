import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Book from "./model/book.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});
db.on("error", (err) => {
  console.log("DB Error");
});

app.listen(PORT, () => {
console.log(`http://localhost:${PORT}`);
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});