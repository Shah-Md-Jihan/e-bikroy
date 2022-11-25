import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="lg:hidden">
        <Link to="/" className="text-accent font-bold">
          Post Add
        </Link>
      </li>
      {user?.uid ? (
        <li tabIndex={0}>
          <span>
            {user?.displayName ? user?.displayName : user?.email}
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </span>
          <ul className="p-2 bg-blue-600">
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <span onClick={handleLogOut}>Sign Out</span>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );
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
