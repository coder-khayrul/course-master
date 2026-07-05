import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Logo from "./ui/Logo";

export function AppSidebar() {
    const { userInfo } = use(AuthContext);

    return (
        <aside className="h-full bg-base-100 border-r border-indigo-100">
            {/* Logo */}
            <div className="border-b border-indigo-100 px-4 py-3">
                <Logo />
            </div>

            {/* Menu */}
            <ul className="menu p-4 gap-1 text-base-content">
                {/* Admin */}
                {userInfo?.role === "admin" && (
                    <>
                        <li>
                            <NavLink to="/dashboard/statistics">
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-users">
                                Manage Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage-coupons">
                                Manage Coupons
                            </NavLink>
                        </li>
                    </>
                )}

                {/* Normal User */}
                {!["admin", "moderator"].includes(userInfo?.role) && (
                    <>
                        <li>
                            <NavLink to="/dashboard/">
                                Overview
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/admin/manage-courses">
                                Manage Courses
                            </NavLink>
                        </li>

                    </>
                )}
            </ul>
        </aside>
    );
}
