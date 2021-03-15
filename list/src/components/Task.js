import React, { Component } from "react";

const Task = (props) => {
  return (
    <div>
      {props.active ? (
        <p>
          <strong
            style={props.important ? { color: "red" } : { color: "black" }}>
            {props.task.text}
          </strong>{" "}
          - do <span>{props.task.date}</span>{" "}
          <button onClick={() => props.status(props.task.id)}>
            Zostało Zrobione
          </button>{" "}
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </p>
      ) : (
        <>
          <strong
            style={props.important ? { color: "red" } : { color: "black" }}>
            {props.task.text}{" "}
          </strong>
          {props.endDate.toLocaleString()}{" "}
          <em>(Miało być zrobione do {props.task.date})</em>
          <button onClick={() => props.delete(props.task.id)}>X</button>
        </>
      )}
    </div>
  );
};

export default Task;
