import Banner from "../Banner/Banner";
import ToyCategory from "../ToyCategory/ToyCategory";
import ToyGallary from "../ToyGallary/ToyGallary";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallary></ToyGallary>
            
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;