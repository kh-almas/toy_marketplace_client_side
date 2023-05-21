import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">Oops! The page you're looking for seems to be missing.</p>
            <img
                src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
                alt="404 Not Found"
                className="w-64 mt-8"
            />
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go to Home Page
            </a>
        </div>
    );
};

export default NotFound;