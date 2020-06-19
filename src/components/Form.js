import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = () => {
  const [name, saveName] = useState('');
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      saveError(true);
      return;
    }
    saveError(false);
    const expense = {
      name,
      quantity,
      id: shortid.generate(),
    };
    console.log(expense);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Expenses here</h2>
      {error ? (
        <Error message="Both fields are required or wrong quantity" />
      ) : null}
      <div className="field">
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: transport"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Expense quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 300"
          value={quantity}
          onChange={(e) => saveQuantity(parseInt(e.target.value))}
        />
      </div>
      <input
        type="submit"
        value="Add expense"
        className="button-primary u-full-width"
      />
    </form>
  );
};

export default Form;
