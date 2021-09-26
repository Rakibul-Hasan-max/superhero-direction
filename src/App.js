import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}


function Header(){
  return(
    <header className="App-header">
      <h2 className="title">This is our corporate team</h2>
      <h4 className="title">Corporate Teams provides high potential leaders and teams to increase team engagement</h4>
      <h2 className="title">Total Budget: 500 Million</h2>
    </header>
  )
}



function Main(){
  return(
    <section className="main">
      <Left></Left>
      <Right></Right>
    </section>
  )
}


function Left(){
  
  const [left, setLeft] = useState([]);

  useEffect( () => {
    fetch('./data.JSON')
    .then(res => res.json())
    .then(data => setLeft(data));
  } ,[])

  return(
    <div className="left">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic culpa commodi dolores error, animi nesciunt incidunt rerum est alias molestiae ipsam inventore reprehenderit impedit repellat dolor iure consequuntur dolorem?</p>
      <p>Name: {left.length}</p>
      {
        left.map(data => <Data name={data.name} capital={data.capital}></Data>)
      }
    </div>
  )
}

function Data(props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
}

function Right(){
  return(
    <div className="right">
      <h3>Added countries: </h3>
      <h3>Total population: </h3>
      <p>Name: </p>
    </div>
  )
}


export default App;
