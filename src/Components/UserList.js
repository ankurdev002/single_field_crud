import { createContext, useContext } from "react";
import { DataContext } from "../App";
import UserShow from "./UserShow";

export const UserListContext = createContext();
// UserList Comp.. Context....

const UserList = () => {
  const data = useContext(DataContext);
  // context use....

  return data.data.map((users, index) => {
    return (
      <UserListContext.Provider value={users}>
        <div className="card">
          <UserShow />
          {/*UserShow Component*/}
        </div>
      </UserListContext.Provider>
    );
  });
};

export default UserList;
