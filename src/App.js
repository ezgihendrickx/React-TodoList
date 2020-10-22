import React from "react";
import Input from "./Form";
import TodoList from "./TodoList";
import "./app.css";
function App() {
  return (
    <div className="app">
      <h1> My Todo App</h1>
      <Input />
      <TodoList />
    </div>
  );
}
export default App;
