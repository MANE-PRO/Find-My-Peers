import express from "express";
import passport from "passport";

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


export default router;
