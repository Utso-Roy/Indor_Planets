import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../../../Utils/axiosInstance';

const SellerMyProducts = () => {
  const { data: products = [], isPending } = useQuery({
    queryKey: ['addProductsData'],
    queryFn: () =>
      axiosInstance.get('/addProductsData').then((res) => res.data),
  });

  if (isPending) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
        My Uploaded Products
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="table table-zebra">
            <thead className="sticky top-0 bg-green-100 text-green-800 font-semibold z-10">
              <tr>
                <th>Number</th>
                <th>Product</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="capitalize">{product?.category}</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm bg-green-500 hover:bg-green-700 text-base-200">
                      View
                    </button>
                    <button className="btn btn-sm bg-red-500 hover:bg-red-700 text-base-200">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products?.length === 0 && (
          <p className="text-center py-10 font-medium text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SellerMyProducts;
