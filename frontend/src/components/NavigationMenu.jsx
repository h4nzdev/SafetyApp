import {
  Home,
  FileText,
  Users,
  MapPin,
  LogOut,
  AlertTriangle,
} from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationMenu() {
  const navigate = useNavigate();
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
  ];

  const isActive = (pathURL) => {
    return location.pathname === pathURL;
  };

  const handleLogout = () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      sessionStorage.removeItem("user");
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 bg-white shadow-xl z-50 w-64 flex flex-col">
      <div className="flex items-center p-4 border-b">
        <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
        <span className="font-semibold text-lg">Emergency App</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.link);
          return (
            <Link to={item.link} key={item.id}>
              <button
                className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors cursor-pointer ${
                  active
                    ? "bg-red-100 text-red-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavigationMenu;
