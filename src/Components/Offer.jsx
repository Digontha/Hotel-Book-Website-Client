import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OfferCard from './OfferCard';

const Offer = () => {
    const [offers, setOffers] = useState([])
    console.log(offers);
    useEffect(() => {
        axios.get("http://localhost:5000/offer")
            .then(res => setOffers(res.data))
    }, [])
    return (
        <>
           <h1 className='text-center text-3xl text-gray-700 underline font-bold py-5'>Our Special Offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-5 mx-auto'>
                {
                    offers.map(offer => <OfferCard key={offer._id} offer={offer}></OfferCard>)
                }
            </div>
        </>
    );
};

export default Offer;