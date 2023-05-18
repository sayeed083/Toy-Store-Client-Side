import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const Login = () => {

    const handleLogIn = event => {
        event.preventDefault();
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
                            <h1 className="text-4xl text-center font-bold ">Log In</h1>
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p>Warning:</p>
                                    </label>


                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>

                            {/* Divider  */}
                            <div className="divider">OR</div>

                            {/* Google Sign In Part  */}
                            <div className="mx-auto">
                                <button className="btn btn-outline btn-secondary">
                                    <FaGoogle className="mr-2"></FaGoogle>
                                    Login with Google
                                </button>
                            </div>
                            <label className="label">
                                <p className="text-center">Dont have an account? <Link className="text-green-500" to="/register">Register</Link> </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;