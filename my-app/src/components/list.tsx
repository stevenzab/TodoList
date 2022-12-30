import React from "react";
import '../styles/list.css';
import { ITask } from './interface';
import TodoTask from './TodoTask';

function List() {
    const [task, setTask] = React.useState<string>("");
    const [deadline, setDealine] = React.useState<number>(0);
    const [todoList, setTodoList] = React.useState<ITask[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDealine(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDealine(0);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
        todoList.filter((task) => {
            return task.taskName !== taskNameToDelete;
        })
      );
    };
  return (
    <div>
        <div className="app__list">
            <div className="app__header">
                <div className="input__container">
                    <input type="text" placeholder="Enter a task" name="task" value={task} onChange={handleChange}/>
                    <input type="number" placeholder="Deadline" name="deadline" value={deadline} onChange={handleChange}/>
                </div>
                <button onClick={addTask}>Add</button>
            </div>
            <div className="app__todolist">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask} />;
                })}
            </div>
        </div>
    </div>
  );
}

export default List;