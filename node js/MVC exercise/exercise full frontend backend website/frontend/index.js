const axios = window.axios

const title = document.getElementById('title')
const releaseDate = document.getElementById('releaseDate')
const runtime = document.getElementById('runtime')
const language = document.getElementById('language')
const genre = document.getElementById('genre')
const rating = document.getElementById('rating')
const poster = document.getElementById('poster')


document.getElementById("btn").addEventListener('click', async() =>{
     console.log('hello');
    
     const data = {
        title : title.value,
        releaseDate : releaseDate.value,
        runtime: runtime.value,
        language: language.value,
        genre : genre.value,
        rating : rating.value,
        poster : poster.value,
    }
    console.log('aaa');

    console.log('nanani');


    try {
        const newMovie = await axios.post('http://localhost:8080/movie', data);
        console.log('Movie added successfully:', newMovie.data);
        alert('Movie added successfully!');
    } catch (error) {
        console.error('Error adding movie:', error.response?.data || error.message);
        alert('Failed to add the movie. Check the console for details.');
    }
})