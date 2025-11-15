import React from 'react';
import { FaUserCircle, FaBox, FaChartLine, FaCog, FaBell, FaHeart, FaShoppingCart, FaStar, FaUsers, FaFileAlt, FaLeaf } from 'react-icons/fa';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const UserHome = () => {
  // Data for charts
  const userManagementData = [
    { month: 'Jan', users: 65, active: 45 },
    { month: 'Feb', users: 78, active: 58 },
    { month: 'Mar', users: 90, active: 70 },
    { month: 'Apr', users: 105, active: 85 },
    { month: 'May', users: 120, active: 95 },
    { month: 'Jun', users: 140, active: 115 }
  ];

  const productManagementData = [
    { category: 'Succulents', products: 45, sold: 32 },
    { category: 'Ferns', products: 78, sold: 65 },
    { category: 'Flowering', products: 34, sold: 28 },
    { category: 'Tropical', products: 56, sold: 42 },
    { category: 'Air Plants', products: 23, sold: 18 }
  ];

  const reportsData = [
    { name: 'Sales', value: 4500 },
    { name: 'Revenue', value: 3200 },
    { name: 'Orders', value: 2800 },
    { name: 'Returns', value: 800 }
  ];

  const ordersData = [
    { day: 'Mon', orders: 24 },
    { day: 'Tue', orders: 35 },
    { day: 'Wed', orders: 28 },
    { day: 'Thu', orders: 42 },
    { day: 'Fri', orders: 55 },
    { day: 'Sat', orders: 48 },
    { day: 'Sun', orders: 32 }
  ];

  const COLORS = ['#10b981', '#059669', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];

  const stats = [
    { icon: <FaUsers />, label: 'Total Users', value: '140', change: '+12%', color: 'emerald' },
    { icon: <FaLeaf />, label: 'Plants', value: '236', change: '+8%', color: 'green' },
    { icon: <FaShoppingCart />, label: 'Orders', value: '264', change: '+23%', color: 'teal' },
    { icon: <FaFileAlt />, label: 'Reports', value: '48', change: '+5%', color: 'lime' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaLeaf className="text-green-600 text-4xl animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Plant Dashboard
            </h1>
            <FaLeaf className="text-green-600 text-4xl animate-pulse" />
          </div>
          <p className="text-green-700 text-lg font-medium">
            Indoor Plants Management & Analytics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl text-green-600">
                  {stat.icon}
                </div>
                <span className="text-green-600 font-bold text-sm bg-green-100 px-3 py-1 rounded-full">{stat.change}</span>
              </div>
              <h3 className="text-green-700 text-sm mb-1 font-semibold">{stat.label}</h3>
              <p className="text-3xl font-bold text-green-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Management Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaUsers className="text-2xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">Manage Users</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userManagementData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis dataKey="month" stroke="#059669" />
                <YAxis stroke="#059669" />
                <Tooltip contentStyle={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981' }} />
                <Legend />
                <Area type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                <Area type="monotone" dataKey="active" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Product Management Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaLeaf className="text-2xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">Manage Plants</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productManagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis dataKey="category" stroke="#059669" />
                <YAxis stroke="#059669" />
                <Tooltip contentStyle={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981' }} />
                <Legend />
                <Bar dataKey="products" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="sold" fill="#34d399" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Reports Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaFileAlt className="text-2xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">Manage Reports</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={reportsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {reportsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Orders Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaShoppingCart className="text-2xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">Weekly Orders</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis dataKey="day" stroke="#059669" />
                <YAxis stroke="#059669" />
                <Tooltip contentStyle={{ backgroundColor: '#f0fdf4', border: '2px solid #10b981' }} />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={3} dot={{ r: 6, fill: '#10b981' }} activeDot={{ r: 8, fill: '#059669' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-white flex items-center gap-4">
              <FaLeaf className="text-5xl opacity-80" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Grow Your Business?</h3>
                <p className="text-green-100">Access detailed reports and plant analytics</p>
              </div>
            </div>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <FaChartLine />
              View Full Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;