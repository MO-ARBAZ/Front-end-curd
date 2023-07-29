import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8808/register', {
        username,
        password,
      });

      console.log(response.data); // Assuming the server returns a message on success
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>

        <button> <Link
                to={"/"
                 }
                className="m-3 btn btn-sm btn-danger"
              >
                Already a user !Login
              </Link> </button>  
      </form>
    </div>
  );
};

export default RegisterForm;
