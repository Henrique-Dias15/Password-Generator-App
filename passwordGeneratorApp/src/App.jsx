import './App.css'
import { useState } from 'react';

function App() {
  const[data,setData] = useState(0)
  return(
    <div class='App'>
      <h1>Password Generator</h1>

      <div class='Resultado'>
        <p id='result'>P4$5W0rD!</p>
        <button id='copyButton'></button>
      </div>

      <div class='Configs'>
        <div id='length'>
          <div id='valores'>
          <label htmlFor="scrollBar">Character Length</label>
          <span id='rangeResult'>{data}</span>
          </div>
          <input type="range" min='1' max='10' value={data} name="slider" id="slider" onChange={(e)=>setData(e.target.value)}/> 
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
        <div id='strength'>
          <h2 htmlFor='STRENGTH'>STRENGTH</h2>
          <div class="strengthlvl">
            <p class="fs-2" id="levelTxt">WEAK</p>
            <div id="bar1" class="bars bar1"></div>
            <div id="bar2" class="bars bar2"></div>
            <div id="bar3" class="bars bar3"></div>
            <div id="bar4" class="bars bar4"></div>
          </div>
        </div>
        <div class="generateBtn">
        <button id="generateBtn" class="button">GENERATE<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></button> 
        </div>
      </div>
    </div>
  );
}

export default App
