import express from "express";
import passport from "passport";
import pool from "../config/db.js";
const router = express.Router();

// Route to start authentication
router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:8000"); // Redirect to frontend
  }
);

// Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.redirect("http://localhost:8000");
  });
});

// To get Login information
router.get("/user", async (req, res) => {
  if(!req.user) return res.status(401).json({message: "Unauthorised"});
  try {
    const [fetchUser] = await pool.query("SELECT * FROM users where email = ? or opt_email = ?", [req.user._json.email, req.user._json.email]);
    const [otherUser] = await pool.query("SELECT * FROM users WHERE email NOT IN (?, ?)", [req.user._json.email, req.user._json.email]);
    console.log(fetchUser[0]);
    res.json({success: true, user: fetchUser[0], otherUser:otherUser});
  } catch (err) {
    console.log(err);
  }
});

export default router;
