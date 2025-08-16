import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import {
  addTaskHandler,
  deleteTaskHandler,
  toggleTaskHandler,
} from "./utils/taskHandlers";

function App() {
  const [tasks, setTasks] = useState(() => {
    console.log("Running lazy initializer!");
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => addTaskHandler(tasks, setTasks, text);
  const toggleTask = (id) => toggleTaskHandler(tasks, setTasks, id);
  const deleteTask = (id) => deleteTaskHandler(tasks, setTasks, id);

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoInput onAddTask={addTask} />
      <TodoList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
