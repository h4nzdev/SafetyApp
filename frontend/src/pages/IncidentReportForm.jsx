import { useState } from "react";
import { MapPin, Camera, Send, AlertTriangle, Upload } from "lucide-react";

function IncidentReportForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
    photo: null,
  });

  const incidentTypes = [
    "Accident",
    "Fire",
    "Medical Emergency",
    "Crime",
    "Natural Disaster",
    "Infrastructure Issue",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ type: "", location: "", description: "", photo: null });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Report an Incident</h1>
            <p className="text-red-100 text-lg mt-2">Help keep your community safe by reporting incidents quickly</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              Incident Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 text-slate-700 text-lg transition-all duration-200"
              required
            >
              <option value="">Select incident type</option>
              {incidentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full pl-14 pr-6 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 text-slate-700 placeholder-slate-400 text-lg transition-all duration-200"
                placeholder="Enter the location of the incident"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={6}
              className="w-full px-6 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-slate-50 text-slate-700 placeholder-slate-400 text-lg resize-none transition-all duration-200"
              placeholder="Describe what happened in detail. Include any relevant information that could help emergency responders..."
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              Photo Evidence (Optional)
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-red-300 transition-all duration-200 bg-slate-50 hover:bg-red-50">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-slate-600 text-lg mb-2">Click to upload a photo</p>
              <p className="text-slate-500 text-sm">Supports JPG, PNG, GIF up to 10MB</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  setFormData({ ...formData, photo: e.target.files[0] })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-5 px-8 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            <Send className="w-6 h-6 mr-3" />
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default IncidentReportForm;
