import { useState } from "react"
import { Upgrade } from "../../types"

type Props = {
  brbs: number
  upgrade: Upgrade
}

const UpgradeSection = ({
  brbs,
  upgrade: { name, basePrice, brbsPerSecond },
}: Props) => {
  /** TODO: This state needs to be lifted up! */
  const [purchasedCount, setPurchasedCount] = useState(0)

  const price = basePrice // TODO: Make price increase as you purchase more

  const buyUpgrade = () => {
    if (brbs < price) return
    // TODO: After we lift this state up, we need to pass it down
    setPurchasedCount((c) => c + 1)
    // TODO: What is missing here?
  }

  return (
    <div>
      <h3>
        {name} [{purchasedCount}]
      </h3>
      <p>Perk: {brbsPerSecond} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      <button onClick={buyUpgrade}>Buy</button>
    </div>
  )
}

export default UpgradeSection
