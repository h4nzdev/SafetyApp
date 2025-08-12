import React from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import IncidentReportForm from "./pages/IncidentReportForm";
import EmergencyContacts from "./pages/EmergencyContacts";
import IncidentMap from "./pages/IncidentMap";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        
        {/* Protected routes with sidebar layout */}
        <Route path="/homepage" element={
          <MainLayout>
            <MainPage />
          </MainLayout>
        } />
        <Route path="/report-incident" element={
          <MainLayout>
            <IncidentReportForm />
          </MainLayout>
        } />
        <Route path="/emergency-contact" element={
          <MainLayout>
            <EmergencyContacts />
          </MainLayout>
        } />
        <Route path="/map-incedent" element={
          <MainLayout>
            <IncidentMap />
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
