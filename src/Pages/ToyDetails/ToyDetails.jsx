import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating'
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {

    useTitle('Toy Details')

    const toyDetails = useLoaderData()

    const { toyPicture, toyName, sellerName, sellerEmail, price, ratings, quantity, details } = toyDetails;

    return (
        <div>

            <div className="w-1/2 border rounded-xl  mx-auto my-10 shadow-xl">
                <img className="rounded-xl" src={toyPicture} alt="" />
                <div className="p-12">
                    <h2 className="font-bold text-4xl font-serif mb-4">{toyName}</h2>
                    <p className="text-xl font-serif mb-2"> <span className="underline" >Seller:</span>  {sellerName}</p>
                    <p className="text-xl font-serif mb-2"> <span className="underline" >Email:</span>  {sellerEmail}</p>
                    <p className="text-xl font-serif mb-2"> <span className="underline" >Price:</span>  ${price}</p>
                    <p className="text-xl font-serif mb-2 flex items-center gap-3"> <span className="underline" >Ratings: </span>

                        <Rating
                            placeholderRating={ratings}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>

                        {ratings}</p>
                    <p className="text-xl font-serif mb-2"> <span className="underline" >Available Quantity:</span>  {quantity}</p>
                    <p className="text-xl font-serif mb-2"> <span className="underline" >Description:</span>  {details}</p>
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;