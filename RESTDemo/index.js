const express = require("express");
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/tacos", (req, res) => {

    res.send("GET /tacos response!!")
});

app.post("/tacos", (req, res) => {
    const {qty, meat} = req.body;
    res.send("This is the POST  /tacos response!! " +
        `<p>You ordered <b>${qty} ${meat}</b> tacos</p>`)


});



app.listen(3000, () =>{
    console.log("on port 3000");
});