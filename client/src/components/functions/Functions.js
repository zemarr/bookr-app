import React, { Fragment, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Functions = () => {
  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
};

export function Getsalesroom() {
  const [salesroom, setSalesRoom] = useState([]);

  const getSalesRoom = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allRooms");
      console.log(response);
      const responseData = await response.data;
      console.log(responseData);
      const salesroomData = responseData[1];
      let arr = [];
      arr.push(salesroomData);
      console.log(arr);

      setSalesRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        {salesroom.map((room, i) => {
          return (
            <Card style={{ margin: "5px" }}>
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
          );
        })}
      </div>
    </div>
  );
}

// export const getSalesRoom = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/allRooms");
//     console.log(response);
//     const responseData = await response.data;
//     console.log(responseData);
//     const salesroomData = responseData[1];
//     let arr = [];
//     arr.push(salesroomData);
//     console.log(arr);
//   } catch (error) {
//     console.error(error);
//   }
// };

// Marketingroom

export default Functions;
