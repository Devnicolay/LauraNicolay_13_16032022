import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../stateManagement/authService";
import PropTypes from "prop-types";

/**
 *
 * @param {object} user user data
 * @param {string} token token of user connected
 * @returns firstname and lastname of user and can edited firstname and lastname with a form
 */
const UserHeader = () => {
  const [isEditedName, setIsEditedName] = useState(false);

  const editName = (e) => {
    setIsEditedName(true);
  };

  const [formName, setFormName] = useState({
    firstname: "",
    lastname: "",
  });

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onChange = (e) => {
    setFormName((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    if (e.target.id === "firstname") {
      setFirstname(e.target.value);
    } else if (e.target.id === "lastname") {
      setLastname(e.target.value);
    }
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.token);

  const [isFirstname, setIsFirstname] = useState("true");
  const [isLastname, setIsLastname] = useState("true");

  const onSaveName = (e) => {
    if (!firstname) {
      e.preventDefault();
      setIsFirstname("false");
    } else if (!lastname) {
      e.preventDefault();
      setIsLastname("false");
    } else {
      setIsEditedName(false);
      editUserName(formName, token);
      dispatch({
        type: "EDIT_NAME",
        payload: formName,
      });
      setFirstname("");
      setLastname("");
      setIsFirstname("true");
      setIsLastname("true");
    }
  };

  return (
    <div className="header">
      {isEditedName ? (
        <>
          <h1>Welcome back</h1>
          <form>
            <div className="edit-name-wrapper">
              <label htmlFor="firstname"></label>
              <input
                type="text"
                id="firstname"
                placeholder={user.body.firstName}
                onChange={onChange}
              />
              {isFirstname === "false" ? <p>Veuillez entrer un prénom</p> : ""}
            </div>
            <div className="edit-name-wrapper">
              <label htmlFor="lastname"></label>
              <input
                type="text"
                id="lastname"
                placeholder={user.body.lastName}
                onChange={onChange}
              />
              {isLastname === "false" ? <p>Veuillez entrer un nom</p> : ""}
            </div>
            <button type="button" className="edit-button" onClick={onSaveName}>
              Save Name
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {`${user && user.body.firstName} ${user && user.body.lastName}!`}
          </h1>
          <button type="button" className="edit-button" onClick={editName}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
};

UserHeader.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
};

export default UserHeader;
