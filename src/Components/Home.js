import React, { useEffect, useState } from 'react'

function Home() {

    const [moviesList, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=5808cad420af760ef58c05a9f4aac167')
        .then((response) => response.json())
        .then((moviesList) => setMovies(moviesList.results))
    },[])
    console.log(moviesList)
  return (
    <div className='container'>
      {moviesList.map((movie) => (
        <div>
        <h2 className='movie-title'>{movie.title}</h2>

        <div className='movie-card'>
        <img className='movie-poster' key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='New Movie'/>

        <p className='movie-overview'> <strong>Overview:</strong> {movie.overview}</p>
        <p> <strong>Popularity:</strong> {movie.popularity}</p>
        </div>
        </div>
      ))}
      
     
    </div>
  )
}

export default Home
