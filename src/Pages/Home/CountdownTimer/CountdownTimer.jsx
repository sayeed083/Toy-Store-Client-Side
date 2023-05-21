import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(86400); // Initial countdown value in seconds (1 day = 86400 seconds)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => {
            clearInterval(timer); // Cleanup the timer on component unmount
        };
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            // Perform any action when the countdown reaches zero
            // Example: display a message or call a function
            console.log('Countdown reached zero!');
        }
    }, [countdown]);

    useEffect(() => {

        Aos.init({ duration: 2000 });

    }, [])

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(countdown / 86400);
    const hours = Math.floor((countdown % 86400) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return (
        <div className="my-40" data-aos="fade-up">
            <h1 className="text-center text-6xl font-serif font-bold text-violet-400 my-7">Discount Panel</h1>

            <h2>
                {/* {`${days}d ${hours < 10 ? '0' : ''}${hours}h ${minutes < 10 ? '0' : ''}${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`} */}


                <div className="border border-red-400 rounded-lg mx-80 p-14 bg-no-repeat" style={{ backgroundImage: `url("https://i.postimg.cc/W439xf5r/Background-3.jpg")` }}>
                    <h1 className=" text-5xl  font-bold text-amber-400 mb-5">25% Discount <br />
                        On All Kids Toy Cars</h1>
                    <p className=" text-2xl mb-10 text-fuchsia-600">Offer Expires on</p>
                    <div className="flex justify-start gap-2 items-center ">
                        <p className="  text-red-100 p-14 text-2xl  font-bold">{days} <br /> Days</p>
                        <p className="  text-green-100 p-14 text-2xl  font-bold">{`${hours < 10 ? '0' : ''}${hours}h`} <br /> Hrs</p>
                        <p className="  p-14 text-violet-100 text-2xl  font-bold">{`${minutes < 10 ? '0' : ''}${minutes}m`} <br />
                            Min
                        </p>
                        <p className="  text-pink-100 p-14 text-2xl  font-bold">{`${seconds < 10 ? '0' : ''}${seconds}s`} <br />
                            Seconds
                        </p>
                    </div>
                </div>
            </h2>
        </div>
    );
};


export default CountdownTimer;