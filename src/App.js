import React from "react";
import {Link} from "react-router-dom";
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

    
    <Link to="/notes" target="_blank"> Notes </Link>
    </div>
  )
}

export default App;