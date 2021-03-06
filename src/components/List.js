import React from 'react';
import Expense from './Expense';

const List = ({ expenses }) => (
  <div className="realized-expenses">
    <h2>Expenses list</h2>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense} />
    ))}
  </div>
);

export default List;
