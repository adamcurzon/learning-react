import { Link, useNavigate } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../state/UserReducer";
import { showSnackBar, hideSnackBar } from "../../state/SnackBarReducer";

const NavigationBar = () => {
  const { name, auth } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    dispatch(
      showSnackBar({
        message: "Successfully logged out",
        colorClass: " bg-green",
      })
    );

    setTimeout(() => {
      dispatch(hideSnackBar());
    }, 3000);

    dispatch(clearUser());

    navigate("/");
  };

  return (
    <>
      <nav className="bg-alt flex p-lr-main flex-ai-c flex-jc-sb flex-mob-jc-c shadow-subtle">
        <Link className="c-main td-no" to="/">
          <h1>Adam Curzon</h1>
        </Link>
        <div className="flex flex-g-20">
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/about" text="About" />
          <NavigationLink to="/contact" text="Contact" />
          <div className="c-main">|</div>
          {auth ? (
            <>
              <NavigationLink to="/dashboard/home" text="Dashboard" />
              <button
                className="td-no bg-none p-m-reset fs-16 c-grey br-10 b-reset pointer"
                onClick={logout}
              >
                Logout
              </button>
              <span className="c-grey">{name}</span>
            </>
          ) : (
            <NavigationLink to="/login" text="Login" />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
