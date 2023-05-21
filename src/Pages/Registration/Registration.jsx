import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import GoogleAuth from "../Shared/SocialAuth/Google/GoogleAuth.jsx";
import {AuthContext} from "../../Providers/AuthProvider.jsx";

const Registration = () => {
    const {userRegistration, updateProfileInformation} = useContext(AuthContext);
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [nameError , setNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError , setEmailError] = useState('');

    const [photoUrl, setPhotoUrl] = useState('');
    const [photoUrlError , setPhotoUrlError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError , setPasswordError] = useState('');

    const handleNameChange = (event) => {
        const nameValue = event.target.value;
        setNameError('');
        setName(nameValue);

        if(nameValue.length <1)
        {
            setNameError("Enter a name");
        }

        if(nameValue !== ''){
            if(nameValue.length >20)
            {
                setNameError("Name can't be more then 20 characters");
            }

            if (/(?=.*[-._!"`'#%&,:;<>=@{}~])/.test(nameValue))
            {
                setNameError("Don't use special characters in name");
            }
        }
    }

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmailError('');
        setEmail(emailValue);

        if(emailValue.length <1)
        {
            setNameError("Enter a email");
        }

        if(emailValue !== ''){
            if(emailValue.length >100)
            {
                setNameError("Email can't be more then 100 characters");
            }
            if (!/(?=.*[@].*[.])/.test(emailValue))
            {
                setEmailError("You have entered an invalid email address!");
            }
        }
    }

    const handlePhotoUrlChange = (event) => {
        const photoUrlValue = event.target.value;
        setPhotoUrlError('');
        setPhotoUrl(photoUrlValue);

        if(photoUrlValue.length <1)
        {
            setPhotoUrlError("Enter a profile image url");
        }

        if(photoUrlValue !== ''){
            if(photoUrlValue.length > 500)
            {
                setPhotoUrlError("profile image url can't be more then 500 characters");
            }

            if(!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(photoUrlValue)) {
                setPhotoUrlError("You have entered an invalid URL!");
            }
        }
    }

    const handlePassword = (event) => {
        const passwordValue = event.target.value;
        setPasswordError('');
        setPassword(passwordValue);

        if(passwordValue.length < 8)
        {
            setPasswordError("Password should minimum 8 character");
        }

        if(passwordValue !== ''){
            if(passwordValue.length > 255)
            {
                setPasswordError("Email can't be more then 100 characters");
            }
            if (!/(?=.*[-._!"`'#%&,:;<>=@{}~].*[0-9])/.test(passwordValue))
            {
                setPasswordError("Password should contain one special characters and one number");
            }
        }
    }
    const handelRegistration = (e) => {
        e.preventDefault();
        setMessage('Please wait');

        if (name === ''){
            setNameError('Input required');
            return;
        }

        if (email === ''){
            setEmailError('Input required');
            return;
        }

        if (photoUrl === ''){
            setPhotoUrlError('Input required');
            return;
        }

        if (password === ''){
            setPasswordError('Input required');
            return;
        }

        userRegistration(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfileInformation(user , name, photoUrl);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
        setName('');
        setEmail('');
        setPhotoUrl('');
        setPassword('');
    }
    return (
        <div>
            <div className="flex items-center justify-center bg-cover bg-center min-h-screen">
                <div className="w-1/2 p-8">
                    <p className="text-3xl mb-5">Welcome to our registration page!</p>
                    <p className="text-gray-500">
                        Please fill out the form on the right to create your account.
                    </p>
                    <div>
                        <h2 className="text-2xl mt-8">You can signup with:</h2>
                        <div className="flex mt-4">
                            <GoogleAuth />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-8 text-gray-800 dark:text-gray-200">
                    <h2 className="text-2xl mb-4">User Registration</h2>
                    <span className="dark:text-white text-gray-800">{message}</span>
                    <form onSubmit={handelRegistration}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                            />
                            <small className="text-white">{ nameError }</small>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <small className="text-white">{ emailError }</small>
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
                                value={password}
                                onChange={handlePassword}
                            />
                            <small className="text-white">{ passwordError }</small>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-gray-800 dark:text-gray-200" htmlFor="url">
                                URL
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:border-teal-500 focus:shadow-outline"
                                id="url"
                                type="text"
                                placeholder="Enter your URL"
                                value={photoUrl}
                                onChange={handlePhotoUrlChange}
                            />
                            <small className="text-white">{ photoUrlError }</small>
                        </div>
                        <button
                            className="bg-teal-900 text-white hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-8 text-center">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:text-blue-700">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;