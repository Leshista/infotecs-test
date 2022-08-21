import { useState } from 'react';
import styles from '../componentStyles/css/ToDoListItem.module.css';

const ToDoListItem = ({
    activeItem,
    setActiveItem,
    id,
    title,
    text,
    setActiveItemTitle,
    setActiveItemText,
}) => {
    // States
    const [isActive, setIsActive] = useState(false);

    // Handlers
    const activateItemHandler = () => {
        // When the user clicks on tasks it'll become active and highlighted
        // Also it sets the states responsible for remembering content
        setTimeout(() => {
            setActiveItem(id);
            setActiveItemTitle(title);
            setActiveItemText(text);
            setIsActive(true);
        }, 0);
    };
    const deactivateItemHandler = () => {
        setTimeout(() => {
            setIsActive(false);
        }, 0);
    };

    return (
        <article
            className={styles.toDoList__Item}
            onClick={activateItemHandler}
            id={id}
            style={
                isActive
                    ? { backgroundColor: '#BE8ABF' }
                    : { backgroundColor: '#BFA2DB' } // This'll highlight/unhighlight task based on activeItem state
            }
            onPointerLeave={deactivateItemHandler}
        >
            <p className={styles.toDoList__text}>{title}</p>
            {isActive ? (
                <div className={styles.progress}>
                    <div className={styles.progress__waiting}>
                        <img
                            src="https://pic.onlinewebfonts.com/svg/img_295843.png"
                            alt="Waiting"
                        />
                    </div>
                    <div className={styles.progress__inprogress}>
                        <img
                            src="http://cdn.onlinewebfonts.com/svg/img_567202.png"
                            alt="In process"
                        />
                    </div>
                    <div className={styles.progress__done}>
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
