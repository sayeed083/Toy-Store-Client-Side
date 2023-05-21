import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <img className="w-4/6 mx-auto" src="https://i.postimg.cc/5tbtqNrd/404.gif" alt="" />

            <div className=" flex flex-col items-center justify-start mb-5">
                <Link to="/">
                    <button className="btn btn-error">Back To Home</button>
                </Link>
            </div>




        </div>
    );
};

export default ErrorPage;