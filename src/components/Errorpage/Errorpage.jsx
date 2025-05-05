import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                {/* 404 Heading */}
                <h1 className="text-9xl font-bold text-gray-800">404</h1>

                {/* Error Message */}
                <p className="text-2xl font-medium text-gray-600 mt-4">Oops! Page not found.</p>
                <p className="text-lg text-gray-500 mt-2">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button to Navigate Back Home */}
                <Link 
                    to="/" 
                    className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;




