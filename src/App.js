import logo from './logo.svg';
import './App.css';
import Business from './components/Business';
import SearchBar from './components/SearchBar';
import React from 'react';


let businesses = [];
for (let i = 0; i<10; i++) {
  businesses.push(<Business key={i} />)
};
let searchBar = <SearchBar />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchBar onSearch={handleSubmit} />
      {businesses}
    </div>
  );
}

export default App;
