import React, { useState, useEffect } from "react";

import axios from "axios";

const User = () => {
  const [Users, setUsers] = useState(null);
  const [Count, setCount] = useState(0);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
    //   // console.log(data, "testdata");
    //   setUsers(data);
    // });
    console.log("I am Useeffect");
  }, [Count]);

  console.log(Count, "testuser");

  return (
    <div>
      <h1>USER </h1>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default User;

// TASK =
// 1 => card component
// 2 => Detail of user
// 3 Design Card
// 4 Package / avatar
// 5 condition !User => no user found
// 6 map. => user information => print
