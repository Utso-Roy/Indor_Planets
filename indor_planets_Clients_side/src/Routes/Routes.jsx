import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Products from "../Components/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Learn from "../Pages/Learn/Learn";
import PlantCare from "../Pages/PlantCare/PlantCare";
import Fertilizer from "../Pages/Fertilizer/Fertilizer";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayouts/DashboardLayout";
import Dashboard from "../Pages/Sidebar/Sidebar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Products></Products>,
      },

      {
        path: "/home",
        element: (
          <PrivateRoute>
            {" "}
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/learn",
        element: (
          <PrivateRoute>
            <Learn></Learn>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/plantCare",
        element: (
          <PrivateRoute>
            <PlantCare></PlantCare>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/plantFertilizer",
        element: (
          <PrivateRoute>
            <Fertilizer></Fertilizer>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    // children: [
    //   {
    //     index: true,
    //     element: <Dashboard></Dashboard>,
    //     path: "/dashboard",
    //   },
    // ],
  },
]);

export default router;
