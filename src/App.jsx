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
