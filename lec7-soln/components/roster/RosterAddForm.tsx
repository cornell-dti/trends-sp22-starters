import { collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { ClubMember } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  refreshData: () => void
}

const RosterAddForm = ({ refreshData }: Props) => {
  const [nameInput, setNameInput] = useState("")
  const [majorInput, setMajorInput] = useState("")
  const [graduationYearInput, setGraduationYearInput] = useState(0)

  const handleAdd = () => {
    const data: ClubMember = {
      name: nameInput,
      major: majorInput,
      graduationYear: graduationYearInput,
    }
    const rosterRef = collection(db, "roster")
    setDoc(doc(rosterRef), data).then(refreshData)

    setNameInput("")
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
