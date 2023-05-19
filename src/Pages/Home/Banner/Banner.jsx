import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="">
            <div className="carousel w-full h-[820px] mx-auto">


                {/* Slider- 1  */}
                <div id="slide1" className="carousel-item relative w-full rounded-xl">
                    <img src="https://i.postimg.cc/qqtP2Z6Y/Banner-1.jpg" className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-[60%] right-5 top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-xl text-emerald-300 ml-3">Big Fun for kids</p>
                            <h2 className="text-7xl font-bold text-lime-400 ">Let their dreams <br /> take the wheel.</h2>
                            <p className="text-2xl text-white">Fun Car Toys For Kids. Bring fun for your little ones.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle bg-teal-400 mr-10"><FaAngleDoubleLeft className="text-2xl"/></a>
                        <a href="#slide2" className="btn btn-circle bg-teal-400 "><FaAngleDoubleRight className="text-2xl"/></a>
                    </div>
                </div>




                {/* Slider- 2  */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/RZ0cG5ZN/Banner-2.jpg" className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-[60%] right-5 top-1/2">
                        <div className="space-y-7">
                            <p className="font-bold text-xl text-emerald-300 ml-3">Create Race Track!</p>
                            <h2 className="text-7xl font-bold text-lime-400 ">Where every <br /> kid is a champion <br /> on the road!</h2>
                            <p className="text-2xl text-white">Welcome to the ultimate playground for budding car enthusiasts.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-teal-400 mr-10"><FaAngleDoubleLeft className="text-2xl"/></a>
                        <a href="#slide3" className="btn btn-circle bg-teal-400"><FaAngleDoubleRight className="text-2xl"/></a>
                    </div>
                </div>





                {/* Slider- 3  */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/VkFy8tqJ/Banner-3.jpg" className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-[60%] right-5 top-1/2">
                        <div className="space-y-7 ">
                            <p className="font-bold text-xl text-emerald-300 ml-3">Your wow! Store</p>
                            <h2 className="text-7xl font-bold text-lime-400 ">The Ultimate <br /> Toy Car Store</h2>
                            <p className="text-2xl text-white">Discover a world of miniature automobiles designed <br /> for young speed enthusiasts.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-teal-400 mr-10"><FaAngleDoubleLeft className="text-2xl"/></a>
                        <a href="#slide4" className="btn btn-circle bg-teal-400"><FaAngleDoubleRight className="text-2xl"/></a>
                    </div>
                </div>



                {/* Slider- 4  */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.postimg.cc/Jh6YK58W/Banner-4.jpg" className="w-full" />
                    <div className="absolute  transform -translate-y-1/2 left-[60%] right-5 top-1/2">
                        <div className="space-y-7 w-1/2">
                            <p className="font-bold text-xl text-emerald-300 ml-3">Race with Your Car!</p>
                            <h2 className="text-7xl font-bold text-lime-400 ">Extraordinary <br /> Car Toys</h2>
                            <p className="text-2xl text-white">Start their engines and watch their smiles light up! </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-teal-400 mr-10"><FaAngleDoubleLeft className="text-2xl"/></a>
                        <a href="#slide1" className="btn btn-circle bg-teal-400"><FaAngleDoubleRight className="text-2xl"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
