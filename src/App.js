import './App.css';
import Introduction from './components/Introduction';
import MoreMe from './components/MoreMe';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Introduction />
      <MoreMe />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
