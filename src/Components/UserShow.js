import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import EditUser from "./EditUser";
import { UserListContext } from "./UserList";

const UserShow = () => {
  const UserListData = useContext(UserListContext);
  const DataHandle = useContext(DataContext);
  // context use....

  const [editable, setEditable] = useState(false);

  return (
    <div>
      {!editable ? (
        <p key={UserListData.id}>{UserListData.name}</p>
      ) : (
        <EditUser setEditable={setEditable} />
        // Edit User Component
      )}
      <div>
        <button
          className="btn outline"
          onClick={() => {
            DataHandle.changeEdit(UserListData);
            setEditable(UserListData.id);
          }}
        >
          <FontAwesomeIcon className="icons" icon={faPenToSquare} />
          Edit
        </button>
        <button
          className="btn fill"
          onClick={() => DataHandle.changeDelete(UserListData.id)}
        >
          <FontAwesomeIcon className="icons" icon={faTrash} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserShow;
