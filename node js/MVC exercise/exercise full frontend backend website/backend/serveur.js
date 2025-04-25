const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const movie = require('./models/movie')
const app = express()
const port = 8080
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://raidmefti:darkcrazymak@cluster0.dtypp.mongodb.net/exercise_movieWebsiteDB").then(()=>{
    console.log('connected succesfuly to the database');
})

app.get('/movie/:id', async(req, res) => {
    const id = req.params.id
    const data = await movie.findById(id)
    res.json(data)
})

app.post('/movie', async(req, res) => {
    console.log(req.body);
    const newMovie = await movie.create(req.body)
    res.json(newMovie)
})


app.listen(port , ()=>{
    console.log(`server is running at http://localhost:${port}`);
})