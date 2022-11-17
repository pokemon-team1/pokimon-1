import './App.css';
import List from './Menu';
import Video from './Video.js';
import Ima from './ima';
import Nav from './navbar';




function App() {
  return (
    <div className="App">
      <div><Nav/></div>
      <div class="Menu" ><List/></div>


      <div class="favorite"><Ima/></div>

      <div> <Video/></div>
      
      
    </div>
  );
}

export default App;
