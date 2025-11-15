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

  const updateRoleMutation = useMutation({
    mutationFn: ({ uid, role }) =>
      axiosInstance.put(`/users/${uid}`, { role }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(['userCollection']);
    }
  });

  const handleRoleChange = (uid, role) => {
      updateRoleMutation.mutate({ uid, role });
      toast.success(`Successfully changed role to ${role}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-center text-green-600 dark:text-green-400 font-semibold mb-6">
        Manage Users ({users?.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-xl shadow-gray-200 dark:shadow-gray-900">
        {/* Scrollable table container */}
        <div className="max-h-[600px] overflow-y-auto">
          <table className="table w-full bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-gray-200">
            <thead className="bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 sticky top-0 z-10 text-sm">
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
                <tr
                  key={u.uid}
                  className="border-t border-gray-200 dark:border-gray-700 
                  hover:bg-gray-50 dark:hover:bg-[#2b2b2b] transition-colors"
                >
                  <td className="py-2 px-3">{index + 1}</td>

                  <td className="py-2 px-3">
                    <img
                      src={u.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                      alt={u.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-600"
                    />
                  </td>

                  <td className="py-2 px-3">{u?.name}</td>
                  <td className="py-2 px-3 break-all">{u?.email}</td>

                  <td className="py-2 px-3 capitalize font-semibold">{u?.role}</td>

                  <td className="py-2 px-3">
                    <div className="flex gap-2 flex-wrap">
                      {/* Admin */}
                      <button
                        onClick={() => handleRoleChange(u.uid, 'admin')}
                        disabled={u.role === 'admin'}
                        className={`btn btn-sm text-white flex items-center gap-1 cursor-target ${
                          u.role === 'admin'
                            ? '!bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                            : 'bg-blue-500 border-none hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                        }`}
                      >
                        <FaUserShield /> Admin
                      </button>

                      {/* Seller */}
                      <button
                        onClick={() => handleRoleChange(u.uid, 'seller')}
                        disabled={u.role === 'seller'}
                        className={`btn btn-sm text-white flex items-center gap-1 cursor-target ${
                          u.role === 'seller'
                            ? '!bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                            : 'bg-orange-500 border-none hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700'
                        }`}
                      >
                        <FaStore /> Seller
                      </button>

                      {/* User */}
                      <button
                        onClick={() => handleRoleChange(u.uid, 'user')}
                        disabled={u.role === 'user'}
                        className={`btn btn-sm text-white flex items-center gap-1 cursor-target ${
                          u.role === 'user'
                            ? '!bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                            : 'bg-green-500 border-none hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
                        }`}
                      >
                        <FaUser /> User
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 dark:text-gray-400 py-6"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManageUser;
