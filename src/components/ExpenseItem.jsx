function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item" style={{ marginBottom: "10px" }}>
      <span>{expense.title} - {expense.category} - ${expense.amount.toFixed(2)}</span>
      <button 
        onClick={() => onDelete(expense.id)} 
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
