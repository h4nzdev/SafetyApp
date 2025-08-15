import React from "react";
import { User, Edit3, Camera } from "lucide-react";

function UserAccount() {
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
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="flex items-start justify-between mb-8">
          <h3 className="text-xl font-bold text-slate-800">Personal Information</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors duration-200">
            <Edit3 className="w-4 h-4" />
            <span className="text-sm font-medium">Edit Profile</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 bg-slate-200 rounded-2xl flex items-center justify-center">
              <User className="w-16 h-16 text-slate-400" />
            </div>
            <button className="absolute -bottom-2 -right-2 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* User Details Form */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Doe"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  defaultValue="john.doe@emergency.gov"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-slate-500 text-sm font-medium mb-2">Department</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Fire Department</option>
                  <option>Police Department</option>
                  <option>Medical Services</option>
                  <option>Emergency Management</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-slate-500 text-sm font-medium mb-2">Address</label>
                <input 
                  type="text" 
                  defaultValue="123 Emergency St, City, State 12345"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors duration-200">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Summary */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Account Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <p className="text-2xl font-bold text-slate-800">EMP-2024-001</p>
            <p className="text-slate-500 text-sm mt-1">Employee ID</p>
          </div>
          
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <p className="text-2xl font-bold text-slate-800">Active</p>
            <p className="text-slate-500 text-sm mt-1">Account Status</p>
          </div>
          
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <p className="text-2xl font-bold text-slate-800">Jan 15, 2024</p>
            <p className="text-slate-500 text-sm mt-1">Member Since</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;