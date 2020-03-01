<<<<<<< HEAD
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
=======
import React, { Fragment } from 'react';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
>>>>>>> 6a7630a8b041f00b3ad112d1fbdbc94c2e744a78

const Mymeetings = () => {
    const [booked, setBooked] = useState([]);

    useEffect( () => {
        const getMyMeeting = async () => {
            try {
              const response = await axios.get("http://localhost:5000/api/roombookings");
              const responseData = await response.data;
              console.log(responseData);
              const meetingRoom = responseData;
              console.log(meetingRoom); 
              setBooked(meetingRoom);
            } catch (error) {
              console.error(error);
            }         
        }
        getMyMeeting()
    },[])
    
   
    
    return (
        <Fragment>
<<<<<<< HEAD
            <div>

                {booked.map((booked, i) => {
                    return (
                        <Card style={{ margin: '5px' }}>
                            <Card.Body>
                                <div key={i}>
                                    <p>Meeting Title: {booked.meetingTitle}</p>
                                    <p>Description: {booked.description} </p>
                                    <p>Date: {booked.startDate}</p>
                                   
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
=======
            <div className='mymeetings container-fluid'>
                <p>Scheduled meetings</p>
                <div className="card w-75 customcard">
                    <div className="card-body customcard">
                        <div className='utilityicons'>
                            <TiPencil className='edit' /> <AiOutlineClose className='close' />
                        </div>
                        <h5 className="card-title">Meeting name</h5>
                        <p className="card-text">Meeting description</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const Mymeetings2 = () => {
    return (
        <Fragment>
            <div className='mymeetings container-fluid'>
                <p>Scheduled meetings</p>
                <div className="card w-75 customcard">
                    <div className="card-body customcard">
                        <div className='utilityicons'>
                            <TiPencil className='edit' /> <AiOutlineClose className='close' />
                        </div>
                        <h5 className="card-title">Meeting name</h5>
                        <p className="card-text">Meeting description</p>
                    </div>
                </div>
>>>>>>> 6a7630a8b041f00b3ad112d1fbdbc94c2e744a78
            </div>
        </Fragment>
    )
}

export default Mymeetings;
