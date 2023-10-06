import { useSelector } from "react-redux";

const SnackBar = () => {
  const { shown, message, colorClass } = useSelector((state) => state.SnackBar);

  return (
    <div
      className={
        "flex w-100 p-all-main c-white p-f trns-ease " +
        (shown ? "p-b-0" : "p-b-hide") +
        colorClass
      }
    >
      {message}
    </div>
  );
};

export default SnackBar;
