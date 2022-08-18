import { useState } from 'react';
import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks

    // States
    const [activeItem, setActiveItem] = useState();

    return (
        <main className={styles.toDo}>
            <ToDoList setActiveItem={setActiveItem} activeItem={activeItem} />
            <ToDoChanging />
        </main>
    );
};

export default ToDo;
