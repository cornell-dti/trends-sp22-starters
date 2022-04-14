import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ClubMemberWithId } from "../../types"
import { db } from "../../util/firebase"
import RosterAddForm from "./RosterAddForm"
import RosterItem from "./RosterItem"

const Roster = () => {
  const [roster, setRoster] = useState<ClubMemberWithId[] | null>(null)

  const fetchRoster = () => {
    const rosterRef = collection(db, "roster")
    const rosterQuery = query(rosterRef)
    getDocs(rosterQuery).then((snapshot) => {
      const rosterData = snapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as ClubMemberWithId)
      )
      setRoster(rosterData)
    })
  }

  useEffect(fetchRoster, [])

  return (
    <>
      <p>This is the Trends club.</p>
      <p>It is the coolest club ever! Because it has the coolest people.</p>
      {roster?.map((member) => (
        <RosterItem member={member} refreshData={fetchRoster} />
      ))}
      <RosterAddForm refreshData={fetchRoster} />
    </>
  )
}

export default Roster
