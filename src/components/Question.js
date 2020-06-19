import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({ saveBudget, saveRest, updateQuestion }) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const defineBudget = (e) => {
    saveQuantity(parseInt(e.target.value));
  };

  const saveInitialBudget = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true);
      return;
    }
    saveError(false);
    saveBudget(quantity);
    saveRest(quantity);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>What is your budget?</h2>
      {error ? <Error message="Budget incorrect" /> : null}
      <form onSubmit={saveInitialBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          value="Define budget"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
};

export default Question;
