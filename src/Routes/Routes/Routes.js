import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Customer from "../../Pages/Customer/Customer";
import Dashboard from "../../Pages/Dashboard/Dashboard";
// import Home from "../../Pages/Home/Home";
import Leads from "../../Pages/Leads/Leads";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Status from "../../Pages/Status/Status";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main></Main>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/leads",
        element: <Leads></Leads>,
      },
      {
        path: "/status",
        element: <Status></Status>,
      },
      {
        path: "/customer",
        element: <Customer></Customer>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
