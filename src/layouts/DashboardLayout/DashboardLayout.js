import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Loader from "../../Shared/Loader/Loader";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (isSellerLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/add/brand">Add Brand</Link>
                </li>
                <li>
                  <Link to="/dashboard/all/brands">All Brands</Link>
                </li>
                <li>
                  <Link to="/dashboard/all/users">All Users</Link>
                </li>
                <li>
                  <Link to="/">Advertisement</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to={`/dashboard/adds/${user?.email}`}>Your Adds</Link>
                </li>
                <li>
                  <Link to="/dashboard/post/add">Post Adds</Link>
                </li>
              </>
            )}

            {!isAdmin && (
              <li>
                <Link to="/">Your Order</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
