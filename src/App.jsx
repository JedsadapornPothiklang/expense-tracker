import { ExpenseProvider } from './context/ExpenseContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ExpenseSummary from './components/ExpenseSummary';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import Weather from './components/Weather';
import styles from './App.module.css';

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.app}>
      <header>
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
        <button className={styles['theme-toggle']} onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <div className={styles['main-layout']}>
        <aside>
          <Weather />
          <ExpenseSummary />
        </aside>

        <main>
          <AddExpenseForm />
          <ExpenseList />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <AppContent />
      </ExpenseProvider>
    </ThemeProvider>
  );
}

export default App;