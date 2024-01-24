import { useState } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Task({ task, toggleCompleted, deleteTask }) {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <li className={completed ? "completed" : "incompleted"}>
      <span>{task.text}</span>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => toggleCompleted(task)}
        onChange={() => setCompleted(!task.completed)}
        readOnly
      />
      <FontAwesomeIcon
        icon={faTimes}
        className="delete-input"
        onClick={() => deleteTask(task)}
      />
      </li>
  );
}
