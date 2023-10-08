import AnimationPage from "./AnimationPage";
import Loader from "../components/Loader";
import { login, setLoading, setUser } from "../state/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { showSnackBar, hideSnackBar } from "../state/SnackBarReducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loading } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLoginForm = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    setTimeout(async () => {
      let response = await dispatch(login());

      if (await response.error) {
        dispatch(
          showSnackBar({
            message: "Invalid login",
            colorClass: " bg-tomato",
          })
        );

        setTimeout(() => {
          dispatch(hideSnackBar());
        }, 3000);

        return;
      }

      dispatch(
        showSnackBar({
          message: "Successful login",
          colorClass: " bg-green",
        })
      );

      setTimeout(() => {
        dispatch(hideSnackBar());
      }, 3000);

      dispatch(setUser(response.payload));

      navigate("/dashboard/home");
    }, 1000);
  };

  return (
    <>
      <h1>Login</h1>
      <form className="flex flex-dir-col flex-g-20 mw-container center">
        <label className="t-left">Email</label>
        <input className="p-lr-main p-tb-15 br-10 b b-foc" type="email" />
        <label className="t-left">Password</label>
        <input className="p-lr-main p-tb-15 br-10 b b-foc" type="password" />
        <button
          onClick={submitLoginForm}
          className="br-10 b p-tb-10 pointer bg-main-a c-white mh-50"
        >
          {loading ? <Loader /> : "Login"}
        </button>
      </form>
    </>
  );
};

export default AnimationPage(LoginPage);
