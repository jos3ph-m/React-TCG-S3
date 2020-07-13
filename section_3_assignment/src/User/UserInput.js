import React from "react";

const UserInput = (props) => {
  return (
    <input
      className="input"
      type="text"
      onChange={props.changed}
      value={props.username}
    />
  );
};

export default UserInput;
