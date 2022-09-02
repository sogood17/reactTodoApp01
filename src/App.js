import "./styles.css";
import React, { useState } from "react";

export default function App() {
    
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    
    function handleChange(event){
        const newValue= event.target.value;
        setInputText(newValue);
    }
    function addTodo() {
        setTodoItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
     }

  return (      
    <div className="App">
      <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <form>
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addTodo}><span>Add</span></button>
            </form>
        </div>
        <div>
            <ul>
                {todoItems.map(todoItem => {
                    <li>{todoItem}</li>
                })}
            </ul>
        </div>
      </div>
    </div>
  );
}
