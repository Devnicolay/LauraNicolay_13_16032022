import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HeaderUserPage from "../components/HeaderUserPage/HeaderUserPage";
import Account from "../components/ProfilePage/Account";
import UserHeader from "../components/ProfilePage/UserHeader";
import { getUserData } from "../stateManagement/authService";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData(token).then((data) => {
      dispatch({
        type: "LOGIN",
        payload: data,
      });
    });
  }, []);

  return (
    <div>
      <HeaderUserPage />
      <main className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          amountDescription={"Available Balance"}
        />
        <Account
          title={"Argent Bank Savings (x6712)"}
          amount={"$10,928.42"}
          amountDescription={"Available Balance"}
        />
        <Account
          title={"Argent Bank Credit Card (x8349)"}
          amount={"$184.30"}
          amountDescription={"Current Balance"}
        />
      </main>
    </div>
  );
};

export default Profile;
