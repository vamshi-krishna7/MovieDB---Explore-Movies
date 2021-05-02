import React from 'react';


const MovieInfoBar = (props) => {

    const {runtime, budget} = props.CurrentMovieInfo;
    return (
        <div className="movie-info-details">
            <div>
                <p>Running Time: {runtime} mins</p>
            </div>
            <div>
                <p>Budget: ${budget} </p>
            </div>
        </div>
    )
}

export default MovieInfoBar;