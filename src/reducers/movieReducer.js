import {POPULAR_MOVIES, CURRENTMOVIEINFO, SET_LOADING, GET_ACTORS_CREW, ADD_MORE_MOVIES, SEARCH_MOVIES, SET_SEARCH_VALUE} from '../actions/types';

const initialState = {
    loading: true,
    popular: null,
    heroImage: null,
    currentPage: 1,
    totalPage: 0,
    searchTerm: '',
    CurrentMovieInfo: null,
    actors: null,
    director: null,
}

export default (state=initialState, action) => {
    switch(action.type) {

        case POPULAR_MOVIES:
        return {
            ...state,
            popular: action.payload.results,
            loading: false,
            heroImage: action.payload.results[11],
            currentPage: action.payload.page,
            totalPage: action.payload.total_pages
        }
        case CURRENTMOVIEINFO:
            return {
                ...state,
                CurrentMovieInfo: action.payload,
                loading: false
            }
            case SET_LOADING:
                return {
                    ...state,
                    loading: true
                }
            case GET_ACTORS_CREW:
                const actors = action.payload.cast.filter((singleActor, id) => id < 10).map((singleActor) => {
                    return singleActor
                })
                const director = action.payload.crew.filter((singleCrew) => singleCrew.job === "Director")
                return {
                    ...state,
                    loading: false,
                    actors: actors,
                    director: director[0]
                }
            case ADD_MORE_MOVIES:
                return{
                    ...state,
                    loading: false,
                    popular: [...state.popular, ...action.payload.results],
                    currentPage: action.payload.page
                }
            case SEARCH_MOVIES:
                return {
                    ...state,
                    loading: false,
                    popular: action.payload
                }
            case SET_SEARCH_VALUE:
                return {
                    ...state,
                    searchTerm: action.payload
                }
        default: 
            return {
                ...state
            }
    }
}