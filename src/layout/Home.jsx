import { Helmet } from "react-helmet-async";
import CategorySection from "../components/CategorySection";
import Featured from "../components/Featured";
import Plans from "../components/Plans";
import Slider from "../components/Slider";
import { useEffect } from "react";



const Home = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="">
            <Helmet>
                <title>Home | MovieSphere</title>
            </Helmet>
            <Slider></Slider>
            <Featured></Featured>
            <CategorySection></CategorySection>
            <Plans></Plans>
        </div>
    );
};

export default Home;