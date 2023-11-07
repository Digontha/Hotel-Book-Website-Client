import React from 'react';
import { BiTargetLock } from 'react-icons/bi';
import { RxValueNone } from 'react-icons/rx';
import { GrAchievement } from 'react-icons/gr';
import Banner from '../Components/Banner';
const About = () => {
    return (
        <>
            <Banner></Banner>
            <section className="py-10 font-mono">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">About Us</h2>
                        <p className="text-gray-700">Learn more about our organization and what we stand for.</p>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 lg:pr-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Mission <BiTargetLock className="text-3xl"></BiTargetLock></h3>
                            <p className="text-gray-800">
                                our mission is to redefine your concept of hospitality. We are committed to providing an unparalleled experience, where every stay with us becomes a cherished memory.We believe that a great hotel is not just about comfortable rooms and impeccable service; it's about creating a welcoming haven that feels like a home away from home. Our mission is to offer you a warm and inviting retreat that leaves you refreshed, inspired, and eager to return.
                            </p>
                        </div>
                        <div className=" lg:pl-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Values <RxValueNone className="text-3xl"></RxValueNone></h3>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Guest-Centric</li>
                                <li>Sustainability</li>
                                <li>Diversity and Inclusion</li>
                                <li>Community Engagement</li>
                                <li>Continuous Improvement</li>
                            </ul>
                        </div>
                        <div className=" lg:pl-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Achieve <GrAchievement className="text-3xl"></GrAchievement></h3>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>TripAdvisor Excellence Award</li>
                                <li>Seamless Ticketing and Booking System</li>
                                <li>Green Hotel Certification</li>
                                <li>Best Family-Friendly Hotel Award</li>
                                <li>Innovation in Hospitality Award</li>
                            </ul>
                        </div>
                    </div>




                    <div className="mt-8">
                        <h3 className="text-xl text-center font-semibold mb-3  underline">Our Team</h3>
                        <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 w-[90%] mx-auto  py-5">
                            <div className="">
                                <img className="w-20 h-20  rounded-full" src="https://th.bing.com/th/id/R.42f7fd526cc94b557961a7d3f4d41994?rik=hDivNwvfJygXCA&pid=ImgRaw&r=0" alt="" />
                                <p >Mr.Devid</p>
                                <p>Front Office Department</p>
                            </div>
                            <div className="">
                                <img className="w-20 h-20   rounded-full" src="https://i1.wp.com/shoprenewableenergy.com/wp-content/uploads/2020/02/cropped-portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004-scaled-1.jpg?ssl=1" alt="" />
                                <p >Mr.Bijoy</p>
                                <p>Housekeeping Department</p>
                            </div>
                            <div className="">
                                <img className="w-20 h-20   rounded-full" src="https://sonichits.com/artist_image/QWRoYW0gTmFidWxzaQ==/Njc5MWExZTkzYjNkOTlmZGY4NmY1ZmM1OTcyZjNhZTY=/extralarge" alt="" />
                                <p >Mr.Jony</p>
                                <p>Food and Beverage Department</p>
                            </div>
                            <div className="">
                                <img className="w-20 h-20  rounded-full" src="https://th.bing.com/th/id/R.2b2fbf647ac130098d2713eb34650f05?rik=PbGc%2fGBw2EV8VQ&riu=http%3a%2f%2fwww2.pictures.zimbio.com%2fgi%2fKIIS%2bFM%2bJingle%2bBall%2b2011%2bArrivals%2bajBC_IMB4hQl.jpg&ehk=je5AG1cs54HnXXO54ZnqSl%2bAGeIHeFuKitZZ%2b18aYhE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                <p >Marselia</p>
                                <p>Guest Services Department</p>
                            </div >
                            <div className="">
                                <img className="w-20 h-20  rounded-full" src="https://freepngimg.com/thumb/man/10-man-png-image.png" alt="" />
                                <p >Mr.Harry</p>
                                <p>Security Department</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;