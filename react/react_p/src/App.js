"use client"

// Observer Example
import './App.css';
class Observer {
  constructor() {
    this.observer = [];
  }
  subscribe(fun) {
    this.observer.push(fun);
  }
  unsubscribe(fun) {
    this.observer = this.observer.filter((obs) => obs !== fun);
  }
  notify(data) {
    this.observer.forEach((obs) => obs(data));
  }
}


function App() {
  const obs = new Observer();

  function logger(data) {
    console.log('from Logger:', data);
  }
  obs.subscribe(logger);

  function buttOne() {
    obs.notify("Clicked on button 1")
  }
  function buttTwo() {
    obs.notify("Clicked on button 2")
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={buttOne}>click me 1</button>
        <button onClick={buttTwo}>click me 2</button>
      </header>
    </div>
  );
}

export default App;
