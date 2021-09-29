import logo from './logo.svg';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className = "container">
      <h1><i id="truck" class="fa fa-truck"></i> Hello From React Component</h1>
      <Button class="bootbtn">bootstrap button</Button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Rem iste nisi sequi non odit dignissimos similique doloremque
         eos soluta obcaecati dolor ullam expedita dolore harum officia, 
         nobis perspiciatis tempora? Beatae!
        </p>
    </div>
  );
}

export default App;
