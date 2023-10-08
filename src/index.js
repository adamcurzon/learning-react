import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./state/store";
import { Provider } from "react-redux";
import SnackBar from "./components/SnackBar";
import { fromToken, setUser } from "./state/UserReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

let response = await store.dispatch(fromToken());
if (!response.error) {
  store.dispatch(setUser(response.payload));
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <SnackBar />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
