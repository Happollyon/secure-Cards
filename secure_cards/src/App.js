import logo from './imgs/Cards.svg';
import React, { useState } from 'react';
import {ReactComponent as Play} from './imgs/play_button.svg';
import {ReactComponent as Repeat} from './imgs/Repeat.svg';
import {ReactComponent as Books} from './imgs/Books.svg';
import {ReactComponent as Graph} from './imgs/graph.svg';
import {ReactComponent as About} from './imgs/About.svg';
import {ReactComponent as DarkMode} from './imgs/Dark_Mode.svg';
import {ReactComponent as Linkedin} from './imgs/LinkedIn.svg';
import {ReactComponent as Github} from './imgs/Github.svg';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = () => {
    setDark(prevDark => !prevDark);
  };
  return (
    <div className={dark?"App-dark":"App-bright"}>
  

      <div id={dark?"sidNav-dark":"sidNav-bright"} >
        <div id="logoName"> 
          <img src={logo} className="App-logo" alt="logo" />
          <div id="name">Sercurity+ Cards</div>
        </div>

        <div id="optionsContainer">

          <div className={dark?"option-dark":"option-bright"}>
            <Play className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <div>
              Play
            </div>
          </div>

          <div className={dark?"option-dark":"option-bright"}>
            <Repeat className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <div>
              Study Again
            </div>
          </div>

          <div className={dark?"option-dark":"option-bright"}>
            <Books className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <div>
              List of Accronyms
            </div>
          </div>

          <div className={dark?"option-dark":"option-bright"}>
            <Graph className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <div>
              Progress
            </div>
          </div>

          <div className={dark?"option-dark":"option-bright"}>
            <About className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <div>
              About
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="darkMode">
            <DarkMode className="option-icon" style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo" />
            <label>Dark Mode</label>
            <input onClick={toggleDarkMode} type="checkbox"/>
          </div>
          <div id='socialsCont'>
            <Linkedin style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo"/>
            <Github style={{ fill: dark?'#E0E0E0':'#333333'}} alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
