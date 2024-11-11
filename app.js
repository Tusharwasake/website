let currentPage =1;
const MoviePerPage =5;
let movieData =[];
const movieGrid = document.getElementById("movieGrid");
const pageIndicator = document.getElementById("pageIndicator")
const sortSelect = document.getElementById("sort")
const previousPageButton = document.getElementById("prevPage")
const nextPageButton = document.getElementById("nextPage")



document.addEventListener("DOMContent",function(){
    fetchMovies();
})



function fetchMovies(){ 
    const movieGrid =  document.getElementById("movieGrid")
}


fetch("https://masai-77215-default-rtdb.firebaseio.com/movies.json")
    .then((response) => response.json())
    .then((data) => {
        movies = data;
        renderMovieGrid(movies);
        newgenreFilter(movies)
    })
    .catch((error) => console.error(error));


function newgenreFilter(movies){
    const genreSet = new Set();
    movies.forEach(movie => genreSet.add(movie.genre));

    const genreFilter = document.getElementById("genreFilter")

    genreSet.forEach(genre=>{
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
    genreFilter.appendChild(option)
    })
}

function renderMovieGrid(movies){

    const movieGrid =  document.getElementById("movieGrid");
    

    movies.forEach(movie => {
        const movieCard = document.createElement("div")
        movieCard.classList.add("movie-card"); 
        movieCard.innerHTML =`
    
        <img src="https://dummyimage.com/700x400/000/fff" alt="${movies}" class="movies-thumbnail>
            <div class="movi-info">
                <p>${movie.genre}</p>
                <p>${movie.rating}</p>
                <p>${movie.director}</p>
                <p>${movie.duration}</p>
                <p>${movie.release_date}</p>
            </div>
            
        `;

        movieGrid.appendChild(movieCard)
    });

}


function viewDetails(index){
    window.location.href =`movie-deatil.html?movieIndex=${index}`;
}



