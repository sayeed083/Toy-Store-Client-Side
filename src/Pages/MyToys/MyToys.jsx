import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import MyToySingle from "./MyToySingle";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";


const MyToys = () => {

    useTitle('My Toys')
    const { user } = useContext(AuthContext);

    const [mytoys, setMytoys] = useState([]);

    const url = `https://a-11-toy-store-server.vercel.app/toyCars?sellerEmail=${user?.email}`

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
                fetch(`https://a-11-toy-store-server.vercel.app/toyCars/${id}`, {
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

            <div className="hero min-h-full" style={{ backgroundImage: `url("https://i.postimg.cc/D0PHNR71/Background-2-7.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md h-60">
                        <h1 className="mb-5 text-5xl pt-20 font-bold">My Toys</h1>

                    </div>
                </div>
            </div>




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