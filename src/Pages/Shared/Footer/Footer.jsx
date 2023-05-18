import React from 'react';
import logo from "../../../assets/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-100 dark:bg-gray-900 mt-12">
            <div className="mx-auto px-4 border-solid border-b-2 border-gray-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="mb-4 flex justify-center items-center">
                        <img className="rounded-lg mr-2" src={logo} alt="img"/>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Website Name</h4>
                        <p className="mb-4 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec justo in est suscipit consequat.</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Contact Information</h4>
                        <p className="mb-2 text-gray-600 dark:text-gray-300">123 Main Street</p>
                        <p className="mb-2 text-gray-600 dark:text-gray-300">City, State ZIP</p>
                        <p className="mb-4 text-gray-600 dark:text-gray-300">Phone: (123) 456-7890</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Follow Us</h4>
                        <div className="flex">
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-400 mr-4"><FaFacebook className="text-xl" /></a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-400 mr-4"><FaGoogle className="text-xl" /></a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-400"><FaTwitter className="text-2xl mr-4" /></a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-400"><FaGithub className="text-2xl" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-4 px-4">
                <p className="text-center text-gray-600 dark:text-white">&copy; 2023 Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
