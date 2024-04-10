// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userControllers");

// User registration route
router.post("/register", registerUser);

module.exports = router;