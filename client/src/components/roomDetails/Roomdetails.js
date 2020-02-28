// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Roomdetails() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {

//         const getSalesRoom = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/allRooms');
//             console.log(response);
//             const responseData = await response.data;
//             console.log(responseData);
//             const salesroomData = responseData[0];
//             let arr = []
//             arr.push(salesroomData);
//             console.log(arr);
//             // setRoom1(arr)
//         } catch (error) {
//             console.error(error);
//         }

       
//     }          
//     });
  
//     return (
//       <div>
//         { count}
    
//       </div>
//     );
//   }

//   export default Roomdetails




// import React, { useState, useEffect } from 'react';
// import { Card } from 'react-bootstrap';
// import axios from 'axios';
// import Button from '../buttons/Buttons'

// export default function Roomdetails() {
//     const [room1, setRoom1] = useState([]);


//     const getRooms = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/allRooms')
//             console.log(response)
//             const responseData = await response.data
//             console.log(responseData)
//             setRoom1(responseData)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     return (
//         <div>
//             <div>
//                 <Button
//                     name='View details'
//                     className='viewdetails'
//                     click={getRooms}
//                 />
//                 {room1.map((room, i) => {
//                     return (
//                         <Card style={{ margin: '5px' }}>
//                             <Card.Body>
//                                 <div key={i}>
//                                     <p>Room Name: {room.name}</p>
//                                     <p>Use: {room.use}</p>
//                                     <p>Projects: {room.projector}</p>
//                                     <p>Capacity:{room.capacity}</p>
//                                     <p>Camera:{room.camera}</p>
//                                     <p>Tv:{room.tv}</p>
//                                     <p>Games:{room.games}</p>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
