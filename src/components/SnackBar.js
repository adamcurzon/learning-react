import { useSelector } from "react-redux";

const SnackBar = () => {
  const { shown, message } = useSelector((state) => state.SnackBar);

  return (
    <div
      className={
        "flex w-100 p-all-main bg-tomato c-white p-f trns-ease " +
        (shown ? "p-b-0" : "p-b-hide")
      }
    >
      {message}
    </div>
  );
};

export default SnackBar;
