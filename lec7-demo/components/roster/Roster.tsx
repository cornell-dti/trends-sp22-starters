import { useEffect, useState } from "react"
import { ClubMember } from "../../types"
import RosterAddForm from "./RosterAddForm"
import RosterItem from "./RosterItem"

const Roster = () => {
  const [roster, setRoster] = useState<ClubMember[] | null>(null)

  const fetchRoster = () => {
    const dummyData: ClubMember[] = [
      {
        name: "Enoch",
        major: "Astrology",
        graduationYear: 2023,
      },
    ]
    setRoster(dummyData)
  }

  useEffect(fetchRoster, [])

  return (
    <>
      <p>This is the Trends club.</p>
      <p>It is the coolest club ever! Because it has the coolest people.</p>
      {roster && roster.map((member) => <RosterItem member={member} />)}
      <RosterAddForm />
    </>
  )
}

export default Roster
