import React, { useState } from "react";
import "./App.css";
import { MyGlobalContext } from ".//components/MyGlobalContext";
import Home from "./components/Home";
import getCopy from "./components/Content";
import About from "./components/About";
import Tab1 from "./components/Tab1";
function App() {
  const [copy, setCopy] = useState<string>(getCopy("Admin initial value"));
  const [risk, setRisk] = useState<string>("default risk");
  return (
    <MyGlobalContext.Provider value={{ copy, setCopy,risk,setRisk }}>
      <Home />
      <About />
      <Tab1/>
    </MyGlobalContext.Provider>
  );
}
export default App;
