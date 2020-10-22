import React from "react";

export default function TodoList() {
  const todos = ["Learn react", "Wash your hands", "Wash the dishes"];
  return (
    <div>
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li>
            <input type="checkbox"></input> {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
