// script.js

// API endpoint
const API_URL = "http://localhost:5000/movies";

async function getMovies(){
    const response = await fetch(API_URL);
    const movies = await response.json();

    const movieList = document.getElementById("movie-list")
    movieList.innerHTML = "";

    movies.forEach((movie) => {

        movieList.innerHTML += `
        <div class="movie">
            <img class="movie_poster" src="${movie.poster}" alt="${movie.title} >
            <div class="movie_info">
                <h2>${movie.title}</h2>
                <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
                <p><strong>Runtime:</strong> ${movie.runtime}</p>
                <p><strong>Language:</strong> ${movie.language}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p class="rating"><strong>Rating:</strong> ${movie.rating}</p>
            </div>
        </div>
    `;
        

    })
}



// Fetch movies and update the DOM
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const movies = await response.json(); // Parse JSON response

        const movieList = document.getElementById("movie-list");
        movieList.innerHTML = ""; // Clear any existing content

        // Loop through movies and create HTML elements for each
        movies.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");

            movieDiv.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title} class="movie_poster">
                <div class="movie-info">
                    <h2>${movie.title}</h2>
                    <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
                    <p><strong>Runtime:</strong> ${movie.runtime}</p>
                    <p><strong>Language:</strong> ${movie.language}</p>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p class="rating"><strong>Rating:</strong> ${movie.rating}</p>
                </div>
            `;

            movieList.appendChild(movieDiv);
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Call the function to fetch and display movies
getMovies();
