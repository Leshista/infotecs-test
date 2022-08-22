import { useState } from 'react';
import styles from '../componentStyles/css/ToDoChanging.module.css';
const ToDoChanging = ({ updateTodo, activeItemTitle, activeItemText }) => {
    // In the right the user should
    //  be able to change todos'
    // content, mark them as
    // 'waiting', 'in process' and 'done'

    // States

    // States below are for knowing if title/text is clicked
    const [titleIsClicked, setTitleIsClicked] = useState(false);
    const [textIsClicked, setTextIsClicked] = useState(false);

    // Handlers

    // The handlers below are for setting on/off 'clicked' state
    const titleClicked = () => setTitleIsClicked(true);
    const titleUnclicked = () => setTitleIsClicked(false);
    const textClicked = () => setTextIsClicked(true);
    const textUnclicked = () => setTextIsClicked(false);

    // The handlers below are waiting for input on input/textarea and update the values or remove focus from items based on key pressed
    const titleKeyUp = (e) =>
        e.key === 'Enter' ? setTitleIsClicked(false) : updateTodo('title');
    const textKeyUp = (e) =>
        e.key === 'Enter' ? setTextIsClicked(false) : updateTodo('text');

    return (
        <section className={styles.toDoChanging}>
            {/* I use conditional rendering to show plain text or input/textarea based on user's focus */}
            {titleIsClicked ? (
                <input
                    type="text"
                    name=""
                    id="toDoChanging__RedactingTitle"
                    defaultValue={activeItemTitle}
                    autoFocus={true}
                    maxLength="30"
                    className={styles.toDoChanging__RedactingTitle}
                    onBlur={titleUnclicked}
                    onKeyUp={titleKeyUp}
                />
            ) : (
                <h2
                    className={styles.toDoChanging__Title}
                    onClick={titleClicked}
                >
                    {activeItemTitle}
                </h2>
            )}
            {textIsClicked ? (
                <textarea
                    name=""
                    rows="25"
                    id="toDoChanging__RedactingText"
                    defaultValue={activeItemText}
                    autoFocus={true}
                    className={styles.toDoChanging__RedactingText}
                    onBlur={textUnclicked}
                    onKeyUp={textKeyUp}
                ></textarea>
            ) : (
                <p className={styles.toDoChanging__Text} onClick={textClicked}>
                    {activeItemText}
                </p>
            )}
        </section>
    );
};

export default ToDoChanging;
