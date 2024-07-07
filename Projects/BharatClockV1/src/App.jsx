import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';

function App() {
  return <center>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
  </center>
}

export default App
