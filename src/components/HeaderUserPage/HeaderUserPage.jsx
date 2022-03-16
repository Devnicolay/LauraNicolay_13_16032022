import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Header/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";

function HeaderUserPage() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <Logo />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <Link className="main-nav-item" to={"/user/:id"}>
            <FontAwesomeIcon icon={faUserCircle} />
            Tony
          </Link>
          <Link className="main-nav-item" to={"/"}>
            <FontAwesomeIcon icon={faSignOut} />
            Sign Out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HeaderUserPage;
