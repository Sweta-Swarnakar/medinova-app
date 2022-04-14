import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/HomePage';

import { Nav } from './components/Nav';
import { MainRoutes } from './Routes/MainRoutes';


function App() {

  // var today = new Date()
  // var current = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div className="App">
      <Nav/>
    
      <MainRoutes/>
    </div>
  );
}

export default App;
