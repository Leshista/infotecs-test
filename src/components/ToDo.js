import { useState } from 'react';
import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks

    // Functions
    const updateTodo = (change) => {
        // This function changes text/title of the active item in the todos object, sets the activeItemTitle/activeItemText, automatically rerendering the page afterwards
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
    const [todos, setTodos] = useState([]); // Render todos based on object with all the todos
    const [filter, setFilter] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [activeItem, setActiveItem] = useState(); // This'll allow selection of task and redacting it
    const [activeItemTitle, setActiveItemTitle] = useState(''); // This states allow to not loose tasks' content
    const [activeItemText, setActiveItemText] = useState('');

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
