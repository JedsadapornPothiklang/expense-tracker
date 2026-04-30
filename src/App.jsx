import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseSummary from './components/ExpenseSummary';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import styles from './App.module.css';

function App() {
  return (
    <ExpenseProvider>
      <div className={styles.app}>
        <header>
          <h1>{import.meta.env.VITE_APP_APP_TITLE}</h1>
        </header>

        <div className={styles['main-layout']}>
          <aside>
            <ExpenseSummary />
          </aside>

          <main>
            <AddExpenseForm />
            <ExpenseList />
          </main>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;