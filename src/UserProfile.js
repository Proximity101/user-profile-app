import React from "react";

const UserProfile = () => {
  const user = {
    firstName: "Emily",
    lastName: "Johnson",
    age: 29,
    city: "New York",
  };

  function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  return (
    <div>
      <h2>User Name: {getFullName(user)}</h2>
      <p>Age: {user.age}</p>
      <p>Location: {user.city}</p>
    </div>
  );
};

export default UserProfile;