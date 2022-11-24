import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-1/4 mx-auto my-24">
      <h2 className="text-center text-xl font-bold">Sign Up</h2>
      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
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
            Allready have an account? Please
            <Link to="/login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
          <button className="btn btn-primary mt-4">Sing Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
