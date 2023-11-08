import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { price_per_night, room_name, room_image1,_id } = room || {};
    const [review,setReview]=useState([])

    useEffect(()=>{
        axios.get(`https://assignment-11-server-eight-lake.vercel.app/reviews/${_id}`)
        .then(res => setReview(res.data))
        console.log(_id);
    },[_id])

    return (
        <Link to={`/details/${_id}`}>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={room_image1}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 underline font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {room_name}
                    </h5>
                    <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                        Price: ${price_per_night}
                    </p>
                    <p className="block font-sans font-bold text-base antialiased  leading-relaxed text-inherit">
                        review:{review?.length}
                    </p>
                </div>
                
            </div>
        </Link>
    );
};

export default RoomCard;