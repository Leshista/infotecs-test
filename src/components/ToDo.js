import { useEffect, useState } from 'react';
import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // Container for the whole program

    // Functions
    const updateTodo = (change) => {
        // This function changes text/title/progress values of the active item in the todos object, sets the activeItemTitle/activeItemText, automatically rerendering the page afterwards
        const newTodos = [...todos];
        switch (change) {
            case 'title':
                newTodos[activeItem].title = document.querySelector(
                    '#toDoChanging__RedactingTitle'
                ).value;
                setActiveItemTitle(
                    document.querySelector('#toDoChanging__RedactingTitle')
                        .value
                );
                break;
            case 'text':
                newTodos[activeItem].text = document.querySelector(
                    '#toDoChanging__RedactingText'
                ).value;
                setActiveItemText(
                    document.querySelector('#toDoChanging__RedactingText').value
                );
                break;
            default:
                newTodos[activeItem].progress = change;
                break;
        }
        setTodos(newTodos);
    };

    // States
    const [todos, setTodos] = useState([]); // Original todos array, all item within are todos, which will be rendered after filtering via filteredTodos state
    const [filter, setFilter] = useState(''); // Needed for filtering todos based on search result
    const [filteredTodos, setFilteredTodos] = useState([]); // A new array of todos, which will be rendered to appear on the page
    const [activeItem, setActiveItem] = useState(); // This'll allow selection of todo and redacting it
    const [activeItemTitle, setActiveItemTitle] = useState(''); // This states allow to not loose todos' content
    const [activeItemText, setActiveItemText] = useState('');

    // Loading and saving todos; They'll be there when page'll reload
    const getLocalTodos = () => {
        if (JSON.parse(localStorage.getItem('todos'))) {
            const localTodos = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodos);
        }
    };
    useEffect(() => {
        getLocalTodos();
    }, []);
    const saveLocalTodos = () =>
        // Had to use this lifehack; Without it save function worked before the load function had the chance to complete
        todos.length >= 1
            ? localStorage.setItem('todos', JSON.stringify(todos))
            : null;
    // Run once when app starts to get saved todos

    return (
        <main className={styles.toDo}>
            <ToDoList
                todos={todos}
                setTodos={setTodos}
                updateTodo={updateTodo}
                setFilter={setFilter}
                filter={filter}
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                saveLocalTodos={saveLocalTodos}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                activeItemText={activeItemText}
                setActiveItemText={setActiveItemText}
            />
            <ToDoChanging
                updateTodo={updateTodo}
                activeItemTitle={activeItemTitle}
                activeItemText={activeItemText}
            />
        </main>
    );
};

export default ToDo;
