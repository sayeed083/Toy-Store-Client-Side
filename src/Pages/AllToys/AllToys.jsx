import { useEffect } from "react";
import { useState } from "react";
import AllToysSingle from "./AllToysSingle";


const AllToys = () => {

    const [alltoys, setAlltoys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toyCars')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
            })
    }, [])



    return (
        <div>
            <h2 className="text-center text-5xl text-green-400 my-5 font-serif "> All Cars: {alltoys.length}</h2>

            

            <div className="overflow-x-auto w-full p-10">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className="bg-green-300">Seller</th>
                            <th className="bg-green-300">Car Name</th>
                            <th className="bg-green-300">Category</th>
                            <th className="bg-green-300">Price</th>
                            <th className="bg-green-300">Quantity</th>
                            <th className="bg-green-300"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.map(alltoy => <AllToysSingle
                                key={alltoy._id}
                                alltoy={alltoy}
                            ></AllToysSingle>)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllToys;