import { useState } from "react"; 
import React from "react";
import { IMaskInput } from "react-imask";
import { FaSearch } from "react-icons/fa";


import './style.css';

function App() {

  const [input, setInput] = useState(' ')

function handleSearch(){
  alert("O Cep é" + input)
}
  return (

    <div className="container">
      <form className="container-form">
        <h1 className="title">Buscar CEP</h1>
        <div className="containerInput">
          <IMaskInput mask="00000-000" placeholder="Digite o seu CEP..." value={input} 
          onChange={(e) => setInput(e.target.value)}/>

          <button className="buttonSearch" onClick={handleSearch}>
            <FaSearch className="buttonPesquisar" size={14} color="#fff" />
            <span style={{ marginLeft: '2mm' }}>Procurar</span>
          </button>
        </div>
      </form>
      <main className="main">
        <h2>CEP: 76160000</h2>
        <span>Rua teste algum</span>
        <span>Complemento:</span>
        <span> Vila</span>
        <span>Sanclerlândia - GO</span>
      </main>
    </div>
  );
}

export default App;