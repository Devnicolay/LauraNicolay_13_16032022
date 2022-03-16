import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"} />
        <Logo />
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <Link className="main-nav-item" to={"/sign-in"} />
          <i className="fa fa-user-circle"></i>
          Sign In
        </div>
      </nav>
    </div>
  );
}

export default Header;
