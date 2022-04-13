import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';

function App() {

  // var today = new Date()
  // var current = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
