// import logo from './logo.svg';
// import './App.css';


import Navbar from "./Components/Navbar";


import SequreForm from "./Components/Add/SequreForm";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
       
        <Route path="/sequre" element={<SequreForm />} />
      </Routes>
     

    </div>
  );
}

export default App;
