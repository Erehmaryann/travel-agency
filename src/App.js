import Experience from './components/Experience/Experience';
import HeroContainer from './components/HeroContainer/HeroContainer';
import Resort from './components/Resort/Resort';
import Passes from './components/Passes/Passes';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroContainer />
      <Experience />
      <Resort />
      <Passes />
      <Footer />
    </div>
  );
}

export default App;
