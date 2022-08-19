import { useState } from 'react';
import styles from '../componentStyles/css/ToDoChanging.module.css';
const ToDoChanging = ({
    todos,
    setTodos,
    activeItem,
    activeItemTitle,
    activeItemText,
}) => {
    // In the right the user should
    //  be able to change tasks'
    // content, mark them as
    // 'waiting', 'in process' and 'done'

    // Functions
    const updateTodo = (change) => {
        const newTodos = [...todos];
        change === 'title'
            ? (newTodos[activeItem].title = document.querySelector(
                  '#toDoChanging__RedactingTitle'
              ).value)
            : (newTodos[activeItem].text = document.querySelector(
                  '#toDoChanging__RedactingText'
              ).value);
        setTodos(newTodos);
    };

    // States
    const [titleIsClicked, setTitleIsClicked] = useState(false);
    const [textIsClicked, setTextIsClicked] = useState(false);
    // Handlers
    const titleClicked = () => setTitleIsClicked(true);
    const titleUnclicked = () => setTitleIsClicked(false);
    const textClicked = () => setTextIsClicked(true);
    const textUnclicked = () => setTextIsClicked(false);
    const titleKeyUp = (e) =>
        e.key === 'Enter' ? setTitleIsClicked(false) : updateTodo('title');
    console.log(todos);
    const textKeyUp = (e) =>
        e.key === 'Enter' ? setTextIsClicked(false) : updateTodo('text');

    return (
        <section className={styles.toDoChanging}>
            {titleIsClicked ? (
                <input
                    type="text"
                    name=""
                    id="toDoChanging__RedactingTitle"
                    defaultValue={activeItemTitle}
                    autoFocus={true}
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
                    rows="5"
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
