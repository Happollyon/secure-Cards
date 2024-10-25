import logo from './imgs/Cards.svg';
import {ReactComponent as Play} from './imgs/play_button.svg';
import {ReactComponent as Repeat} from './imgs/Repeat.svg';
import {ReactComponent as Books} from './imgs/Books.svg';
import {ReactComponent as Graph} from './imgs/graph.svg';
import {ReactComponent as About} from './imgs/About.svg';
import './App.css';

function App() {
  let dark = false;
  return (
    <div className={dark?"App-dark":"App-bright"}>
     {/**  
      <div id="">
         Sercurity+ Cards
      </div>
      <img src={logo} className="App-logo" alt="logo" />
     */ }

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
        
        </div>
      </div>
    </div>
  );
}

export default App;
