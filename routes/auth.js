
const router = require("express").Router();
//const User = require("../models/User");
//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
//const verifyToken = require("../utils/verifyToken");
//const { registerValidation, loginValidation } = require("../utils/validation");

router.get("/test", (req, res) => {
  res.send(true);
});

module.exports = router;