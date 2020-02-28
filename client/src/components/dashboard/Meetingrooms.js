import React, { Fragment } from 'react';
import './dashboard.css';
import Button from '../buttons/Buttons';
import { getSalesRoom } from '../functions/Functions';


const MeetingRooms = () => {

    return (
        <Fragment>
            <div className='headings'>
                <p>Select a meeting room</p>
            </div>
            <div className='meetingrooms'>
                <div className='roomthumbnails'>
                    <Marketingroom />
                    <Salesroom />
                    <Boardroom />
                    <Techroom />
                </div>
            </div>
        </Fragment>
    )
}

const Marketingroom = () => {
    return (
        <div className='marketingbg'>
            <div className='overlay'>
                <p className='thumbName'>Marketing Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    link='/roomdetails'
                />
            </div>
        </div >
    )
}

const Salesroom = () => {

    return (
        <div className='salesbg'>
            <div className='overlay'>
                <p className='thumbName'>Sales Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    link='/roomdetails'
                    click={getSalesRoom}
                />
            </div>
        </div>
    )
}

const Boardroom = () => {

    return (
        <div className='boardbg'>
            <div className='overlay'>
                <p className='thumbName'>Board Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    link='/roomdetails'
                    click={getSalesRoom}
                />
            </div>
        </div>
    )
}

const Techroom = () => {

    return (
        <div className='techbg'>
            <div className='overlay'>
                <p className='thumbName'>Tech Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    link='/roomdetails'
                    click={getSalesRoom}
                />
            </div>
        </div>
    )
}

export default MeetingRooms;