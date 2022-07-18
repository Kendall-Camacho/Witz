/* Importing the Post model from the models folder.*/
const Post = require("../models/Post.model");
const uploadImage = require('../../libs/cloudinary');
const fs = require('fs-extra');

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
  try {
    let { title, desc, photo, userName, categories, createdAt } = req.body;
    if (req.files?.photo) {
      const img = await uploadImage(req.files.photo.tempFilePath);
      await fs.remove(req.files.photo.tempFilePath);
      const post = new Post({
        title,
        desc,
        photo: img.secure_url,
        userName,
        categories,
        createdAt
      });
      await post.save();
      res.json({
        message: "Post created successfully"
      });
    }
  } catch (error) {
    res.json({
      message: error,
    })
  }
}

// DELETE A POST
async function deletePost(req, res) {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.id });
    res.json({
      message: "Post deleted successfully",
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
  createPost,
  deletePost,
};