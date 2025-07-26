import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Products from "../Components/Products/Products";
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
      
  ]
  },
]);

export default router;
