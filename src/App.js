import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import TempContext from "./Context/TempContext";

export const DataContext = createContext();
// App Comp.
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
  }, []);

  const addUser = async (username) => {
    await axios
      .post("http://localhost:3001/users", { name: username })
      .then((res) => setData([...data, res.data]));
    // let id = Math.round(Math.random() * 9999);
    // setData([...data, { id, name: username }]);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`).then((res) => {
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

  const updateUser = async (id, user_update) => {
    await axios
      .put(`http://localhost:3001/users/${id}`, user_update)
      .then((res) => {
        console.log(res.data);
        setData(data.map((user) => (user.id === id ? user_update : user)));
      });
    // setData(data.map((user) => (user.id === id ? user_update : user)));
  };

  console.log(data);
  console.log(setData);

  return (
    <DataContext.Provider
      value={{
        change: (data) => {
          addUser(data);
        },
        changeUpdate: (id, dataUp) => {
          updateUser(id, dataUp);
        },
        data,
        changeEdit: (data) => {
          editUser(data);
        },
        changeDelete: (data) => {
          deleteUser(data);
        },
      }}
    >
      <div className="container">
        <div className="user-box">
          <AddUser />
        </div>

        <div className="card-hold">
          <TempContext.Provider value={"You are Now Editing Data"}>
            <UserList />
          </TempContext.Provider>
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default App;
