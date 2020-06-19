import React from 'react';
import Question from './components/Question';
function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="principal-content content">
          <Question />
        </div>
      </header>
    </div>
  );
}

export default App;
