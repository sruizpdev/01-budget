import React, { Fragment } from 'react';
const Control = ({ budget, rest }) => (
  <Fragment>
    <div className="alert alert-primary">Budget: {budget} €</div>
    <div className="alert">Rest: {rest} €</div>
  </Fragment>
);

export default Control;
