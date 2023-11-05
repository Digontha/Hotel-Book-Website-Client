import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
    const rooms = useLoaderData()

    const { room_name,
        room_description,
        price_per_night,
        room_size,
        availability,
        special_offers,
        room_image1,
        room_image2,
        room_image3,
        room_image4 } = rooms || {};

    console.log(room_name);
    return (
        <>
            <div className=' flex justify-center gap-10 mt-8'>
                <div className='w-[50%] h-full'>
                    <img className='rounded-xl' src={room_image1} alt="" />

                    <div className='mt-10'>
                <div className="card  bg-neutral text-neutral-content space-y-8">
                    <div className="card-body">
                        <h2 className="card-title">{room_name}</h2>
                        <p className='w-[50%]'>{room_description}</p>
                        <p className='font-bold text-lg'><span  className='font-bold text-xl underline'>Room Size:</span> ${room_size}</p>
                        <p><span  className='font-bold text-xl underline'>special offers:</span> <span className='w-[50%]'>{special_offers}</span></p>
                        <p className='font-bold text-lg'><span  className='font-bold text-xl underline'>Price:</span> ${price_per_night}</p>
                        <div className="card-actions ">
                            {availability==="available"?<button className="btn w-full btn-success btn-outline">Book now</button>:
                            <button className="w-full  disabled">room not available</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
                </div>

                <div>
                    <img className='w-96 mb-4 rounded-lg' src={room_image2} alt="" />
                    <img className='w-96 mb-4 rounded-lg' src={room_image3} alt="" />
                    <img className='w-96 mb-4 rounded-lg' src={room_image4} alt="" />
                </div>
            </div>

            

        </>
    );
};

export default RoomDetails;