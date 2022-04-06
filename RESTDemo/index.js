const express = require("express");
const app = express();
const path = require("path");

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        username: "Tod",
        comment: "lol that is so funny"
    },
    {
        username: "Sky",
        comment: "I love dogs"
    },
    {
        username: "sk8erBoyy",
        comment: "Pls delete that... so boring"
    },
    {
        username: "IsyaWoofWoof",
        comment: "woOf woOf woOf woOf!!"
    },
];


app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments});
});

app.get("/comments/new", (req, res)=>{
    res.render("comments/new.ejs");
});

app.post("/comments", (req,res) => {
     console.log(req.body);
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response!!");
});

app.post("/tacos", (req, res) => {
    const { qty, meat } = req.body;
    res.send("This is the POST  /tacos response!! " +
        `<p>You ordered <b>${qty} ${meat}</b> tacos</p>`);
});



app.listen(3000, () => {
    console.log("on port 3000");
});