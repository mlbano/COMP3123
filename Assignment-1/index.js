const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/Users"); // Assuming your user routes are in a separate file
const empRoutes = require("./routes/Emps"); // Create employee routes in a separate file
const app = express();
const PORT = 8089;

const uri = "mongodb+srv://mlbano26:milanie123@cluster0.mdgarfi.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

//Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp", empRoutes);

app.route("/")
    .get((req, res) => {
        res.send("<h1>Milanie Bano - 101355992 - COMP3123 Assignment 1</h1>")
    })

//http://localhost:8089/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});