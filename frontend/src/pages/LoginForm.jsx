import { AlertTriangle, Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext"; // Import UserContext
import { useTheme } from "../context/ThemeContext";
import savvi from "/savvi.png"

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Get setUser function from context
  const { isDarkMode } = useTheme();
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", formData);
      if (res.data.success) {
        // Save user data in both sessionStorage and context
        const userData = res.data.user;
        sessionStorage.setItem("user", JSON.stringify(userData));
        setUser(userData); // Update the user context
        navigate("/homepage");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message) // Show backend message
      } else {
        console.error("Error:", error.message);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-red-50 to-slate-100"
      } flex items-center justify-center p-4`}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        } rounded-3xl shadow-2xl w-full max-w-md p-8 border`}
      >
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <img src={savvi} alt="Savvi" />
          </div>
          <h1
            className={`text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Emergency App
          </h1>
          <p
            className={`${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            } mt-3 text-lg`}
          >
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              className={`block text-sm font-semibold ${
                isDarkMode ? "text-slate-200" : "text-slate-700"
              } mb-3`}
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-400"
                }`}
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                  isDarkMode
                    ? "border-slate-600 bg-slate-700 text-white placeholder-slate-300"
                    : "border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400"
                }`}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-semibold ${
                isDarkMode ? "text-slate-200" : "text-slate-700"
              } mb-3`}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? "text-slate-400" : "text-slate-400"
                }`}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`w-full pl-12 pr-12 py-4 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${
                  isDarkMode
                    ? "border-slate-600 bg-slate-700 text-white placeholder-slate-300"
                    : "border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400"
                }`}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode
                    ? "text-slate-400 hover:text-slate-300"
                    : "text-slate-400 hover:text-slate-600"
                } transition-colors`}
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
            <p className="text-red-400">{message}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <LogIn className="w-5 h-5 mr-3" />
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-red-600 hover:text-red-700 font-semibold underline decoration-2 underline-offset-2"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
