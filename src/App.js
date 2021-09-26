import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

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
  useEffect( () => {
    fetch('./data.JSON')
    .then(res => res.json())
    .then(data => console.log(data));
  } ,[])


  return(
    <div className="left">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic culpa commodi dolores error, animi nesciunt incidunt rerum est alias molestiae ipsam inventore reprehenderit impedit repellat dolor iure consequuntur dolorem?</p>
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
