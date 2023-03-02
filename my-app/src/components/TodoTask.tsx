import React from "react";
import { ITask } from './interface';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
      </div>
      <div className="circle">
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
        </button>
      </div>
    </div>
  );
};

export default TodoTask;