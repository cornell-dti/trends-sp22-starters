import styles from "../styles/Controls.module.css"
import { useState } from "react"

//TODO: what props do i pass into here?
const CoolerControls = ({ coolerValue, setCoolerValue }) => {
  return (
    <div className={styles.coldControl}>
      <h2> Cooler controls</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={coolerValue}
        onChange={(event) => setCoolerValue(Number(event.target.value))}
        id="cooler"
      ></input>{" "}
      <span>{coolerValue}</span>
    </div>
  )
}

export default CoolerControls
