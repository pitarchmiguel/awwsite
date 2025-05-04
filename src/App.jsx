import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import HowItWork from './components/HowItWork';
import Services from './components/Services';
import './App.css';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <HowItWork />
      <Projects />
      <Metrics />
    </>
  );
}

export default App;
