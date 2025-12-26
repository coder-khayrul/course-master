import React from 'react';
import { LuGraduationCap, LuLogIn } from 'react-icons/lu';
import { FiUserPlus } from "react-icons/fi";

import { Link, NavLink } from 'react-router';
import Container from './ui/Container';
import Button from './ui/Button';

const Header = () => {
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/courses"}>All Courses</NavLink></li>
        <li><NavLink to={"/about"}>About us</NavLink></li>
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
                    <div className="navbar-end gap-4">
                        <Button size={"sm"} icon={LuLogIn}  btnText={"Login"}/>
                        <Button size={"sm"} icon={FiUserPlus} btnText={"Sign up"}/>
                        {/* <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button> */}
                    </div>
                </div>
            </Container>
        </nav>

    );
};

export default Header;