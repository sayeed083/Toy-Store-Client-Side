import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, spinner} = useContext(AuthContext);
    if(spinner) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email) {
        return children;
    }





    return <Navigate to="/login" replace></Navigate> ;
};

export default PrivateRoute;