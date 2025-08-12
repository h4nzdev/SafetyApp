import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Users,
  MapPin,
  Menu,
  X,
  AlertTriangle,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Dashboard", icon: Home, link: "/homepage" },
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
  ];

  const isActive = (routePath) => {
    return location.pathname === routePath;
  };

  return (
    <>
      {/* Sidebar */}
      {/* Logo section */}
      <div className="flex items-center justify-center h-16 bg-red-600 border-b border-red-500">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-8 h-8 text-white" />
          <h1 className="text-xl font-bold text-white">Emergency App</h1>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="mt-8 px-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.link);
            return (
              <Link
                key={item.id}
                to={item.link}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                  active
                    ? "bg-red-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
        <Link to="/">
          <button className="w-full flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200">
            <LogOut className="w-5 h-5 mr-3 text-slate-400" />
            <span className="font-medium">Logout</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
