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
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails";
import FertilizerDetails from "../Pages/Fertilizer/FertilizerDetails";
import UserProfile from '../Pages/Dashboard/User/UserProfile'
import UserReview from '../Pages/Dashboard/User/UserReview'
import UserProducts from "../Pages/Dashboard/User/UserProducts";
import UserHome from "../Pages/Dashboard/User/UserHome";
import UserProfileSetting from "../Pages/Dashboard/User/UserProfileSetting";
import SellerProfile from "../Pages/Dashboard/Seller/SellerProfile"
import SellerAddProducts from "../Pages/Dashboard/Seller/SellerAddProducts"
import SellerMyProducts from "../Pages/Dashboard/Seller/SellerMyProducts"
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile'
import AdminMangeReview from "../Pages/Dashboard/Admin/AdminManageReview";
import AdminMangeUser from "../Pages/Dashboard/Admin/AdminMangeUser";
import AdminManageReport from "../Pages/Dashboard/Admin/AdminManageReport";
import SellerProductsDetails from "../Components/SellerProductsDetails/SellerProductsDetails";
import ReviewDetailsPage from "../Pages/Dashboard/Admin/ReviewDetails/ReviewDetailsPage";
import AdminManageProducts from "../Pages/Dashboard/Admin/AdminManageProducts";
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
      {
        path: "/productsDetails/:id",
        element: (
          <PrivateRoute>
            <ProductsDetails></ProductsDetails>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/fertilizerDetails/:id",
        element: (
          <PrivateRoute>
            <FertilizerDetails></FertilizerDetails>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path :'/dashboard',
        element :<PrivateRoute> <UserHome></UserHome> </PrivateRoute>
      },
      {
        path: '/dashboard/my-products',
        element : <UserProducts></UserProducts>
      },
      {
        path: '/dashboard/my-reviews',
        element : <UserReview></UserReview>
      },
      {
        path: '/dashboard/profile',
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/settings',
        element: <PrivateRoute>
          <UserProfileSetting></UserProfileSetting>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/seller/profile',
        element: <PrivateRoute>
          <SellerProfile></SellerProfile>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/seller/add-product',
        element: <PrivateRoute>
          <SellerAddProducts></SellerAddProducts>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/seller/products',
        element: <PrivateRoute>
          <SellerMyProducts></SellerMyProducts>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/admin/profile',
        element: <PrivateRoute>
          <AdminProfile></AdminProfile>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/admin/users',
        element: <PrivateRoute>
          <AdminMangeUser></AdminMangeUser>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/manage-reviews',
        element: <PrivateRoute>
          <AdminMangeReview></AdminMangeReview>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/manage-products',
        element: <PrivateRoute>
          <AdminManageProducts></AdminManageProducts>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/manage-reports',
        element: <PrivateRoute>
          <AdminManageReport></AdminManageReport>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/sellerDetailsPage/:id',
        element: <PrivateRoute>
          <SellerProductsDetails></SellerProductsDetails>
        </PrivateRoute>
      }
      ,
      {
        path: '/dashboard/reviewDetailsPage/:id',
        element: <PrivateRoute>
          <ReviewDetailsPage></ReviewDetailsPage>
        </PrivateRoute>
      }
    ]
   
  },
]);

export default router;
