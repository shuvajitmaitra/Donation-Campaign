import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Components/Error/Error";
import Donation from "../Pages/Donation/Donation";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donation/:id",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default Router;
