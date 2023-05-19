import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { 
                path: "/",
                element: <Home></Home>
            },
            { 
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addtoys",
                element: <AddToys></AddToys>
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            }
            

        ]
    },
]);

export default router;