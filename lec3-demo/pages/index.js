import styles from '../styles/Home.module.css'
import { useState } from 'react'
import DisplayContainer from '../components/DisplayContainer'
import HeaterControls from '../components/HeaterControls';
import CoolerControls from '../components/CoolerControls';


const Home = () => {
  {/* TODO: what states do i need? */ }
  return (
    <div id="main-container" className={styles.container}>
      <link rel="stylesheet" type="text/css" href="https://csshake.surge.sh/csshake.min.css" />
      <h1>Temperature Visualizer</h1>
      {/* TODO: what should i pass into here? */}
      <DisplayContainer />
      <div className={styles.sliders}>
        {/* ALSO: THIS IS REALLY BAD CODE DUPLICATION BUT IT'S FOR A DEMO!! */}
        {/* TODO: what should i pass into here? */}
        <CoolerControls />
        {/* TODO: what should i pass into here? */}
        <HeaterControls />
      </div>
    </div>
  )
}

export default Home