import styles from "../App.module.css";


const Display=({displayVal})=>{
    return <input type="text" className={styles.display} value={displayVal}/>
}
export default Display;