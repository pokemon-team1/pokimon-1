import './App.css';
import List from './Menu';
import Video from './Video.js';
import Ima from './ima';
import Nav from './navbar';
;




function App() {
  return (
    <div className="App">
      <div><Nav/></div>
       <div className='body'>
          <div class="Menu" ><List/></div>
          <div class="Menu"> <Video/></div>
       </div>

      <div class="favorite"><Ima/></div>

      <div ></div>
      
      <div></div>
    </div>
  );
}

export default App;
