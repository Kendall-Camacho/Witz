const router = require('express').Router();

const { registerUser,getAllUsers } = require("../controllers/user.controller");


router.post("/register", registerUser);
router.get("/all", getAllUsers);

module.exports = router;