import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchToken } from '../utils/http';

import smartclickLogo from '../assets/smartclick-logo.svg';

import classes from '../css/Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetchToken(username, password);

    if (res) navigate('/');
    else setError(true);
  };

  return (
    <main className={`container ${classes.container}`}>
      <img
        className={classes.logo}
        src={smartclickLogo}
        alt="SmartClick logo"
      />

      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className={classes.button}>
          Login
        </button>
        {error && (
          <p className={classes.errorMsg}>Invalid username or password</p>
        )}
      </form>
    </main>
  );
};
export default Login;
