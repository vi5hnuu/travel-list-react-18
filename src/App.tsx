import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { tasks } from "./model/data";
import { TaskForm } from "./components/TaskForm";
import { TaskModel } from "./model/task-model";

function App() {
  const [tasksData, setTasks] = useState(tasks);
  const stats = getStats();

  function onTaskStatusChange(id: number, completed: boolean) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }
        return task;
      });
    });
  }
  function onTaskDelete(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function onTaskAdd(task: TaskModel) {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  function getStats() {
    const statsData: { total: number; completed: number; pending: number } = { total: 0, completed: 0, pending: 0 };
    tasksData.forEach((task: TaskModel) => {
      statsData.total++;
      task.completed ? ++statsData.completed : ++statsData.pending;
    });
    return statsData;
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <TaskForm onTaskAdd={onTaskAdd} />
        <TaskList tasks={tasksData} onTaskDelete={onTaskDelete} onTaskStatusChange={onTaskStatusChange} />
      </main>
      <footer className="bg-aqua-marine text-sm text-center py-4">
        {stats.total === 0 ? (
          <p>No items found😉</p>
        ) : (
          <p>
            {`🧳 You have ${stats.total} item${stats.total > 1 ? "'s" : ""} on your list, and you already packed
            ${stats.completed} item${stats.total > 1 ? "'s" : ""} (${((stats.completed / stats.total) * 100).toFixed(
              1
            )}%)`}
          </p>
        )}
      </footer>
    </>
  );
}

export default App;
