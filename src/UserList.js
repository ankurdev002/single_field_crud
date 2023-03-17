import UserShow from "./UserShow";

const UserList = (props) => {
  return props.userList.map((users, index) => {
    return (
      <div className="card">
        <UserShow
          users={users}
          index={index}
          updateUser={props.updateUser}
          deleteUser={props.deleteUser}
          editUser={props.editUser}
        />
      </div>
    );
  });
};

export default UserList;
