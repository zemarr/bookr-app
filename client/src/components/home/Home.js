import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Conferencerooms from './Conferencerooms';
import Features from './Features';
import Support from './Support';
import Footer from './Footer';
// import Routing from '../navigation/Routes'

const Home = () => {
    return (
        <Fragment>
            <div>
                <Navbar />
                <Hero />
                <Conferencerooms />
                <Features />
                <Support />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home;