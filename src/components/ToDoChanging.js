import { useState } from 'react';
import styles from '../componentStyles/css/ToDoChanging.module.css';
const ToDoChanging = ({
    activeItemTitle,
    setActiveItemTitle,
    activeItemText,
    setActiveItemText,
}) => {
    // In the right the user should
    //  be able to change tasks'
    // content, mark them as
    // 'waiting', 'in process' and 'done'

    // States
    const [titleIsClicked, setTitleIsClicked] = useState(false);
    const [textIsClicked, setTextIsClicked] = useState(false);

    // Handlers
    const titleClicked = () => setTitleIsClicked(true);
    const titleUnclicked = () => setTitleIsClicked(false);
    const textClicked = () => setTextIsClicked(true);
    const textUnclicked = () => setTextIsClicked(false);
    const titleKeyPress = (e) =>
        e.key === 'Enter'
            ? setTitleIsClicked(false)
            : setActiveItemTitle(
                  document.querySelector('#toDoChanging__RedactingTitle').value
              );
    const textKeyPress = (e) =>
        e.key === 'Enter'
            ? setTextIsClicked(false)
            : setActiveItemText(
                  document.querySelector('#toDoChanging__RedactingText').value
              );

    return (
        <section className={styles.toDoChanging}>
            {titleIsClicked ? (
                <input
                    type="text"
                    name=""
                    id="toDoChanging__RedactingTitle"
                    className={styles.toDoChanging__RedactingTitle}
                    onBlur={titleUnclicked}
                    onKeyPress={titleKeyPress}
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
                    rows="5"
                    id="toDoChanging__RedactingText"
                    className={styles.toDoChanging__RedactingText}
                    onBlur={textUnclicked}
                    onKeyPress={textKeyPress}
                ></textarea>
            ) : (
                <p className={styles.toDoChanging__Text} onClick={textClicked}>
                    <p>{activeItemText}</p>
                </p>
            )}
        </section>
    );
};

export default ToDoChanging;
