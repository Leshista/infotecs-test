import { useState } from 'react';
import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks

    // States
    const [todos, setTodos] = useState([]); // Render todos based on object with all the todos
    const [activeItem, setActiveItem] = useState(); // This'll allow selection of task and redacting it
    const [activeItemTitle, setActiveItemTitle] = useState(''); // This states allow to not loose tasks' content
    const [activeItemText, setActiveItemText] = useState('');

    return (
        <main className={styles.toDo}>
            <ToDoList
                todos={todos}
                setTodos={setTodos}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                activeItemText={activeItemText}
                setActiveItemText={setActiveItemText}
            />
            <ToDoChanging
                todos={todos}
                setTodos={setTodos}
                activeItem={activeItem}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                activeItemText={activeItemText}
                setActiveItemText={setActiveItemText}
            />
        </main>
    );
};

export default ToDo;
