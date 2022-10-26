import './App.css';
import Introduction from './components/Introduction';
import MoreMe from './components/MoreMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Introduction/>
      <div className="second-page">
        <MoreMe/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
