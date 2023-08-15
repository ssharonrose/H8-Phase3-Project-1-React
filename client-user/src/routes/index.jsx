import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import DetailPage from "../views/DetailPage";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "detail/:id",
        element: <DetailPage />
      }
    ]
  }
]);

export default router;