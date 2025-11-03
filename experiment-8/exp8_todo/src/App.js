import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleTask = index => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  const deleteTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h2>📝 To-Do List</h2>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((t, i) => (
          <div key={i} className="task">
            <span
              style={{ textDecoration: t.done ? "line-through" : "none" }}
              onClick={() => toggleTask(i)}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(i)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
