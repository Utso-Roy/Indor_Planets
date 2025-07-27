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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement : <Error></Error>,
    children: [
      {
        index: true, 
        path :'/',
        element : <Products></Products>
      },

      {
        path: '/home',
        element : <Home></Home>
      }
      ,
      {
        path: '/login',
        element : <Login></Login>
      }
      ,
      {
        path: '/register',
        element : <Register></Register>
      }
      ,
      {
        path: '/learn',
        element : <Learn></Learn>
      }
      ,
      {
        path: '/plantCare',
        element : <PlantCare></PlantCare>
      }
      ,
      {
        path: '/plantFertilizer',
        element : <Fertilizer></Fertilizer>
      }
      
  ]
  },
]);

export default router;
