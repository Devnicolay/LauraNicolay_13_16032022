import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

function Error404() {
  return (
    <div>
      <Header />
      <div className="main-error404">
        <div className="error-404">404</div>
        <div className="error-msg">
          {"Oups! La page que vous demandez n'existe pas."}
        </div>
        <Link to="/">{"Retourner sur la page d'accueil"}</Link>
      </div>
    </div>
  );
}

export default Error404;
