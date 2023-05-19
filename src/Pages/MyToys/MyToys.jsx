import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MyToySingle from "./MyToySingle";


const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    const url = `http://localhost:5000/toyCars?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url])

    return (
        <div>
            <h2 className="text-center text-5xl my-5">There is My Toy:{mytoys.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Picture</th>
                            <th>Car Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToySingle
                            key={mytoy._id}
                            mytoy={mytoy}
                            ></MyToySingle> )
                        }
                       
                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default MyToys;