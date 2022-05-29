const router = require("express").Router();

const { getAllPosts, getPostById, createPost } = require("../controllers/post.controller");

// get all posts and post by id
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// create post
router.post("/", createPost);

module.exports = router;