import "./App.scss";

import React from "react";
import {Routes, Route} from "react-router-dom";
import Notes from "./Notes";
import Home from "./Home";


function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
    </Routes>
    </div>
  )
}

export default App;