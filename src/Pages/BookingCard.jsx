import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({ booking }) => {
    console.log(booking);
    const { room_name, price_per_night, email, date } = booking || {};
    return (
        <>
<div className="w-full overflow-x-auto">
    <table className="table">
        <thead>
            <tr>
                <th className="p-2">
                   
                </th>
                <th className="p-2 hidden sm:table-cell">
                    Name
                </th>
                <th className="p-2 hidden sm:table-cell">
                    Price
                </th>
                <th className="p-2 hidden sm:table-cell">
                    Date
                </th>
                <th className="p-2 hidden sm:table-cell">
                    Email
                </th>
                <th className="p-2">
                 
                </th>
            </tr>
        </thead>
        <tbody>
          
            <tr>
                <td className="p-2">
                    <button className="btn btn-sm btn-outline mr-3">Delete</button>
                   <Link to="/update"> <button className="btn btn-sm btn-outline">Update Date</button></Link>
                </td>
                <td className="p-2 sm:hidden">
                    <div className="font-bold">{room_name}</div>
                </td>
                <td className="p-2 sm:hidden">
                    <span className="badge badge-ghost badge-sm">${price_per_night}</span>
                </td>
                <td className="p-2 hidden sm:table-cell w-[200px]">{room_name}</td>
                <td className="p-2 hidden sm:table-cell">${price_per_night}</td>
                <td className="p-2 hidden sm:table-cell">{date}</td>
                <td className="p-2 hidden sm:table-cell">{email}</td>
                <td className="p-2">
                   
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </>
    );
};

export default BookingCard;