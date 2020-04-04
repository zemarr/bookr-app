import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';
import Navbar from '../home/Navbar';

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <div>
                        <Route path='/' exact component={Home} />
                        <Route path='/dashboard/mymeetings' exact component={Dashboard} />
                        <Route path='/dashboard/meetingrooms' exact component={Dashboard} />
                        <Route path='/dashboard/createmeeting' exact component={Dashboard} />
                    </div>
                </Switch>
            </Router>

        </Fragment>
    )
}

export default Routes;