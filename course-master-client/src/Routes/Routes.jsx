import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CourseDetails from "../Pages/CourseDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: () => fetch("http://localhost:3000/courses")
            },
            {
                path: "/courses",
                Component: Courses,
                loader: () => fetch("http://localhost:3000/totalCourses")
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/courses/:slug",
                Component: CourseDetails,
                loader: (({ params }) => fetch(`http://localhost:3000/courses/${params.slug}`))
            }
        ]
    }
])