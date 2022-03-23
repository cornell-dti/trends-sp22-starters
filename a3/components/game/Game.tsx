import { useEffect, useRef, useState } from "react"
import { UPGRADES_DATA } from "../../data"
import UpgradeSection from "./UpgradeSection"
import styles from "../../styles/Game.module.css"

const TICK = 1000

const Game = () => {
  const [brbs, setBRBs] = useState(0)

  // TODO: State from UpgradeSection should be lifted here:

  const clickIncome = 1 // TODO: This should be 1 + # of upgrades purchased
  const tickIncome = 0 // TODO: Calculate this by summing through upgrades

  const updateTick = useRef<() => void>()

  useEffect(() => {
    updateTick.current = () => {
      setBRBs((x) => x + tickIncome)
    }
  }, [])

  useEffect(() => {
    const ticker = setInterval(() => updateTick.current(), TICK)
    return () => clearInterval(ticker)
  }, [])

  return (
    <div className={styles.container}>
      <h1>💰BRB Clicker💰</h1>
      <div className={styles.body}>
        <div className={styles.column}>
          <h2>I have ${brbs} BRBs.</h2>
          <p>Income per click: {clickIncome} BRBs</p>
          <p>Income per tick: {tickIncome} BRBs</p>
          <button onClick={() => setBRBs((x) => x + clickIncome)}>
            Acquire BRB
          </button>
        </div>
        <div className={styles.column}>
          <h2>Upgrades</h2>
          {UPGRADES_DATA.map((upgrade) => (
            <UpgradeSection key={upgrade.id} brbs={brbs} upgrade={upgrade} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game
