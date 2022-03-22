import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <Logo />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <Link className="main-nav-item" to={"/login"}>
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
