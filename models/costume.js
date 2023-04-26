const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
  hat_type: String,
  color: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
  price: {
    type: Number,
    min: 1,
    max: 1000
  }
});

module.exports = mongoose.model("Costume", costumeSchema);