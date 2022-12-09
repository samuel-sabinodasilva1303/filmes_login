import React, { useState, useContext } from 'react';

import { AuthContext } from '../contexts/auth';
import './Login.css';

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Senha invalida, consulte a documentação!!");
      return;
    }
    login(email, password);
  };

  return(

  <div id="login">
  <h1 className="title">Realize o Login</h1>
  <p>Para ter informações sobre os principais filmes</p>
  <form className="form" onSubmit={handleSubmit}>
    <div className="field">
      <label htmlFor="email">E-mail</label>
      <input 
      type="email" 
      name="email" 
      id="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    
    <div className="field">
      <label htmlFor="password">Senha</label>
      <input 
      type="password" 
      name="password" 
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <p>{error}</p>
    </div>
    <div className="actions">
      <button type="submit">Entrar</button>
    </div>
  </form>
</div>

  );
};

export default LoginPage;