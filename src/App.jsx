import React from "react";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:8rem_6rem]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-40 py-10">
          <Navbar />
        </div>
        
        <Hero />
        <About />
        <Tech/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
