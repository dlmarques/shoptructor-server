const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    min: 6,
  },
  name: {
    type: String,
    required: true,
    min: 6,
  },
  country: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model("Project", projectSchema);
