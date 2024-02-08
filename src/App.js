import React from "react";
import { IMaskInput  } from "react-imask";
import { FaSearch } from "react-icons/fa";
import Logo from './img/fundo.png'; 
import './style.css';

function App() {
  return (
    <div className="container">
      <img src={Logo} alt="Logo"/> 
      <h1 className="title">Buscar CEP</h1>
      <div className="containerInput">
        <IMaskInput mask="00000-000" placeholder="Digite o seu CEP..." />

        <button className="buttonSearch"><FaSearch className="buttonPesquisar" size={14} color="#fff"/>Procurar</button>
      </div>
      <main className="main">
        <h2>CEP: 76160000</h2> 
        <span>Rua teste algum</span>
        <span>Complemento:</span>
        <samp>Vila</samp>
        <samp>Sanclerlândia - GO</samp>
      </main>
    </div>
  );
}

export default App;