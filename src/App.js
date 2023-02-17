import { useState } from "react";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";


import Login from "./Components/Login/telaLogin";
import Menu from "./Components/menu/telaMenu";


export default function App(){

  return(
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>

    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    background: #f2f2f2;
    display:flex;
    align-items:center;
    justify-content:center;

  }
`