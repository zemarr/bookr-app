import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../home/Navbar';
import Hero from '../home/Hero';
import Conferencerooms from '../home/Conferencerooms';
import Features from '../home/Features';
import Support from '../home/Support';
import Footer from '../home/Footer';

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <div>
                    <Navbar />
                    <Hero />
                    <Conferencerooms />
                    <Features />
                    <Support />
                    <Footer />
                </div>
            </Router>

        </Fragment>
    )
}

export default Routes;