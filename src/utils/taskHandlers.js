export const addTaskHandler = (tasks, setTasks, text) => {
  if (text.trim() === "") return;
  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };
  setTasks([newTask, ...tasks]);
};

export const toggleTaskHandler = (tasks, setTasks, id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};
export const deleteTaskHandler = (tasks, setTasks, id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

