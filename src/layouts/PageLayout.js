import SnackBar from "../components/SnackBar";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <SnackBar />
    </>
  );
};

export default PageLayout;
