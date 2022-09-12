import "./styles.css";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input onChange={handleChange} value={inputText}></input>
      <button onClick={addItem}>Add</button>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}
