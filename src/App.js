import React, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const App = () => {
  const [data, setData] = useState([]);

  const addUser = (username) => {
    let id = Math.round(Math.random() * 9999);
    setData([...data, { id, name: username }]);
  };

  const deleteUser = (id) => {
    const copyData = [...data];
    const copy = copyData.filter((v, i) => i !== id);
    setData(copy);
  };

  const initialState = {
    id: null,
    name: "",
  };

  const [currentUser, setCurrentUser] = useState(initialState);

  const editUser = (user) => {
    setCurrentUser({
      id: user.id,
      name: user.name,
    });
    console.log(currentUser);
  };

  const updateUser = (id, user_update) => {
    setData(data.map((user) => (user.id === id ? user_update : user)));
  };

  console.log(data);
  console.log(setData);

  return (
    <div className="container">
      <div className="user-box">
        <AddUser addUser={addUser} />
      </div>

      <div className="card-hold">
        <UserList
          updateUser={updateUser}
          userList={data}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
