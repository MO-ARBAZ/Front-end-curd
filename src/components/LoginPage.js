import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { withRouter } from 'react-router';
import axios from 'axios';

const LoginPage = ({ history }) => { // Pass 'history' from props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8808/login', { username, password });
      console.log(response.data.message);
      if (response.data.message === 'User logged in successfully.') {
        console.log('Login successful! ');
        // <Redirect to='/tutorials '/>
        // Redirect to /tutorials when login is successful
        // window.open("/tutorials");
        // history.replace('/registerPage');
        this.props.router.push('/tutorials');

      }else {
        console.log('Login failed: ', response.data.message);
      }
    } catch (error) {
      console.log('Login error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <Link to={"/registerPage"} className="m-3 btn btn-sm btn-danger">
        Not a user! Register
      </Link>
    </div>
  );
};

export default LoginPage;
