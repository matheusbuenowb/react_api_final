import React from "react";
import {FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { Nav } from "./styled";
import { useSelector } from "react-redux";

export default function Header(){

const botaoClicado = useSelector(state => state.botaoClicado);

  return (
    <Nav>
      <Link to="www.google.com">
        <FaHome size = {24}/>
      </Link>

      <Link to= "login">
        <FaUserAlt size = {24}/>
      </Link>

      <Link to= "">
        <FaSignInAlt size = {24}/>
      </Link>

      {botaoClicado ? 'Clicado': 'Não clicado'}
    </Nav>
  )
}

