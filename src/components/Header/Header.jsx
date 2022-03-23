import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={"/"}>
          <Logo />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        {isLoggedIn ? (
          <div>
            <Link className="main-nav-item" to={"/profil/:id"}>
              <FontAwesomeIcon icon={faUserCircle} />
              {user && user.body.firstName}
            </Link>
            <Link className="main-nav-item" to={"/"}>
              <FontAwesomeIcon icon={faSignOut} />
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to={"/login"}>
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
