const express = require("express");
const moviesController  = require("../controllers/moviesController")

const router = express.Router();

router.post('/movies', moviesController.addMovie)
router.post('/emailPass', moviesController.MovieTitle)
router.get('/movies', moviesController.MovieList)
router.get('/emailPass', moviesController.Movie)
router.put('/movies', moviesController.updateMovie)
router.delete('/emailPass', moviesController.deleteMovie)

module.exports = router;