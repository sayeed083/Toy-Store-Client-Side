import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Register = () => {

    const [registererror, setRegistererror] = useState('')
    const { createUser, handleNameWithPhoto } = useContext(AuthContext)

    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            handleNameWithPhoto(createdUser, name, photo)
            console.log(createdUser);
            setRegistererror('')
            event.target.reset();
        })
        .catch(error => {
            console.log(error.message);
            setRegistererror(error.message);
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-rose-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <img src="https://i.postimg.cc/y6t9bHrM/fun-3d-illustration-cartoon-kid-with-vr-helmet-removebg.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold ">Please Register!</h1>
                            <form onSubmit={handleRegistration}>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Your email" className="input input-bordered" />
                                </div>





                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter Your password" className="input input-bordered" />
                                    <label className="label">
                                        <p>Warning:{registererror}</p>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Enter your Photo URL" className="input input-bordered" />
                                </div>




                                <div className="form-control mt-6">
                                    <input className="btn btn-warning" type="submit" value="Register" />
                                </div>

                                <label className="label">
                                    <p className="text-center">Already have an account? <Link className="text-green-500" to="/login">Login</Link> </p>
                                </label>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;