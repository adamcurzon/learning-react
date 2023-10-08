import DashboardNavigationLink from "./DashboardNavigationLink";
import { FaHouse } from "react-icons/fa6";
import { FaCogs, FaUserCog } from "react-icons/fa";

const DashboardNavigation = () => {
  return (
    <div className="p-tb-15 min-w-300 min-h-100 bg-alt">
      <DashboardNavigationLink
        to="/dashboard/home"
        text="Dashboard"
        icon={<FaHouse />}
      />
      <DashboardNavigationLink
        to="/dashboard/settings"
        text="Settings"
        icon={<FaCogs />}
      />
      <DashboardNavigationLink
        to="/dashboard/profile"
        text="Profile"
        icon={<FaUserCog />}
      />
    </div>
  );
};

export default DashboardNavigation;
