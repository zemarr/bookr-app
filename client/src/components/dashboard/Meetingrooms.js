import React, { Fragment, useState } from 'react';
import './dashboard.css';
import axios from 'axios';
import Button from '../buttons/Buttons';
import Roomdetails from '../roomDetails/Roomdetails'


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
                    <Roomdetails />
                </div>
                
            </div>
        </Fragment>
    )
}

const Marketingroom = () => {
    const [room1, setRoom1] = useState([])
  
    //function to call the room details api
    const getRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allRooms')
            console.log(response)
           const responseData = await response.data
           console.log(responseData)
          console.log(response.data)
            // set the state here
          setRoom1(responseData)
        } catch (error) {
            console.error(error);
          }
        }
     
    

    return (
        <div className='marketingbg'>
            <div className='overlay'>
                <p className='thumbName'>Marketing Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    click={getRooms}
                />  
            </div>
                 
            <div>
                {room1.map((rooms, i) => {
                    return (
                        //and  tried to display it here
                        <div key ={i}>
                            <p>{rooms.name}</p>
                        </div>
                    )
                })}
                </div> 
        </div>
    )
}

const Salesroom = () => {
    const getRooms = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/allRooms'
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className='salesbg'>
            <div className='overlay'>
                <p className='thumbName'>Sales Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    click={getRooms}
                />
            </div>
        </div>
    )
}

const Boardroom = () => {
    const getRooms = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/allRooms'
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className='boardbg'>
            <div className='overlay'>
                <p className='thumbName'>Board Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    click={getRooms}
                />
            </div>
        </div>
    )
}

const Techroom = () => {
    const getRooms = () => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/allRooms'
        })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div className='techbg'>
            <div className='overlay'>
                <p className='thumbName'>Tech Room</p>
                <Button
                    name='View details'
                    className='viewdetails'
                    click={getRooms}
                />
            </div>
        </div>
    )
}

export default MeetingRooms;