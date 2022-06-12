const User = require('../models/User.model');

// Register a new user
async function registerUser (req, res) {
  const { userName, email, password } = req.body;

  // validar si el email ya existe
  const user = await User.findOne({ email });
  const name = await User.findOne({ userName });
  
  if (user || name) return res.status(400).json({ message: 'The email or username already exists' });

  try {
    const newUser = new User({
      userName,
      email,
      password
    });
    await newUser.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
}

// get all the users
async function getAllUsers (req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  }
  catch (error) {
    res.status(500).json({ msg: 'Error', error });
    console.log(error);
  }
}

module.exports = {
  registerUser,
  getAllUsers
}