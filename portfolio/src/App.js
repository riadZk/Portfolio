import Header from "./components/Header/Header";
import "./App.css"
import Aos from "aos";
import {useEffect} from "react";
import Hero from "./components/main/Hero";
import Portfolio from "./components/main/Portfolio";
import Conatact from "./components/main/Conatact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/main/Skills";
import About from "./components/main/About";
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
      