import React from "react";
import { ITask } from './interface';

// Define TodoTask component props
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

// Create TodoTask component
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
      </div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
        </button>
    </div>
  );
};

export default TodoTask;