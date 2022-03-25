import { useEffect, useRef, useState } from "react"
import { UPGRADES_DATA, TICK } from "../../data"
import UpgradeSection from "./UpgradeSection"
import styles from "../../styles/Game.module.css"
import { Upgrade } from "../../types"

// This is the initial state for [upgradeCounts]
// We set all purchase counts to 0 at the beginning of the game
const getInitialUpgrades = (): Map<Upgrade, number> => {
  const upgradesMap = new Map<Upgrade, number>()
  UPGRADES_DATA.forEach((upgrade) => upgradesMap.set(upgrade, 0))
  return upgradesMap
}

const Game = () => {
  const [brbs, setBRBs] = useState(0)

  // You can store upgrade information with a Map (like dictionary)
  // with [key = upgrade] and [value = number of times purchased]
  // TODO: Pass down this state to child components
  const [upgradeCounts, setUpgradeCounts] = useState(getInitialUpgrades())

  const clickIncome = 1 // TODO: Calculate this by summing through upgrades
  const tickIncome = 0 // TODO: Calculate this by summing through upgrades

  /** Ticker Section Begin: No need to touch */
  const onTick = useRef<() => void>()

  useEffect(() => {
    onTick.current = () => setBRBs((x) => x + tickIncome)
  }, [tickIncome])

  useEffect(() => {
    const ticker = setInterval(() => onTick.current(), TICK)
    return () => clearInterval(ticker)
  }, [])
  /** Ticker Section End: No need to touch */

  return (
    <div className={styles.container}>
      <h1>💰BRB Clicker💰</h1>
      <div className={styles.body}>
        <div className={styles.column}>
          <h2>Balance: ${brbs} BRBs</h2>
          <p>Income per click: {clickIncome} BRBs</p>
          <p>Income per tick: {tickIncome} BRBs</p>
          <button onClick={() => setBRBs((x) => x + clickIncome)}>
            Acquire BRB
          </button>
        </div>
        <div className={styles.column}>
          <h2>Upgrades</h2>
          {UPGRADES_DATA.map((upgrade) => (
            // TODO: Update whenever UpgradeSection's Props type is modified
            <UpgradeSection key={upgrade.id} brbs={brbs} upgrade={upgrade} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game
