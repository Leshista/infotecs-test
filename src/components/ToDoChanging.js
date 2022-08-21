import { useState } from 'react';
import styles from '../componentStyles/css/ToDoChanging.module.css';
const ToDoChanging = ({
    todos,
    setTodos,
    activeItem,
    activeItemTitle,
    setActiveItemTitle,
    activeItemText,
    setActiveItemText,
}) => {
    // In the right the user should
    //  be able to change tasks'
    // content, mark them as
    // 'waiting', 'in process' and 'done'

    // Functions
    const updateTodo = (change) => {
        // This function changes text/title of the active item in the todos object, sets the activeItemTitle/activeItemText, automatically rerendering the page afterwards
        const newTodos = [...todos];
        switch (change) {
            case 'title':
                newTodos[activeItem].title = document.querySelector(
                    '#toDoChanging__RedactingTitle'
                ).value;
                setActiveItemTitle(
                    document.querySelector('#toDoChanging__RedactingTitle')
                        .value
                );
                break;
            default:
                newTodos[activeItem].text = document.querySelector(
                    '#toDoChanging__RedactingText'
                ).value;
                setActiveItemText(
                    document.querySelector('#toDoChanging__RedactingText').value
                );
                break;
        }
        setTodos(newTodos);
    };

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
