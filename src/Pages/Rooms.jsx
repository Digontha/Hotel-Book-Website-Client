import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';



const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [price, setPrice] = useState(" ")
    
    console.log(price);

    console.log(rooms);
    useEffect(() => {
        axios.get(`http://localhost:5000/rooms?sortField=price_per_night&sortOrder=${price}`)
            .then(res => setRooms(res.data))
    }, [price])
    return (
        <>
            <div className='text-center mt-4'>
                <select 
                className='input input-bordered'
                onChange={(e)=>setPrice(e.target.value)}
                >
                    <option disabled selected >Price Filter</option>
                     <option value="asc">From low to high</option>
                     <option value="desc">From high to low</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto mt-20'>
                {
                    rooms.map(room => <RoomCard  key={room._id} room={room}></RoomCard>)
                }
            </div>
        </>
    );
};

export default Rooms;