import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Bean from './components/Beans';
import Brew  from './components/Brew';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Bean />
      <Brew />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      
    </div>
    
  );
}

export default App;
