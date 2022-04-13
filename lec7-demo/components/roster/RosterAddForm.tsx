import { useEffect, useState } from "react"
import { ClubMember } from "../../types"
import RosterItem from "./RosterItem"

const RosterAddForm = () => {
  const [nameInput, setNameInput] = useState("")
  const [netIDInput, setNetIDInput] = useState("")
  const [majorInput, setMajorInput] = useState("")
  const [graduationYearInput, setGraduationYearInput] = useState(0)

  const handleAdd = () => {
    setNameInput("")
    setNetIDInput("")
    setMajorInput("")
  }

  return (
    <div>
      <h2>Add To Roster!</h2>
      <label>Name:</label>
      <br />
      <input
        type="text"
        id="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <br />
      <label>NetID:</label>
      <br />
      <input
        type="text"
        id="netid"
        value={netIDInput}
        onChange={(e) => setNetIDInput(e.target.value)}
      />
      <br />
      <label>Major:</label>
      <br />
      <input
        type="text"
        id="major"
        value={majorInput}
        onChange={(e) => setMajorInput(e.target.value)}
      />
      <br />
      <label>Graduation Year:</label>
      <br />
      <select
        value={graduationYearInput}
        onChange={(e) => setGraduationYearInput(Number(e.target.value))}
      >
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
      </select>
      <br />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default RosterAddForm
