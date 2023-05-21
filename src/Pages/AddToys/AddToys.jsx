import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const AddToys = () => {

    const { user } = useContext(AuthContext)

    const handleAddCars = event => {
        event.preventDefault();

        const form = event.target;
        const picture = form.picture.value;
        const toyName = form.toyName.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const toyInformations = {
            toyPicture: picture,
            toyName: toyName,
            sellerName: name,
            sellerEmail: email,
            category: category,
            price: price,
            ratings: ratings,
            quantity: quantity,
            details: details

        }
        

        fetch('https://a-11-toy-store-server.vercel.app/toyCars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInformations)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Added Toys',
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
                        <h1 className="text-5xl font-bold mb-16 text-violet-300">Please Add Your Car!</h1>
                    </div>
                    <form onSubmit={handleAddCars}>
                        <div className="card w-full  shadow-2xl bg-base-100">
                            <div className="grid grid-cols-2 gap-5 p-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Picture URL</span>
                                    </label>
                                    <input type="text" name="picture" placeholder="Enter Toy Picture URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name="toyName" placeholder="Enter Your Toy Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Choose Category" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Enter Price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="ratings" placeholder="Enter Your Ratings" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Enter Quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Enter Details" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add Car" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;



