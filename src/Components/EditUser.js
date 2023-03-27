import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import TempContext from "../Context/TempContext";
import { UserListContext } from "./UserList";

const EditUser = (props) => {
  const EditUserData = useContext(DataContext);
  const usersData = useContext(UserListContext);
  // context use....

  const [user, setUser] = useState(usersData);

  useEffect(() => {
    setUser(usersData);
  }, [usersData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const dataV = useContext(TempContext);
  console.log(dataV);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        EditUserData.changeUpdate(user.id, user);
        props.setEditable(false);
      }}
    >
      {/* <div className="card"> */}
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        autoFocus
      />
      {/* </div> */}
    </form>
  );
};

export default EditUser;
