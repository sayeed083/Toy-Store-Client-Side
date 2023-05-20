import { useEffect } from "react";
import { useState } from "react";
import AllToysSingle from "./AllToysSingle";


const AllToys = () => {

    const [alltoys, setAlltoys] = useState([])
    const [search, setSearch] = useState("")

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


            <div className="form-control ml-60 pl-60">
                <div className="input-group">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />{" "}
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>



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