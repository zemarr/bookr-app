import React, { Fragment } from 'react';
import cfr from './home.module.css';
import Button from '../buttons/Buttons';
import axios from 'axios';


const Conferencerooms = () => {
    return (
        <Fragment>
            <div className='container'>
                <Heading name='Conference rooms' />
                <Smallrooms />
            </div>
        </Fragment>
    )
}

export const Heading = (props) => {
    return (
        <Fragment>
            <h2 className={cfr.sectionheading}>{props.name}</h2>
        </Fragment>
    )
}

export const Smallrooms = () => {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <section className={cfr.meetingroominfo}>
                    <Info
                        name='Small Meeting rooms'
                        paragraph='The small meeting room contains less people, it contains maximum of 9 persons and a big table. Our meeting rooms are quite spacious and very comfortable with unique features that create the perfect environment for your meetings.'
                    />
                </section>
            </div>
            <div className='col-md-6'>
                <section className={cfr.roomthumbnails}>
                    <Roomthumbnails />
                </section>
            </div>
        </div>
    )
}

const Info = (props) => {
    return (
        <Fragment>
            <h4>{props.name}</h4>
            <p>{props.paragraph}</p>
        </Fragment>
    )
}

export const Roomthumbnails = () => {

    const getRooms = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/allRooms'
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };



    const thumbStyle = {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.46)',
        width: '100%',
        height: '100%',
        border: 'none',
        margin: '0'
    }
    const thumbName = {
        fontSize: '1.4rem',
        lineHeight: '25px',
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        width: '130px',
        position: 'absolute',
        left: '34px',
        top: '50px'
    }

    return (
        
        <Fragment>
            <div className={cfr.marketingbg}>
                <div style={thumbStyle}>
                    <p style={thumbName}>Marketing Room</p>
                    <Button
                        name='View details'
                        className='viewdetails'
                        click={getRooms}
                    />
                </div>
            </div>

            <div className={cfr.salesbg}>
                <div style={thumbStyle}>
                    <p style={thumbName}>Sales Room</p>
                    <Button
                        name='View details'
                        className='viewdetails'
                        click={getRooms}
                    />
                </div>
            </div>

            <div className={cfr.boardbg}>
                <div style={thumbStyle}>
                    <p style={thumbName}>Board Room</p>
                    <Button
                        name='View details'
                        className='viewdetails'
                        click={getRooms}
                    />
                </div>
            </div>

            <div className={cfr.techbg}>
                <div style={thumbStyle}>
                    <p style={thumbName}>Tech Room</p>
                    <Button
                        name='View details'
                        className='viewdetails'
                        click={getRooms}
                    />
                </div>
            </div>
            <Button
                name='View more'
                className='viewmore'
                click={getRooms}
            />
        </Fragment>
    )
}

export default Conferencerooms;