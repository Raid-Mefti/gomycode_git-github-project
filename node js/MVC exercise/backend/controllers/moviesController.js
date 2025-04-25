const Movie = require("../models/movie")

exports.addMovie = async(req, res) => {
    const movie = await Movie.create(req.body);
    res.json(movie);
};

exports.MovieList = async(req, res) => {
    const data = req.body
    const movie = await Movie.findOne(data);
    res.json(movie);
};

exports.MovieTitle = async(req, res) => {
    const movie = await Movie.findOne(req.body);
    res.json(movie);
};

exports.Movie = async(req, res) => {
    const id = req.params.id
    const Movie = await Movie.findById(id);
    res.json(Movie);
}

exports.updateMovie = async(req, res) => {
    const neww = await User.findByIdAndUpdate(req.body.id , req.body , {
        new : true
    });
    res.json(neww);
};

exports.deleteMovie = async(req, res) => {
    const delet = await User.findByIdAndDelete(req.body.id , req.body);
    res.json(delet);
};

