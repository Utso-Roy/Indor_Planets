import React from "react";
import Card from "../DashoboardComponents/Card";

const UserProfile = () => {
  const user = {
    name: "Utso Roy",
    email: "Utso@gmail.com",
    role: "Admin",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 p-6 w-full max-w-4xl transition-transform hover:scale-[1.01] cursor-target cursor-pointer">
        {/* Profile Card */}
        <Card />

        {/* User Info */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-white text-xl font-semibold">
            <span className="text-green-400">User Role:</span> {user.role}
          </h2>
          <h2 className="text-white text-xl font-semibold">
            <span className="text-green-400">User Name:</span> {user.name}
          </h2>
          <p className="text-white text-lg font-medium">
            <span className="text-green-400">User Email:</span> {user.email}
          </p>
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all">
              Edit Profile
            </button>
            <button className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-600 hover:text-white transition-all">
              View Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
