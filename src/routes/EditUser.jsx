import userFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./NewUser.css";

const EditUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  const getUser = async () => {
    try {
      const response = await userFetch.get(`/users/${id}`);

      const data = response.data;

      console.log(data);

      setFirstName(data.firstName);
      setLastName(data.lastName);
      setCpf(data.cpf);
      setBirthDate(data.birthDate);
      setEmail(data.email);

    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, cpf, birthDate, email };

    await userFetch.put(`/users/${id}`, user);

    alert('Usuario atualizado com sucesso.');

    navigate("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="new-user">
      <h1>Editar usuário</h1>
      <form onSubmit={(e) => editUser(e)}>
      <div className="form-control">
        <label htmlFor="firstName">Nome:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Digite o nome"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor="lastName">Nome:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Digite o nome"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName || ""}
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
          value={cpf || ""}
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
            value={birthDate || ""}
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
          value={email || ""}
        />
      </div>
        <input type="submit" value="Editar Usuario" className="btn" />
      </form>
    </div>
  );
};

export default EditUser