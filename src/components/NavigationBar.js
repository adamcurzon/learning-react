import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav className="flex p-lr-main flex-ai-c flex-jc-sb">
        <Link className="c-main td-no" to="/">
          <h1>Adam Curzon</h1>
        </Link>
        <div className="flex flex-g-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "td-no " + (isActive ? "c-main" : "c-grey h-black")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "td-no " + (isActive ? "c-main" : "c-grey h-black")
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "td-no " + (isActive ? "c-main" : "c-grey h-black")
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
