import React, { Fragment } from 'react';
import './meetings.css';


const MeetingRooms = () => {
    return (
        <Fragment>
            <div className='container-fluid' style={{ padding: '0' }}>
                <div className='row'>
                    <Sidebar />
                    <Allrooms />
                </div>
            </div>
        </Fragment>
    )
}

const Sidebar = () => {
    return (
        <Fragment>
            <div className='col-md-3 roomsidebar'>
                <p>sidebar</p>
            </div>
        </Fragment>
    )
}

const Allrooms = () => {
    return (
        <Fragment>
            <div className='col-md-9'>
                <div className='headings'>
                    <p>Select a meeting room</p>
                </div>
                <div className='meetingrooms'>
                    <p>Avaiable spaces</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MeetingRooms;