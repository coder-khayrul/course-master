import React, { useContext } from 'react';
import { LuGraduationCap, LuLogIn, LuLogOut, LuNotebook } from 'react-icons/lu';
import { FiUserMinus, FiUserPlus } from "react-icons/fi";

import { Link, NavLink, useNavigate } from 'react-router';
import Container from './ui/Container';
import Button from './ui/Button';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import Logo from './ui/Logo';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);

    const handleLogOutButton = () => {
        logOutUser()
            .then(() => {
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: `Successfully Signed Out!`,
                    text: "Goodbye for now! Keep learning and come back anytime",
                });
                navigate("/");
            })
            .catch(error => {
                console.log("Error Found");
                Swal.fire({
                    icon: 'error',
                    title: "Sign Out Failed!",
                    text: `${error.message}`,
                });

            })
    }
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/courses"}>All Courses</NavLink></li>
        <li><NavLink to={"/about"}>About us</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        {
            user && <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
        }
    </>

    return (
        <nav className='py-3 border-b border-b-border'>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[18px] font-medium">
                                {navLinks}
                            </ul>
                        </div>
                        {/* Logo */}
                        <Logo />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>

                    {
                        !user ?
                            <div className="navbar-end gap-4">
                                <Button size={"sm"} icon={LuLogIn} path={"/login"} btnText={"Login"} />
                                <Button size={"sm"} icon={FiUserPlus} path={"/register"} btnText={"Sign up"} />
                            </div>
                            :

                            <div className="navbar-end gap-4 relative">
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    {/* Avatar */}
                                    <div
                                        tabIndex={0}
                                        className="h-10 w-10 rounded-full outline outline-offset-2 cursor-pointer outline-accent text-white font-medium grid place-items-center bg-accent"
                                    >
                                        {user.displayName
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>

                                    {/* Dropdown Content */}
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-white rounded-xl z-1  p-2 shadow-lg border border-border"
                                    >
                                        {/* User Info */}
                                        <li className="px-3 py-2 cursor-default">
                                            <p className="font-semibold leading-none hover:bg-white">{user.displayName}</p>
                                            <p className="text-xs opacity-60 hover:bg-white">{user.email}</p>
                                        </li>

                                        {/* Dashboard */}
                                        <li>
                                            <Link to="/dashboard" className="flex items-center gap-2">
                                                <span className="text-accent"><LuNotebook/></span>
                                                Dashboard
                                            </Link>
                                        </li>

                                        <div className="divider my-1"></div>

                                        {/* Logout */}
                                        <li>
                                            <button
                                                onClick={handleLogOutButton}
                                                className="flex items-center gap-2 text-error bg-error/10 hover:bg-error hover:text-white duration-500"
                                            >
                                                <LuLogOut size={16} />
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                    }



                </div>
            </Container>
        </nav>

    );
};

export default Header;