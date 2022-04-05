import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

/**
 *
 * @param {object} user data of user
 * @param {boolean} isLoggedIn boolean for know if user is connected or not
 * @returns header with user firstname if user is connected
 */
const Header = () => {
  const OnLogout = (e) => {
    const dispatch = useDispatch();

    dispatch({
      type: "LOGOUT",
    });
  };

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
            <Link className="main-nav-item" to={"/profil"}>
              <FontAwesomeIcon icon={faUserCircle} />
              {user && user.body.firstName}
            </Link>
            <Link className="main-nav-item" to={"/"} onClick={OnLogout}>
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

Header.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export default Header;
