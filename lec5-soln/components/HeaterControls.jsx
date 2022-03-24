import styles from "../styles/Controls.module.css"
import react, { useState } from "react"

export const otherFunction = () => {
  return 3
}

export const otherFunction2 = () => {
  return 3
}

export default ({ heaterValue, setHeaterValue }) => {
  return (
    <div className={styles.heatControl}>
      <h2> Heater controls</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={heaterValue}
        onChange={(e) => setHeaterValue(Number(e.target.value))}
        id="heater"
      ></input>{" "}
      <span>{heaterValue}</span>
    </div>
  )
}
