import {
    createBrowserRouter, redirect,
} from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import FormAddCategory from "../components/FormAddCategory";
import FormAddProduct from "../components/FormAddProduct";
import CategoryPage from "../views/CategoryPage";
import HomePage from "../views/HomePage";
import ImagesPage from "../views/ImagesPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/ResgisterPage";

const router = createBrowserRouter([
    {
        path: "/login",
        loader: () => {
            // cek dia udah login atau belum ??
            const token = localStorage.getItem("access_token");
            if (token && token !== "undefined") {
                throw redirect("/");
            }
            return null;
        },
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <BaseLayout />,
        loader: () => {
            // cek dia udah login atau belum ??
            const token = localStorage.getItem("access_token");
            if (!token || token === "undefined") {
                throw redirect("/login");
            }
            return null;
        },
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "categories",
                element: <CategoryPage />
            },
            ,
            {
                path: "images/:id",
                element: <ImagesPage />
            },
            {
                path: "add-product",
                element: <FormAddProduct />
            },
            {
                path: "add-category",
                element: <FormAddCategory />
            },
            ,
            {
                path: "edit-product/:id",
                element: <FormAddProduct />
            },
            {
                path: "edit-category/:id",
                element: <FormAddCategory />
            }
        ]
    },
]);

export default router