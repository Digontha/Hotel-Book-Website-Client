import React from 'react';

const OfferCard = ({ offer }) => {
    const { image,title,description } = offer || {};
    console.log(image);
    return (
        <>
            <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-800 shadow-none" style={{ backgroundImage: `url(${image})` }}>
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>

                <div className="relative lg:w-[500px] p-6 px-6  md:px-12">
                    <h2 className="mb-6  text-white font-sans  font-extrabold leading-[1.5] tracking-normal  antialiased">
                        <span className='underline text-yellow-100 lg:text-2xl'>{title + " Special"}</span>
                        <br />
                        <small className='lg:text-base '>{description}</small>
                    </h2>
                    
                </div>
                
                
            </div>
        </>
    );
};

export default OfferCard;