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

module.exports = {
  getAllPosts,
  getPostById
};