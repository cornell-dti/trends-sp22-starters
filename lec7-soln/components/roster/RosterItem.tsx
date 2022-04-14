import { collection, deleteDoc, doc } from "firebase/firestore"
import { ClubMemberWithId } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  member: ClubMemberWithId
  refreshData: () => void
}

// RosterItem takes in a prop called "member", which we destructure immediately
const RosterItem = ({
  member: { id, name, major, graduationYear },
  refreshData,
}: Props) => {
  const handleRemove = () => {
    const rosterRef = collection(db, "roster")
    const docRef = doc(rosterRef, id)
    deleteDoc(docRef).then(refreshData)
  }
  return (
    <div>
      <h3>
        {name} <button onClick={handleRemove}>Remove Me 💀</button>
      </h3>
      <p>
        Major: <strong>{major}</strong>
      </p>
      <p>
        Graduation Year: <strong>{graduationYear}</strong>
      </p>
    </div>
  )
}

export default RosterItem
