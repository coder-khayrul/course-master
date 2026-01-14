import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CourseDetails from "../Pages/CourseDetails";
import { Dashboard } from "../Layouts/Dashboard";
import ManageCourses from "../Pages/Dashboard/Admin/ManageCourses";
import Overview from "../Pages/Dashboard/Admin/Overview";
import AddCourse from "../Pages/Dashboard/Admin/AddCourse";

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
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                path: "/dashboard",
                Component: Overview
            },
            {
                path: "/dashboard/admin/manage-courses",
                Component: ManageCourses,
                loader: (() => fetch("http://localhost:3000/courses"))

            },
            {
                path: "/dashboard/admin/add-course",
                Component: AddCourse,
                 loader: (() => fetch("http://localhost:3000/courses"))
            },

        ]
    }
])