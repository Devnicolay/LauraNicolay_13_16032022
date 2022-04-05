import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Account from "../components/ProfilePage/Account";
import UserHeader from "../components/ProfilePage/UserHeader";
import { getUserData } from "../stateManagement/authService";
import PropTypes from "prop-types";

/**
 *
 * @param {string} token token of user connected
 * @returns dashboard of user with accounts
 */
const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  getUserData(token).then((data) => {
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  });

  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title={"Argent Bank Checking (x8349)"}
        amount={2082.79}
        amountDescription={"Available Balance"}
      />
      <Account
        title={"Argent Bank Savings (x6712)"}
        amount={10928.42}
        amountDescription={"Available Balance"}
      />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        amount={184.3}
        amountDescription={"Current Balance"}
      />
    </main>
  );
};

Profile.propTypes = {
  token: PropTypes.string,
};

export default Profile;
