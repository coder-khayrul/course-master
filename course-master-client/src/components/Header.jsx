import React, { useContext } from 'react';
import { LuGraduationCap, LuLogIn, LuLogOut } from 'react-icons/lu';
import { FiUserMinus, FiUserPlus } from "react-icons/fi";

import { Link, NavLink, useNavigate } from 'react-router';
import Container from './ui/Container';
import Button from './ui/Button';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

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
        {
            user && <li>
                <NavLink to="/add-product">Dashboard</NavLink>
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
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                                <LuGraduationCap className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold">CourseMaster</span>
                        </Link>
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
                            <div className="navbar-end gap-4">
                                <h3>{user.displayName}</h3>
                                <Button onClick={handleLogOutButton} size={"sm"} icon={LuLogOut} btnText={"Log out"} />
                            </div>
                    }



                </div>
            </Container>
        </nav>

    );
};

export default Header;