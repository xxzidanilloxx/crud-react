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
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

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
      setStreet(data.addressList[0].street);
      setNumber(data.addressList[0].number); 
      setDistrict(data.addressList[0].district);
      setCity(data.addressList[0].city);
      setState(data.addressList[0].state);

    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (e) => {
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
        <div className="info">
          <div className="form-control size-2">
            <label htmlFor="firstName">Nome:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Digite aqui"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName || ""}
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
              value={lastName || ""}
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
              value={cpf || ""}
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
              value={birthDate || ""}
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
              value={email || ""}
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
              value={street || ""}
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
              value={number || ""}
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
              value={district || ""}
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
              value={city || ""}
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
              value={state || ""}
            />
          </div>
        </div>
        <input type="submit" value="Editar Usuario" className="btn" />
      </form>
    </div>
  );
};

export default EditUser