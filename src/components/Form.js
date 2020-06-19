import React, { useState } from 'react';
const Form = () => {
  return (
    <form>
      <h2>Expenses here</h2>
      <div className="field">
        <label>Expense name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Example: transport"
        />
      </div>
      <div className="field">
        <label>Expense quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Example: 300"
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
