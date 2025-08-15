import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ReportProvider } from "./context/ReportContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ReportProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ReportProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
