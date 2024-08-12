import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [showListItemsPizze, setShowListItemsPizze] = useState(false);
  function handleShowListItemsPizze() {
    if (showListItemsPizze === false) setShowListItemsPizze(true);
    else setShowListItemsPizze(false);
  }
  const [showListItemsPatatine, setShowListItemsPatatine] = useState(false);
  function handleShowListItemsPatatine() {
    if (showListItemsPatatine === false) setShowListItemsPatatine(true);
    else setShowListItemsPatatine(false);
  }
  const [showListItemsBevande, setShowListItemsBevande] = useState(false);
  function handleShowListItemsBevande() {
    if (showListItemsBevande === false) setShowListItemsBevande(true);
    else setShowListItemsBevande(false);
  }

  const [showOrderPromo, setShowOrderPromo] = useState(false);
  function HandleShowPromo() {
    if (showOrderPromo === false) setShowOrderPromo(true);
    else setShowOrderPromo(false);
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
        showListItemsPizze,
        showListItemsPatatine,
        showListItemsBevande,
        setShowListItemsPizze,
        setShowListItemsPatatine,
        setShowListItemsBevande,
        handleShowListItemsPizze,
        handleShowListItemsPatatine,
        handleShowListItemsBevande,
        showOrderPromo,
        setShowOrderPromo,
        HandleShowPromo,
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
