import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>
            <Link to={`/new-user`}> CRUD </Link>
        </h1>
        <ul>
            <li>
                <Link to={`/new-user`}> Cadastrar usuário </Link>
            </li>
            <li>
                <Link to={`/users`}> Usuários cadastrados </Link>
            </li>
            <li>
                <Link to={`/admin`}> Gerenciar usuários </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar