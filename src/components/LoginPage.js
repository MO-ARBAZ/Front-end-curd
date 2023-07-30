import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  authContext.setLoginSuccessful(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8808/login', { username, password });
      console.log(response.data.message);
      if (response.data.message === 'User logged in successfully.') {
        console.log('Login successful!');
        navigate('/tutorials');
        authContext.setLoginSuccessful(true);
      } else {
        alert('Login failed!');
        console.log('Login failed: ', response.data.message);
      }
    } catch (error) {
      alert('Login failed!');
      console.log('Login error:', error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
                <Link to={'/registerPage'} className="btn btn-link">
                  Not a user? Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
