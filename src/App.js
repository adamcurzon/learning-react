import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

import DashboardPage from "./pages/dashboard/DashboardPage";
import ProfilePage from "./pages/dashboard/ProfilePage";

import PageLayout from "./layouts/PageLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SettingsPage from "./pages/dashboard/SettingsPage";

function App() {
  const router = createHashRouter([
    {
      element: <PageLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/*", element: <ErrorPage /> },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        { path: "/dashboard/home", element: <DashboardPage /> },
        { path: "/dashboard/profile", element: <ProfilePage /> },
        { path: "/dashboard/settings", element: <SettingsPage /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
