const userModel = require("../models/userModel");
const { hashGenerator } = require("../helpers/hashing");

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Validation: Check if required fields are provided
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Validation: Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    // Check if the email already exists in the database
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      if (!existingUser.aflag) {
        return res.status(403).json({ error: "This account has been deactivated." });
      } else {
        return res.status(409).json({ error: "Email already exists." });
      }
    }

    // Hash the password
    const hashedPassword = await hashGenerator(password);

    // Create new user
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      aflag: true, 
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registration successful.",
      userID: newUser._id,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
};
