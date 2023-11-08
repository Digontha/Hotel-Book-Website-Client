import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookingCard from './BookingCard';
import Swal from 'sweetalert2';

const MyBooking = () => {

    const [bookings, setBookings] = useState([]);
    // console.log(bookings);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`https://assignment-11-server-eight-lake.vercel.app/bookings?email=${user?.email}`,{withCredentials:true})
            .then(res => setBookings(res.data))
    }, [user.email])

    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure for delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-eight-lake.vercel.app/bookings/update/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your Booking has been deleted.',
                                'success'
                            )
                            const reaming = bookings.filter(item => item._id !== _id)
                            setBookings(reaming)
                        }
                                 
                    })

            }
        })
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