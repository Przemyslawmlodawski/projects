import React, { Component } from "react";
import Task from "./Task";
const TaskList = (props) => {
  console.log(props.active);
  const active = props.tasks.filter((task) => task.active == true);
  const activeTask = active.map((item) => (
    <Task
      key={item.id}
      task={item}
      delete={props.delete}
      status={props.status}
      active={item.active}
      endDate={item.endDate}
      important={item.important}
    />
  ));
  const notActive = props.tasks.filter((task) => task.active != true);
  const notActiveTask = notActive.map((item) => (
    <Task
      key={item.id}
      task={item}
      delete={props.delete}
      status={props.status}
      active={item.active}
      endDate={item.endDate}
      important={item.important}
    />
  ));

  //   const task = props.tasks.map((item) => (
  //     <Task
  //       key={item.id}
  //       task={item}
  //       delete={props.delete}
  //       status={props.status}
  //     />
  //   ));
  return (
    <>
      <div className="active">
        <h1>Zadanie do zrobienia</h1>
        {activeTask}
      </div>

      <div className="done">
        <h1>Zrobione({notActive.length})</h1>
        {notActiveTask}
      </div>
    </>
  );
};

export default TaskList;
