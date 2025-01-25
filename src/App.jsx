import React from 'react';
import { XPProvider } from './XPContext'; // Import the XPProvider
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <XPProvider>  {/* Wrap the whole app with XPProvider */}
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Achievements />
      <Contact />
      <Footer />
    </XPProvider>
  );
}

export default App;
