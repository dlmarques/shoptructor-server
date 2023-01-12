const router = require("express").Router();
const User = require("../models/User");
const Project = require("../models/Project");

const verifyToken = require("../utils/verifyToken");

//CHECK USER
router.post("/checkUser", async (req, res) => {
  const email = req.body.email;

  //Checking if user is already in the database

  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist) return res.status(200).send(true);
    return res.status(400).send(false);
  } catch (error) {
    return res.status(402).send(error);
  }
});

//REGISTER
router.post("/registerUser", async (req, res) => {
  const user = req.body.user;

  //Checking if user is already in the database
  const emailExist = await User.findOne({ email: user.email });
  if (emailExist) return res.status(400).send("Email already exists");
  console.log(user);
  //Create new user
  const userRegistered = new User({
    name: user.name,
    email: user.email,
    picture: user.picture,
    email_verified: user.email_verified,
    locale: user.locale,
  });
  try {
    const userSaved = userRegistered.save();
    if (userSaved) {
      return res.status(200).send("successfully saved");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/registerProject", async (req, res) => {
  const { email, name, country } = req.body;

  const user = await User.findOne({ email: email });

  //Create new project
  const projectRegistered = new Project({
    user_id: user._id,
    name: name,
    country: country,
  });
  try {
    const projectSaved = projectRegistered.save();
    if (projectSaved) {
      return res.status(200).send("successfully saved");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
