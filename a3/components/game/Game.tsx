import { useEffect, useRef, useState } from "react"
import { UPGRADES_DATA, TICK } from "../../data"
import UpgradeSection from "./UpgradeSection"
import styles from "../../styles/Game.module.css"
import { Upgrade } from "../../types"

// HINT: you can store upgrade information with a Map (like dictionary)
// with [key = upgrade] and [value = number of times purchased]
const getInitialUpgrades = (): Map<Upgrade, number> => {
  const upgradesMap = new Map<Upgrade, number>()
  UPGRADES_DATA.forEach((upgrade) => {
    upgradesMap.set(upgrade, 0)
  })
  return upgradesMap
}

const Game = () => {
  const [brbs, setBRBs] = useState(0)

  // TODO: State from UpgradeSection should be lifted here:

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
          <p>Income per tick: {tickIncome} BRBs</p>
          <button onClick={() => setBRBs((x) => x + 1)}>
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
