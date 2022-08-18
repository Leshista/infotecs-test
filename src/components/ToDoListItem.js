import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = () => {
    return (
        <article className={styles.toDoList__Item}>
            <p className={styles.toDoList__text}>Lorem ipsum</p>
        </article>
    );
};

export default ToDoListItem;
