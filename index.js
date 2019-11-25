var express = require("express");
var app = express();
app.listen(3100, () => {
 console.log("Server running on port 3000");
});


app.get("/sayhello", (req, res, next) => {
    res.json("Hello Paul");
});

app.get("/paul", (req, res, next) => {
    res.json("Paul");
});
