import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';



const Rooms = () => {
    const [rooms, setRooms] = useState([])
    console.log(rooms);
    useEffect(() => {
        axios.get("http://localhost:5000/rooms")
            .then(res => setRooms(res.data))
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto mt-20'>
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </>
    );
};

export default Rooms;