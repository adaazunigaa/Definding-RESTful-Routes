const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require('uuid');
uuid(); 

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        id: uuid(),
        username: "Tod",
        comment: "lol that is so funny"
    },
    {
        id: uuid(),
        username: "Sky",
        comment: "I love dogs"
    },
    {
        id: uuid(),
        username: "sk8erBoyy",
        comment: "Pls delete that... so boring"
    },
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid()});
    res.redirect("/comments");
});

app.get("/comments/:id", (req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show.ejs", { comment } );
});

app.get("/comments/:id/edit", (req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit.ejs", { comment });
});

app.patch("comments/:id", (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
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