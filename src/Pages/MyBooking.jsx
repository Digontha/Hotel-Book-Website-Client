import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookingCard from './BookingCard';

const MyBooking = () => {

    const [bookings, setBookings] = useState([]);
    // console.log(bookings);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => setBookings(res.data))
    }, [user.email])
    return (
        <>
            
            <div className='lg:h-[50vh] mt-10'>
                {
                    bookings?.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)
                }
            </div>
        </>
    );
};

export default MyBooking;