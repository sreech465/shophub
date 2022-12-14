import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Log } from "../Redux/Actions";
// import { Log } from "../Redux/Actions";



const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function Login(props) {
  const [showPass, setShowPass] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();
  const state = useSelector(state => state.cartReducer.login)
  console.log(state);
  if(state.status === 200) {
    history.push("/home")
  }
  const dispatch = useDispatch();

  const { email, password } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   
  }
  console.log(formData,'ONCHANGE FORMDATA');

  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData,'ONSUBMIT FORMDATA');
    dispatch(Log({formData,history}))
    // setFormData({
    //   email: "",
    //   password: ""
    // });
    // setShowPass(false);
  };

  const canSignIn =
  [email, password].every(Boolean); 

  return (
    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
      <h2>Login</h2>
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
        <label htmlFor="password">Password:</label>
        <div className="eye">
          <input
            ref={refPassword}
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignIn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
