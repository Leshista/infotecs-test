import styles from '../componentStyles/css/ToDoChanging.module.css';
const ToDoChanging = () => {
    // In the right the user should
    //  be able to change tasks'
    // content, mark them as
    // 'waiting', 'in process' and 'done'
    return (
        <section className={styles.toDoChanging}>
            <h2 className={styles.toDoChanging__Title}>Lorem Ipsum</h2>
            <p className={styles.toDoChanging__Text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident corrupti architecto saepe aperiam numquam nemo iusto
                repellendus excepturi repellat eligendi odit in cum fuga qui
                nobis, perspiciatis esse odio magnam.
            </p>
        </section>
    );
};

export default ToDoChanging;
