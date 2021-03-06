var express = require("express"),
    bodyParser = require("body-parser"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override")
    app = express();
//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Mongoose/model CONFIG
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date, default:Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title:"Test Blog",
//     image:"https://images.unsplash.com/photo-1535406454182-bb1130b218c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=280770245bb891f754efb0ed459efc5a&auto=format&fit=crop&w=1447&q=80",
//     body:"NOISE!!!!",
// });

//RESTful Route
app.get("/", function(req, res) {
    res.redirect("/blogs");
})
//INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{blogs:blogs});
        }
    });
});
//NEW Route
app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});
//CREATE Route
app.post("/blogs", function(req,res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }
        else{
            res.redirect("/blogs");
        }
    })
    //then, redirect
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("show", {blog:foundBlog});
        }
    });
});
//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("edit", {blog:foundBlog});
        }
    })
    
});
//UPDATE ROUTE
app.put("/blogs/:id", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        }
        else if(req.body.blog.body === ""){
            alert("Content can't be empty");
            res.redirect("/blogs/" + req.params.id + "/edit")
        }
        else{
            res.redirect("/blogs/" + req.params.id)
        }
    });
});
//DELETE ROUTE
app.delete("/blogs/:id", function(req,res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.redirect("/blogs")
        }
    })
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
});