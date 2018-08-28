var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi, there");
});

app.get("/bye", function(req, res){
    res.send("Goodbye");
});

app.get("/dog", function(req, res){
    res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    res.send("welcome to comment page")
});

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});