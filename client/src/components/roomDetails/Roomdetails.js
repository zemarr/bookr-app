import React, { useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

export default function Roomdetails() {
    const [room1, setRoom1] = useState([]);
    const [room2, setRoom2] = useState([]);
    const [room3, setRoom3] = useState([]);
    const [room4, setRoom4] = useState([]);

    const getRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allRooms')
            console.log(response)
           const responseData = await response.data
           console.log(responseData)
          setRoom1(responseData)
        } catch (error) {
            console.error(error);
          }
        }
    return (
        <div>
            <div>
            <button onClick={getRooms}>Room1</button>
            {room1.map((room, i) => {
                return(
                    <Card style={{ margin: '5px'}}>
                    <Card.Body>
                    <div key={i}>
                     <p>Room Name: {room.name}</p>
                        <p>Use: {room.use}</p>
                        <p>Projects: {room.projector}</p>
                        <p>Capacity:{room.capacity}</p>
                        <p>Camera:{room.camera}</p>
                        <p>Tv:{room.tv}</p>
                        <p>Games:{room.games}</p>
                    </div>
                    </Card.Body>
                    </Card>
                )
            })}
            </div>
        </div>
    )
}
