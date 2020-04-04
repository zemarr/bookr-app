import React, { Fragment, useState } from 'react';
import cfr from './home.module.css';
import Button from "../buttons/Buttons";
import axios from "axios";
import { GoDeviceDesktop } from 'react-icons/go';
import { IoLogoGameControllerB } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';


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
                    {/* <Roomthumbnails /> */}
                    <Marketingroom />
                    <Salesroom />
                    <Boardroom />
                    <Techroom />
                </section>
            </div>
        </div>
    )
}



export const Marketingroom = () => {
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
        <div className="marketingbg">
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
                    <div class='custommodal cm0'>
                        <div onClick={() => setMarketingRoom([])} className='closebtn'>
                            <AiOutlineClose />
                        </div>
                        <div key={i} class='modal-box'>
                            <div className='roomdetails container'>
                                <p className='roomheading'>{room.name}</p>
                                <div className='mr-bg'> </div>
                                <div className='roomdescription'>
                                    <p>Room Description</p>
                                    <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                                        This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                                    <hr />
                                    <p>Amenities</p>
                                    <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                                    <hr />
                                    <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                                    <Button
                                        link='/dashboard/createmeeting'
                                        className='bookmeetingroom'
                                        // click={}
                                        name='Book meeting room'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};





export const Salesroom = () => {
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
                    click={getSalesRoom}
                />
            </div>
            {salesroom.map((room, i) => {
                return (
                    <div class='custommodal cm1'>
                        <div onClick={() => setSalesRoom([])} className='closebtn'>
                            <AiOutlineClose />
                        </div>
                        <div key={i} class='modal-box'>
                            <div className='roomdetails container'>
                                <p className='roomheading'>{room.name}</p>
                                <div className='sr-bg'> </div>
                                <div className='roomdescription'>
                                    <p>Room Description</p>
                                    <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                                        This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                                    <hr />
                                    <p>Amenities</p>
                                    <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                                    <hr />
                                    <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                                    <Button
                                        link='/dashboard/createmeeting'
                                        className='bookmeetingroom'
                                        // click={}
                                        name='Book meeting room'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};




export const Boardroom = () => {
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
        <div className="boardbg">
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
                    <div class='custommodal cm2'>
                        <div onClick={() => setBoardRoom([])} className='closebtn'>
                            <AiOutlineClose />
                        </div>
                        <div key={i} class='modal-box'>
                            <div className='roomdetails container'>
                                <p className='roomheading'>{room.name}</p>
                                <div className='br-bg'> </div>
                                <div className='roomdescription'>
                                    <p>Room Description</p>
                                    <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                                        This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                                    <hr />
                                    <p>Amenities</p>
                                    <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                                    <hr />
                                    <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                                    <Button
                                        link='/dashboard/createmeeting'
                                        className='bookmeetingroom'
                                        // click={}
                                        name='Book meeting room'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};




export const Techroom = () => {
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
        <div className="techbg">
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
                    <div class='custommodal cm3'>
                        <div onClick={() => setTechroom([])} className='closebtn'>
                            <AiOutlineClose />
                        </div>
                        <div key={i} class='modal-box'>
                            <div className='roomdetails container'>
                                <p className='roomheading'>{room.name}</p>
                                <div className='tr-bg'> </div>
                                <div className='roomdescription'>
                                    <p>Room Description</p>
                                    <p>This meeting room is mainly for {room.use} use only. It has a capacity of {room.capacity} with a seating arrangement comfortable enough for all your {room.use} meetings. <br />
                                        This {room.capacity} seater meeting room is located on the last floor, top right of the building.<br /> </p>
                                    <hr />
                                    <p>Amenities</p>
                                    <p>The room comprises of well-furnished seats for {room.capacity}, {room.projector} projector, {room.camera} security camera and a large rectangular table in between to ensure proper meeting amongst co-workers. <br /></p>
                                    <hr />
                                    <GoDeviceDesktop />&nbsp; &nbsp; &nbsp;None<br /><IoLogoGameControllerB />&nbsp; &nbsp; &nbsp;None<br />
                                    <Button
                                        link='/dashboard/createmeeting'
                                        className='bookmeetingroom'
                                        // click={}
                                        name='Book meeting room'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};




const Info = (props) => {
    return (
        <Fragment>
            <h4>{props.name}</h4>
            <p>{props.paragraph}</p>
        </Fragment>
    )
}



export default Conferencerooms;