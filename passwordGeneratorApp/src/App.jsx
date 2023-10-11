import './App.css'

function App() {
  return(
    <div class='App'>
      <h1>Password Generator</h1>

      <div class='Resultado'>
        <p>P4$5W0rD!</p>
      </div>

      <div class='Configs'>
        <div id='length'>
          <div id='valores'>
          <label htmlFor="scrollBar">Character Length</label>
          <span id='rangeResult'>0</span>
          </div>
          <input type="range" id='scrollBar' />
        </div>
      </div>
    </div>
  );
}

export default App
