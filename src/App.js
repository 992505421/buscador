import { useState } from "react";
import React from "react";
import { IMaskInput } from "react-imask";
import { FaSearch } from "react-icons/fa";
import api from "./services/api";

import './style.css';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if (input === '') {
      alert("Preencha seu cep!")
      return;
    }
    try {
      const response = await api.get(input);
      setCep(response.data)
      setInput("")

    } catch {
      alert("Ops erro ao buscar o cep")
      setInput("")
    }
  }
  return (

    <div className="container">
      <form className="container-form">
        <h1 className="title">Buscar CEP</h1>
        <div className="containerInput">
          <IMaskInput mask="00000-000"  placeholder="Digite o seu CEP..." value={input}
            onChange={(e) => setInput(e.target.value)} />

          <button className="buttonSearch" onClick={handleSearch}>
            <FaSearch className="buttonPesquisar" size={14} color="#fff" />
            <span style={{ marginLeft: '2mm' }}>Procurar</span>
          </button>
        </div>
      </form>
      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento:{cep.complemento} </span>
        <span> {cep.bairro}</span>
        <span>{cep.localidade}</span>
      </main>
    </div>
  );
}

export default App;