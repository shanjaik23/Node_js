
"use client";
import styles from "./task.module.css";
import Link from 'next/link';
import {useState} from "react";
export default function Task() {
  const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
const [taskId, setTaskId] = useState(1);
const [editId, setEditId] = useState(null);


const handleChange = (e) => {
  const inputValue = e.target.value;
  setTask(inputValue);
  console.log("Task input changed:", inputValue);
};


const handleAddTask = () => {
  if (editId !== null) {
    const updated = tasks.map((t) =>
      t.id === editId ? { ...t, text: task } : t
    );
    setTasks(updated);
    setEditId(null);
    console.log("Tasks updated list (edited):", updated);
  } else {
    const newTask = { id: taskId, text: task, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTaskId(taskId + 1);
    console.log("Task added:", newTask);
    console.log("Tasks list after add:", updatedTasks);
  }

  setTask("");
  setEditId(null);
};


const handleDelete = (id) => {
  const newTasks = tasks.filter((task) => task.id !== id);
  setTasks(newTasks);
  setTask("");
  setEditId(null);
  console.log("Tasks after deletion:", newTasks);
};


const handleEdit = (id) => {
  const taskToEdit = tasks.find((t) => t.id === id);
  if (taskToEdit) {
    setTask(taskToEdit.text);
    setEditId(id);
    console.log("Task selected for edit:", taskToEdit.text);
  }
};


const toggleCompleted = (id) => {
  const updatedTasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  setTasks(updatedTasks);
  const toggled = updatedTasks.find((t) => t.id === id);
  console.log("Toggled Task:", toggled);
};

  return (
    
    <div className={styles.background}>

      <div>
        <ul className={styles.nav}>
          <li><Link href="/">Home</Link></li>
           <li> <Link href="/task">Task List</Link> </li>
        </ul>
      </div>
         <header className={styles.title}>
        <h1>To do List</h1>
        <input type="text" placeholder="Enter your Task" name="task" value={task} onChange={handleChange}/> 
        <button className={styles.addButton} onClick={handleAddTask}> + </button>
     
      </header>

      <main className={styles.content}>
        <div className={styles.toDoBox}>
           <table >
              <thead>
                 <tr>
                    <th>No.</th>
                    <th>Completed</th>
                    <th>Task</th>
                    <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
      </td>
      <td>{task.text}</td>
      <td>
        <button onClick={() => handleEdit(task.id)}style={{ marginRight: "8px" }}>Edit</button> 
        <button onClick={() => handleDelete(task.id)} >Delete</button>
      </td>
    </tr>
          ))}
              </tbody>
            </table>
        </div>
      </main>
         <br/>
         
    </div>

);
}