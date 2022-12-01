import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
const Eye = <FontAwesomeIcon className="icon" icon={["fas", "eye"]} />;
const EyeSlash = (
  <FontAwesomeIcon className="icon" icon={["fas", "eye-slash"]} />
);

function Login(props) {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const { email, password, confirmPassword, name, phone } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }
  const refConfirmPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refConfirmPassword.current.type = showPass ? "password" : "text";
  }
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(SignUp(email, name, password, confirmPassword, phone, history));
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    setShowPass(false);
  };
  const canSignUp = [email, password, confirmPassword].every(Boolean);
  return (
    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
        <h2>Sign Up</h2>

        <label htmlFor="email">Name:</label>
        <input
          onChange={hangleChange}
          type="name"
          id="name"
          name="name"
          value={name}
          placeholder="Enter the name"
          autoFocus
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={hangleChange}
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="abc@example.com"
          autoFocus
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          onChange={hangleChange}
          type="phone"
          id="phone"
          name="phone"
          value={phone}
          placeholder="Enter the phone"
          autoFocus
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={hangleChange}
          id="password"
          name="password"
          autoComplete
          value={password}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="eye">
          <input
            ref={refConfirmPassword}
            type="password"
            onChange={hangleChange}
            id="confirmPassword"
            name="confirmPassword"
            autoComplete
            value={confirmPassword}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
