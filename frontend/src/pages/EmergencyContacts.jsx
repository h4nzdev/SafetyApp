import { Phone, AlertTriangle, Users, Shield, Heart, Flame, Car, Anchor, Cross } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function EmergencyContacts() {
  const { isDarkMode } = useTheme();
  
  const contacts = [
    { 
      id: 1, 
      name: "Police", 
      number: "911", 
      type: "police", 
      color: "blue",
      icon: Shield,
      description: "Emergency law enforcement"
    },
    {
      id: 2,
      name: "Fire Department",
      number: "911",
      type: "fire",
      color: "red",
      icon: Flame,
      description: "Fire and rescue services"
    },
    {
      id: 3,
      name: "Ambulance",
      number: "911",
      type: "medical",
      color: "green",
      icon: Heart,
      description: "Emergency medical services"
    },
    {
      id: 4,
      name: "Coast Guard",
      number: "(02) 527-8481",
      type: "coast-guard",
      color: "navy",
      icon: Anchor,
      description: "Maritime emergency response"
    },
    {
      id: 5,
      name: "Red Cross",
      number: "143",
      type: "red-cross",
      color: "red",
      icon: Cross,
      description: "Humanitarian assistance"
    },
    {
      id: 6,
      name: "NDRRMC",
      number: "(02) 911-1406",
      type: "disaster",
      color: "orange",
      icon: AlertTriangle,
      description: "National disaster response"
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-600 hover:bg-blue-700",
      red: "bg-red-600 hover:bg-red-700",
      green: "bg-green-600 hover:bg-green-700",
      navy: "bg-slate-700 hover:bg-slate-800",
      orange: "bg-orange-600 hover:bg-orange-700"
    };
    return colorMap[color] || "bg-slate-600 hover:bg-slate-700";
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Emergency Contacts</h1>
            <p className="text-red-100 text-lg mt-2">Quick access to emergency services and support organizations</p>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact) => {
          const IconComponent = contact.icon;
          return (
            <div
              key={contact.id}
              className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-red-200`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(contact.color).replace('hover:', '')}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      {contact.name}
                    </h3>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm`}>{contact.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`text-2xl font-bold font-mono ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  {contact.number}
                </div>
                <button
                  onClick={() => handleCall(contact.number)}
                  className={`${getColorClasses(contact.color)} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Important Note */}
      <div className={`${isDarkMode ? 'bg-gradient-to-r from-yellow-900 to-orange-900 border-yellow-700' : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'} border rounded-2xl p-6`}>
        <div className="flex items-start space-x-4">
          <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-yellow-200' : 'text-yellow-800'} mb-2`}>Important Emergency Information</h3>
            <p className={`${isDarkMode ? 'text-yellow-100' : 'text-yellow-700'} leading-relaxed`}>
              In a life-threatening emergency, always call <strong>911</strong> first. 
              Use other numbers for non-emergency situations or additional support. 
              Remember to stay calm and provide clear information about the emergency.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-2xl p-6`}>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-4`}>Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
            <Phone className="w-5 h-5" />
            <span>Call 911</span>
          </button>
          <button className="bg-slate-600 hover:bg-slate-700 text-white p-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
            <AlertTriangle className="w-5 h-5" />
            <span>Report Emergency</span>
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
            <Heart className="w-5 h-5" />
            <span>Medical Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyContacts;
