import { NavLink } from "react-router-dom";

const DashboardNavigationLink = ({ to, text, icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "p-lr-main w-100 p-tb-25 td-no t-left flex flex-ai-c flex-g-10 " +
        (isActive ? "c-main" : "c-grey h-black")
      }
    >
      <span className="fs-16 mar-right-10 flex flex-ai-c">{icon}</span>
      {text}
    </NavLink>
  );
};

export default DashboardNavigationLink;
