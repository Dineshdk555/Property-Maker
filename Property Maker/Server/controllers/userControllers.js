const userModel = require("../models/userModel");
const { hashGenerator, hashValidator } = require("../helpers/hashing");
const { JWTtokenGenerator } = require("../helpers/Token");

exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password,role,zipcode,phonenumber } = req.body;

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
      role,
      zipcode,
      phonenumber,
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
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUser = await userModel.findOne({ email });

    if (!isUser) {
      return res.status(404).json({ error: "This email isn't registered yet" });
    } else if (!isUser.aflag) {
      return res.status(403).json({ error: "This account has been deactivated" });
    } else {
      const result = await hashValidator(password, isUser.password);
      if (result) {
        const jwtToken = await JWTtokenGenerator({
          id: isUser._id,
          expire: "30d",
        });

        res.cookie("jwt", jwtToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
          success: true,
          userID: isUser._id,
          firstname: isUser.firstname,
          lastname: isUser.lastname,
          email: isUser.email,
          token: "JWT " + jwtToken,
          profilePic: isUser.profilePic,
          role: isUser.role,
          zipcode: isUser.zipcode,
          phonenumber: isUser.phonenumber,
          admin: true,
        });
      } else {
        return res.status(401).json({ error: "Password doesn't match" });
      }
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
};