import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../components/Home";
import Create from "../components/Create";
import MyTasks from "../components/MyTasks";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "tasks",
        element: <MyTasks />,
      },
    ],
  },
]);
