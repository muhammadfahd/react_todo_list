import { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  const [currval, setVal] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const addItem = () => {
    if (currval.trim() !== "") {
      setItems((prev) => [
        ...prev,
        { id: Date.now(), text: currval, completed: false },
      ]);
      setVal("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addItem();
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="mainheading">
      <div className="heading">
        <h1>📝 Todo App</h1>
        <h2>Never Miss a Task</h2>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter a task"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            value={currval}
          />
          <button onClick={addItem}>+</button>
        </div>

        <hr />

        <ul>
          {items.length === 0 ? (
            <p className="empty-msg">No tasks yet 🎉</p>
          ) : (
            items.map((item) => (
              <Todolist
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
                onDelete={deleteItem}
                onToggle={toggleComplete}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
