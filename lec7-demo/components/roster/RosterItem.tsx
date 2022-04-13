import { ClubMember } from "../../types"

type Props = {
  member: ClubMember
}

// RosterItem takes in a prop called "member", which we destructure immediately
const RosterItem = ({
  member: { name, major, graduationYear },
}: Props) => {
  const handleRemove = () => {
    console.log("do nothing")
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
