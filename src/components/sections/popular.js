import React, {useState} from 'react';
import {connect} from 'react-redux';
import PopularMoviesList from './popularMoviesList';
import '../../app.css';
import {loadMoreMovies, setSearchValue, searchMovies, popularMovies} from '../../actions/movieAction';

const Popular = (props) => {
    const {popular, loadMoreMovies, currentPage, searchMovies, setSearchValue, popularMovies, searchTerm} = props;

    const [search, setSearch] = useState('')
    const loadMore = () => {
        loadMoreMovies(currentPage)
    }
    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const onSearch = () => {
        if(search !== ''){
            setSearchValue(search)
            searchMovies(search) 
        }else {
            setSearchValue(search)
            popularMovies()
        }
    }
    return (
        <section className="popular-movies-section">
            <div className="search-input-container"> 
                <input type="text" onChange={onSearchChange} value={search} className="search-input"/>
                <button className="search-btn" onClick={onSearch}>Search</button>
            </div>
            
            {
                <h1 className="popular-section-heading">{searchTerm === "" ? 'Popular Movies' : `Top search results related to: ${searchTerm}`}</h1>
            }
            
            <div className="single-movie-container">
                {
                    popular === null ? null : popular.map((singleMovie) => 
                    <PopularMoviesList key={singleMovie.id} singleMovie={singleMovie} />
                    )
                }
            </div>
            {
                searchTerm !== '' ? null : <button className="load-more-btn" onClick={loadMore}>Load More...</button>
            }
            
        </section>
    )
}
const mapStateToProps = (state) => ({
    currentPage: state.movies.currentPage,
    searchTerm: state.movies.searchTerm
})
export default connect(mapStateToProps, {loadMoreMovies, searchMovies, setSearchValue, popularMovies})(Popular);