import { useQuery } from "@tanstack/react-query";
import React from "react";
import axiosInstance from "../../../Utils/axiosInstance";

const AdminMangeReport = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reportData"],
    queryFn: () => axiosInstance.get("/reportData").then((res) => res.data),
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load reports</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Reports</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table w-full">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Reporter Name</th>
              <th>Reported Gmail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((report, index) => (
              <tr key={report._id} className="hover:bg-gray-100">
                <td>{index + 1}</td>
                <td>{report?.reportedName || "Unknown"}</td>
                <td>{report?.reportedBy || "No Subject"}</td>
                <td className="flex flex-col md:flex-row gap-2">
                  <button className="btn btn-sm bg-blue-500 text-base-200">Details</button>
                  <button className="btn btn-sm bg-red-500 text-base-200">Cancel</button>
                </td>
              </tr>
            ))}
            {data?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
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
