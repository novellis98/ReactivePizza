import { useState } from "react";
import styles from "./IconMenu.module.scss";
function IconMenu({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen); // Passa lo stato al genitore se necessario
  };

  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}
export default IconMenu;
// import React, { useState } from 'react';
// import HamburgerIcon from './HamburgerIcon';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = (open) => {
//     setIsMenuOpen(open);
//   };

//   return (
//     <div>
//       <header>
//         <HamburgerIcon onClick={handleMenuToggle} />
//         {isMenuOpen && <nav> {/* Menu content here */} </nav>}
//       </header>
//     </div>
//   );
// }

// export default App;
