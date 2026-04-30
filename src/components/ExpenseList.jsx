import { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';
import styles from '../App.module.css';

const COLORS = {
  Food: '#ff9500',
  Transport: '#0077cc',
  Entertainment: '#8b5cf6',
  Shopping: '#f97316',
  Health: '#10b981',
  Other: '#64748b',
};

function ExpenseList() {
  const {
    filteredExpenses,
    deleteExpense,
    filter,
    setFilter,
    categories,
    updateExpense,
  } = useExpenses();

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState(categories[0] || 'Food');
  const [editDate, setEditDate] = useState(new Date().toISOString().slice(0, 10));
  const [editError, setEditError] = useState('');

  function startEdit(expense) {
    setEditingId(expense.id);
    setEditName(expense.name);
    setEditAmount(expense.amount.toString());
    setEditCategory(expense.category);
    setEditDate(expense.date);
    setEditError('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditError('');
  }

  function saveEdit(id) {
    if (!editName.trim()) {
      setEditError('Enter name');
      return;
    }

    if (!editAmount || parseFloat(editAmount) <= 0) {
      setEditError('Enter amount');
      return;
    }

    if (!editDate) {
      setEditError('Choose a date');
      return;
    }

    updateExpense({
      id,
      name: editName.trim(),
      amount: parseFloat(editAmount),
      category: editCategory,
      date: editDate,
    });

    setEditingId(null);
  }

  return (
    <div className={styles['expense-list-section']}>
      <div className={styles.tabs}>
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`${styles.tab} ${filter === cat ? styles.active : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles['expense-list']}>
        {filteredExpenses.map((exp) => (
          <div
            key={exp.id}
            className={`${styles['expense-item']} ${editingId === exp.id ? styles.editing : ''}`}
          >
            <span
              className={styles['expense-color']}
              style={{ background: COLORS[exp.category] || COLORS.Other }}
            />

            {editingId === exp.id ? (
              <div className={styles['expense-edit-form']}>
                {editError && <p className={styles['form-error']}>{editError}</p>}
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <div className={styles['expense-edit-row']}>
                  <input
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                  />
                </div>
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className={styles['expense-edit-actions']}>
                  <button type="button" className={styles['save-button']} onClick={() => saveEdit(exp.id)}>
                    Save
                  </button>
                  <button type="button" className={styles['cancel-button']} onClick={cancelEdit}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles['expense-details']}>
                  <b>{exp.name}</b>
                  <small>{new Date(exp.date).toLocaleDateString()}</small>
                </div>
                <span>${exp.amount.toFixed(2)}</span>
                <div className={styles['expense-actions']}>
                  <button type="button" className={styles['edit-button']} onClick={() => startEdit(exp)}>
                    Edit
                  </button>
                  <button type="button" className={styles['delete-button']} onClick={() => deleteExpense(exp.id)}>
                    ✕
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;  