import "./App.scss";

import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";


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