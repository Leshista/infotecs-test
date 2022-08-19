import { useState } from 'react';
import styles from '../componentStyles/css/ToDoList.module.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({
    activeItem,
    setActiveItem,
    activeItemTitle,
    setActiveItemTitle,
    activeItemText,
    setActiveItemText,
}) => {
    // In the left block the user should be
    // able to choose tasks, add and delete them

    // States
    const [todos, setTodos] = useState([]); // Render todos based on object with all the todos

    // Handlers
    const addTodoHandler = () => {
        setTodos([...todos, { id: todos.length }]);
    }; // Add enw todo to the object; Object is a state, so it wil autorender
    const deleteTodoHandler = () =>
        setTodos(todos.filter((todo) => todo.id !== activeItem)); // Delete todo from object via filtering it

    return (
        <aside className={styles.toDoList}>
            {/* Searchbar */}
            <input
                type="search"
                name=""
                id=""
                className={styles.toDoList__Search}
            />
            {/* Mapping todos object and rendering tasks */}
            {todos.map((todo) => (
                <ToDoListItem
                    id={todo.id}
                    key={todo.id}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    activeItemTitle={activeItemTitle}
                    setActiveItemTitle={setActiveItemTitle}
                    activeItemText={activeItemText}
                    setActiveItemText={setActiveItemText}
                />
            ))}
            {/* Add and Delete buttons */}
            <div className={styles.toDoList__Buttons}>
                <button
                    className={styles.toDoList__Add}
                    onClick={addTodoHandler}
                >
                    Add
                </button>
                <button
                    className={styles.toDoList__Delete}
                    onClick={deleteTodoHandler}
                >
                    Delete
                </button>
            </div>
        </aside>
    );
};
export default ToDoList;
