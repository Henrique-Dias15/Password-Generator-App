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

        <div id='checkBoxes'>
          <div>
            <input type='checkbox' id='includeUppercase'/>
            <label htmlFor="includeUppercase">Include Uppercase Letters</label>
          </div>
          <div>
            <input type='checkbox' id='includeLowercase'/>
            <label htmlFor="includeLowercase">Include Lowercase Letters</label>
          </div>
          <div>
            <input type='checkbox' id='includeNumbers'/>
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div>
            <input type='checkbox' id='includeSymbols'/>
            <label htmlFor="includeSymbols">Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
