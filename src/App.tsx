import React from 'react';
import logo from './logo.svg';
import './App.css';
import PeriodicTable from './components/PeriodicTable/PeriodicTable';
import elementsList, { PeriodicElementData } from './data/Elements';

function App() {
  let elements: PeriodicElementData[] = [];
  for (let elementNumber in elementsList) {
    elements.push(elementsList[elementNumber]);
  }
  let elementNames: string[] = elements.sort(data => data.number).map(data => data.name);
  return (
    <div className="App">
      <header>
        <h1>
          Web Accessible Periodic Table
        </h1>
        <h2>A Periodic Table with elements browsable by screen readers</h2>
      </header>
      <main>
        <nav aria-label="page" className="elements">
          <ul>
            {elementNames.map((elementName, index) => (
              <li key={index}>
                <a href={`#${elementName}`}>{elementName}</a>
              </li>
            ))}
            
          </ul>
        </nav>
        <PeriodicTable />
        <div className="explanation">
          <h2>What's all this, then?</h2>
          <p>
            This is a periodic table that is perusable visually, and offers screen readers the ability to browse the
            elements and get additional information about each one.
          </p>
          <p>
            Why do this? I'm a web developer who is brushing up on the WCAG 2.1 guidelines for making sites 
            accessible to Internet users with visual impairments. So this is, um...fun for me. (Seriously, though, it is. ;] )
          </p>
          <p>
            Are you using Mac OS X? You can browse the list of elements using <a href="https://support.apple.com/guide/voiceover/turn-voiceover-on-or-off-vo2682/mac" target="_blank">
            VoiceOver
            </a>.
          </p>
          <p>
            Cheatsheet: turn VoiceOver on and off using Command+F5. This should read the headers, and then start reading 
            off a hidden list of all the elements. If you select one of these element links, it will read a brief 
            blurb with additional information about the element you selected.
          </p>
          <p>
            To browse the links with VoiceOver's Web Rotor, turn on VoiceOver and hit Control+Option+U. Then use the 
            up and down arrow keys to quickly browse the list of elements.
          </p>
        </div>
      </main>
      <hr />
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
