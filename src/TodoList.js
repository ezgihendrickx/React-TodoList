import React, { useState } from "react";
import "./app.css";
export default function TodoList() {
  const initialTodos = ["Learn react", "Wash your hands", "Wash the dishes"];
  const [todos, setTodos] = useState(initialTodos); //const myState = useState (...);
  //initialTodos is default when you open the browser it will be saved in the todos
  //and Settodos is a function then to update your list
  return (
    <div className="Todo">
      <h3>Todos</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={"todo_" + i}>
            <input type="checkbox"></input> {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
