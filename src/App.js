import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
export const providerFahim = createContext();
function App() {
  const [count, setCount] = useState(0);
  const handleCategory = (category) => {
    setCount(category);
  };

  return (
    <providerFahim.Provider value={count}>
      <h3>This is App: </h3>
      <button onClick={() => handleCategory("electronics")}>electronics</button>
      <button onClick={() => handleCategory("jewelery")}>jewelery</button>
      <button onClick={() => handleCategory("women clothing")}>
        women clothing
      </button>
      <button onClick={() => handleCategory("men clothing")}>
        men clothing
      </button>

      <Header></Header>
      <Home></Home>
    </providerFahim.Provider>
  );
}

export default App;
