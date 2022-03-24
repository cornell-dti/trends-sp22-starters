import Image from "next/image"
import styles from "../styles/DisplayContainer.module.css"

export default ({ coolerValue, heaterValue }) => {
  const shakeIfLevel = (level) => {
    if (level >= 66) {
      return "shake-hard"
    } else if (level >= 33) {
      return "shake"
    } else if (level > 0) {
      return "shake-little"
    }
    return ""
  }

  return (
    <div className={styles.imageContainer}>
      <Image
        className={`shake-constant ${shakeIfLevel(coolerValue)}`}
        src="/ac.jpg"
        width="250px"
        height="250px"
      ></Image>
      {/* {console.log(coolerLevel, heaterLevel, coolerLevel > heaterLevel)} */}
      {/* TODO: FILL ME OUT!! */}

      {coolerValue > heaterValue ? (
        <Image src="/freezing.jpeg" width="250px" height="250px"></Image>
      ) : (
        <Image src="/hot.png" width="250px" height="250px"></Image>
      )}
      {/* <Image
        src={coolerValue > heaterValue ? "/freezing.jpeg" : "/hot.png"}
        width="250px"
        height="250px"
      ></Image> */}

      <Image
        className={`shake-constant ${shakeIfLevel(heaterValue)}`}
        src="/heater.jpg"
        width="250px"
        height="250px"
      ></Image>
    </div>
  )
}
