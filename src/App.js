import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
function App() {
  const [budget, saveBudget] = useState(0);
  const [rest, saveRest] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);

  const addNewExpense = (expense) => {
    saveExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="principal-content content">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveRest={saveRest}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addNewExpense={addNewExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
