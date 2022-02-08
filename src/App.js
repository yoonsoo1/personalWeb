import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction'
import MoreMe from './components/MoreMe'

function App() {
  return (
    <div className="container">
      <Introduction></Introduction>
      <MoreMe></MoreMe>
    </div>
  );
}

export default App;
