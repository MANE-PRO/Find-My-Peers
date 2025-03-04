import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "cookie-session";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import "./config/passport.js";
import authRoutes from "./routes/auth.js";
import path from "path";
dotenv.config();

const app = express();


app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json()); // Middleware to parse JSON
app.use(
    session({ secret: "secret-key", resave: false, saveUninitialized: true })
  );
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
const __dirname = path.resolve(); // Get current directory path
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
