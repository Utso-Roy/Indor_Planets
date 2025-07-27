import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Products from "../Components/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
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
      
  ]
  },
]);

export default router;
