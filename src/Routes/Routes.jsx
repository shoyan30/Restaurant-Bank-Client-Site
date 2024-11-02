import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Testimonials from "../Pages/Home/Testimonials/Testimonials";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
          path: 'menu',
          element:<Menu></Menu>
        },

        {
          path: 'order/:category',
          element: <Order></Order>
        },

        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element:<Registration></Registration>
        },

        {
          path:'private',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        },

        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
    },

    {
      path:"dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[

        //users Routes

        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path:'cart',
          element: <Cart></Cart>
        },

        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },

        {
          path:'pay',
          element: <Payment></Payment>
        },

        //Admin Routes

        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },

        {
          path: 'additems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },

        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);