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
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(0);
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const createUser = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, cpf, birthDate, email, addressList: [
      {
        street,
        number,
        district,
        city,
        state,
      },
    ],};

    await userFetch.post("/users", user);

    alert('Usuário cadastrado com sucesso.');

    navigate("/");
  };

  return (
    <div className="new-user">
      <h1>Adicionar usuário</h1>
      <form onSubmit={(e) => createUser(e)}>  
        <div className="info">
          <div className="form-control size-2">
            <label htmlFor="firstName">Nome:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Digite aqui"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control size-2">
            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Digite aqui"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-control size-2">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="Digite aqui"
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
        </div>
        <div className="info">
          <div className="form-control size-2">
            <label htmlFor="birthDate">Data de nascimento:</label>
            <input
              type="text"
              name="birthDate"
              id="birthDate"
              placeholder="Digite aqui"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="form-control size-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite aqui"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="info">
          <div className="form-control size-4">
            <label htmlFor="street">Logradouro:</label>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Digite aqui"
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className="form-control size-1">
            <label htmlFor="number">Número:</label>
              <input
              type="number"
              name="number"
              id="number"
              placeholder="Digite aqui"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="info">        
          <div className="form-control size-2">
            <label htmlFor="district">Bairro:</label>
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Digite aqui"
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div className="form-control size-2">
            <label htmlFor="city">Cidade:</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Digite aqui"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-control size-2">
            <label htmlFor="state">Estado:</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Digite aqui"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Cadastrar usuário" className="btn" />  
      </form>
    </div>
  );
};

export default NewUser