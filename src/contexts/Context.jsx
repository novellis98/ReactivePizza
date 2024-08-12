import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  const [pizze, setPizze] = useState([]);
  useEffect(function () {
    fetch(`../data/pizze.json`)
      .then((res) => res.json())
      .then((data) => setPizze(data));
  }, []);
  return <PostContext.Provider value={pizze}>{children}</PostContext.Provider>;
}
function UsePost() {
  const context = useContext(PostContext);
  if (context === undefined) return;
  return context;
}
export { PostProvider, UsePost };
