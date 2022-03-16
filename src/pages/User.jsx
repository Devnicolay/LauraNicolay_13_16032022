import React from "react";
import HeaderUserPage from "../components/HeaderUserPage/HeaderUserPage";
import Account from "../components/UserPage/Account";
import UserHeader from "../components/UserPage/UserHeader";

function User() {
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
}

export default User;
