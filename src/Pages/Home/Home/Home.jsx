import Banner from "../Banner/Banner";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import ToyCategory from "../ToyCategory/ToyCategory";
import ToyGallary from "../ToyGallary/ToyGallary";
import ToysHelp from "../ToysHelp/ToysHelp";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallary></ToyGallary>
            <ToyCategory></ToyCategory>
            <ToysHelp></ToysHelp>
            <CountdownTimer></CountdownTimer>


        </div>
    );
};

export default Home;