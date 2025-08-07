import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "Utso Roy",
    email: "Utso@gmail.com",
    role: "Admin",
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-3xl   flex flex-col md:flex-row items-center gap-10 p-10  shadow-green-200 w-full max-w-3xl transition-transform duration-300 hover:scale-[1.01] border-2 border-green-700 cursor-target cursor-pointer">
        
        {/* Avatar Section */}
        <div className="text-white flex flex-col items-center gap-4">
          <FaUserCircle className="text-[150px] text-green-400 drop-shadow-lg" />
          <p className="text-lg font-medium text-gray-400">{user.email}</p>
        </div>

        {/* User Details Section */}
        <div className="space-y-6 text-center md:text-left text-white w-full">
          <h2 className="text-3xl font-bold">
            <span className="text-green-400">Role:</span> {user.role}
          </h2>
          <h2 className="text-3xl font-bold">
            <span className="text-green-400">Name:</span> {user.name}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all shadow-md">
              Edit Profile
            </button>
            <button className="px-6 py-2 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-600 hover:text-white font-semibold transition-all shadow-md">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
