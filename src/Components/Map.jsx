import React from 'react';

const Map = () => {
    return (

        <>
            <h1 className='text-center text-3xl text-gray-700 underline font-bold py-5 mt-7'>Our Hotel Map</h1>
            <div className="flex flex-col items-center justify-center h-screen">

                <div className="w-full max-w-screen-lg mx-4 p-4 rounded-lg shadow-md">
                    <div className="relative aspect-w-16 aspect-h-9">

                        <img src="https://www.vbbt.com/wp-content/uploads/hotel-map.png" alt="Hotel Map" className="object-cover w-full h-full rounded-lg" />

                        <div className="absolute top-4 left-4 p-2 bg-white bg-opacity-70 rounded-md shadow-md">
                            <h2 className="text-lg font-semibold text-gray-800">Hotel Location:Coastal Paradise Resort, UP-3200</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Map;