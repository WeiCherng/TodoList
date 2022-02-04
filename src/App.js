import "./App.css";
import React, { useState } from "react";
import TodoList from "./Components/TodoList/TodoList";
import TodoInput from "./Components/TodoInput/TodoInput";

function App() {
  const [todo, setTodo] = useState([
    { todo: "Buy some grosseries at the supermarket.", id: "1" },
    { todo: "Finish My Maths Homework by Mr John", id: "2" },
  ]);

  const addTodo = (value) => {
    setTodo([...todo, { todo: value, id: Math.random().toString() }]);
  };

  const deleteTodo = (id) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  const deleteAllTodo = () => {
    setTodo([]);
  };

  const sign = <p className="sign"> No Todo found. Great Job!</p>;

  return (
    <div className="content">
      <div className="container">
        <h1>Todo List</h1>
        <TodoInput onAddTodo={addTodo}></TodoInput>
        <button className="checked-all" onClick={deleteAllTodo}>Done All</button>
      </div>
      <div className="container">
        {todo.length ? (
          <section>
            <TodoList list={todo} onDeleteTodo={deleteTodo}></TodoList>
            <p className="count">Todos Left: {todo.length}</p>
          </section>
        ) : (
          sign
        )}
      </div>
    </div>
  );
}

export default App;
