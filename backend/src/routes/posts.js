const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// send a post 
router.post("/", async (req, res) => {
    try {
        // que me devuelvan todos los post en la base de datos
        const post = await Post.find();
        // si no hay ningun post en la base de datos
        if (!post) {
            // envio un error
            return res.status(400).send("No hay post");
        }
        // si hay post en la base de datos
        res.send(post);
    } catch (error) {
        res.status(500).send("Error");
    }
});

//CREATE A POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const newPost = newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).send("Error");
    }
});

// Delete post
// router.delete("/:id", async (req, res) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id);
//         if (post.username === req.body.username) {
//             try {
//                 await Post.findByIdAndDelete(req.params.id);
//                 res.status(200).json("Post deleted");
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         }else{
//             res.status(401).json("You are not authorized to perform this action");
//         }
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });


// Get all posts
// router.get("/api/posts", async (req, res) => {
//     try {
//         const posts = await Post.find({});
//         res.status(200).json(posts);
//     }
//     catch (err) {
//         res.status(500).json({
//             message: "Error retrieving posts",
//             error: err
//         });
//     }
// });

// GET ALL POSTS
router.get("/", async (req, res) => {
    res.send("Posts");
});


//Get post by id
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;