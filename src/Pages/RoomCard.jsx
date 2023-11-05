import React from 'react';

const RoomCard = ({ room }) => {
    const { price_per_night, room_name, room_image1 } = room || {};

    return (
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
            </div>
            <div className="p-6 pt-0">
                <button
                    className="btn btn-outline btn-neutral"
                >
                   Book now
                </button>
            </div>
        </div>
    );
};

export default RoomCard;