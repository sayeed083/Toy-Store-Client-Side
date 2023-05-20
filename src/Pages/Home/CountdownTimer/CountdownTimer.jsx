import { useEffect, useState } from "react";


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

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(countdown / 86400);
    const hours = Math.floor((countdown % 86400) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    return (
        <div className="my-40">
            <h1 className="text-center text-6xl font-serif font-bold text-violet-400 my-7">Discount Panel</h1>

            <h2>
                {/* {`${days}d ${hours < 10 ? '0' : ''}${hours}h ${minutes < 10 ? '0' : ''}${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`} */}


                <div className="border border-red-400 rounded-lg mx-40 p-14">
                    <h1 className="text-center text-5xl font-serif font-bold text-violet-400 mb-5">15% Discount
                        On All Kids Toy Cars</h1>
                    <div className="flex justify-center gap-4 items-center ">
                        <p className="border border-green-500 rounded-lg p-14 text-2xl font-serif font-bold">{days}</p>
                        <p className="border border-green-500 rounded-lg p-14 text-2xl font-serif font-bold">{`${hours < 10 ? '0' : ''}${hours}h`}</p>
                        <p className="border border-green-500 rounded-lg p-14 text-2xl font-serif font-bold">{`${minutes < 10 ? '0' : ''}${minutes}m`}</p>
                        <p className="border border-green-500 rounded-lg p-14 text-2xl font-serif font-bold">{`${seconds < 10 ? '0' : ''}${seconds}s`}</p>
                    </div>
                </div>
            </h2>
        </div>
    );
};


export default CountdownTimer;