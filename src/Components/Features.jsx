import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        axios.get("https://assignment-11-server-eight-lake.vercel.app/features")
            .then(res => setFeatures(res.data))
    }, [])

    return (
        <>
        <h1 className='text-center text-3xl text-gray-700 underline font-bold py-5'>Our Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
        </>
    );
};

export default Features;