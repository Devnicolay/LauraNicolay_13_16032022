import React from "react";
import { useSelector } from "react-redux";

const UserHeader = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user && user.body.firstName} {user && user.body.lastName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeader;
