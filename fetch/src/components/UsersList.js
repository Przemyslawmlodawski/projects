import React, { Component } from "react";
import "./UserList.css";
const UsersList = (props) => {
  const people = props.people.map((user) => (
    <li key={user.id.value}>
      <img src={user.picture.large} alt={user.name.last} />
      <h1>{`${user.name.title} ${user.name.last}`}</h1>
      <p>{user.email}</p>
    </li>
  ));
  return (
    <ul className="users">
      <li>{people}</li>
    </ul>
  );
};

export default UsersList;
