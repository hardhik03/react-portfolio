import React from 'react';
import './index.css';
import CircuitBackground from './components/CircuitBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import ProjectsSection from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-purple-600'>
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <CircuitBackground />
      </div>
      {/* Main Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <ProjectsSection/>
        <Contact />
        <Footer />  
      </div>
    </div>
  );
}

export default App;