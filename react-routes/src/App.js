import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li> <NavLink to="/"> Início </NavLink> </li>  
              <li> <NavLink to="/cadastrados"> Usuários Cadastrados </NavLink> </li>  
              <li> <NavLink to="/adicionar"> Adicionar Usuário </NavLink> </li>  
            </ul>
          </nav>  
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/usuarios/:id" element={<DetalhesUsuario/>}/>
            <Route path="/cadastrados" element={<Usuarios/>}/>
            <Route path="/adicionar" element={<AdicionarUsuario/>}/>
            <Route path="*" element={<PaginaNaoEncontrada/>}/>

          </Routes>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada(){
  return <>
    <h1>404</h1>
    <p> Página não encontrada </p>
  </>
}
export default App;
