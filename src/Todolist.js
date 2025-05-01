import React from "react";
import PropTypes from "prop-types";

function Todolist({ id, text, completed, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ❌
      </button>
    </li>
  );
}

// ✅ PropTypes validation
Todolist.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Todolist;
