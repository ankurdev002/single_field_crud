import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EditUser from "./EditUser";

const UserShow = (props) => {
  const [editable, setEditable] = useState(false);

  return (
    <div>
      {!editable ? (
        <p key={props.users.id}>{props.users.name}</p>
      ) : (
        <EditUser
          updateUser={props.updateUser}
          users={props.users}
          setEditable={setEditable}
        />
      )}
      <div>
        <button
          className="btn outline"
          onClick={() => {
            props.editUser(props.users);
            setEditable(props.users.id);
          }}
        >
          <FontAwesomeIcon className="icons" icon={faPenToSquare} />
          Edit
        </button>
        <button
          className="btn fill"
          onClick={() => props.deleteUser(props.users.id)}
        >
          <FontAwesomeIcon className="icons" icon={faTrash} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserShow;
