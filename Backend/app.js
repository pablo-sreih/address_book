require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing user, contact
const User = require("./model/user");
const Contact = require("./model/contact");

// Add Contact
app.post("/add-contact", async (req, res) => {
  try{
    console.log("request", req.body)
    const { name, email, number, status, location } = req.body;

    if(!(name && number)) {
      res.status(400).send("Name and number are required");
    }

    const oldUser = await Contact.findOne({ number });

    if (oldUser) {
      return res.status(409).send("Number Already Exists");
    }

    const contact = await Contact.create({
      name,
      email,
      number,
      status,
      location
    });

    res.status(201).json(contact)

  } catch (err) {
    console.log(err);
  }
});

// Register
app.post("/register", async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    console.log("request", res.body)
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All inputs are required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
 
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
app.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All inputs are required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;