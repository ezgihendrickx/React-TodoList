import React from "react";

function Input() {
  const Form = () => {
    console.log("yes this is an input field");
  };
  return (
    <div>
      <input type="text" placeholder="Type a new todo..."></input>
      <div>
        <button onClick={Form}>Add todo</button>
      </div>
      <div>
        <h3>Todos</h3>
        <input type="checkbox"></input>
        <label for="first"> Learn React</label>
        <br></br>
        <input type="checkbox"></input>
        <label for="second"> Wash the dishes</label>
      </div>
    </div>
  );
}
export default Input;
