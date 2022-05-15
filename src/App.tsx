import React, { useState } from "react";
import "./App.css";
import { MyGlobalContext } from ".//components/MyGlobalContext";
import Home from "./components/Home";
import getCopy from "./components/Content";
import About from "./components/About";
function App() {
  const [copy, setCopy] = useState<string>(getCopy("Admin"));
  return (
    <MyGlobalContext.Provider value={{ copy, setCopy }}>
      <Home />
      <About />
    </MyGlobalContext.Provider>
  );
}
export default App;
