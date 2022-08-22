import { useState } from 'react';
import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = ({
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
    const [color, setColor] = useState('#BFA2DB'); // Remembers this todo's background color

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

    const changeColorHandler = (color) => {
        // Sets color and progress status of the todo after press of the corresponding button on the todo; Updates todos state afterwards
        switch (color) {
            case 'inProgress':
                setColor('#FEA5AD');
                updateTodo('inProgress');
                break;

            case 'done':
                setColor('#801336');
                updateTodo('done');
                break;

            default:
                setColor('#BFA2DB');
                updateTodo('waiting');
                break;
        }
    };

    return (
        <article
            className={styles.toDoList__Item}
            onClick={activateItemHandler}
            id={id}
            style={{ backgroundColor: color }}
            onPointerLeave={deactivateItemHandler}
        >
            <p className={styles.toDoList__text}>{title}</p>
            {/* Conditional rendering of condition markers, visible only if todo is active */}
            {isActive ? (
                <div className={styles.progress}>
                    <div
                        className={styles.progress__waiting}
                        onClick={() => changeColorHandler('waiting')}
                    >
                        <img
                            src="https://pic.onlinewebfonts.com/svg/img_295843.png"
                            alt="Waiting"
                        />
                    </div>
                    <div
                        className={styles.progress__inprogress}
                        onClick={() => changeColorHandler('inProgress')}
                    >
                        <img
                            src="http://cdn.onlinewebfonts.com/svg/img_567202.png"
                            alt="In process"
                        />
                    </div>
                    <div
                        className={styles.progress__done}
                        onClick={() => changeColorHandler('done')}
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
