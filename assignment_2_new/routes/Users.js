const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

//User Registration with Password Hashing
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password
        });

        const savedUser = await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: savedUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering" });
    }
});