import React from "react";

function TodoList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <div>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li
            key={id}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              borderBottom: "1px solid #ddd",
            }}
            onClick={() => {
              onToggleTask(id);
            }}
          >
            <span
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {text}
            </span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTask(id);
              }}

            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
