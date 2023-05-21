import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ToyGallary = () => {

    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, [])




    return (
        <div className="my-10" data-aos="fade-up">
            <h2 className="text-center text-6xl font-serif font-bold text-cyan-300">Car Gallary</h2>
            <div className="grid grid-cols-3 gap-10 ml-36 my-10">


                {/* Card 1 */}
                <div className="card w-96 glass" data-aos="fade-right">
                    <figure><img src="https://i.postimg.cc/zXKYWwkP/Kids-Car-For-Gallary-1.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">Blue & Black Ford</h2>

                    </div>
                </div>


                {/* Card 2 */}
                <div className="card w-96 glass" data-aos="fade-right">
                    <figure><img src="https://i.postimg.cc/fRcqWBvD/Kids-Car-For-Gallary-2.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">Blue Ford 67</h2>

                    </div>
                </div>




                {/* Card 3 */}
                <div className="card w-96 glass" data-aos="fade-right">
                    <figure><img src="https://i.postimg.cc/J0XvNmjB/Kids-Car-For-Gallary-3.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">
                            Classic convertible coupe</h2>

                    </div>
                </div>



                {/* Card 4 */}
                <div className="card w-96 glass" data-aos="fade-left">
                    <figure><img src="https://i.postimg.cc/dVPSKzr5/Kids-Car-For-Gallary-4.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">Orange Jeep Wrangler</h2>

                    </div>
                </div>


                {/* Card 5 */}
                <div className="card w-96 glass" data-aos="fade-left">
                    <figure><img src="https://i.postimg.cc/G2HZpv2K/Kids-Car-For-Gallary-5.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">CocaCola Truck</h2>

                    </div>
                </div>



                {/* Card 6 */}
                <div className="card w-96 glass" data-aos="fade-left">
                    <figure><img src="https://i.postimg.cc/9MKswzwh/Kids-Car-For-Gallary-6.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold font-serif text-cyan-500">Red Convertible Coupe</h2>

                    </div>
                </div>







            </div>
        </div>
    );
};

export default ToyGallary;