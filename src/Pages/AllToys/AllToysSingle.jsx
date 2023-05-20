import { Link } from "react-router-dom";


const AllToysSingle = ({ alltoy }) => {

    const { toyName, sellerName,  category, price, quantity } = alltoy;

    return (
        <tr>
            
            
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link>
                <button className="btn btn-success">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysSingle;