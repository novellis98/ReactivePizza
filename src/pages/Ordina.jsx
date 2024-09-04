import { useNavigate } from "react-router-dom";
import styles from "./Ordina.module.scss";
import PizzaSvg from "../components/svg/PizzaSvg";
import OfferteSvg from "../components/svg/OfferteSvg";

function Ordina() {
  const navigate = useNavigate();

  const handleNavigateToOfferte = () => {
    navigate("/offerte");
  };
  const handleNavigateToMenuFree = () => {
    navigate("/menu-free");
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu_free} onClick={handleNavigateToMenuFree}>
        <h1>scelta libera</h1>
        <PizzaSvg />
        <p>Ordina tutto ciò che desideri</p>
      </div>
      <div className={styles.offerte} onClick={handleNavigateToOfferte}>
        <h1>Offerte</h1>
        <OfferteSvg />
        <p>
          Abbiamo menu perfetti per ogni occasione. Scegli quello che fa al caso
          tuo!
        </p>
      </div>
    </div>
  );
}

export default Ordina;
