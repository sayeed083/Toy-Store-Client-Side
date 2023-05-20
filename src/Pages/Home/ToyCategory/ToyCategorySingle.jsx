import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating'
import { Link } from "react-router-dom";


const ToyCategorySingle = ({ toyCategorie }) => {

    const { _id, toyPicture, toyName, price, ratings } = toyCategorie;
    return (
        <div>
            <h2></h2>
            <div className="card w-96 glass">
                <figure><img src={toyPicture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Price: ${price}</p>
                    <p><Rating
                        placeholderRating={ratings}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-300'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>

                        {ratings}

                    </p>
                    <div className="card-actions justify-end">
                        <Link to={`/toyDetails/${_id}`}>
                            <button className="btn bg-rose-400">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCategorySingle;