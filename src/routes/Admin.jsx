import userFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

const Admin = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await userFetch.get(`/users`);
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm('Tem certeza de que deseja excluir este usuário?')) {
      try {
        await userFetch.delete(`/users/${id}`);
        const filteredUsers = user.filter((user) => user.id !== id);
        setUser(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div className="admin">
      <h1>Gerenciar usuários</h1>
      {user.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        user.map((user) => (
          <div className="user" key={user.id}>
            <h2>{user.firstName}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/users/edit/${user.id}`}>
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin