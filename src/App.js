import React from "react";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/index";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function App() {
  return(
  <>
  <BrowserRouter history= {history}>
    <Header/>
    <Routes/>
    <GlobalStyles/>
    <ToastContainer autoClose ={3000} className = "toast-container"/>
  </BrowserRouter>

  </>
  );
}

export default App;
