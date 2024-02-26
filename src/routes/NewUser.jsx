import userFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewUser.css";

const NewUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, cpf, birthDate, email };

    await userFetch.post("/users", user);

    alert('Usuário cadastrado com sucesso.');

    navigate("/new-user");
  };

  return (
    <div className="new-user">
      <h1>Adicionar usuário</h1>
      <form onSubmit={(e) => createUser(e)}>
        <div className="form-control">
          <label htmlFor="firstName">Nome:</label>
           <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Digite o nome"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Sobrenome:</label>
           <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Digite o sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="Digite o CPF"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="birthDate">Data de nascimento:</label>
          <input
            type="text"
            name="birthDate"
            id="birthDate"
            placeholder="Digite a data de nascimento"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input type="submit" value="Cadastrar usuário" className="btn" />
      </form>
    </div>
  );
};

export default NewUser