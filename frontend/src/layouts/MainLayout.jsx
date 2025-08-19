import NavigationMenu from "../components/NavigationMenu";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";
import { ToastContainer } from "react-toastify";

function MainLayout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <NavigationMenu />
      <div className="flex-1 flex flex-col md:pl-64">
        {/* Added pl-64 to offset the fixed sidebar */}
        <div className="px-6 py-4">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        <ToastContainer />
      </div>
    </div>
  );
}

export default MainLayout;
