import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../stateManagement/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const LoginContent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isLoggedIn, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profil");
    }
  }, [isLoggedIn]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(formData).then((data) => {
      dispatch({
        type: "USER_TOKEN",
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

export default LoginContent;
