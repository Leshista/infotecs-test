import styles from './App.module.css';
import ToDo from './components/ToDo';

const App = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.title}>React To Do List</h1>
            </header>
            <main className={styles.main}>
                <ToDo />
            </main>
        </>
    );
};

export default App;
