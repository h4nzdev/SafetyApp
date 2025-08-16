import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import QuickActions from "../components/homepage/QuickActions";
import StatsOverview from "../components/homepage/StatsOverview";
import RecentAlerts from "../components/homepage/RecentAlerts";
import RecentIncedents from "../components/homepage/RecentIncedents";

function HomePage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCall = () => {
    Swal.fire({
      title: "Calling 911",
      text: "Your call has been proccessed",
    });
    window.location.href = "tell:911";
  };

  return (
    <div className="space-y-8">
      {/* Clean Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user.name.split(" ")[0]}!
        </h1>
        <p className="text-red-100 text-lg">
          Stay informed about emergency situations in your area
        </p>
      </div>

      {/* Streamlined Quick Actions */}
      <QuickActions handleCall={handleCall} navigate={navigate} />

      {/* Clean Stats Overview */}
      <StatsOverview />

      {/* Simplified Recent Alerts */}
      <RecentAlerts />

      {/* Simplified Recent Incidents */}
      <RecentIncedents />
    </div>
  );
}

export default HomePage;
