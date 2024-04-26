const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true, // Ensure email is unique
        required: true // Ensure email is present
    },
    password: String
});

const UserModel = mongoose.model("users", UserSchema); // Renamed the model
module.exports = UserModel;