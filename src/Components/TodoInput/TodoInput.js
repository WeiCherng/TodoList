import React, { useState } from "react";
import "./TodoInput.css"

export default function TodoInput(props) {
  const [value, setValue] = useState("");

  const todoInputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(value);
    setValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="input-field">
        <label>Add a Todo</label>
        <input type="text" value={value} onChange={todoInputChangeHandler} required></input>
      </div>
      <button className="submit" type="submit">Add</button>
    </form>
  );
}
