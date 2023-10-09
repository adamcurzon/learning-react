import { render, screen } from "@testing-library/react";
import App from "../App";
import NavigationBar from "../components/navigation/NavigationBar";
import { Provider } from "react-redux";
import store from "../state/store";

test("Test Home Page", () => {
  render(
    <Provider store={store}>
      <NavigationBar />
    </Provider>
  );
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
