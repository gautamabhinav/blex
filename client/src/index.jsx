import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
// import ErrorBoundary from "./Pages/Excel/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      {/* <ErrorBoundary> */}
        <App />
        <Toaster />
      {/* </ErrorBoundary> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);