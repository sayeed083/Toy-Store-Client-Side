import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllToysSingle from "./AllToysSingle";


const AllToys = () => {

    useTitle('All Toys')

    const [alltoys, setAlltoys] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://a-11-toy-store-server.vercel.app/toyCars')
            .then(res => res.json())
            .then(data => {
                setAlltoys(data);
                const filteredData = data.filter(alltoy =>
                    alltoy.toyName.toLowerCase().includes(search.toLowerCase())
                );
                setAlltoys(filteredData);

            })
    }, [search])



    return (
        <div>


            <div className="hero min-h-full" style={{ backgroundImage: `url("https://i.postimg.cc/1Xz6wN7w/Background-2-4.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md h-60">
                        <h1 className="mb-5 text-5xl pt-20 font-bold">All Cars</h1>

                    </div>
                </div>
            </div>

            <div className="form-control mx-60 mt-14">
                <div className="input-group">
                    <input value={search}
                        onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Your Cars" className="input input-bordered w-full" />{" "}
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