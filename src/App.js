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
      <h2 className="title">This is some country data</h2>
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
      {
        left.map(data => <Data name={data.name} capital={data.capital} population={data.population}
        dialingCode={data.dialingCode} president={data.president} img={data.img}></Data>)
      }
    </div>
  )
}

function Data(props){
  return(
    <div className="card">
      <img src={props.img} alt="" />
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
      <p>Population:: {props.population}</p>
      <p>DialingCode: {props.dialingCode}</p>
      <p>President: {props.president}</p>
      <button className="details">Details</button>
      <i class="fab fa-facebook-square" id="fab"></i>
    </div>
  )
}
// onClick={loadData}
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
