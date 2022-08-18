import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks
    return (
        <main className={styles.toDo}>
            <ToDoList />
            <ToDoChanging />
        </main>
    );
};

export default ToDo;
