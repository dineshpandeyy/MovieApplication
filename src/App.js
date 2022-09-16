import './App.css';
import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";


const App = ()=>  {
  const [movies, setMovies] = useState([ ]);

const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?s=avengers&apikey=308e0de5"

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  setMovies(responseJson.Search);
};

useEffect(()=>{
  getMovieRequest()
}, []);

  return (
    <div className='container-fluid movie-app'>
      <div className="row">
      <MovieList movies = {movies} />
      </div>
    </div>
    );
}

export default App;
