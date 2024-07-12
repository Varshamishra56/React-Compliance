import 'bootstrap/dist/css/bootstrap.css';
import styles from "./App.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
    return <div id="calculator" className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
        
    </div>
}

export default App
