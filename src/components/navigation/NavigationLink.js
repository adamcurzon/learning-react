import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "td-no " + (isActive ? "c-main" : "c-grey h-black")
      }
    >
      {text}
    </NavLink>
  );
};

export default NavigationLink;
