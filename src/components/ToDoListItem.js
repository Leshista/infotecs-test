import { useState } from 'react';
import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = ({
    activeItem,
    setActiveItem,
    id,
    activeItemTitle,
    setActiveItemTitle,
    activeItemText,
    setActiveItemText,
}) => {
    // States
    const [todoTitle, setTodoTitle] = useState('New Task');
    const [todoText, setTodoText] = useState('Please, add something!');

    // Handlers
    const activateItemHandler = () => {
        // When the user clicks on tasks it'll become active and highlighted
        setTimeout(() => {
            setActiveItem(id);
            setActiveItemTitle(todoTitle);
            setActiveItemText(todoText);
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
            <p className={styles.toDoList__text}>{todoTitle}</p>
        </article>
    );
};

export default ToDoListItem;
