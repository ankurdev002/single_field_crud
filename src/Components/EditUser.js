import React, { useEffect, useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.users);

  useEffect(() => {
    setUser(props.users);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
