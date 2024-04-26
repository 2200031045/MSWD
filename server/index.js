const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserModel = require('./models/User');
const BookUserModel = require('./models/BookUser');

const app = express();
app.use(cors());
app.use(express.json());
dotEnv.config();

mongoose.connect("mongodb://127.0.0.1:27017/user", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.status(401).json({error: "Incorrect password!!"});

            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Internal Server Error");
    }
});

// app.post('/signup', async (req, res) => {
//     try {
//         const newUser = await UserModel.create(req.body);
//         res.status(201).json(newUser);
//     } catch (error) {
//         console.error("Error during signup:", error);
//         res.status(500).json("Internal Server Error");
//     }
// });

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "Email is already in use!!" });
        }
        if (password.length < 8) {
            return res.status(409).json({ error: "Password should be at least 8 characters long!" });
        }
        const newUser = await UserModel.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json("Internal Server Error");
    }
});


app.post('/Book', async (req, res) => {
    try {
        const newBookUser = await BookUserModel.create(req.body);
        res.status(201).json(newBookUser);
    } 
    catch (error) {
        console.error("Error during booking:", error);
        res.status(500).json({ error: "Already user booked!!" });
    }
});


const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`);
});