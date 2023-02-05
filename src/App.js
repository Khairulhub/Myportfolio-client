// import logo from './logo.svg';
// import './App.css';

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
