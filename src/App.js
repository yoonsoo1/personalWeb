import './App.css';
import Introduction from './components/Introduction';
import MoreMe from './components/MoreMe';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Introduction />
      <MoreMe />
      {/* <Experiences /> */}
    </div>
  );
}

export default App;
