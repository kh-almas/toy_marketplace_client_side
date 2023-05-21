import React, {useContext, useState} from 'react';
import PopoverLink from "./PopoverLink.jsx";
import logo from '../../../assets/logo.jpg';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Providers/AuthProvider.jsx";

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const [error, setError] = useState('');

    const logOutBtn = () => {
        logout().then(() => {
            // Sign-out successful.
        }).catch((e) => {
            setError(e.code);
        });
    }

    return (
        <>
            <div className="navbar dark:bg-gray-800 bg-teal-300 rounded-full mb-12">
                <div className="navbar-start">
                <span className="lg:hidden">
                    <PopoverLink />
                </span>
                    <Link to={'/'} className="text-xl flex items-center">
                        <img className="w-10 h-10 rounded-full mr-2" src={logo} alt="img"/> Cognitive Wonders
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    {
                        user ? <><div className="tooltip tooltip-bottom" data-tip={user.displayName}><img className="w-6 h-6 rounded-full mr-2" src={user.photoURL} alt="img"/></div><button onClick={logOutBtn} className="btn btn-sm">log Out</button></>
                            : <Link to={'/login'} className="btn btn-sm">login</Link>
                    }

                </div>
                <div className="lg:hidden navbar-end">
                    <Link to={'/login'} className="btn btn-sm">login</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/all-toys'}>All Toys</Link></li>
                        <li><Link to={'/my-toys'}>My Toys</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to={'/create-toy'}>Add Toy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                {error}
            </div>
        </>
    );
};

export default Header;