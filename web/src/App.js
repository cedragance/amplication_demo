import { useState, useEffect } from "react";
import "./App.css";

import { me } from "./lib/auth";

import Auth from "./Auth";
import CreateTask from "./CreateTask";
import Tasks from './Tasks';

import * as tasksLib from "./lib/tasks";

function App() {
  const [user, setUser] = useState();
  const [tasks, setTasks] = useState([]);

  const setUserFetchTasks = async (user) => {
    setUser(user);
    if (!user) return;
    const result = await tasksLib.getAll(user.id);
    setTasks(result);
  };

  useEffect(() => {
   async function getUser() {
     const result = await me();
     setUserFetchTasks(result);
   }
   getUser();
  }, [setUser, setTasks]);

  const addTask = async (task) => {
    const newTask = await tasksLib.create(task, user.id);
    if (!newTask) return;
    const temp = [...tasks];
    temp.push(newTask);
    setTasks(temp);
  };

  const toggleCompleted = async (task) => {
    const updatedTask = await tasksLib.update(task);
    if (!updatedTask) return;
    let temp = [...tasks];
    const i = temp.findIndex((t) => t.id === updatedTask.id);
    temp[i] = updatedTask;
    setTasks(temp);
  };

  const deleteTask = async (task) => {
    const deletedTask = await tasksLib.deleteTask(task);
    if (!deletedTask) return;
    let temp = [...tasks];
    const i = temp.findIndex((t) => t.id === deletedTask.id);
    temp.splice(i, 1);
    setTasks(temp);
  };

  return (
    <div>
      {user ? (
        <div>
          <CreateTask addTask={addTask} />
          <Tasks
            tasks={tasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        </div>
      ) : (
         <Auth setUser={setUserFetchTasks} />
      )}
    </div>
  );
}

export default App;
