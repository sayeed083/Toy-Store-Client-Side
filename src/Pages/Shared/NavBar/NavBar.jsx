import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="navbar px-9 bg-purple-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">All Toys</Link></li>
                            <li><Link to="/">My Toys</Link></li>
                            <li><Link to="/">Add a Toy</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <img className="w-24" src="https://i.postimg.cc/Rh1DrFQG/jeep.png" alt="" />
                    <a className=" text-3xl font-serif ml-4">Tiny Drivers</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">All Toys</Link></li>
                        <li><Link to="/">My Toys</Link></li>
                        <li><Link to="/">Add a Toy</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>

                </div>
                <div className="navbar-end">

                    {user &&
                        <img className="w-20 rounded-full mr-6" src={user.photoURL} alt="" />

                    }



                    {user ? <button onClick={handleLogOut} className="btn btn-outline btn-primary">Log Out</button> :

                        <Link to="/login">
                            <button className="btn btn-outline btn-primary">Log In</button>
                        </Link>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;