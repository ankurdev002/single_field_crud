import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
  }, []);

  const addUser = (username) => {
    axios
      .post("http://localhost:3001/users", { name: username })
      .then((res) => setData([...data, res.data]));
    // let id = Math.round(Math.random() * 9999);
    // setData([...data, { id, name: username }]);
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`).then((res) => {
      console.log(res.data);
      const copyData = [...data];
      const copy = copyData.filter((item) => item.id !== id);
      setData(copy);
    });
    // const copyData = [...data];
    // const copy = copyData.filter((v, i) => i !== id);
    // setData(copy);
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
    axios.put(`http://localhost:3001/users/${id}`, user_update).then((res) => {
      console.log(res.data);
      setData(data.map((user) => (user.id === id ? user_update : user)));
    });
    // setData(data.map((user) => (user.id === id ? user_update : user)));
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
