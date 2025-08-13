import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import IncidentReportForm from "./pages/IncidentReportForm";
import EmergencyContacts from "./pages/EmergencyContacts";
import IncidentMap from "./pages/IncidentMap";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />

      {/* Protected routes with sidebar layout */}
      <Route
        path="/homepage"
        element={
          <ProtectedRoute>
            <MainLayout>
              <HomePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/report-incident"
        element={
          <ProtectedRoute>
            <MainLayout>
              <IncidentReportForm />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/emergency-contact"
        element={
          <ProtectedRoute>
            <MainLayout>
              <EmergencyContacts />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/map-incedent"
        element={
          <ProtectedRoute>
            <MainLayout>
              <IncidentMap />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
