import userFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import "./NewUser.css";

const NewUser = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    cpf: "",
    birthDate: "",
    email: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const user = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      cpf: formValues.cpf,
      birthDate: formValues.birthDate,
      email: formValues.email,
      addressList: [
        {
          street: formValues.street,
          number: formValues.number,
          district: formValues.district,
          city: formValues.city,
          state: formValues.state,
        },
      ],
    };

    await userFetch.post("/users", user);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuário cadastrado com sucesso.",
      showConfirmButton: false,
      timer: 2000,
    });

    navigate("/");
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.firstName) {
      errors.firstName = "Campo não informado";
    } else if (!/^[A-Z][a-z]*$/.test(formValues.firstName)) {
      errors.firstName = "Informe o primeiro nome com a primeira letra maiúscula e sem espaços";
    }

    if (!formValues.lastName) {
      errors.lastName = "Campo não informado";
    } else if (!/^[A-Z][a-z]*$/.test(formValues.lastName)) {
      errors.lastName = "Informe o sobrenome com a primeira letra maiúscula e sem espaços";
    }

    if (!formValues.cpf) {
      errors.cpf = "Campo não informado";
    } else if (!/\d{11}/.test(formValues.cpf)) {
      errors.cpf = "Digite um CPF válido";
    }

    if (!formValues.birthDate) {
      errors.birthDate = "Campo não informado";
    } 

    if (!formValues.email) {
      errors.email = "Campo não informado";
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(formValues.email)) {
      errors.email = "Digite um email válido";
    }

    if (!formValues.street) {
      errors.street = "Campo não informado";
    }

    if (!formValues.number) {
      errors.number = "Campo não informado";
    }

    if (!formValues.district) {
      errors.district = "Campo não informado";
    }

    if (!formValues.city) {
      errors.city = "Campo não informado";
    }

    if (!formValues.state) {
      errors.state = "Campo não informado";
    }
    
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
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
              onChange={handleChange}
              value={formValues.firstName}
            />
            {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
          </div>
          <div className="form-control size-2">
            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.lastName}
            />
            {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
          </div>
          <div className="form-control size-2">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.cpf}
            />
            {formErrors.cpf && <span className="error-message">{formErrors.cpf}</span>}
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
              onChange={handleChange}
              value={formValues.birthDate}
            />
            {formErrors.birthDate && <span className="error-message">{formErrors.birthDate}</span>}
          </div>
          <div className="form-control size-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.email}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
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
              onChange={handleChange}
              value={formValues.street}
            />
            {formErrors.street && <span className="error-message">{formErrors.street}</span>}
          </div>
          <div className="form-control size-1">
            <label htmlFor="number">Número:</label>
              <input
              type="number"
              name="number"
              id="number"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.number}
            />
            {formErrors.number && <span className="error-message">{formErrors.number}</span>}
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
              onChange={handleChange}
              value={formValues.district}
            />
            {formErrors.district && <span className="error-message">{formErrors.district}</span>}
          </div>
          <div className="form-control size-2">
            <label htmlFor="city">Cidade:</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.city}
            />
            {formErrors.city && <span className="error-message">{formErrors.city}</span>}
          </div>
          <div className="form-control size-2">
            <label htmlFor="state">Estado:</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Digite aqui"
              onChange={handleChange}
              value={formValues.state}
            />
            {formErrors.state && <span className="error-message">{formErrors.state}</span>}
          </div>
        </div>
        <input type="submit" value="Cadastrar usuário" className="btn" />  
      </form>
    </div>
  );
};

export default NewUser