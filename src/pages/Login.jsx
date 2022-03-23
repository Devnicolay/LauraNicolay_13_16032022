import React from "react";
import Header from "../components/Header/Header";
import LoginContent from "../components/LoginPage/LoginContent";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <LoginContent />
      </main>
    </div>
  );
};

export default Login;
