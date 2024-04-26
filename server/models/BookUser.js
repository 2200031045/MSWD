const mongoose = require('mongoose');

const BookUserSchema = new mongoose.Schema({ 
    name: String,
    email: {
        type: String,
        unique: true, // Ensure email is unique
        required: true // Ensure email is present
    },
    checkInDate: Date,
    checkOutDate: Date,
    roomType: String
});

const BookUserModel = mongoose.model("bookusers", BookUserSchema); 
module.exports = BookUserModel;