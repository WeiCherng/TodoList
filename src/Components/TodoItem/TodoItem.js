import React from "react";
import "./TodoItem.css"

export default function TodoItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="item">
      <div className="todo">{props.children}</div>
      <button className="checked" onClick={deleteHandler}>Done</button>
    </li>
  );
}
