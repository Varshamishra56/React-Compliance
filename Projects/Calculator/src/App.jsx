import 'bootstrap/dist/css/bootstrap.css';
import styles from "./App.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
    const onButtonClick=(btntext)=>{
        if(btntext==='C'){
            setcalval('');

        }else if(btntext==='='){
            const result=eval(calval);
            setcalval(result)

        }else{
            const newDisplayName=calval + btntext;
            setcalval(newDisplayName);
        }
    }

    let [calval,setcalval]=useState("");
    return <div id="calculator" className={styles.calculator}>
        <Display displayVal={calval}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        
    </div>
}

export default App
