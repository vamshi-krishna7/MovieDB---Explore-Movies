import {POPULAR_MOVIES, CURRENTMOVIEINFO, SET_LOADING, GET_ACTORS_CREW, ADD_MORE_MOVIES, SEARCH_MOVIES, SET_SEARCH_VALUE} from './types';
import axios from 'axios';

export const popularMovies = () => async(dispatch) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    dispatch({
        type: POPULAR_MOVIES,
        payload: res.data
    })
}
// get details
export const CurrentMovieInformation = (id) => async(dispatch) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    SetLoading()
    dispatch({
        type: CURRENTMOVIEINFO,
        payload: res.data
    })
}

export const SetLoading = () => {
    return({
        type: SET_LOADING,
    })
}

//movies //get credits
export const getActorsAndCrew = (id) => async(dispatch) => {
    SetLoading();
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    dispatch({
        type: GET_ACTORS_CREW,
        payload: res.data
    })

}
// load more movies
export const loadMoreMovies = (page) => async(dispatch) => {
    SetLoading()
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page+1}`)
    
    dispatch({
        type: ADD_MORE_MOVIES,
        payload: res.data
    })
}

// git 
export const searchMovies = (searchTerm) => async(dispatch)=> {
    SetLoading()
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}`);
    dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
    })
}

export const setSearchValue = (searchValue) => async(dispatch) => {
    dispatch({
        type: SET_SEARCH_VALUE,
        payload: searchValue
    })
}