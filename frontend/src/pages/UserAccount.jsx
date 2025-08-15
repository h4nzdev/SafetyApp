import React, { useContext, useState } from "react";
import { User, Edit3, Camera, Eye, EyeOff, X } from "lucide-react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext";

function UserAccount() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { user, setUser } = useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    department: user.department,
    address: user.address,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/update-user/${user._id}`,
        formData
      );
      if (res.data.success) {
        setUser(res.data.updateUser);
        Swal.fire({
          icon: "success",
          title: "Updated Information",
          text: res.data.message,
        });
        setIsEdit(false);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  console.log(user._id);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">User Account</h1>
            <p className="text-red-100 text-lg mt-2">
              Manage your personal information
            </p>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-8 shadow-sm`}>
        <div className="flex items-start justify-between mb-8">
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            Personal Information
          </h3>

          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className={`flex items-center space-x-2 px-4 py-2 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-slate-200'} rounded-xl transition-colors duration-200`}
            >
              <X className="w-4 h-4" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Cancel</span>
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors duration-200"
            >
              <Edit3 className="w-4 h-4" />
              <span className="text-sm font-medium">Edit Profile</span>
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="relative flex-shrink-0">
            <div className={`w-32 h-32 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-2xl flex items-center justify-center`}>
              <User className={`w-16 h-16 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
            </div>
            <button className="absolute -bottom-2 -right-2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* User Details Form */}
          <form onSubmit={handleUpdate} className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  disabled={!isEdit}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled={!isEdit}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  disabled={!isEdit}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    disabled={!isEdit}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`w-full px-4 py-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'border-slate-600 bg-slate-700 text-white' 
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Department
                </label>
                <input
                  value={formData.department}
                  disabled={true}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  type="text"
                  className={`w-full px-4 capitalize py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Address
                </label>
                <input
                  value={formData.address}
                  disabled={!isEdit}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  type="text"
                  defaultValue="123 Emergency St, City, State 12345"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              {isEdit ? (
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors duration-200"
                >
                  Save Changes
                </button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Account Summary */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6 shadow-sm`}>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          Account Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>EMP-2024-001</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>Employee ID</p>
          </div>

          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Active</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>Account Status</p>
          </div>

          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Jan 15, 2024</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>Member Since</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
