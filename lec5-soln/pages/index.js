import styles from '../styles/Home.module.css'
import { useState } from 'react'
import DisplayContainer from '../components/DisplayContainer'
import HeaterControls, { otherFunction as myFunction } from '../components/HeaterControls';
import CoolerControls from '../components/CoolerControls';

console.log(myFunction())

const Home = () => {
  const [coolerValue, setCoolerValue] = useState(50);
  const [heaterValue, setHeaterValue] = useState(50);
  const name = "Enoch"

  return (
    <div id="main-container" className={styles.container}>
      <link rel="stylesheet" type="text/css" href="https://csshake.surge.sh/csshake.min.css" />
      <h1>Temperature Visualizer</h1>
      <h2> Welcome {name ? name : "The Nameless One"} !</h2>
      {/* TODO: what should i pass into here? */}
      <DisplayContainer coolerValue={coolerValue} heaterValue={heaterValue} />
      <div className={styles.sliders}>
        {/* ALSO: THIS IS REALLY BAD CODE DUPLICATION BUT IT'S FOR A DEMO!! */}
        <CoolerControls coolerValue={coolerValue} setCoolerValue={setCoolerValue} />
        <HeaterControls heaterValue={heaterValue} setHeaterValue={setHeaterValue} />
      </div>
    </div>
  )
}

export default Home