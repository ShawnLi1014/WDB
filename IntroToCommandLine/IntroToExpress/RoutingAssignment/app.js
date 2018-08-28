var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.send("Hi there, welcome to my assignment"); 
});

app.get("/speak/:animal", function(req, res){
    var animals = {
        "pig": "Oink",
        "cow": "Moo",
        "dog": "Woof Woof!"
    };
    var animal = req.params.animal;
    console.log(animals);
    res.send("The " + animal + " says "+ animals[animal]);
});

app.get("/repeat/:content/:num", function(req, res) {
    var num = Number(req.params.num);
    var content = req.params.content;
    var str = "";
    for(var i = 0; i < num; i++){
        str = str + content + " ";
    }
    res.send(str);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});