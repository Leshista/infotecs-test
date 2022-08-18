import { useState } from 'react';
import styles from '../componentStyles/css/ToDoList.module.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    // In the left block the user should be
    // able to choose tasks, add and delete them

    // States
    const [todos, setTodos] = useState([]);

    // Handlers
    const addTodoHandler = () => {
        setTodos([...todos, {}]);
    };
    // const deleteTodoHandler = () => setTodos(filter(todos));

    return (
        <aside className={styles.toDoList}>
            <input
                type="search"
                name=""
                id=""
                className={styles.toDoList__Search}
            />
            {todos.map((todo) => (
                <ToDoListItem
                    id={todos.indexOf(todo)}
                    key={todos.indexOf(todo)}
                />
            ))}
            <div className={styles.toDoList__Buttons}>
                <button
                    className={styles.toDoList__Add}
                    onClick={addTodoHandler}
                >
                    Add
                </button>
                <button className={styles.toDoList__Delete}>Delete</button>
            </div>
        </aside>
    );
};
export default ToDoList;
