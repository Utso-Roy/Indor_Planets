import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Growing Plants.json";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth"; 
import { useNavigate } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const { signUp, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const username = data.username;
    const imageFile = data.profileImage[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=f3e962a8a0a96e0fed778a75628796dc`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgResult = await res.json();

      if (imgResult.success) {
        const imageUrl = imgResult.data.url;

        signUp(email, password)
          .then(async (result) => {
            const loggedUser = result.user;

           
            await updateProfile(loggedUser, {
              displayName: username,
              photoURL: imageUrl,
            });

            setUser({
              ...loggedUser,
              displayName: username,
              photoURL: imageUrl,
            });

            toast.success("Registration successful");
            navigate('/')
          })
          .catch((error) => {
            toast.error("Sign up error: " + error.message);
          });
      } else {
        toast.error("Image upload failed");
      }
    } catch (err) {
      toast.error("Something went wrong: " + err.message);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-base-300 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-6 lg:p-10">
        <div className="bg-gradient-to-t from-green-100 via-lime-100 to-green-50 flex flex-col lg:flex-row items-center overflow-hidden">
          {/* Animation */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* User Name */}
              <div>
                <label className="label">User Name</label>
                <input
                  type="text"
                  className="input cursor-target input-bordered w-full"
                  placeholder="Enter your user name"
                  {...register("username", {
                    required: "User Name is required",
                  })}
                />
                <p className="text-red-500">{errors.username?.message}</p>
              </div>

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

              {/* Image Upload */}
              <div>
                <label className="label">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input cursor-target file-input-bordered w-full"
                  {...register("profileImage", {
                    required: "Image is required",
                  })}
                />
                <p className="text-red-500">{errors.profileImage?.message}</p>
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
                </div>
                <p className="text-red-500">{errors.password?.message}</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn cursor-target bg-green-500 w-full text-white"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
