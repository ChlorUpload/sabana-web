import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "routes/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
