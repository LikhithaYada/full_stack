import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContextProvider';

const Register = ({ setAuthType }) => {
  const { setUsername, setEmail, setPassword, username, email, password, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering with:", { username, email, password });
    await register();
  };

  return (
    <form className="authForm" onSubmit={handleRegister}>
      <h2>Register</h2>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="floatingEmail">Email address</label>
      </div>
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary" type="submit">Sign up</button>
      <p>Already registered? <span onClick={() => setAuthType('login')}>Login</span></p>
    </form>
  );
};

export default Register;
