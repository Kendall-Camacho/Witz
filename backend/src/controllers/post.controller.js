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


module.exports = {
  getAllPosts
};