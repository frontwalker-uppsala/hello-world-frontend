import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [stuff, setStuff] = useState('No response yet');
  
  useEffect(() => {
    fetch("http://212.237.149.162:1338/test").then(results => {
    return results.json();
    }).then(data => {
      setStuff(data.message);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {stuff}
        </p>
      </header>
    </div>
  );
}

export default App;
