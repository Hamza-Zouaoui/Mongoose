const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const ContactRoutes = require("./routes/contact");
require('dotenv').config();
connectDb();

app.use(express.json());

app.use("/api/contact", ContactRoutes);

app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`)
});