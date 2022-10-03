import './App.css';
import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox'; 
import AddFavourites from './components/AddFavourites'; 

const App = ()=>  {
  const [movies, setMovies] = useState([ ]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=308e0de5`;

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
};

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox  searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
      <MovieList movies = {movies} favouritieComponents={AddFavourites} />
      </div>
    </div>
    );
}

export default App;
