const mongoose = require("mongoose")

module.exports = mongoose.model('Movie',{
    title : String,
    releaseDate : String,
    runtime: String,
    language: String,
    genre : String,
    rating : String,
    poster : String
})