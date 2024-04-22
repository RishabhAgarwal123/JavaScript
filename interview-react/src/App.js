import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slices/counter';
import DataFetch from './DataFetch';
import useLocalStorage from './cutom-hooks/useLocalStorage';
import ParentComponent from './lazyLoaded/ParentComponent';
import { useTheme } from './context/ThemeContext';
import DataAxios from './DataAxios';
import AnotherWithLogger from './hoc/anotherComponent';
import useErrorBoundary from './cutom-hooks/useErrorBoundary';
import UseState from './hooks/UseState';

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const [name, setName] = useLocalStorage('name', '');
  // const { theme, toggleTheme } = useTheme();
  const { error, resetError } = useErrorBoundary();

  // Simulate an error
  const throwError = () => {
    throw new Error('An error occurred!');
  };

  return (
    <div className="App">
      {/* <div>
        Current theme: {theme}
        <button onClick={toggleTheme}>Change Theme</button>
      </div> */}
      <AnotherWithLogger name="I am from App" />
      <div>
        {error ? (
          <div>
            <h2>Error: {error.message}</h2>
            <button onClick={resetError}>Dismiss</button>
          </div>
        ) : (
          <button onClick={throwError}>Throw Error</button>
        )}
      </div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <DataFetch />
      <DataAxios />
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p>Hello, {name}!</p>
      </div>
      <hr />
      <ParentComponent />
      <hr/>
      <UseState />
    </div>
  );
}

export default App;
