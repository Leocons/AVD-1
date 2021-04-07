import React, { FormEvent, useState, useEffect } from "react";
import Style from "../style.module.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [telefone, setTelefone] = useState("")
  const [lista, setLista] = useState([])


  useEffect( () => {
    setLista(JSON.parse(localStorage.getItem("dados") || '[]'))
  },[])

  const handleAddLocalStorage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pessoa = {
      nome,
      email,
      cpf,
      telefone,
    };
    if(nome && email && cpf && telefone){
      let dadosGravados = JSON.parse(localStorage.getItem("dados") || '[]')
      dadosGravados.push(pessoa)
      setLista(dadosGravados)
      localStorage.setItem("dados", JSON.stringify(dadosGravados))
      setNome('')
      setCpf('')
      setEmail('')
      setTelefone('')
    }else{
      alert("Preencha todos os dados!")
    }
  };

  return (
    <div className={Style.formulario}>
      <h1>
        Tela de cadastro
      </h1>
      <form onSubmit={handleAddLocalStorage}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {lista.map((valor, index) => {
      return (<Link to={`/detalhes?key=${index}`} key={index} >{valor['nome']}</Link>)
      })}
    </div>
  );
};

export default Home;