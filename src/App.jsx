import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import Footer from './components/contact/Contact'
import Whatsapp from "./components/messages/whatsapp";
import Themes from "./components/themes/Themes";

const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <main className="sections">
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Certificates/>
        <Footer/>
        <Whatsapp/>
        <Themes/>
      </main>
    </div>
  )
}

export default App;


/**
 * import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Layout from './app/Layout'
import Footer from './components/contact/Contact'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Layout/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
 */