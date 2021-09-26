import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect( () => {
    fetch('./data.JSON')
    .then(res => res.json())
    .then(data => console.log(data));
  } ,[])


  return (
    <div className="App">
      <header className="App-header">
        <h2>This is our corporate team</h2>
        <h4>Corporate Teams provides high potential leaders and teams to increase team engagement</h4>
        <h2>Total Budget: 500 Million</h2>
      </header>
    </div>
  );
}

export default App;
