import { useState } from "react";
import { Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";


import Login from "./Components/Login/telaLogin";
import MenuPage from "./Components/menu/telaMenu";
import Perfil from "./Components/pagePerfil/telaPerfil";
import UserContext from "./Contexts/UserContext";

export default function App(){
  const [tasks, setTasks] = useState([])
  const contextValue = {tasks, setTasks};

  return(
    <>
      <GlobalStyle/>
      <UserContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow-x: hidden;
    padding-bottom: 300px;
  }
`