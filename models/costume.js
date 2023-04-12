const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
    hat_type: String,
    color: String,
    price: Number
});

module.exports = mongoose.model("Costume", costumeSchema);
