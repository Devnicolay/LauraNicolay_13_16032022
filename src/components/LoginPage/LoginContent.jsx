import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../stateManagement/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

/**
 *
 * @param {boolean} isLoggedIn boolean for know if user is connected or not
 * @returns form of login page
 */
const LoginContent = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profil");
    }
  }, [isLoggedIn, navigate]);

  const onChange = (e) => {
    setLoginFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(loginFormData).then((data) => {
      dispatch({
        type: "LOGIN",
        payload: data.body.token,
      });
      navigate("/profil");
    });
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input type="text" id="email" onChange={onChange} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onChange} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

LoginContent.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default LoginContent;
