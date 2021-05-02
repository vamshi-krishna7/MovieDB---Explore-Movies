import React from 'react';
import '../../app.css';
import {Link} from 'react-router-dom';

const PopularMoviesList = (props) => {
    const {id} = props.singleMovie;
    return (
            <div className="single-movie-card">
                <div className="single-movie-img-container">
                    <Link to={{pathname: `/movie/${id}`}}>
                        <img className="single-movie-img" src={`https://image.tmdb.org/t/p/w500${props.singleMovie.poster_path}`}/>
                    </Link>
                </div>
            </div>
    )
}

export default PopularMoviesList;