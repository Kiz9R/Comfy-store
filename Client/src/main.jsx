import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
// order
import "./index.css";

import { Bounce, ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-center"
      transition={Bounce}
      autoClose={1500}
    />
  </Provider>
);
