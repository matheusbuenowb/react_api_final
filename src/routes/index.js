import React from "react";
import {Route, Routes} from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RoutesReact(){
  return (
      <Routes>
        <Route exact path = '/' element = {<Login/>}/>
        <Route exact path = '*' element = {<Page404/>}/>
      </Routes>
  );
};
