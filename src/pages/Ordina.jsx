import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Ordina.module.scss";
function Ordina() {
  const navigate = useNavigate();

  const handleNavigateToOfferte = () => {
    navigate("/ordina/offerte");
  };
  const handleNavigateToMenuFree = () => {
    navigate("/ordina/menu-free");
  };
  const isOfferteOrMenuFree =
    location.pathname.includes("/ordina/offerte") ||
    location.pathname.includes("/ordina/menu-free");
  return (
    <>
      {!isOfferteOrMenuFree && (
        <div className={styles.container}>
          <div className={styles.menu_free} onClick={handleNavigateToMenuFree}>
            <h1>scelta libera</h1>
            <p>Ordina tutto ciò che desideri</p>
          </div>
          <div className={styles.offerte} onClick={handleNavigateToOfferte}>
            <h1>Offerte</h1>
            <p>
              Abbiamo menu perfetti per ogni occasione. Scegli quello che fa al
              caso tuo!
            </p>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Ordina;
