const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const moviesRoutes = require("./routes/moviesRoutes")

const app = express();


app.use(express.json());
app.use(cors());
app.use(moviesRoutes)
mongoose.connect("mongodb+srv://raidmefti:darkcrazymak@cluster0.dtypp.mongodb.net/exercise_movieWebsiteDB")

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000/");
})