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
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import SellerRoute from "./SellerRoute";
import PostAdd from "../Pages/Dashboard/PostAdd/PostAdd";
import YourAdds from "../Pages/Dashboard/YourAdds/YourAdds";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://127.0.0.1:5000/category/${params.id}`),
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
      {
        path: "/dashboard/all/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/post/add",
        element: (
          <SellerRoute>
            <PostAdd></PostAdd>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/adds/:email",
        element: (
          <SellerRoute>
            <YourAdds></YourAdds>,
          </SellerRoute>
        ),
      },
    ],
  },
]);
