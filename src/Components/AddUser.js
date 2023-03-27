import { faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { DataContext } from "../App";

const AddUser = () => {
  const addUserData = useContext(DataContext);
  // context use....

  const [name, setName] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;
    addUserData.change(name);
    setName("");
  };
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <FontAwesomeIcon className="icons" icon={faUser} />
          Add Data
        </div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter Value..."
          onChange={handleInput}
        />
        <button className="btn fill">
          Submit <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default AddUser;
