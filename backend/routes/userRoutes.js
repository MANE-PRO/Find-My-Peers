import express from "express";
import pool from "../config/db.js";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));
// Get all users
router.get("/", async (req, res) => {
  if(!req.user) return res.status(401).json({message: "Unauthorised"});
  try {
    const [fetchUser] = await pool.query("SELECT * FROM users where email = ?", [req.user._json.email]);
    const [otherUser] = await pool.query("SELECT * FROM users WHERE email NOT IN (?, ?)", [req.user._json.email, req.user._json.email]);
    res.json({success: true, user: fetchUser[0], otherUser:otherUser});
  } catch (err) {
    console.log(err);
  }
});

router.post("/save", async (req, res) => {
  try {
    await pool.query("UPDATE users set phone = ?, psstation = ?, pslocation = ? where email = ?", [req.body.phone, req.body.psStation, req.body.psLocation, req.user._json.email]);
    const [check] = await pool.query("SELECT * FROM users where email = ?", [req.user._json.email]);
    res.json({success: true, user: check[0]});
  } catch (err) {
    console.log(err);
  }
});
export default router;
