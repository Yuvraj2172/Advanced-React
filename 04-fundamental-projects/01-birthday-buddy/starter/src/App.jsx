import { useState } from "react";
import React from "react";
import { data } from "./data";
import { List } from "./List";
const App = () => {
  const [people , setPeople] = useState(data);

  const clearItems=()=>{
    setPeople([]);
  }
  const repopulate=()=>{
    setPeople(data)
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people ={people}/>
      <button type="button"  style={{marginBottom: '2rem'}} className="btn btn-block" onClick={clearItems}>Clear List</button>
      <button type="button" className="btn btn-block" onClick={repopulate}>repopulate</button>
      </section>
    </main>
  );
};
export default App;
