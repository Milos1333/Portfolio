import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Sevices from "./Components/Services/Sevices.jsx";
import MyWork from "./Components/MyWork/MyWork.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Sevices />
        <MyWork />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
