import Header from "./components/Footer/Header/Header";
import "./App.css"
import Aos from "aos";
import {useEffect} from "react";
import Hero from "./components/Footer/hero/Hero";
import Portfolio from "./components/Footer/hero/Portfolio";
import Conatact from "./components/Footer/hero/Conatact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Footer/hero/Skills";
import About from "./components/Footer/hero/About";
import { Context } from "./context/Context";
function App() {

  useEffect(() => {
    Aos.init();
  });

  return (
  <Context>
      <div >
      <Header/>
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Conatact />
        
      </main>
      <Footer />
    </div>
  </Context>
  );
}

export default App;
      