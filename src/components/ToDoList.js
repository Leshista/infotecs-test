import styles from '../componentStyles/css/ToDoList.module.css';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    // In the left block the user should be
    // able to choose tasks, add and delete them
    return (
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
    );
};
export default ToDoList;
