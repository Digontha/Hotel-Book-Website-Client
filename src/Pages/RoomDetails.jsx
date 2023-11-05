
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';


const RoomDetails = () => {
    const rooms = useLoaderData()
   const {user} = useContext(AuthContext)
   const navigate = useNavigate()
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

    const handleBookNowClick = () => {
        if (user) {
            swal("Logged", "You book successfully", "success");
        } else {
            // User is not authenticated, redirect to the login page
            navigate('/login');
        }
    };

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
                                <p className='font-bold text-lg'><span className='font-bold text-xl underline'>Room Size:</span> {room_size}</p>
                                <p><span className='font-bold text-xl underline'>special offers:</span> <span className='w-[50%]'>{special_offers}</span></p>
                                <p className='font-bold text-lg'><span className='font-bold text-xl underline'>Price:</span> ${price_per_night}</p>
                                 <input className='text-black font-medium p-4 rounded-2xl' type="date" name="" id="" />
                                    <div className="card-actions ">

                                        {availability === "available" ? <button onClick={handleBookNowClick} className="btn w-full btn-success btn-outline">Book now</button> :
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