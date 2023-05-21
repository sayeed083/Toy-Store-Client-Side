import { useEffect, useState } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCategorySingle from './ToyCategorySingle';
const ToyCategory = () => {

    const [toyCategories, setToyCategories] = useState([])
    const [categoryTab, setCategoryTab] = useState("SportsCar")



    useEffect(() => {
        fetch(`http://localhost:5000/category/${categoryTab}`)
            .then(res => res.json())
            .then(data => {
                setToyCategories(data);
            })
    }, [categoryTab]);


    // useEffect(() => {

    //     Aos.init({ duration: 2000 });

    // }, [])






    const handleTabs = (tabNames) => {
        console.log("xx");
        setCategoryTab(tabNames);
    }


    return (

        <div>
            <h2 className="text-center my-5 text-6xl font-serif text-rose-400 font-bold" data-aos="fade-up">Categories</h2>

            <div className='flex justify-center items-center ' data-aos="fade-up">
                <div onClick={() => handleTabs("SportsCar")} className={`border p-6 mr-5  rounded-lg ${categoryTab == "SportsCar" ? "bg-rose-300 text-white" : ""}`}>SportsCar</div>
                <div onClick={() => handleTabs("Jeep")} className={`border p-6 mr-5 rounded-lg ${categoryTab == "Jeep" ? "bg-rose-300 text-white" : ""}`}>Jeep</div>
                <div onClick={() => handleTabs("RegularCar")} className={`border p-6 mr-5 rounded-lg ${categoryTab == "RegularCar" ? "bg-rose-300 text-white" : ""}`}>RegularCar</div>
            </div>

            <div className='grid grid-cols-2 mx-60 my-10' data-aos="fade-left">
                {
                    toyCategories.map(toyCategorie => <ToyCategorySingle
                        key={toyCategorie._id}
                        toyCategorie={toyCategorie}
                    >

                    </ToyCategorySingle>)
                }

            </div>



            {/* <div className='mx-24'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleTabs("SportsCar")}>SportsCar</Tab>
                        <Tab onClick={() => handleTabs("Jeep")}>Jeep</Tab>
                        <Tab onClick={() => handleTabs("RegularCar")}>RegularCar</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            toyCategories.map(toyCategorie => <ToyCategorySingle
                                key={toyCategorie._id}
                                toyCategorie={toyCategorie}
                            >

                            </ToyCategorySingle>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div> */}
        </div>
    );
};

export default ToyCategory;