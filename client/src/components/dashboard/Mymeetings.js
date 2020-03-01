import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'

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
            </div>
        </Fragment>
    )
}

export default Mymeetings;
