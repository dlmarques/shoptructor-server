const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    validate:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,1024}$/,
    },
    projectName: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    country: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
});

module.exports = mongoose.model("User", userSchema);
