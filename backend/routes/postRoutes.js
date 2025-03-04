import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  try {
    const [posts] = await pool.query("SELECT * FROM posts");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new post
router.post("/", async (req, res) => {
  const { user_id, title, content } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
      [user_id, title, content]
    );
    res.status(201).json({ id: result.insertId, user_id, title, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
