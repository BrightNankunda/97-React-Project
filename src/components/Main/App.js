
import './App.css';
import Clod from './clod';
import Big from './big';
import Todo from './todo';
import Exte from './exte';
import Todog from './todog';
import Clickable from './clickable';
import Changed from './changed';
import Middle from './middle';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const names = "bright Sr"
  return (
    <div className="App">
      
        <Middle name= {names}> 
        <h2>Juniour Full Stack Web Developer</h2>
        <h3>React and Node</h3>
        </Middle>
        <p>
          97 Cloud Bets 
        </p>
        <Changed url="names" />
        <Clod name="Nintey Seven"/>
        <Big />
        <Todo />
        <Exte name="Bright"/>
        <Todog/>
        <Clickable yap="Thunder"/>
      
    </div>
  );
}

export default App;
