import './App.css';
import Header from './pages/Header';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Today from './pages/Today';


function App() {
  return (

    
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Projects/>
        <AboutMe/>
        <Skills/>
        <Today/>
      </main>

    </div>
  );
}

export default App;
