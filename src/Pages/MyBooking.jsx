import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookingCard from './BookingCard';
import swal from 'sweetalert';

const MyBooking = () => {

    const [bookings, setBookings] = useState([]);
    // console.log(bookings);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => setBookings(res.data))
    }, [user.email])

    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/bookings/update/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>{
            console.log(res)
            const reaming = bookings.filter(item => item._id !== _id)
            setBookings(reaming)
            swal("Deleted", "You delete successfully", "success");
        })
        .then(data=>console.log(data))
    }

    return (
        <>
            
            <div className='lg:h-[50vh] mt-10'>
                {
                    bookings?.map(booking => <BookingCard key={booking._id} booking={booking} handleDelete={handleDelete}></BookingCard>)
                }
            </div>
        </>
    );
};

export default MyBooking;