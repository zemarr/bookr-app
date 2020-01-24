import React, { Fragment } from 'react';
import Button from '../buttons/Buttons';
import hm from './home.module.css';
import Searchicon from '../../assets/img/search.svg';

const Navbar = () => {
    return (
        <Fragment>
            <nav className={hm.nav}>
                <h4>Book R</h4>
                <p>Plan a meeting</p>
                <p>Meeting rooms</p>
                <p>Check Availability</p>
                <div className={hm.navutils}>
                    <Button
                        name='Sign in'
                        className='signin'
                    />
                    <Button
                        name='Register'
                        className='signup'
                    />
                    <Search />
                </div>
            </nav>
        </Fragment>
    )
}

const Search = () => {
    return (
        <Fragment>
            <div className={hm.searchicon}>
                <img src={Searchicon} alt='search' style={{width: '100%', height: '100%'}}></img>
            </div>
        </Fragment>

    )
}

export default Navbar;