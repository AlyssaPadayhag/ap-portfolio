import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Home() {
    return(
        <div>
            <header className="App App-header">
                <h1>Alyssa Padayhag</h1>
            </header>
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}

export default Home;