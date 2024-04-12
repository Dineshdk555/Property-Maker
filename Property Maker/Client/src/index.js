import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/auth/Header";
import Footer from "./components/common/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <ToastContainer />
  </React.StrictMode></BrowserRouter>
);
