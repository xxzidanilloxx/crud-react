import userFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Users.css";

const User = () => {
  const {id} = useParams();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await userFetch.get(`/users/${id}`);
      const data = response.data;

      setUser(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user">
      {!user.firstName ? (
      <p>Carregando...</p>
      ) : ( 
      <div className="user">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p> CPF: {user.cpf} Data de nascimento: {user.birthDate}</p>
          <p> Email: {user.email}</p>
          <ul>
            {user.addressList.map((address) => (
              <li key={address.id}>
                <p>Logradouro: {address.street} Número: {address.number}</p>
                <p>Bairro: {address.district} Cidade: {address.city} Estado: {address.state}</p>
              </li>
            ))}
          </ul>
      </div>
      )}
    </div>
  );
};

export default User