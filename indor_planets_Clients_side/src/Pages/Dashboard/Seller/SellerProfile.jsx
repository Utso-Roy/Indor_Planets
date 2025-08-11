import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import axiosInstance from "../../../Utils/axiosInstance";
import { AuthContext } from "../../../Context/AuthContext";
import Loader from "../../../Loading/Loader";

const SellerProfile = () => {
  const { user } = useContext(AuthContext);

  const { data, isPending, isError } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: () =>
      axiosInstance.get(`/users/${user?.email}`).then((res) => res.data),
    enabled: !!user?.email,
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load user data
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No user data found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-3xl flex flex-col md:flex-row items-center gap-10 p-10 shadow-green-200 w-full max-w-3xl transition-transform duration-300 hover:scale-[1.01] border-2 border-green-700">
        <div className="text-white flex flex-col items-center gap-4">
          {data?.photo ? (
            <img
              src={data?.photo}
              alt="User Avatar"
              className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <FaUserCircle className="text-[150px] text-green-400 drop-shadow-lg" />
          )}
          <p className="text-lg font-medium text-gray-400">{data?.email}</p>
        </div>

        {/* User Details Section */}
        <div className="space-y-6 text-center md:text-left text-white w-full">
          <h2 className="text-3xl font-bold">
            <span className="text-green-400">Role:</span> {data?.role}
          </h2>
          <h2 className="text-3xl font-bold">
            <span className="text-green-400">Name:</span> {data?.name}
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

export default SellerProfile;
