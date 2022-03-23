import { useState } from "react"
import { Upgrade } from "../../types"

// TODO: Modify the prop type as you see fit
type Props = {
  upgrade: Upgrade
  brbs: number
}

const UpgradeSection = ({
  upgrade,
  brbs,
}: Props) => {
  /** TODO: This state needs to be lifted up! */
  const [purchasedCount, setPurchasedCount] = useState(0)

  const price = upgrade.basePrice // TODO: Make price increase as you purchase more

  const buyUpgrade = () => {
    if (brbs < price) return
    // TODO: After we lift this state up, we need to pass it down
    setPurchasedCount((c) => c + 1)
    // TODO: What is missing here?
  }

  return (
    <div>
      <h3>
        {upgrade.name} [{purchasedCount}]
      </h3>
      <p>Effect: {upgrade.brbsPerSecond} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      <button onClick={buyUpgrade}>Buy</button>
    </div>
  )
}

export default UpgradeSection
