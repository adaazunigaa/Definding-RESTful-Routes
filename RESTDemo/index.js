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
        userName: "Tod",
        commnet: "lol that is so funny"
    },
    {
        userName: "Sky",
        commnet: "I love dogs"
    },
    {
        userName: "sk8erBoyy",
        commnet: "Pls delete that... so boring"
    },
    {
        userName: "IsyaWoofWoof",
        commnet: "woOf woOf woOf woOf!!"
    },
];


app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments});
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