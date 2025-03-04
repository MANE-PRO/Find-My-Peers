import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 3000;

app.get("", (req, res) => {
    console.log("HII");
    res.send("<h1>Hello World</h1>");
});
app.listen(PORT, () =>{
    console.log("Server On!!");
});