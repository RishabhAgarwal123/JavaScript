// named and default import/exports
//only one default export module
//think of module as file

import React, { Component } from "react";
import BookList from "./BookList";
import './App.css';
// import { name, age, person } from "./data";

// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//   </section>
// );

// import * as data from "./data";
// const App = () => (
//   <section>
//     <p>this is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
// );

class App extends Component {
  render() {
    return (
      <section>
        <BookList />
      </section>
    )
  }
}

export default App;
