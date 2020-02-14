import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MeetingRooms from '../meetings/Meetingrooms';
import Home from '../home/Home';

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <div>
                        <Route path='/' exact component={Home} />
                        <Route path='/meetingrooms' component={MeetingRooms} />
                    </div>
                </Switch>
            </Router>

        </Fragment>
    )
}

export default Routes;