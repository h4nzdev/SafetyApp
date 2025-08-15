import {
  Home,
  FileText,
  Users,
  MapPin,
  LogOut,
  AlertTriangle,
  User,
  Settings,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext";

function NavigationMenu() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  const menuItems = [
    { id: "home", label: "Home", icon: Home, link: "/homepage" },
    {
      id: "report",
      label: "Report Incident",
      icon: FileText,
      link: "/report-incident",
    },
    {
      id: "contacts",
      label: "Emergency Contacts",
      icon: Users,
      link: "/emergency-contact",
    },
    { id: "map", label: "Incident Map", icon: MapPin, link: "/map-incedent" },
    { id: "user", label: "User Account", icon: User, link: "/user-account" },
    { id: "setttings", label: "Settings", icon: Settings, link: "/settings" },
  ];

  const isActive = (pathURL) => {
    return location.pathname === pathURL;
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      sessionStorage.removeItem("user");
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    }
  };

  return (
    <nav className={`md:flex hidden fixed left-0 top-0 bottom-0 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-lg z-50 w-64 flex-col border-r`}>
      {/* Simple Header */}
      <div className={`flex items-center p-6 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Emergency App</span>
      </div>

      {/* Clean Navigation Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.link);
          return (
            <Link to={item.link} key={item.id}>
              <button
                className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors cursor-pointer ${
                  active
                    ? isDarkMode 
                      ? "bg-red-900 text-red-300 border-r-2 border-red-500"
                      : "bg-red-50 text-red-700 border-r-2 border-red-600"
                    : isDarkMode
                      ? "text-slate-300 hover:bg-slate-700"
                      : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 mr-3 ${
                    active 
                      ? isDarkMode ? "text-red-400" : "text-red-600"
                      : isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </button>
            </Link>
          );
        })}
      </div>

      {/* Simple Logout */}
      <div className={`p-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center px-4 py-3 rounded-lg ${isDarkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-50'} transition-colors cursor-pointer`}
        >
          <LogOut className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default NavigationMenu;