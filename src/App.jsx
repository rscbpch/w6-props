import React from "react";
import { AVAILABLE_ITEM } from "./data.js";

function Item({ item }) {
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <small>{item.occupation}</small>
      <p>{item.description}</p>
      <img src={item.image.src} alt={item.image.alt} />
    </div>
  );
}

function App() {
  return <>
  {/* Your code  here */}
    <header>
      <h1>My Items</h1>
    </header>
    <main>
      <div className="cards-view">
        <div className="cards-grid">
          {AVAILABLE_ITEM.map((item, index) => (
            <Item key={index} place={item} />
          ))}
        </div>
      </div>
    </main>
  </>;
}

export default App;
