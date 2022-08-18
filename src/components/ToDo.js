import styles from '../componentStyles/css/ToDo.module.css';
import ToDoChanging from './ToDoChanging';
import ToDoList from './ToDoList';

const ToDo = () => {
    // I split the whole container into two blocks
    return (
        <main className={styles.toDo}>
            {/* And to the right the user
            should be able to change tasks'
            content, mark them as 'waiting',
            'in process' and 'done'*/}
            <ToDoList />
            <ToDoChanging />
        </main>
    );
};

export default ToDo;
