import React, { useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import {CurrentMovieInformation, getActorsAndCrew} from '../../actions/movieAction';
import Loading from '../layout/loading';
import MovieInfoBar from '../sections/movieInfoBar';
import Actors from '../sections/actors';

const MoviePage = (props) => {
    const {CurrentMovieInformation, getActorsAndCrew, CurrentMovieInfo, loading, actors, director} = props;
    
    useEffect(() => {
        CurrentMovieInformation(props.match.params.id)
        getActorsAndCrew(props.match.params.id)
    }, [])
    
    return (
            loading === true || CurrentMovieInfo === null || actors === null ? <Loading /> :
            (
            <Fragment>
                <section className="movie-info-section" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${CurrentMovieInfo.backdrop_path}')`}} alt="movie-poster">
                    <div className="movie-info-container">
                        <div className="movie-info-image-container">
                            <img src={`https://image.tmdb.org/t/p/w1280${CurrentMovieInfo.poster_path}`} alt="movie-poster"/>
                        </div>
                        <div className="movie-info">
                            <h1>{CurrentMovieInfo.original_title}</h1>
                            <h3>PLOT</h3>
                            <p>{CurrentMovieInfo.overview}</p>
                            <h3>IMDB Rating</h3>
                            <div className="rmdb-rating">
                                <meter min="0" max="100" optimum="100" low="40" high="70" value={CurrentMovieInfo.vote_average * 10}></meter>
                                <span className="rmdb-score">{CurrentMovieInfo.vote_average * 10}%</span>
                            </div>
                            <h3>DIRECTOR</h3>
                            <p>{director.name}</p>
                        </div>
                    </div>
                    <MovieInfoBar CurrentMovieInfo={CurrentMovieInfo}/>
                </section>
                <Actors actors={actors}/>
            </Fragment>
            )
    )
    
}
const mapStateToProps = (state) => ({
    loading: state.movies.loading,
    CurrentMovieInfo: state.movies.CurrentMovieInfo,
    actors: state.movies.actors,
    director: state.movies.director
})

export default connect(mapStateToProps, {CurrentMovieInformation, getActorsAndCrew})(MoviePage);
