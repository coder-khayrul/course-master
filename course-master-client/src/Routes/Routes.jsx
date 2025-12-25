import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import About from "../Pages/About";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path:"/",
                Component: Home
            },
            {
                path: "/courses",
                Component: Courses
            },
            {
                path: "/about",
                Component: About
            }
        ]
    }
])