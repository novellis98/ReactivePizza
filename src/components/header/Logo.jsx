import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo({ variant }) {
  return (
    <div className={styles[variant]}>
      <NavLink to="/">
        <img src=".././assets/ReactivePizza.png" alt="Logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
