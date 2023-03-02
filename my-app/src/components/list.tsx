import React from "react";
import '../styles/list.css';
import { ITask } from './interface';
import TodoTask from './TodoTask';

// Define List component props
function List() {
    const [task, setTask] = React.useState<string>("");
    const [todoList, setTodoList] = React.useState<ITask[]>([]);

    // Load todoList from local storage on component mount
    React.useEffect(() => {
        const storedList = localStorage.getItem("todoList");
        if (storedList) {
            setTodoList(JSON.parse(storedList));
        }
    }, []);

    // Save todoList to local storage whenever it changes
    React.useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    // Update task state whenever user types in input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
        }
    };

    // Add a new task to the list
    const addTask = (): void => {
        const newTask = { taskName: task};
        setTodoList([...todoList, newTask]);
        setTask("");
    };

    // Delete a task from the list
    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
        todoList.filter((task) => {
            return task.taskName !== taskNameToDelete;
        })
      );
    };
    // Delete all tasks from the list
    const clearAllTasks = (): void => {
        setTodoList([]);
        localStorage.removeItem("todoList");
    };

    return (
        <div>
            <div className="app__list">
                <h1>Ma liste</h1>
                <div className="app__header">
                    <div className="input__container">
                        <input type="text" placeholder="Rentrer une tâche" name="task" value={task} onChange={handleChange} maxLength={50}/>
                    </div>
                    <button onClick={addTask}>Ajouter</button>
                    <button onClick={clearAllTasks}>Supprimer tout</button>
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
