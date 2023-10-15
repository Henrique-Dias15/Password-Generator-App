import './App.css'
import { useState } from 'react';

function App() {
  const[data,setData] = useState(0)
  const[check1, setCheck1] = useState(false);
  const[check2, setCheck2] = useState(false);
  const[check3, setCheck3] = useState(false);
  const[check4, setCheck4] = useState(false);

  const checked1 = (e) => {
    setCheck1(e);
  }

  const checked2 = (e) => {
    setCheck2(e);
  }

  const checked3 = (e) => {
    setCheck3(e);
  }

  const checked4 = (e) => {
    setCheck4(e);
  }
  
  const value = (e) => {
    setData(e);
    var color = 'linear-gradient(90deg, rgb(164, 255, 171)' + ((e/17)*100) + '%, rgb(19,18,26)' + ((e/17)*100) + '%)';
    slider.style.background = color;
  }

  const randomPassword = () => {  
    var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    var lowerCases = 'abcdefgihjklmnopqrstuvwxyz';
    var numbers = '1234567890';
    var symbols = '!@#$%&*';
    var characters = (check1 ? upperCases : '') + (check2 ? lowerCases : '') + (check3 ? numbers : '') + (check4 ? symbols : '');
        
    var lenString = data;  
    var randomstring = '';  
    
    for (var i=0; i<lenString; i++) {  
    var rnum = Math.floor(Math.random() * characters.length);  
    randomstring += characters.substring(rnum, rnum+1);  
    }  
    
    document.getElementById('result').innerHTML = randomstring.length != 0 ? randomstring : 'Nada selecionado';  
    }  

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
          <input type="range" min='0' max='17' value={data} name="slider" id="slider" onChange={(e) => value(e.target.value)}/> 
        </div>

        <div id='checkBoxes'>
          <div>
            <input type='checkbox' id='includeUppercase' onChange={(e) => checked1(e.target.checked)}/>
            <label htmlFor="includeUppercase">Include Uppercase Letters</label>
          </div>
          <div>
            <input type='checkbox' id='includeLowercase' onChange={(e) => checked2(e.target.checked)}/>
            <label htmlFor="includeLowercase">Include Lowercase Letters</label>
          </div>
          <div>
            <input type='checkbox' id='includeNumbers' onChange={(e) => checked3(e.target.checked)}/>
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div>
            <input type='checkbox' id='includeSymbols'onChange={(e) => checked4(e.target.checked)}/>
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
        <button id="generateBtn" class="button" onClick={() => randomPassword()}>GENERATE<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg></button> 
        </div>
      </div>
    </div>
  );
}

export default App
