
import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import axios from 'axios';
import Reviews from './Reviews';


const RoomDetails = () => {


    const [posts, setPosts] = useState([])

    const [comment, setComment] = useState(false)

    const rooms = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [date, setDate] = useState(null)
    const { room_name,
        room_description,
        price_per_night,
        room_size,
        availability,
        special_offers,
        room_image1,
        room_image2,
        room_image3,
        room_image4, _id } = rooms || {};

    console.log(room_name);

    const handleBookNowClick = () => {
        if (user) {
            const data = {
                room_name,
                room_image1,
                price_per_night,
                date,
                email: user?.email
            }
            axios.post(`https://assignment-11-server-eight-lake.vercel.app/bookings`, data)
                .then(res => console.log(res.data))
            setComment(true)

            swal("Booked", "You book successfully", "success");

        } else {

            navigate('/login');
        }
    };

    const handleReview = (e) => {
        e.preventDefault();
        const userReview = e.target.review.value

        const reviewData = {
            userReview,
            room_id: _id
        }

        axios.post("https://assignment-11-server-eight-lake.vercel.app/reviews", reviewData)
            .then(res => console.log(res.data))
        swal("Review", "You review send successfully", "success");
        e.target.reset()
    }

    useEffect(() => {
        axios.get(`https://assignment-11-server-eight-lake.vercel.app/reviews/${_id}`)
            .then(res => setPosts(res.data))
        console.log(_id);
    }, [_id])

    return (
        <>
            <div className=' lg:flex justify-center gap-10 mt-8'>
                <div className='lg:w-[50%] h-full'>
                    <img className='rounded-xl' src={room_image1} alt="" />

                    <div className='mt-10'>
                        <div className="card  bg-neutral text-neutral-content space-y-8">
                            <div className="card-body">
                                <h2 className="card-title">{room_name}</h2>
                                <p className='w-[50%]'>{room_description}</p>
                                <p className='font-bold text-lg'><span className='font-bold text-xl underline'>Room Size:</span> {room_size}</p>
                                <p><span className='font-bold text-xl underline'>special offers:</span> <span className='w-[50%]'>{special_offers}</span></p>
                                <p className='font-bold text-lg'><span className='font-bold text-xl underline'>Price:</span> ${price_per_night}</p>
                                <input onChange={(e) => setDate(e.target.value)} className='text-black font-medium p-4 rounded-2xl' type="date" name="" id="" />


                                {date && <>
                                    <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Booking Summary</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box text-slate-900">
                                            <form method="dialog">

                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <img src={room_image1} alt="" />
                                            <h3 className="font-bold text-lg">{room_name}</h3>
                                            <p className="py-4">Total Price: ${price_per_night}</p>
                                            <p className='w-full'>Date:{date ? <p>{date}</p> : <p>Please select date</p>}</p>
                                        </div>
                                    </dialog>
                                </>
                                }


                                {
                                    date ? <div className="card-actions ">

                                        {availability === "available" ? <button onClick={handleBookNowClick} className="btn w-full btn-success btn-outline">Book now</button> :
                                            <button className="w-full  disabled">Sorry,room not available</button>
                                        }

                                    </div> :
                                        <button className="btn w-full btn-success btn-outline font-extrabold">Please select date</button>
                                }


                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-96 mb-4 rounded-lg' src={room_image2} alt="" />
                    <img className='w-96 mb-4 rounded-lg' src={room_image3} alt="" />
                    <img className='w-96 mb-4 rounded-lg' src={room_image4} alt="" />
                </div>

                {comment &&
                    <form onSubmit={handleReview}>
                        <input placeholder='Your Review' name='review' className='p-5 bg-slate-300 border-4 rounded-lg mb-4 border-black' type="text" />
                        <br />
                        <input className='btn btn-neutral btn-outline' type="submit" value="Post" />

                        <>
                            <p className="underline text-xl mb-3 mt-3">reviews:</p>
                            {posts.map(post => <Reviews key={post._id} post={post}></Reviews>)}
                        </>


                    </form>

                }
            </div>



        </>
    );
};

export default RoomDetails;