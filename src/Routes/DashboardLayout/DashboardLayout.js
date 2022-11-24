import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
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
            <li>
              <Link to="/">Add Brand</Link>
            </li>
            <li>
              <Link to="/">All Users</Link>
            </li>
            <li>
              <Link to="/">Advertisement</Link>
            </li>
            <li>
              <Link to="/">Your Adds</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;