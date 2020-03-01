import React, { Fragment } from 'react';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

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
            </div>
        </Fragment>
    )
}

export default Mymeetings;
