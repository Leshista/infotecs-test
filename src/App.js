import styles from './App.module.css'; // I find styles modules the best to use within React apps, so use them in all components
import ToDo from './components/ToDo';

const App = () => {
    // The main purpose of this component is to me container of all that is ToDo
    // And to be rendered into html
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
