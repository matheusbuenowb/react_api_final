import React from "react";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/index";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {Provider} from 'react-redux';
import store from './store';



function App() {
  return(
  <>
  <Provider store ={store}>
  <BrowserRouter history= {history}>
    <Header/>
    <Routes/>
    <GlobalStyles/>
    <ToastContainer autoClose ={3000} className = "toast-container"/>
  </BrowserRouter>
  </Provider>

  </>
  );
}

export default App;
