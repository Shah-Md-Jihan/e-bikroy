import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/4 mx-auto my-24">
      <h2 className="text-center text-xl font-bold">Sign In</h2>
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-full mt-4">
          <p className="mb-2">
            New to e-Bikroy? please{" "}
            <Link to="/signUp" className="text-blue-600 font-bold">
              Sing Up
            </Link>
          </p>
          <div className="flex flex-col w-full border-opacity-50 mt-4">
            <button className="btn btn-primary">Sing In</button>
            <div className="divider">OR</div>
            <button className="btn btn-active">
              <span className="mr-2">
                <FaGoogle />
              </span>
              Sing In With Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
