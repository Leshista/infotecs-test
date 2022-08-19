import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = ({ activeItem, setActiveItem, id }) => {
    // Handlers
    const activateItemHandler = () => {
        // When the user clicks on tasks it'll become active and highlighted
        setTimeout(() => {
            setActiveItem(id);
        }, 0);
    };

    return (
        <article
            className={styles.toDoList__Item}
            onClick={activateItemHandler}
            id={id}
            style={
                activeItem === id
                    ? { backgroundColor: 'red' }
                    : { backgroundColor: 'white' } // This'll highlight/unhighlight task based on activeItem state
            }
        >
            <p className={styles.toDoList__text}>New Task</p>
        </article>
    );
};

export default ToDoListItem;
