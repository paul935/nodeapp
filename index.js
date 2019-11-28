var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 3000");
});


app.get("/", (req, res, next) => {
    res.json("Hello Paul");
});

app.get("/paul", (req, res, next) => {
    res.json("Paul");
});
