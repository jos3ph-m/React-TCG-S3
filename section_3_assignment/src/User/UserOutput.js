import React from "react";

import User from "./User.css";

const UserOutput = (props) => {
  const { username, number } = props;
  return (
    <div className="User">
      <p>Username: {username}</p>
      <p>Number: {number}</p>
    </div>
  );
};

export default UserOutput;
