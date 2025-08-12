import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosInstance from "../../../Utils/axiosInstance";
import Loader from "../../../Loading/Loader";
import { Link } from "react-router";

const AdminMangeReport = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reportData"],
    queryFn: () => axiosInstance.get("/reportData").then((res) => res.data),
  });


  const handleCancel = (id) => {
    console.log('utso',id)
  }

  if (isLoading) return <Loader></Loader>;

  if (error)
    return (
      <p className="text-center text-red-500 py-6">Failed to load reports</p>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-green-500 font-semibold mb-6">
        Manage Reports
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-2xl shadow-green-100">
        <table className="table w-full">
          <thead className="bg-green-100 text-sm md:text-green-700">
            <tr>
              <th className="py-2 px-3 text-left">Number</th>
              <th className="py-2 px-3 text-left">Reporter Name</th>
              <th className="py-2 px-3 text-left">Reported Gmail</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((report, index) => (
              <tr
                key={report._id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3 break-all">
                  {report?.reportedName || "Unknown"}
                </td>
                <td className="py-2 px-3 break-all">
                  {report?.reportedBy || "N/A"}
                </td>
                <td className="py-2 px-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link to={`/productsDetails/${report?.productId}`}>
                      <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto">
                        Details
                      </button>
                    </Link>
                    <button onClick={()=>handleCancel(report?.productId)} className="btn btn-sm bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto">
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {data?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-6">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMangeReport;
