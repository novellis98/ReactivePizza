import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [visibleComponent, setVisibleComponent] = useState("");

  const showPizze = () => {
    if (visibleComponent !== "pizze") {
      setVisibleComponent("pizze");
    } else {
      setVisibleComponent("");
    }
  };
  const showPatatine = () => {
    if (visibleComponent !== "patatine") {
      setVisibleComponent("patatine");
    } else {
      setVisibleComponent("");
    }
  };
  const showBevande = () => {
    if (visibleComponent !== "bevande") {
      setVisibleComponent("bevande");
    } else {
      setVisibleComponent("");
    }
  };

  const [showPopupOrder, setShowPopupOrder] = useState(false);
  function HandlePopupOrder() {
    //toggle open and close popup
    if (showPopupOrder === false) setShowPopupOrder(true);
    else setShowPopupOrder(false);
    setVisibleComponent("");
  }

  const [pizze, setPizze] = useState([]);
  useEffect(function () {
    fetch(`../data/pizze.json`)
      .then((res) => res.json())
      .then((data) => setPizze(data));
  }, []);
  const [patatine, setPatatine] = useState([]);
  useEffect(function () {
    fetch(`../data/patatine.json`)
      .then((res) => res.json())
      .then((data) => setPatatine(data));
  }, []);
  const [bevande, setBevande] = useState([]);
  useEffect(function () {
    fetch(`../data/bevande.json`)
      .then((res) => res.json())
      .then((data) => setBevande(data));
  }, []);
  return (
    <PostContext.Provider
      value={{
        pizze,
        patatine,
        bevande,
        visibleComponent,
        setVisibleComponent,
        showPizze,
        showPatatine,
        showBevande,
        showPopupOrder,
        setShowPopupOrder,
        HandlePopupOrder,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
function UsePost() {
  const context = useContext(PostContext);
  if (context === undefined) return;
  return context;
}
export { PostProvider, UsePost };
