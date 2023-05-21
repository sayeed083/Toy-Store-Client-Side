import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";


const Login = () => {
    useTitle('Login')
    const { signIn, logInwithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [loginerror, setLoginerror] = useState('')
    const from = location.state?.from?.pathname || '/'


    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setLoginerror('')
            })
            .catch(error => {
                console.log(error.message);
                setLoginerror(error.message);
            })
    }

    const handleGoogleLogIn = () => {

        logInwithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
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
                                        <p className="text-red-700">Warning:{loginerror}</p>
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
                                <button onClick={handleGoogleLogIn} className="btn btn-outline btn-secondary">
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