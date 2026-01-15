function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <h2>Total: ${total.toFixed(2)}</h2>
  );
}

export default ExpenseTotal;
