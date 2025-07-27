import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/login.json';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    return (
       <div className="min-h-screen bg-green-100 flex justify-center items-center px-4">
    <div className="bg-white  rounded-xl shadow-2xl w-full max-w-3xl  p-6 lg:p-10">
                <div className='bg-gradient-to-t from-green-100 via-lime-100 to-green-50 flex flex-col lg:flex-row items-center overflow-hidden'>
                    

                        
        {/* Left: Animation */}
        <div className="w-full  lg:w-1/2 flex justify-center items-center p-4">
            <Lottie animationData={animationData} loop={true} className="w-full max-w-sm h-auto" />
        </div>

        {/* Right: Login Form */}
        <div className="w-full  lg:w-1/2 p-4 lg:p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Welcome Back</h2>
            <form className="space-y-4">
                {/* Email */}
                <div>
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="label">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input input-bordered w-full pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            className="absolute top-3 right-3 text-xl text-gray-500 cursor-pointer"
                            onClick={togglePassword}
                        >
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </span>
                    </div>
                </div>

                {/* Forgot password */}
                <div className="text-right">
                    <a className="link link-hover text-sm text-green-600">Forgot password?</a>
                </div>

                {/* Login Button */}
                <button className="btn bg-green-500 w-full text-white">Login</button>

                
            </form>
        </div>
    </div>
    </div>
</div>

    );
};

export default Login;
