import './App.css';
import Introduction from './components/Introduction';
import MoreMe from './components/MoreMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Introduction/>
      <MoreMe/>
      <Footer/>
    </div>
  );
}

export default App;
