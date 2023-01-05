import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Home() {
    return(
        <div>
            <header className="App-header">
                <h1>Alyssa Padayhag</h1>
            </header>
        <div id="main-div">
            <AboutMe />
            <Skills />
            <Projects />
        </div>
        </div>
    );
}

export default Home;