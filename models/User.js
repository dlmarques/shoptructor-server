const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  picture: {
    type: String,
    required: false,
  },
  email_verified: {
    type: Boolean,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
