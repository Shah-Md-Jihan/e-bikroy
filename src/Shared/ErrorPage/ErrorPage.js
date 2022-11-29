import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const error = useRouteError();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
        toast.success("Successfully Signed Out!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mt-12 py-12">
      <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
        <div className="card-body text-center">
          <p className="text-center text-xl text-red-600">Something went wrong!</p>
          <p>{error.statusText || error.message}</p>
          <p>
            Please{" "}
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>{" "}
            and login again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
