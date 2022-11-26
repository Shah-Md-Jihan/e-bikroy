import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SellerRegister = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSellerSignUp = (userData) => {
    console.log(userData);
    createUser(userData.email, userData.password)
      .then((user) => {
        console.log(user);
        const userInfo = {
          displayName: userData.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveSellerInDB(userData.name, userData.email);
            toast.success("Sign up success as a seller!");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  // user data save in db
  const saveSellerInDB = (name, email) => {
    const usersData = { name, email, role: "seller", verified: "false" };
    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(usersData),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[385px] h-[800px] p-6">
        <h1 className="text-xl font-semibold text-center">Make You Seller!</h1>
        <form onSubmit={handleSubmit(handleSellerSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password field is required",
                minLength: { value: 6, message: "Password must be 6 character or longer!" },
                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&?"])(?=.*[0-9])/, message: "Password must be strong!" },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mt-4">
            <input type="submit" value="SIGN UP" className="btn btn-primary w-full" />
          </div>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <p className="mt-1">
            Already have an account?
            <Link to="/login" className="text-secondary">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
