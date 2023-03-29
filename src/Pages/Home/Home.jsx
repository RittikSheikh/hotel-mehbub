import React from 'react';
import './Home.css';
import bgImg from '../../assets/images/img5.jpg';


const Home = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='hero-content text-center text-neutral-content'>
                    <div className="max-w-md text-neutral-content">
                        <h1 className="mb-5 text-5xl font-bold leading-tight">Enjoy Your Dream Vacation</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn glass hover:btn-primary">view offers</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;