import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css"

export default function TodoList(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <TodoItem key={item.id} id={item.id} onDelete={props.onDeleteTodo}>
          {item.todo}
        </TodoItem>
      ))}
    </ul>
  );
}
