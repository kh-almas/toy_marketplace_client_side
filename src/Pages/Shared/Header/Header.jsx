import React from 'react';
import PopoverLink from "./PopoverLink.jsx";
import logo from '../../../assets/logo.jpg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <span className="lg:hidden">
                    <PopoverLink />
                </span>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className="w-10 h-10 rounded-full mr-2" src={logo} alt="img"/> Cognitive Wonders
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <Link to={'/login'} className="btn">login</Link>
            </div>
            <div className="lg:hidden navbar-end">
                <Link to={'/login'} className="btn">login</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><a>All Toys</a></li>
                    <li><a>My Toys</a></li>
                    <li><a>Blogs</a></li>
                    <li tabIndex={0}>
                        <a className="justify-between">
                            Add
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Category</a></li>
                            <li><a>Toy</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;