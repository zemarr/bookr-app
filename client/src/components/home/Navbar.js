import React, { Fragment } from 'react';
import hm from './home.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <nav className={hm.nav}>
                <Link to='/'>
                    <h4>Book-R</h4>
                </Link>
                <Link to='/dashboard/meetingrooms'>
                    <p>Meeting rooms</p>
                </Link>
                <Link to='/checkavailability'>
                    <p>Check Availability</p>
                </Link>
                {/* <div className={hm.navutils}>
                    <Button
                        name='Sign in'
                        className='signin'
                    />
                    <Button
                        name='Register'
                        className='signup'
                    />
                </div> */}
            </nav>
        </Fragment>
    )
}

export default Navbar;