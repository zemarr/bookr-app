import React, { Fragment, useState } from "react";
import "./dashboard.css";
import Button from "../buttons/Buttons";
import { getSalesRoom } from "../functions/Functions";
import axios from "axios";
import { Card } from "react-bootstrap";

const MeetingRooms = () => {
  return (
    <Fragment>
      <div className="headings">
        <p>Select a meeting room</p>
      </div>
      <div className="meetingrooms">
        <div className="roomthumbnails">
          <Marketingroom />
          <Salesroom />
          <Boardroom />
          <Techroom />
        </div>
      </div>
    </Fragment>
  );
};

const Marketingroom = () => {
    const [marketingroom, setMarketingRoom] = useState([]);

  const getMarketingRoom = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allRooms");
      console.log(response);
      const responseData = await response.data;
      console.log(responseData);
      const marketingroomData = responseData[1];
      let arr = [];
      arr.push(marketingroomData);
      console.log(arr);

      setMarketingRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="salesbg">
      <div className="overlay">
        <p className="thumbName">Marketing Room</p>
        <Button
          name="View details"
          className="viewdetails"
          //  link='/roomdetails'
          click={getMarketingRoom}
        />
      </div>
      {marketingroom.map((room, i) => {
        return (
          <Card style={{ margin: "5px" }}>
            <Card.Body>
            <button  onClick={() => setMarketingRoom([])}>X</button>
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
  );
};

const Salesroom = () => {
  const [salesroom, setSalesRoom] = useState([]);

  const getSalesRoom = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allRooms");
      console.log(response);
      const responseData = await response.data;
      console.log(responseData);
      const salesroomData = responseData[0];
      let arr = [];
      arr.push(salesroomData);
      console.log(arr);

      setSalesRoom(arr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="salesbg">
      <div className="overlay">
        <p className="thumbName">Sales Room</p>
        <Button
          name="View details"
          className="viewdetails"
          //  link='/roomdetails'
          click={getSalesRoom}
        />
      </div>
      {salesroom.map((room, i) => {
        return (
          <Card style={{ margin: "5px" }}>
            <Card.Body>
            <button onClick={() => setSalesRoom([])}>X</button>
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
  );
};


const Boardroom = () => {
    const [boardroom, setBoardRoom] = useState([]);

    const getBoardRoom = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allRooms");
        console.log(response);
        const responseData = await response.data;
        console.log(responseData);
        const boardroomData = responseData[2];
        let arr = [];
        arr.push(boardroomData);
        console.log(arr);
  
        setBoardRoom(arr);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className="salesbg">
        <div className="overlay">
          <p className="thumbName">Board Room</p>
          <Button
            name="View details"
            className="viewdetails"
            //  link='/roomdetails'
            click={getBoardRoom}
          />
        </div>
        {boardroom.map((room, i) => {
          return (
            <Card style={{ margin: "5px" }}>
              <Card.Body>
              <button  onClick={() => setBoardRoom([])}>X</button>
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
    );
};

const Techroom = () => {
    const [techroom, setTechroom] = useState([]);

    const getTechRoom = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allRooms");
        console.log(response);
        const responseData = await response.data;
        console.log(responseData);
        const techroomData = responseData[3];
        let arr = [];
        arr.push(techroomData);
        console.log(arr);
  
        setTechroom(arr);
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className="salesbg">
        <div className="overlay">
          <p className="thumbName">Tech Room</p>
          <Button
            name="View details"
            className="viewdetails"
            //  link='/roomdetails'
            click={getTechRoom}
          />
        </div>
        {techroom.map((room, i) => {
          return (
            <Card style={{ margin: "5px" }}>
              <Card.Body>
              <button onClick={() => setTechroom([])}>X</button>
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
    );
};

export default MeetingRooms;
