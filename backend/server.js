import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/auth.js";
import path from "path";
import pool from "./config/db.js";
dotenv.config();

const app = express();


app.use(express.json()); // Middleware to parse JSON
app.use(
    session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true })
  );
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
const __dirname = path.resolve(); // Get current directory path
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
passport.use("google", 
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      //userProfileURL: "https://wwww.googleapis.com/oauth2/v3/userinfo"
    },
    async (accessToken, refreshToken, profile, done) => {
      const name = profile._json.name;
      const email = profile._json.email;
      //console.log(`${name} ${email}`)
      try {
        const [check] = await pool.query("SELECT * FROM users where email = ?", [email]);
        //console.log(check);
        if(check.length === 0){
          const [result] = await pool.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
          );
        }
      } catch (err) {
        console.log(err);
      }
      //console.log(profile);
      return done(null, profile);
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
