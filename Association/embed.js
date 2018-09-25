var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);
//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts :[postSchema]
});

var User = mongoose.model("User", userSchema);




// var newUser = new User({
//     email:"Shawn@li.edu",
//     name: "Shawn"
// });

// newUser.posts.push({
//     title:"How to make cupcake",
//     content:"Max's homemade cupcakes"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title:"Refelections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name:"Shawn"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
        user.posts.push({
            title:"Three things I love", 
            content:"Cindy, Cindy and Cindy"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
    }
});
