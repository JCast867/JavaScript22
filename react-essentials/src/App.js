import React from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} around</p>
      <img src={restaurant} height={400} alt="Mexican Food"/>
      <ul style={{textAlign: 'left'}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
          ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Enchiladas",
  "Tacos",
  "Empanadas",
  "Tortas"
];

const dishesObjects = dishes.map((dish, i) => ({id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Jaime" />
      <Main adjective="amazing" dishes={dishesObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
