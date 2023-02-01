import React from 'react';
import logo from './logo.svg';
import './App.css';
import PeriodicTable from './components/PeriodicTable/PeriodicTable';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Web Accessible Periodic Table
        </h1>
        <h2></h2>
      </header>
      <main>
        <PeriodicTable />
      </main>
      <footer>
        <nav aria-label="site">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
              href="https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json"
              target="_blank">Elements Data Source</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
