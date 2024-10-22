// src/App.jsx
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ParticlesComponent from "./components/particles";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <ParticlesComponent />
      <div className="relative z-10 flex justify-center min-h-screen ">
        <div className="w-full max-w-5xl min-h-screen p-6 bg-gray-900 bg-opacity-90">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
