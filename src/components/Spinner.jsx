import styles from "./Spinner.module.scss";

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.loader}></div>
  </div>
);

export default Spinner;
