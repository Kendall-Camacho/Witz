const mongoose = require('mongoose');

// GET USER BY ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
}


// CREATE USER
async function createUser(req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  });
  try {
    const savedUser = await user.save();
    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
}


module.exports = {
  getUserById,
  createUser
};