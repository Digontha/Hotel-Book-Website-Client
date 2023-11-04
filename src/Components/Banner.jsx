import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.traveldailymedia.com/assets/2020/01/Silavadee-Pool-Spa-Resort-4.jpg" className="w-full h-[600px] object-cover" />

                <div className="absolute flex items-center pl-20  h-full   w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-6 font-bold">
                        <h1 className="text-5xl text-white"><span className='text-red-400'>Affordable</span> Price For Hotel Service</h1>
                        <p className="text-white">Book Your Dream and <span className='text-red-300'>Stay with Us Today!</span></p>
                        <div className="flex gap-3">
                            <button className="btn btn-outline text-white">Discover More</button>
                            <button className="btn btn-outline btn-warning">Get Start</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://th.bing.com/th/id/R.c4b8cf52f8ebe83c46a71856069f1fbd?rik=aLCe38wTdM2aBg&pid=ImgRaw&r=0" className="w-full h-[600px] object-cover" />
                <div className="absolute flex items-center pl-20  h-full   w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-6 font-bold">
                        <h1 className="text-5xl text-white">Affordable Price For Hotel Service</h1>
                        <p className="text-white">Book Your Dream Stay with Us Today!</p>
                        <div className="flex gap-3">
                            <button className="btn btn-outline text-white">Discover More</button>
                            <button className="btn btn-outline btn-warning">Get Start</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://th.bing.com/th/id/R.18d2ea5edbd3cbe61e11945d85619cde?rik=vKbRLXAq%2f%2fmkPw&riu=http%3a%2f%2fmediad.publicbroadcasting.net%2fp%2fkplu%2ffiles%2fstyles%2fx_large%2fpublic%2f201404%2fAP120521026936_0.jpg&ehk=FxeFsSA9NHZjX5g1sxmTHkYLboEcfRhmRoqVFJrKhGM%3d&risl=&pid=ImgRaw&r=0" className="w-full h-[600px] object-cover" />
                <div className="absolute flex items-center pl-20  h-full   w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-6 font-bold">
                        <h1 className="text-5xl text-white">Affordable Price For Hotel Service</h1>
                        <p className="text-white">Book Your Dream Stay with Us Today!</p>
                        <div className="flex gap-3">
                            <button className="btn btn-outline text-white">Discover More</button>
                            <button className="btn btn-outline btn-warning">Get Start</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://www.travelplusstyle.com/wp-content/gallery/cache/37544__940x_b1y8_rov2b_00_p_3000x2250.jpg" className="w-full h-[600px] object-cover" />
                <div className="absolute flex items-center pl-20  h-full   w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="space-y-6 font-bold">
                        <h1 className="text-5xl text-white">Affordable Price For Hotel Service</h1>
                        <p className="text-white">Book Your Dream Stay with Us Today!</p>
                        <div className="flex gap-3">
                            <button className="btn btn-outline text-white">Discover More</button>
                            <button className="btn btn-outline btn-warning">Get Start</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;