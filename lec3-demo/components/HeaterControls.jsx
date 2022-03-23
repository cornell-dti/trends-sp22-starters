import styles from "../styles/Controls.module.css";

//TODO: what props do i pass into here?
export default ({}) => {
  return (
    <div className={styles.heatControl}>
      <h2> Heater controls</h2>
      <input type="range" min="0" max="100" value={50} id="heater"></input>{" "}
      {/* //TODO:show the heat level here */}
      <span>{50}</span>
    </div>
  );
};
