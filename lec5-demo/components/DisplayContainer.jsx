import Image from "next/image";
import styles from "../styles/DisplayContainer.module.css";

//TODO: what props do i pass into here?
export default ({}) => {
  const shakeIfLevel = (level) => {
    if (level >= 66) {
      return "shake-hard";
    } else if (level >= 33) {
      return "shake";
    } else if (level > 0) {
      return "shake-little";
    }
    return "";
  };

  return (
    <div className={styles.imageContainer}>
      <img
        //TODO: make it shake~~
        className={`shake-constant ${shakeIfLevel(0)}`}
        src="/ac.jpg"
        width="250px"
        height="250px"
      ></img>
      {/* {console.log(coolerLevel, heaterLevel, coolerLevel > heaterLevel)} */}
      {/* TODO: FILL ME OUT!! */}
      {false ? (
        <Image src="/freezing.jpeg" width="250px" height="250px"></Image>
      ) : (
        <Image src="/hot.png" width="250px" height="250px"></Image>
      )}

      <Image
        //TODO: make it shake~~

        className={`shake-constant ${shakeIfLevel(0)}`}
        src="/heater.jpg"
        width="250px"
        height="250px"
      ></Image>
    </div>
  );
};
