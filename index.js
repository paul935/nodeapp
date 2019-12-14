var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Testing Server running on port 8080");
});


app.get("/", (req, res, next) => {
    res.json("Hello Omaha Node.js App ");
});
app.get("/paul", (req, res, next) => {
    res.json("Paul");
});
