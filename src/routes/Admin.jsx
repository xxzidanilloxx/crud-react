import userFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

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
    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!"
    });
  
    if (result.isConfirmed) {
      try {
        await userFetch.delete(`/users/${id}`);
        const filteredUsers = user.filter((user) => user.id !== id);
        setUser(filteredUsers);
  
        Swal.fire({
          title: "Excluído!",
          text: "O usuário foi excluído.",
          icon: "success"
        });
      } catch (error) {
        console.log(error);
  
        Swal.fire({
          title: "Erro!",
          text: "Ocorreu um erro ao excluir o usuário.",
          icon: "error"
        });
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
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
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