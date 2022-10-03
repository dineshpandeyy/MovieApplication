import React from 'react';

const MovieList = (props) => {
    const FavouritieComponents = props.favouritieComponents;

    return (
        <>
        {props.movies.map((movie, index)=> (
        <div className="img-container d-flex justify-content-start m-3">
            <img src= {movie.Poster} alt="movie"></img>
            <div className='overlay d-flex align-items-center justify-content-center'>
                <FavouritieComponents/>
            </div>
        </div>))}
        </>
    )
}

export default MovieList;