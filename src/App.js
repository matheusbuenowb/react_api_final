import React from "react";

import history from "./services/history";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/index";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return(
  <>
  <BrowserRouter history= {history}>
    <Header/>
    <Routes/>
    <GlobalStyles/>
  </BrowserRouter>

  </>
  );
}

export default App;
