const router = require("express").Router();

const { getAllPosts, getPostById } = require("../controllers/post.controller");


router.get("/", getAllPosts);
router.get("/:id", getPostById);


module.exports = router;