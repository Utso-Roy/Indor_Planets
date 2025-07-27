import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/Error 404.json';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4">
            <div className="max-w-md w-full text-center">
                <Lottie animationData={errorAnimation} loop={true} className="w-80 h-80 mx-auto" />

                <h1 className="text-4xl font-bold mt-6 mb-2 text-red-600">Page Not Found</h1>
                <p className="mb-6 text-gray-600">
                    Sorry, the page you are looking for does not exist.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="btn text-white bg-green-500"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Error;
