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
    </div>
  );
}
export default Input;
