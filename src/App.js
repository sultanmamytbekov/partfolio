import { Route, Routes } from "react-router-dom";
import Header from "./conpanents/Header/Header";
import Abaut from "./conpanents/Abaut/Abaut";
import { useEffect, useState } from "react";
import Home from "./conpanents/Home/Home";

function App() {
  const [num, setNum] = useState(-1);
  const [menuItems, setMenuItems] = useState([]);
  const addMenuItem = (item) => {
    setMenuItems([...menuItems, item]);
  }
  
// console.log(menuItems);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Abaut num={num} setNum={setNum} onAddMenuItem={addMenuItem} />} />
        <Route path="/Home" element={<Home num={num} setNum={setNum} home={menuItems} />} />
      </Routes>
    </div>
  );
}

export default App;
