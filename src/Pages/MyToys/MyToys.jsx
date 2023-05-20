import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MyToySingle from "./MyToySingle";
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    const url = `http://localhost:5000/toyCars?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url]);


    const handleDeleteOpertaion = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toyCars/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                            setMytoys(remaining);

                        }
                    })

            }


        }
        )
    }



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
                                handleDeleteOpertaion={handleDeleteOpertaion}
                            ></MyToySingle>)
                        }

                    </tbody>

                </table>
            </div>




        </div>
    );
};

export default MyToys;