import { useEffect } from 'react';
import styles from '../componentStyles/css/ToDoList.module.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({
    todos,
    setTodos,
    updateTodo,
    setFilter,
    filter,
    filteredTodos,
    setFilteredTodos,
    saveLocalTodos,
    activeItem,
    setActiveItem,
    setActiveItemTitle,
    setActiveItemText,
}) => {
    // In the left block the user should be
    // able to choose todos, add and delete them,
    // also changing their progress status

    // Effects
    useEffect(() => {
        // Watches for todos/filter changes and executes setFIlterHandler() if changes happened. Maintains the render of filteredTodos
        setFilterHandler();
        saveLocalTodos();
    }, [todos, filter]);

    // Handlers
    const addTodoHandler = () => {
        // Adds new todo to the object; todos a state, so page wil autorerender
        if (todos.length !== 6) {
            setTodos([
                ...todos,
                {
                    id: todos.length,
                    title: 'New todo',
                    text: 'Please, write something!',
                },
            ]);
        }
    };
    const deleteTodoHandler = () => {
        // Delete todo from object via filtering it
        setTodos(todos.filter((todo) => todo.id !== activeItem));
        if (todos.length === 1) {
            // Has to implement this because setLocalTodos don't work after length drops to 1
            localStorage.setItem('todos', JSON.stringify([]));
        }
    };
    const setFilterHandler = () => {
        // Handler that sets filter and filteredTodos based on input
        setFilter(document.querySelector(`.${styles.toDoList__Search}`).value);
        setFilteredTodos(
            todos.filter((todo) => String(Object.values(todo)).includes(filter))
        );
    };

    return (
        <aside className={styles.toDoList}>
            {/* Searchbar */}
            <input
                type="search"
                name=""
                id=""
                className={styles.toDoList__Search}
                onKeyUp={setFilterHandler}
            />
            {/* Mapping filteredTodos and rendering todos of its objects */}
            {filteredTodos.map((todo) => (
                <ToDoListItem
                    todos={todos}
                    id={todo.id}
                    key={todo.id}
                    title={todo.title}
                    text={todo.text}
                    setActiveItem={setActiveItem}
                    setActiveItemTitle={setActiveItemTitle}
                    setActiveItemText={setActiveItemText}
                    updateTodo={updateTodo}
                />
            ))}
            {/* Add and Delete buttons */}
            <div className={styles.toDoList__Buttons}>
                <div className={styles.toDoList__Add} onClick={addTodoHandler}>
                    <img src={require('../images/add.png')} alt="Add" />
                </div>
                <div
                    className={styles.toDoList__Delete}
                    onClick={deleteTodoHandler}
                >
                    <img src={require('../images/delete.png')} alt="Delete" />
                </div>
            </div>
        </aside>
    );
};
export default ToDoList;
