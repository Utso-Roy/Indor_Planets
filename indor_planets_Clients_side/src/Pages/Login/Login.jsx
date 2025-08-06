import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/login.json";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, setUser, googleLogin,resetPassword } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onsubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((data) => {
        setUser(data.user);
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login failed");
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((data) => {
        setUser(data.user);
        navigate(from, { replace: true });

        toast.success("Google Login Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Google Login Failed");
      });
  };



  const handlePassword = () => {
 
    const email = getValues("email"); 
    console.log(email)

  if (!email) {
    toast.error("Please enter your email first");
    return;
  }
  resetPassword(email)
    .then(() => {
      toast.success("Password reset email sent!");
    })
    .catch((error) => {
      toast.error("Failed to send reset email");
      console.log(error);
    });


  }

  return (
    <div className="min-h-screen bg-base-300 flex justify-center items-center px-4">
      <div className="bg-white  rounded-xl shadow-2xl w-full max-w-3xl  p-6 lg:p-10">
        <div className="bg-gradient-to-t from-green-100 via-lime-100 to-green-50 flex flex-col lg:flex-row items-center overflow-hidden">
          {/* Left: Animation */}
          <div className="w-full  lg:w-1/2 flex justify-center items-center p-4">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* Right: Login Form */}
          <div className="w-full  lg:w-1/2 p-4 lg:p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
              Login
            </h2>
            <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input cursor-target input-bordered w-full"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input cursor-target input-bordered w-full pr-10"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{6,}$/,
                        message:
                          "Password must be at least 6 characters and include uppercase, lowercase, number, and special character.",
                      },
                    })}
                  />

                  <span
                    className="absolute top-3 right-3 text-xl text-gray-500 cursor-pointer"
                    onClick={togglePassword}
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>
              </div>

              {/* Forgot password */}
              <div className="text-right">
                <button onClick={handlePassword} className="link link-hover cursor-target text-sm text-green-600">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button className="btn bg-green-500 cursor-target w-full text-white">
                Login
              </button>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-green-500 cursor-target  my-3 w-full text-white"
            >
              <FaGoogle />
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
