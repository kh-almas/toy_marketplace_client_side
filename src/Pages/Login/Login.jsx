import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import GoogleAuth from "../Shared/SocialAuth/Google/GoogleAuth.jsx";
import {AuthContext} from "../../Providers/AuthProvider.jsx";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const userLoginMessage = location.state && location.state.message;

    const [message, setMassage] = useState('');


    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setMassage('');
        if(email === '' || password === ''){
            setMassage('Input required');
            return;
        }
        userLogin(email, password)
            .then(() => {
                setMassage('Login success');
                navigate(from, { replace: true });
            })
            .catch(e => {
                setMassage("Email/Password doesn't match");
            })
        form.reset();
    }

    return (
        <div>
            <div className="flex items-center justify-center bg-cover bg-center min-h-screen">
                <div className="w-1/2 p-8">
                    <p className="text-3xl mb-5">Welcome to our login page!</p>
                    <p className="text-gray-500">
                        Please fill out the form on the right to login your account.
                    </p>
                    <div>
                        <h2 className="text-2xl mt-8">You can login with:</h2>
                        <div className="flex mt-4">
                            <GoogleAuth from={from}></GoogleAuth>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-8 text-gray-800 dark:text-gray-200">
                    <h2 className="text-2xl mb-4">User Login</h2>
                    <small>{ message }</small>
                    <small>{ userLoginMessage }</small>
                    <form onSubmit={handelSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                            />
                        </div>
                        <button
                            className="bg-teal-900 text-white hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            login
                        </button>
                    </form>
                    <p className="mt-8 text-center">
                        Don't have an account?{' '}
                        <Link to="/registration" className="text-blue-500 hover:text-blue-700">
                            Registration
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;