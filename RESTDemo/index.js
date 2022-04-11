const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');
uuid(); 

app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
    {
        id: uuid(),
        username: "High Priority",
        comment: "Workout",
        checked: true
    },
    {
        id: uuid(),
        username: "Medium Priority",
        comment: "Read for 20 min",
        checked: false
    },
    {
        id: uuid(),
        username: "Low priority",
        comment: "Organize/clean up computer desktop"
    },
    {
        id: uuid(),
        username: "On Standby",
        comment: "Laundry"
    },
];

app.get("/", (req,res) =>{
    res.render("home.ejs")
});

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

app.patch("/comments/:id", (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response!!");
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})


app.post("/tacos", (req, res) => {
    const { qty, meat } = req.body;
    res.send("This is the POST  /tacos response!! " +
        `<p>You ordered <b>${qty} ${meat}</b> tacos</p>`);
});



app.listen(3000, () => {
    console.log("on port 3000");
});