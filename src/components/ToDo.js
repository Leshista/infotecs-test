import styles from '../componentStyles/css/ToDo.module.css';
import ToDoListItem from './ToDoListItem';
const ToDo = () => {
    <main className={styles.toDoContainer}>
        {/* I split the whole container into two blocks:
            To the left the user should be able to choose
            tasks, add and delete them */}
        <aside className={styles.toDoList}>
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
        </aside>
        {/* And to the right the user
            should be able to change tasks'
            content, mark them as 'waiting',
            'in process' and 'done'*/}
        <main className={styles.toDoChanging}></main>
    </main>;
};

export default ToDo;
