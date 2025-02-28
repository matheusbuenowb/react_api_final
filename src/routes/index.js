import React from "react";
import {Route, Routes} from 'react-router-dom';
//import {toast} from 'react-toastify';

//import MyRoute from "./MyRoute";

import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

export default function RoutesReact(){

  //toast.success('Olá, sucesso!');
  //toast.error('Olá, deu erro :(');

  return (
      <Routes>
        <Route exact path = '/' element = {<Alunos/>} isClosed ={false}/>
        <Route exact path = '/aluno/:id/edit' element = {<Aluno/>} isClosed/>
        <Route exact path = '/aluno/' element = {<Aluno/>} isClosed/>
        <Route exact path = '/fotos/:id' element = {<Fotos/>} isClosed/>
        <Route exact path = '/login' element = {<Login/>} isClosed = {false}/>
        <Route exact path = '/register' element = {<Register/>} isClosed = {false}/>
        <Route exact path = '*' element = {<Page404/>}/>

      </Routes>
  );
};
