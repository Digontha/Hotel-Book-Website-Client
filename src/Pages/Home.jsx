import { useEffect } from "react";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import Map from "../Components/Map";
import Offer from "../Components/Offer";
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1000,})
   },[])
    return (
        <div>
            <div>
            <Banner></Banner>
            </div>
            <div data-aos="fade-down">
            <Offer></Offer>
            </div>
            <div data-aos="fade-left">
            <Features></Features>
            </div>
           <div data-aos="fade-up">
           <Map></Map>
           </div>
        </div>
    );
};

export default Home;