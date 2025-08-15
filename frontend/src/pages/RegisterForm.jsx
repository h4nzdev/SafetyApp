import axios from "axios";
import { Eye, EyeOff, Lock, Mail, Phone, User, UserPlus, MapPin, Building, CreditCard, X, Check } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showIdModal, setShowIdModal] = useState(false);
  const [idNumber, setIdNumber] = useState("");
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    department: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.address || !formData.department) {
      return alert("Please fill out all fields");
    }

    // Show ID modal before proceeding
    setShowIdModal(true);
  };

  const handleIdSubmit = async () => {
    if (!idNumber) {
      return alert("Please enter your ID number");
    }

    try {
      const dataWithId = { ...formData, idNumber };
      const res = await axios.post("http://localhost:3000/register", dataWithId);

      if (res.data.success) {
        alert(res.data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          address: "",
          department: "",
        });
        setIdNumber("");
        setShowIdModal(false);
      } else {
        return alert(res.data.message);
      }
    } catch (error) {
      console.error("Error :", error);
      alert("Registration failed. Please try again.");
    }
  };

  const closeModal = () => {
    setShowIdModal(false);
    setIdNumber("");
  };

  return (
    <>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-red-50 to-slate-100'} flex items-center justify-center p-4`}>
        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-3xl shadow-2xl w-full max-w-lg p-8 border`}>
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Create Account</h1>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-3 text-lg`}>
              Join our emergency network
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Personal Information Group */}
            <div className={`${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-50 border-slate-200'} border rounded-xl p-6`}>
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>Personal Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                    Full Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                        isDarkMode 
                          ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                          : 'border-slate-300 bg-white text-slate-700 placeholder-slate-400'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                        isDarkMode 
                          ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                          : 'border-slate-300 bg-white text-slate-700 placeholder-slate-400'
                      }`}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                Phone Number
              </label>
              <div className="relative">
                <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                      : 'border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400'
                  }`}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                Address
              </label>
              <div className="relative">
                <MapPin className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                      : 'border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400'
                  }`}
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                Department
              </label>
              <div className="relative">
                <Building className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                <select
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white' 
                      : 'border-slate-300 bg-slate-50 text-slate-700'
                  }`}
                  required
                >
                  <option value="">Select department</option>
                  <option value="fire">Fire Department</option>
                  <option value="police">Police Department</option>
                  <option value="netizen">Netizen</option>
                </select>
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                      : 'border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-300 hover:text-slate-200' : 'text-slate-400 hover:text-slate-600'} transition-colors`}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5 mr-3" />
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Already have an account?{" "}
              <Link
                to="/"
                className="text-red-600 hover:text-red-700 font-semibold underline decoration-2 underline-offset-2"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* ID Verification Modal */}
      {showIdModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl shadow-2xl w-full max-w-xl p-8 border`}>
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>ID Verification</h2>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-2`}>
                Please enter your ID number to complete registration
              </p>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} mb-3`}>
                ID Number
              </label>
              <div className="relative">
                <CreditCard className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'}`} />
                <input
                  type="text"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    isDarkMode 
                      ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                      : 'border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400'
                  }`}
                  placeholder="Enter your ID number"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={closeModal}
                className={`flex-1 px-6 py-3 border rounded-xl font-semibold transition-all duration-200 flex items-center justify-center ${
                  isDarkMode 
                    ? 'border-slate-600 text-slate-300 hover:bg-slate-700' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </button>
              <button
                onClick={handleIdSubmit}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center"
              >
                <Check className="w-5 h-5 mr-2" />
                Verify & Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterForm;