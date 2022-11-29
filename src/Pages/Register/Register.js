import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";

const Register = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState("shahmdjihan@gmail.com");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:5000/users/${checkUser}`);
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (userData) => {
    createUser(userData.email, userData.password)
      .then((user) => {
        const userInfo = {
          displayName: userData.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserInDB(userData.name, userData.email);
            toast.success("Sign up success!");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  // user data save in db
  const saveUserInDB = (name, email) => {
    const usersData = { name, email, role: "user" };
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

  const handleGoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        setCheckUser(user?.email);
        if (users?.email === "shahmdjihan@gmail.com") {
          <Loader></Loader>;
          return;
        }
        if (users?.email === user?.email) {
          navigate("/");
          toast.success("Login successfull!");
          return;
        }
        saveUserInDB(user?.displayName, user?.email);
        navigate("/");
        toast.success("Login successfull!");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[385px] h-[800px] p-6">
        <h1 className="text-xl font-semibold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn btn-outline">
            <span className="mr-2 text-xl font-bold">
              <FaGoogle />
            </span>
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
