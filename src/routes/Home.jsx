import React from "react";
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>CRUD</h1>
      <p>Este é um projeto simples que consiste no gerenciamento de informações de usuários por intermédio de operações CRUD. </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
};

export default Home;