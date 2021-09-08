import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// redux stuff
import reducer from "./reducer";
// stores: stores of data, or it's a state
import { createStore } from 'redux'; // Will create a store
import { Provider } from "react-redux";

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// this requies a function in order to manage the state and we pass teh initial state with it

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
