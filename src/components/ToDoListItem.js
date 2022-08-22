import { useState } from 'react';
import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = ({
    todos,
    setActiveItem,
    id,
    title,
    text,
    setActiveItemTitle,
    setActiveItemText,
    updateTodo,
}) => {
    // States
    const [isActive, setIsActive] = useState(false); // Remembers active todo for styling purposes

    // Handlers
    const activateItemHandler = () => {
        // When the user clicks on todo it'll become active and highlighted
        // Also it sets the states responsible for remembering content
        setTimeout(() => {
            setActiveItem(id);
            setActiveItemTitle(title);
            setActiveItemText(text);
            setIsActive(true);
        }, 0);
    };

    const deactivateItemHandler = () => {
        // The name speaks for itself
        setTimeout(() => {
            setIsActive(false);
        }, 0);
    };

    const changeProgressHandler = (progress) => {
        // Sets progress status of the todo after press of the corresponding button on the todo; Updates todos state afterwards
        switch (progress) {
            case 'inProgress':
                updateTodo('inProgress');
                break;

            case 'done':
                updateTodo('done');
                break;

            default:
                updateTodo('waiting');
                break;
        }
    };
    const checkColor = (progress) => {
        switch (progress) {
            case 'inProgress':
                return '#FEA5AD';
            case 'done':
                return '#801336';
            default:
                return '#BFA2DB';
        }
    };

    return (
        <article
            className={styles.toDoList__Item}
            onClick={activateItemHandler}
            id={id}
            style={
                todos[id]
                    ? { backgroundColor: checkColor(todos[id].progress) }
                    : { backgroundColor: '#BFA2DB' }
            }
            onPointerLeave={deactivateItemHandler}
        >
            <p className={styles.toDoList__text}>{title}</p>
            {/* Conditional rendering of condition markers, visible only if todo is active */}
            {isActive ? (
                <div className={styles.progress}>
                    <div
                        className={styles.progress__waiting}
                        onClick={() => changeProgressHandler('waiting')}
                    >
                        <img
                            src="https://pic.onlinewebfonts.com/svg/img_295843.png"
                            alt="Waiting"
                        />
                    </div>
                    <div
                        className={styles.progress__inprogress}
                        onClick={() => changeProgressHandler('inProgress')}
                    >
                        <img
                            src="http://cdn.onlinewebfonts.com/svg/img_567202.png"
                            alt="In process"
                        />
                    </div>
                    <div
                        className={styles.progress__done}
                        onClick={() => changeProgressHandler('done')}
                    >
                        <img
                            src="https://webstockreview.net/images/clipboard-clipart-tick-11.png"
                            alt="Done"
                        />
                    </div>
                </div>
            ) : null}
        </article>
    );
};

export default ToDoListItem;
