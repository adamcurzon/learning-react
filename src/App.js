import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import PageLayout from "./layouts/PageLayout";
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const router = createHashRouter([
    {
      element: <PageLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/*", element: <ErrorPage /> },
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
