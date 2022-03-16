import { useEffect } from "react"

const TICK = 1000

const Game = () => {
  /* TODO Use useState to create a BRBs counter */

  // This runs a function every TICK milliseconds
  useEffect(() => {
    const ticker = setInterval(() => {
      /* TODO Every tick the freshmen should make us money */
      console.log("this function runs every tick!")
    }, TICK)
    return clearInterval(ticker)
  }, [])

  return (
    <div>
      <h2>
        {/* TODO Make this number change! */}
        I have [TODO x] BRBs.
      </h2>

      {/* TODO Make this button add 1 to your brb count when clicked */}
      <button>
        Acquire BRB
      </button>

      <div>
        <h3>Hire Freshman (1 BRB/tick)</h3>
        <p>Number of freshmen: 0</p>
        <p>Price: 10 BRBs</p>
        {/* TODO Make this button do something */}
        <button onClick={() => console.log("[TODO hire a freshman]")}>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Game
