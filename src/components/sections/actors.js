import React from 'react';


const Actors = (props) => {
    const {actors} = props;
    return (
        <section className="actors-section">
            <h1 className="actor-section-heading">Actors</h1>
            <div className="actors-container">
            {
                actors.map((singleActor) => (
                <div className="actor-card" key={singleActor.id}>
                    <div className="actor-card-img-container">
                        <img src={`https://image.tmdb.org/t/p/w185${singleActor.profile_path}`} alt="actors-photo"/>
                    </div> 
                    <div className="actor-details">
                        <h2>{singleActor.name}</h2>
                        <h4>{singleActor.character}</h4>
                    </div>   
                </div>
                ))
            }
        </div>
            
                
            
        </section>
    )
}

export default Actors;