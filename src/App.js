import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';
function App() {
  const [budget, saveBudget] = useState(0);
  const [rest, saveRest] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createExpense, saveCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      saveExpenses([...expenses, expense]);

      const budgetRest = rest - expense.quantity;
      saveRest(budgetRest);

      saveCreateExpense(false);
    }
  }, [expense]);

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
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <Control budget={budget} rest={rest} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
