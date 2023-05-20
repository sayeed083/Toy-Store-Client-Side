import { Link } from "react-router-dom";


const AllToysSingle = ({ alltoy }) => {

    const {_id, toyName, sellerName,  category, price, quantity } = alltoy;

    return (
        <tr>
            
            
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/toyDetails/${_id}`}>
                <button className="btn btn-success">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysSingle;