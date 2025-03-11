import express from "express";
import pool from "../config/db.js";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
// Get all users
router.get("/", async (req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new user
router.post("/request", async (req, res) => {
  const { email } = req.body;
  try {
    const [fetch] = await pool.query(
      "SELECT * FROM requests WHERE email1 = ? AND email2 = ?",
      [req.user._json.email, email]
    );
    if(fetch.length === 0){
      const [result] = await pool.query(
        "INSERT INTO requests (email1, email2) VALUES (?, ?)",
        [req.user._json.email, email]
      );
      res.status(201).json({ message: "inserted" });
    }
    else{
      res.status(201).json({message: "already exists"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/request", async (req, res) => {
  try {
    const [fetch] = await pool.query(
      "SELECT * FROM users WHERE email IN (SELECT email2 FROM requests where email1 = ?)",
      [req.user._json.email]
    );
    res.json({users: fetch});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


export default router;
