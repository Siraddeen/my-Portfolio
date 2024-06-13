import React from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SocialLink } from "./components/SocialLink";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contacts } from "./components/Contacts";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contacts />

      <SocialLink />
    </div>
  );
}

export default App;
