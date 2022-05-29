const Post = require("../models/Post.model");

// GET ALL POSTS
async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
}

// GET POST BY ID
async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
}


// CREATE POST
async function createPost(req, res) {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
    photo: req.body.photo,
    userName: req.body.userName,
    categories: req.body.categories,
    createdAt: req.body.createdAt
  });
  try {
    const savedPost = await post.save();
    res.json({
      message: "Post created successfully",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
}
module.exports = {
  getAllPosts,
  getPostById,
  createPost
};