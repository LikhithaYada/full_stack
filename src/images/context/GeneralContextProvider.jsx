import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      const inputs = { username, email, password };
      console.log("Sending registration data:", inputs);
      await axios.post('http://localhost:6001/register', inputs)
        .then(async (res) => {
          console.log('Registration response:', res.data);
          localStorage.setItem('userId', res.data._id);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          navigate('/');
        }).catch((err) => {
          alert("Registration failed!");
          console.error("Error during registration:", err.response ? err.response.data : err);
        });
    } catch (err) {
      console.error("Error in register function:", err);
    }
  };

  const login = async () => {
    try {
      const loginInputs = { email, password };
      await axios.post('http://localhost:6001/login', loginInputs)
        .then(async (res) => {
          localStorage.setItem('userId', res.data._id);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          navigate('/');
        }).catch((err) => {
          alert("Login failed!");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <GeneralContext.Provider value={{ login, register, logout, username, setUsername, email, setEmail, password, setPassword }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
