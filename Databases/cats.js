var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// var george = new Cat({
//     name:"Mrs. Norris",
//     age:7,
//     temperament:"Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("We just save a cat to the DB");
//         console.log(cat);
//     }
// });
Cat.create({
   name:"Snow", 
   age: 15,
   temperament:"Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cat){
    if(err){
        console.log("Oh no error");
        console.log(err);
    }
    else{
        console.log(cat);
    }
});