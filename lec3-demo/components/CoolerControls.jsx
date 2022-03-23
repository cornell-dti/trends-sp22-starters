import styles from "../styles/Controls.module.css";

//TODO: what props do i pass into here?
export default ({}) => {
  return (
    <div className={styles.coldControl}>
      <h2> Cooler controls</h2>
      <input type="range" min="0" max="100" value={50} id="cooler"></input>{" "}
      {/* //TODO:show the cooling level here */}
      <span>{50}</span>
    </div>
  );
};
