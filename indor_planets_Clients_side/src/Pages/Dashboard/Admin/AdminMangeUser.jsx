import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '../../../Utils/axiosInstance';
import { FaUser, FaUserShield, FaStore } from 'react-icons/fa';
import Loader from '../../../Loading/Loader';
import { toast } from 'react-toastify';

const AdminManageUser = () => {
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['userCollection'],
    queryFn: () => axiosInstance.get('/users').then(res => res.data)
  });

  // Update role mutation
  const updateRoleMutation = useMutation({
    mutationFn: ({ uid, role }) =>
      axiosInstance.put(`/users/${uid}`, { role }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(['userCollection']);
    }
  });

  const handleRoleChange = (uid, role) => {
      updateRoleMutation.mutate({ uid, role });
      toast.success(`successfully role ${role}`)
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-green-600 font-semibold mb-6">
        Manage Users
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-2xl shadow-green-100">
        <table className="table w-full">
          <thead className="bg-green-100 sticky top-0 text-sm md:text-green-700">
            <tr>
              <th className="py-2 px-3 text-left">No</th>
              <th className="py-2 px-3 text-left">Photo</th>
              <th className="py-2 px-3 text-left">Name</th>
              <th className="py-2 px-3 text-left">Email</th>
              <th className="py-2 px-3 text-left">Role</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.uid} className="border-t hover:bg-gray-50 transition-colors">
                <td className="py-2 px-3">{index + 1}</td>
                <td className="py-2 px-3">
                  <img
                    src={u.photo}
                    alt={u.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-2 px-3">{u?.name}</td>
                <td className="py-2 px-3 break-all">{u?.email}</td>
                <td className="py-2 px-3 capitalize font-semibold">{u?.role}</td>
                <td className="py-2 px-3">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleRoleChange(u.uid, 'admin')}
                      disabled={u.role === 'admin'}
                      className={`btn btn-sm text-white flex items-center gap-1 ${
                        u.role === 'admin'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      <FaUserShield /> Make Admin
                    </button>
                    <button
                      onClick={() => handleRoleChange(u.uid, 'seller')}
                      disabled={u.role === 'seller'}
                      className={`btn btn-sm text-white flex items-center gap-1 ${
                        u.role === 'seller'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      <FaStore /> Make Seller
                    </button>
                    <button
                      onClick={() => handleRoleChange(u.uid, 'user')}
                      disabled={u.role === 'user'}
                      className={`btn btn-sm text-white flex items-center gap-1 ${
                        u.role === 'user'
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      <FaUser /> Make User
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUser;
