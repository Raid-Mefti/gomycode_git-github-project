const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const movie = require("./models/movie.js")

app.use(cors())
app.use(express.json());

require("dotenv").config();



mongoose.connect(`mongodb+srv://raidmefti:${process.env.PASSWORD}@cluster0.dtypp.mongodb.net/exercise_movieWebsiteDB`).then(()=>{
    console.log('connected succesfuly to the database');
})


app.get('/movies', async (req, res) => {
    try {
        const movies = await movie.find(); // Query the database
        res.json(movies); // Send the data as JSON
    } catch (err) {
        res.status(500).send("Server error");
    }
});

app.post("/movies", async(req, res) => {
    console.log(req.body);
    const newMovie = await movie.create(req.body)
    res.json(newMovie)
})




app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
})