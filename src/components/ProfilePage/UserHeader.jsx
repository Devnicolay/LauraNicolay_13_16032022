import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../stateManagement/authService";

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
      console.log(firstname);
    } else if (e.target.id === "lastname") {
      setLastname(e.target.value);
      console.log(lastname);
    }
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.token);

  const onSaveName = (e) => {
    if (!firstname) {
      e.preventDefault();
      alert("Il est nécessaire d'indiquer un prénom.");
    } else if (!lastname) {
      e.preventDefault();
      alert("Il est nécessaire d'indiquer un nom.");
    } else {
      setIsEditedName(false);
      editUserName(formName, token);
      dispatch({
        type: "EDIT_NAME",
        payload: formName,
      });
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
                placeholder="firstname"
                onChange={onChange}
              />
            </div>
            <div className="edit-name-wrapper">
              <label htmlFor="lastname"></label>
              <input
                type="text"
                id="lastname"
                placeholder="lastname"
                onChange={onChange}
              />
            </div>
            <button
              type="button"
              className="edit-button"
              data-disabled={!firstname}
              onClick={onSaveName}
            >
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

export default UserHeader;
