import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../Utils/axiosInstance";
import { AuthContext } from "../../../Context/AuthContext";
import Loader from "../../../Loading/Loader";

const UserProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: orders = [], isLoading, isError } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: () =>
      axiosInstance.get(`/order/${user?.email}`).then((res) => res.data),
    enabled: !!user?.email,
  });

  if (isLoading) return <Loader />;
  if (isError)
    return <p className="text-center mt-4 text-red-500">Error fetching orders</p>;

  return (
    <div className="p-4 sm:p-6 sm:pl-5 md:pl-5 max-w-full mx-auto">
      <h2 className="text-2xl text-center font-semibold text-green-600 mb-6">
        My Orders
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-green-100 text-green-700 text-sm sticky top-0">
            <tr>
              <th className="py-2 px-2 text-left">#</th>
              <th className="py-2 px-2 text-left">Tran ID</th>
              <th className="py-2 px-2 text-left">Quantity</th>
              <th className="py-2 px-2 text-left">Name</th>
              <th className="py-2 px-2 text-left">Email</th>
              <th className="py-2 px-2 text-left">Status</th>
              <th className="py-2 px-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={order.tran_id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-2 whitespace-nowrap">{index + 1}</td>
                  <td className="py-2 px-2 break-all">{order.tran_id}</td>
                  <td className="py-2 px-2 whitespace-nowrap">{order.quantity}</td>
                  <td className="py-2 px-2 break-words">{order.name}</td>
                  <td className="py-2 px-2 break-words">{order.email}</td>
                  <td
                    className={`py-2 px-2 font-semibold whitespace-nowrap ${
                      order.status === "paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="py-2 px-2 whitespace-nowrap">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProducts;
