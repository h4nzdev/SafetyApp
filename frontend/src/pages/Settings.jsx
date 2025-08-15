import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import {
  Settings,
  Moon,
  Sun,
  Shield,
  Bell,
  Globe,
  Smartphone,
  Lock,
} from "lucide-react";

function SettingsPages() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [autoReports, setAutoReports] = useState(false);

  return (
    <div className={`space-y-8 ${isDarkMode ? 'bg-slate-900 min-h-screen' : ''}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-red-100 text-lg mt-2">
              Configure your app preferences
            </p>
          </div>
        </div>
      </div>

      {/* App Preferences */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6 shadow-sm`}>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          App Preferences
        </h3>

        <div className="space-y-6">
          {/* Dark Mode Toggle */}
          <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-white" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-600" />
                )}
              </div>
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Dark Mode</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Switch between light and dark themes
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isDarkMode ? "bg-red-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isDarkMode
                    ? "transform translate-x-7"
                    : "transform translate-x-1"
                }`}
              ></div>
            </button>
          </div>

          {/* Emergency Notifications */}
          <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  Emergency Notifications
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Receive alerts for critical incidents
                </p>
              </div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications ? "bg-red-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  notifications
                    ? "transform translate-x-7"
                    : "transform translate-x-1"
                }`}
              ></div>
            </button>
          </div>

          {/* Location Access */}
          <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                <Globe className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-600'}`} />
              </div>
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Location Access</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Allow app to access your location for incidents
                </p>
              </div>
            </div>
            <button
              onClick={() => setLocationAccess(!locationAccess)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                locationAccess ? "bg-red-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  locationAccess
                    ? "transform translate-x-7"
                    : "transform translate-x-1"
                }`}
              ></div>
            </button>
          </div>

          {/* Auto-Submit Reports */}
          <div className={`flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                <Smartphone className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-600'}`} />
              </div>
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  Auto-Submit Reports
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Automatically send crash detection reports
                </p>
              </div>
            </div>
            <button
              onClick={() => setAutoReports(!autoReports)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                autoReports ? "bg-red-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  autoReports
                    ? "transform translate-x-7"
                    : "transform translate-x-1"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6 shadow-sm`}>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          Privacy & Security
        </h3>

        <div className="space-y-4">
          <button className={`w-full flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-slate-100'} rounded-xl transition-colors`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                <Lock className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-600'}`} />
              </div>
              <div className="text-left">
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Change Password</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Update your account security
                </p>
              </div>
            </div>
            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-400'}>→</span>
          </button>

          <button className={`w-full flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-slate-100'} rounded-xl transition-colors`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                <Shield className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-600'}`} />
              </div>
              <div className="text-left">
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Privacy Policy</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Review how we handle your data
                </p>
              </div>
            </div>
            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-400'}>→</span>
          </button>

          <button className={`w-full flex items-center justify-between p-4 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-slate-100'} rounded-xl transition-colors`}>
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-lg flex items-center justify-center`}>
                <Settings className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-slate-600'}`} />
              </div>
              <div className="text-left">
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Data Management</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>
                  Export or delete your account data
                </p>
              </div>
            </div>
            <span className={isDarkMode ? 'text-slate-300' : 'text-slate-400'}>→</span>
          </button>
        </div>
      </div>

      {/* App Information */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6 shadow-sm`}>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>
          App Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>v2.1.4</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>App Version</p>
          </div>

          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Updated</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>Aug 15, 2025</p>
          </div>

          <div className={`text-center p-4 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} rounded-xl`}>
            <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>24/7</p>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm mt-1`}>Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPages;
