import styles from '../componentStyles/css/ToDo.module.css';
import ToDoListItem from './ToDoListItem';

const ToDo = () => {
    return (
        <main className={styles.toDo}>
            {/* I split the whole container into two blocks:
            To the left the user should be able to choose
            tasks, add and delete them */}
            <aside className={styles.toDoList}>
                <input
                    type="search"
                    name=""
                    id=""
                    className={styles.toDoList__Search}
                />
                <ToDoListItem />
                <ToDoListItem />
                <ToDoListItem />
                <ToDoListItem />
                <ToDoListItem />
                <div className={styles.toDoList__Buttons}>
                    <button className={styles.toDoList__Add}>Add</button>
                    <button className={styles.toDoList__Delete}>Delete</button>
                </div>
            </aside>
            {/* And to the right the user
            should be able to change tasks'
            content, mark them as 'waiting',
            'in process' and 'done'*/}
            <section className={styles.toDoChanging}></section>
        </main>
    );
};

export default ToDo;
