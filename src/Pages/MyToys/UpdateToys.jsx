import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const UpdateToys = () => {
    useTitle('Update Toys')
    const updatedToys = useLoaderData()
    const { _id, price, quantity, details } = updatedToys;


    const handleUpdateCars = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updatedToyInformations = {
            price,
            quantity, 
            details }
        console.log(updatedToyInformations);

        fetch(`https://a-11-toy-store-server.vercel.app/toyCars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToyInformations)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // alert('added toys')
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Updated Your Toys',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-rose-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-16 text-violet-300">Update Your Car!</h1>
                    </div>
                    <form onSubmit={handleUpdateCars}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price"
                                    defaultValue={price}
                                    placeholder="Enter Price" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" 
                                    defaultValue={quantity}
                                    placeholder="Enter Quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="details" 
                                    defaultValue={details}
                                    placeholder="Enter Details" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Update" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;