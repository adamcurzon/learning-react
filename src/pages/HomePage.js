import { useDispatch } from "react-redux";
import { showSnackBar, hideSnackBar } from "../state/SnackBarReducer";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Homepage</h1>
      <button
        onClick={() => {
          dispatch(showSnackBar("123"));
          setTimeout(() => {
            dispatch(hideSnackBar());
          }, 3000);
        }}
      >
        Show Snack
      </button>
    </>
  );
};

export default HomePage;
