const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true, // Ensure email is unique
        required: true // Ensure email is present
    },
    password: String
});

const AdminUserModel = mongoose.model("users", AdminUserSchema); // Renamed the model
module.exports = AdminUserModel;