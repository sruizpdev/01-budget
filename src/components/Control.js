import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';
const Control = ({ budget, rest }) => (
  <Fragment>
    <div className="alert alert-primary">Budget: {budget} €</div>
    <div className={checkBudget(budget, rest)}>Rest: {rest} €</div>
  </Fragment>
);

export default Control;
