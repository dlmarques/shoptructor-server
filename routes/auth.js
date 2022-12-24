const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const verifyToken = require("../utils/verifyToken");
const { registerValidation, loginValidation } = require("../utils/validation");

router.get("/test", (req, res) => {

    res.send(true);
});

router.post("/register", async (req, res) => {
    const { username, email, password, projectName, country } = req.body;
    const { error } = registerValidation(req.body);

    if (error) return res.status(400).send(error);

    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) return res.status(400).send("Username already exists");

    //Checking if user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const user = new User({
        username: username,
        email: email,
        password: hashedPassword,
        projectName: projectName,
        country: country
    });

    try {
        const userSaved = user.save();
        if (userSaved) res.status(200).send("user saved!");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
