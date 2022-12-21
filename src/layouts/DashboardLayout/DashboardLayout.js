import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import Loader from "../../Shared/Loader/Loader";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  // const [isSeller, isSellerLoading] = useSeller(user?.email);

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FFC300 " : "",
    };
  };

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
                  <NavLink style={navLinkStyle} to="/dashboard/add/brand">
                    Add Brand
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkStyle} to="/dashboard/all/brands">
                    All Brands
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkStyle} to="/dashboard/all/seller">
                    All Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkStyle} to="/dashboard/all/buyers">
                    All Buyers
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkStyle} to="/">
                    Reported Items
                  </NavLink>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <NavLink style={navLinkStyle} to={`/dashboard/adds/${user?.email}`}>
                    My Products
                  </NavLink>
                </li>
                <li>
                  <NavLink style={navLinkStyle} to="/dashboard/post/add">
                    Add A Product
                  </NavLink>
                </li>
              </>
            )}

            {!isAdmin && (
              <li>
                <NavLink style={navLinkStyle} to="/dashboard/my/orders">
                  My Orders
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
