const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/Users"); // Assuming your user routes are in a separate file
const empRoutes = require("./routes/Emps"); // Create employee routes in a separate file
const app = express();
const apiV1 = express()
const PORT = 8089;

const uri = "mongodb+srv://mlbano26:mlbano26@cluster0.mdgarfi.mongodb.net/?retryWrites=true&w=majority";

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

// //Middleware for parsing JSON
app.use(express.json());

// // Routes
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

// app.use(express.json())
// app.use(express.urlencoded())


// app.use("/api/v1/",apiV1)
// apiV1.use("/api/v1/user", userRoutes);
// apiV1.use("/api/v1/emp", empRoutes);


// mongoose.Promise = global.Promise;

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Successfully connected to the database mongoDB Atlas Server");
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });


// app.route('/')
//     .get((req, res) => {
//         res.send("<h1>Milanie Bano - 101355992 - COMP3123 Assignment 1</h1>");
//     });


// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });