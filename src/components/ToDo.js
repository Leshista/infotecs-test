import { useState } from 'react';
import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks

    // States
    const [activeItem, setActiveItem] = useState(); // This'll allow selection of task and redacting it
    const [activeItemTitle, setActiveItemTitle] = useState('');
    const [activeItemText, setActiveItemText] = useState('');

    return (
        <main className={styles.toDo}>
            <ToDoList
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                activeItemText={activeItemText}
                setActiveItemText={setActiveItemText}
            />
            <ToDoChanging
                activeItemTitle={activeItemTitle}
                setActiveItemTitle={setActiveItemTitle}
                activeItemText={activeItemText}
                setActiveItemText={setActiveItemText}
            />
        </main>
    );
};

export default ToDo;
