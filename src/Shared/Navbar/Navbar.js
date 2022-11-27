import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { FaAngleDown } from "react-icons/fa";
import Loader from "../Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  useEffect(() => {
    if (user?.uid) {
      fetch(`http://127.0.0.1:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
        });
    }
  }, [user?.email]);
  // const { data: userInfo = [], isLoading } = useQuery({
  //   queryKey: ["users", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(`http://127.0.0.1:5000/users/${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(userInfo);

  const handleMakeSeller = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/users/activity/change/true/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("You are seller now!");
          navigate("/");
        }
      });
  };
  const handleMakeUser = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/users/activity/change/false/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("You are User now!");
          navigate("/");
        }
      });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Signed Out!");
      })
      .catch((error) => console.log(error));
  };

  const menus = (
    <React.Fragment>
      <li>
        <Link to="/allAdd">All Adds</Link>
      </li>
      {!user?.uid && (
        <li>
          <Link to="/register/seller">Be Seller</Link>
        </li>
      )}

      {user?.uid && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li className="lg:hidden">
        <Link to="/" className="text-accent font-bold">
          Post Add
        </Link>
      </li>
      <li>
        <Link to="/" className="lg:hidden">
          Profile
        </Link>
      </li>
      <li>
        <Link onClick={handleLogOut} className="lg:hidden">
          Logout
        </Link>
      </li>
      {user?.uid ? (
        <div className="dropdown hidden lg:block mt-1 ml-24">
          <label tabIndex={0} className="btn m-1 bg-blue-600 border-none ">
            {user?.displayName ? user?.displayName : user?.email}
            <FaAngleDown className="ml-2" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-blue-600 rounded-b-lg w-52">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link onClick={handleLogOut}>Logout</Link>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {userInfo?.role === "seller" && (
        <div className="dropdown mt-1">
          <label tabIndex={4} className="btn m-1 bg-blue-600 border-none">
            {userInfo?.active === "true" ? "Seller" : "User"}
            <FaAngleDown className="ml-2" />
          </label>
          <ul tabIndex={4} className="dropdown-content menu p-2 shadow bg-blue-600  rounded-b-lg  w-52">
            <li>
              <label onClick={() => handleMakeSeller(userInfo?._id)}>Seller</label>
            </li>
            <li>
              <label onClick={() => handleMakeUser(userInfo?._id)}>User</label>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );

  // if (isLoading) {
  //   return <Loader></Loader>;
  // }

  return (
    <nav>
      <div className="navbar bg-blue-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menus}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            e-Bikroy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white font-semibold">{menus}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-warning font-bold hidden lg:flex">Post Add</button>
          <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
