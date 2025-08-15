import { Bell, User, Search } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { user } = useContext(UserContext);
  const { isDarkMode } = useTheme();
  
  return (
    <header className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border-b p-6 py-4 shadow-sm`}>
      <div className="flex items-center justify-between">
        {/* Search bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate-300' : 'text-slate-400'} w-5 h-5`} />
            <input
              type="text"
              placeholder="Search incidents, contacts..."
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                isDarkMode 
                  ? 'border-slate-600 bg-slate-700 text-white placeholder-slate-300' 
                  : 'border-slate-300 bg-slate-50 text-slate-700 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className={`relative p-2 ${isDarkMode ? 'text-slate-300 hover:text-red-400 hover:bg-slate-700' : 'text-slate-600 hover:text-red-600 hover:bg-red-50'} rounded-lg transition-colors duration-200`}>
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              3
            </span>
          </button>

          {/* User profile */}
          <button className={`flex items-center space-x-3 p-2 ${isDarkMode ? 'text-slate-300 hover:text-red-400 hover:bg-slate-700' : 'text-slate-600 hover:text-red-600 hover:bg-red-50'} rounded-lg transition-colors duration-200`}>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className={`hidden md:block font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>{user?.name}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
