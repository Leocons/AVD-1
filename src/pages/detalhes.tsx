import React from "react";
import Style from "../style.module.css";
import { Link } from "react-router-dom";

const Detalhes: React.FC = () => {
  const chave = parseInt((window.location.search).replace('?key=',''))
  const { nome, email, cpf, telefone } = (JSON.parse(localStorage.getItem("dados") || '{}'))[chave];
  return (
    <div className={Style.boxData}>
      <p> Nome: </p><p>{nome}</p>
      <p> E-mail: </p><p>{email}</p>
      <p>CPF: </p><p>{cpf}</p>
      <p>Telefone: </p><p>{telefone}</p>
      <Link to="/">
        <button>
          Voltar
        </button>
      </Link>
    </div>
  );
};

export default Detalhes;
