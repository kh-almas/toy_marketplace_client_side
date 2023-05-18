import React from 'react';
import PopoverLink from "./PopoverLink.jsx";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <span className="lg:hidden">
                    <PopoverLink />
                </span>
                <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
                    daisyUI
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <a className="btn">login</a>
            </div>
            <div className="lg:hidden navbar-end">
                <a className="btn">login</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
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