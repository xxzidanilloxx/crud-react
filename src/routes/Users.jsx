import userFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([])

  const getUsers = async() => {
    try {    
      const response = await userFetch.get("/users");
      const data = response.data

      setUsers(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="user">
      <h1> Usuários cadastrados </h1>
      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        users.map((user) => (
          <div className="user" key={user.id}>
            <Link to={`/users/${user.id}`}> 
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Users