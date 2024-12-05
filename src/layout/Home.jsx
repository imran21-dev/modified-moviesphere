import CategorySection from "../components/CategorySection";
import Featured from "../components/Featured";
import Plans from "../components/Plans";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            <Featured></Featured>
            <CategorySection></CategorySection>
            <Plans></Plans>
        </div>
    );
};

export default Home;