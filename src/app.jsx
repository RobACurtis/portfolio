import React from 'react';
import Navbar from './components/navbar';
import About from './components/about-me';
import Projects from './components/projects';
import Contact from './components/contact';
import Tools from './components/tools';

export default function App() {
  return (
    <>
      < Navbar />
      < About />
      < Projects />
      < Tools />
      < Contact />
    </>
  );
}
