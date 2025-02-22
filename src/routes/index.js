import React from "react";
import {Route, Routes} from 'react-router-dom';
//import {toast} from 'react-toastify';

//import MyRoute from "./MyRoute";

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RoutesReact(){

  //toast.success('Olá, sucesso!');
  //toast.error('Olá, deu erro :(');

  return (
      <Routes>
        <Route exact path = '/' element = {<Login/>}/>
        <Route exact path = '*' element = {<Page404/>}/>
      </Routes>
  );
};
