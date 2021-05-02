import React from 'react';
import {Link} from 'react-router-dom';
import '../../app.css';

const Banner = (props) => {
    const {backgroundImg} = props;
    return (
            <section className="banner"
            style = {{ backgroundImage: 
                `linear-gradient(to bottom , rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0.1) 41%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 1) 100%),
                 url('${backgroundImg}')`
                }}>
                <div className="container">
                    <h1 className="banner-header">
                        <div>
                            <span className="banner-header-ln-1">Welcome.</span>
                        </div>
                        <div>
                            <span className="banner-header-ln-2">Millions of movies to Explore</span>
                        </div>
                    </h1>
                    <div className="banner-btn-container">
                        <button><Link to="/about">Know More</Link></button>
                    </div>
                </div>
            </section>
    )
}

export default Banner;

// 'W1280' 
