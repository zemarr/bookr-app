import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Navbar from '../home/Navbar';
import Booking from '../dashboard/Booking';

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <div>
                        <Route path='/' exact component={Home} />
                        <Route path='/dashboard/meetingrooms' component={Dashboard} />
                        {/* <Route path='/dashboard/meetingrooms/createmeeting' compnent={Booking} /> */}
                    </div>
                </Switch>
            </Router>

        </Fragment>
    )
}

export default Routes;