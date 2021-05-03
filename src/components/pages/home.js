import React, {useEffect, Fragment} from 'react';
import Banner from '../sections/banner';
import Loading from '../layout/loading';
import Popular from '../sections/popular';
import '../../app.css';

import {connect} from 'react-redux';
import {popularMovies, loadMoreMovies} from '../../actions/movieAction';

const Home = (props) => {
    const {popular, loading, heroImage, popularMovies} = props;
    
    useEffect(() => {
        popularMovies()
    }, [])
    
return (
    <Fragment>
        {
            loading === true || popular === null ?  <Loading /> : 
            (
                <Banner backgroundImg={`https://image.tmdb.org/t/p/w1280${heroImage.backdrop_path}`} />
            )
        }
        {
            loading === true ? null :  
            (
                <Popular popular={popular} />
            )
        }  
    </Fragment>
    )
}
const mapStateToProps = (state) => ({
    popular: state.movies.popular,
    loading: state.movies.loading,
    heroImage: state.movies.heroImage
})
export default connect(mapStateToProps, {popularMovies, loadMoreMovies})(Home);


