import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddBrand from "../Pages/Dashboard/AddBrand/AddBrand";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRegister from "../Pages/Register/SellerRegister";
import AllBrands from "../Pages/Dashboard/AllBrands/AllBrands";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Register></Register>,
      },
      {
        path: "/register/seller",
        element: <SellerRegister></SellerRegister>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add/brand",
        element: (
          <AdminRoute>
            <AddBrand></AddBrand>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all/brands",
        element: (
          <AdminRoute>
            <AllBrands></AllBrands>
          </AdminRoute>
        ),
      },
    ],
  },
]);
